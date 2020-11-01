webpackHotUpdate("main",{

/***/ "./src/shared/containers/AppContainer.jsx":
/*!************************************************!*\
  !*** ./src/shared/containers/AppContainer.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/containers/Header.jsx\");\nvar UnsplashImage_1 = __webpack_require__(/*! ./UnsplashImage */ \"./src/shared/containers/UnsplashImage.jsx\");\nvar Modal_1 = __webpack_require__(/*! ./Modal */ \"./src/shared/containers/Modal.jsx\");\nvar tokenContext_1 = __webpack_require__(/*! ../context/tokenContext */ \"./src/shared/context/tokenContext.jsx\");\nvar isAuthContext_1 = __webpack_require__(/*! ../context/isAuthContext */ \"./src/shared/context/isAuthContext.jsx\");\nvar useToken_1 = __webpack_require__(/*! ../hooks/useToken */ \"./src/shared/hooks/useToken.jsx\");\nvar redusers_1 = __importDefault(__webpack_require__(/*! ../reducers/redusers */ \"./src/shared/reducers/redusers.js\"));\nvar AppContainer_css_1 = __importDefault(__webpack_require__(/*! ./AppContainer.css */ \"./src/shared/containers/AppContainer.css\"));\nvar store = redux_1.createStore(redusers_1.default, redux_devtools_extension_1.composeWithDevTools());\nfunction AppContainer() {\n    var token = useToken_1.useToken()[0];\n    var isAuthenticated = !!token;\n    var location = react_router_dom_1.useLocation();\n    var background = location.state && location.state.background;\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\n        react_1.default.createElement(tokenContext_1.authToken.Provider, { value: token },\n            react_1.default.createElement(isAuthContext_1.isAuthContext.Provider, { value: isAuthenticated },\n                react_1.default.createElement(\"div\", { className: AppContainer_css_1.default.body },\n                    react_1.default.createElement(Header_1.Heading, null),\n                    react_1.default.createElement(UnsplashImage_1.UnsplashImage, null),\n                    isAuthenticated && background && react_1.default.createElement(react_router_dom_1.Route, { path: \"/auth/img/:id\", children: react_1.default.createElement(Modal_1.Modal, null) }))))));\n}\nexports.AppContainer = AppContainer;\n\n\n//# sourceURL=webpack:///./src/shared/containers/AppContainer.jsx?");

/***/ }),

/***/ "./src/shared/containers/Modal.jsx":
/*!*****************************************!*\
  !*** ./src/shared/containers/Modal.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Modal = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nvar tokenContext_1 = __webpack_require__(/*! ../context/tokenContext */ \"./src/shared/context/tokenContext.jsx\");\nvar actions_1 = __webpack_require__(/*! ../actions/actions */ \"./src/shared/actions/actions.js\");\nvar IconClose_1 = __webpack_require__(/*! ../icons/IconClose */ \"./src/shared/icons/IconClose.jsx\");\nvar IconHeartForModal_1 = __webpack_require__(/*! ../icons/IconHeartForModal */ \"./src/shared/icons/IconHeartForModal.jsx\");\nvar Modal_css_1 = __importDefault(__webpack_require__(/*! ./Modal.css */ \"./src/shared/containers/Modal.css\"));\nexports.Modal = function (props) {\n    var history = react_router_dom_1.useHistory();\n    var id = react_router_dom_1.useParams().id;\n    var images = props.images, likeImage = props.likeImage;\n    var token = react_1.useContext(tokenContext_1.authToken);\n    var image;\n    for (var i = 0; i < images.length; i++) {\n        if (id === images[i].id) {\n            image = images[i];\n        }\n    }\n    var date = new Date(image.created_at);\n    var months = [\"января\", \"февраля\", \"марта\", \"апреля\", \"мая\", \"июня\", \"июля\", \"августа\", \"сентября\", \"октября\", \"ноября\", \"декабря\"];\n    var back = function (event) {\n        event.stopPropagation();\n        history.goBack();\n    };\n    var likePost = function (id) {\n        if (!image.liked_by_user) {\n            axios_1.default\n                .get(\"/api/likePhoto?id=\" + id + \"&token=\" + token)\n                .then(function (res) {\n                likeImage(id);\n            })\n                .catch(function (err) { return console.log('{12}', err); });\n        }\n        else {\n            axios_1.default\n                .get(\"/api/unlikePhoto?id=\" + id + \"&token=\" + token)\n                .then(function (res) {\n                likeImage(id);\n            })\n                .catch(function (err) { return console.log('{12}', err); });\n        }\n    };\n    return (react_1.default.createElement(\"div\", { className: Modal_css_1.default.modal, onClick: back },\n        react_1.default.createElement(\"div\", { className: Modal_css_1.default.modalContent, onClick: function (e) { return e.stopPropagation(); } },\n            react_1.default.createElement(\"div\", { className: Modal_css_1.default.modalHeader },\n                react_1.default.createElement(\"div\", { className: Modal_css_1.default.header },\n                    react_1.default.createElement(\"a\", { href: image.user.links.html, className: Modal_css_1.default.avatarBox, target: \"_blank\" },\n                        react_1.default.createElement(\"img\", { src: image.user.profile_image.large, className: Modal_css_1.default.avatarImage, alt: image.alt_description })),\n                    react_1.default.createElement(\"div\", { className: Modal_css_1.default.headerUser },\n                        react_1.default.createElement(\"a\", { href: image.user.links.html, className: Modal_css_1.default.headerUsername, target: \"_blank\" }, image.user.username),\n                        react_1.default.createElement(\"span\", { className: Modal_css_1.default.headerCreatedAt },\n                            date.getDate(),\n                            \" \",\n                            months[date.getMonth()],\n                            \" \",\n                            date.getFullYear()))),\n                react_1.default.createElement(\"button\", { className: Modal_css_1.default.close, type: \"button\", onClick: back },\n                    react_1.default.createElement(IconClose_1.IconClose, null))),\n            react_1.default.createElement(\"div\", { className: Modal_css_1.default.boxImage },\n                react_1.default.createElement(\"img\", { className: Modal_css_1.default.image, src: image.urls.regular, alt: image.alt_description })),\n            react_1.default.createElement(\"div\", { className: Modal_css_1.default.footer },\n                react_1.default.createElement(\"button\", { className: Modal_css_1.default.like, onClick: function () { return likePost(image.id); } },\n                    react_1.default.createElement(IconHeartForModal_1.IconHeart, { like: image.liked_by_user }),\n                    react_1.default.createElement(\"span\", { className: Modal_css_1.default.countLikes }, image.likes)),\n                react_1.default.createElement(\"p\", { className: Modal_css_1.default.footerText },\n                    \"Photo by \",\n                    image.user.name,\n                    \" on \",\n                    react_1.default.createElement(\"a\", { href: \"https://unsplash.com/\", className: Modal_css_1.default.unsplash }, \"Unsplash\"))))));\n};\nvar mapStateToProps = function (state) {\n    return {\n        images: state\n    };\n};\nvar mapDispatchToProps = function (dispatch) {\n    return {\n        likeImage: function (images) { return dispatch(actions_1.likeImage(images)); },\n    };\n};\nexports.Modal = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.Modal);\nexports.default = exports.Modal;\n\n\n//# sourceURL=webpack:///./src/shared/containers/Modal.jsx?");

/***/ })

})