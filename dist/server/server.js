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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nexports.indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>GradProject</title>\\n  <script src=\\\" /static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n<body>\\n  <div id=\\\"root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ \"node-fetch\"));\nglobal.fetch = node_fetch_1.default;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.jsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar unsplash_js_1 = __importStar(__webpack_require__(/*! unsplash-js */ \"unsplash-js\"));\nvar unsplash = new unsplash_js_1.default({\n    accessKey: 'HmESHW-LSmwiDl4Gs3MOm-Qlksijb1XVrTIN4W7nJCc',\n    secret: 'wMv3YV1LWZtyzVo46q63L_yBS2GN-Ceqa7OP6WZYgOs',\n    callbackUrl: 'http://localhost:3000'\n});\nvar app = express_1.default();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/', function (req, res) {\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\n});\napp.get('/api/photos', function (req, res) {\n    unsplash.photos.listPhotos(req.query.start, req.query.count)\n        .then(unsplash_js_1.toJson)\n        .then(function (json) { return res.json(json); })\n        .catch(function (err) { return console.log('err{6}', err); });\n});\napp.listen(3000, function () {\n    console.log('server started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.css":
/*!****************************!*\
  !*** ./src/shared/App.css ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"body\": \"App__body--Yvj2a\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/App.css?");

/***/ }),

/***/ "./src/shared/App.jsx":
/*!****************************!*\
  !*** ./src/shared/App.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar Header_1 = __webpack_require__(/*! ./components/Header */ \"./src/shared/components/Header.jsx\");\nvar UnsplashImage_1 = __webpack_require__(/*! ./components/UnsplashImage */ \"./src/shared/components/UnsplashImage.jsx\");\nvar App_css_1 = __importDefault(__webpack_require__(/*! ./App.css */ \"./src/shared/App.css\"));\nfunction AppContainer() {\n    return (React.createElement(\"div\", { className: App_css_1.default.body },\n        React.createElement(Header_1.Heading, null),\n        React.createElement(UnsplashImage_1.UnsplashImage, null)));\n}\nexports.App = root_1.hot(AppContainer);\n\n\n//# sourceURL=webpack:///./src/shared/App.jsx?");

/***/ }),

/***/ "./src/shared/components/Header.css":
/*!******************************************!*\
  !*** ./src/shared/components/Header.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"header\": \"Header__header--qDwKZ\",\n\t\"hOne\": \"Header__hOne--wWUCJ\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/Header.css?");

/***/ }),

/***/ "./src/shared/components/Header.jsx":
/*!******************************************!*\
  !*** ./src/shared/components/Header.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Heading = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Header_css_1 = __importDefault(__webpack_require__(/*! ./Header.css */ \"./src/shared/components/Header.css\"));\nexports.Heading = function () {\n    return (react_1.default.createElement(\"header\", { className: Header_css_1.default.header },\n        react_1.default.createElement(\"h1\", { className: Header_css_1.default.header }, \"Unsplash\"),\n        react_1.default.createElement(\"p\", null, \"The internet\\u2019s source of freely usable images.\"),\n        react_1.default.createElement(\"p\", null, \"Powered by creators everywhere.\")));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header.jsx?");

/***/ }),

/***/ "./src/shared/components/Image.css":
/*!*****************************************!*\
  !*** ./src/shared/components/Image.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"image\": \"Image__image--1vlqb\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/Image.css?");

/***/ }),

/***/ "./src/shared/components/Image.jsx":
/*!*****************************************!*\
  !*** ./src/shared/components/Image.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Image = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Image_css_1 = __importDefault(__webpack_require__(/*! ./Image.css */ \"./src/shared/components/Image.css\"));\nexports.Image = function (_a) {\n    var url = _a.url, key = _a.key;\n    return (react_1.default.createElement(\"img\", { className: Image_css_1.default.image, src: url, key: key, id: key, alt: \"\" }));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Image.jsx?");

/***/ }),

