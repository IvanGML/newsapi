/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		var prefetchChunks = data[3] || [];
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
/******/ 		// chunk prefetching for javascript
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		prefetchChunks.forEach(function(chunkId) {
/******/ 			if(installedChunks[chunkId] === undefined) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "prefetch";
/******/ 				link.as = "script";
/******/ 				link.href = jsonpScriptSrc(chunkId);
/******/ 				head.appendChild(link);
/******/ 			}
/******/ 		});
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
/******/ 	webpackJsonpCallback([[], {}, 0, [0]]);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DataService; });\n/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requests */ \"./requests/index.js\");\n\n\nclass DataService {\n  constructor({type, apiKey}) {\n    if (type === 'fetch') {\n      this.getData = this.fetchData.bind(this);\n    } else {\n      this.getData = () => console.log('This type of representing data is not maintainable for now.');\n    }\n    this.apiKey = apiKey;\n  }\n\n  fetchData(...data) {\n    return Object(_requests__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({apiKey: this.apiKey, ...data[0]});\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUEkvRGF0YVNlcnZpY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BUEkvRGF0YVNlcnZpY2UuanM/OGQwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9yZXF1ZXN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3Ioe3R5cGUsIGFwaUtleX0pIHtcbiAgICBpZiAodHlwZSA9PT0gJ2ZldGNoJykge1xuICAgICAgdGhpcy5nZXREYXRhID0gdGhpcy5mZXRjaERhdGEuYmluZCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXREYXRhID0gKCkgPT4gY29uc29sZS5sb2coJ1RoaXMgdHlwZSBvZiByZXByZXNlbnRpbmcgZGF0YSBpcyBub3QgbWFpbnRhaW5hYmxlIGZvciBub3cuJyk7XG4gICAgfVxuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICB9XG5cbiAgZmV0Y2hEYXRhKC4uLmRhdGEpIHtcbiAgICByZXR1cm4gcmVxdWVzdCh7YXBpS2V5OiB0aGlzLmFwaUtleSwgLi4uZGF0YVswXX0pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./API/DataService.js\n");

/***/ }),

/***/ "./Initializer/Initializer.js":
/*!************************************!*\
  !*** ./Initializer/Initializer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Initializer; });\n/* harmony import */ var _stuff_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/constants */ \"./stuff/constants.js\");\n\n\nclass Initializer {\n  constructor(renderer, dataService) {\n    this.renderer = renderer;\n    this.dataService = dataService;\n    this.initialize = this.initialize.bind(this);\n  }\n\n  initialize() {\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"articlesContainer\"].addEventListener('click', () => this.renderer.renderArticles({\n      fetchData: this.dataService.getData,\n      requestData: { country: 'us' },\n    }));\n\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"newsSourcesContainer\"].addEventListener('click', () =>\n      this.renderer.renderNewsSources(this.dataService.getData));\n\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"searchInput\"].addEventListener('keydown', e => {\n      if (e.keyCode === 27) e.target.value = '';\n      if (e.keyCode === 13 && e.target.value !== '') {\n        this.renderer.renderArticles({\n          fetchData: this.dataService.getData,\n          requestData: { keyWord: e.target.value },\n        })\n      }\n    });\n\n    _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"searchButton\"].addEventListener('click', () => _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"searchInput\"].value !== '' ? this.renderer.renderArticles({\n      fetchData: this.dataService.getData,\n      requestData: { keyWord: _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"searchInput\"].value },\n    }) : null);\n    \n    _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"headingTitle\"].addEventListener('click', () => _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"resultList\"].innerHTML = '');\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Jbml0aWFsaXplci9Jbml0aWFsaXplci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0luaXRpYWxpemVyL0luaXRpYWxpemVyLmpzPzU5NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmV3c1NvdXJjZXNDb250YWluZXIsIGFydGljbGVzQ29udGFpbmVyLCBzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uLCBoZWFkaW5nVGl0bGUsIHJlc3VsdExpc3QgfSBmcm9tICcuLi9zdHVmZi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXplciB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBkYXRhU2VydmljZSkge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLmRhdGFTZXJ2aWNlID0gZGF0YVNlcnZpY2U7XG4gICAgdGhpcy5pbml0aWFsaXplID0gdGhpcy5pbml0aWFsaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIGFydGljbGVzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZW5kZXJlci5yZW5kZXJBcnRpY2xlcyh7XG4gICAgICBmZXRjaERhdGE6IHRoaXMuZGF0YVNlcnZpY2UuZ2V0RGF0YSxcbiAgICAgIHJlcXVlc3REYXRhOiB7IGNvdW50cnk6ICd1cycgfSxcbiAgICB9KSk7XG5cbiAgICBuZXdzU291cmNlc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlck5ld3NTb3VyY2VzKHRoaXMuZGF0YVNlcnZpY2UuZ2V0RGF0YSkpO1xuXG4gICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBlLnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXJBcnRpY2xlcyh7XG4gICAgICAgICAgZmV0Y2hEYXRhOiB0aGlzLmRhdGFTZXJ2aWNlLmdldERhdGEsXG4gICAgICAgICAgcmVxdWVzdERhdGE6IHsga2V5V29yZDogZS50YXJnZXQudmFsdWUgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNlYXJjaElucHV0LnZhbHVlICE9PSAnJyA/IHRoaXMucmVuZGVyZXIucmVuZGVyQXJ0aWNsZXMoe1xuICAgICAgZmV0Y2hEYXRhOiB0aGlzLmRhdGFTZXJ2aWNlLmdldERhdGEsXG4gICAgICByZXF1ZXN0RGF0YTogeyBrZXlXb3JkOiBzZWFyY2hJbnB1dC52YWx1ZSB9LFxuICAgIH0pIDogbnVsbCk7XG4gICAgXG4gICAgaGVhZGluZ1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVzdWx0TGlzdC5pbm5lckhUTUwgPSAnJyk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Initializer/Initializer.js\n");

