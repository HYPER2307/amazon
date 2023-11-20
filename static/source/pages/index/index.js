/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../components/button/index.js":
/*!*************************************!*\
  !*** ../components/button/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/button/index.scss");


/***/ }),

/***/ "../components/cards-list/index.js":
/*!*****************************************!*\
  !*** ../components/cards-list/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/cards-list/index.scss");
/* harmony import */ var _source_data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../source/data/data.json */ "../../source/data/data.json");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products */ "../components/products/index.js");



var cardsWrapper = document.querySelector('.cards-list');
_source_data_data_json__WEBPACK_IMPORTED_MODULE_1__.forEach(function (el) {
  cardsWrapper.insertAdjacentHTML("beforeend", "\n      <div class=\"swiper-slide\">\n        <div class=\"card\" data-category=\"".concat(el.id, "\"}>\n          <div class=\"card__img-wrapper\">\n            <img src=\"").concat(el.cardImg, "\" alt=\"").concat(el.name.toLowerCase(), "\" />\n          </div>\n          \n          <p class=\"card__category\">\n            ").concat(el.name, "\n          </p>\n        </div>\n      <div/>\n    "));
});
var cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    return (0,_products__WEBPACK_IMPORTED_MODULE_2__.renderPreparedGoods)(card.dataset.category);
  });
});

/***/ }),

/***/ "../components/container/index.js":
/*!****************************************!*\
  !*** ../components/container/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/container/index.scss");


/***/ }),

/***/ "../components/index/index.js":
/*!************************************!*\
  !*** ../components/index/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/index.js */ "../components/button/index.js");
/* harmony import */ var _container_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/index.js */ "../components/container/index.js");
/* harmony import */ var _menu_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/index.js */ "../components/menu/index.js");
/* harmony import */ var _swiper_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swiper/index.js */ "../components/swiper/index.js");
/* harmony import */ var _cards_list_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards-list/index.js */ "../components/cards-list/index.js");
/* harmony import */ var _products_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products/index.js */ "../components/products/index.js");
/* harmony import */ var _page_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page/index.js */ "../components/page/index.js");
/* harmony import */ var _title_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../title/index.js */ "../components/title/index.js");
/* harmony import */ var _stars_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stars/index.js */ "../components/stars/index.js");
/* harmony import */ var _button_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../button/index.scss */ "../components/button/index.scss");
/* harmony import */ var _container_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../container/index.scss */ "../components/container/index.scss");
/* harmony import */ var _menu_index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../menu/index.scss */ "../components/menu/index.scss");
/* harmony import */ var _swiper_index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../swiper/index.scss */ "../components/swiper/index.scss");
/* harmony import */ var _cards_list_index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cards-list/index.scss */ "../components/cards-list/index.scss");
/* harmony import */ var _products_index_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../products/index.scss */ "../components/products/index.scss");
/* harmony import */ var _page_index_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../page/index.scss */ "../components/page/index.scss");
/* harmony import */ var _title_index_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../title/index.scss */ "../components/title/index.scss");
/* harmony import */ var _stars_index_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../stars/index.scss */ "../components/stars/index.scss");
//js










//scss










/***/ }),

/***/ "../components/menu/index.js":
/*!***********************************!*\
  !*** ../components/menu/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/menu/index.scss");

window.addEventListener('hashchange', function () {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

/***/ }),

/***/ "../components/page/index.js":
/*!***********************************!*\
  !*** ../components/page/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/page/index.scss");


/***/ }),

/***/ "../components/products/index.js":
/*!***************************************!*\
  !*** ../components/products/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPreparedGoods: () => (/* binding */ renderPreparedGoods)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/products/index.scss");
/* harmony import */ var _source_data_products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../source/data/products.json */ "../../source/data/products.json");


