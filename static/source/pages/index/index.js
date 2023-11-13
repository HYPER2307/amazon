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


var cardsWrapper = document.querySelector('.cards-wrapper');
_source_data_data_json__WEBPACK_IMPORTED_MODULE_1__.forEach(function (el) {
  cardsWrapper.insertAdjacentHTML("beforeend", "\n      <div class=\"card\">\n        <div class=\"card__img-wrapper\">\n          <img src=\"".concat(el.cardImg, "\" alt=\"").concat(el.name.toLowerCase(), "\" />\n        </div>\n\n        <p class=\"card__category\">\n          ").concat(el.name, "\n        </p>\n      </div>\n    "));
});
var card = document.querySelector('.card');
cardsWrapper.style.width = _source_data_data_json__WEBPACK_IMPORTED_MODULE_1__.length * 120 + 'px';

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
/* harmony import */ var _button_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/index.scss */ "../components/button/index.scss");
/* harmony import */ var _container_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../container/index.scss */ "../components/container/index.scss");
/* harmony import */ var _menu_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/index.scss */ "../components/menu/index.scss");
/* harmony import */ var _swiper_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../swiper/index.scss */ "../components/swiper/index.scss");
/* harmony import */ var _cards_list_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cards-list/index.scss */ "../components/cards-list/index.scss");
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


/***/ }),

/***/ "../components/swiper/index.js":
/*!*************************************!*\
  !*** ../components/swiper/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/swiper/index.scss");
/* harmony import */ var _source_data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../source/data/data.json */ "../../source/data/data.json");


new Swiper('.main__swiper-container', {
  navigation: {
    prevEl: '.swiper-btn-prev',
    nextEl: '.swiper-btn-next'
  },
  loop: true
});

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

/***/ "../components/swiper/index.scss":
/*!***************************************!*\
  !*** ../components/swiper/index.scss ***!
  \***************************************/
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