/***/ }),

/***/ "./Initializer/index.js":
/*!******************************!*\
  !*** ./Initializer/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initializer */ \"./Initializer/Initializer.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Initializer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Jbml0aWFsaXplci9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0luaXRpYWxpemVyL2luZGV4LmpzP2EyZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluaXRpYWxpemVyIGZyb20gJy4vSW5pdGlhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBJbml0aWFsaXplcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Initializer/index.js\n");

/***/ }),

/***/ "./Renderer/Renderer.js":
/*!******************************!*\
  !*** ./Renderer/Renderer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderer; });\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n/* harmony import */ var _view_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/article */ \"./view/article.js\");\n/* harmony import */ var _view_newsSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/newsSource */ \"./view/newsSource.js\");\n/* harmony import */ var _view_dinamic_elements_events_toggler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/dinamic-elements-events/toggler */ \"./view/dinamic-elements-events/toggler.js\");\n/* harmony import */ var _view_dinamic_elements_events_newsItemClickHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/dinamic-elements-events/newsItemClickHandler */ \"./view/dinamic-elements-events/newsItemClickHandler.js\");\n/* harmony import */ var _stuff_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stuff/constants */ \"./stuff/constants.js\");\n\n\n\n\n\n\n\nclass Renderer {\n  constructor() {\n    this.renderArticles = this.renderArticles.bind(this);\n    this.renderNewsSources = this.renderNewsSources.bind(this);\n  }\n\n  renderArticles({fetchData, requestData}) {\n    Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"showPreloader\"])();\n    fetchData(requestData)\n      .then(data => {\n        let { articles } = data;\n        let articlesList = articles.map(item => Object(_view_article__WEBPACK_IMPORTED_MODULE_1__[\"articleComponent\"])(item));\n        _stuff_constants__WEBPACK_IMPORTED_MODULE_5__[\"resultList\"].innerHTML = articlesList;\n      });\n  }\n\n  renderNewsSources(fetchData) {\n    Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"showPreloader\"])();\n    fetchData({})\n      .then(data => {\n        let { sources } = data;\n        let sourcesList = Object(_view_newsSource__WEBPACK_IMPORTED_MODULE_2__[\"newsSourcesComponent\"])(sources);\n        _stuff_constants__WEBPACK_IMPORTED_MODULE_5__[\"resultList\"].innerHTML = sourcesList;\n        Object(_view_dinamic_elements_events_toggler__WEBPACK_IMPORTED_MODULE_3__[\"toggleTabs\"])();\n        Object(_view_dinamic_elements_events_newsItemClickHandler__WEBPACK_IMPORTED_MODULE_4__[\"newsItemClickHandler\"])(this.renderArticles, fetchData);\n      });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZW5kZXJlci9SZW5kZXJlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlbmRlcmVyL1JlbmRlcmVyLmpzP2IyNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd1ByZWxvYWRlciB9IGZyb20gXCIuLi9zdHVmZi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBhcnRpY2xlQ29tcG9uZW50IH0gZnJvbSBcIi4uL3ZpZXcvYXJ0aWNsZVwiO1xuaW1wb3J0IHsgbmV3c1NvdXJjZXNDb21wb25lbnQgfSBmcm9tIFwiLi4vdmlldy9uZXdzU291cmNlXCI7XG5pbXBvcnQgeyB0b2dnbGVUYWJzIH0gZnJvbSBcIi4uL3ZpZXcvZGluYW1pYy1lbGVtZW50cy1ldmVudHMvdG9nZ2xlclwiO1xuaW1wb3J0IHsgbmV3c0l0ZW1DbGlja0hhbmRsZXIgfSBmcm9tIFwiLi4vdmlldy9kaW5hbWljLWVsZW1lbnRzLWV2ZW50cy9uZXdzSXRlbUNsaWNrSGFuZGxlclwiO1xuaW1wb3J0IHsgcmVzdWx0TGlzdCB9IGZyb20gJy4uL3N0dWZmL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yZW5kZXJBcnRpY2xlcyA9IHRoaXMucmVuZGVyQXJ0aWNsZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlck5ld3NTb3VyY2VzID0gdGhpcy5yZW5kZXJOZXdzU291cmNlcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyQXJ0aWNsZXMoe2ZldGNoRGF0YSwgcmVxdWVzdERhdGF9KSB7XG4gICAgc2hvd1ByZWxvYWRlcigpO1xuICAgIGZldGNoRGF0YShyZXF1ZXN0RGF0YSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBsZXQgeyBhcnRpY2xlcyB9ID0gZGF0YTtcbiAgICAgICAgbGV0IGFydGljbGVzTGlzdCA9IGFydGljbGVzLm1hcChpdGVtID0+IGFydGljbGVDb21wb25lbnQoaXRlbSkpO1xuICAgICAgICByZXN1bHRMaXN0LmlubmVySFRNTCA9IGFydGljbGVzTGlzdDtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyTmV3c1NvdXJjZXMoZmV0Y2hEYXRhKSB7XG4gICAgc2hvd1ByZWxvYWRlcigpO1xuICAgIGZldGNoRGF0YSh7fSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBsZXQgeyBzb3VyY2VzIH0gPSBkYXRhO1xuICAgICAgICBsZXQgc291cmNlc0xpc3QgPSBuZXdzU291cmNlc0NvbXBvbmVudChzb3VyY2VzKTtcbiAgICAgICAgcmVzdWx0TGlzdC5pbm5lckhUTUwgPSBzb3VyY2VzTGlzdDtcbiAgICAgICAgdG9nZ2xlVGFicygpO1xuICAgICAgICBuZXdzSXRlbUNsaWNrSGFuZGxlcih0aGlzLnJlbmRlckFydGljbGVzLCBmZXRjaERhdGEpO1xuICAgICAgfSk7XG4gIH1cblxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Renderer/Renderer.js\n");

