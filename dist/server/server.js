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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nexports.indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>GradProject</title>\\n  <script src=\\\" /static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__= '\" + token + \"'\\n  </script>\\n  <style>\\n  html {\\n    box-sizing: border-box;\\n  }\\n\\n  *,\\n  ::before,\\n  ::after {\\n    box-sizing: inherit;\\n  }\\n\\n  body {\\n    margin: 0;\\n    min-width: 320px;\\n  }\\n</style>\\n</head>\\n<body>\\n  <div id=\\\"root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ \"node-fetch\"));\nglobal.fetch = node_fetch_1.default;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.jsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar unsplash_js_1 = __importStar(__webpack_require__(/*! unsplash-js */ \"unsplash-js\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar unsplash = new unsplash_js_1.default({\n    accessKey: 'HmESHW-LSmwiDl4Gs3MOm-Qlksijb1XVrTIN4W7nJCc',\n    secret: 'wMv3YV1LWZtyzVo46q63L_yBS2GN-Ceqa7OP6WZYgOs',\n    callbackUrl: 'http://localhost:3000/auth'\n});\nvar app = express_1.default();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/api/userMe', function (req, res) {\n    unsplash.auth.setBearerToken(req.query.token);\n    unsplash.currentUser.profile()\n        .then(unsplash_js_1.toJson)\n        .then(function (json) { return res.json(json); })\n        .catch(function (err) { return console.log('{10}', err); });\n});\napp.get('/api/photos', function (req, res) {\n    unsplash.photos.listPhotos(req.query.start, req.query.count)\n        .then(unsplash_js_1.toJson)\n        .then(function (json) { return res.json(json); })\n        .catch(function (err) { return console.log('err{6}', err); });\n});\napp.get('/auth', function (req, res) {\n    var context = {};\n    console.log('{9}', req.query.code);\n    unsplash.auth.userAuthentication(req.query.code)\n        .then(unsplash_js_1.toJson)\n        .then(function (json) {\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },\n            react_1.default.createElement(App_1.App, null))), json.access_token));\n        console.log('{8}', json.access_token);\n    })\n        .catch(function (err) { return console.log('err{7}', err); });\n});\napp.get('/', function (req, res) {\n    var context = {};\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },\n        react_1.default.createElement(App_1.App, null)))));\n});\napp.listen(3000, function () {\n    console.log('server started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.jsx":
/*!****************************!*\
  !*** ./src/shared/App.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = exports.Application = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar AppContainer_1 = __webpack_require__(/*! ./components/AppContainer */ \"./src/shared/components/AppContainer.jsx\");\n// import { BrowserRouter } from 'react-router-dom';\nfunction Application() {\n    return (react_1.default.createElement(AppContainer_1.AppContainer, null));\n}\nexports.Application = Application;\nexports.App = root_1.hot(Application);\n\n\n//# sourceURL=webpack:///./src/shared/App.jsx?");

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

/***/ "./src/shared/components/AppContainer.css":
/*!************************************************!*\
  !*** ./src/shared/components/AppContainer.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"body\": \"AppContainer__body--2rE_p\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/AppContainer.css?");

/***/ }),

