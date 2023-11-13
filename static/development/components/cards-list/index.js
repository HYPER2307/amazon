import "./index.scss";
import data from "../../../source/data/data.json";

const cardsWrapper = document.querySelector('.cards-wrapper');

data.forEach(el => {
  cardsWrapper.insertAdjacentHTML("beforeend", `
      <div class="card">
        <div class="card__img-wrapper">
          <img src="${el.cardImg}" alt="${el.name.toLowerCase()}" />
        </div>

        <p class="card__category">
          ${el.name}
        </p>
      </div>
    `);
});

const card = document.querySelector('.card');
cardsWrapper.style.width = data.length * 120 + 'px';