/***/ }),

/***/ "./Renderer/index.js":
/*!***************************!*\
  !*** ./Renderer/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./Renderer/Renderer.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZW5kZXJlci9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlbmRlcmVyL2luZGV4LmpzPzliNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL1JlbmRlcmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Renderer/index.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _API_DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API/DataService */ \"./API/DataService.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer */ \"./Renderer/index.js\");\n/* harmony import */ var _Initializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Initializer */ \"./Initializer/index.js\");\n/* harmony import */ var _stuff_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stuff/constants */ \"./stuff/constants.js\");\n\n\n\n\n\nconst dataService = new _API_DataService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  type: 'fetch',\n  apiKey: _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"API_KEY\"],\n});\n\nconst renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconst app = new _Initializer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](renderer, dataService);\n\napp.initialize();\n\nconsole.log('init');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFTZXJ2aWNlIGZyb20gJy4vQVBJL0RhdGFTZXJ2aWNlJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJztcbmltcG9ydCBJbml0aWFsaXplciBmcm9tICcuL0luaXRpYWxpemVyJztcbmltcG9ydCB7IEFQSV9LRVkgYXMgYXBpS2V5IH0gZnJvbSAnLi9zdHVmZi9jb25zdGFudHMnO1xuXG5jb25zdCBkYXRhU2VydmljZSA9IG5ldyBEYXRhU2VydmljZSh7XG4gIHR5cGU6ICdmZXRjaCcsXG4gIGFwaUtleSxcbn0pO1xuXG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuXG5jb25zdCBhcHAgPSBuZXcgSW5pdGlhbGl6ZXIocmVuZGVyZXIsIGRhdGFTZXJ2aWNlKTtcblxuYXBwLmluaXRpYWxpemUoKTtcblxuY29uc29sZS5sb2coJ2luaXQnKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./requests/fetchData.js":
/*!*******************************!*\
  !*** ./requests/fetchData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n\n\nasync function request({country, sources, keyWord, apiKey}) {\n  console.log(country, sources, keyWord, apiKey);\n  let url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;\n\n  if (sources) url = `https://newsapi.org/v2/top-headlines?sources=${sources.trim()}&apiKey=${apiKey}`;\n  if (country) url = `https://newsapi.org/v2/top-headlines?country=${country.trim()}&apiKey=${apiKey}`;\n  if (keyWord) url = `https://newsapi.org/v2/everything?q=${keyWord.trim()}&apiKey=${apiKey}`;\n\n  let request = new Request(url);\n\n  return await fetch(request)\n    .then(response => response.json())\n    .catch(error => {\n      console.log(error.message);\n      Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"showWarning\"])();\n    });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (request);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXF1ZXN0cy9mZXRjaERhdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXF1ZXN0cy9mZXRjaERhdGEuanM/NmEwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG93V2FybmluZyB9IGZyb20gJy4uL3N0dWZmL2hlbHBlcnMnO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0KHtjb3VudHJ5LCBzb3VyY2VzLCBrZXlXb3JkLCBhcGlLZXl9KSB7XG4gIGNvbnNvbGUubG9nKGNvdW50cnksIHNvdXJjZXMsIGtleVdvcmQsIGFwaUtleSk7XG4gIGxldCB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9zb3VyY2VzP2FwaUtleT0ke2FwaUtleX1gO1xuXG4gIGlmIChzb3VyY2VzKSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP3NvdXJjZXM9JHtzb3VyY2VzLnRyaW0oKX0mYXBpS2V5PSR7YXBpS2V5fWA7XG4gIGlmIChjb3VudHJ5KSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9JHtjb3VudHJ5LnRyaW0oKX0mYXBpS2V5PSR7YXBpS2V5fWA7XG4gIGlmIChrZXlXb3JkKSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9JHtrZXlXb3JkLnRyaW0oKX0mYXBpS2V5PSR7YXBpS2V5fWA7XG5cbiAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xuXG4gIHJldHVybiBhd2FpdCBmZXRjaChyZXF1ZXN0KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICBzaG93V2FybmluZygpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./requests/fetchData.js\n");

/***/ }),

