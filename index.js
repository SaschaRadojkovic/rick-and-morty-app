console.clear();

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

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    cardContainer.innerHTML = "";
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await response.json();
    const allCharacters = data.results;

    allCharacters.forEach((character) => {
      const newCard = createCharacterCard(character);

      cardContainer.append(newCard);
    });
    if (response.ok) {
      console.log(allCharacters);
      allCharacters.forEach((character) => {
        const newCard = createCharacterCard(character);
        cardContainer.append(newCard);
      });
    } else {
      console.log("An error ocurred");
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

console.log(fetchCharacters());

const newCard = createCharacterCard();
cardContainer.append(newCard);
document.body.appendChild(cardContainer);

// document.body.append(newCard);
