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
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=2"
  );
  const data = await response.json();

  data.results.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("h2");
    name.textContent = character.name;

    const image = document.createElement("img");
    image.src = character.image;
    image.setAttribute("alt", character.name);

    const info = document.createElement("dl");
    info.textContent = card.appendChild(name);
    card.appendChild(image);

    cardContainer.appendChild(card);
  });
}

console.log(fetchCharacters());

const newCard = createCharacterCard();
cardContainer.append(newCard);
// document.body.append(newCard);