/***/ "./requests/index.js":
/*!***************************!*\
  !*** ./requests/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./requests/fetchData.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXF1ZXN0cy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlcXVlc3RzL2luZGV4LmpzPzFkODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoRGF0YSBmcm9tIFwiLi9mZXRjaERhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hEYXRhOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./requests/index.js\n");

/***/ }),

/***/ "./stuff/constants.js":
/*!****************************!*\
  !*** ./stuff/constants.js ***!
  \****************************/
/*! exports provided: newsSourcesContainer, articlesContainer, searchInput, searchButton, headingTitle, resultList, API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourcesContainer\", function() { return newsSourcesContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articlesContainer\", function() { return articlesContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchInput\", function() { return searchInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchButton\", function() { return searchButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headingTitle\", function() { return headingTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resultList\", function() { return resultList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_KEY\", function() { return API_KEY; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./stuff/helpers.js\");\n\n\n// DOM ELEMENTS\nconst newsSourcesContainer = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#load-news-sources');\nconst articlesContainer = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#load-articles');\nconst searchInput = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#search-input');\nconst searchButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#search-button');\nconst headingTitle = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#heading-title');\nconst resultList = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#result-list');\n\n// API KEY\nconst API_KEY = 'f792cbef6ef14ad0b093ab88c321ea24';\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHVmZi9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHVmZi9jb25zdGFudHMuanM/MjJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRFbGVtZW50IH0gZnJvbSAnLi9oZWxwZXJzJztcblxuLy8gRE9NIEVMRU1FTlRTXG5jb25zdCBuZXdzU291cmNlc0NvbnRhaW5lciA9IGdldEVsZW1lbnQoJyNsb2FkLW5ld3Mtc291cmNlcycpO1xuY29uc3QgYXJ0aWNsZXNDb250YWluZXIgPSBnZXRFbGVtZW50KCcjbG9hZC1hcnRpY2xlcycpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBnZXRFbGVtZW50KCcjc2VhcmNoLWlucHV0Jyk7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBnZXRFbGVtZW50KCcjc2VhcmNoLWJ1dHRvbicpO1xuY29uc3QgaGVhZGluZ1RpdGxlID0gZ2V0RWxlbWVudCgnI2hlYWRpbmctdGl0bGUnKTtcbmNvbnN0IHJlc3VsdExpc3QgPSBnZXRFbGVtZW50KCcjcmVzdWx0LWxpc3QnKTtcblxuLy8gQVBJIEtFWVxuY29uc3QgQVBJX0tFWSA9ICdmNzkyY2JlZjZlZjE0YWQwYjA5M2FiODhjMzIxZWEyNCc7XG5cbmV4cG9ydCB7XG4gIG5ld3NTb3VyY2VzQ29udGFpbmVyLCBcbiAgYXJ0aWNsZXNDb250YWluZXIsIFxuICBzZWFyY2hJbnB1dCwgXG4gIHNlYXJjaEJ1dHRvbiwgXG4gIGhlYWRpbmdUaXRsZSwgXG4gIHJlc3VsdExpc3QsXG4gIEFQSV9LRVksXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./stuff/constants.js\n");

/***/ }),

/***/ "./stuff/helpers.js":
/*!**************************!*\
  !*** ./stuff/helpers.js ***!
  \**************************/