/***/ "./src/shared/components/AppContainer.jsx":
/*!************************************************!*\
  !*** ./src/shared/components/AppContainer.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/components/Header.jsx\");\nvar UnsplashImage_1 = __webpack_require__(/*! ./UnsplashImage */ \"./src/shared/components/UnsplashImage.jsx\");\nvar Modal_1 = __webpack_require__(/*! ./Modal */ \"./src/shared/components/Modal.jsx\");\nvar tokenContext_1 = __webpack_require__(/*! ../context/tokenContext */ \"./src/shared/context/tokenContext.jsx\");\nvar isAuthContext_1 = __webpack_require__(/*! ../context/isAuthContext */ \"./src/shared/context/isAuthContext.jsx\");\nvar useToken_1 = __webpack_require__(/*! ../hooks/useToken */ \"./src/shared/hooks/useToken.jsx\");\nvar redusers_1 = __importDefault(__webpack_require__(/*! ../reducers/redusers */ \"./src/shared/reducers/redusers.js\"));\nvar AppContainer_css_1 = __importDefault(__webpack_require__(/*! ./AppContainer.css */ \"./src/shared/components/AppContainer.css\"));\nvar store = redux_1.createStore(redusers_1.default, redux_devtools_extension_1.composeWithDevTools());\nfunction AppContainer() {\n    var token = useToken_1.useToken()[0];\n    var isAuthenticated = !!token;\n    var location = react_router_dom_1.useLocation();\n    var background = location.state && location.state.background;\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\n        react_1.default.createElement(tokenContext_1.authToken.Provider, { value: token },\n            react_1.default.createElement(isAuthContext_1.isAuthContext.Provider, { value: isAuthenticated },\n                react_1.default.createElement(\"div\", { className: AppContainer_css_1.default.body },\n                    react_1.default.createElement(Header_1.Heading, null),\n                    react_1.default.createElement(UnsplashImage_1.UnsplashImage, null),\n                    isAuthenticated && background && react_1.default.createElement(react_router_dom_1.Route, { path: \"/auth/img/:id\", children: react_1.default.createElement(Modal_1.Modal, null) }))))));\n}\nexports.AppContainer = AppContainer;\n\n\n//# sourceURL=webpack:///./src/shared/components/AppContainer.jsx?");

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
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Heading = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Header_css_1 = __importDefault(__webpack_require__(/*! ./Header.css */ \"./src/shared/components/Header.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/components/UserBlock.jsx\");\nvar useData_1 = __webpack_require__(/*! ../hooks/useData */ \"./src/shared/hooks/useData.jsx\");\nexports.Heading = function () {\n    var data = useData_1.useData()[0];\n    return (react_1.default.createElement(\"header\", { className: Header_css_1.default.header },\n        react_1.default.createElement(\"h1\", { className: Header_css_1.default.hOne }, \"Unsplash\"),\n        react_1.default.createElement(\"p\", null, \"The internet\\u2019s source of freely usable images.\"),\n        react_1.default.createElement(\"p\", null, \"Powered by creators everywhere.\"),\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.username })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header.jsx?");

/***/ }),

