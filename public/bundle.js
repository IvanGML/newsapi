/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/article.js":
/*!*******************************!*\
  !*** ./components/article.js ***!
  \*******************************/
/*! exports provided: articleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articleComponent\", function() { return articleComponent; });\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n\r\n\r\nconst articleComponent = ({ title, author, publishedAt, description, content, url, urlToImage }) => {\r\n    title = title || 'Title is not found',\r\n    author = author || 'Author is not specified',\r\n    publishedAt = publishedAt || 'Date in not specified',\r\n    description = description || '',\r\n    content = content || 'Content is not specified',\r\n    url = url || '#',\r\n    urlToImage = urlToImage || 'public/src/img/default-image.png'\r\n    let imgAlt = description.split(' ').slice(0, 3).join(' ');\r\n    publishedAt = publishedAt === 'Date in not specified' ? `Published at ${publishedAt}` : `Published at ${Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"formatDate\"])(publishedAt)}`;\r\n    return (\r\n        `<article class=\"article\">\r\n            <h2 class=\"article-header\">${title}</h2>\r\n            <div class=\"article-content-wrapper\">\r\n                <div class=\"article-content-text\">\r\n                    <div class=\"article-info\">\r\n                        <p class=\"article-author\">${author}</p>\r\n                        <p class=\"article-date\">${publishedAt}</p>\r\n                    </div>\r\n                    <p class=\"article-discription\">${description}</p>\r\n                    <p class=\"article-text\">${content}</p>\r\n                    <a href=\"${url}\" class=\"article-link\" target=\"_blank\">Read more...</a>\r\n                </div>\r\n                <div class=\"article-content-img\">\r\n                    <img src=\"${urlToImage}\" alt=\"${imgAlt}\" class=\"article-image\">\r\n                </div>\r\n            </div>\r\n        </article>`\r\n    );\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FydGljbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FydGljbGUuanM/NDkwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vc3R1ZmYvaGVscGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgYXJ0aWNsZUNvbXBvbmVudCA9ICh7IHRpdGxlLCBhdXRob3IsIHB1Ymxpc2hlZEF0LCBkZXNjcmlwdGlvbiwgY29udGVudCwgdXJsLCB1cmxUb0ltYWdlIH0pID0+IHtcclxuICAgIHRpdGxlID0gdGl0bGUgfHwgJ1RpdGxlIGlzIG5vdCBmb3VuZCcsXHJcbiAgICBhdXRob3IgPSBhdXRob3IgfHwgJ0F1dGhvciBpcyBub3Qgc3BlY2lmaWVkJyxcclxuICAgIHB1Ymxpc2hlZEF0ID0gcHVibGlzaGVkQXQgfHwgJ0RhdGUgaW4gbm90IHNwZWNpZmllZCcsXHJcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgY29udGVudCA9IGNvbnRlbnQgfHwgJ0NvbnRlbnQgaXMgbm90IHNwZWNpZmllZCcsXHJcbiAgICB1cmwgPSB1cmwgfHwgJyMnLFxyXG4gICAgdXJsVG9JbWFnZSA9IHVybFRvSW1hZ2UgfHwgJ3B1YmxpYy9zcmMvaW1nL2RlZmF1bHQtaW1hZ2UucG5nJ1xyXG4gICAgbGV0IGltZ0FsdCA9IGRlc2NyaXB0aW9uLnNwbGl0KCcgJykuc2xpY2UoMCwgMykuam9pbignICcpO1xyXG4gICAgcHVibGlzaGVkQXQgPSBwdWJsaXNoZWRBdCA9PT0gJ0RhdGUgaW4gbm90IHNwZWNpZmllZCcgPyBgUHVibGlzaGVkIGF0ICR7cHVibGlzaGVkQXR9YCA6IGBQdWJsaXNoZWQgYXQgJHtmb3JtYXREYXRlKHB1Ymxpc2hlZEF0KX1gO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBgPGFydGljbGUgY2xhc3M9XCJhcnRpY2xlXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImFydGljbGUtaGVhZGVyXCI+JHt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZS1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLWNvbnRlbnQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcnRpY2xlLWF1dGhvclwiPiR7YXV0aG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcnRpY2xlLWRhdGVcIj4ke3B1Ymxpc2hlZEF0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFydGljbGUtZGlzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFydGljbGUtdGV4dFwiPiR7Y29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dXJsfVwiIGNsYXNzPVwiYXJ0aWNsZS1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVhZCBtb3JlLi4uPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZS1jb250ZW50LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt1cmxUb0ltYWdlfVwiIGFsdD1cIiR7aW1nQWx0fVwiIGNsYXNzPVwiYXJ0aWNsZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5gXHJcbiAgICApO1xyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/article.js\n");

/***/ }),

