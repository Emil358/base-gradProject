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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nexports.indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>GradProject</title>\\n  <script src=\\\" /static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__= '\" + token + \"'\\n  </script>\\n</head>\\n<body>\\n  <div id=\\\"root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ \"node-fetch\"));\nglobal.fetch = node_fetch_1.default;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.jsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar unsplash_js_1 = __importStar(__webpack_require__(/*! unsplash-js */ \"unsplash-js\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar unsplash = new unsplash_js_1.default({\n    accessKey: 'HmESHW-LSmwiDl4Gs3MOm-Qlksijb1XVrTIN4W7nJCc',\n    secret: 'wMv3YV1LWZtyzVo46q63L_yBS2GN-Ceqa7OP6WZYgOs',\n    callbackUrl: 'http://localhost:3000/auth'\n});\nvar app = express_1.default();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/api/likePhoto', function (req, res) {\n    unsplash.auth.setBearerToken(req.query.token);\n    unsplash.photos.likePhoto(req.query.id)\n        .then(unsplash_js_1.toJson)\n        .then(function (json) { return res.json(json); })\n        .catch(function (err) { return console.log('{13}', err); });\n});\napp.get('/api/unlikePhoto', function (req, res) {\n    unsplash.auth.setBearerToken(req.query.token);\n    unsplash.photos.unlikePhoto(req.query.id)\n        .then(unsplash_js_1.toJson)\n        .then(function (json) { return res.json(json); })\n        .catch(function (err) { return console.log('{13}', err); });\n});\napp.get('/api/userMe', function (req, res) {\n    unsplash.auth.setBearerToken(req.query.token);\n    unsplash.currentUser.profile()\n        .then(unsplash_js_1.toJson)\n        .then(function (json) { return res.json(json); })\n        .catch(function (err) { return console.log('{10}', err); });\n});\napp.get('/api/photos', function (req, res) {\n    unsplash.photos.listPhotos(req.query.start, req.query.count)\n        .then(unsplash_js_1.toJson)\n        .then(function (json) { return res.json(json); })\n        .catch(function (err) { return console.log('err{6}', err); });\n});\napp.get('/auth', function (req, res) {\n    var context = {};\n    if (req.query.token) {\n        unsplash.auth.setBearerToken(req.query.token);\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },\n            react_1.default.createElement(App_1.App, null))), req.query.token));\n    }\n    else if (req.query.code) {\n        console.log('{9}', req.query.code);\n        unsplash.auth.userAuthentication(req.query.code)\n            .then(unsplash_js_1.toJson)\n            .then(function (json) {\n            unsplash.auth.setBearerToken(json.access_token);\n            res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },\n                react_1.default.createElement(App_1.App, null))), json.access_token));\n            console.log('{8}', json.access_token);\n        })\n            .catch(function (err) { return console.log('err{7}', err); });\n    }\n});\napp.get('/', function (req, res) {\n    var context = {};\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },\n        react_1.default.createElement(App_1.App, null)))));\n});\napp.listen(3000, function () {\n    console.log('server started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.jsx":
/*!****************************!*\
  !*** ./src/shared/App.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = exports.Application = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar AppContainer_1 = __webpack_require__(/*! ./containers/AppContainer */ \"./src/shared/containers/AppContainer.jsx\");\nfunction Application() {\n    return (react_1.default.createElement(AppContainer_1.AppContainer, null));\n}\nexports.Application = Application;\nexports.App = root_1.hot(Application);\n\n\n//# sourceURL=webpack:///./src/shared/App.jsx?");

/***/ }),

/***/ "./src/shared/actions/actions.js":
/*!***************************************!*\
  !*** ./src/shared/actions/actions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.likeImage = exports.addImages = void 0;\nexports.addImages = function (images) {\n    return {\n        type: 'ADD_IMAGES',\n        payload: images\n    };\n};\nexports.likeImage = function (id) {\n    return {\n        type: 'LIKE_IMAGE',\n        id: id\n    };\n};\n\n\n//# sourceURL=webpack:///./src/shared/actions/actions.js?");

/***/ }),

/***/ "./src/shared/components/Image.css":
/*!*****************************************!*\
  !*** ./src/shared/components/Image.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"imageItem\": \"Image__imageItem--29Fk7\",\n\t\"header\": \"Image__header--1uzmN\",\n\t\"likes\": \"Image__likes--1kyay\",\n\t\"image\": \"Image__image--1vlqb\",\n\t\"avatarBox\": \"Image__avatarBox--k_WAi\",\n\t\"avatarImage\": \"Image__avatarImage--2K7tx\",\n\t\"headerUser\": \"Image__headerUser--27Xtd\",\n\t\"headerUsername\": \"Image__headerUsername--2ny6Y\",\n\t\"headerCreatedAt\": \"Image__headerCreatedAt--yxW6Y\",\n\t\"countLikes\": \"Image__countLikes--3WlLz\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/Image.css?");

/***/ }),