var productsList = document.querySelector('.products__list');
var renderPreparedGoods = function renderPreparedGoods() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
  productsList.innerHTML = '';
  var preparedProducts = category === 'all' ? _source_data_products_json__WEBPACK_IMPORTED_MODULE_1__ : _source_data_products_json__WEBPACK_IMPORTED_MODULE_1__.filter(function (product) {
    return product.category === category;
  });
  preparedProducts.length !== 0 ? preparedProducts.forEach(function (product) {
    var productItemContainer = document.createElement('div');
    productItemContainer.className = 'products__item-container';
    productItemContainer.insertAdjacentHTML('beforeend', "\n          <div class=\"products__item\">\n            <div class=\"products__item-img\">\n              <img src=\"".concat(product.img, "\" alt=\"").concat(product.category, "\">\n            </div>\n    \n            <h5 class=\"products__item-category\" data-category=\"Men Fashion\">\n              \n            </h5>\n    \n            <h4 class=\"products__item-title\">\n              ").concat(product.title, "\n            </h4>\n    \n            <div class=\"products__item-wrapper\">\n              <div class=\"products__item-price\">\n                $").concat(product.price, "\n              </div>\n    \n              <div class=\"products__item-rating stars-container\">\n                <input type=\"radio\" id=\"rate-5\" name=\"rate\">\n                <label class=\"star fas fa-star\" for=\"rate-5\"></label>\n                <input type=\"radio\" id=\"rate-4\" name=\"rate\">\n                <label class=\"star fas fa-star\" for=\"rate-4\"></label>\n                <input type=\"radio\" id=\"rate-3\" name=\"rate\">\n                <label class=\"star fas fa-star\" for=\"rate-3\"></label>\n                <input type=\"radio\" id=\"rate-2\" name=\"rate\">\n                <label class=\"star fas fa-star\" for=\"rate-2\"></label>\n                <input type=\"radio\" id=\"rate-1\" name=\"rate\">\n                <label class=\"star fas fa-star\" for=\"rate-1\"></label>\n              </div>\n            </div>\n    \n            <div class=\"products__item-button-container\">\n              <button class=\"button button--blue\">\n                Add to Cart\n              </button>\n    \n              <button class=\"button button--transparent\">\n                Quick view\n              </button>\n            </div>\n          </div>\n        "));
    productsList.append(productItemContainer);
  }) : productsList.insertAdjacentHTML("beforeend", "\n        <p class=\"products__message\">\n          No products available \n        <p/>\n      ");
};
renderPreparedGoods();

/***/ }),

/***/ "../components/stars/index.js":
/*!************************************!*\
  !*** ../components/stars/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/stars/index.scss");


/***/ }),

/***/ "../components/swiper/index.js":
/*!*************************************!*\
  !*** ../components/swiper/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/swiper/index.scss");

new Swiper('.main__swiper-container', {
  navigation: {
    prevEl: '.swiper-btn-prev',
    nextEl: '.swiper-btn-next'
  },
  loop: true
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
      spaceBetween: 30
    }
  }
});

/***/ }),

/***/ "../components/title/index.js":
/*!************************************!*\
  !*** ../components/title/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/title/index.scss");


/***/ }),

/***/ "../modules/footer/index.js":
/*!**********************************!*\
  !*** ../modules/footer/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../modules/footer/index.scss");


/***/ }),

/***/ "../modules/header/index.js":
/*!**********************************!*\
  !*** ../modules/header/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../modules/header/index.scss");


/***/ }),

/***/ "../modules/index/index.js":
/*!*********************************!*\
  !*** ../modules/index/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/index.js */ "../modules/footer/index.js");
/* harmony import */ var _header_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/index.js */ "../modules/header/index.js");
/* harmony import */ var _components_container_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/container/index.js */ "../components/container/index.js");
/* harmony import */ var _components_menu_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/menu/index.js */ "../components/menu/index.js");
/* harmony import */ var _main_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main/index.js */ "../modules/main/index.js");
/* harmony import */ var _components_button_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/button/index.js */ "../components/button/index.js");
/* harmony import */ var _components_swiper_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/swiper/index.js */ "../components/swiper/index.js");
/* harmony import */ var _header_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/index.scss */ "../modules/header/index.scss");
/* harmony import */ var _footer_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/index.scss */ "../modules/footer/index.scss");
/* harmony import */ var _components_container_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/container/index.scss */ "../components/container/index.scss");
/* harmony import */ var _components_menu_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/menu/index.scss */ "../components/menu/index.scss");
/* harmony import */ var _main_index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../main/index.scss */ "../modules/main/index.scss");
/* harmony import */ var _components_button_index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/button/index.scss */ "../components/button/index.scss");
/* harmony import */ var _components_swiper_index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/swiper/index.scss */ "../components/swiper/index.scss");
// js








