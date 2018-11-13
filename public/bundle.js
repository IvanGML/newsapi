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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articleComponent\", function() { return articleComponent; });\nvar articleComponent = function articleComponent(_ref) {\n  var title = _ref.title,\n      author = _ref.author,\n      publishedAt = _ref.publishedAt,\n      description = _ref.description,\n      content = _ref.content,\n      url = _ref.url,\n      urlToImage = _ref.urlToImage;\n  description = description || '';\n  var descriptionArr = description.split(' ');\n  descriptionArr.length = 3;\n  var imgAlt = descriptionArr.join(' ');\n  return \"<article class=\\\"article\\\">\\n      <h2 class=\\\"article-header\\\">\".concat(title, \"</h2>\\n      <div class=\\\"article-content-wrapper\\\">\\n          <div class=\\\"article-content-text\\\">\\n              <div class=\\\"article-info\\\">\\n                  <p class=\\\"article-author\\\">\").concat(author, \"</p>\\n                  <p class=\\\"article-date\\\">\").concat(publishedAt, \"</p>\\n              </div>\\n              <p class=\\\"article-discription\\\">\").concat(description, \"</p>\\n              <p class=\\\"article-text\\\">\").concat(content, \"</p>\\n              <a href=\\\"\").concat(url, \"\\\" class=\\\"article-link\\\" target=\\\"_blank\\\">Read more...</a>\\n          </div>\\n          <div class=\\\"article-content-img\\\">\\n              <img src=\\\"\").concat(urlToImage, \"\\\" alt=\\\"\").concat(imgAlt, \"\\\" class=\\\"article-image\\\">\\n          </div>\\n      </div>\\n    </article>\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FydGljbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FydGljbGUuanM/NDkwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXJ0aWNsZUNvbXBvbmVudCA9ICh7dGl0bGUsIGF1dGhvciwgcHVibGlzaGVkQXQsIGRlc2NyaXB0aW9uLCBjb250ZW50LCB1cmwsIHVybFRvSW1hZ2V9KSA9PiB7XHJcbiAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCAnJztcclxuICBsZXQgZGVzY3JpcHRpb25BcnIgPSBkZXNjcmlwdGlvbi5zcGxpdCgnICcpO1xyXG4gIGRlc2NyaXB0aW9uQXJyLmxlbmd0aCA9IDM7XHJcbiAgbGV0IGltZ0FsdCA9IGRlc2NyaXB0aW9uQXJyLmpvaW4oJyAnKTtcclxuICByZXR1cm4gKFxyXG4gICAgYDxhcnRpY2xlIGNsYXNzPVwiYXJ0aWNsZVwiPlxyXG4gICAgICA8aDIgY2xhc3M9XCJhcnRpY2xlLWhlYWRlclwiPiR7dGl0bGV9PC9oMj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFydGljbGUtY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZS1jb250ZW50LXRleHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXJ0aWNsZS1hdXRob3JcIj4ke2F1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXJ0aWNsZS1kYXRlXCI+JHtwdWJsaXNoZWRBdH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcnRpY2xlLWRpc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcnRpY2xlLXRleHRcIj4ke2NvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIke3VybH1cIiBjbGFzcz1cImFydGljbGUtbGlua1wiIHRhcmdldD1cIl9ibGFua1wiPlJlYWQgbW9yZS4uLjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGUtY29udGVudC1pbWdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dXJsVG9JbWFnZX1cIiBhbHQ9XCIke2ltZ0FsdH1cIiBjbGFzcz1cImFydGljbGUtaW1hZ2VcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5gXHJcbiAgKTtcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/article.js\n");

/***/ }),

/***/ "./components/newsSource.js":
/*!**********************************!*\
  !*** ./components/newsSource.js ***!
  \**********************************/
