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

/***/ "./controller/initializer.js":
/*!***********************************!*\
  !*** ./controller/initializer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Initializer; });\n/* harmony import */ var _model_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/reducer */ \"./model/reducer.js\");\n/* harmony import */ var _model_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/actions */ \"./model/actions.js\");\n/* harmony import */ var _model_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/store */ \"./model/store.js\");\n/* harmony import */ var _stuff_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stuff/constants */ \"./stuff/constants.js\");\n/* harmony import */ var _view_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/article */ \"./view/article.js\");\n/* harmony import */ var _view_newsSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/newsSource */ \"./view/newsSource.js\");\n/* harmony import */ var _view_dinamic_elements_events_toggler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/dinamic-elements-events/toggler */ \"./view/dinamic-elements-events/toggler.js\");\n/* harmony import */ var _services_fetchData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/fetchData */ \"./services/fetchData.js\");\n/* harmony import */ var _stuff_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stuff/helpers */ \"./stuff/helpers.js\");\n\n\n\n\n\n\n\n\n\n\nconst store = Object(_model_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_model_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _model_store__WEBPACK_IMPORTED_MODULE_2__[\"initialState\"]);\nstore.subscribe(()=>console.log(store.getState()));\n\n// TODO - avoid code dublication\n\n// const addListener = (elem, event, params) => {\n//     elem.addEventListener(event, e => {\n//         fetchInfo({\n//                 request,\n//                 ...params\n//             })\n//             .then(result => store.dispatch(result))\n//             .then(() => {\n//                 showPreloader();\n//                 // console.log(params);\n//                 // console.log(params.length);\n//                 let renderedHtml = isEmpty(params) ?\n//                     newsSourcesComponent(store.getState().sources.sources) : \n//                     /* rewrite methods to the same use (cat map) */\n//                     store.getState().news.articles.map(item => articleComponent(item));\n//                 resultList.innerHTML = renderedHtml;\n//                 isEmpty(params) && toggleTabs();\n//             })\n//     });\n// }\n\n// addListener(articlesContainer, 'click', {country: 'us'});\n// addListener(newsSourcesContainer, 'click', {});\n// addListener(searchInput, 'keydown', {keyWord: 'keyWord'});\n\nclass Initializer {\n    constructor() {\n      this.initialize = this.initialize.bind(this);\n    }\n  \n    initialize() {\n        _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"articlesContainer\"].addEventListener('click', () => {\n        Object(_model_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({request: _services_fetchData__WEBPACK_IMPORTED_MODULE_7__[\"default\"], country: 'us'})\n            .then(result => store.dispatch(result))\n            .then(() => {\n                Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_8__[\"showPreloader\"])();\n                _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"resultList\"].innerHTML = store.getState().news.articles.map(item => Object(_view_article__WEBPACK_IMPORTED_MODULE_4__[\"articleComponent\"])(item));\n            })\n        });\n  \n        _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"newsSourcesContainer\"].addEventListener('click', () =>\n            Object(_model_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({request: _services_fetchData__WEBPACK_IMPORTED_MODULE_7__[\"default\"]})\n                .then(result => store.dispatch(result))\n                .then(() => {\n                    Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_8__[\"showPreloader\"])();\n                    _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"resultList\"].innerHTML = Object(_view_newsSource__WEBPACK_IMPORTED_MODULE_5__[\"newsSourcesComponent\"])(store.getState().sources.sources);\n                    Object(_view_dinamic_elements_events_toggler__WEBPACK_IMPORTED_MODULE_6__[\"toggleTabs\"])();\n                })\n        );\n\n        _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"searchInput\"].addEventListener('keydown', e => {\n            let keyWord = Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_8__[\"handleImputKeyDown\"])(e);\n            if (e.keyCode === 13 && e.target.value !== '') {\n                Object(_model_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({request: _services_fetchData__WEBPACK_IMPORTED_MODULE_7__[\"default\"], keyWord: Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_8__[\"handleImputKeyDown\"])(e)})\n                    .then(result => store.dispatch(result))\n                    .then(() => {\n                        Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_8__[\"showPreloader\"])();\n                        _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"resultList\"].innerHTML = store.getState().news.articles.map(item => Object(_view_article__WEBPACK_IMPORTED_MODULE_4__[\"articleComponent\"])(item));\n                    })\n                }\n            });\n\n        _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"searchButton\"].addEventListener('click', () => _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"searchInput\"].value !== '' ? \n            Object(_model_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({request: _services_fetchData__WEBPACK_IMPORTED_MODULE_7__[\"default\"], keyWord: _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"searchInput\"].value})\n                .then(result => store.dispatch(result))\n                .then(() => {\n                    Object(_stuff_helpers__WEBPACK_IMPORTED_MODULE_8__[\"showPreloader\"])();\n                    _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"resultList\"].innerHTML = store.getState().news.articles.map(item => Object(_view_article__WEBPACK_IMPORTED_MODULE_4__[\"articleComponent\"])(item));\n                })\n            : null);\n\n        _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"headingTitle\"].addEventListener('click', () => _stuff_constants__WEBPACK_IMPORTED_MODULE_3__[\"resultList\"].innerHTML = '');\n\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250cm9sbGVyL2luaXRpYWxpemVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci9pbml0aWFsaXplci5qcz9kMTA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWR1Y2VyIGZyb20gJy4uL21vZGVsL3JlZHVjZXInO1xuaW1wb3J0IGZldGNoSW5mbyBmcm9tICcuLi9tb2RlbC9hY3Rpb25zJztcbmltcG9ydCBjcmVhdGVTdG9yZSwgeyBpbml0aWFsU3RhdGUgfSBmcm9tICcuLi9tb2RlbC9zdG9yZSc7XG5pbXBvcnQgeyBuZXdzU291cmNlc0NvbnRhaW5lciwgYXJ0aWNsZXNDb250YWluZXIsIHNlYXJjaElucHV0LCBzZWFyY2hCdXR0b24sIGhlYWRpbmdUaXRsZSwgcmVzdWx0TGlzdCwgQVBJX0tFWSBhcyBhcGlLZXkgfSBmcm9tICcuLi9zdHVmZi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYXJ0aWNsZUNvbXBvbmVudCB9IGZyb20gXCIuLi92aWV3L2FydGljbGVcIjtcbmltcG9ydCB7IG5ld3NTb3VyY2VzQ29tcG9uZW50IH0gZnJvbSBcIi4uL3ZpZXcvbmV3c1NvdXJjZVwiO1xuaW1wb3J0IHsgdG9nZ2xlVGFicyB9IGZyb20gXCIuLi92aWV3L2RpbmFtaWMtZWxlbWVudHMtZXZlbnRzL3RvZ2dsZXJcIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL2ZldGNoRGF0YSc7XG5pbXBvcnQgeyBzaG93UHJlbG9hZGVyLCBoYW5kbGVJbXB1dEtleURvd24gfSBmcm9tICcuLi9zdHVmZi9oZWxwZXJzJztcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuc3RvcmUuc3Vic2NyaWJlKCgpPT5jb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKSk7XG5cbi8vIFRPRE8gLSBhdm9pZCBjb2RlIGR1YmxpY2F0aW9uXG5cbi8vIGNvbnN0IGFkZExpc3RlbmVyID0gKGVsZW0sIGV2ZW50LCBwYXJhbXMpID0+IHtcbi8vICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGUgPT4ge1xuLy8gICAgICAgICBmZXRjaEluZm8oe1xuLy8gICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4vLyAgICAgICAgICAgICAgICAgLi4ucGFyYW1zXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHN0b3JlLmRpc3BhdGNoKHJlc3VsdCkpXG4vLyAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgc2hvd1ByZWxvYWRlcigpO1xuLy8gICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4vLyAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGFyYW1zLmxlbmd0aCk7XG4vLyAgICAgICAgICAgICAgICAgbGV0IHJlbmRlcmVkSHRtbCA9IGlzRW1wdHkocGFyYW1zKSA/XG4vLyAgICAgICAgICAgICAgICAgICAgIG5ld3NTb3VyY2VzQ29tcG9uZW50KHN0b3JlLmdldFN0YXRlKCkuc291cmNlcy5zb3VyY2VzKSA6IFxuLy8gICAgICAgICAgICAgICAgICAgICAvKiByZXdyaXRlIG1ldGhvZHMgdG8gdGhlIHNhbWUgdXNlIChjYXQgbWFwKSAqL1xuLy8gICAgICAgICAgICAgICAgICAgICBzdG9yZS5nZXRTdGF0ZSgpLm5ld3MuYXJ0aWNsZXMubWFwKGl0ZW0gPT4gYXJ0aWNsZUNvbXBvbmVudChpdGVtKSk7XG4vLyAgICAgICAgICAgICAgICAgcmVzdWx0TGlzdC5pbm5lckhUTUwgPSByZW5kZXJlZEh0bWw7XG4vLyAgICAgICAgICAgICAgICAgaXNFbXB0eShwYXJhbXMpICYmIHRvZ2dsZVRhYnMoKTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgfSk7XG4vLyB9XG5cbi8vIGFkZExpc3RlbmVyKGFydGljbGVzQ29udGFpbmVyLCAnY2xpY2snLCB7Y291bnRyeTogJ3VzJ30pO1xuLy8gYWRkTGlzdGVuZXIobmV3c1NvdXJjZXNDb250YWluZXIsICdjbGljaycsIHt9KTtcbi8vIGFkZExpc3RlbmVyKHNlYXJjaElucHV0LCAna2V5ZG93bicsIHtrZXlXb3JkOiAna2V5V29yZCd9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdGlhbGl6ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplID0gdGhpcy5pbml0aWFsaXplLmJpbmQodGhpcyk7XG4gICAgfVxuICBcbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBhcnRpY2xlc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZmV0Y2hJbmZvKHtyZXF1ZXN0LCBjb3VudHJ5OiAndXMnfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBzdG9yZS5kaXNwYXRjaChyZXN1bHQpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNob3dQcmVsb2FkZXIoKTtcbiAgICAgICAgICAgICAgICByZXN1bHRMaXN0LmlubmVySFRNTCA9IHN0b3JlLmdldFN0YXRlKCkubmV3cy5hcnRpY2xlcy5tYXAoaXRlbSA9PiBhcnRpY2xlQ29tcG9uZW50KGl0ZW0pKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICBcbiAgICAgICAgbmV3c1NvdXJjZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAgZmV0Y2hJbmZvKHtyZXF1ZXN0fSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gc3RvcmUuZGlzcGF0Y2gocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dQcmVsb2FkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0TGlzdC5pbm5lckhUTUwgPSBuZXdzU291cmNlc0NvbXBvbmVudChzdG9yZS5nZXRTdGF0ZSgpLnNvdXJjZXMuc291cmNlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRhYnMoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGxldCBrZXlXb3JkID0gaGFuZGxlSW1wdXRLZXlEb3duKGUpO1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgZS50YXJnZXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hJbmZvKHtyZXF1ZXN0LCBrZXlXb3JkOiBoYW5kbGVJbXB1dEtleURvd24oZSl9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gc3RvcmUuZGlzcGF0Y2gocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1ByZWxvYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0TGlzdC5pbm5lckhUTUwgPSBzdG9yZS5nZXRTdGF0ZSgpLm5ld3MuYXJ0aWNsZXMubWFwKGl0ZW0gPT4gYXJ0aWNsZUNvbXBvbmVudChpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2VhcmNoSW5wdXQudmFsdWUgIT09ICcnID8gXG4gICAgICAgICAgICBmZXRjaEluZm8oe3JlcXVlc3QsIGtleVdvcmQ6IHNlYXJjaElucHV0LnZhbHVlfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gc3RvcmUuZGlzcGF0Y2gocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dQcmVsb2FkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0TGlzdC5pbm5lckhUTUwgPSBzdG9yZS5nZXRTdGF0ZSgpLm5ld3MuYXJ0aWNsZXMubWFwKGl0ZW0gPT4gYXJ0aWNsZUNvbXBvbmVudChpdGVtKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbCk7XG5cbiAgICAgICAgaGVhZGluZ1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVzdWx0TGlzdC5pbm5lckhUTUwgPSAnJyk7XG5cbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./controller/initializer.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/initializer */ \"./controller/initializer.js\");\n\n\nconst app = new _controller_initializer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\napp.initialize();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluaXRpYWxpemVyIGZyb20gJy4vY29udHJvbGxlci9pbml0aWFsaXplcic7XG5cbmNvbnN0IGFwcCA9IG5ldyBJbml0aWFsaXplcigpO1xuXG5hcHAuaW5pdGlhbGl6ZSgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./model/actions.js":