/***/ "./src/shared/components/Image.jsx":
/*!*****************************************!*\
  !*** ./src/shared/components/Image.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Image = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar getDate_1 = __webpack_require__(/*! ../gets/getDate */ \"./src/shared/gets/getDate.js\");\nvar Image_css_1 = __importDefault(__webpack_require__(/*! ./Image.css */ \"./src/shared/components/Image.css\"));\nvar IconHeart_1 = __webpack_require__(/*! ../icons/IconHeart */ \"./src/shared/icons/IconHeart.jsx\");\nexports.Image = function (_a) {\n    var image = _a.image, isAuth = _a.isAuth;\n    var location = react_router_dom_1.useLocation();\n    var date = getDate_1.getDate(image.created_at);\n    if (isAuth) {\n        return (react_1.default.createElement(react_router_dom_1.Link, { to: {\n                pathname: \"/auth/img/\" + image.id,\n                state: { background: location }\n            } },\n            react_1.default.createElement(\"div\", { className: Image_css_1.default.imageItem },\n                react_1.default.createElement(\"img\", { className: Image_css_1.default.image, src: image.urls.small, alt: \"\" }),\n                react_1.default.createElement(\"div\", { className: Image_css_1.default.header },\n                    react_1.default.createElement(\"span\", { className: Image_css_1.default.avatarBox, target: \"_blank\" },\n                        react_1.default.createElement(\"img\", { src: image.user.profile_image.medium, className: Image_css_1.default.avatarImage, alt: image.alt_description })),\n                    react_1.default.createElement(\"div\", { className: Image_css_1.default.headerUser },\n                        react_1.default.createElement(\"span\", { className: Image_css_1.default.headerUsername, target: \"_blank\" }, image.user.username),\n                        react_1.default.createElement(\"span\", { className: Image_css_1.default.headerCreatedAt }, date))),\n                react_1.default.createElement(\"div\", { className: Image_css_1.default.likes },\n                    react_1.default.createElement(IconHeart_1.IconHeart, { like: image.liked_by_user }),\n                    react_1.default.createElement(\"span\", { className: Image_css_1.default.countLikes }, image.likes)))));\n    }\n    return (react_1.default.createElement(\"div\", { className: Image_css_1.default.imageItem },\n        react_1.default.createElement(\"img\", { className: Image_css_1.default.image, src: image.urls.small, alt: \"\" }),\n        react_1.default.createElement(\"div\", { className: Image_css_1.default.header },\n            react_1.default.createElement(\"a\", { href: image.user.links.html, className: Image_css_1.default.avatarBox, target: \"_blank\" },\n                react_1.default.createElement(\"img\", { src: image.user.profile_image.medium, className: Image_css_1.default.avatarImage, alt: image.alt_description })),\n            react_1.default.createElement(\"div\", { className: Image_css_1.default.headerUser },\n                react_1.default.createElement(\"a\", { href: image.user.links.html, className: Image_css_1.default.headerUsername, target: \"_blank\" }, image.user.username),\n                react_1.default.createElement(\"span\", { className: Image_css_1.default.headerCreatedAt }, date))),\n        react_1.default.createElement(\"div\", { className: Image_css_1.default.likes },\n            react_1.default.createElement(IconHeart_1.IconHeart, null),\n            react_1.default.createElement(\"span\", { className: Image_css_1.default.countLikes }, image.likes))));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Image.jsx?");

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

/***/ "./src/shared/components/Logo.css":
/*!****************************************!*\
  !*** ./src/shared/components/Logo.css ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"logo\": \"Logo__logo--1A6dq\",\n\t\"fill\": \"Logo__fill--3ycr5\",\n\t\"line-anim\": \"Logo__line-anim--2M_4X\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/Logo.css?");

/***/ }),

