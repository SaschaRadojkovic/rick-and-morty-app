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
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=2");
    const data = await response.json();
    const allCharacters = data.results;
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

console.log(fetchCharacters());

const newCard = createCharacterCard();
cardContainer.append(newCard);
