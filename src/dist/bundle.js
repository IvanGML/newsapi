/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "./" + chunkId + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./API/DataService.js":
/*!****************************!*\
  !*** ./API/DataService.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DataService; });\n/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requests */ \"./requests/index.js\");\n\r\n\r\nclass DataService {\r\n  constructor({type, apiKey}) {\r\n    if (type === 'fetch') {\r\n      this.getData = this.fetchData.bind(this);\r\n    } else {\r\n      this.getData = () => console.log('This type of representing data is not maintainable for now.');\r\n    }\r\n    this.apiKey = apiKey;\r\n  }\r\n\r\n  fetchData(...data) {\r\n    return Object(_requests__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({apiKey: this.apiKey, ...data[0]});\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUEkvRGF0YVNlcnZpY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BUEkvRGF0YVNlcnZpY2UuanM/OGQwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9yZXF1ZXN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3Ioe3R5cGUsIGFwaUtleX0pIHtcclxuICAgIGlmICh0eXBlID09PSAnZmV0Y2gnKSB7XHJcbiAgICAgIHRoaXMuZ2V0RGF0YSA9IHRoaXMuZmV0Y2hEYXRhLmJpbmQodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldERhdGEgPSAoKSA9PiBjb25zb2xlLmxvZygnVGhpcyB0eXBlIG9mIHJlcHJlc2VudGluZyBkYXRhIGlzIG5vdCBtYWludGFpbmFibGUgZm9yIG5vdy4nKTtcclxuICAgIH1cclxuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xyXG4gIH1cclxuXHJcbiAgZmV0Y2hEYXRhKC4uLmRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KHthcGlLZXk6IHRoaXMuYXBpS2V5LCAuLi5kYXRhWzBdfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./API/DataService.js\n");

/***/ }),

/***/ "./Initializer/Initializer.js":
/*!************************************!*\
  !*** ./Initializer/Initializer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Initializer; });\n/* harmony import */ var _stuff_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/constants */ \"./stuff/constants.js\");\n\r\n\r\nclass Initializer {\r\n  constructor(renderer, dataService) {\r\n    this.renderer = renderer;\r\n    this.dataService = dataService;\r\n    this.initialize = this.initialize.bind(this);\r\n  }\r\n\r\n  initialize() {\r\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"articlesContainer\"].addEventListener('click', () => this.renderer.renderArticles({\r\n      fetchData: this.dataService.getData,\r\n      requestData: { country: 'us' },\r\n    }));\r\n\r\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"newsSourcesContainer\"].addEventListener('click', () =>\r\n      this.renderer.renderNewsSources(this.dataService.getData));\r\n\r\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"searchInput\"].addEventListener('keydown', e => {\r\n      if (e.keyCode === 27) e.target.value = '';\r\n      if (e.keyCode === 13 && e.target.value !== '') {\r\n        this.renderer.renderArticles({\r\n          fetchData: this.dataService.getData,\r\n          requestData: { keyWord: e.target.value },\r\n        })\r\n      }\r\n    });\r\n\r\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"searchButton\"].addEventListener('click', () => _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"searchInput\"].value !== '' ? this.renderer.renderArticles({\r\n      fetchData: this.dataService.getData,\r\n      requestData: { keyWord: _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"searchInput\"].value },\r\n    }) : null);\r\n    \r\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"headingTitle\"].addEventListener('click', () => _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"resultList\"].innerHTML = '');\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Jbml0aWFsaXplci9Jbml0aWFsaXplci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0luaXRpYWxpemVyL0luaXRpYWxpemVyLmpzPzU5NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmV3c1NvdXJjZXNDb250YWluZXIsIGFydGljbGVzQ29udGFpbmVyLCBzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uLCBoZWFkaW5nVGl0bGUsIHJlc3VsdExpc3QgfSBmcm9tICcuLi9zdHVmZi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdGlhbGl6ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBkYXRhU2VydmljZSkge1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5kYXRhU2VydmljZSA9IGRhdGFTZXJ2aWNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXplID0gdGhpcy5pbml0aWFsaXplLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCkge1xyXG4gICAgYXJ0aWNsZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlbmRlcmVyLnJlbmRlckFydGljbGVzKHtcclxuICAgICAgZmV0Y2hEYXRhOiB0aGlzLmRhdGFTZXJ2aWNlLmdldERhdGEsXHJcbiAgICAgIHJlcXVlc3REYXRhOiB7IGNvdW50cnk6ICd1cycgfSxcclxuICAgIH0pKTtcclxuXHJcbiAgICBuZXdzU291cmNlc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyTmV3c1NvdXJjZXModGhpcy5kYXRhU2VydmljZS5nZXREYXRhKSk7XHJcblxyXG4gICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgZS50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgZS50YXJnZXQudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXJBcnRpY2xlcyh7XHJcbiAgICAgICAgICBmZXRjaERhdGE6IHRoaXMuZGF0YVNlcnZpY2UuZ2V0RGF0YSxcclxuICAgICAgICAgIHJlcXVlc3REYXRhOiB7IGtleVdvcmQ6IGUudGFyZ2V0LnZhbHVlIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2VhcmNoSW5wdXQudmFsdWUgIT09ICcnID8gdGhpcy5yZW5kZXJlci5yZW5kZXJBcnRpY2xlcyh7XHJcbiAgICAgIGZldGNoRGF0YTogdGhpcy5kYXRhU2VydmljZS5nZXREYXRhLFxyXG4gICAgICByZXF1ZXN0RGF0YTogeyBrZXlXb3JkOiBzZWFyY2hJbnB1dC52YWx1ZSB9LFxyXG4gICAgfSkgOiBudWxsKTtcclxuICAgIFxyXG4gICAgaGVhZGluZ1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVzdWx0TGlzdC5pbm5lckhUTUwgPSAnJyk7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Initializer/Initializer.js\n");