/***/ "./src/shared/components/Logo.jsx":
/*!****************************************!*\
  !*** ./src/shared/components/Logo.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Logo = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Logo_css_1 = __importDefault(__webpack_require__(/*! ./Logo.css */ \"./src/shared/components/Logo.css\"));\nexports.Logo = function () {\n    return (react_1.default.createElement(\"svg\", { className: Logo_css_1.default.logo, width: \"838\", height: \"157\", viewBox: \"0 0 838 157\", fill: \"none\" },\n        react_1.default.createElement(\"path\", { d: \"M41.632 33.792C48.448 33.792 54.4 35.28 59.488 38.256C64.672 41.232 68.512 44.976 71.008 49.488V35.088H84.256V115.728C84.256 122.928 82.72 129.312 79.648 134.88C76.576 140.544 72.16 144.96 66.4 148.128C60.736 151.296 54.112 152.88 46.528 152.88C36.16 152.88 27.52 150.432 20.608 145.536C13.696 140.64 9.61599 133.968 8.36799 125.52H21.328C22.768 130.32 25.744 134.16 30.256 137.04C34.768 140.016 40.192 141.504 46.528 141.504C53.728 141.504 59.584 139.248 64.096 134.736C68.704 130.224 71.008 123.888 71.008 115.728V99.168C68.416 103.776 64.576 107.616 59.488 110.688C54.4 113.76 48.448 115.296 41.632 115.296C34.624 115.296 28.24 113.568 22.48 110.112C16.816 106.656 12.352 101.808 9.08799 95.568C5.82399 89.328 4.19199 82.224 4.19199 74.256C4.19199 66.192 5.82399 59.136 9.08799 53.088C12.352 46.944 16.816 42.192 22.48 38.832C28.24 35.472 34.624 33.792 41.632 33.792ZM71.008 74.4C71.008 68.448 69.808 63.264 67.408 58.848C65.008 54.432 61.744 51.072 57.616 48.768C53.584 46.368 49.12 45.168 44.224 45.168C39.328 45.168 34.864 46.32 30.832 48.624C26.8 50.928 23.584 54.288 21.184 58.704C18.784 63.12 17.584 68.304 17.584 74.256C17.584 80.304 18.784 85.584 21.184 90.096C23.584 94.512 26.8 97.92 30.832 100.32C34.864 102.624 39.328 103.776 44.224 103.776C49.12 103.776 53.584 102.624 57.616 100.32C61.744 97.92 65.008 94.512 67.408 90.096C69.808 85.584 71.008 80.352 71.008 74.4Z\", stroke: \"black\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M119.504 47.904C121.808 43.392 125.072 39.888 129.296 37.392C133.616 34.896 138.848 33.648 144.992 33.648V47.184H141.536C126.848 47.184 119.504 55.152 119.504 71.088V114H106.4V35.088H119.504V47.904Z\", stroke: \"black\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M155.223 74.256C155.223 66.192 156.855 59.136 160.119 53.088C163.383 46.944 167.847 42.192 173.511 38.832C179.271 35.472 185.655 33.792 192.663 33.792C199.575 33.792 205.575 35.28 210.663 38.256C215.751 41.232 219.543 44.976 222.039 49.488V35.088H235.287V114H222.039V99.312C219.447 103.92 215.559 107.76 210.375 110.832C205.287 113.808 199.335 115.296 192.519 115.296C185.511 115.296 179.175 113.568 173.511 110.112C167.847 106.656 163.383 101.808 160.119 95.568C156.855 89.328 155.223 82.224 155.223 74.256ZM222.039 74.4C222.039 68.448 220.839 63.264 218.439 58.848C216.039 54.432 212.775 51.072 208.647 48.768C204.615 46.368 200.151 45.168 195.255 45.168C190.359 45.168 185.895 46.32 181.863 48.624C177.831 50.928 174.615 54.288 172.215 58.704C169.815 63.12 168.615 68.304 168.615 74.256C168.615 80.304 169.815 85.584 172.215 90.096C174.615 94.512 177.831 97.92 181.863 100.32C185.895 102.624 190.359 103.776 195.255 103.776C200.151 103.776 204.615 102.624 208.647 100.32C212.775 97.92 216.039 94.512 218.439 90.096C220.839 85.584 222.039 80.352 222.039 74.4Z\", stroke: \"black\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M252.536 74.256C252.536 66.192 254.168 59.136 257.432 53.088C260.696 46.944 265.16 42.192 270.824 38.832C276.584 35.472 283.016 33.792 290.12 33.792C296.264 33.792 301.976 35.232 307.256 38.112C312.536 40.896 316.568 44.592 319.352 49.2V7.43999H332.6V114H319.352V99.168C316.76 103.872 312.92 107.76 307.832 110.832C302.744 113.808 296.792 115.296 289.976 115.296C282.968 115.296 276.584 113.568 270.824 110.112C265.16 106.656 260.696 101.808 257.432 95.568C254.168 89.328 252.536 82.224 252.536 74.256ZM319.352 74.4C319.352 68.448 318.152 63.264 315.752 58.848C313.352 54.432 310.088 51.072 305.96 48.768C301.928 46.368 297.464 45.168 292.568 45.168C287.672 45.168 283.208 46.32 279.176 48.624C275.144 50.928 271.928 54.288 269.528 58.704C267.128 63.12 265.928 68.304 265.928 74.256C265.928 80.304 267.128 85.584 269.528 90.096C271.928 94.512 275.144 97.92 279.176 100.32C283.208 102.624 287.672 103.776 292.568 103.776C297.464 103.776 301.928 102.624 305.96 100.32C310.088 97.92 313.352 94.512 315.752 90.096C318.152 85.584 319.352 80.352 319.352 74.4Z\", stroke: \"black\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M421.848 43.008C421.848 51.36 418.968 58.32 413.208 63.888C407.544 69.36 398.856 72.096 387.144 72.096H367.848V114H354.744V13.632H387.144C398.472 13.632 407.064 16.368 412.92 21.84C418.872 27.312 421.848 34.368 421.848 43.008ZM387.144 61.296C394.44 61.296 399.816 59.712 403.272 56.544C406.728 53.376 408.456 48.864 408.456 43.008C408.456 30.624 401.352 24.432 387.144 24.432H367.848V61.296H387.144Z\", stroke: \"black\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M451.239 47.904C453.543 43.392 456.807 39.888 461.031 37.392C465.351 34.896 470.583 33.648 476.727 33.648V47.184H473.271C458.583 47.184 451.239 55.152 451.239 71.088V114H438.135V35.088H451.239V47.904Z\", stroke: \"black\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M526.27 115.296C518.878 115.296 512.158 113.616 506.11 110.256C500.158 106.896 495.454 102.144 491.998 96C488.638 89.76 486.958 82.56 486.958 74.4C486.958 66.336 488.686 59.232 492.142 53.088C495.694 46.848 500.494 42.096 506.542 38.832C512.59 35.472 519.358 33.792 526.846 33.792C534.334 33.792 541.102 35.472 547.15 38.832C553.198 42.096 557.95 46.8 561.406 52.944C564.958 59.088 566.734 66.24 566.734 74.4C566.734 82.56 564.91 89.76 561.262 96C557.71 102.144 552.862 106.896 546.718 110.256C540.574 113.616 533.758 115.296 526.27 115.296ZM526.27 103.776C530.974 103.776 535.39 102.672 539.518 100.464C543.646 98.256 546.958 94.944 549.454 90.528C552.046 86.112 553.342 80.736 553.342 74.4C553.342 68.064 552.094 62.688 549.598 58.272C547.102 53.856 543.838 50.592 539.806 48.48C535.774 46.272 531.406 45.168 526.702 45.168C521.902 45.168 517.486 46.272 513.454 48.48C509.518 50.592 506.35 53.856 503.95 58.272C501.55 62.688 500.35 68.064 500.35 74.4C500.35 80.832 501.502 86.256 503.806 90.672C506.206 95.088 509.374 98.4 513.31 100.608C517.246 102.72 521.566 103.776 526.27 103.776Z\", stroke: \"black\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M591.019 22.272C588.523 22.272 586.411 21.408 584.683 19.68C583.051 17.952 582.235 15.84 582.235 13.344C582.235 10.848 583.051 8.73599 584.683 7.00799C586.411 5.27999 588.523 4.41599 591.019 4.41599C593.515 4.41599 595.579 5.27999 597.211 7.00799C598.939 8.73599 599.803 10.848 599.803 13.344C599.803 15.84 598.939 17.952 597.211 19.68C595.579 21.408 593.515 22.272 591.019 22.272ZM597.499 131.136C597.499 138.144 595.723 143.28 592.171 146.544C588.619 149.808 583.435 151.44 576.619 151.44H568.987V140.352H574.459C578.107 140.352 580.651 139.632 582.091 138.192C583.627 136.752 584.395 134.304 584.395 130.848V35.088H597.499V131.136Z\", stroke: \"black\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M691.682 71.52C691.682 74.016 691.538 76.656 691.25 79.44H628.178C628.658 87.216 631.298 93.312 636.098 97.728C640.994 102.048 646.898 104.208 653.81 104.208C659.474 104.208 664.178 102.912 667.922 100.32C671.762 97.632 674.45 94.08 675.986 89.664H690.098C687.986 97.248 683.762 103.44 677.426 108.24C671.09 112.944 663.218 115.296 653.81 115.296C646.322 115.296 639.602 113.616 633.65 110.256C627.794 106.896 623.186 102.144 619.826 96C616.466 89.76 614.786 82.56 614.786 74.4C614.786 66.24 616.418 59.088 619.682 52.944C622.946 46.8 627.506 42.096 633.362 38.832C639.314 35.472 646.13 33.792 653.81 33.792C661.298 33.792 667.922 35.424 673.682 38.688C679.442 41.952 683.858 46.464 686.93 52.224C690.098 57.888 691.682 64.32 691.682 71.52ZM678.146 68.784C678.146 63.792 677.042 59.52 674.834 55.968C672.626 52.32 669.602 49.584 665.762 47.76C662.018 45.84 657.842 44.88 653.234 44.88C646.61 44.88 640.946 46.992 636.242 51.216C631.634 55.44 628.994 61.296 628.322 68.784H678.146Z\", stroke: \"black\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M704.083 74.4C704.083 66.24 705.715 59.136 708.979 53.088C712.243 46.944 716.755 42.192 722.515 38.832C728.371 35.472 735.043 33.792 742.531 33.792C752.227 33.792 760.195 36.144 766.435 40.848C772.771 45.552 776.947 52.08 778.963 60.432H764.851C763.507 55.632 760.867 51.84 756.931 49.056C753.091 46.272 748.291 44.88 742.531 44.88C735.043 44.88 728.995 47.472 724.387 52.656C719.779 57.744 717.475 64.992 717.475 74.4C717.475 83.904 719.779 91.248 724.387 96.432C728.995 101.616 735.043 104.208 742.531 104.208C748.291 104.208 753.091 102.864 756.931 100.176C760.771 97.488 763.411 93.648 764.851 88.656H778.963C776.851 96.72 772.627 103.2 766.291 108.096C759.955 112.896 752.035 115.296 742.531 115.296C735.043 115.296 728.371 113.616 722.515 110.256C716.755 106.896 712.243 102.144 708.979 96C705.715 89.856 704.083 82.656 704.083 74.4Z\", stroke: \"black\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M812.431 45.888V92.4C812.431 96.24 813.247 98.976 814.879 100.608C816.511 102.144 819.343 102.912 823.375 102.912H833.023V114H821.215C813.919 114 808.447 112.32 804.799 108.96C801.151 105.6 799.327 100.08 799.327 92.4V45.888H789.103V35.088H799.327V15.216H812.431V35.088H833.023V45.888H812.431Z\", stroke: \"black\", strokeWidth: \"4\" })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Logo.jsx?");

