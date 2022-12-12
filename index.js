console.clear();
import { fetchPage } from "./components/api.js";
import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const searchInput = document.querySelector('[data-js="search-input"]');
// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  console.log(searchQuery);
  page = 1;
  fetchCharacters();
});

async function fetchCharacters() {
  try {
    cardContainer.innerHTML = "";
    const { data, response } = await fetchPage(page, searchQuery);
    const allCharacters = data.results;

    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
    allCharacters.forEach((character) => {
      const newCard = createCharacterCard(character);
      cardContainer.append(newCard);
    });
    if (response.ok) {
      // console.log(allCharacters);
      allCharacters.forEach((character) => {
        const newCard = createCharacterCard(character);
        cardContainer.append(newCard);
      });
    } else {
      console.log("An error occurred");
    }
  } catch (error) {
    console.log(error);
  }
}
nextButton.addEventListener("click", () => {
  page++;

  fetchCharacters();
});
prevButton.addEventListener("click", () => {
  if (page !== 1) {
    page--;
  }

  fetchCharacters();
});

fetchCharacters();