module.exports = JSON.parse('[{"cardImg":"/static/source/img/categories/car.svg","name":"Automtive"},{"cardImg":"/static/source/img/categories/child.svg","name":"Baby"},{"cardImg":"/static/source/img/categories/beauty.svg","name":"Beauty & Personal care"},{"cardImg":"/static/source/img/categories/women.svg","name":"Women\' s Fashion"},{"cardImg":"/static/source/img/categories/men.svg","name":"Men\'s Fashion"},{"cardImg":"/static/source/img/categories/car.svg","name":"Automtive"},{"cardImg":"/static/source/img/categories/heart.svg","name":"Health & Household"},{"cardImg":"/static/source/img/categories/kitchen.svg","name":"Home & Kitchen"},{"cardImg":"/static/source/img/categories/pets.svg","name":"Pet Supplies"},{"cardImg":"/static/source/img/categories/film.svg","name":"Movies & Television"},{"cardImg":"/static/source/img/categories/suitcase.svg","name":"Luggage"}]');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUM0QjtBQUVsRCxJQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRTdESCxtREFBSSxDQUFDSSxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO0VBQ2pCSixZQUFZLENBQUNLLGtCQUFrQixDQUFDLFdBQVcsbUdBQUFDLE1BQUEsQ0FHdkJGLEVBQUUsQ0FBQ0csT0FBTyxlQUFBRCxNQUFBLENBQVVGLEVBQUUsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQywrRUFBQUgsTUFBQSxDQUluREYsRUFBRSxDQUFDSSxJQUFJLHVDQUdkLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixJQUFNRSxJQUFJLEdBQUdULFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM1Q0YsWUFBWSxDQUFDVyxLQUFLLENBQUNDLEtBQUssR0FBR2IsbURBQUksQ0FBQ2MsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQm5EO0FBQzRCO0FBQ0c7QUFDTDtBQUNFO0FBQ0k7O0FBRWhDO0FBQzhCO0FBQ0c7QUFDTDtBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hSO0FBQzRCO0FBRWxELElBQUlDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRTtFQUNwQ0MsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxrQkFBa0I7SUFDMUJDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREMsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEY7QUFDNEI7QUFDQTtBQUNpQjtBQUNMO0FBQ2Q7QUFDZ0I7QUFDQTs7QUFFMUM7QUFDOEI7QUFDQTtBQUNpQjtBQUNMO0FBQ2Q7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdEI7QUFDSTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGMUI7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUN1Qjs7QUFFdkI7QUFDbUM7O0FBRW5DO0FBQ2lDO0FBQ0E7O0FBRWpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvY2FyZHMtbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9zd2lwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL21vZHVsZXMvaW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvY2FyZHMtbGlzdC9pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL21lbnUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9zd2lwZXIvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9mb290ZXIvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9oZWFkZXIvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9tYWluL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi4vc2Nzcy9ub3JtYWxpemUuc2NzcyIsIndlYnBhY2s6Ly8vLi4vc2Nzcy9yZXNldC5zY3NzIiwid2VicGFjazovLy8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi8uLi9zb3VyY2UvZGF0YS9kYXRhLmpzb25cIjtcblxuY29uc3QgY2FyZHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLXdyYXBwZXInKTtcblxuZGF0YS5mb3JFYWNoKGVsID0+IHtcbiAgY2FyZHNXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7ZWwuY2FyZEltZ31cIiBhbHQ9XCIke2VsLm5hbWUudG9Mb3dlckNhc2UoKX1cIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cCBjbGFzcz1cImNhcmRfX2NhdGVnb3J5XCI+XG4gICAgICAgICAgJHtlbC5uYW1lfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgKTtcbn0pO1xuXG5jb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbmNhcmRzV3JhcHBlci5zdHlsZS53aWR0aCA9IGRhdGEubGVuZ3RoICogMTIwICsgJ3B4JztcblxuIiwiLy9qc1xuaW1wb3J0ICcuLi9idXR0b24vaW5kZXguanMnO1xuaW1wb3J0ICcuLi9jb250YWluZXIvaW5kZXguanMnO1xuaW1wb3J0ICcuLi9tZW51L2luZGV4LmpzJztcbmltcG9ydCAnLi4vc3dpcGVyL2luZGV4LmpzJztcbmltcG9ydCAnLi4vY2FyZHMtbGlzdC9pbmRleC5qcyc7XG5cbi8vc2Nzc1xuaW1wb3J0ICcuLi9idXR0b24vaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4uL2NvbnRhaW5lci9pbmRleC5zY3NzJztcbmltcG9ydCAnLi4vbWVudS9pbmRleC5zY3NzJztcbmltcG9ydCAnLi4vc3dpcGVyL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuLi9jYXJkcy1saXN0L2luZGV4LnNjc3MnO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vLi4vc291cmNlL2RhdGEvZGF0YS5qc29uXCI7XG5cbm5ldyBTd2lwZXIoJy5tYWluX19zd2lwZXItY29udGFpbmVyJywge1xuICBuYXZpZ2F0aW9uOiB7XG4gICAgcHJldkVsOiAnLnN3aXBlci1idG4tcHJldicsXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idG4tbmV4dCdcbiAgfSxcbiAgbG9vcDogdHJ1ZSxcbn0pOyIsIi8vIGpzXHJcbmltcG9ydCBcIi4uL2Zvb3Rlci9pbmRleC5qc1wiO1xyXG5pbXBvcnQgXCIuLi9oZWFkZXIvaW5kZXguanNcIjtcclxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguanNcIjtcclxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9tZW51L2luZGV4LmpzXCI7XHJcbmltcG9ydCBcIi4uL21haW4vaW5kZXguanNcIjtcclxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanNcIjtcclxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9zd2lwZXIvaW5kZXguanNcIjtcclxuXHJcbi8vIHNjc3NcclxuaW1wb3J0IFwiLi4vaGVhZGVyL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vZm9vdGVyL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL21lbnUvaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi9tYWluL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3N3aXBlci9pbmRleC5zY3NzXCI7XHJcbiIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbmltcG9ydCBcIi4vbm9ybWFsaXplLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9yZXNldC5zY3NzXCI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgXCIuLi9zY3NzL2luZGV4XCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaW5kZXgvaW5kZXhcIjtcclxuXHJcbi8vIG1vZHVsZXNcclxuaW1wb3J0IFwiLi4vbW9kdWxlcy9oZWFkZXIvaW5kZXhcIjtcclxuaW1wb3J0IFwiLi4vbW9kdWxlcy9mb290ZXIvaW5kZXhcIjtcclxuXHJcbi8vIHBhZ2VzXHJcbmltcG9ydCBcIi4uL21vZHVsZXMvaW5kZXgvaW5kZXhcIjsiXSwibmFtZXMiOlsiZGF0YSIsImNhcmRzV3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJlbCIsImluc2VydEFkamFjZW50SFRNTCIsImNvbmNhdCIsImNhcmRJbWciLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJjYXJkIiwic3R5bGUiLCJ3aWR0aCIsImxlbmd0aCIsIlN3aXBlciIsIm5hdmlnYXRpb24iLCJwcmV2RWwiLCJuZXh0RWwiLCJsb29wIl0sInNvdXJjZVJvb3QiOiIifQ==