/***/ "./components/dinamic-elements-events/newsItemClickHandler.js":
/*!********************************************************************!*\
  !*** ./components/dinamic-elements-events/newsItemClickHandler.js ***!
  \********************************************************************/
/*! exports provided: newsItemClickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsItemClickHandler\", function() { return newsItemClickHandler; });\n/* harmony import */ var _renderArticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderArticles */ \"./components/renderArticles.js\");\n\r\n\r\nconst newsItemClickHandler = () => {\r\n  const resultItems = [...document.querySelectorAll('.result-item')];\r\n  resultItems.forEach(item => {\r\n    item.addEventListener('click', function() {\r\n      let sources = this.getAttribute('title');\r\n      if (sources.length > 2 && sources !== 'rt') {\r\n        Object(_renderArticles__WEBPACK_IMPORTED_MODULE_0__[\"renderArticles\"])({ sources });\r\n      } else {\r\n        Object(_renderArticles__WEBPACK_IMPORTED_MODULE_0__[\"renderArticles\"])({ country: sources });\r\n      }\r\n    })\r\n  })\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL25ld3NJdGVtQ2xpY2tIYW5kbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kaW5hbWljLWVsZW1lbnRzLWV2ZW50cy9uZXdzSXRlbUNsaWNrSGFuZGxlci5qcz82ZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckFydGljbGVzIH0gZnJvbSAnLi4vcmVuZGVyQXJ0aWNsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NJdGVtQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdEl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN1bHQtaXRlbScpXTtcclxuICByZXN1bHRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgc291cmNlcyA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICBpZiAoc291cmNlcy5sZW5ndGggPiAyICYmIHNvdXJjZXMgIT09ICdydCcpIHtcclxuICAgICAgICByZW5kZXJBcnRpY2xlcyh7IHNvdXJjZXMgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVuZGVyQXJ0aWNsZXMoeyBjb3VudHJ5OiBzb3VyY2VzIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dinamic-elements-events/newsItemClickHandler.js\n");

/***/ }),

/***/ "./components/dinamic-elements-events/toggler.js":
/*!*******************************************************!*\
  !*** ./components/dinamic-elements-events/toggler.js ***!
  \*******************************************************/
/*! exports provided: toggleTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleTabs\", function() { return toggleTabs; });\nconst toggleTabs = () => {\r\n  const tabs = [...document.querySelectorAll('.news-tab')];\r\n  const removeSelected = () => tabs.forEach(item => item.classList.remove('selected'));\r\n  const switchContent = () => {\r\n    let publishers = document.getElementById('publishers-info');\r\n    let countries = document.getElementById('countries-info');\r\n    countries.classList.toggle('not-display');\r\n    publishers.classList.toggle('not-display');\r\n  }\r\n\r\n  tabs.forEach(elem => {\r\n    elem.addEventListener(\"click\", e => {\r\n      removeSelected();\r\n      switchContent();\r\n      elem.classList.add('selected');\r\n    });\r\n  });\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL3RvZ2dsZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL3RvZ2dsZXIuanM/ZmExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdG9nZ2xlVGFicyA9ICgpID0+IHtcclxuICBjb25zdCB0YWJzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdzLXRhYicpXTtcclxuICBjb25zdCByZW1vdmVTZWxlY3RlZCA9ICgpID0+IHRhYnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XHJcbiAgY29uc3Qgc3dpdGNoQ29udGVudCA9ICgpID0+IHtcclxuICAgIGxldCBwdWJsaXNoZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1Ymxpc2hlcnMtaW5mbycpO1xyXG4gICAgbGV0IGNvdW50cmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJpZXMtaW5mbycpO1xyXG4gICAgY291bnRyaWVzLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1kaXNwbGF5Jyk7XHJcbiAgICBwdWJsaXNoZXJzLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1kaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICB0YWJzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgcmVtb3ZlU2VsZWN0ZWQoKTtcclxuICAgICAgc3dpdGNoQ29udGVudCgpO1xyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dinamic-elements-events/toggler.js\n");

/***/ }),