/***/ }),

/***/ "./Initializer/index.js":
/*!******************************!*\
  !*** ./Initializer/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initializer */ \"./Initializer/Initializer.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Initializer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Jbml0aWFsaXplci9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0luaXRpYWxpemVyL2luZGV4LmpzP2EyZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluaXRpYWxpemVyIGZyb20gJy4vSW5pdGlhbGl6ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5pdGlhbGl6ZXI7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Initializer/index.js\n");

/***/ }),

/***/ "./Renderer/Renderer.js":
/*!******************************!*\
  !*** ./Renderer/Renderer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderer; });\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n/* harmony import */ var _view_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/article */ \"./view/article.js\");\n/* harmony import */ var _view_newsSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/newsSource */ \"./view/newsSource.js\");\n/* harmony import */ var _view_dinamic_elements_events_toggler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/dinamic-elements-events/toggler */ \"./view/dinamic-elements-events/toggler.js\");\n/* harmony import */ var _view_dinamic_elements_events_newsItemClickHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/dinamic-elements-events/newsItemClickHandler */ \"./view/dinamic-elements-events/newsItemClickHandler.js\");\n/* harmony import */ var _stuff_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stuff/constants */ \"./stuff/constants.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Renderer {\r\n  constructor() {\r\n    this.renderArticles = this.renderArticles.bind(this);\r\n    this.renderNewsSources = this.renderNewsSources.bind(this);\r\n  }\r\n\r\n  renderArticles({fetchData, requestData}) {\r\n    Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"showPreloader\"])();\r\n    fetchData(requestData)\r\n      .then(data => {\r\n        let { articles } = data;\r\n        let articlesList = articles.map(item => Object(_view_article__WEBPACK_IMPORTED_MODULE_1__[\"articleComponent\"])(item));\r\n        _stuff_constants__WEBPACK_IMPORTED_MODULE_5__[\"resultList\"].innerHTML = articlesList;\r\n      });\r\n  }\r\n\r\n  renderNewsSources(fetchData) {\r\n    Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"showPreloader\"])();\r\n    fetchData({})\r\n      .then(data => {\r\n        let { sources } = data;\r\n        let sourcesList = Object(_view_newsSource__WEBPACK_IMPORTED_MODULE_2__[\"newsSourcesComponent\"])(sources);\r\n        _stuff_constants__WEBPACK_IMPORTED_MODULE_5__[\"resultList\"].innerHTML = sourcesList;\r\n        Object(_view_dinamic_elements_events_toggler__WEBPACK_IMPORTED_MODULE_3__[\"toggleTabs\"])();\r\n        Object(_view_dinamic_elements_events_newsItemClickHandler__WEBPACK_IMPORTED_MODULE_4__[\"newsItemClickHandler\"])(this.renderArticles, fetchData);\r\n      });\r\n  }\r\n\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZW5kZXJlci9SZW5kZXJlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlbmRlcmVyL1JlbmRlcmVyLmpzP2IyNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd1ByZWxvYWRlciB9IGZyb20gXCIuLi9zdHVmZi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IGFydGljbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vdmlldy9hcnRpY2xlXCI7XHJcbmltcG9ydCB7IG5ld3NTb3VyY2VzQ29tcG9uZW50IH0gZnJvbSBcIi4uL3ZpZXcvbmV3c1NvdXJjZVwiO1xyXG5pbXBvcnQgeyB0b2dnbGVUYWJzIH0gZnJvbSBcIi4uL3ZpZXcvZGluYW1pYy1lbGVtZW50cy1ldmVudHMvdG9nZ2xlclwiO1xyXG5pbXBvcnQgeyBuZXdzSXRlbUNsaWNrSGFuZGxlciB9IGZyb20gXCIuLi92aWV3L2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL25ld3NJdGVtQ2xpY2tIYW5kbGVyXCI7XHJcbmltcG9ydCB7IHJlc3VsdExpc3QgfSBmcm9tICcuLi9zdHVmZi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yZW5kZXJBcnRpY2xlcyA9IHRoaXMucmVuZGVyQXJ0aWNsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVuZGVyTmV3c1NvdXJjZXMgPSB0aGlzLnJlbmRlck5ld3NTb3VyY2VzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJBcnRpY2xlcyh7ZmV0Y2hEYXRhLCByZXF1ZXN0RGF0YX0pIHtcclxuICAgIHNob3dQcmVsb2FkZXIoKTtcclxuICAgIGZldGNoRGF0YShyZXF1ZXN0RGF0YSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgbGV0IHsgYXJ0aWNsZXMgfSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IGFydGljbGVzTGlzdCA9IGFydGljbGVzLm1hcChpdGVtID0+IGFydGljbGVDb21wb25lbnQoaXRlbSkpO1xyXG4gICAgICAgIHJlc3VsdExpc3QuaW5uZXJIVE1MID0gYXJ0aWNsZXNMaXN0O1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlck5ld3NTb3VyY2VzKGZldGNoRGF0YSkge1xyXG4gICAgc2hvd1ByZWxvYWRlcigpO1xyXG4gICAgZmV0Y2hEYXRhKHt9KVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBsZXQgeyBzb3VyY2VzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBzb3VyY2VzTGlzdCA9IG5ld3NTb3VyY2VzQ29tcG9uZW50KHNvdXJjZXMpO1xyXG4gICAgICAgIHJlc3VsdExpc3QuaW5uZXJIVE1MID0gc291cmNlc0xpc3Q7XHJcbiAgICAgICAgdG9nZ2xlVGFicygpO1xyXG4gICAgICAgIG5ld3NJdGVtQ2xpY2tIYW5kbGVyKHRoaXMucmVuZGVyQXJ0aWNsZXMsIGZldGNoRGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Renderer/Renderer.js\n");