/***/ }),

/***/ "./src/shared/components/Modal.css":
/*!*****************************************!*\
  !*** ./src/shared/components/Modal.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"modal\": \"Modal__modal--1KuTC\",\n\t\"modalContent\": \"Modal__modalContent--1UZQe\",\n\t\"modalHeader\": \"Modal__modalHeader--2vT9t\",\n\t\"header\": \"Modal__header--25UzF\",\n\t\"avatarBox\": \"Modal__avatarBox--3L55r\",\n\t\"avatarImage\": \"Modal__avatarImage--3b0Q_\",\n\t\"headerUser\": \"Modal__headerUser--3US-3\",\n\t\"headerUsername\": \"Modal__headerUsername--3P0ei\",\n\t\"headerCreatedAt\": \"Modal__headerCreatedAt--15APE\",\n\t\"close\": \"Modal__close--31FXj\",\n\t\"boxImage\": \"Modal__boxImage--3Uvsz\",\n\t\"image\": \"Modal__image--3kzgd\",\n\t\"footer\": \"Modal__footer--3wAEY\",\n\t\"like\": \"Modal__like--1ch79\",\n\t\"countLikes\": \"Modal__countLikes--3pCUy\",\n\t\"footerText\": \"Modal__footerText--18OIB\",\n\t\"unsplash\": \"Modal__unsplash--33Bx2\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/Modal.css?");

/***/ }),

/***/ "./src/shared/components/Modal.jsx":
/*!*****************************************!*\
  !*** ./src/shared/components/Modal.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Modal = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar IconClose_1 = __webpack_require__(/*! ../icons/IconClose */ \"./src/shared/icons/IconClose.jsx\");\nvar IconHeartForModal_1 = __webpack_require__(/*! ../icons/IconHeartForModal */ \"./src/shared/icons/IconHeartForModal.jsx\");\nvar Modal_css_1 = __importDefault(__webpack_require__(/*! ./Modal.css */ \"./src/shared/components/Modal.css\"));\nexports.Modal = function (props) {\n    var image = props.image, date = props.date, back = props.back, likePost = props.likePost;\n    return (react_1.default.createElement(\"div\", { className: Modal_css_1.default.modal, onClick: back },\n        react_1.default.createElement(\"div\", { className: Modal_css_1.default.modalContent, onClick: function (e) { return e.stopPropagation(); } },\n            react_1.default.createElement(\"div\", { className: Modal_css_1.default.modalHeader },\n                react_1.default.createElement(\"div\", { className: Modal_css_1.default.header },\n                    react_1.default.createElement(\"a\", { href: image.user.links.html, className: Modal_css_1.default.avatarBox, target: \"_blank\" },\n                        react_1.default.createElement(\"img\", { src: image.user.profile_image.large, className: Modal_css_1.default.avatarImage, alt: image.alt_description })),\n                    react_1.default.createElement(\"div\", { className: Modal_css_1.default.headerUser },\n                        react_1.default.createElement(\"a\", { href: image.user.links.html, className: Modal_css_1.default.headerUsername, target: \"_blank\" }, image.user.username),\n                        react_1.default.createElement(\"span\", { className: Modal_css_1.default.headerCreatedAt }, date))),\n                react_1.default.createElement(\"button\", { className: Modal_css_1.default.close, type: \"button\", onClick: back },\n                    react_1.default.createElement(IconClose_1.IconClose, null))),\n            react_1.default.createElement(\"div\", { className: Modal_css_1.default.boxImage },\n                react_1.default.createElement(\"img\", { className: Modal_css_1.default.image, src: image.urls.regular, alt: image.alt_description })),\n            react_1.default.createElement(\"div\", { className: Modal_css_1.default.footer },\n                react_1.default.createElement(\"button\", { className: Modal_css_1.default.like, onClick: function () { return likePost(image.id); } },\n                    react_1.default.createElement(IconHeartForModal_1.IconHeart, { like: image.liked_by_user }),\n                    react_1.default.createElement(\"span\", { className: Modal_css_1.default.countLikes }, image.likes)),\n                react_1.default.createElement(\"p\", { className: Modal_css_1.default.footerText },\n                    \"Photo by \",\n                    image.user.name,\n                    \" on \",\n                    react_1.default.createElement(\"a\", { href: \"https://unsplash.com/\", className: Modal_css_1.default.unsplash }, \"Unsplash\"))))));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Modal.jsx?");

/***/ }),

/***/ "./src/shared/components/UserBlock.css":
/*!*********************************************!*\
  !*** ./src/shared/components/UserBlock.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"userBox\": \"UserBlock__userBox--2EkPc\",\n\t\"userBoxIsAuth\": \"UserBlock__userBoxIsAuth--27ChF\",\n\t\"avatarBox\": \"UserBlock__avatarBox--2cosE\",\n\t\"avatarImage\": \"UserBlock__avatarImage--2VI0n\",\n\t\"username\": \"UserBlock__username--1AUCc\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/UserBlock.css?");

/***/ }),

