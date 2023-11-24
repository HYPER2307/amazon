import Swiper, { Navigation } from "swiper";
import 'swiper/css/navigation';
import "./index.scss";

new Swiper('.main__swiper-container', {
  modules: [Navigation],
  navigation: {
    prevEl: '.swiper-btn-prev',
    nextEl: '.swiper-btn-next'
  },
  loop: true,
});

new Swiper('.main__categories-swiper', {
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    prevEl: '.category-btn-prev',
    nextEl: '.category-btn-next'
  },
  breakpoints: {
    1230: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  }
});