/***/ }),

/***/ "./Renderer/index.js":
/*!***************************!*\
  !*** ./Renderer/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./Renderer/Renderer.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZW5kZXJlci9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlbmRlcmVyL2luZGV4LmpzPzliNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL1JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Renderer/index.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _API_DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API/DataService */ \"./API/DataService.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer */ \"./Renderer/index.js\");\n/* harmony import */ var _Initializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Initializer */ \"./Initializer/index.js\");\n/* harmony import */ var _stuff_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stuff/constants */ \"./stuff/constants.js\");\n\r\n\r\n\r\n\r\n\r\nconst dataService = new _API_DataService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n  type: 'fetch',\r\n  apiKey: _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"API_KEY\"],\r\n});\r\n\r\nconst renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nconst app = new _Initializer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](renderer, dataService);\r\n\r\napp.initialize();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFTZXJ2aWNlIGZyb20gJy4vQVBJL0RhdGFTZXJ2aWNlJztcclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vUmVuZGVyZXInO1xyXG5pbXBvcnQgSW5pdGlhbGl6ZXIgZnJvbSAnLi9Jbml0aWFsaXplcic7XHJcbmltcG9ydCB7IEFQSV9LRVkgYXMgYXBpS2V5IH0gZnJvbSAnLi9zdHVmZi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgZGF0YVNlcnZpY2UgPSBuZXcgRGF0YVNlcnZpY2Uoe1xyXG4gIHR5cGU6ICdmZXRjaCcsXHJcbiAgYXBpS2V5LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgSW5pdGlhbGl6ZXIocmVuZGVyZXIsIGRhdGFTZXJ2aWNlKTtcclxuXHJcbmFwcC5pbml0aWFsaXplKCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./requests/fetchData.js":
/*!*******************************!*\
  !*** ./requests/fetchData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n\r\n\r\nasync function request({country, sources, keyWord, apiKey}) {\r\n  console.log(country, sources, keyWord, apiKey);\r\n  let url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;\r\n\r\n  if (sources) url = `https://newsapi.org/v2/top-headlines?sources=${sources.trim()}&apiKey=${apiKey}`;\r\n  if (country) url = `https://newsapi.org/v2/top-headlines?country=${country.trim()}&apiKey=${apiKey}`;\r\n  if (keyWord) url = `https://newsapi.org/v2/everything?q=${keyWord.trim()}&apiKey=${apiKey}`;\r\n\r\n  let request = new Request(url);\r\n\r\n  return await fetch(request)\r\n    .then(response => response.json())\r\n    .catch(error => {\r\n      console.log(error.message);\r\n      const warning = new _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"Warning\"]();\r\n      warning.showWarning();\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (request);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXF1ZXN0cy9mZXRjaERhdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXF1ZXN0cy9mZXRjaERhdGEuanM/NmEwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXYXJuaW5nIH0gZnJvbSAnLi4vc3R1ZmYvaGVscGVycyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0KHtjb3VudHJ5LCBzb3VyY2VzLCBrZXlXb3JkLCBhcGlLZXl9KSB7XHJcbiAgY29uc29sZS5sb2coY291bnRyeSwgc291cmNlcywga2V5V29yZCwgYXBpS2V5KTtcclxuICBsZXQgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvc291cmNlcz9hcGlLZXk9JHthcGlLZXl9YDtcclxuXHJcbiAgaWYgKHNvdXJjZXMpIHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/c291cmNlcz0ke3NvdXJjZXMudHJpbSgpfSZhcGlLZXk9JHthcGlLZXl9YDtcclxuICBpZiAoY291bnRyeSkgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9jb3VudHJ5PSR7Y291bnRyeS50cmltKCl9JmFwaUtleT0ke2FwaUtleX1gO1xyXG4gIGlmIChrZXlXb3JkKSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9JHtrZXlXb3JkLnRyaW0oKX0mYXBpS2V5PSR7YXBpS2V5fWA7XHJcblxyXG4gIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcclxuXHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKHJlcXVlc3QpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgY29uc3Qgd2FybmluZyA9IG5ldyBXYXJuaW5nKCk7XHJcbiAgICAgIHdhcm5pbmcuc2hvd1dhcm5pbmcoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./requests/fetchData.js\n");

/***/ }),

/***/ "./requests/index.js":
/*!***************************!*\
  !*** ./requests/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./requests/fetchData.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXF1ZXN0cy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlcXVlc3RzL2luZGV4LmpzPzFkODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoRGF0YSBmcm9tIFwiLi9mZXRjaERhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./requests/index.js\n");

/***/ }),

