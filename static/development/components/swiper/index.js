import "./index.scss";
import data from "../../../source/data/data.json";

new Swiper('.main__swiper-container', {
  navigation: {
    prevEl: '.swiper-btn-prev',
    nextEl: '.swiper-btn-next'
  },
  loop: true,
});