/*! exports provided: newsSourceItem, newsSources, newsSourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourceItem\", function() { return newsSourceItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSources\", function() { return newsSources; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourcesComponent\", function() { return newsSourcesComponent; });\n/* harmony import */ var _utils_staticData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/staticData */ \"./utils/staticData.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.js\");\n\n\nvar newsSourceItem = function newsSourceItem(title) {\n  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : title;\n  return \"<div class=\\\"result-item\\\" title=\\\"\".concat(id, \"\\\">\\n      <p class=\\\"result-item-title\\\">\").concat(title, \"</p>\\n    </div>\");\n};\nvar newsSources = function newsSources(itemsList, itemsListCountries) {\n  var publishersContent = \"<div id=\\\"publishers-info\\\">\\n      <p class=\\\"news-sources-description\\\">\\n        We crawl and index news articles from over 30,000 news \\n        sources and blogs. We also monitor the top and breaking \\n        news headlines from the following 138 of the most notable \\n        of these sources. You can click through for integration \\n        examples.\\n      </p>\\n      <div class=\\\"news-sources-results\\\" id=\\\"news-sources-results\\\">\\n        \".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"removeComas\"])(itemsList), \"\\n      </div>\\n    </div>\");\n  var countriesContent = \"<div id=\\\"countries-info\\\" class=\\\"not-display\\\"\\\">\\n      <p class=\\\"news-sources-description\\\">\\n        We curate a list of top headlines for a range of countries. You can click through for integration examples.\\n      </p>\\n      <div class=\\\"news-sources-results\\\" id=\\\"news-sources-results\\\">\\n        \".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"removeComas\"])(itemsListCountries), \"\\n      </div>\\n    </div>\");\n  return \"<section class=\\\"news-sources-wrapper\\\">\\n      <h2 class=\\\"news-sources-header\\\">News sources</h2>\\n      <div class=\\\"news-sources-controls-wrapper\\\">\\n        <h3 class=\\\"news-tab selected\\\" title=\\\"publishers\\\">Publishers</h3>\\n        <h3 class=\\\"news-tab\\\" title=\\\"countries\\\">Countries</h3>\\n      </div>\\n      \".concat(publishersContent, \"\\n      \").concat(countriesContent, \"\\n    </section>\");\n};\nvar newsSourcesComponent = function newsSourcesComponent(sources) {\n  var itemsList = sources.map(function (item) {\n    return newsSourceItem(item.name, item.id);\n  });\n  var itemsListCountries = _utils_staticData__WEBPACK_IMPORTED_MODULE_0__[\"countries\"].map(function (item) {\n    return newsSourceItem(item);\n  });\n  return newsSources(itemsList, itemsListCountries);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25ld3NTb3VyY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld3NTb3VyY2UuanM/ZDViNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tICcuLi91dGlscy9zdGF0aWNEYXRhJztcclxuaW1wb3J0IHsgcmVtb3ZlQ29tYXMgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzU291cmNlSXRlbSA9ICh0aXRsZSwgaWQgPSB0aXRsZSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICBgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtXCIgdGl0bGU9XCIke2lkfVwiPlxyXG4gICAgICA8cCBjbGFzcz1cInJlc3VsdC1pdGVtLXRpdGxlXCI+JHt0aXRsZX08L3A+XHJcbiAgICA8L2Rpdj5gXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzU291cmNlcyA9IChpdGVtc0xpc3QsIGl0ZW1zTGlzdENvdW50cmllcykgPT4ge1xyXG5cclxuICBjb25zdCBwdWJsaXNoZXJzQ29udGVudCA9XHJcbiAgICBgPGRpdiBpZD1cInB1Ymxpc2hlcnMtaW5mb1wiPlxyXG4gICAgICA8cCBjbGFzcz1cIm5ld3Mtc291cmNlcy1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIFdlIGNyYXdsIGFuZCBpbmRleCBuZXdzIGFydGljbGVzIGZyb20gb3ZlciAzMCwwMDAgbmV3cyBcclxuICAgICAgICBzb3VyY2VzIGFuZCBibG9ncy4gV2UgYWxzbyBtb25pdG9yIHRoZSB0b3AgYW5kIGJyZWFraW5nIFxyXG4gICAgICAgIG5ld3MgaGVhZGxpbmVzIGZyb20gdGhlIGZvbGxvd2luZyAxMzggb2YgdGhlIG1vc3Qgbm90YWJsZSBcclxuICAgICAgICBvZiB0aGVzZSBzb3VyY2VzLiBZb3UgY2FuIGNsaWNrIHRocm91Z2ggZm9yIGludGVncmF0aW9uIFxyXG4gICAgICAgIGV4YW1wbGVzLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdzLXNvdXJjZXMtcmVzdWx0c1wiIGlkPVwibmV3cy1zb3VyY2VzLXJlc3VsdHNcIj5cclxuICAgICAgICAke3JlbW92ZUNvbWFzKGl0ZW1zTGlzdCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgY29uc3QgY291bnRyaWVzQ29udGVudCA9XHJcbiAgICBgPGRpdiBpZD1cImNvdW50cmllcy1pbmZvXCIgY2xhc3M9XCJub3QtZGlzcGxheVwiXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwibmV3cy1zb3VyY2VzLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgV2UgY3VyYXRlIGEgbGlzdCBvZiB0b3AgaGVhZGxpbmVzIGZvciBhIHJhbmdlIG9mIGNvdW50cmllcy4gWW91IGNhbiBjbGljayB0aHJvdWdoIGZvciBpbnRlZ3JhdGlvbiBleGFtcGxlcy5cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmV3cy1zb3VyY2VzLXJlc3VsdHNcIiBpZD1cIm5ld3Mtc291cmNlcy1yZXN1bHRzXCI+XHJcbiAgICAgICAgJHtyZW1vdmVDb21hcyhpdGVtc0xpc3RDb3VudHJpZXMpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgYDxzZWN0aW9uIGNsYXNzPVwibmV3cy1zb3VyY2VzLXdyYXBwZXJcIj5cclxuICAgICAgPGgyIGNsYXNzPVwibmV3cy1zb3VyY2VzLWhlYWRlclwiPk5ld3Mgc291cmNlczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdzLXNvdXJjZXMtY29udHJvbHMtd3JhcHBlclwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm5ld3MtdGFiIHNlbGVjdGVkXCIgdGl0bGU9XCJwdWJsaXNoZXJzXCI+UHVibGlzaGVyczwvaDM+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibmV3cy10YWJcIiB0aXRsZT1cImNvdW50cmllc1wiPkNvdW50cmllczwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAke3B1Ymxpc2hlcnNDb250ZW50fVxyXG4gICAgICAke2NvdW50cmllc0NvbnRlbnR9XHJcbiAgICA8L3NlY3Rpb24+YFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzU291cmNlc0NvbXBvbmVudCA9IChzb3VyY2VzKSA9PiB7XHJcbiAgbGV0IGl0ZW1zTGlzdCA9IHNvdXJjZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgcmV0dXJuIG5ld3NTb3VyY2VJdGVtKGl0ZW0ubmFtZSwgaXRlbS5pZCk7XHJcbiAgfSk7XHJcbiAgbGV0IGl0ZW1zTGlzdENvdW50cmllcyA9IGNvdW50cmllcy5tYXAoaXRlbSA9PiB7XHJcbiAgICByZXR1cm4gbmV3c1NvdXJjZUl0ZW0oaXRlbSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld3NTb3VyY2VzKGl0ZW1zTGlzdCwgaXRlbXNMaXN0Q291bnRyaWVzKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7QUFjQTtBQVdBO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/newsSource.js\n");