/***/ "./stuff/constants.js":
/*!****************************!*\
  !*** ./stuff/constants.js ***!
  \****************************/
/*! exports provided: newsSourcesContainer, articlesContainer, searchInput, searchButton, headingTitle, resultList, API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourcesContainer\", function() { return newsSourcesContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articlesContainer\", function() { return articlesContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchInput\", function() { return searchInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchButton\", function() { return searchButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headingTitle\", function() { return headingTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resultList\", function() { return resultList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_KEY\", function() { return API_KEY; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./stuff/helpers.js\");\n\r\n\r\n// DOM ELEMENTS\r\nconst newsSourcesContainer = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#load-news-sources');\r\nconst articlesContainer = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#load-articles');\r\nconst searchInput = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#search-input');\r\nconst searchButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#search-button');\r\nconst headingTitle = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#heading-title');\r\nconst resultList = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#result-list');\r\n\r\n// API KEY\r\nconst API_KEY = 'f792cbef6ef14ad0b093ab88c321ea24';\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHVmZi9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHVmZi9jb25zdGFudHMuanM/MjJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRFbGVtZW50IH0gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbi8vIERPTSBFTEVNRU5UU1xyXG5jb25zdCBuZXdzU291cmNlc0NvbnRhaW5lciA9IGdldEVsZW1lbnQoJyNsb2FkLW5ld3Mtc291cmNlcycpO1xyXG5jb25zdCBhcnRpY2xlc0NvbnRhaW5lciA9IGdldEVsZW1lbnQoJyNsb2FkLWFydGljbGVzJyk7XHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZ2V0RWxlbWVudCgnI3NlYXJjaC1pbnB1dCcpO1xyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBnZXRFbGVtZW50KCcjc2VhcmNoLWJ1dHRvbicpO1xyXG5jb25zdCBoZWFkaW5nVGl0bGUgPSBnZXRFbGVtZW50KCcjaGVhZGluZy10aXRsZScpO1xyXG5jb25zdCByZXN1bHRMaXN0ID0gZ2V0RWxlbWVudCgnI3Jlc3VsdC1saXN0Jyk7XHJcblxyXG4vLyBBUEkgS0VZXHJcbmNvbnN0IEFQSV9LRVkgPSAnZjc5MmNiZWY2ZWYxNGFkMGIwOTNhYjg4YzMyMWVhMjQnO1xyXG5cclxuZXhwb3J0IHtcclxuICBuZXdzU291cmNlc0NvbnRhaW5lciwgXHJcbiAgYXJ0aWNsZXNDb250YWluZXIsIFxyXG4gIHNlYXJjaElucHV0LCBcclxuICBzZWFyY2hCdXR0b24sIFxyXG4gIGhlYWRpbmdUaXRsZSwgXHJcbiAgcmVzdWx0TGlzdCxcclxuICBBUElfS0VZLFxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./stuff/constants.js\n");

/***/ }),

/***/ "./stuff/helpers.js":
/*!**************************!*\
  !*** ./stuff/helpers.js ***!
  \**************************/