/*!**************************!*\
  !*** ./model/actions.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchInfo; });\n/* harmony import */ var _stuff_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stuff/constants */ \"./stuff/constants.js\");\n\n\nasync function fetchInfo({ request, country, sources, keyWord }) {\n    request = request || (() => {});\n    let type = country || keyWord || sources ? 'GET_NEWS' : 'GET_SOURCES';\n    return await request({ apiKey: _stuff_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY\"], country, sources, keyWord })\n        .then(payload => ({ type, payload }))\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbC9hY3Rpb25zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWwvYWN0aW9ucy5qcz82Y2Q0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9LRVkgYXMgYXBpS2V5IH0gZnJvbSAnLi4vc3R1ZmYvY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbmZvKHsgcmVxdWVzdCwgY291bnRyeSwgc291cmNlcywga2V5V29yZCB9KSB7XG4gICAgcmVxdWVzdCA9IHJlcXVlc3QgfHwgKCgpID0+IHt9KTtcbiAgICBsZXQgdHlwZSA9IGNvdW50cnkgfHwga2V5V29yZCB8fCBzb3VyY2VzID8gJ0dFVF9ORVdTJyA6ICdHRVRfU09VUkNFUyc7XG4gICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QoeyBhcGlLZXksIGNvdW50cnksIHNvdXJjZXMsIGtleVdvcmQgfSlcbiAgICAgICAgLnRoZW4ocGF5bG9hZCA9PiAoeyB0eXBlLCBwYXlsb2FkIH0pKVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./model/actions.js\n");