/***/ }),

/***/ "./components/render.js":
/*!******************************!*\
  !*** ./components/render.js ***!
  \******************************/
/*! exports provided: renderArticles, renderSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderArticles\", function() { return renderArticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSources\", function() { return renderSources; });\n/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ \"./components/article.js\");\n/* harmony import */ var _newsSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsSource */ \"./components/newsSource.js\");\n\n\nvar loadingContainer = document.getElementById('result-list');\nvar renderArticles = function renderArticles(data) {\n  var articles = data.articles;\n  var articlesList = articles.map(function (item) {\n    return Object(_article__WEBPACK_IMPORTED_MODULE_0__[\"articleComponent\"])(item);\n  });\n  loadingContainer.innerHTML = articlesList;\n};\nvar renderSources = function renderSources(data) {\n  var sources = data.sources;\n  var sourcesList = Object(_newsSource__WEBPACK_IMPORTED_MODULE_1__[\"newsSourcesComponent\"])(sources);\n  loadingContainer.innerHTML = sourcesList;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlbmRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVuZGVyLmpzP2ViNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXJ0aWNsZUNvbXBvbmVudCB9IGZyb20gXCIuL2FydGljbGVcIjtcclxuaW1wb3J0IHsgbmV3c1NvdXJjZXNDb21wb25lbnQgfSBmcm9tIFwiLi9uZXdzU291cmNlXCI7XHJcblxyXG5sZXQgbG9hZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtbGlzdCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckFydGljbGVzID0gKGRhdGEpID0+IHtcclxuICBsZXQgeyBhcnRpY2xlcyB9ID0gZGF0YTtcclxuICBsZXQgYXJ0aWNsZXNMaXN0ID0gYXJ0aWNsZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgcmV0dXJuIGFydGljbGVDb21wb25lbnQoaXRlbSk7XHJcbiAgfSk7XHJcbiAgbG9hZGluZ0NvbnRhaW5lci5pbm5lckhUTUwgPSBhcnRpY2xlc0xpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJTb3VyY2VzID0gKGRhdGEpID0+IHtcclxuICBsZXQgeyBzb3VyY2VzIH0gPSBkYXRhO1xyXG4gIGxldCBzb3VyY2VzTGlzdCA9IG5ld3NTb3VyY2VzQ29tcG9uZW50KHNvdXJjZXMpO1xyXG4gIGxvYWRpbmdDb250YWluZXIuaW5uZXJIVE1MID0gc291cmNlc0xpc3Q7XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/render.js\n");