/***/ "./src/shared/components/UserBlock.jsx":
/*!*********************************************!*\
  !*** ./src/shared/components/UserBlock.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar UserBlock_css_1 = __importDefault(__webpack_require__(/*! ./UserBlock.css */ \"./src/shared/components/UserBlock.css\"));\nvar IconAnon_1 = __webpack_require__(/*! ../icons/IconAnon */ \"./src/shared/icons/IconAnon.jsx\");\nvar getAuthenticationUrl_1 = __webpack_require__(/*! ../gets/getAuthenticationUrl */ \"./src/shared/gets/getAuthenticationUrl.js\");\nexports.UserBlock = function (_a) {\n    var avatarSrc = _a.avatarSrc, username = _a.username, isAuth = _a.isAuth, logOut = _a.logOut;\n    var authenticationUrl = getAuthenticationUrl_1.getAuthUrl();\n    if (isAuth) {\n        return (react_1.default.createElement(\"button\", { onClick: logOut, className: UserBlock_css_1.default.userBoxIsAuth },\n            react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.avatarBox }, avatarSrc\n                ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: 'user avatar', className: UserBlock_css_1.default.avatarImage })\n                : react_1.default.createElement(IconAnon_1.IconAnon, null)),\n            react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.username },\n                react_1.default.createElement(\"span\", null, username || 'Аноним'))));\n    }\n    return (react_1.default.createElement(\"a\", { href: authenticationUrl, className: UserBlock_css_1.default.userBox },\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.avatarBox },\n            react_1.default.createElement(IconAnon_1.IconAnon, null)),\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.username },\n            react_1.default.createElement(\"span\", null, 'Аноним'))));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/UserBlock.jsx?");

/***/ }),

/***/ "./src/shared/containers/AppContainer.css":
/*!************************************************!*\
  !*** ./src/shared/containers/AppContainer.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"body\": \"AppContainer__body--1FpKG\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/containers/AppContainer.css?");

/***/ }),

/***/ "./src/shared/containers/AppContainer.jsx":
/*!************************************************!*\
  !*** ./src/shared/containers/AppContainer.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/containers/Header.jsx\");\nvar UnsplashImage_1 = __webpack_require__(/*! ./UnsplashImage */ \"./src/shared/containers/UnsplashImage.jsx\");\nvar ModalContainer_1 = __webpack_require__(/*! ./ModalContainer */ \"./src/shared/containers/ModalContainer.jsx\");\nvar tokenContext_1 = __webpack_require__(/*! ../context/tokenContext */ \"./src/shared/context/tokenContext.jsx\");\nvar isAuthContext_1 = __webpack_require__(/*! ../context/isAuthContext */ \"./src/shared/context/isAuthContext.jsx\");\nvar useToken_1 = __webpack_require__(/*! ../hooks/useToken */ \"./src/shared/hooks/useToken.jsx\");\nvar redusers_1 = __importDefault(__webpack_require__(/*! ../reducers/redusers */ \"./src/shared/reducers/redusers.js\"));\nvar AppContainer_css_1 = __importDefault(__webpack_require__(/*! ./AppContainer.css */ \"./src/shared/containers/AppContainer.css\"));\nvar store = redux_1.createStore(redusers_1.default, redux_devtools_extension_1.composeWithDevTools());\nfunction AppContainer() {\n    var token = useToken_1.useToken()[0];\n    var isAuthenticated = !!token;\n    var location = react_router_dom_1.useLocation();\n    var background = location.state && location.state.background;\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\n        react_1.default.createElement(tokenContext_1.authToken.Provider, { value: token },\n            react_1.default.createElement(isAuthContext_1.isAuthContext.Provider, { value: isAuthenticated },\n                react_1.default.createElement(\"div\", { className: AppContainer_css_1.default.body },\n                    react_1.default.createElement(Header_1.Heading, null),\n                    react_1.default.createElement(UnsplashImage_1.UnsplashImage, null),\n                    isAuthenticated && background && react_1.default.createElement(react_router_dom_1.Route, { path: \"/auth/img/:id\", children: react_1.default.createElement(ModalContainer_1.ModalContainer, null) }))))));\n}\nexports.AppContainer = AppContainer;\n\n\n//# sourceURL=webpack:///./src/shared/containers/AppContainer.jsx?");

/***/ }),

/***/ "./src/shared/containers/Header.css":
/*!******************************************!*\
  !*** ./src/shared/containers/Header.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"header\": \"Header__header--HwjvF\",\n\t\"hOne\": \"Header__hOne--368bH\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/containers/Header.css?");

/***/ }),

/***/ "./src/shared/containers/Header.jsx":
/*!******************************************!*\
  !*** ./src/shared/containers/Header.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Heading = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Header_css_1 = __importDefault(__webpack_require__(/*! ./Header.css */ \"./src/shared/containers/Header.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ../components/UserBlock */ \"./src/shared/components/UserBlock.jsx\");\nvar useData_1 = __webpack_require__(/*! ../hooks/useData */ \"./src/shared/hooks/useData.jsx\");\nvar isAuthContext_1 = __webpack_require__(/*! ../context/isAuthContext */ \"./src/shared/context/isAuthContext.jsx\");\nvar Logo_1 = __webpack_require__(/*! ../components/Logo */ \"./src/shared/components/Logo.jsx\");\nexports.Heading = function () {\n    var data = useData_1.useData()[0];\n    var isAuth = react_1.useContext(isAuthContext_1.isAuthContext);\n    var logOut = function () {\n        localStorage.removeItem('token');\n        location.assign('http://localhost:3000/');\n    };\n    return (react_1.default.createElement(\"header\", { className: Header_css_1.default.header },\n        react_1.default.createElement(Logo_1.Logo, null),\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.username, isAuth: isAuth, logOut: logOut })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/containers/Header.jsx?");

/***/ }),

