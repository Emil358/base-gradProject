webpackHotUpdate("main",{

/***/ "./src/shared/containers/AppContainer.jsx":
/*!************************************************!*\
  !*** ./src/shared/containers/AppContainer.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/containers/Header.jsx\");\nvar UnsplashImage_1 = __webpack_require__(/*! ./UnsplashImage */ \"./src/shared/containers/UnsplashImage.jsx\");\nvar ModalContainer_1 = __webpack_require__(/*! ./ModalContainer */ \"./src/shared/containers/ModalContainer.jsx\");\nvar tokenContext_1 = __webpack_require__(/*! ../context/tokenContext */ \"./src/shared/context/tokenContext.jsx\");\nvar isAuthContext_1 = __webpack_require__(/*! ../context/isAuthContext */ \"./src/shared/context/isAuthContext.jsx\");\nvar useToken_1 = __webpack_require__(/*! ../hooks/useToken */ \"./src/shared/hooks/useToken.jsx\");\nvar redusers_1 = __importDefault(__webpack_require__(/*! ../reducers/redusers */ \"./src/shared/reducers/redusers.js\"));\nvar AppContainer_css_1 = __importDefault(__webpack_require__(/*! ./AppContainer.css */ \"./src/shared/containers/AppContainer.css\"));\nvar store = redux_1.createStore(redusers_1.default, redux_devtools_extension_1.composeWithDevTools());\nfunction AppContainer() {\n    var token = useToken_1.useToken()[0];\n    var isAuthenticated = !!token;\n    var location = react_router_dom_1.useLocation();\n    var background = location.state && location.state.background;\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\n        react_1.default.createElement(tokenContext_1.authToken.Provider, { value: token },\n            react_1.default.createElement(isAuthContext_1.isAuthContext.Provider, { value: isAuthenticated },\n                react_1.default.createElement(\"div\", { className: AppContainer_css_1.default.body },\n                    react_1.default.createElement(Header_1.Heading, null),\n                    react_1.default.createElement(UnsplashImage_1.UnsplashImage, null),\n                    isAuthenticated && background && react_1.default.createElement(react_router_dom_1.Route, { path: \"/auth/img/:id\", children: react_1.default.createElement(ModalContainer_1.ModalContainer, null) }))))));\n}\nexports.AppContainer = AppContainer;\n\n\n//# sourceURL=webpack:///./src/shared/containers/AppContainer.jsx?");

/***/ }),

/***/ "./src/shared/reducers/redusers.js":
/*!*****************************************!*\
  !*** ./src/shared/reducers/redusers.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar images = function (state, action) {\n    if (state === void 0) { state = []; }\n    switch (action.type) {\n        case 'ADD_IMAGES':\n            return state.concat(action.payload);\n        case 'LIKE_IMAGE':\n            var newState = state.map(function (image) {\n                if (image.id === action.id) {\n                    image.liked_by_user = !image.liked_by_user;\n                    if (image.liked_by_user) {\n                        image.likes = ++image.likes;\n                    }\n                    else {\n                        image.likes = --image.likes;\n                    }\n                }\n                return image;\n            });\n            console.log(newState);\n            return newState;\n        default:\n            return state;\n    }\n};\nexports.default = images;\n\n\n//# sourceURL=webpack:///./src/shared/reducers/redusers.js?");

/***/ })

})