// scss








/***/ }),

/***/ "../modules/main/index.js":
/*!********************************!*\
  !*** ../modules/main/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../modules/main/index.scss");


/***/ }),

/***/ "../scss/index.js":
/*!************************!*\
  !*** ../scss/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../scss/index.scss");
/* harmony import */ var _variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.scss */ "../scss/variables.scss");
/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize.scss */ "../scss/normalize.scss");
/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.scss */ "../scss/reset.scss");





/***/ }),

/***/ "../components/button/index.scss":
/*!***************************************!*\
  !*** ../components/button/index.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/cards-list/index.scss":
/*!*******************************************!*\
  !*** ../components/cards-list/index.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/container/index.scss":
/*!******************************************!*\
  !*** ../components/container/index.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/menu/index.scss":
/*!*************************************!*\
  !*** ../components/menu/index.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/page/index.scss":
/*!*************************************!*\
  !*** ../components/page/index.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/products/index.scss":
/*!*****************************************!*\
  !*** ../components/products/index.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/stars/index.scss":
/*!**************************************!*\
  !*** ../components/stars/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/swiper/index.scss":
/*!***************************************!*\
  !*** ../components/swiper/index.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/title/index.scss":
/*!**************************************!*\
  !*** ../components/title/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../modules/footer/index.scss":
/*!************************************!*\
  !*** ../modules/footer/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../modules/header/index.scss":
/*!************************************!*\
  !*** ../modules/header/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../modules/main/index.scss":
/*!**********************************!*\
  !*** ../modules/main/index.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../scss/index.scss":
/*!**************************!*\
  !*** ../scss/index.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../scss/normalize.scss":
/*!******************************!*\
  !*** ../scss/normalize.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../scss/reset.scss":
/*!**************************!*\
  !*** ../scss/reset.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../scss/variables.scss":
/*!******************************!*\
  !*** ../scss/variables.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../source/data/data.json":
/*!***********************************!*\
  !*** ../../source/data/data.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"cardImg":"/static/source/img/categories/car.svg","name":"Automtive","id":"automtive"},{"cardImg":"/static/source/img/categories/child.svg","name":"Baby","id":"baby"},{"cardImg":"/static/source/img/categories/beauty.svg","name":"Beauty & Personal care","id":"beauty-personal-care"},{"cardImg":"/static/source/img/categories/women.svg","name":"Women\' s Fashion","id":"women\'s-fashion"},{"cardImg":"/static/source/img/categories/men.svg","name":"Men\'s Fashion","id":"men\'s-fashion"},{"cardImg":"/static/source/img/categories/heart.svg","name":"Health & Household","id":"health-household"},{"cardImg":"/static/source/img/categories/kitchen.svg","name":"Home & Kitchen","id":"home-kitchen"},{"cardImg":"/static/source/img/categories/pets.svg","name":"Pet Supplies","id":"pet-supplies"},{"cardImg":"/static/source/img/categories/film.svg","name":"Movies & Television","id":"movies-television"},{"cardImg":"/static/source/img/categories/suitcase.svg","name":"Luggage","id":"luggage"}]');

/***/ }),