/***/ "./src/shared/containers/ModalContainer.jsx":
/*!**************************************************!*\
  !*** ./src/shared/containers/ModalContainer.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ModalContainer = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar tokenContext_1 = __webpack_require__(/*! ../context/tokenContext */ \"./src/shared/context/tokenContext.jsx\");\nvar actions_1 = __webpack_require__(/*! ../actions/actions */ \"./src/shared/actions/actions.js\");\nvar getDate_1 = __webpack_require__(/*! ../gets/getDate */ \"./src/shared/gets/getDate.js\");\nvar Modal_1 = __webpack_require__(/*! ../components/Modal */ \"./src/shared/components/Modal.jsx\");\nexports.ModalContainer = function (props) {\n    var history = react_router_dom_1.useHistory();\n    var id = react_router_dom_1.useParams().id;\n    var images = props.images, likeImage = props.likeImage;\n    var token = react_1.useContext(tokenContext_1.authToken);\n    var image;\n    for (var i = 0; i < images.length; i++) {\n        if (id === images[i].id) {\n            image = images[i];\n        }\n    }\n    var date = getDate_1.getDate(image.created_at);\n    var back = function (event) {\n        event.stopPropagation();\n        history.goBack();\n    };\n    var likePost = function (id) {\n        if (!image.liked_by_user) {\n            axios_1.default\n                .get(\"/api/likePhoto?id=\" + id + \"&token=\" + token)\n                .then(function (res) {\n                likeImage(id);\n            })\n                .catch(function (err) { return console.log('{12}', err); });\n        }\n        else {\n            axios_1.default\n                .get(\"/api/unlikePhoto?id=\" + id + \"&token=\" + token)\n                .then(function (res) {\n                likeImage(id);\n            })\n                .catch(function (err) { return console.log('{12}', err); });\n        }\n    };\n    react_1.useEffect(function () { }, [image]);\n    return (react_1.default.createElement(Modal_1.Modal, { image: image, back: back, likePost: likePost, date: date }));\n};\nvar mapStateToProps = function (state) {\n    return {\n        images: state\n    };\n};\nvar mapDispatchToProps = function (dispatch) {\n    return {\n        likeImage: function (images) { return dispatch(actions_1.likeImage(images)); },\n    };\n};\nexports.ModalContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.ModalContainer);\nexports.default = exports.ModalContainer;\n\n\n//# sourceURL=webpack:///./src/shared/containers/ModalContainer.jsx?");

/***/ }),

/***/ "./src/shared/containers/UnsplashImage.css":
/*!*************************************************!*\
  !*** ./src/shared/containers/UnsplashImage.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"images\": \"UnsplashImage__images--1uqUj\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/containers/UnsplashImage.css?");

/***/ }),

/***/ "./src/shared/containers/UnsplashImage.jsx":
/*!*************************************************!*\
  !*** ./src/shared/containers/UnsplashImage.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UnsplashImage = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_infinite_scroll_component_1 = __importDefault(__webpack_require__(/*! react-infinite-scroll-component */ \"react-infinite-scroll-component\"));\nvar Loader_1 = __webpack_require__(/*! ../components/Loader */ \"./src/shared/components/Loader.jsx\");\nvar Image_1 = __webpack_require__(/*! ../components/Image */ \"./src/shared/components/Image.jsx\");\nvar actions_1 = __webpack_require__(/*! ../actions/actions */ \"./src/shared/actions/actions.js\");\nvar isAuthContext_1 = __webpack_require__(/*! ../context/isAuthContext */ \"./src/shared/context/isAuthContext.jsx\");\nvar UnsplashImage_css_1 = __importDefault(__webpack_require__(/*! ./UnsplashImage.css */ \"./src/shared/containers/UnsplashImage.css\"));\nexports.UnsplashImage = function (props) {\n    var _a = react_1.useState(1), start = _a[0], setStart = _a[1];\n    var COUNT = 30;\n    var isAuth = react_1.useContext(isAuthContext_1.isAuthContext);\n    var images = props.images, addImages = props.addImages;\n    react_1.useEffect(function () {\n        fetchImages();\n    }, []);\n    var fetchImages = function () {\n        axios_1.default\n            .get(\"/api/photos?count=\" + COUNT + \"&start=\" + start)\n            .then(function (res) {\n            return addImages(res.data);\n        });\n        setStart(start + COUNT);\n    };\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_infinite_scroll_component_1.default, { dataLength: images.length, next: fetchImages, hasMore: true, loader: react_1.default.createElement(Loader_1.Loader, null) },\n            react_1.default.createElement(\"div\", { className: UnsplashImage_css_1.default.images }, images.map(function (image, item) { return (react_1.default.createElement(Image_1.Image, { image: image, key: item, isAuth: isAuth })\n            // console.log(image)\n            ); })))));\n};\nvar mapStateToProps = function (state) {\n    return {\n        images: state\n    };\n};\nvar mapDispatchToProps = function (dispatch) {\n    return {\n        addImages: function (images) { return dispatch(actions_1.addImages(images)); },\n    };\n};\nexports.UnsplashImage = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.UnsplashImage);\nexports.default = exports.UnsplashImage;\n\n\n//# sourceURL=webpack:///./src/shared/containers/UnsplashImage.jsx?");

/***/ }),

/***/ "./src/shared/context/isAuthContext.jsx":
/*!**********************************************!*\
  !*** ./src/shared/context/isAuthContext.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.isAuthContext = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nexports.isAuthContext = react_1.createContext(false);\n\n\n//# sourceURL=webpack:///./src/shared/context/isAuthContext.jsx?");

/***/ }),

/***/ "./src/shared/context/tokenContext.jsx":
/*!*********************************************!*\
  !*** ./src/shared/context/tokenContext.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.authToken = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nexports.authToken = react_1.createContext('');\n\n\n//# sourceURL=webpack:///./src/shared/context/tokenContext.jsx?");

/***/ }),

/***/ "./src/shared/gets/getAuthenticationUrl.js":
/*!*************************************************!*\
  !*** ./src/shared/gets/getAuthenticationUrl.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getAuthUrl = void 0;\nvar unsplash_js_1 = __importDefault(__webpack_require__(/*! unsplash-js */ \"unsplash-js\"));\nexports.getAuthUrl = function () {\n    var unsplash = new unsplash_js_1.default({\n        accessKey: 'HmESHW-LSmwiDl4Gs3MOm-Qlksijb1XVrTIN4W7nJCc',\n        secret: 'wMv3YV1LWZtyzVo46q63L_yBS2GN-Ceqa7OP6WZYgOs',\n        callbackUrl: 'http://localhost:3000/auth'\n    });\n    var authenticationUrl = unsplash.auth.getAuthenticationUrl([\n        \"public\",\n        \"write_likes\"\n    ]);\n    return authenticationUrl;\n};\n\n\n//# sourceURL=webpack:///./src/shared/gets/getAuthenticationUrl.js?");