/***/ "./src/shared/components/IconAnon.jsx":
/*!********************************************!*\
  !*** ./src/shared/components/IconAnon.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconAnon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.IconAnon = function () {\n    return (react_1.default.createElement(\"svg\", { viewBox: \"0 0 478.024 478.024\" },\n        react_1.default.createElement(\"g\", null,\n            react_1.default.createElement(\"g\", null,\n                react_1.default.createElement(\"path\", { d: \"M411.703,73.561c-45.117-47.093-107.542-73.67-172.76-73.55C107.145-0.155,0.166,106.554,0,238.353\\n          c-0.082,65.17,26.492,127.538,73.55,172.623c0.137,0.136,0.188,0.341,0.324,0.461c1.382,1.331,2.884,2.458,4.284,3.738\\n          c3.84,3.413,7.68,6.946,11.725,10.24c2.167,1.707,4.42,3.413,6.639,4.983c3.823,2.85,7.646,5.7,11.639,8.329\\n          c2.714,1.707,5.513,3.413,8.294,5.12c3.686,2.219,7.356,4.454,11.162,6.485c3.226,1.707,6.519,3.174,9.796,4.727\\n          c3.584,1.707,7.117,3.413,10.786,4.949c3.669,1.536,7.356,2.731,11.076,4.062s6.929,2.56,10.496,3.652\\n          c4.028,1.212,8.158,2.15,12.254,3.157c3.413,0.836,6.724,1.792,10.24,2.475c4.71,0.939,9.489,1.536,14.268,2.185\\n          c2.953,0.41,5.837,0.99,8.823,1.28c7.817,0.768,15.701,1.195,23.654,1.195s15.838-0.427,23.654-1.195\\n          c2.987-0.29,5.871-0.87,8.823-1.28c4.779-0.649,9.557-1.246,14.268-2.185c3.413-0.683,6.827-1.707,10.24-2.475\\n          c4.096-1.007,8.226-1.946,12.254-3.157c3.567-1.092,7.014-2.423,10.496-3.652c3.482-1.229,7.441-2.56,11.076-4.062\\n          s7.202-3.26,10.786-4.949c3.277-1.553,6.571-3.021,9.796-4.727c3.806-2.031,7.475-4.267,11.162-6.485\\n          c2.782-1.707,5.581-3.26,8.294-5.12c3.994-2.628,7.817-5.478,11.639-8.329c2.219-1.707,4.471-3.243,6.639-4.983\\n          c4.045-3.243,7.885-6.69,11.725-10.24c1.399-1.28,2.901-2.406,4.284-3.738c0.136-0.119,0.188-0.324,0.324-0.461\\n          C499.644,319.798,502.881,168.732,411.703,73.561z M373.344,393.107c-3.106,2.731-6.315,5.325-9.557,7.834\\n          c-1.911,1.468-3.823,2.918-5.786,4.318c-3.089,2.236-6.229,4.352-9.421,6.383c-2.321,1.485-4.693,2.918-7.083,4.318\\n          c-3.004,1.707-6.059,3.413-9.148,5.12c-2.731,1.399-5.513,2.714-8.311,4.011s-5.888,2.679-8.909,3.891\\n          c-3.021,1.212-6.229,2.355-9.387,3.413c-2.884,0.99-5.768,2.014-8.687,2.884c-3.413,1.024-6.98,1.86-10.513,2.714\\n          c-2.765,0.648-5.495,1.382-8.294,1.929c-4.045,0.785-8.175,1.331-12.322,1.894c-2.355,0.307-4.693,0.734-7.066,0.973\\n          c-6.554,0.631-13.193,1.007-19.9,1.007s-13.346-0.375-19.9-1.007c-2.372-0.239-4.71-0.666-7.066-0.973\\n          c-4.147-0.563-8.277-1.109-12.322-1.894c-2.799-0.546-5.53-1.28-8.294-1.929c-3.533-0.853-7.049-1.707-10.513-2.714\\n          c-2.918-0.87-5.803-1.894-8.687-2.884c-3.157-1.092-6.315-2.202-9.387-3.413c-3.072-1.212-5.973-2.543-8.909-3.891\\n          s-5.581-2.611-8.311-4.011c-3.089-1.604-6.144-3.294-9.148-5.12c-2.389-1.399-4.762-2.833-7.083-4.318\\n          c-3.191-2.031-6.332-4.147-9.421-6.383c-1.963-1.399-3.874-2.85-5.786-4.318c-3.243-2.509-6.451-5.12-9.557-7.834\\n          c-0.751-0.563-1.434-1.28-2.167-1.929c0.763-58.057,38.06-109.321,93.065-127.915c27.503,13.083,59.435,13.083,86.938,0\\n          c55.004,18.594,92.301,69.857,93.065,127.915C374.76,391.827,374.077,392.476,373.344,393.107z M179.43,136.849\\n          c18.479-32.864,60.1-44.525,92.964-26.046s44.525,60.1,26.046,92.964c-6.131,10.904-15.141,19.914-26.046,26.046\\n          c-0.085,0-0.188,0-0.29,0.102c-4.526,2.519-9.309,4.545-14.268,6.042c-0.887,0.256-1.707,0.597-2.645,0.819\\n          c-1.707,0.444-3.499,0.751-5.257,1.058c-3.31,0.579-6.659,0.915-10.018,1.007h-1.946c-3.359-0.092-6.708-0.428-10.018-1.007\\n          c-1.707-0.307-3.516-0.614-5.256-1.058c-0.905-0.222-1.707-0.563-2.645-0.819c-4.959-1.497-9.742-3.522-14.268-6.042l-0.307-0.102\\n          C172.612,211.334,160.951,169.713,179.43,136.849z M405.753,357.336L405.753,357.336c-10.952-51.083-44.59-94.39-91.375-117.64\\n          c38.245-41.661,35.475-106.438-6.186-144.683c-41.661-38.245-106.438-35.475-144.683,6.186\\n          c-35.954,39.166-35.954,99.332,0,138.497c-46.785,23.251-80.423,66.557-91.375,117.64C6.69,265.153,28.366,137.371,120.549,71.927\\n          s219.965-43.768,285.409,48.415c24.601,34.653,37.807,76.104,37.786,118.602C443.744,281.405,430.46,322.802,405.753,357.336z\" })))));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/IconAnon.jsx?");

/***/ }),

/***/ "./src/shared/components/IconHeart.jsx":
/*!*********************************************!*\
  !*** ./src/shared/components/IconHeart.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconHeart = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.IconHeart = function () {\n    return (react_1.default.createElement(\"svg\", { \"aria-label\": \"\\u041D\\u0440\\u0430\\u0432\\u0438\\u0442\\u0441\\u044F\", class: \"_8-yf5 \", fill: \"#262626\", height: \"24\", viewBox: \"0 0 48 48\", width: \"24\" },\n        react_1.default.createElement(\"path\", { d: \"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z\" })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/IconHeart.jsx?");

/***/ }),

/***/ "./src/shared/components/Image.css":
/*!*****************************************!*\
  !*** ./src/shared/components/Image.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"imageItem\": \"Image__imageItem--29Fk7\",\n\t\"header\": \"Image__header--1uzmN\",\n\t\"image\": \"Image__image--1vlqb\",\n\t\"avatarBox\": \"Image__avatarBox--k_WAi\",\n\t\"avatarImage\": \"Image__avatarImage--2K7tx\",\n\t\"headerUser\": \"Image__headerUser--27Xtd\",\n\t\"headerUsername\": \"Image__headerUsername--2ny6Y\",\n\t\"headerCreatedAt\": \"Image__headerCreatedAt--yxW6Y\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/Image.css?");

/***/ }),