/***/ }),

/***/ "./hendlers/newsItemClickHandler.js":
/*!******************************************!*\
  !*** ./hendlers/newsItemClickHandler.js ***!
  \******************************************/
/*! exports provided: newsItemClickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsItemClickHandler\", function() { return newsItemClickHandler; });\n/* harmony import */ var _requests_fetchArticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requests/fetchArticles */ \"./requests/fetchArticles.js\");\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/render */ \"./components/render.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nvar newsItemClickHandler = function newsItemClickHandler() {\n  var resultItems = _toConsumableArray(document.querySelectorAll('.result-item'));\n\n  resultItems.forEach(function (item) {\n    item.addEventListener('click', function () {\n      var sources = this.getAttribute('title');\n\n      if (sources.length > 2 && sources !== 'rt') {\n        Object(_requests_fetchArticles__WEBPACK_IMPORTED_MODULE_0__[\"fetchArticles\"])({\n          sources: sources,\n          renderArticles: _components_render__WEBPACK_IMPORTED_MODULE_1__[\"renderArticles\"]\n        });\n      } else {\n        console.log(sources);\n        Object(_requests_fetchArticles__WEBPACK_IMPORTED_MODULE_0__[\"fetchArticles\"])({\n          country: sources,\n          renderArticles: _components_render__WEBPACK_IMPORTED_MODULE_1__[\"renderArticles\"]\n        });\n      }\n    });\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZW5kbGVycy9uZXdzSXRlbUNsaWNrSGFuZGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hlbmRsZXJzL25ld3NJdGVtQ2xpY2tIYW5kbGVyLmpzPzA0NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hBcnRpY2xlcyB9IGZyb20gJy4uL3JlcXVlc3RzL2ZldGNoQXJ0aWNsZXMnO1xyXG5pbXBvcnQgeyByZW5kZXJBcnRpY2xlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVuZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzSXRlbUNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICBjb25zdCByZXN1bHRJdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdWx0LWl0ZW0nKV07XHJcbiAgcmVzdWx0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IHNvdXJjZXMgPSB0aGlzLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcclxuICAgICAgaWYgKHNvdXJjZXMubGVuZ3RoID4gMiAmJiBzb3VyY2VzICE9PSAncnQnKSB7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcyh7IHNvdXJjZXMsIHJlbmRlckFydGljbGVzfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc291cmNlcyk7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcyh7IGNvdW50cnk6IHNvdXJjZXMsIHJlbmRlckFydGljbGVzfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hendlers/newsItemClickHandler.js\n");

