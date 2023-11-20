import "./index.scss";

new Swiper('.main__swiper-container', {
  navigation: {
    prevEl: '.swiper-btn-prev',
    nextEl: '.swiper-btn-next'
  },
  loop: true,
});

new Swiper('.main__categories-swiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    prevEl: '.category-btn-prev',
    nextEl: '.category-btn-next'
  },
  breakpoints: {
    1230: {
      slidesPerView: 7,
      spaceBetween: 30,
    }  
  }
});
