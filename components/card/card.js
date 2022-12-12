export function createCharacterCard(miObject) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = `<div class="card__image-container">
    <img
      class="card__image"
      src="${miObject.image}"
      alt="${miObject.name}"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${miObject.name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${miObject.status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${miObject.type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${miObject.episode.length}</dd>
    </dl>
  </div>`;
  return newCard;
}