/***/ }),

/***/ "./hendlers/toggler.js":
/*!*****************************!*\
  !*** ./hendlers/toggler.js ***!
  \*****************************/
/*! exports provided: toggleTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleTabs\", function() { return toggleTabs; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar toggleTabs = function toggleTabs() {\n  var tabs = _toConsumableArray(document.querySelectorAll('.news-tab'));\n\n  var removeSelected = function removeSelected() {\n    return tabs.forEach(function (item) {\n      return item.classList.remove('selected');\n    });\n  };\n\n  var switchContent = function switchContent() {\n    var publishers = document.getElementById('publishers-info');\n    var countries = document.getElementById('countries-info');\n    countries.classList.toggle('not-display');\n    publishers.classList.toggle('not-display');\n  };\n\n  tabs.forEach(function (elem) {\n    elem.addEventListener(\"click\", function (e) {\n      removeSelected();\n      switchContent();\n      elem.classList.add('selected');\n    });\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZW5kbGVycy90b2dnbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGVuZGxlcnMvdG9nZ2xlci5qcz9iZmJmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0b2dnbGVUYWJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRhYnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld3MtdGFiJyldO1xyXG4gIGNvbnN0IHJlbW92ZVNlbGVjdGVkID0gKCkgPT4gdGFicy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcclxuICBjb25zdCBzd2l0Y2hDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgbGV0IHB1Ymxpc2hlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVibGlzaGVycy1pbmZvJyk7XHJcbiAgICBsZXQgY291bnRyaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cmllcy1pbmZvJyk7XHJcbiAgICBjb3VudHJpZXMuY2xhc3NMaXN0LnRvZ2dsZSgnbm90LWRpc3BsYXknKTtcclxuICAgIHB1Ymxpc2hlcnMuY2xhc3NMaXN0LnRvZ2dsZSgnbm90LWRpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIHRhYnMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICByZW1vdmVTZWxlY3RlZCgpO1xyXG4gICAgICBzd2l0Y2hDb250ZW50KCk7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hendlers/toggler.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _requests_fetchArticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests/fetchArticles */ \"./requests/fetchArticles.js\");\n/* harmony import */ var _requests_fetchNewsSources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests/fetchNewsSources */ \"./requests/fetchNewsSources.js\");\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/render */ \"./components/render.js\");\n\n\n\n\nvar newsSourcesContainer = document.getElementById('load-news-sources');\nvar articlesContainer = document.getElementById('load-articles');\nvar searchInput = document.getElementById('search-input');\nvar searchButton = document.getElementById('search-button');\nvar headingTitle = document.getElementById('heading-title');\nvar resultList = document.getElementById('result-list');\nnewsSourcesContainer.addEventListener('click', function () {\n  return Object(_requests_fetchNewsSources__WEBPACK_IMPORTED_MODULE_1__[\"fetchNewsSources\"])(_components_render__WEBPACK_IMPORTED_MODULE_2__[\"renderSources\"]);\n});\narticlesContainer.addEventListener('click', function () {\n  return Object(_requests_fetchArticles__WEBPACK_IMPORTED_MODULE_0__[\"fetchArticles\"])({\n    country: 'us',\n    renderArticles: _components_render__WEBPACK_IMPORTED_MODULE_2__[\"renderArticles\"]\n  });\n});\nsearchInput.addEventListener('keydown', function (e) {\n  if (e.keyCode === 27) e.target.value = '';\n  if (e.keyCode === 13 && e.target.value !== '') Object(_requests_fetchArticles__WEBPACK_IMPORTED_MODULE_0__[\"fetchArticles\"])({\n    keyWord: e.target.value,\n    renderArticles: _components_render__WEBPACK_IMPORTED_MODULE_2__[\"renderArticles\"]\n  });\n});\nsearchButton.addEventListener('click', function () {\n  return searchInput.value !== '' ? Object(_requests_fetchArticles__WEBPACK_IMPORTED_MODULE_0__[\"fetchArticles\"])({\n    keyWord: searchInput.value,\n    renderArticles: _components_render__WEBPACK_IMPORTED_MODULE_2__[\"renderArticles\"]\n  }) : null;\n});\nheadingTitle.addEventListener('click', function () {\n  return resultList.innerHTML = '';\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hBcnRpY2xlcyB9IGZyb20gXCIuL3JlcXVlc3RzL2ZldGNoQXJ0aWNsZXNcIjtcclxuaW1wb3J0IHsgZmV0Y2hOZXdzU291cmNlcyB9IGZyb20gXCIuL3JlcXVlc3RzL2ZldGNoTmV3c1NvdXJjZXNcIjtcclxuaW1wb3J0IHsgcmVuZGVyQXJ0aWNsZXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JlbmRlclwiO1xyXG5pbXBvcnQgeyByZW5kZXJTb3VyY2VzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZW5kZXJcIjtcclxuXHJcbmNvbnN0IG5ld3NTb3VyY2VzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWQtbmV3cy1zb3VyY2VzJyk7XHJcbmNvbnN0IGFydGljbGVzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWQtYXJ0aWNsZXMnKTtcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XHJcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XHJcbmNvbnN0IGhlYWRpbmdUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkaW5nLXRpdGxlJyk7XHJcbmNvbnN0IHJlc3VsdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LWxpc3QnKTtcclxuXHJcbm5ld3NTb3VyY2VzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZmV0Y2hOZXdzU291cmNlcyhyZW5kZXJTb3VyY2VzKSk7XHJcbmFydGljbGVzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZmV0Y2hBcnRpY2xlcyh7Y291bnRyeTondXMnLCByZW5kZXJBcnRpY2xlc30pKTtcclxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gIGlmIChlLmtleUNvZGUgPT09IDI3KSBlLnRhcmdldC52YWx1ZSA9ICcnO1xyXG4gIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGUudGFyZ2V0LnZhbHVlICE9PSAnJykgZmV0Y2hBcnRpY2xlcyh7a2V5V29yZDogZS50YXJnZXQudmFsdWUsIHJlbmRlckFydGljbGVzfSk7XHJcbn0pO1xyXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZWFyY2hJbnB1dC52YWx1ZSAhPT0gJycgPyBmZXRjaEFydGljbGVzKHtrZXlXb3JkOiBzZWFyY2hJbnB1dC52YWx1ZSwgcmVuZGVyQXJ0aWNsZXN9KSA6IG51bGwpO1xyXG5oZWFkaW5nVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZXN1bHRMaXN0LmlubmVySFRNTCA9ICcnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./requests/fetchArticles.js":
/*!***********************************!*\
  !*** ./requests/fetchArticles.js ***!
  \***********************************/
