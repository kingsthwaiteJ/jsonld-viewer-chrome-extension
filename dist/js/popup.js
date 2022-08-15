/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/json-viewer-js/lib/json-viewer.min.js":
/*!************************************************************!*\
  !*** ./node_modules/json-viewer-js/lib/json-viewer.min.js ***!
  \************************************************************/
/***/ ((module) => {

!function(n,r){if(true)module.exports=r();else { var e, t; }}(window,(function(){return function(n){function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(r){return n[r]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},r.p="",r(r.s=0)}([function(n,r,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n){return"[object Array]"===c.call(n)}function i(n){return"[object Object]"===c.call(n)}function a(n){return"[object Null]"===c.call(n)}function l(n){if(this.options=Object.assign({theme:"light",container:null,data:"{}",expand:!1},n),a(n.container))throw new Error("Container: dom element is required");this.render()}t(1);var c=Object.prototype.toString;l.prototype.renderRight=function(n,r,t){!function(n){return"number"==typeof n}(t)?function(n){return"boolean"==typeof n}(t)?r.setAttribute("class",n+"rightBoolean"):"null"===t?r.setAttribute("class",n+"rightNull"):r.setAttribute("class",n+"rightString"):r.setAttribute("class",n+"rightNumber"),r.innerText=t},l.prototype.renderChildren=function(n,r,t,e,o,a){var l=this,c=this.createElement("span"),s=this.options.expand?"rotate90":"",u=this.options.expand?"add-height":"";c.setAttribute("class",n+"folder "+s),c.onclick=function(n){var r=n.target.parentNode.nextSibling;l.toggleItem(r,n.target)};var f=0,d=!1;i(t)?(f=Object.keys(t).length,d=!0):f=t.length,a.innerHTML=d?r+"&nbsp;&nbsp{"+f+"}":r+"&nbsp;&nbsp["+f+"]",a.prepend(c),e.setAttribute("class",n+"rightObj "+u),l.parse(t,e,o+0,n)},l.prototype.parse=function(n,r,t,o){var i=this;this.forEach(n,(function(n,a){var l=i.createItem(t,o,r,a,"object"!==e(n)),c=l.left,s=l.right;"object"===e(n)?i.renderChildren(o,a,n,s,t,c):i.renderRight(o,s,n)}))},l.prototype.createItem=function(n,r,t,e,o){var i=this,a=this.createElement("div"),l=this.createElement("div"),c=this.createElement("div"),s=this.createElement("div");return a.style.marginLeft=2*n+"px",l.innerHTML="".concat(e,'<span class="jv-').concat(r,'-symbol">&nbsp;:&nbsp;</span>'),o?(a.appendChild(s),s.appendChild(l),s.appendChild(c),t.appendChild(a),a.setAttribute("class",r+"current"),s.setAttribute("class","jv-wrap"),l.setAttribute("class",r+"left")):(a.appendChild(l),a.appendChild(c),t.appendChild(a),a.setAttribute("class",r+"current"),l.setAttribute("class",r+"left jv-folder"),l.onclick=function(n){var r=n.target.nextSibling;i.toggleItem(r,n.target.querySelector("span"))}),{left:l,right:c,current:a}},l.prototype.render=function(){var n,r=this.options.data,t="jv-"+this.options.theme+"-",e=this.options.container,i="object";e.setAttribute("class",t+"con");try{n=JSON.parse(r)}catch(n){throw new Error("It is not a json format")}o(n)&&(i="array");var a=this.createItem(0,t,e,i),l=a.left,c=a.right;this.renderChildren(t,i,n,c,0,l)},l.prototype.toggleItem=function(n,r){n.classList.toggle("add-height"),r.classList.toggle("rotate90")},l.prototype.createElement=function(n){return document.createElement(n)},l.prototype.forEach=function(n,r){if(!function(n){return void 0===n}(n)&&!a(n))if("object"===e(n)&&o(n))for(var t=0,i=n.length;t<i;t++)r.call(null,n[t],t,n);else for(key in n)n.hasOwnProperty(key)&&r.call(null,n[key]||"null",key,n)},n.exports=l},function(n,r,t){var e=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);e(o,{insert:"head",singleton:!1});var i=o.locals?o.locals:{};n.exports=i},function(n,r,t){"use strict";function e(n){for(var r=-1,t=0;t<f.length;t++)if(f[t].identifier===n){r=t;break}return r}function o(n,r){for(var t={},o=[],i=0;i<n.length;i++){var a=n[i],l=r.base?a[0]+r.base:a[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=e(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1===d?f.push({identifier:u,updater:c(p,r),references:1}):(f[d].references++,f[d].updater(p)),o.push(u)}return o}function i(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var i=u(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}function a(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function l(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function c(n,r){var t,e,o;if(r.singleton){var c=h++;t=p||(p=i(r)),e=a.bind(null,t,c,!1),o=a.bind(null,t,c,!0)}else t=i(r),e=l.bind(null,t,r),o=function(){!function(n){null!==n.parentNode&&n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}var s=function(){var n;return function(){return void 0===n&&(n=!(!(window&&document&&document.all)||window.atob)),n}}(),u=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),f=[],d=function(){var n=[];return function(r,t){return n[r]=t,n.filter(Boolean).join("\n")}}(),p=null,h=0;n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=s());var t=o(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var a=e(t[i]);f[a].references--}for(var l=o(n,r),c=0;c<t.length;c++){var s=e(t[c]);0===f[s].references&&(f[s].updater(),f.splice(s,1))}t=l}}}},function(n,r,t){(r=t(4)(!1)).push([n.i,"/* html, body{\r\n    width: 100%;\r\n    height: 100%;\r\n} */\r\n\r\n\r\n.add-height{\r\n    height: auto !important;\r\n}\r\n\r\n.rotate90{\r\n    transform: rotate(0deg) !important;\r\n}\r\n\r\n.jv-wrap{\r\n    display: flex;\r\n}\r\n\r\n.jv-folder{\r\n    cursor: pointer;\r\n}\r\n\r\n/* for light them */\r\n\r\n.jv-light-symbol{\r\n    color: #000;\r\n    font-weight: bold;\r\n}\r\n\r\n.jv-light-con{\r\n    background: #fff;\r\n    color: #000;\r\n    font-family: monospace;\r\n    overflow: auto;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.jv-light-current {\r\n    line-height: 30px;\r\n    padding-left: 20px;\r\n    position: relative;\r\n}\r\n\r\n.jv-light-left {\r\n    display: inline-block;\r\n}\r\n\r\n.jv-light-rightString {\r\n    display: inline-block;\r\n    color: #7a3e9d;\r\n}\r\n\r\n.jv-light-rightBoolean {\r\n    display: inline-block;\r\n    color: #448c27;\r\n}\r\n\r\n.jv-light-rightNumber {\r\n    display: inline-block;\r\n    color: #f53232;\r\n}\r\n\r\n.jv-light-rightNull {\r\n    display: inline-block;\r\n    color: #9c5d27;\r\n}\r\n\r\n.jv-light-rightObj {\r\n    display: block !important;\r\n    overflow: hidden;\r\n    height: 0;\r\n}\r\n\r\n.jv-light-folder {\r\n    width: 0px;\r\n    display: inline-block;\r\n    margin-left: -15px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    height: 0px;\r\n    border: 4px solid transparent;\r\n    border-top: 8px solid #484d50;\r\n    position: absolute;\r\n    top: 11px;\r\n    transform-origin: 50% 25%;\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n\r\n\r\n\r\n/* for dark theme */\r\n\r\n.jv-dark-con{\r\n    background: #272822;\r\n    color: #fff;\r\n    font-family: monospace;\r\n    overflow: auto;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.jv-dark-symbol{\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n\r\n.jv-dark-current {\r\n    line-height: 30px;\r\n    padding-left: 20px;\r\n    position: relative;\r\n}\r\n\r\n.jv-dark-left {\r\n    display: inline-block;\r\n}\r\n\r\n.jv-dark-rightString {\r\n    display: inline-block;\r\n    color: #66d9ef;\r\n}\r\n\r\n.jv-dark-rightBoolean {\r\n    display: inline-block;\r\n    color: #a6e22e;\r\n}\r\n\r\n.jv-dark-rightNumber {\r\n    display: inline-block;\r\n    color: #f92672;\r\n}\r\n\r\n.jv-dark-rightNull {\r\n    display: inline-block;\r\n    color: #e6db74;\r\n}\r\n\r\n.jv-dark-rightObj {\r\n    display: block !important;\r\n    overflow: hidden;\r\n    height: 0;\r\n}\r\n\r\n.jv-dark-folder {\r\n    width: 0px;\r\n    display: inline-block;\r\n    margin-left: -15px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    height: 0px;\r\n    border: 4px solid transparent;\r\n    border-top: 8px solid #fff;\r\n    position: absolute;\r\n    top: 11px;\r\n    transform: rotate(-90deg);\r\n    transform-origin: 50% 25%;\r\n}\r\n\r\n",""]),n.exports=r},function(n){"use strict";function r(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=function(n){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r);return"/*# ".concat(t," */")}(e),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=r(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,r,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i,a=0;a<this.length;a++)null!=(i=this[a][0])&&(o[i]=!0);for(var l,c=0;c<n.length;c++)l=[].concat(n[c]),(!e||!o[l[0]])&&(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))},t}}])}));

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/ts/popup.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var json_viewer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-viewer-js */ "./node_modules/json-viewer-js/lib/json-viewer.min.js");
/* harmony import */ var json_viewer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_viewer_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var viewerDiv = document.getElementById('jsonld-viewer');