/*! exports provided: removeComas, formatTextForRequest, showPreloader, formatDate, removeClassesFrom, getElement, showWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeComas\", function() { return removeComas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatTextForRequest\", function() { return formatTextForRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showPreloader\", function() { return showPreloader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClassesFrom\", function() { return removeClassesFrom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showWarning\", function() { return showWarning; });\nconst getElement = selector => {\n  const elementsList = document.querySelectorAll(selector);\n  return elementsList.length > 1 ? elementsList : elementsList[0];\n};\n\nconst removeComas = list => list.toString().split(',').join('');\n\nconst formatTextForRequest = text => text.split(' ').join('-');\n\nconst showPreloader = () => {\n  let spinner = getElement('#spinner-wrapper');\n  let result = getElement('#result-list');\n  window.scrollTo(0, 0);\n  spinner.style.opacity = 1;\n  result.style.opacity = 0;\n  setTimeout(()=>{\n    spinner.style.opacity = 0;\n    result.style.opacity = 1;\n  }, 1000)\n};\n\nconst removeClassesFrom = (elem, className) => elem.forEach(item => item.classList.remove(className));\n\nconst formatDate = notFormatedDate => {\n  const date = new Date(notFormatedDate);\n  const formatter = new Intl.DateTimeFormat(\"ru\");\n  return formatter.format(date);\n};\n\nconst showWarning = () => {\n  __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! toastr */ \"../../node_modules/toastr/toastr.js\", 7)).then(toastr => {\n    toastr.error('Something going wrong. Please, have a look in console.');\n  })\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHVmZi9oZWxwZXJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R1ZmYvaGVscGVycy5qcz80ZTgxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldEVsZW1lbnQgPSBzZWxlY3RvciA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICByZXR1cm4gZWxlbWVudHNMaXN0Lmxlbmd0aCA+IDEgPyBlbGVtZW50c0xpc3QgOiBlbGVtZW50c0xpc3RbMF07XG59O1xuXG5jb25zdCByZW1vdmVDb21hcyA9IGxpc3QgPT4gbGlzdC50b1N0cmluZygpLnNwbGl0KCcsJykuam9pbignJyk7XG5cbmNvbnN0IGZvcm1hdFRleHRGb3JSZXF1ZXN0ID0gdGV4dCA9PiB0ZXh0LnNwbGl0KCcgJykuam9pbignLScpO1xuXG5jb25zdCBzaG93UHJlbG9hZGVyID0gKCkgPT4ge1xuICBsZXQgc3Bpbm5lciA9IGdldEVsZW1lbnQoJyNzcGlubmVyLXdyYXBwZXInKTtcbiAgbGV0IHJlc3VsdCA9IGdldEVsZW1lbnQoJyNyZXN1bHQtbGlzdCcpO1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIHNwaW5uZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gIHJlc3VsdC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgc2V0VGltZW91dCgoKT0+e1xuICAgIHNwaW5uZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgcmVzdWx0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9LCAxMDAwKVxufTtcblxuY29uc3QgcmVtb3ZlQ2xhc3Nlc0Zyb20gPSAoZWxlbSwgY2xhc3NOYW1lKSA9PiBlbGVtLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSk7XG5cbmNvbnN0IGZvcm1hdERhdGUgPSBub3RGb3JtYXRlZERhdGUgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUobm90Rm9ybWF0ZWREYXRlKTtcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJydVwiKTtcbiAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoZGF0ZSk7XG59O1xuXG5jb25zdCBzaG93V2FybmluZyA9ICgpID0+IHtcbiAgaW1wb3J0KC8qIHdlYnBhY2tQcmVmZXRjaDogdHJ1ZSAqLyd0b2FzdHInKS50aGVuKHRvYXN0ciA9PiB7XG4gICAgdG9hc3RyLmVycm9yKCdTb21ldGhpbmcgZ29pbmcgd3JvbmcuIFBsZWFzZSwgaGF2ZSBhIGxvb2sgaW4gY29uc29sZS4nKTtcbiAgfSlcbn07XG5cbmV4cG9ydCB7XG4gIHJlbW92ZUNvbWFzLFxuICBmb3JtYXRUZXh0Rm9yUmVxdWVzdCxcbiAgc2hvd1ByZWxvYWRlcixcbiAgZm9ybWF0RGF0ZSxcbiAgcmVtb3ZlQ2xhc3Nlc0Zyb20sXG4gIGdldEVsZW1lbnQsXG4gIHNob3dXYXJuaW5nLFxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./stuff/helpers.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articleComponent\", function() { return articleComponent; });\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n\n\nconst articleComponent = ({ title, author, publishedAt, description, content, url, urlToImage }) => {\n    title = title || 'Title is not found',\n    author = author || 'Author is not specified',\n    publishedAt = publishedAt || 'Date in not specified',\n    description = description || '',\n    content = content || 'Content is not specified',\n    url = url || '#',\n    urlToImage = urlToImage || './src/img/default-image.png'\n    let imgAlt = description.split(' ').slice(0, 3).join(' ');\n    publishedAt = publishedAt === 'Date in not specified' ? `Published at ${publishedAt}` : `Published at ${Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"formatDate\"])(publishedAt)}`;\n    return (\n        `<article class=\"article\">\n            <h2 class=\"article-header\">${title}</h2>\n            <div class=\"article-content-wrapper\">\n                <div class=\"article-content-text\">\n                    <div class=\"article-info\">\n                        <p class=\"article-author\">${author}</p>\n                        <p class=\"article-date\">${publishedAt}</p>\n                    </div>\n                    <p class=\"article-discription\">${description}</p>\n                    <p class=\"article-text\">${content}</p>\n                    <a href=\"${url}\" class=\"article-link\" target=\"_blank\">Read more...</a>\n                </div>\n                <div class=\"article-content-img\">\n                    <img src=\"${urlToImage}\" alt=\"${imgAlt}\" class=\"article-image\">\n                </div>\n            </div>\n        </article>`\n    );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3L2FydGljbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3L2FydGljbGUuanM/MDkzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vc3R1ZmYvaGVscGVycyc7XG5cbmV4cG9ydCBjb25zdCBhcnRpY2xlQ29tcG9uZW50ID0gKHsgdGl0bGUsIGF1dGhvciwgcHVibGlzaGVkQXQsIGRlc2NyaXB0aW9uLCBjb250ZW50LCB1cmwsIHVybFRvSW1hZ2UgfSkgPT4ge1xuICAgIHRpdGxlID0gdGl0bGUgfHwgJ1RpdGxlIGlzIG5vdCBmb3VuZCcsXG4gICAgYXV0aG9yID0gYXV0aG9yIHx8ICdBdXRob3IgaXMgbm90IHNwZWNpZmllZCcsXG4gICAgcHVibGlzaGVkQXQgPSBwdWJsaXNoZWRBdCB8fCAnRGF0ZSBpbiBub3Qgc3BlY2lmaWVkJyxcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uIHx8ICcnLFxuICAgIGNvbnRlbnQgPSBjb250ZW50IHx8ICdDb250ZW50IGlzIG5vdCBzcGVjaWZpZWQnLFxuICAgIHVybCA9IHVybCB8fCAnIycsXG4gICAgdXJsVG9JbWFnZSA9IHVybFRvSW1hZ2UgfHwgJy4vc3JjL2ltZy9kZWZhdWx0LWltYWdlLnBuZydcbiAgICBsZXQgaW1nQWx0ID0gZGVzY3JpcHRpb24uc3BsaXQoJyAnKS5zbGljZSgwLCAzKS5qb2luKCcgJyk7XG4gICAgcHVibGlzaGVkQXQgPSBwdWJsaXNoZWRBdCA9PT0gJ0RhdGUgaW4gbm90IHNwZWNpZmllZCcgPyBgUHVibGlzaGVkIGF0ICR7cHVibGlzaGVkQXR9YCA6IGBQdWJsaXNoZWQgYXQgJHtmb3JtYXREYXRlKHB1Ymxpc2hlZEF0KX1gO1xuICAgIHJldHVybiAoXG4gICAgICAgIGA8YXJ0aWNsZSBjbGFzcz1cImFydGljbGVcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImFydGljbGUtaGVhZGVyXCI+JHt0aXRsZX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGUtY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGUtY29udGVudC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXJ0aWNsZS1hdXRob3JcIj4ke2F1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFydGljbGUtZGF0ZVwiPiR7cHVibGlzaGVkQXR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcnRpY2xlLWRpc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXJ0aWNsZS10ZXh0XCI+JHtjb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dXJsfVwiIGNsYXNzPVwiYXJ0aWNsZS1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVhZCBtb3JlLi4uPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlLWNvbnRlbnQtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt1cmxUb0ltYWdlfVwiIGFsdD1cIiR7aW1nQWx0fVwiIGNsYXNzPVwiYXJ0aWNsZS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5gXG4gICAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./view/article.js\n");

