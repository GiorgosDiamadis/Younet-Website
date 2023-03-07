(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1152:
/***/ ((module) => {

// Exports
module.exports = {
	"progressbarColor": "#0070f3"
};


/***/ }),

/***/ 3275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: ./src/hooks/use-site.js
var use_site = __webpack_require__(2097);
// EXTERNAL MODULE: ./src/lib/site.js + 1 modules
var site = __webpack_require__(7027);
// EXTERNAL MODULE: ./src/lib/posts.js + 1 modules
var posts = __webpack_require__(3958);
// EXTERNAL MODULE: ./src/lib/categories.js + 1 modules
var categories = __webpack_require__(7706);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: ./src/lib/menus.js + 1 modules
var lib_menus = __webpack_require__(7588);
// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__(6961);
// EXTERNAL MODULE: ./src/styles/_variables.module.scss
var _variables_module = __webpack_require__(1152);
var _variables_module_default = /*#__PURE__*/__webpack_require__.n(_variables_module);
;// CONCATENATED MODULE: ./src/pages/_app.js










function App({ Component , pageProps ={} , metadata , recentPosts , categories , menus  }) {
    const site = (0,use_site/* useSiteContext */.AA)({
        metadata,
        recentPosts,
        categories,
        menus
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(use_site/* SiteContext.Provider */.DN.Provider, {
        value: site,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                height: 4,
                color: (_variables_module_default()).progressbarColor
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
App.getInitialProps = async function(appContext) {
    const appProps = await app["default"].getInitialProps(appContext);
    const { menus =[]  } = await (0,lib_menus/* getAllMenus */.xz)();
    return {
        ...appProps,
        metadata: await (0,site/* getSiteMetadata */.Oq)(),
        menus
    };
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 8181:
/***/ ((module) => {

"use strict";
module.exports = require("parameterize");

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
var __webpack_exports__ = __webpack_require__.X(0, [270,544,550,958,706], () => (__webpack_exec__(3275)));
module.exports = __webpack_exports__;

})();