/***/ "../../source/data/products.json":
/*!***************************************!*\
  !*** ../../source/data/products.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":0,"img":"/static/source/img/products/watch.png","category":"automotive","title":"Android Watch 5 2021","price":"1,245.00","rating":5},{"id":1,"img":"/static/source/img/products/watch.png","category":"baby","title":"Baby Product 1","price":"50.00","rating":4},{"id":2,"img":"/static/source/img/products/watch.png","category":"beauty-personal-care","title":"Beauty Product 1","price":"30.00","rating":4.5},{"id":3,"img":"/static/source/img/products/watch.png","category":"women\'s-fashion","title":"Fashion Item 1","price":"80.00","rating":3.5},{"id":4,"img":"/static/source/img/products/watch.png","category":"men\'s-fashion","title":"Fashion Item 2","price":"120.00","rating":4},{"id":5,"img":"/static/source/img/products/watch.png","category":"health-household","title":"Health Product 1","price":"25.00","rating":4.8},{"id":6,"img":"/static/source/img/products/watch.png","category":"home-kitchen","title":"Kitchen Appliance 1","price":"150.00","rating":4.2},{"id":7,"img":"/static/source/img/products/watch.png","category":"pet-supplies","title":"Pet Supply 1","price":"40.00","rating":4.7},{"id":8,"img":"/static/source/img/products/watch.png","category":"movies-television","title":"Movie Collection 1","price":"90.00","rating":3.9},{"id":9,"img":"/static/source/img/products/watch.png","category":"luggage","title":"Luggage Item 1","price":"110.00","rating":4.3},{"id":10,"img":"/static/source/img/products/watch.png","category":"automotive","title":"Car Accessory 1","price":"75.00","rating":4.6},{"id":11,"img":"/static/source/img/products/watch.png","category":"baby","title":"Baby Product 2","price":"35.00","rating":4.2},{"id":12,"img":"/static/source/img/products/watch.png","category":"automotive","title":"Android Watch 5 2021","price":"1,245.00","rating":5},{"id":13,"img":"/static/source/img/products/watch.png","category":"baby","title":"Baby Product 1","price":"50.00","rating":4},{"id":14,"img":"/static/source/img/products/watch.png","category":"beauty-personal-care","title":"Beauty Product 1","price":"30.00","rating":4.5},{"id":15,"img":"/static/source/img/products/watch.png","category":"women\'s-fashion","title":"Fashion Item 1","price":"80.00","rating":3.5},{"id":16,"img":"/static/source/img/products/watch.png","category":"men\'s-fashion","title":"Fashion Item 2","price":"120.00","rating":4},{"id":17,"img":"/static/source/img/products/watch.png","category":"health-household","title":"Health Product 1","price":"25.00","rating":4.8},{"id":18,"img":"/static/source/img/products/watch.png","category":"home-kitchen","title":"Kitchen Appliance 1","price":"150.00","rating":4.2},{"id":19,"img":"/static/source/img/products/watch.png","category":"pet-supplies","title":"Pet Supply 1","price":"40.00","rating":4.7}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index */ "../scss/index.js");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index/index */ "../components/index/index.js");
/* harmony import */ var _modules_header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/header/index */ "../modules/header/index.js");
/* harmony import */ var _modules_footer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/footer/index */ "../modules/footer/index.js");
/* harmony import */ var _modules_index_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/index/index */ "../modules/index/index.js");
// base styles


// components


// modules