/*! exports provided: removeComas, formatTextForRequest, showPreloader, formatDate, removeClassesFrom, getElement, Warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeComas\", function() { return removeComas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatTextForRequest\", function() { return formatTextForRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showPreloader\", function() { return showPreloader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClassesFrom\", function() { return removeClassesFrom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Warning\", function() { return Warning; });\nconst getElement = selector => {\r\n  const elementsList = document.querySelectorAll(selector);\r\n  return elementsList.length > 1 ? elementsList : elementsList[0];\r\n};\r\n\r\nconst removeComas = list => list.toString().split(',').join('');\r\n\r\nconst formatTextForRequest = text => text.split(' ').join('-');\r\n\r\nconst showPreloader = () => {\r\n  let spinner = getElement('#spinner-wrapper');\r\n  let result = getElement('#result-list');\r\n  window.scrollTo(0, 0);\r\n  spinner.style.opacity = 1;\r\n  result.style.opacity = 0;\r\n  setTimeout(() => {\r\n    spinner.style.opacity = 0;\r\n    result.style.opacity = 1;\r\n  }, 1000)\r\n};\r\n\r\nconst removeClassesFrom = (elem, className) => elem.forEach(item => item.classList.remove(className));\r\n\r\nconst formatDate = notFormatedDate => {\r\n  const date = new Date(notFormatedDate);\r\n  const formatter = new Intl.DateTimeFormat(\"ru\");\r\n  return formatter.format(date);\r\n};\r\n\r\nclass Warning {\r\n  constructor() {\r\n    if (typeof Warning.instance === 'object') {\r\n      return Warning.instance;\r\n    }\r\n    Warning.instance = this;\r\n    return this;\r\n  }\r\n\r\n  showWarning() {\r\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! toastr */ \"../../node_modules/toastr/toastr.js\", 7)).then(toastr => {\r\n      toastr.error('Something going wrong. Please, have a look in console.');\r\n    })\r\n  }\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHVmZi9oZWxwZXJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R1ZmYvaGVscGVycy5qcz80ZTgxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldEVsZW1lbnQgPSBzZWxlY3RvciA9PiB7XHJcbiAgY29uc3QgZWxlbWVudHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgcmV0dXJuIGVsZW1lbnRzTGlzdC5sZW5ndGggPiAxID8gZWxlbWVudHNMaXN0IDogZWxlbWVudHNMaXN0WzBdO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlQ29tYXMgPSBsaXN0ID0+IGxpc3QudG9TdHJpbmcoKS5zcGxpdCgnLCcpLmpvaW4oJycpO1xyXG5cclxuY29uc3QgZm9ybWF0VGV4dEZvclJlcXVlc3QgPSB0ZXh0ID0+IHRleHQuc3BsaXQoJyAnKS5qb2luKCctJyk7XHJcblxyXG5jb25zdCBzaG93UHJlbG9hZGVyID0gKCkgPT4ge1xyXG4gIGxldCBzcGlubmVyID0gZ2V0RWxlbWVudCgnI3NwaW5uZXItd3JhcHBlcicpO1xyXG4gIGxldCByZXN1bHQgPSBnZXRFbGVtZW50KCcjcmVzdWx0LWxpc3QnKTtcclxuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgc3Bpbm5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICByZXN1bHQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBzcGlubmVyLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgcmVzdWx0LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gIH0sIDEwMDApXHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVDbGFzc2VzRnJvbSA9IChlbGVtLCBjbGFzc05hbWUpID0+IGVsZW0uZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpKTtcclxuXHJcbmNvbnN0IGZvcm1hdERhdGUgPSBub3RGb3JtYXRlZERhdGUgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShub3RGb3JtYXRlZERhdGUpO1xyXG4gIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwicnVcIik7XHJcbiAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoZGF0ZSk7XHJcbn07XHJcblxyXG5jbGFzcyBXYXJuaW5nIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICh0eXBlb2YgV2FybmluZy5pbnN0YW5jZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmV0dXJuIFdhcm5pbmcuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBXYXJuaW5nLmluc3RhbmNlID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2hvd1dhcm5pbmcoKSB7XHJcbiAgICBpbXBvcnQoJ3RvYXN0cicpLnRoZW4odG9hc3RyID0+IHtcclxuICAgICAgdG9hc3RyLmVycm9yKCdTb21ldGhpbmcgZ29pbmcgd3JvbmcuIFBsZWFzZSwgaGF2ZSBhIGxvb2sgaW4gY29uc29sZS4nKTtcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHJlbW92ZUNvbWFzLFxyXG4gIGZvcm1hdFRleHRGb3JSZXF1ZXN0LFxyXG4gIHNob3dQcmVsb2FkZXIsXHJcbiAgZm9ybWF0RGF0ZSxcclxuICByZW1vdmVDbGFzc2VzRnJvbSxcclxuICBnZXRFbGVtZW50LFxyXG4gIFdhcm5pbmcsXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./stuff/helpers.js\n");

/***/ }),

/***/ "./stuff/staticData.js":
/*!*****************************!*\
  !*** ./stuff/staticData.js ***!
  \*****************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countries\", function() { return countries; });\nconst countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr',, 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHVmZi9zdGF0aWNEYXRhLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R1ZmYvc3RhdGljRGF0YS5qcz9lYTQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb3VudHJpZXMgPSBbJ2FlJywgJ2FyJywgJ2F0JywgJ2F1JywgJ2JlJywgJ2JnJywgJ2JyJywgJ2NhJywgJ2NoJywgJ2NuJywgJ2NvJywgJ2N1JywgJ2N6JywgJ2RlJywgJ2VnJywgJ2ZyJywgJ2diJywgJ2dyJywgJ2hrJywgJ2h1JywgJ2lkJywgJ2llJywgJ2lsJywgJ2luJywgJ2l0JywgJ2pwJywgJ2tyJywsICdsdCcsICdsdicsICdtYScsICdteCcsICdteScsICduZycsICdubCcsICdubycsICdueicsICdwaCcsICdwbCcsICdwdCcsICdybycsICdycycsICdydScsICdzYScsICdzZScsICdzZycsICdzaScsICdzaycsICd0aCcsICd0cicsICd0dycsICd1YScsICd1cycsICd2ZScsICd6YSddOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./stuff/staticData.js\n");

/***/ }),

/***/ "./view/article.js":
/*!*************************!*\
  !*** ./view/article.js ***!
  \*************************/