/***/ "./src/shared/components/Image.jsx":
/*!*****************************************!*\
  !*** ./src/shared/components/Image.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Image = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Image_css_1 = __importDefault(__webpack_require__(/*! ./Image.css */ \"./src/shared/components/Image.css\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar IconHeart_1 = __webpack_require__(/*! ./IconHeart */ \"./src/shared/components/IconHeart.jsx\");\nexports.Image = function (_a) {\n    var image = _a.image, isAuth = _a.isAuth;\n    var location = react_router_dom_1.useLocation();\n    var date = new Date(image.created_at);\n    var months = [\"января\", \"февраля\", \"марта\", \"апреля\", \"мая\", \"июня\", \"июля\", \"августа\", \"сентября\", \"октября\", \"ноября\", \"декабря\"];\n    if (isAuth) {\n        return (react_1.default.createElement(react_router_dom_1.Link, { to: {\n                pathname: \"/auth/img/\" + image.id,\n                state: { background: location }\n            } },\n            react_1.default.createElement(\"img\", { className: Image_css_1.default.image, src: image.urls.small, alt: \"\" })));\n    }\n    return (react_1.default.createElement(\"div\", { className: Image_css_1.default.imageItem },\n        react_1.default.createElement(\"img\", { className: Image_css_1.default.image, src: image.urls.small, alt: \"\" }),\n        react_1.default.createElement(\"div\", { className: Image_css_1.default.header },\n            react_1.default.createElement(\"a\", { href: image.user.links.html, className: Image_css_1.default.avatarBox },\n                react_1.default.createElement(\"img\", { src: image.user.profile_image.medium, className: Image_css_1.default.avatarImage })),\n            react_1.default.createElement(\"div\", { className: Image_css_1.default.headerUser },\n                react_1.default.createElement(\"a\", { href: image.user.links.html, className: Image_css_1.default.headerUsername }, image.user.username),\n                react_1.default.createElement(\"span\", { className: Image_css_1.default.headerCreatedAt },\n                    date.getDate(),\n                    \" \",\n                    months[date.getMonth()],\n                    \" \",\n                    date.getFullYear()))),\n        react_1.default.createElement(\"div\", { className: Image_css_1.default.likes },\n            react_1.default.createElement(IconHeart_1.IconHeart, null))));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Image.jsx?");

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

/***/ "./src/shared/components/Modal.jsx":
/*!*****************************************!*\
  !*** ./src/shared/components/Modal.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Modal = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar actions_1 = __webpack_require__(/*! ../actions/actions */ \"./src/shared/actions/actions.js\");\nexports.Modal = function (props) {\n    var history = react_router_dom_1.useHistory();\n    var id = react_router_dom_1.useParams().id;\n    var images = props.images, likeImage = props.likeImage;\n    var image;\n    for (var i = 0; i < images.length; i++) {\n        if (id === images[i].id) {\n            image = images[i];\n        }\n    }\n    var back = function (event) {\n        event.stopPropagation();\n        history.goBack();\n    };\n    return (react_1.default.createElement(\"div\", { onClick: back, style: {\n            position: \"absolute\",\n            top: 0,\n            left: 0,\n            bottom: 0,\n            right: 0,\n            background: \"rgba(0, 0, 0, 0.15)\"\n        } },\n        react_1.default.createElement(\"div\", { className: \"modal\", style: {\n                position: \"absolute\",\n                background: \"#fff\",\n                top: 25,\n                left: \"10%\",\n                right: \"10%\",\n                padding: 15,\n                border: \"2px solid #444\"\n            } },\n            react_1.default.createElement(\"h1\", null, image.id),\n            react_1.default.createElement(\"button\", { type: \"button\", onClick: back }, \"Close\"))));\n};\nvar mapStateToProps = function (state) {\n    return {\n        images: state\n    };\n};\nvar mapDispatchToProps = function (dispatch) {\n    return {\n        likeImage: function (images) { return dispatch(actions_1.likeImage(images)); },\n    };\n};\nexports.Modal = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.Modal);\nexports.default = exports.Modal;\n\n\n//# sourceURL=webpack:///./src/shared/components/Modal.jsx?");

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
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UnsplashImage = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_infinite_scroll_component_1 = __importDefault(__webpack_require__(/*! react-infinite-scroll-component */ \"react-infinite-scroll-component\"));\nvar Loader_1 = __webpack_require__(/*! ./Loader */ \"./src/shared/components/Loader.jsx\");\nvar Image_1 = __webpack_require__(/*! ./Image */ \"./src/shared/components/Image.jsx\");\nvar actions_1 = __webpack_require__(/*! ../actions/actions */ \"./src/shared/actions/actions.js\");\nvar isAuthContext_1 = __webpack_require__(/*! ../context/isAuthContext */ \"./src/shared/context/isAuthContext.jsx\");\nvar UnsplashImage_css_1 = __importDefault(__webpack_require__(/*! ./UnsplashImage.css */ \"./src/shared/components/UnsplashImage.css\"));\nexports.UnsplashImage = function (props) {\n    var _a = react_1.useState(1), start = _a[0], setStart = _a[1];\n    var COUNT = 30;\n    var isAuth = react_1.useContext(isAuthContext_1.isAuthContext);\n    var images = props.images, addImages = props.addImages;\n    react_1.useEffect(function () {\n        fetchImages();\n    }, []);\n    var fetchImages = function () {\n        axios_1.default\n            .get(\"/api/photos?count=\" + COUNT + \"&start=\" + start)\n            .then(function (res) {\n            // this.setState({ images: this.state.images.concat(res.data) })\n            return addImages(res.data);\n        });\n        setStart(start + COUNT);\n    };\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_infinite_scroll_component_1.default, { dataLength: images.length, next: fetchImages, hasMore: true, loader: react_1.default.createElement(Loader_1.Loader, null) },\n            react_1.default.createElement(\"div\", { className: UnsplashImage_css_1.default.images }, images.map(function (image, item) { return (react_1.default.createElement(Image_1.Image, { image: image, key: item, isAuth: isAuth })\n            // console.log(image)\n            ); })))));\n};\nvar mapStateToProps = function (state) {\n    return {\n        images: state\n    };\n};\nvar mapDispatchToProps = function (dispatch) {\n    return {\n        addImages: function (images) { return dispatch(actions_1.addImages(images)); },\n    };\n};\nexports.UnsplashImage = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.UnsplashImage);\nexports.default = exports.UnsplashImage;\n\n\n//# sourceURL=webpack:///./src/shared/components/UnsplashImage.jsx?");

/***/ }),