/*! exports provided: fetchArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchArticles\", function() { return fetchArticles; });\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.js\");\n\nvar fetchArticles = function fetchArticles(_ref) {\n  var country = _ref.country,\n      sources = _ref.sources,\n      keyWord = _ref.keyWord,\n      renderArticles = _ref.renderArticles;\n  var url = '';\n  if (sources) url = \"https://newsapi.org/v2/top-headlines?sources=\".concat(sources.trim(), \"&apiKey=f792cbef6ef14ad0b093ab88c321ea24\");\n  if (country) url = \"https://newsapi.org/v2/top-headlines?country=\".concat(country.trim(), \"&apiKey=f792cbef6ef14ad0b093ab88c321ea24\");\n  if (keyWord) url = \"https://newsapi.org/v2/everything?q=\".concat(keyWord.trim(), \"&apiKey=f792cbef6ef14ad0b093ab88c321ea24\");\n  var req = new Request(url);\n  Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"showProloader\"])();\n  fetch(req).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    renderArticles(data);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXF1ZXN0cy9mZXRjaEFydGljbGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVxdWVzdHMvZmV0Y2hBcnRpY2xlcy5qcz8yMzBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dQcm9sb2FkZXIgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQXJ0aWNsZXMgPSAoeyBjb3VudHJ5LCBzb3VyY2VzLCBrZXlXb3JkLCByZW5kZXJBcnRpY2xlcyB9KSA9PiB7XHJcbiAgbGV0IHVybCA9ICcnO1xyXG5cclxuICBpZiAoc291cmNlcykgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9zb3VyY2VzPSR7c291cmNlcy50cmltKCl9JmFwaUtleT1mNzkyY2JlZjZlZjE0YWQwYjA5M2FiODhjMzIxZWEyNGA7XHJcbiAgaWYgKGNvdW50cnkpIHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/Y291bnRyeT0ke2NvdW50cnkudHJpbSgpfSZhcGlLZXk9Zjc5MmNiZWY2ZWYxNGFkMGIwOTNhYjg4YzMyMWVhMjRgO1xyXG4gIGlmIChrZXlXb3JkKSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9JHtrZXlXb3JkLnRyaW0oKX0mYXBpS2V5PWY3OTJjYmVmNmVmMTRhZDBiMDkzYWI4OGMzMjFlYTI0YDtcclxuXHJcbiAgbGV0IHJlcSA9IG5ldyBSZXF1ZXN0KHVybCk7XHJcbiAgXHJcbiAgc2hvd1Byb2xvYWRlcigpO1xyXG4gIFxyXG4gIGZldGNoKHJlcSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICByZW5kZXJBcnRpY2xlcyhkYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./requests/fetchArticles.js\n");

/***/ }),