/***/ "./components/newsSource.js":
/*!**********************************!*\
  !*** ./components/newsSource.js ***!
  \**********************************/
/*! exports provided: newsSourceItem, newsSources, newsSourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourceItem\", function() { return newsSourceItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSources\", function() { return newsSources; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourcesComponent\", function() { return newsSourcesComponent; });\n/* harmony import */ var _stuff_staticData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/staticData */ \"./stuff/staticData.js\");\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n\r\n\r\n\r\nconst newsSourceItem = (title, id = title) => {\r\n  return (\r\n    `<div class=\"result-item\" title=\"${id}\">\r\n      <p class=\"result-item-title\">${title}</p>\r\n    </div>`\r\n  );\r\n};\r\n\r\nconst newsSources = (itemsList, itemsListCountries) => {\r\n\r\n  const publishersContent =\r\n    `<div id=\"publishers-info\">\r\n      <p class=\"news-sources-description\">\r\n        We crawl and index news articles from over 30,000 news \r\n        sources and blogs. We also monitor the top and breaking \r\n        news headlines from the following 138 of the most notable \r\n        of these sources. You can click through for integration \r\n        examples.\r\n      </p>\r\n      <div class=\"news-sources-results\" id=\"news-sources-results\">\r\n        ${Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_1__[\"removeComas\"])(itemsList)}\r\n      </div>\r\n    </div>`;\r\n\r\n  const countriesContent =\r\n    `<div id=\"countries-info\" class=\"not-display\"\">\r\n      <p class=\"news-sources-description\">\r\n        We curate a list of top headlines for a range of countries. You can click through for integration examples.\r\n      </p>\r\n      <div class=\"news-sources-results\" id=\"news-sources-results\">\r\n        ${Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_1__[\"removeComas\"])(itemsListCountries)}\r\n      </div>\r\n    </div>`;\r\n\r\n\r\n  return (\r\n    `<section class=\"news-sources-wrapper\">\r\n      <h2 class=\"news-sources-header\">News sources</h2>\r\n      <div class=\"news-sources-controls-wrapper\">\r\n        <h3 class=\"news-tab selected\" title=\"publishers\">Publishers</h3>\r\n        <h3 class=\"news-tab\" title=\"countries\">Countries</h3>\r\n      </div>\r\n      ${publishersContent}\r\n      ${countriesContent}\r\n    </section>`\r\n  );\r\n}\r\n\r\nconst newsSourcesComponent = (sources) => {\r\n  let itemsList = sources.map(item => {\r\n    return newsSourceItem(item.name, item.id);\r\n  });\r\n  let itemsListCountries = _stuff_staticData__WEBPACK_IMPORTED_MODULE_0__[\"countries\"].map(item => {\r\n    return newsSourceItem(item);\r\n  });\r\n  return newsSources(itemsList, itemsListCountries);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25ld3NTb3VyY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld3NTb3VyY2UuanM/ZDViNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tICcuLi9zdHVmZi9zdGF0aWNEYXRhJztcclxuaW1wb3J0IHsgcmVtb3ZlQ29tYXMgfSBmcm9tICcuLi9zdHVmZi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzU291cmNlSXRlbSA9ICh0aXRsZSwgaWQgPSB0aXRsZSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICBgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtXCIgdGl0bGU9XCIke2lkfVwiPlxyXG4gICAgICA8cCBjbGFzcz1cInJlc3VsdC1pdGVtLXRpdGxlXCI+JHt0aXRsZX08L3A+XHJcbiAgICA8L2Rpdj5gXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzU291cmNlcyA9IChpdGVtc0xpc3QsIGl0ZW1zTGlzdENvdW50cmllcykgPT4ge1xyXG5cclxuICBjb25zdCBwdWJsaXNoZXJzQ29udGVudCA9XHJcbiAgICBgPGRpdiBpZD1cInB1Ymxpc2hlcnMtaW5mb1wiPlxyXG4gICAgICA8cCBjbGFzcz1cIm5ld3Mtc291cmNlcy1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIFdlIGNyYXdsIGFuZCBpbmRleCBuZXdzIGFydGljbGVzIGZyb20gb3ZlciAzMCwwMDAgbmV3cyBcclxuICAgICAgICBzb3VyY2VzIGFuZCBibG9ncy4gV2UgYWxzbyBtb25pdG9yIHRoZSB0b3AgYW5kIGJyZWFraW5nIFxyXG4gICAgICAgIG5ld3MgaGVhZGxpbmVzIGZyb20gdGhlIGZvbGxvd2luZyAxMzggb2YgdGhlIG1vc3Qgbm90YWJsZSBcclxuICAgICAgICBvZiB0aGVzZSBzb3VyY2VzLiBZb3UgY2FuIGNsaWNrIHRocm91Z2ggZm9yIGludGVncmF0aW9uIFxyXG4gICAgICAgIGV4YW1wbGVzLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdzLXNvdXJjZXMtcmVzdWx0c1wiIGlkPVwibmV3cy1zb3VyY2VzLXJlc3VsdHNcIj5cclxuICAgICAgICAke3JlbW92ZUNvbWFzKGl0ZW1zTGlzdCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgY29uc3QgY291bnRyaWVzQ29udGVudCA9XHJcbiAgICBgPGRpdiBpZD1cImNvdW50cmllcy1pbmZvXCIgY2xhc3M9XCJub3QtZGlzcGxheVwiXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwibmV3cy1zb3VyY2VzLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgV2UgY3VyYXRlIGEgbGlzdCBvZiB0b3AgaGVhZGxpbmVzIGZvciBhIHJhbmdlIG9mIGNvdW50cmllcy4gWW91IGNhbiBjbGljayB0aHJvdWdoIGZvciBpbnRlZ3JhdGlvbiBleGFtcGxlcy5cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmV3cy1zb3VyY2VzLXJlc3VsdHNcIiBpZD1cIm5ld3Mtc291cmNlcy1yZXN1bHRzXCI+XHJcbiAgICAgICAgJHtyZW1vdmVDb21hcyhpdGVtc0xpc3RDb3VudHJpZXMpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgYDxzZWN0aW9uIGNsYXNzPVwibmV3cy1zb3VyY2VzLXdyYXBwZXJcIj5cclxuICAgICAgPGgyIGNsYXNzPVwibmV3cy1zb3VyY2VzLWhlYWRlclwiPk5ld3Mgc291cmNlczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdzLXNvdXJjZXMtY29udHJvbHMtd3JhcHBlclwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm5ld3MtdGFiIHNlbGVjdGVkXCIgdGl0bGU9XCJwdWJsaXNoZXJzXCI+UHVibGlzaGVyczwvaDM+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibmV3cy10YWJcIiB0aXRsZT1cImNvdW50cmllc1wiPkNvdW50cmllczwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAke3B1Ymxpc2hlcnNDb250ZW50fVxyXG4gICAgICAke2NvdW50cmllc0NvbnRlbnR9XHJcbiAgICA8L3NlY3Rpb24+YFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzU291cmNlc0NvbXBvbmVudCA9IChzb3VyY2VzKSA9PiB7XHJcbiAgbGV0IGl0ZW1zTGlzdCA9IHNvdXJjZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgcmV0dXJuIG5ld3NTb3VyY2VJdGVtKGl0ZW0ubmFtZSwgaXRlbS5pZCk7XHJcbiAgfSk7XHJcbiAgbGV0IGl0ZW1zTGlzdENvdW50cmllcyA9IGNvdW50cmllcy5tYXAoaXRlbSA9PiB7XHJcbiAgICByZXR1cm4gbmV3c1NvdXJjZUl0ZW0oaXRlbSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld3NTb3VyY2VzKGl0ZW1zTGlzdCwgaXRlbXNMaXN0Q291bnRyaWVzKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/newsSource.js\n");