function retrieveJsonld() {
  console.log('Retrieving jsonld content ...');
  var jsonld = document.querySelector('script[type="application/ld+json"]');

  if (jsonld) {
    return jsonld.innerHTML;
  } else {
    return null;
  }
}

function loadJsonld(_x, _x2) {
  return _loadJsonld.apply(this, arguments);
}

function _loadJsonld() {
  _loadJsonld = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(tabID, theme) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return chrome.scripting.executeScript({
              target: {
                tabId: tabID
              },
              func: retrieveJsonld
            }, function (injectionResults) {
              try {
                console.log(injectionResults);

                if (injectionResults) {
                  if (injectionResults.length > 0) {
                    if (injectionResults[0].result) {
                      var jsonld = injectionResults[0].result; // Create the viewer with the jsonld content

                      new (json_viewer_js__WEBPACK_IMPORTED_MODULE_0___default())({
                        container: viewerDiv,
                        data: jsonld,
                        theme: theme,
                        expand: true
                      }); // Open the JSON-LD content in a new page if it's available, otherwise hide the button

                      var openButton = document.getElementById("openInNewTab");
                      openButton === null || openButton === void 0 ? void 0 : openButton.addEventListener('click', function () {
                        var newTab = window.open("data:text/json," + encodeURIComponent(jsonld), "_blank");
                        newTab === null || newTab === void 0 ? void 0 : newTab.focus();
                      });
                    } else {
                      throw 'JSON-LD not available';
                    }
                  } else {
                    throw 'JSON-LD not available';
                  }
                } else {
                  throw 'JSON-LD not available';
                }
              } catch (error) {
                console.log(error);

                if (viewerDiv) {
                  viewerDiv.innerHTML = '<p class="is-centered">No JSON-LD available on this page.</p>';
                }

                var _openButton = document.getElementById("openInNewTab");

                if (_openButton) {
                  _openButton.style.display = "none";
                }
              }
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadJsonld.apply(this, arguments);
}

function getCurrentTab() {
  return _getCurrentTab.apply(this, arguments);
}

function _getCurrentTab() {
  _getCurrentTab = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var queryOptions, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            queryOptions = {
              active: true,
              lastFocusedWindow: true
            };
            _context2.next = 3;
            return chrome.tabs.query(queryOptions);

          case 3:
            _yield$chrome$tabs$qu = _context2.sent;
            _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
            tab = _yield$chrome$tabs$qu2[0];
            return _context2.abrupt("return", tab);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCurrentTab.apply(this, arguments);
}

function run() {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var darkMode, currentTab;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Determine which viewer theme to use
            darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; // Load the JSON-LD of the active page

            _context3.next = 3;
            return getCurrentTab();

          case 3:
            currentTab = _context3.sent;
            _context3.next = 6;
            return loadJsonld(currentTab.id, darkMode ? 'dark' : 'light');

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _run.apply(this, arguments);
}

run();
})();

/******/ })()
;