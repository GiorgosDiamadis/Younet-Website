(() => {
var exports = {};
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 9644:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Title_title__RWKyi"
};


/***/ }),

/***/ 886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Title_Title)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(1791);
// EXTERNAL MODULE: ./src/components/Title/Title.module.scss
var Title_module = __webpack_require__(9644);
var Title_module_default = /*#__PURE__*/__webpack_require__.n(Title_module);
;// CONCATENATED MODULE: ./src/components/Title/Title.js



const Title = ({ className , title , thumbnail  })=>{
    const titleClassName = new classname/* default */.Z((Title_module_default()).title);
    titleClassName.addIf(className, className);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: titleClassName.toString(),
        children: [
            thumbnail && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: thumbnail.url,
                alt: "",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: title
            })
        ]
    });
};
/* harmony default export */ const Title_Title = (Title);

;// CONCATENATED MODULE: ./src/components/Title/index.js



/***/ }),

/***/ 1071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Author),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5584);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3958);
/* harmony import */ var lib_json_ld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8741);
/* harmony import */ var hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7322);
/* harmony import */ var templates_archive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3943);
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(886);








function Author({ user , posts  }) {
    const { title , name , avatar , description , slug  } = user;
    const { metadata  } = (0,hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        metadata: {
            ...user,
            title,
            description: description || user.og?.description || `Read ${posts.length} posts from ${name}`
        }
    });
    const postOptions = {
        excludeMetadata: [
            "author"
        ]
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_json_ld__WEBPACK_IMPORTED_MODULE_3__/* .AuthorJsonLd */ .Yh, {
                author: user
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_archive__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: name,
                Title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Title__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    title: name,
                    thumbnail: avatar
                }),
                posts: posts,
                postOptions: postOptions,
                slug: slug,
                metadata: metadata
            })
        ]
    });
}
async function getStaticProps({ params ={}  } = {}) {
    const { user  } = await (0,lib_users__WEBPACK_IMPORTED_MODULE_1__/* .getUserByNameSlug */ .Wt)(params?.slug);
    if (!user) {
        return {
            props: {},
            notFound: true
        };
    }
    const { posts  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getPostsByAuthorSlug */ .DI)({
        slug: user?.slug,
        queryIncludes: "archive"
    });
    return {
        props: {
            user,
            posts
        },
        revalidate: 5
    };
}
async function getStaticPaths() {
    // By default, we don't render any Author pages as they're
    // we're considering them non-critical pages
    // To enable pre-rendering of Author pages:
    // 1. Add import to the top of the file
    //
    // 2. Uncomment the below
    //
    const { authors  } = await (0,lib_users__WEBPACK_IMPORTED_MODULE_1__/* .getAllAuthors */ .uk)();
    const paths = authors.map((author)=>{
        const { name  } = author;
        return {
            params: {
                slug: (0,lib_users__WEBPACK_IMPORTED_MODULE_1__/* .userSlugByName */ .d4)(name)
            }
        };
    });
    // 3. Update `paths` in the return statement below to reference the `paths` constant above
    return {
        paths: paths,
        fallback: "blocking"
    };
}


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

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 8547:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/gr");

/***/ }),

/***/ 1111:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/hi");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,550,251,958,391,706,97,572,943], () => (__webpack_exec__(1071)));
module.exports = __webpack_exports__;

})();