/***/ }),

/***/ "./components/renderArticles.js":
/*!**************************************!*\
  !*** ./components/renderArticles.js ***!
  \**************************************/
/*! exports provided: renderArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderArticles\", function() { return renderArticles; });\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article */ \"./components/article.js\");\n/* harmony import */ var _requests_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requests/fetchData */ \"./requests/fetchData.js\");\n\r\n\r\n\r\n\r\nconst renderArticles = ({ country, sources, keyWord }) => {\r\n  let loadingContainer = document.getElementById('result-list');\r\n  Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"showProloader\"])();\r\n  Object(_requests_fetchData__WEBPACK_IMPORTED_MODULE_2__[\"fetchData\"])({country, sources, keyWord})\r\n    .then(data => {\r\n      let { articles } = data;\r\n      let articlesList = articles.map(item => Object(_article__WEBPACK_IMPORTED_MODULE_1__[\"articleComponent\"])(item));\r\n      loadingContainer.innerHTML = articlesList;\r\n    });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlbmRlckFydGljbGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZW5kZXJBcnRpY2xlcy5qcz9iODBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dQcm9sb2FkZXIgfSBmcm9tIFwiLi4vc3R1ZmYvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBhcnRpY2xlQ29tcG9uZW50IH0gZnJvbSBcIi4vYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuLi9yZXF1ZXN0cy9mZXRjaERhdGEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckFydGljbGVzID0gKHsgY291bnRyeSwgc291cmNlcywga2V5V29yZCB9KSA9PiB7XHJcbiAgbGV0IGxvYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LWxpc3QnKTtcclxuICBzaG93UHJvbG9hZGVyKCk7XHJcbiAgZmV0Y2hEYXRhKHtjb3VudHJ5LCBzb3VyY2VzLCBrZXlXb3JkfSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBsZXQgeyBhcnRpY2xlcyB9ID0gZGF0YTtcclxuICAgICAgbGV0IGFydGljbGVzTGlzdCA9IGFydGljbGVzLm1hcChpdGVtID0+IGFydGljbGVDb21wb25lbnQoaXRlbSkpO1xyXG4gICAgICBsb2FkaW5nQ29udGFpbmVyLmlubmVySFRNTCA9IGFydGljbGVzTGlzdDtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/renderArticles.js\n");