/***/ "./src/shared/components/UserBlock.css":
/*!*********************************************!*\
  !*** ./src/shared/components/UserBlock.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"userBox\": \"UserBlock__userBox--2EkPc\",\n\t\"avatarBox\": \"UserBlock__avatarBox--2cosE\",\n\t\"avatarImage\": \"UserBlock__avatarImage--2VI0n\",\n\t\"username\": \"UserBlock__username--1AUCc\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/components/UserBlock.css?");

/***/ }),

/***/ "./src/shared/components/UserBlock.jsx":
/*!*********************************************!*\
  !*** ./src/shared/components/UserBlock.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar UserBlock_css_1 = __importDefault(__webpack_require__(/*! ./UserBlock.css */ \"./src/shared/components/UserBlock.css\"));\nvar IconAnon_1 = __webpack_require__(/*! ./IconAnon */ \"./src/shared/components/IconAnon.jsx\");\nexports.UserBlock = function (_a) {\n    var avatarSrc = _a.avatarSrc, username = _a.username;\n    return (react_1.default.createElement(\"a\", { href: 'https://unsplash.com/oauth/authorize?client_id=HmESHW-LSmwiDl4Gs3MOm-Qlksijb1XVrTIN4W7nJCc&redirect_uri=http://localhost:3000/auth&response_type=code&scope=public+write_likes', className: UserBlock_css_1.default.userBox },\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.avatarBox }, avatarSrc\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: 'user avatar', className: UserBlock_css_1.default.avatarImage })\n            : react_1.default.createElement(IconAnon_1.IconAnon, null)),\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.username },\n            react_1.default.createElement(\"span\", null, username || 'Аноним'))));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/UserBlock.jsx?");

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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useToken = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nfunction useToken() {\n    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];\n    react_1.useEffect(function () {\n        if (window.__token__ !== 'undefined') {\n            setToken(window.__token__);\n        }\n    }, []);\n    return [token];\n}\nexports.useToken = useToken;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useToken.jsx?");

/***/ }),

/***/ "./src/shared/reducers/redusers.js":
/*!*****************************************!*\
  !*** ./src/shared/reducers/redusers.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar images = function (state, action) {\n    if (state === void 0) { state = []; }\n    switch (action.type) {\n        case 'ADD_IMAGES':\n            return state.concat(action.payload);\n        case 'LIKE_IMAGE':\n            return state;\n        default:\n            return state;\n    }\n};\nexports.default = images;\n\n\n//# sourceURL=webpack:///./src/shared/reducers/redusers.js?");

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