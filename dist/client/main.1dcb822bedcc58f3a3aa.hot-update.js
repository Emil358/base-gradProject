webpackHotUpdate("main",{

/***/ "./src/shared/components/Image.jsx":
/*!*****************************************!*\
  !*** ./src/shared/components/Image.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Image = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar Image_css_1 = __importDefault(__webpack_require__(/*! ./Image.css */ \"./src/shared/components/Image.css\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nvar IconHeart_1 = __webpack_require__(/*! ./IconHeart */ \"./src/shared/components/IconHeart.jsx\");\nexports.Image = function (_a) {\n    var image = _a.image, isAuth = _a.isAuth;\n    var location = react_router_dom_1.useLocation();\n    var date = new Date(image.created_at);\n    var months = [\"января\", \"февраля\", \"марта\", \"апреля\", \"мая\", \"июня\", \"июля\", \"августа\", \"сентября\", \"октября\", \"ноября\", \"декабря\"];\n    if (isAuth) {\n        return (react_1.default.createElement(react_router_dom_1.Link, { to: {\n                pathname: \"/auth/img/\" + image.id,\n                state: { background: location }\n            } },\n            react_1.default.createElement(\"div\", { className: Image_css_1.default.imageItem },\n                react_1.default.createElement(\"img\", { className: Image_css_1.default.image, src: image.urls.small, alt: \"\" }),\n                react_1.default.createElement(\"div\", { className: Image_css_1.default.header },\n                    react_1.default.createElement(\"a\", { href: image.user.links.html, className: Image_css_1.default.avatarBox, target: \"_blank\" },\n                        react_1.default.createElement(\"img\", { src: image.user.profile_image.medium, className: Image_css_1.default.avatarImage, alt: image.alt_description })),\n                    react_1.default.createElement(\"div\", { className: Image_css_1.default.headerUser },\n                        react_1.default.createElement(\"a\", { href: image.user.links.html, className: Image_css_1.default.headerUsername, target: \"_blank\" }, image.user.username),\n                        react_1.default.createElement(\"span\", { className: Image_css_1.default.headerCreatedAt },\n                            date.getDate(),\n                            \" \",\n                            months[date.getMonth()],\n                            \" \",\n                            date.getFullYear()))),\n                react_1.default.createElement(\"div\", { className: Image_css_1.default.likes },\n                    react_1.default.createElement(IconHeart_1.IconHeart, null),\n                    react_1.default.createElement(\"span\", { className: Image_css_1.default.countLikes }, image.likes)))));\n    }\n    return (react_1.default.createElement(\"div\", { className: Image_css_1.default.imageItem },\n        react_1.default.createElement(\"img\", { className: Image_css_1.default.image, src: image.urls.small, alt: \"\" }),\n        react_1.default.createElement(\"div\", { className: Image_css_1.default.header },\n            react_1.default.createElement(\"a\", { href: image.user.links.html, className: Image_css_1.default.avatarBox, target: \"_blank\" },\n                react_1.default.createElement(\"img\", { src: image.user.profile_image.medium, className: Image_css_1.default.avatarImage, alt: image.alt_description })),\n            react_1.default.createElement(\"div\", { className: Image_css_1.default.headerUser },\n                react_1.default.createElement(\"a\", { href: image.user.links.html, className: Image_css_1.default.headerUsername, target: \"_blank\" }, image.user.username),\n                react_1.default.createElement(\"span\", { className: Image_css_1.default.headerCreatedAt },\n                    date.getDate(),\n                    \" \",\n                    months[date.getMonth()],\n                    \" \",\n                    date.getFullYear()))),\n        react_1.default.createElement(\"div\", { className: Image_css_1.default.likes },\n            react_1.default.createElement(IconHeart_1.IconHeart, null),\n            react_1.default.createElement(\"span\", { className: Image_css_1.default.countLikes }, image.likes))));\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Image.jsx?");

/***/ })

})