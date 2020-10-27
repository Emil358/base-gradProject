webpackHotUpdate("main",{

/***/ "./src/shared/App.jsx":
/*!****************************!*\
  !*** ./src/shared/App.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = exports.Application = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar AppContainer_1 = __webpack_require__(/*! ./components/AppContainer */ \"./src/shared/components/AppContainer.jsx\");\nfunction Application() {\n    return (react_1.default.createElement(AppContainer_1.AppContainer, null));\n}\nexports.Application = Application;\nexports.App = root_1.hot(Application);\n\n\n//# sourceURL=webpack:///./src/shared/App.jsx?");

/***/ }),

/***/ "./src/shared/components/AppContainer.jsx":
/*!************************************************!*\
  !*** ./src/shared/components/AppContainer.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/components/Header.jsx\");\nvar UnsplashImage_1 = __webpack_require__(/*! ./UnsplashImage */ \"./src/shared/components/UnsplashImage.jsx\");\nvar AppContainer_css_1 = __importDefault(__webpack_require__(/*! ./AppContainer.css */ \"./src/shared/components/AppContainer.css\"));\nvar tokenContext_1 = __webpack_require__(/*! ../context/tokenContext */ \"./src/shared/context/tokenContext.jsx\");\nvar isAuthContext_1 = __webpack_require__(/*! ../context/isAuthContext */ \"./src/shared/context/isAuthContext.jsx\");\nvar useToken_1 = __webpack_require__(/*! ../hooks/useToken */ \"./src/shared/hooks/useToken.jsx\");\nfunction AppContainer() {\n    var token = useToken_1.useToken()[0];\n    var isAuthenticated = !!token;\n    return (react_1.default.createElement(tokenContext_1.authToken.Provider, { value: token },\n        react_1.default.createElement(isAuthContext_1.isAuthContext.Provider, { value: isAuthenticated },\n            react_1.default.createElement(\"div\", { className: AppContainer_css_1.default.body },\n                react_1.default.createElement(Header_1.Heading, null),\n                react_1.default.createElement(UnsplashImage_1.UnsplashImage, null)))));\n}\nexports.AppContainer = AppContainer;\n\n\n//# sourceURL=webpack:///./src/shared/components/AppContainer.jsx?");

/***/ })

})