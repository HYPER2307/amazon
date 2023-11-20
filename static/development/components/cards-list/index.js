import "./index.scss";
import data from "../../../source/data/data.json";
import { renderPreparedGoods } from "../products";

const cardsWrapper = document.querySelector('.cards-list');

data.forEach(el => {
  cardsWrapper.insertAdjacentHTML("beforeend", `
      <div class="swiper-slide">
        <div class="card" data-category="${el.id}"}>
          <div class="card__img-wrapper">
            <img src="${el.cardImg}" alt="${el.name.toLowerCase()}" />
          </div>
          
          <p class="card__category">
            ${el.name}
          </p>
        </div>
      <div/>
    `);
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener("click", () => renderPreparedGoods(card.dataset.category))
})