/***/ "./requests/fetchNewsSources.js":
/*!**************************************!*\
  !*** ./requests/fetchNewsSources.js ***!
  \**************************************/
/*! exports provided: fetchNewsSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchNewsSources\", function() { return fetchNewsSources; });\n/* harmony import */ var _hendlers_toggler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hendlers/toggler */ \"./hendlers/toggler.js\");\n/* harmony import */ var _hendlers_newsItemClickHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hendlers/newsItemClickHandler */ \"./hendlers/newsItemClickHandler.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.js\");\n\n\n\nvar fetchNewsSources = function fetchNewsSources(renderHtml) {\n  var url = \"https://newsapi.org/v2/sources?apiKey=f792cbef6ef14ad0b093ab88c321ea24\";\n  var req = new Request(url);\n  Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__[\"showProloader\"])();\n  fetch(req).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    renderHtml(data);\n    Object(_hendlers_toggler__WEBPACK_IMPORTED_MODULE_0__[\"toggleTabs\"])();\n    Object(_hendlers_newsItemClickHandler__WEBPACK_IMPORTED_MODULE_1__[\"newsItemClickHandler\"])();\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXF1ZXN0cy9mZXRjaE5ld3NTb3VyY2VzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVxdWVzdHMvZmV0Y2hOZXdzU291cmNlcy5qcz9kMzYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZ2dsZVRhYnMgfSBmcm9tIFwiLi4vaGVuZGxlcnMvdG9nZ2xlclwiO1xyXG5pbXBvcnQgeyBuZXdzSXRlbUNsaWNrSGFuZGxlciB9IGZyb20gXCIuLi9oZW5kbGVycy9uZXdzSXRlbUNsaWNrSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBzaG93UHJvbG9hZGVyIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaE5ld3NTb3VyY2VzID0gcmVuZGVySHRtbCA9PiB7XHJcbiAgXHJcbiAgbGV0IHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YyL3NvdXJjZXM/YXBpS2V5PWY3OTJjYmVmNmVmMTRhZDBiMDkzYWI4OGMzMjFlYTI0YDtcclxuICBsZXQgcmVxID0gbmV3IFJlcXVlc3QodXJsKTtcclxuICBcclxuICBzaG93UHJvbG9hZGVyKCk7XHJcblxyXG4gIGZldGNoKHJlcSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICByZW5kZXJIdG1sKGRhdGEpO1xyXG4gICAgICB0b2dnbGVUYWJzKCk7XHJcbiAgICAgIG5ld3NJdGVtQ2xpY2tIYW5kbGVyKCk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./requests/fetchNewsSources.js\n");

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: removeComas, formatTextForRequest, showProloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeComas\", function() { return removeComas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatTextForRequest\", function() { return formatTextForRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProloader\", function() { return showProloader; });\nvar removeComas = function removeComas(list) {\n  return list.toString().split(',').join('');\n};\n\nvar formatTextForRequest = function formatTextForRequest(text) {\n  return text.split(' ').join('-');\n};\n\nvar showProloader = function showProloader() {\n  var spinner = document.getElementById('spinner-wrapper');\n  var result = document.getElementById('result-list');\n  spinner.style.opacity = 1;\n  result.style.opacity = 0;\n  setInterval(function () {\n    spinner.style.opacity = 0;\n    result.style.opacity = 1;\n  }, 1000);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9oZWxwZXJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGVscGVycy5qcz8yMDVmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlbW92ZUNvbWFzID0gbGlzdCA9PiBsaXN0LnRvU3RyaW5nKCkuc3BsaXQoJywnKS5qb2luKCcnKTtcclxuXHJcbmNvbnN0IGZvcm1hdFRleHRGb3JSZXF1ZXN0ID0gdGV4dCA9PiB0ZXh0LnNwbGl0KCcgJykuam9pbignLScpO1xyXG5cclxuY29uc3Qgc2hvd1Byb2xvYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXItd3JhcHBlcicpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtbGlzdCcpO1xyXG4gIHNwaW5uZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgcmVzdWx0LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gIHNldEludGVydmFsKCgpPT57XHJcbiAgICBzcGlubmVyLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgcmVzdWx0LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gIH0sIDEwMDApXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgcmVtb3ZlQ29tYXMsXHJcbiAgZm9ybWF0VGV4dEZvclJlcXVlc3QsXHJcbiAgc2hvd1Byb2xvYWRlclxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/helpers.js\n");