/***/ }),

/***/ "./components/renderNewsSources.js":
/*!*****************************************!*\
  !*** ./components/renderNewsSources.js ***!
  \*****************************************/
/*! exports provided: renderNewsSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNewsSources\", function() { return renderNewsSources; });\n/* harmony import */ var _dinamic_elements_events_toggler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dinamic-elements-events/toggler */ \"./components/dinamic-elements-events/toggler.js\");\n/* harmony import */ var _dinamic_elements_events_newsItemClickHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dinamic-elements-events/newsItemClickHandler */ \"./components/dinamic-elements-events/newsItemClickHandler.js\");\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n/* harmony import */ var _newsSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsSource */ \"./components/newsSource.js\");\n/* harmony import */ var _requests_fetchData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../requests/fetchData */ \"./requests/fetchData.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderNewsSources = () => {\r\n\r\n  let loadingContainer = document.getElementById('result-list');\r\n \r\n  Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_2__[\"showProloader\"])();\r\n  Object(_requests_fetchData__WEBPACK_IMPORTED_MODULE_4__[\"fetchData\"])({})\r\n    .then(data => {\r\n      let { sources } = data;\r\n      let sourcesList = Object(_newsSource__WEBPACK_IMPORTED_MODULE_3__[\"newsSourcesComponent\"])(sources);\r\n      loadingContainer.innerHTML = sourcesList;\r\n      Object(_dinamic_elements_events_toggler__WEBPACK_IMPORTED_MODULE_0__[\"toggleTabs\"])();\r\n      Object(_dinamic_elements_events_newsItemClickHandler__WEBPACK_IMPORTED_MODULE_1__[\"newsItemClickHandler\"])();\r\n    });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlbmRlck5ld3NTb3VyY2VzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZW5kZXJOZXdzU291cmNlcy5qcz9jZGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZ2dsZVRhYnMgfSBmcm9tIFwiLi9kaW5hbWljLWVsZW1lbnRzLWV2ZW50cy90b2dnbGVyXCI7XHJcbmltcG9ydCB7IG5ld3NJdGVtQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vZGluYW1pYy1lbGVtZW50cy1ldmVudHMvbmV3c0l0ZW1DbGlja0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgc2hvd1Byb2xvYWRlciB9IGZyb20gXCIuLi9zdHVmZi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG5ld3NTb3VyY2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vbmV3c1NvdXJjZVwiO1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi4vcmVxdWVzdHMvZmV0Y2hEYXRhXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTmV3c1NvdXJjZXMgPSAoKSA9PiB7XHJcblxyXG4gIGxldCBsb2FkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdC1saXN0Jyk7XHJcbiBcclxuICBzaG93UHJvbG9hZGVyKCk7XHJcbiAgZmV0Y2hEYXRhKHt9KVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGxldCB7IHNvdXJjZXMgfSA9IGRhdGE7XHJcbiAgICAgIGxldCBzb3VyY2VzTGlzdCA9IG5ld3NTb3VyY2VzQ29tcG9uZW50KHNvdXJjZXMpO1xyXG4gICAgICBsb2FkaW5nQ29udGFpbmVyLmlubmVySFRNTCA9IHNvdXJjZXNMaXN0O1xyXG4gICAgICB0b2dnbGVUYWJzKCk7XHJcbiAgICAgIG5ld3NJdGVtQ2xpY2tIYW5kbGVyKCk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/renderNewsSources.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ \"./initialize.js\");\n\r\n\r\nnew _initialize__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9pbml0aWFsaXplJztcclxuXHJcbm5ldyBpbml0aWFsaXplKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./initialize.js":
/*!***********************!*\
  !*** ./initialize.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderNews; });\n/* harmony import */ var _components_renderArticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/renderArticles */ \"./components/renderArticles.js\");\n/* harmony import */ var _components_renderNewsSources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/renderNewsSources */ \"./components/renderNewsSources.js\");\n/* harmony import */ var _stuff_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stuff/constants */ \"./stuff/constants.js\");\n\r\n\r\n\r\n\r\nclass renderNews {\r\n  constructor() {\r\n    document.addEventListener('DOMContentLoaded', this.initialize.bind(this));\r\n  }\r\n\r\n  initialize() {\r\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_2__[\"newsSourcesContainer\"].addEventListener('click', () => Object(_components_renderNewsSources__WEBPACK_IMPORTED_MODULE_1__[\"renderNewsSources\"])());\r\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_2__[\"articlesContainer\"].addEventListener('click', () => Object(_components_renderArticles__WEBPACK_IMPORTED_MODULE_0__[\"renderArticles\"])({ country: 'us' }));\r\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_2__[\"searchInput\"].addEventListener('keydown', e => {\r\n      if (e.keyCode === 27) e.target.value = '';\r\n      if (e.keyCode === 13 && e.target.value !== '') Object(_components_renderArticles__WEBPACK_IMPORTED_MODULE_0__[\"renderArticles\"])({ keyWord: e.target.value });\r\n    });\r\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_2__[\"searchButton\"].addEventListener('click', () => _stuff_constants__WEBPACK_IMPORTED_MODULE_2__[\"searchInput\"].value !== '' ? Object(_components_renderArticles__WEBPACK_IMPORTED_MODULE_0__[\"renderArticles\"])({ keyWord: _stuff_constants__WEBPACK_IMPORTED_MODULE_2__[\"searchInput\"].value }) : null);\r\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_2__[\"headingTitle\"].addEventListener('click', () => _stuff_constants__WEBPACK_IMPORTED_MODULE_2__[\"resultList\"].innerHTML = '');\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbml0aWFsaXplLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5pdGlhbGl6ZS5qcz9kNmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckFydGljbGVzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZW5kZXJBcnRpY2xlc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJOZXdzU291cmNlcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmVuZGVyTmV3c1NvdXJjZXNcIjtcclxuaW1wb3J0IHsgbmV3c1NvdXJjZXNDb250YWluZXIsIGFydGljbGVzQ29udGFpbmVyLCBzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uLCBoZWFkaW5nVGl0bGUsIHJlc3VsdExpc3QgfSBmcm9tICcuL3N0dWZmL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZW5kZXJOZXdzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLmluaXRpYWxpemUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCkge1xyXG4gICAgbmV3c1NvdXJjZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJOZXdzU291cmNlcygpKTtcclxuICAgIGFydGljbGVzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyQXJ0aWNsZXMoeyBjb3VudHJ5OiAndXMnIH0pKTtcclxuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcclxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIGUudGFyZ2V0LnZhbHVlID0gJyc7XHJcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGUudGFyZ2V0LnZhbHVlICE9PSAnJykgcmVuZGVyQXJ0aWNsZXMoeyBrZXlXb3JkOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH0pO1xyXG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2VhcmNoSW5wdXQudmFsdWUgIT09ICcnID8gcmVuZGVyQXJ0aWNsZXMoeyBrZXlXb3JkOiBzZWFyY2hJbnB1dC52YWx1ZSB9KSA6IG51bGwpO1xyXG4gICAgaGVhZGluZ1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVzdWx0TGlzdC5pbm5lckhUTUwgPSAnJyk7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./initialize.js\n");