/*! exports provided: articleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articleComponent\", function() { return articleComponent; });\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n\r\n\r\nconst articleComponent = ({ title, author, publishedAt, description, content, url, urlToImage }) => {\r\n    title = title || 'Title is not found',\r\n    author = author || 'Author is not specified',\r\n    publishedAt = publishedAt || 'Date in not specified',\r\n    description = description || '',\r\n    content = content || 'Content is not specified',\r\n    url = url || '#',\r\n    urlToImage = urlToImage || './src/img/default-image.png'\r\n    let imgAlt = description.split(' ').slice(0, 3).join(' ');\r\n    publishedAt = publishedAt === 'Date in not specified' ? `Published at ${publishedAt}` : `Published at ${Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"formatDate\"])(publishedAt)}`;\r\n    return (\r\n        `<article class=\"article\">\r\n            <h2 class=\"article-header\">${title}</h2>\r\n            <div class=\"article-content-wrapper\">\r\n                <div class=\"article-content-text\">\r\n                    <div class=\"article-info\">\r\n                        <p class=\"article-author\">${author}</p>\r\n                        <p class=\"article-date\">${publishedAt}</p>\r\n                    </div>\r\n                    <p class=\"article-discription\">${description}</p>\r\n                    <p class=\"article-text\">${content}</p>\r\n                    <a href=\"${url}\" class=\"article-link\" target=\"_blank\">Read more...</a>\r\n                </div>\r\n                <div class=\"article-content-img\">\r\n                    <img src=\"${urlToImage}\" alt=\"${imgAlt}\" class=\"article-image\">\r\n                </div>\r\n            </div>\r\n        </article>`\r\n    );\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3L2FydGljbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3L2FydGljbGUuanM/MDkzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vc3R1ZmYvaGVscGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgYXJ0aWNsZUNvbXBvbmVudCA9ICh7IHRpdGxlLCBhdXRob3IsIHB1Ymxpc2hlZEF0LCBkZXNjcmlwdGlvbiwgY29udGVudCwgdXJsLCB1cmxUb0ltYWdlIH0pID0+IHtcclxuICAgIHRpdGxlID0gdGl0bGUgfHwgJ1RpdGxlIGlzIG5vdCBmb3VuZCcsXHJcbiAgICBhdXRob3IgPSBhdXRob3IgfHwgJ0F1dGhvciBpcyBub3Qgc3BlY2lmaWVkJyxcclxuICAgIHB1Ymxpc2hlZEF0ID0gcHVibGlzaGVkQXQgfHwgJ0RhdGUgaW4gbm90IHNwZWNpZmllZCcsXHJcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgY29udGVudCA9IGNvbnRlbnQgfHwgJ0NvbnRlbnQgaXMgbm90IHNwZWNpZmllZCcsXHJcbiAgICB1cmwgPSB1cmwgfHwgJyMnLFxyXG4gICAgdXJsVG9JbWFnZSA9IHVybFRvSW1hZ2UgfHwgJy4vc3JjL2ltZy9kZWZhdWx0LWltYWdlLnBuZydcclxuICAgIGxldCBpbWdBbHQgPSBkZXNjcmlwdGlvbi5zcGxpdCgnICcpLnNsaWNlKDAsIDMpLmpvaW4oJyAnKTtcclxuICAgIHB1Ymxpc2hlZEF0ID0gcHVibGlzaGVkQXQgPT09ICdEYXRlIGluIG5vdCBzcGVjaWZpZWQnID8gYFB1Ymxpc2hlZCBhdCAke3B1Ymxpc2hlZEF0fWAgOiBgUHVibGlzaGVkIGF0ICR7Zm9ybWF0RGF0ZShwdWJsaXNoZWRBdCl9YDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgYDxhcnRpY2xlIGNsYXNzPVwiYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJhcnRpY2xlLWhlYWRlclwiPiR7dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGUtY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZS1jb250ZW50LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXJ0aWNsZS1hdXRob3JcIj4ke2F1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXJ0aWNsZS1kYXRlXCI+JHtwdWJsaXNoZWRBdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcnRpY2xlLWRpc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcnRpY2xlLXRleHRcIj4ke2NvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3VybH1cIiBjbGFzcz1cImFydGljbGUtbGlua1wiIHRhcmdldD1cIl9ibGFua1wiPlJlYWQgbW9yZS4uLjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGUtY29udGVudC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dXJsVG9JbWFnZX1cIiBhbHQ9XCIke2ltZ0FsdH1cIiBjbGFzcz1cImFydGljbGUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+YFxyXG4gICAgKTtcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./view/article.js\n");

/***/ }),

/***/ "./view/dinamic-elements-events/newsItemClickHandler.js":
/*!**************************************************************!*\
  !*** ./view/dinamic-elements-events/newsItemClickHandler.js ***!
  \**************************************************************/
/*! exports provided: newsItemClickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsItemClickHandler\", function() { return newsItemClickHandler; });\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stuff/helpers */ \"./stuff/helpers.js\");\n\r\n\r\nconst newsItemClickHandler = (renderArticles, fetchData) => {\r\n  const resultItems = [...Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.result-item')];\r\n  console.log(resultItems);\r\n  resultItems.forEach(item => {\r\n    item.addEventListener('click', function() {\r\n      let sources = this.getAttribute('title');\r\n      if (sources.length > 2 && sources !== 'rt') {\r\n        renderArticles({\r\n          fetchData,\r\n          requestData: { sources }\r\n        });\r\n      } else {\r\n        renderArticles({\r\n          fetchData,\r\n          requestData: { country: sources }\r\n        });\r\n      }\r\n    })\r\n  })\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3L2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL25ld3NJdGVtQ2xpY2tIYW5kbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlldy9kaW5hbWljLWVsZW1lbnRzLWV2ZW50cy9uZXdzSXRlbUNsaWNrSGFuZGxlci5qcz80ODI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEVsZW1lbnQgfSBmcm9tICcuLi8uLi9zdHVmZi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzSXRlbUNsaWNrSGFuZGxlciA9IChyZW5kZXJBcnRpY2xlcywgZmV0Y2hEYXRhKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0SXRlbXMgPSBbLi4uZ2V0RWxlbWVudCgnLnJlc3VsdC1pdGVtJyldO1xyXG4gIGNvbnNvbGUubG9nKHJlc3VsdEl0ZW1zKTtcclxuICByZXN1bHRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgc291cmNlcyA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICBpZiAoc291cmNlcy5sZW5ndGggPiAyICYmIHNvdXJjZXMgIT09ICdydCcpIHtcclxuICAgICAgICByZW5kZXJBcnRpY2xlcyh7XHJcbiAgICAgICAgICBmZXRjaERhdGEsXHJcbiAgICAgICAgICByZXF1ZXN0RGF0YTogeyBzb3VyY2VzIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW5kZXJBcnRpY2xlcyh7XHJcbiAgICAgICAgICBmZXRjaERhdGEsXHJcbiAgICAgICAgICByZXF1ZXN0RGF0YTogeyBjb3VudHJ5OiBzb3VyY2VzIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./view/dinamic-elements-events/newsItemClickHandler.js\n");

