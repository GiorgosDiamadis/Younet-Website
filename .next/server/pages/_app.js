(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7544);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2097);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7027);
/* harmony import */ var lib_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7588);
/* harmony import */ var styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6961);
/* harmony import */ var styles_globals_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__);






function App({ Component , pageProps ={} , metadata , recentPosts , categories , menus  }) {
    const site = (0,hooks_use_site__WEBPACK_IMPORTED_MODULE_2__/* .useSiteContext */ .AA)({
        metadata,
        recentPosts,
        categories,
        menus
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(hooks_use_site__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext.Provider */ .DN.Provider, {
        value: site,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}
App.getInitialProps = async function(appContext) {
    const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(appContext);
    const { menus =[]  } = await (0,lib_menus__WEBPACK_IMPORTED_MODULE_4__/* .getAllMenus */ .xz)();
    return {
        ...appProps,
        metadata: await (0,lib_site__WEBPACK_IMPORTED_MODULE_3__/* .getSiteMetadata */ .Oq)(),
        menus
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,544,550], () => (__webpack_exec__(2730)));
module.exports = __webpack_exports__;

})();