/***/ }),

/***/ "./requests/fetchData.js":
/*!*******************************!*\
  !*** ./requests/fetchData.js ***!
  \*******************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\n/* harmony import */ var _stuff_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/constants */ \"./stuff/constants.js\");\n\r\n\r\nasync function fetchData({country, sources, keyWord}) {\r\n  let url = `https://newsapi.org/v2/sources?apiKey=${_stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY\"]}`;\r\n\r\n  if (sources) url = `https://newsapi.org/v2/top-headlines?sources=${sources.trim()}&apiKey=${_stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY\"]}`;\r\n  if (country) url = `https://newsapi.org/v2/top-headlines?country=${country.trim()}&apiKey=${_stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY\"]}`;\r\n  if (keyWord) url = `https://newsapi.org/v2/everything?q=${keyWord.trim()}&apiKey=${_stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY\"]}`;\r\n\r\n  let request = new Request(url);\r\n\r\n  return await fetch(request)\r\n    .then(response => response.json())\r\n    .catch(error => console.log(error.message));\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXF1ZXN0cy9mZXRjaERhdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXF1ZXN0cy9mZXRjaERhdGEuanM/NmEwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfS0VZIH0gZnJvbSAnLi4vc3R1ZmYvY29uc3RhbnRzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSh7Y291bnRyeSwgc291cmNlcywga2V5V29yZH0pIHtcclxuICBsZXQgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvc291cmNlcz9hcGlLZXk9JHtBUElfS0VZfWA7XHJcblxyXG4gIGlmIChzb3VyY2VzKSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP3NvdXJjZXM9JHtzb3VyY2VzLnRyaW0oKX0mYXBpS2V5PSR7QVBJX0tFWX1gO1xyXG4gIGlmIChjb3VudHJ5KSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9JHtjb3VudHJ5LnRyaW0oKX0mYXBpS2V5PSR7QVBJX0tFWX1gO1xyXG4gIGlmIChrZXlXb3JkKSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9JHtrZXlXb3JkLnRyaW0oKX0mYXBpS2V5PSR7QVBJX0tFWX1gO1xyXG5cclxuICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XHJcblxyXG4gIHJldHVybiBhd2FpdCBmZXRjaChyZXF1ZXN0KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmV0Y2hEYXRhIH07XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./requests/fetchData.js\n");