/***/ }),

/***/ "./view/dinamic-elements-events/toggler.js":
/*!*************************************************!*\
  !*** ./view/dinamic-elements-events/toggler.js ***!
  \*************************************************/
/*! exports provided: toggleTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleTabs\", function() { return toggleTabs; });\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stuff/helpers */ \"./stuff/helpers.js\");\n\r\n\r\nconst toggleTabs = () => {\r\n  const publishers = Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#publishers-info');\r\n  const countries = Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#countries-info');\r\n  const tabs = [...Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.news-tab')];\r\n  const switchContent = () => {\r\n    countries.classList.toggle('not-display');\r\n    publishers.classList.toggle('not-display');\r\n  }\r\n\r\n  tabs.forEach(elem => {\r\n    elem.addEventListener(\"click\", () => {\r\n      Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"removeClassesFrom\"])(tabs, 'selected');\r\n      switchContent();\r\n      elem.classList.add('selected');\r\n    });\r\n  });\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3L2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL3RvZ2dsZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3L2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL3RvZ2dsZXIuanM/YTc3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW1vdmVDbGFzc2VzRnJvbSwgZ2V0RWxlbWVudCB9IGZyb20gJy4uLy4uL3N0dWZmL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZVRhYnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHVibGlzaGVycyA9IGdldEVsZW1lbnQoJyNwdWJsaXNoZXJzLWluZm8nKTtcclxuICBjb25zdCBjb3VudHJpZXMgPSBnZXRFbGVtZW50KCcjY291bnRyaWVzLWluZm8nKTtcclxuICBjb25zdCB0YWJzID0gWy4uLmdldEVsZW1lbnQoJy5uZXdzLXRhYicpXTtcclxuICBjb25zdCBzd2l0Y2hDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY291bnRyaWVzLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1kaXNwbGF5Jyk7XHJcbiAgICBwdWJsaXNoZXJzLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1kaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICB0YWJzLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHJlbW92ZUNsYXNzZXNGcm9tKHRhYnMsICdzZWxlY3RlZCcpO1xyXG4gICAgICBzd2l0Y2hDb250ZW50KCk7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./view/dinamic-elements-events/toggler.js\n");

/***/ }),

/***/ "./view/newsSource.js":
/*!****************************!*\
  !*** ./view/newsSource.js ***!
  \****************************/