/***/ "./src/shared/components/Loader.css":
/*!******************************************!*\
  !*** ./src/shared/components/Loader.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"wrapper\": \"Loader__wrapper--2YFXh\",\n\t\"ldsFacebook\": \"Loader__ldsFacebook--1sHOG\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/Loader.css?");

/***/ }),

/***/ "./src/shared/components/Loader.jsx":
/*!******************************************!*\
  !*** ./src/shared/components/Loader.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Loader = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Loader_css_1 = __importDefault(__webpack_require__(/*! ./Loader.css */ \"./src/shared/components/Loader.css\"));\nexports.Loader = function () {\n    return (react_1.default.createElement(\"div\", { className: Loader_css_1.default.wrapper },\n        react_1.default.createElement(\"div\", { className: Loader_css_1.default.ldsFacebook },\n            react_1.default.createElement(\"div\", null),\n            react_1.default.createElement(\"div\", null),\n            react_1.default.createElement(\"div\", null))));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Loader.jsx?");

/***/ }),

/***/ "./src/shared/components/UnsplashImage.css":
/*!*************************************************!*\
  !*** ./src/shared/components/UnsplashImage.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"images\": \"UnsplashImage__images--317yN\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/UnsplashImage.css?");

/***/ }),

/***/ "./src/shared/components/UnsplashImage.jsx":
/*!*************************************************!*\
  !*** ./src/shared/components/UnsplashImage.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UnsplashImage = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_infinite_scroll_component_1 = __importDefault(__webpack_require__(/*! react-infinite-scroll-component */ \"react-infinite-scroll-component\"));\nvar Loader_1 = __webpack_require__(/*! ./Loader */ \"./src/shared/components/Loader.jsx\");\nvar UnsplashImage_css_1 = __importDefault(__webpack_require__(/*! ./UnsplashImage.css */ \"./src/shared/components/UnsplashImage.css\"));\nvar Image_1 = __webpack_require__(/*! ./Image */ \"./src/shared/components/Image.jsx\");\nvar UnsplashImage = /** @class */ (function (_super) {\n    __extends(UnsplashImage, _super);\n    function UnsplashImage() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = {\n            images: [],\n            count: 30,\n            start: 1\n        };\n        _this.fetchImages = function () {\n            var _a = _this.state, count = _a.count, start = _a.start;\n            _this.setState({ start: _this.state.start + count });\n            axios_1.default\n                .get(\"/api/photos?count=\" + count + \"&start=\" + start)\n                .then(function (res) {\n                return _this.setState({ images: _this.state.images.concat(res.data) });\n            });\n        };\n        return _this;\n    }\n    UnsplashImage.prototype.componentDidMount = function () {\n        var _this = this;\n        var _a = this.state, count = _a.count, start = _a.start;\n        axios_1.default\n            .get(\"/api/photos?count=\" + count + \"&start=\" + start)\n            .then(function (res) { return _this.setState({ images: res.data }); });\n    };\n    UnsplashImage.prototype.render = function () {\n        return (react_1.default.createElement(react_infinite_scroll_component_1.default, { dataLength: this.state.images.length, next: this.fetchImages, hasMore: true, loader: react_1.default.createElement(Loader_1.Loader, null) },\n            react_1.default.createElement(\"div\", { className: UnsplashImage_css_1.default.images }, this.state.images.map(function (image, item) { return (react_1.default.createElement(Image_1.Image, { url: image.urls.small, key: item })\n            // {console.log(image.urls.thumb, image.id)}\n            ); }))));\n    };\n    return UnsplashImage;\n}(react_1.Component));\nexports.UnsplashImage = UnsplashImage;\nexports.default = UnsplashImage;\n\n\n//# sourceURL=webpack:///./src/shared/components/UnsplashImage.jsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-infinite-scroll-component\");\n\n//# sourceURL=webpack:///external_%22react-infinite-scroll-component%22?");

/***/ }),

/***/ "unsplash-js":
/*!******************************!*\
  !*** external "unsplash-js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"unsplash-js\");\n\n//# sourceURL=webpack:///external_%22unsplash-js%22?");

/***/ })

/******/ });