/***/ }),

/***/ "./view/dinamic-elements-events/newsItemClickHandler.js":
/*!**************************************************************!*\
  !*** ./view/dinamic-elements-events/newsItemClickHandler.js ***!
  \**************************************************************/
/*! exports provided: newsItemClickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsItemClickHandler\", function() { return newsItemClickHandler; });\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stuff/helpers */ \"./stuff/helpers.js\");\n\n\nconst newsItemClickHandler = (renderArticles, fetchData) => {\n  const resultItems = [...Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.result-item')];\n  console.log(resultItems);\n  resultItems.forEach(item => {\n    item.addEventListener('click', function() {\n      let sources = this.getAttribute('title');\n      if (sources.length > 2 && sources !== 'rt') {\n        renderArticles({\n          fetchData,\n          requestData: { sources }\n        });\n      } else {\n        renderArticles({\n          fetchData,\n          requestData: { country: sources }\n        });\n      }\n    })\n  })\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3L2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL25ld3NJdGVtQ2xpY2tIYW5kbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlldy9kaW5hbWljLWVsZW1lbnRzLWV2ZW50cy9uZXdzSXRlbUNsaWNrSGFuZGxlci5qcz80ODI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEVsZW1lbnQgfSBmcm9tICcuLi8uLi9zdHVmZi9oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IG5ld3NJdGVtQ2xpY2tIYW5kbGVyID0gKHJlbmRlckFydGljbGVzLCBmZXRjaERhdGEpID0+IHtcbiAgY29uc3QgcmVzdWx0SXRlbXMgPSBbLi4uZ2V0RWxlbWVudCgnLnJlc3VsdC1pdGVtJyldO1xuICBjb25zb2xlLmxvZyhyZXN1bHRJdGVtcyk7XG4gIHJlc3VsdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHNvdXJjZXMgPSB0aGlzLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgICAgIGlmIChzb3VyY2VzLmxlbmd0aCA+IDIgJiYgc291cmNlcyAhPT0gJ3J0Jykge1xuICAgICAgICByZW5kZXJBcnRpY2xlcyh7XG4gICAgICAgICAgZmV0Y2hEYXRhLFxuICAgICAgICAgIHJlcXVlc3REYXRhOiB7IHNvdXJjZXMgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlckFydGljbGVzKHtcbiAgICAgICAgICBmZXRjaERhdGEsXG4gICAgICAgICAgcmVxdWVzdERhdGE6IHsgY291bnRyeTogc291cmNlcyB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gIH0pXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./view/dinamic-elements-events/newsItemClickHandler.js\n");

/***/ }),

/***/ "./view/dinamic-elements-events/toggler.js":
/*!*************************************************!*\
  !*** ./view/dinamic-elements-events/toggler.js ***!
  \*************************************************/