// pages

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDdUI7O0FBRXZCO0FBQ21DOztBQUVuQztBQUNpQztBQUNBOztBQUVqQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9jb21wb25lbnRzL2NhcmRzLWxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvaW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9zd2lwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL21vZHVsZXMvaW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnNjc3M/OTBhOSIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9jYXJkcy1saXN0L2luZGV4LnNjc3M/NDI3NCIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguc2Nzcz8yM2JjIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL21lbnUvaW5kZXguc2Nzcz9iYTU2Iiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL3BhZ2UvaW5kZXguc2Nzcz9iZDhiIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnNjc3M/NzdmMyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9zdGFycy9pbmRleC5zY3NzP2JkNWEiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvc3dpcGVyL2luZGV4LnNjc3M/N2FlYiIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy90aXRsZS9pbmRleC5zY3NzPzA0MzEiLCJ3ZWJwYWNrOi8vLy4uL21vZHVsZXMvZm9vdGVyL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL21vZHVsZXMvaGVhZGVyL2luZGV4LnNjc3M/NWQ3NiIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9tYWluL2luZGV4LnNjc3M/ZTVhMCIsIndlYnBhY2s6Ly8vLi4vc2Nzcy9pbmRleC5zY3NzP2E2YzUiLCJ3ZWJwYWNrOi8vLy4uL3Njc3Mvbm9ybWFsaXplLnNjc3M/OTdlMyIsIndlYnBhY2s6Ly8vLi4vc2Nzcy9yZXNldC5zY3NzPzZlNmEiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvdmFyaWFibGVzLnNjc3M/NDZhOCIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi8uLi9zb3VyY2UvZGF0YS9kYXRhLmpzb25cIjtcbmltcG9ydCB7IHJlbmRlclByZXBhcmVkR29vZHMgfSBmcm9tIFwiLi4vcHJvZHVjdHNcIjtcblxuY29uc3QgY2FyZHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWxpc3QnKTtcblxuZGF0YS5mb3JFYWNoKGVsID0+IHtcbiAgY2FyZHNXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgXG4gICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgZGF0YS1jYXRlZ29yeT1cIiR7ZWwuaWR9XCJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19pbWctd3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2VsLmNhcmRJbWd9XCIgYWx0PVwiJHtlbC5uYW1lLnRvTG93ZXJDYXNlKCl9XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX2NhdGVnb3J5XCI+XG4gICAgICAgICAgICAke2VsLm5hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYvPlxuICAgIGApO1xufSk7XG5cbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcblxuY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVuZGVyUHJlcGFyZWRHb29kcyhjYXJkLmRhdGFzZXQuY2F0ZWdvcnkpKVxufSlcblxuIiwiLy9qc1xuaW1wb3J0ICcuLi9idXR0b24vaW5kZXguanMnO1xuaW1wb3J0ICcuLi9jb250YWluZXIvaW5kZXguanMnO1xuaW1wb3J0ICcuLi9tZW51L2luZGV4LmpzJztcbmltcG9ydCAnLi4vc3dpcGVyL2luZGV4LmpzJztcbmltcG9ydCAnLi4vY2FyZHMtbGlzdC9pbmRleC5qcyc7XG5pbXBvcnQgJy4uL3Byb2R1Y3RzL2luZGV4LmpzJztcbmltcG9ydCAnLi4vcGFnZS9pbmRleC5qcyc7XG5pbXBvcnQgJy4uL3RpdGxlL2luZGV4LmpzJztcbmltcG9ydCAnLi4vc3RhcnMvaW5kZXguanMnO1xuXG4vL3Njc3NcbmltcG9ydCAnLi4vYnV0dG9uL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuLi9jb250YWluZXIvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4uL21lbnUvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4uL3N3aXBlci9pbmRleC5zY3NzJztcbmltcG9ydCAnLi4vY2FyZHMtbGlzdC9pbmRleC5zY3NzJztcbmltcG9ydCAnLi4vcHJvZHVjdHMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4uL3BhZ2UvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4uL3RpdGxlL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuLi9zdGFycy9pbmRleC5zY3NzJztcbiIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnI21lbnUnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdwYWdlLS13aXRoLW1lbnUnKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtLXdpdGgtbWVudScpO1xuICB9XG59KTtcblxuIiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uLy4uL3NvdXJjZS9kYXRhL3Byb2R1Y3RzLmpzb25cIjtcblxuY29uc3QgcHJvZHVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzX19saXN0Jyk7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQcmVwYXJlZEdvb2RzID0gKGNhdGVnb3J5ID0gJ2FsbCcpID0+IHtcbiAgcHJvZHVjdHNMaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IHByZXBhcmVkUHJvZHVjdHMgPSBjYXRlZ29yeSA9PT0gJ2FsbCdcbiAgICA/IHByb2R1Y3RzXG4gICAgOiBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmNhdGVnb3J5ID09PSBjYXRlZ29yeSk7XG5cbiAgcHJlcGFyZWRQcm9kdWN0cy5sZW5ndGggIT09IDBcbiAgICA/IChcbiAgICAgIHByZXBhcmVkUHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdEl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvZHVjdEl0ZW1Db250YWluZXIuY2xhc3NOYW1lID0gJ3Byb2R1Y3RzX19pdGVtLWNvbnRhaW5lcic7XG5cbiAgICAgICAgcHJvZHVjdEl0ZW1Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RzX19pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdHNfX2l0ZW0taW1nXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwcm9kdWN0LmltZ31cIiBhbHQ9XCIke3Byb2R1Y3QuY2F0ZWdvcnl9XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cInByb2R1Y3RzX19pdGVtLWNhdGVnb3J5XCIgZGF0YS1jYXRlZ29yeT1cIk1lbiBGYXNoaW9uXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9oNT5cbiAgICBcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cInByb2R1Y3RzX19pdGVtLXRpdGxlXCI+XG4gICAgICAgICAgICAgICR7cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdHNfX2l0ZW0td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdHNfX2l0ZW0tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAkJHtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RzX19pdGVtLXJhdGluZyBzdGFycy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJyYXRlLTVcIiBuYW1lPVwicmF0ZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN0YXIgZmFzIGZhLXN0YXJcIiBmb3I9XCJyYXRlLTVcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInJhdGUtNFwiIG5hbWU9XCJyYXRlXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3RhciBmYXMgZmEtc3RhclwiIGZvcj1cInJhdGUtNFwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicmF0ZS0zXCIgbmFtZT1cInJhdGVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzdGFyIGZhcyBmYS1zdGFyXCIgZm9yPVwicmF0ZS0zXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJyYXRlLTJcIiBuYW1lPVwicmF0ZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInN0YXIgZmFzIGZhLXN0YXJcIiBmb3I9XCJyYXRlLTJcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInJhdGUtMVwiIG5hbWU9XCJyYXRlXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic3RhciBmYXMgZmEtc3RhclwiIGZvcj1cInJhdGUtMVwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdHNfX2l0ZW0tYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tYmx1ZVwiPlxuICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgIFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICBRdWljayB2aWV3XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGApXG5cbiAgICAgICAgcHJvZHVjdHNMaXN0LmFwcGVuZChwcm9kdWN0SXRlbUNvbnRhaW5lcilcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIHByb2R1Y3RzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYFxuICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RzX19tZXNzYWdlXCI+XG4gICAgICAgICAgTm8gcHJvZHVjdHMgYXZhaWxhYmxlIFxuICAgICAgICA8cC8+XG4gICAgICBgKVxuICAgIClcbn1cblxucmVuZGVyUHJlcGFyZWRHb29kcygpOyIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5uZXcgU3dpcGVyKCcubWFpbl9fc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgbmF2aWdhdGlvbjoge1xuICAgIHByZXZFbDogJy5zd2lwZXItYnRuLXByZXYnLFxuICAgIG5leHRFbDogJy5zd2lwZXItYnRuLW5leHQnXG4gIH0sXG4gIGxvb3A6IHRydWUsXG59KTtcblxubmV3IFN3aXBlcignLm1haW5fX2NhdGVnb3JpZXMtc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiA1LFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgcHJldkVsOiAnLmNhdGVnb3J5LWJ0bi1wcmV2JyxcbiAgICBuZXh0RWw6ICcuY2F0ZWdvcnktYnRuLW5leHQnXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTIzMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSAgXG4gIH1cbn0pO1xuIiwiLy8ganNcclxuaW1wb3J0IFwiLi4vZm9vdGVyL2luZGV4LmpzXCI7XHJcbmltcG9ydCBcIi4uL2hlYWRlci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL21lbnUvaW5kZXguanNcIjtcclxuaW1wb3J0IFwiLi4vbWFpbi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3N3aXBlci9pbmRleC5qc1wiO1xyXG5cclxuLy8gc2Nzc1xyXG5pbXBvcnQgXCIuLi9oZWFkZXIvaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi9mb290ZXIvaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbWVudS9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL21haW4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc3dpcGVyL2luZGV4LnNjc3NcIjtcclxuIiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBcIi4vdmFyaWFibGVzLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9ub3JtYWxpemUuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL3Jlc2V0LnNjc3NcIjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgXCIuLi9zY3NzL2luZGV4XCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaW5kZXgvaW5kZXhcIjtcclxuXHJcbi8vIG1vZHVsZXNcclxuaW1wb3J0IFwiLi4vbW9kdWxlcy9oZWFkZXIvaW5kZXhcIjtcclxuaW1wb3J0IFwiLi4vbW9kdWxlcy9mb290ZXIvaW5kZXhcIjtcclxuXHJcbi8vIHBhZ2VzXHJcbmltcG9ydCBcIi4uL21vZHVsZXMvaW5kZXgvaW5kZXhcIjsiXSwibmFtZXMiOlsiZGF0YSIsInJlbmRlclByZXBhcmVkR29vZHMiLCJjYXJkc1dyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwiZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjb25jYXQiLCJpZCIsImNhcmRJbWciLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGFzZXQiLCJjYXRlZ29yeSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJwcm9kdWN0cyIsInByb2R1Y3RzTGlzdCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsInByZXBhcmVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwicHJvZHVjdEl0ZW1Db250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW1nIiwidGl0bGUiLCJwcmljZSIsImFwcGVuZCIsIlN3aXBlciIsIm5hdmlnYXRpb24iLCJwcmV2RWwiLCJuZXh0RWwiLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImJyZWFrcG9pbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==