/***/ }),

/***/ "./model/reducer.js":
/*!**************************!*\
  !*** ./model/reducer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst reducer = (state, action) => {\n  action = action || '';\n  if (action.type === 'GET_SOURCES') {\n    return {\n      ...state,\n      sources: action.payload,\n    };\n  } else if (action.type === 'GET_NEWS') {\n    return {\n      ...state,\n      news: action.payload,\n    };\n  } else {\n    return state;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbC9yZWR1Y2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWwvcmVkdWNlci5qcz9lODUxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBhY3Rpb24gPSBhY3Rpb24gfHwgJyc7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0dFVF9TT1VSQ0VTJykge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNvdXJjZXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgIH07XG4gIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdHRVRfTkVXUycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBuZXdzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./model/reducer.js\n");

/***/ }),

/***/ "./model/store.js":
/*!************************!*\
  !*** ./model/store.js ***!
  \************************/
/*! exports provided: default, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\nconst initialState = {\n    news: {},\n    sources: {},\n};\n\nfunction createStore(reducer, initialState) {\n    let state = initialState;\n    let callbacks = [];\n\n    const getState = () => state;\n\n    const dispatch = action => {\n        state = reducer(state, action)\n        callbacks.forEach(cb => cb());\n    }\n\n    const subscribe = callback => {\n        callbacks.push(callback);\n        return () => callbacks = callbacks.filter(cb => cb !== callback);\n    }\n\n    dispatch({});\n\n    return {\n        getState,\n        dispatch,\n        subscribe\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbC9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZGVsL3N0b3JlLmpzPzVkODIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG5ld3M6IHt9LFxuICAgIHNvdXJjZXM6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlKSB7XG4gICAgbGV0IHN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgIGxldCBjYWxsYmFja3MgPSBbXTtcblxuICAgIGNvbnN0IGdldFN0YXRlID0gKCkgPT4gc3RhdGU7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IGFjdGlvbiA9PiB7XG4gICAgICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxuICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChjYiA9PiBjYigpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSBjYWxsYmFjayA9PiB7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5maWx0ZXIoY2IgPT4gY2IgIT09IGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7fSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgIHN1YnNjcmliZVxuICAgIH07XG59O1xuXG5leHBvcnQge1xuICAgIGluaXRpYWxTdGF0ZVxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./model/store.js\n");

/***/ }),