/*! exports provided: toggleTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleTabs\", function() { return toggleTabs; });\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stuff/helpers */ \"./stuff/helpers.js\");\n\n\nconst toggleTabs = () => {\n  const publishers = Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#publishers-info');\n  const countries = Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#countries-info');\n  const tabs = [...Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.news-tab')];\n  const switchContent = () => {\n    countries.classList.toggle('not-display');\n    publishers.classList.toggle('not-display');\n  }\n\n  tabs.forEach(elem => {\n    elem.addEventListener(\"click\", () => {\n      Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_0__[\"removeClassesFrom\"])(tabs, 'selected');\n      switchContent();\n      elem.classList.add('selected');\n    });\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3L2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL3RvZ2dsZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3L2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL3RvZ2dsZXIuanM/YTc3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW1vdmVDbGFzc2VzRnJvbSwgZ2V0RWxlbWVudCB9IGZyb20gJy4uLy4uL3N0dWZmL2hlbHBlcnMnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlVGFicyA9ICgpID0+IHtcbiAgY29uc3QgcHVibGlzaGVycyA9IGdldEVsZW1lbnQoJyNwdWJsaXNoZXJzLWluZm8nKTtcbiAgY29uc3QgY291bnRyaWVzID0gZ2V0RWxlbWVudCgnI2NvdW50cmllcy1pbmZvJyk7XG4gIGNvbnN0IHRhYnMgPSBbLi4uZ2V0RWxlbWVudCgnLm5ld3MtdGFiJyldO1xuICBjb25zdCBzd2l0Y2hDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvdW50cmllcy5jbGFzc0xpc3QudG9nZ2xlKCdub3QtZGlzcGxheScpO1xuICAgIHB1Ymxpc2hlcnMuY2xhc3NMaXN0LnRvZ2dsZSgnbm90LWRpc3BsYXknKTtcbiAgfVxuXG4gIHRhYnMuZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByZW1vdmVDbGFzc2VzRnJvbSh0YWJzLCAnc2VsZWN0ZWQnKTtcbiAgICAgIHN3aXRjaENvbnRlbnQoKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./view/dinamic-elements-events/toggler.js\n");

/***/ }),

/***/ "./view/newsSource.js":
/*!****************************!*\
  !*** ./view/newsSource.js ***!
  \****************************/
