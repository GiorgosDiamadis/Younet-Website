(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2298:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__FGbDi",
	"header": "Header_header__NLhag"
};


/***/ }),

/***/ 3141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CallToActionFramerHOC)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4475);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6330);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function CallToActionFramerHOC({ children , onClick =()=>{} , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.staggerContainer,
        initial: "hidden",
        whileInView: "show",
        viewport: {
            once: false,
            amount: 0.25
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__.textVariant)(.4),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CallToAction__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                onClick: onClick,
                children: children,
                ...rest
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(3125);
// EXTERNAL MODULE: ./src/components/Header/Header.module.scss
var Header_module = __webpack_require__(2298);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/Header/Header.js



const Header = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_module_default()).header,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
            children: children
        })
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Header/index.js



/***/ }),

/***/ 7569:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6330);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SectionTitle = ({ title , subTitle , size ="lg"  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_1__.staggerContainer,
        initial: "hidden",
        whileInView: "show",
        viewport: {
            once: false,
            amount: 0.25
        },
        children: [
            subTitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_1__.textVariant)(.05),
                    className: "text-white text-center text-sm sm:text-xl lg:text-2xl  font-bold mr-1 inline-block",
                    children: subTitle
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_1__.textVariant)(.1),
                className: `p-1.5 mb-0 heading ${size === "md" ? "text-5xl" : ""} `,
                children: title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _SectionTitle__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7569);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SectionTitle__WEBPACK_IMPORTED_MODULE_0__]);
_SectionTitle__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8287:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2097);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3958);
/* harmony import */ var lib_json_ld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8741);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3473);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9010);
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2722);
/* harmony import */ var _components_CallToActionFramerHOC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_SectionTitle__WEBPACK_IMPORTED_MODULE_7__, _components_CallToActionFramerHOC__WEBPACK_IMPORTED_MODULE_8__]);
([components_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_SectionTitle__WEBPACK_IMPORTED_MODULE_7__, _components_CallToActionFramerHOC__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const DynamicPortfolio = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 221).then(__webpack_require__.bind(__webpack_require__, 7221)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../components/Younet/Portfolio"
        ]
    },
    loading: ()=>"Loading"
});
const DynamicServices = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 609).then(__webpack_require__.bind(__webpack_require__, 2609)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../components/Younet/Services"
        ]
    },
    loading: ()=>"Loading"
});
const DynamicBrands = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 780).then(__webpack_require__.bind(__webpack_require__, 6780)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../components/Younet/Brands"
        ]
    },
    loading: ()=>"Loading"
});
const DynamicNewsletter = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 865).then(__webpack_require__.bind(__webpack_require__, 8865)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../components/Younet/NewsLetter"
        ]
    },
    loading: ()=>"Loading"
});
const DynamicLatestPosts = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 732).then(__webpack_require__.bind(__webpack_require__, 5732)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../components/LatestPosts"
        ]
    },
    loading: ()=>"Loading"
});
function Home({ services , brands , projectData , posts  }) {
    const { metadata ={}  } = (0,hooks_use_site__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)();
    const { title , description  } = metadata;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        classes: "bg-gradient-body",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_json_ld__WEBPACK_IMPORTED_MODULE_3__/* .WebsiteJsonLd */ .MV, {
                siteTitle: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "header-content flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            title: "Growing Brands Online",
                            subTitle: "Results-Driven Creative Digital Agency Focused On"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CallToActionFramerHOC__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            className: "request-quote cursor-pointer",
                            onClick: ()=>{},
                            children: "see our services"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicServices, {
                services: services
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicPortfolio, {
                projects: projectData.projects,
                projectCategories: projectData.categories,
                category: 8
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicBrands, {
                brands: brands
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicLatestPosts, {
                posts: posts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicNewsletter, {})
        ]
    });
}
async function getStaticProps() {
    const { services  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getServices */ .U2)(13);
    const { brands  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getBrands */ .vp)();
    const { projects , categories  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getProjects */ .mW)(8);
    const { posts  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getRecentPosts */ .no)({
        count: 3,
        queryIncludes: "archive"
    });
    return {
        revalidate: 5,
        props: {
            services,
            brands,
            projectData: {
                projects,
                categories
            },
            posts
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 2791:
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,152,550,473,125,741], () => (__webpack_exec__(8287)));
module.exports = __webpack_exports__;

})();