/***/ }),

/***/ "./stuff/constants.js":
/*!****************************!*\
  !*** ./stuff/constants.js ***!
  \****************************/
/*! exports provided: newsSourcesContainer, articlesContainer, searchInput, searchButton, headingTitle, resultList, API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourcesContainer\", function() { return newsSourcesContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articlesContainer\", function() { return articlesContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchInput\", function() { return searchInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchButton\", function() { return searchButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headingTitle\", function() { return headingTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resultList\", function() { return resultList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_KEY\", function() { return API_KEY; });\n// DOM ELEMENTS\r\nconst newsSourcesContainer = document.getElementById('load-news-sources');\r\nconst articlesContainer = document.getElementById('load-articles');\r\nconst searchInput = document.getElementById('search-input');\r\nconst searchButton = document.getElementById('search-button');\r\nconst headingTitle = document.getElementById('heading-title');\r\nconst resultList = document.getElementById('result-list');\r\n\r\n// API KEY\r\nconst API_KEY = 'f792cbef6ef14ad0b093ab88c321ea24';\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHVmZi9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHVmZi9jb25zdGFudHMuanM/MjJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBET00gRUxFTUVOVFNcclxuY29uc3QgbmV3c1NvdXJjZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZC1uZXdzLXNvdXJjZXMnKTtcclxuY29uc3QgYXJ0aWNsZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZC1hcnRpY2xlcycpO1xyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKTtcclxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKTtcclxuY29uc3QgaGVhZGluZ1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRpbmctdGl0bGUnKTtcclxuY29uc3QgcmVzdWx0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtbGlzdCcpO1xyXG5cclxuLy8gQVBJIEtFWVxyXG5jb25zdCBBUElfS0VZID0gJ2Y3OTJjYmVmNmVmMTRhZDBiMDkzYWI4OGMzMjFlYTI0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgbmV3c1NvdXJjZXNDb250YWluZXIsIFxyXG4gIGFydGljbGVzQ29udGFpbmVyLCBcclxuICBzZWFyY2hJbnB1dCwgXHJcbiAgc2VhcmNoQnV0dG9uLCBcclxuICBoZWFkaW5nVGl0bGUsIFxyXG4gIHJlc3VsdExpc3QsXHJcbiAgQVBJX0tFWVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./stuff/constants.js\n");

/***/ }),