/***/ }),

/***/ "./utils/staticData.js":
/*!*****************************!*\
  !*** ./utils/staticData.js ***!
  \*****************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countries\", function() { return countries; });\nvar countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr',, 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdGF0aWNEYXRhLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RhdGljRGF0YS5qcz81M2U3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb3VudHJpZXMgPSBbJ2FlJywgJ2FyJywgJ2F0JywgJ2F1JywgJ2JlJywgJ2JnJywgJ2JyJywgJ2NhJywgJ2NoJywgJ2NuJywgJ2NvJywgJ2N1JywgJ2N6JywgJ2RlJywgJ2VnJywgJ2ZyJywgJ2diJywgJ2dyJywgJ2hrJywgJ2h1JywgJ2lkJywgJ2llJywgJ2lsJywgJ2luJywgJ2l0JywgJ2pwJywgJ2tyJywsICdsdCcsICdsdicsICdtYScsICdteCcsICdteScsICduZycsICdubCcsICdubycsICdueicsICdwaCcsICdwbCcsICdwdCcsICdybycsICdycycsICdydScsICdzYScsICdzZScsICdzZycsICdzaScsICdzaycsICd0aCcsICd0cicsICd0dycsICd1YScsICd1cycsICd2ZScsICd6YSddOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/staticData.js\n");

/***/ })

/******/ });