/*! exports provided: newsSourceItem, newsSources, newsSourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourceItem\", function() { return newsSourceItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSources\", function() { return newsSources; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourcesComponent\", function() { return newsSourcesComponent; });\n/* harmony import */ var _stuff_staticData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/staticData */ \"./stuff/staticData.js\");\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n\r\n\r\n\r\nconst newsSourceItem = (title, id = title) => {\r\n  return (\r\n    `<div class=\"result-item\" title=\"${id}\">\r\n      <p class=\"result-item-title\">${title}</p>\r\n    </div>`\r\n  );\r\n};\r\n\r\nconst newsSources = (itemsList, itemsListCountries) => {\r\n\r\n  const publishersContent =\r\n    `<div id=\"publishers-info\">\r\n      <p class=\"news-sources-description\">\r\n        We crawl and index news articles from over 30,000 news \r\n        sources and blogs. We also monitor the top and breaking \r\n        news headlines from the following 138 of the most notable \r\n        of these sources. You can click through for integration \r\n        examples.\r\n      </p>\r\n      <div class=\"news-sources-results\" id=\"news-sources-results\">\r\n        ${Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_1__[\"removeComas\"])(itemsList)}\r\n      </div>\r\n    </div>`;\r\n\r\n  const countriesContent =\r\n    `<div id=\"countries-info\" class=\"not-display\"\">\r\n      <p class=\"news-sources-description\">\r\n        We curate a list of top headlines for a range of countries. You can click through for integration examples.\r\n      </p>\r\n      <div class=\"news-sources-results\" id=\"news-sources-results\">\r\n        ${Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_1__[\"removeComas\"])(itemsListCountries)}\r\n      </div>\r\n    </div>`;\r\n\r\n\r\n  return (\r\n    `<section class=\"news-sources-wrapper\">\r\n      <h2 class=\"news-sources-header\">News sources</h2>\r\n      <div class=\"news-sources-controls-wrapper\">\r\n        <h3 class=\"news-tab selected\" title=\"publishers\">Publishers</h3>\r\n        <h3 class=\"news-tab\" title=\"countries\">Countries</h3>\r\n      </div>\r\n      ${publishersContent}\r\n      ${countriesContent}\r\n    </section>`\r\n  );\r\n}\r\n\r\nconst newsSourcesComponent = (sources) => {\r\n  let itemsList = sources.map(item => {\r\n    return newsSourceItem(item.name, item.id);\r\n  });\r\n  let itemsListCountries = _stuff_staticData__WEBPACK_IMPORTED_MODULE_0__[\"countries\"].map(item => {\r\n    return newsSourceItem(item);\r\n  });\r\n  return newsSources(itemsList, itemsListCountries);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3L25ld3NTb3VyY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3L25ld3NTb3VyY2UuanM/Y2U0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tICcuLi9zdHVmZi9zdGF0aWNEYXRhJztcclxuaW1wb3J0IHsgcmVtb3ZlQ29tYXMgfSBmcm9tICcuLi9zdHVmZi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzU291cmNlSXRlbSA9ICh0aXRsZSwgaWQgPSB0aXRsZSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICBgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtXCIgdGl0bGU9XCIke2lkfVwiPlxyXG4gICAgICA8cCBjbGFzcz1cInJlc3VsdC1pdGVtLXRpdGxlXCI+JHt0aXRsZX08L3A+XHJcbiAgICA8L2Rpdj5gXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzU291cmNlcyA9IChpdGVtc0xpc3QsIGl0ZW1zTGlzdENvdW50cmllcykgPT4ge1xyXG5cclxuICBjb25zdCBwdWJsaXNoZXJzQ29udGVudCA9XHJcbiAgICBgPGRpdiBpZD1cInB1Ymxpc2hlcnMtaW5mb1wiPlxyXG4gICAgICA8cCBjbGFzcz1cIm5ld3Mtc291cmNlcy1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIFdlIGNyYXdsIGFuZCBpbmRleCBuZXdzIGFydGljbGVzIGZyb20gb3ZlciAzMCwwMDAgbmV3cyBcclxuICAgICAgICBzb3VyY2VzIGFuZCBibG9ncy4gV2UgYWxzbyBtb25pdG9yIHRoZSB0b3AgYW5kIGJyZWFraW5nIFxyXG4gICAgICAgIG5ld3MgaGVhZGxpbmVzIGZyb20gdGhlIGZvbGxvd2luZyAxMzggb2YgdGhlIG1vc3Qgbm90YWJsZSBcclxuICAgICAgICBvZiB0aGVzZSBzb3VyY2VzLiBZb3UgY2FuIGNsaWNrIHRocm91Z2ggZm9yIGludGVncmF0aW9uIFxyXG4gICAgICAgIGV4YW1wbGVzLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdzLXNvdXJjZXMtcmVzdWx0c1wiIGlkPVwibmV3cy1zb3VyY2VzLXJlc3VsdHNcIj5cclxuICAgICAgICAke3JlbW92ZUNvbWFzKGl0ZW1zTGlzdCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgY29uc3QgY291bnRyaWVzQ29udGVudCA9XHJcbiAgICBgPGRpdiBpZD1cImNvdW50cmllcy1pbmZvXCIgY2xhc3M9XCJub3QtZGlzcGxheVwiXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwibmV3cy1zb3VyY2VzLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgV2UgY3VyYXRlIGEgbGlzdCBvZiB0b3AgaGVhZGxpbmVzIGZvciBhIHJhbmdlIG9mIGNvdW50cmllcy4gWW91IGNhbiBjbGljayB0aHJvdWdoIGZvciBpbnRlZ3JhdGlvbiBleGFtcGxlcy5cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmV3cy1zb3VyY2VzLXJlc3VsdHNcIiBpZD1cIm5ld3Mtc291cmNlcy1yZXN1bHRzXCI+XHJcbiAgICAgICAgJHtyZW1vdmVDb21hcyhpdGVtc0xpc3RDb3VudHJpZXMpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgYDxzZWN0aW9uIGNsYXNzPVwibmV3cy1zb3VyY2VzLXdyYXBwZXJcIj5cclxuICAgICAgPGgyIGNsYXNzPVwibmV3cy1zb3VyY2VzLWhlYWRlclwiPk5ld3Mgc291cmNlczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdzLXNvdXJjZXMtY29udHJvbHMtd3JhcHBlclwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm5ld3MtdGFiIHNlbGVjdGVkXCIgdGl0bGU9XCJwdWJsaXNoZXJzXCI+UHVibGlzaGVyczwvaDM+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibmV3cy10YWJcIiB0aXRsZT1cImNvdW50cmllc1wiPkNvdW50cmllczwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAke3B1Ymxpc2hlcnNDb250ZW50fVxyXG4gICAgICAke2NvdW50cmllc0NvbnRlbnR9XHJcbiAgICA8L3NlY3Rpb24+YFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzU291cmNlc0NvbXBvbmVudCA9IChzb3VyY2VzKSA9PiB7XHJcbiAgbGV0IGl0ZW1zTGlzdCA9IHNvdXJjZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgcmV0dXJuIG5ld3NTb3VyY2VJdGVtKGl0ZW0ubmFtZSwgaXRlbS5pZCk7XHJcbiAgfSk7XHJcbiAgbGV0IGl0ZW1zTGlzdENvdW50cmllcyA9IGNvdW50cmllcy5tYXAoaXRlbSA9PiB7XHJcbiAgICByZXR1cm4gbmV3c1NvdXJjZUl0ZW0oaXRlbSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld3NTb3VyY2VzKGl0ZW1zTGlzdCwgaXRlbXNMaXN0Q291bnRyaWVzKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./view/newsSource.js\n");

/***/ })

/******/ });