/*! exports provided: newsSourceItem, newsSources, newsSourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourceItem\", function() { return newsSourceItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSources\", function() { return newsSources; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsSourcesComponent\", function() { return newsSourcesComponent; });\n/* harmony import */ var _stuff_staticData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/staticData */ \"./stuff/staticData.js\");\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n\n\n\nconst newsSourceItem = (title, id = title) => {\n  return (\n    `<div class=\"result-item\" title=\"${id}\">\n      <p class=\"result-item-title\">${title}</p>\n    </div>`\n  );\n};\n\nconst newsSources = (itemsList, itemsListCountries) => {\n\n  const publishersContent =\n    `<div id=\"publishers-info\">\n      <p class=\"news-sources-description\">\n        We crawl and index news articles from over 30,000 news \n        sources and blogs. We also monitor the top and breaking \n        news headlines from the following 138 of the most notable \n        of these sources. You can click through for integration \n        examples.\n      </p>\n      <div class=\"news-sources-results\" id=\"news-sources-results\">\n        ${Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_1__[\"removeComas\"])(itemsList)}\n      </div>\n    </div>`;\n\n  const countriesContent =\n    `<div id=\"countries-info\" class=\"not-display\"\">\n      <p class=\"news-sources-description\">\n        We curate a list of top headlines for a range of countries. You can click through for integration examples.\n      </p>\n      <div class=\"news-sources-results\" id=\"news-sources-results\">\n        ${Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_1__[\"removeComas\"])(itemsListCountries)}\n      </div>\n    </div>`;\n\n\n  return (\n    `<section class=\"news-sources-wrapper\">\n      <h2 class=\"news-sources-header\">News sources</h2>\n      <div class=\"news-sources-controls-wrapper\">\n        <h3 class=\"news-tab selected\" title=\"publishers\">Publishers</h3>\n        <h3 class=\"news-tab\" title=\"countries\">Countries</h3>\n      </div>\n      ${publishersContent}\n      ${countriesContent}\n    </section>`\n  );\n}\n\nconst newsSourcesComponent = (sources) => {\n  let itemsList = sources.map(item => {\n    return newsSourceItem(item.name, item.id);\n  });\n  let itemsListCountries = _stuff_staticData__WEBPACK_IMPORTED_MODULE_0__[\"countries\"].map(item => {\n    return newsSourceItem(item);\n  });\n  return newsSources(itemsList, itemsListCountries);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3L25ld3NTb3VyY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3L25ld3NTb3VyY2UuanM/Y2U0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tICcuLi9zdHVmZi9zdGF0aWNEYXRhJztcbmltcG9ydCB7IHJlbW92ZUNvbWFzIH0gZnJvbSAnLi4vc3R1ZmYvaGVscGVycyc7XG5cbmV4cG9ydCBjb25zdCBuZXdzU291cmNlSXRlbSA9ICh0aXRsZSwgaWQgPSB0aXRsZSkgPT4ge1xuICByZXR1cm4gKFxuICAgIGA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1cIiB0aXRsZT1cIiR7aWR9XCI+XG4gICAgICA8cCBjbGFzcz1cInJlc3VsdC1pdGVtLXRpdGxlXCI+JHt0aXRsZX08L3A+XG4gICAgPC9kaXY+YFxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IG5ld3NTb3VyY2VzID0gKGl0ZW1zTGlzdCwgaXRlbXNMaXN0Q291bnRyaWVzKSA9PiB7XG5cbiAgY29uc3QgcHVibGlzaGVyc0NvbnRlbnQgPVxuICAgIGA8ZGl2IGlkPVwicHVibGlzaGVycy1pbmZvXCI+XG4gICAgICA8cCBjbGFzcz1cIm5ld3Mtc291cmNlcy1kZXNjcmlwdGlvblwiPlxuICAgICAgICBXZSBjcmF3bCBhbmQgaW5kZXggbmV3cyBhcnRpY2xlcyBmcm9tIG92ZXIgMzAsMDAwIG5ld3MgXG4gICAgICAgIHNvdXJjZXMgYW5kIGJsb2dzLiBXZSBhbHNvIG1vbml0b3IgdGhlIHRvcCBhbmQgYnJlYWtpbmcgXG4gICAgICAgIG5ld3MgaGVhZGxpbmVzIGZyb20gdGhlIGZvbGxvd2luZyAxMzggb2YgdGhlIG1vc3Qgbm90YWJsZSBcbiAgICAgICAgb2YgdGhlc2Ugc291cmNlcy4gWW91IGNhbiBjbGljayB0aHJvdWdoIGZvciBpbnRlZ3JhdGlvbiBcbiAgICAgICAgZXhhbXBsZXMuXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwibmV3cy1zb3VyY2VzLXJlc3VsdHNcIiBpZD1cIm5ld3Mtc291cmNlcy1yZXN1bHRzXCI+XG4gICAgICAgICR7cmVtb3ZlQ29tYXMoaXRlbXNMaXN0KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG5cbiAgY29uc3QgY291bnRyaWVzQ29udGVudCA9XG4gICAgYDxkaXYgaWQ9XCJjb3VudHJpZXMtaW5mb1wiIGNsYXNzPVwibm90LWRpc3BsYXlcIlwiPlxuICAgICAgPHAgY2xhc3M9XCJuZXdzLXNvdXJjZXMtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgV2UgY3VyYXRlIGEgbGlzdCBvZiB0b3AgaGVhZGxpbmVzIGZvciBhIHJhbmdlIG9mIGNvdW50cmllcy4gWW91IGNhbiBjbGljayB0aHJvdWdoIGZvciBpbnRlZ3JhdGlvbiBleGFtcGxlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdzLXNvdXJjZXMtcmVzdWx0c1wiIGlkPVwibmV3cy1zb3VyY2VzLXJlc3VsdHNcIj5cbiAgICAgICAgJHtyZW1vdmVDb21hcyhpdGVtc0xpc3RDb3VudHJpZXMpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcblxuXG4gIHJldHVybiAoXG4gICAgYDxzZWN0aW9uIGNsYXNzPVwibmV3cy1zb3VyY2VzLXdyYXBwZXJcIj5cbiAgICAgIDxoMiBjbGFzcz1cIm5ld3Mtc291cmNlcy1oZWFkZXJcIj5OZXdzIHNvdXJjZXM8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIm5ld3Mtc291cmNlcy1jb250cm9scy13cmFwcGVyXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cIm5ld3MtdGFiIHNlbGVjdGVkXCIgdGl0bGU9XCJwdWJsaXNoZXJzXCI+UHVibGlzaGVyczwvaDM+XG4gICAgICAgIDxoMyBjbGFzcz1cIm5ld3MtdGFiXCIgdGl0bGU9XCJjb3VudHJpZXNcIj5Db3VudHJpZXM8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICAke3B1Ymxpc2hlcnNDb250ZW50fVxuICAgICAgJHtjb3VudHJpZXNDb250ZW50fVxuICAgIDwvc2VjdGlvbj5gXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBuZXdzU291cmNlc0NvbXBvbmVudCA9IChzb3VyY2VzKSA9PiB7XG4gIGxldCBpdGVtc0xpc3QgPSBzb3VyY2VzLm1hcChpdGVtID0+IHtcbiAgICByZXR1cm4gbmV3c1NvdXJjZUl0ZW0oaXRlbS5uYW1lLCBpdGVtLmlkKTtcbiAgfSk7XG4gIGxldCBpdGVtc0xpc3RDb3VudHJpZXMgPSBjb3VudHJpZXMubWFwKGl0ZW0gPT4ge1xuICAgIHJldHVybiBuZXdzU291cmNlSXRlbShpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBuZXdzU291cmNlcyhpdGVtc0xpc3QsIGl0ZW1zTGlzdENvdW50cmllcyk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./view/newsSource.js\n");

/***/ })

/******/ });