/***/ }),

/***/ "./src/shared/gets/getDate.js":
/*!************************************!*\
  !*** ./src/shared/gets/getDate.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getDate = void 0;\nexports.getDate = function (date) {\n    var date = new Date(date);\n    var months = [\"января\", \"февраля\", \"марта\", \"апреля\", \"мая\", \"июня\", \"июля\", \"августа\", \"сентября\", \"октября\", \"ноября\", \"декабря\"];\n    return date.getDate() + \" \" + months[date.getMonth()] + \" \" + date.getFullYear();\n};\n\n\n//# sourceURL=webpack:///./src/shared/gets/getDate.js?");

/***/ }),

/***/ "./src/shared/hooks/useData.jsx":
/*!**************************************!*\
  !*** ./src/shared/hooks/useData.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar tokenContext_1 = __webpack_require__(/*! ../context/tokenContext */ \"./src/shared/context/tokenContext.jsx\");\nfunction useData(token) {\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1];\n    var token = react_1.useContext(tokenContext_1.authToken);\n    react_1.useEffect(function () {\n        if (token && token !== 'undefined') {\n            axios_1.default\n                .get(\"/api/userMe?token=\" + token)\n                .then(function (res) {\n                // console.log(\"{11}\",res);\n                setData({ username: res.data.username, iconImg: res.data.profile_image.large });\n            });\n        }\n    }, [token]);\n    return [data];\n}\nexports.useData = useData;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useData.jsx?");

/***/ }),

/***/ "./src/shared/hooks/useToken.jsx":
/*!***************************************!*\
  !*** ./src/shared/hooks/useToken.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useToken = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nfunction useToken() {\n    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];\n    if (typeof window !== 'undefined') {\n        if (localStorage.length !== 0) {\n            var localStorageToken = localStorage.getItem('token');\n        }\n        else {\n            var localStorageToken = null;\n        }\n    }\n    else {\n        var localStorageToken = null;\n    }\n    var Location = react_router_dom_1.useLocation();\n    react_1.useEffect(function () {\n        if (window.__token__ !== 'undefined') {\n            setToken(window.__token__);\n            localStorage.setItem('token', window.__token__);\n        }\n        if (window.__token__ === 'undefined' && localStorageToken) {\n            if (Location.pathname === '/auth') {\n                setToken(localStorageToken);\n                window.__token__ = localStorageToken;\n            }\n            else if (Location.pathname === '/') {\n                location.assign(\"http://localhost:3000/auth?token=\" + localStorageToken);\n            }\n        }\n    }, []);\n    return [token];\n}\nexports.useToken = useToken;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useToken.jsx?");

/***/ }),

/***/ "./src/shared/icons/IconAnon.jsx":
/*!***************************************!*\
  !*** ./src/shared/icons/IconAnon.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconAnon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.IconAnon = function () {\n    return (react_1.default.createElement(\"svg\", { viewBox: \"0 0 478.024 478.024\" },\n        react_1.default.createElement(\"g\", null,\n            react_1.default.createElement(\"g\", null,\n                react_1.default.createElement(\"path\", { d: \"M411.703,73.561c-45.117-47.093-107.542-73.67-172.76-73.55C107.145-0.155,0.166,106.554,0,238.353\\n          c-0.082,65.17,26.492,127.538,73.55,172.623c0.137,0.136,0.188,0.341,0.324,0.461c1.382,1.331,2.884,2.458,4.284,3.738\\n          c3.84,3.413,7.68,6.946,11.725,10.24c2.167,1.707,4.42,3.413,6.639,4.983c3.823,2.85,7.646,5.7,11.639,8.329\\n          c2.714,1.707,5.513,3.413,8.294,5.12c3.686,2.219,7.356,4.454,11.162,6.485c3.226,1.707,6.519,3.174,9.796,4.727\\n          c3.584,1.707,7.117,3.413,10.786,4.949c3.669,1.536,7.356,2.731,11.076,4.062s6.929,2.56,10.496,3.652\\n          c4.028,1.212,8.158,2.15,12.254,3.157c3.413,0.836,6.724,1.792,10.24,2.475c4.71,0.939,9.489,1.536,14.268,2.185\\n          c2.953,0.41,5.837,0.99,8.823,1.28c7.817,0.768,15.701,1.195,23.654,1.195s15.838-0.427,23.654-1.195\\n          c2.987-0.29,5.871-0.87,8.823-1.28c4.779-0.649,9.557-1.246,14.268-2.185c3.413-0.683,6.827-1.707,10.24-2.475\\n          c4.096-1.007,8.226-1.946,12.254-3.157c3.567-1.092,7.014-2.423,10.496-3.652c3.482-1.229,7.441-2.56,11.076-4.062\\n          s7.202-3.26,10.786-4.949c3.277-1.553,6.571-3.021,9.796-4.727c3.806-2.031,7.475-4.267,11.162-6.485\\n          c2.782-1.707,5.581-3.26,8.294-5.12c3.994-2.628,7.817-5.478,11.639-8.329c2.219-1.707,4.471-3.243,6.639-4.983\\n          c4.045-3.243,7.885-6.69,11.725-10.24c1.399-1.28,2.901-2.406,4.284-3.738c0.136-0.119,0.188-0.324,0.324-0.461\\n          C499.644,319.798,502.881,168.732,411.703,73.561z M373.344,393.107c-3.106,2.731-6.315,5.325-9.557,7.834\\n          c-1.911,1.468-3.823,2.918-5.786,4.318c-3.089,2.236-6.229,4.352-9.421,6.383c-2.321,1.485-4.693,2.918-7.083,4.318\\n          c-3.004,1.707-6.059,3.413-9.148,5.12c-2.731,1.399-5.513,2.714-8.311,4.011s-5.888,2.679-8.909,3.891\\n          c-3.021,1.212-6.229,2.355-9.387,3.413c-2.884,0.99-5.768,2.014-8.687,2.884c-3.413,1.024-6.98,1.86-10.513,2.714\\n          c-2.765,0.648-5.495,1.382-8.294,1.929c-4.045,0.785-8.175,1.331-12.322,1.894c-2.355,0.307-4.693,0.734-7.066,0.973\\n          c-6.554,0.631-13.193,1.007-19.9,1.007s-13.346-0.375-19.9-1.007c-2.372-0.239-4.71-0.666-7.066-0.973\\n          c-4.147-0.563-8.277-1.109-12.322-1.894c-2.799-0.546-5.53-1.28-8.294-1.929c-3.533-0.853-7.049-1.707-10.513-2.714\\n          c-2.918-0.87-5.803-1.894-8.687-2.884c-3.157-1.092-6.315-2.202-9.387-3.413c-3.072-1.212-5.973-2.543-8.909-3.891\\n          s-5.581-2.611-8.311-4.011c-3.089-1.604-6.144-3.294-9.148-5.12c-2.389-1.399-4.762-2.833-7.083-4.318\\n          c-3.191-2.031-6.332-4.147-9.421-6.383c-1.963-1.399-3.874-2.85-5.786-4.318c-3.243-2.509-6.451-5.12-9.557-7.834\\n          c-0.751-0.563-1.434-1.28-2.167-1.929c0.763-58.057,38.06-109.321,93.065-127.915c27.503,13.083,59.435,13.083,86.938,0\\n          c55.004,18.594,92.301,69.857,93.065,127.915C374.76,391.827,374.077,392.476,373.344,393.107z M179.43,136.849\\n          c18.479-32.864,60.1-44.525,92.964-26.046s44.525,60.1,26.046,92.964c-6.131,10.904-15.141,19.914-26.046,26.046\\n          c-0.085,0-0.188,0-0.29,0.102c-4.526,2.519-9.309,4.545-14.268,6.042c-0.887,0.256-1.707,0.597-2.645,0.819\\n          c-1.707,0.444-3.499,0.751-5.257,1.058c-3.31,0.579-6.659,0.915-10.018,1.007h-1.946c-3.359-0.092-6.708-0.428-10.018-1.007\\n          c-1.707-0.307-3.516-0.614-5.256-1.058c-0.905-0.222-1.707-0.563-2.645-0.819c-4.959-1.497-9.742-3.522-14.268-6.042l-0.307-0.102\\n          C172.612,211.334,160.951,169.713,179.43,136.849z M405.753,357.336L405.753,357.336c-10.952-51.083-44.59-94.39-91.375-117.64\\n          c38.245-41.661,35.475-106.438-6.186-144.683c-41.661-38.245-106.438-35.475-144.683,6.186\\n          c-35.954,39.166-35.954,99.332,0,138.497c-46.785,23.251-80.423,66.557-91.375,117.64C6.69,265.153,28.366,137.371,120.549,71.927\\n          s219.965-43.768,285.409,48.415c24.601,34.653,37.807,76.104,37.786,118.602C443.744,281.405,430.46,322.802,405.753,357.336z\" })))));\n};\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconAnon.jsx?");

/***/ }),