/***/ "./stuff/helpers.js":
/*!**************************!*\
  !*** ./stuff/helpers.js ***!
  \**************************/
/*! exports provided: removeComas, formatTextForRequest, showProloader, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeComas\", function() { return removeComas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatTextForRequest\", function() { return formatTextForRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProloader\", function() { return showProloader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\nconst removeComas = list => list.toString().split(',').join('');\r\n\r\nconst formatTextForRequest = text => text.split(' ').join('-');\r\n\r\nconst showProloader = () => {\r\n  window.scrollTo(0, 0);\r\n  const spinner = document.getElementById('spinner-wrapper');\r\n  const result = document.getElementById('result-list');\r\n  spinner.style.opacity = 1;\r\n  result.style.opacity = 0;\r\n  setInterval(()=>{\r\n    spinner.style.opacity = 0;\r\n    result.style.opacity = 1;\r\n  }, 1000)\r\n}\r\n\r\nconst formatDate = notFormatedDate => {\r\n  const date = new Date(notFormatedDate);\r\n  const formatter = new Intl.DateTimeFormat(\"ru\");\r\n  return formatter.format(date);\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHVmZi9oZWxwZXJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R1ZmYvaGVscGVycy5qcz80ZTgxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlbW92ZUNvbWFzID0gbGlzdCA9PiBsaXN0LnRvU3RyaW5nKCkuc3BsaXQoJywnKS5qb2luKCcnKTtcclxuXHJcbmNvbnN0IGZvcm1hdFRleHRGb3JSZXF1ZXN0ID0gdGV4dCA9PiB0ZXh0LnNwbGl0KCcgJykuam9pbignLScpO1xyXG5cclxuY29uc3Qgc2hvd1Byb2xvYWRlciA9ICgpID0+IHtcclxuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyLXdyYXBwZXInKTtcclxuICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LWxpc3QnKTtcclxuICBzcGlubmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gIHJlc3VsdC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgc3Bpbm5lci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIHJlc3VsdC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICB9LCAxMDAwKVxyXG59XHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gbm90Rm9ybWF0ZWREYXRlID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUobm90Rm9ybWF0ZWREYXRlKTtcclxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcInJ1XCIpO1xyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGRhdGUpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHJlbW92ZUNvbWFzLFxyXG4gIGZvcm1hdFRleHRGb3JSZXF1ZXN0LFxyXG4gIHNob3dQcm9sb2FkZXIsXHJcbiAgZm9ybWF0RGF0ZVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./stuff/helpers.js\n");

/***/ }),

/***/ "./stuff/staticData.js":
/*!*****************************!*\
  !*** ./stuff/staticData.js ***!
  \*****************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countries\", function() { return countries; });\nconst countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr',, 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHVmZi9zdGF0aWNEYXRhLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R1ZmYvc3RhdGljRGF0YS5qcz9lYTQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb3VudHJpZXMgPSBbJ2FlJywgJ2FyJywgJ2F0JywgJ2F1JywgJ2JlJywgJ2JnJywgJ2JyJywgJ2NhJywgJ2NoJywgJ2NuJywgJ2NvJywgJ2N1JywgJ2N6JywgJ2RlJywgJ2VnJywgJ2ZyJywgJ2diJywgJ2dyJywgJ2hrJywgJ2h1JywgJ2lkJywgJ2llJywgJ2lsJywgJ2luJywgJ2l0JywgJ2pwJywgJ2tyJywsICdsdCcsICdsdicsICdtYScsICdteCcsICdteScsICduZycsICdubCcsICdubycsICdueicsICdwaCcsICdwbCcsICdwdCcsICdybycsICdycycsICdydScsICdzYScsICdzZScsICdzZycsICdzaScsICdzaycsICd0aCcsICd0cicsICd0dycsICd1YScsICd1cycsICd2ZScsICd6YSddOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./stuff/staticData.js\n");

/***/ })

/******/ });