/***/ "./services/fetchData.js":
/*!*******************************!*\
  !*** ./services/fetchData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function request({country, sources, keyWord, apiKey}) {\n  console.log(country, sources, keyWord, apiKey);\n  let url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;\n\n  if (sources) url = `https://newsapi.org/v2/top-headlines?sources=${sources.trim()}&apiKey=${apiKey}`;\n  if (country) url = `https://newsapi.org/v2/top-headlines?country=${country.trim()}&apiKey=${apiKey}`;\n  if (keyWord) url = `https://newsapi.org/v2/everything?q=${keyWord.trim()}&apiKey=${apiKey}`;\n\n  let request = new Request(url);\n\n  return await fetch(request)\n    .then(response => response.json())\n    .catch(error => console.log(error.message));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (request);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9mZXRjaERhdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9mZXRjaERhdGEuanM/ZmExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiByZXF1ZXN0KHtjb3VudHJ5LCBzb3VyY2VzLCBrZXlXb3JkLCBhcGlLZXl9KSB7XG4gIGNvbnNvbGUubG9nKGNvdW50cnksIHNvdXJjZXMsIGtleVdvcmQsIGFwaUtleSk7XG4gIGxldCB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9zb3VyY2VzP2FwaUtleT0ke2FwaUtleX1gO1xuXG4gIGlmIChzb3VyY2VzKSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP3NvdXJjZXM9JHtzb3VyY2VzLnRyaW0oKX0mYXBpS2V5PSR7YXBpS2V5fWA7XG4gIGlmIChjb3VudHJ5KSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9JHtjb3VudHJ5LnRyaW0oKX0mYXBpS2V5PSR7YXBpS2V5fWA7XG4gIGlmIChrZXlXb3JkKSB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9JHtrZXlXb3JkLnRyaW0oKX0mYXBpS2V5PSR7YXBpS2V5fWA7XG5cbiAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xuXG4gIHJldHVybiBhd2FpdCBmZXRjaChyZXF1ZXN0KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/fetchData.js\n");

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
/*! exports provided: removeComas, formatTextForRequest, showPreloader, formatDate, removeClassesFrom, getElement, Warning, isEmpty, handleImputKeyDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeComas\", function() { return removeComas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatTextForRequest\", function() { return formatTextForRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showPreloader\", function() { return showPreloader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClassesFrom\", function() { return removeClassesFrom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Warning\", function() { return Warning; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return isEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleImputKeyDown\", function() { return handleImputKeyDown; });\nconst getElement = selector => {\n  const elementsList = document.querySelectorAll(selector);\n  return elementsList.length > 1 ? elementsList : elementsList[0];\n};\n\nconst isEmpty = obj => {\n  for (var key in obj) {\n    return false;\n  }\n  return true;\n};\n\nconst handleImputKeyDown = e => {\n    if (e.keyCode === 27) e.target.value = '';\n    else return e.target.value;\n};\n\nconst removeComas = list => list.toString().split(',').join('');\n\nconst formatTextForRequest = text => text.split(' ').join('-');\n\nconst showPreloader = () => {\n  let spinner = getElement('#spinner-wrapper');\n  let result = getElement('#result-list');\n  window.scrollTo(0, 0);\n  spinner.style.opacity = 1;\n  result.style.opacity = 0;\n  setTimeout(() => {\n    spinner.style.opacity = 0;\n    result.style.opacity = 1;\n  }, 1000)\n};\n\nconst removeClassesFrom = (elem, className) => elem.forEach(item => item.classList.remove(className));\n\nconst formatDate = notFormatedDate => {\n  const date = new Date(notFormatedDate);\n  const formatter = new Intl.DateTimeFormat(\"ru\");\n  return formatter.format(date);\n};\n\nclass Warning {\n  constructor() {\n    if (typeof Warning.instance === 'object') {\n      return Warning.instance;\n    }\n    Warning.instance = this;\n    return this;\n  };\n\n  showWarning() {\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! toastr */ \"../../node_modules/toastr/toastr.js\", 7)).then(toastr => {\n      toastr.error('Something going wrong. Please, have a look in console.');\n    })\n  };\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHVmZi9oZWxwZXJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R1ZmYvaGVscGVycy5qcz80ZTgxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldEVsZW1lbnQgPSBzZWxlY3RvciA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICByZXR1cm4gZWxlbWVudHNMaXN0Lmxlbmd0aCA+IDEgPyBlbGVtZW50c0xpc3QgOiBlbGVtZW50c0xpc3RbMF07XG59O1xuXG5jb25zdCBpc0VtcHR5ID0gb2JqID0+IHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGhhbmRsZUltcHV0S2V5RG93biA9IGUgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgIGVsc2UgcmV0dXJuIGUudGFyZ2V0LnZhbHVlO1xufTtcblxuY29uc3QgcmVtb3ZlQ29tYXMgPSBsaXN0ID0+IGxpc3QudG9TdHJpbmcoKS5zcGxpdCgnLCcpLmpvaW4oJycpO1xuXG5jb25zdCBmb3JtYXRUZXh0Rm9yUmVxdWVzdCA9IHRleHQgPT4gdGV4dC5zcGxpdCgnICcpLmpvaW4oJy0nKTtcblxuY29uc3Qgc2hvd1ByZWxvYWRlciA9ICgpID0+IHtcbiAgbGV0IHNwaW5uZXIgPSBnZXRFbGVtZW50KCcjc3Bpbm5lci13cmFwcGVyJyk7XG4gIGxldCByZXN1bHQgPSBnZXRFbGVtZW50KCcjcmVzdWx0LWxpc3QnKTtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICBzcGlubmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICByZXN1bHQuc3R5bGUub3BhY2l0eSA9IDA7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNwaW5uZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgcmVzdWx0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9LCAxMDAwKVxufTtcblxuY29uc3QgcmVtb3ZlQ2xhc3Nlc0Zyb20gPSAoZWxlbSwgY2xhc3NOYW1lKSA9PiBlbGVtLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSk7XG5cbmNvbnN0IGZvcm1hdERhdGUgPSBub3RGb3JtYXRlZERhdGUgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUobm90Rm9ybWF0ZWREYXRlKTtcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJydVwiKTtcbiAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoZGF0ZSk7XG59O1xuXG5jbGFzcyBXYXJuaW5nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiBXYXJuaW5nLmluc3RhbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFdhcm5pbmcuaW5zdGFuY2U7XG4gICAgfVxuICAgIFdhcm5pbmcuaW5zdGFuY2UgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHNob3dXYXJuaW5nKCkge1xuICAgIGltcG9ydCgndG9hc3RyJykudGhlbih0b2FzdHIgPT4ge1xuICAgICAgdG9hc3RyLmVycm9yKCdTb21ldGhpbmcgZ29pbmcgd3JvbmcuIFBsZWFzZSwgaGF2ZSBhIGxvb2sgaW4gY29uc29sZS4nKTtcbiAgICB9KVxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgcmVtb3ZlQ29tYXMsXG4gIGZvcm1hdFRleHRGb3JSZXF1ZXN0LFxuICBzaG93UHJlbG9hZGVyLFxuICBmb3JtYXREYXRlLFxuICByZW1vdmVDbGFzc2VzRnJvbSxcbiAgZ2V0RWxlbWVudCxcbiAgV2FybmluZyxcbiAgaXNFbXB0eSxcbiAgaGFuZGxlSW1wdXRLZXlEb3duLFxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./stuff/helpers.js\n");

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