/***/ "./src/shared/icons/IconClose.jsx":
/*!****************************************!*\
  !*** ./src/shared/icons/IconClose.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconClose = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.IconClose = function () {\n    return (react_1.default.createElement(\"svg\", { width: \"32\", height: \"32\", fill: \"black\", \"aria-hidden\": \"false\" },\n        react_1.default.createElement(\"path\", { d: \"M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z\" })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconClose.jsx?");

/***/ }),

/***/ "./src/shared/icons/IconHeart.jsx":
/*!****************************************!*\
  !*** ./src/shared/icons/IconHeart.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconHeart = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.IconHeart = function (_a) {\n    var like = _a.like;\n    if (like) {\n        return (react_1.default.createElement(\"svg\", { \"aria-label\": \"\\u041D\\u0435 \\u043D\\u0440\\u0430\\u0432\\u0438\\u0442\\u0441\\u044F\", fill: \"#fff\", height: \"24\", viewBox: \"0 0 48 48\", width: \"24\" },\n            react_1.default.createElement(\"path\", { d: \"M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z\" })));\n    }\n    return (react_1.default.createElement(\"svg\", { \"aria-label\": \"\\u041D\\u0440\\u0430\\u0432\\u0438\\u0442\\u0441\\u044F\", fill: \"#fff\", height: \"24\", viewBox: \"0 0 48 48\", width: \"24\" },\n        react_1.default.createElement(\"path\", { d: \"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z\" })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconHeart.jsx?");

/***/ }),

/***/ "./src/shared/icons/IconHeartForModal.jsx":
/*!************************************************!*\
  !*** ./src/shared/icons/IconHeartForModal.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconHeart = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.IconHeart = function (_a) {\n    var like = _a.like;\n    if (like) {\n        return (react_1.default.createElement(\"svg\", { \"aria-label\": \"\\u041D\\u0435 \\u043D\\u0440\\u0430\\u0432\\u0438\\u0442\\u0441\\u044F\", fill: \"red\", height: \"24\", viewBox: \"0 0 48 48\", width: \"24\" },\n            react_1.default.createElement(\"path\", { d: \"M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z\" })));\n    }\n    return (react_1.default.createElement(\"svg\", { \"aria-label\": \"\\u041D\\u0440\\u0430\\u0432\\u0438\\u0442\\u0441\\u044F\", fill: \"black\", height: \"24\", viewBox: \"0 0 48 48\", width: \"24\" },\n        react_1.default.createElement(\"path\", { d: \"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z\" })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconHeartForModal.jsx?");

/***/ }),

/***/ "./src/shared/reducers/redusers.js":
/*!*****************************************!*\
  !*** ./src/shared/reducers/redusers.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar images = function (state, action) {\n    if (state === void 0) { state = []; }\n    switch (action.type) {\n        case 'ADD_IMAGES':\n            return state.concat(action.payload);\n        case 'LIKE_IMAGE':\n            var newState = state.map(function (image) {\n                if (image.id === action.id) {\n                    image.liked_by_user = !image.liked_by_user;\n                    if (image.liked_by_user) {\n                        image.likes = ++image.likes;\n                    }\n                    else {\n                        image.likes = --image.likes;\n                    }\n                }\n                return image;\n            });\n            console.log(newState);\n            return newState;\n        default:\n            return state;\n    }\n};\nexports.default = images;\n\n\n//# sourceURL=webpack:///./src/shared/reducers/redusers.js?");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

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