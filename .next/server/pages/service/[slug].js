(() => {
var exports = {};
exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 8867:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 9274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Services),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3958);
/* harmony import */ var lib_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7706);
/* harmony import */ var lib_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(537);
/* harmony import */ var lib_json_ld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8741);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7027);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2097);
/* harmony import */ var hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7322);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7426);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9010);
/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6126);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3125);
/* harmony import */ var components_Content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8732);
/* harmony import */ var components_Metadata__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(572);
/* harmony import */ var components_FeaturedImage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8320);
/* harmony import */ var styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8867);
/* harmony import */ var styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_17__);


















function Services({ post , socialImage , related  }) {
    const { title , metaTitle , description , content , date , author , categories , modified , featuredImage , isSticky =false  } = post;
    const { metadata: siteMetadata = {} , homepage  } = (0,hooks_use_site__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)();
    if (!post.og) {
        post.og = {};
    }
    post.og.imageUrl = `${homepage}${socialImage}`;
    post.og.imageSecureUrl = post.og.imageUrl;
    post.og.imageWidth = 2000;
    post.og.imageHeight = 1000;
    const { metadata  } = (0,hooks_use_page_metadata__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({
        metadata: {
            ...post,
            title: metaTitle,
            description: description || post.og?.description || `Read more about ${title}`
        }
    });
    if (true) {
        metadata.title = `${title} - ${siteMetadata.title}`;
        metadata.og.title = metadata.title;
        metadata.twitter.title = metadata.title;
    }
    const metadataOptions = {
        compactCategories: false
    };
    const { posts: relatedPostsList , title: relatedPostsTitle  } = related || {};
    const helmetSettings = (0,lib_site__WEBPACK_IMPORTED_MODULE_7__/* .helmetSettingsFromMetadata */ .iB)(metadata);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
                ...helmetSettings
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_json_ld__WEBPACK_IMPORTED_MODULE_6__/* .ArticleJsonLd */ .dX, {
                post: post,
                siteTitle: siteMetadata.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Header__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                children: [
                    featuredImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_FeaturedImage__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        ...featuredImage,
                        src: featuredImage.sourceUrl,
                        dangerouslySetInnerHTML: featuredImage.caption
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_17___default().title),
                        dangerouslySetInnerHTML: {
                            __html: title
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Metadata__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        className: (styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_17___default().postMetadata),
                        date: date,
                        author: author,
                        categories: categories,
                        options: metadataOptions,
                        isSticky: isSticky
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Content__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_17___default().content),
                            dangerouslySetInnerHTML: {
                                __html: content
                            }
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                className: (styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_17___default().postFooter),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: (styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_17___default().postModified),
                            children: [
                                "Last updated on ",
                                (0,lib_datetime__WEBPACK_IMPORTED_MODULE_5__/* .formatDate */ .p)(modified),
                                "."
                            ]
                        }),
                        Array.isArray(relatedPostsList) && relatedPostsList.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (styles_pages_Post_module_scss__WEBPACK_IMPORTED_MODULE_17___default().relatedPosts),
                            children: [
                                relatedPostsTitle.name ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "More from",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            legacyBehavior: true,
                                            href: relatedPostsTitle.link,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: relatedPostsTitle.name
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "More Posts"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    children: relatedPostsList.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                legacyBehavior: true,
                                                href: (0,lib_posts__WEBPACK_IMPORTED_MODULE_3__/* .postPathBySlug */ .F3)(post.slug),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: post.title
                                                })
                                            })
                                        }, post.title))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
async function getStaticProps({ params ={}  } = {}) {
    const { post  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_3__/* .getPostBySlug */ .zQ)(params?.slug);
    if (!post) {
        return {
            props: {},
            notFound: true
        };
    }
    const { categories , databaseId: postId  } = post;
    const props = {
        post,
        socialImage: `${"/images/og"}/${params?.slug}.png`
    };
    const { category: relatedCategory , posts: relatedPosts  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_3__/* .getRelatedPosts */ .EE)(categories, postId) || {};
    const hasRelated = relatedCategory && Array.isArray(relatedPosts) && relatedPosts.length;
    if (hasRelated) {
        props.related = {
            posts: relatedPosts,
            title: {
                name: relatedCategory.name || null,
                link: (0,lib_categories__WEBPACK_IMPORTED_MODULE_4__/* .categoryPathBySlug */ .I5)(relatedCategory.slug)
            }
        };
    }
    return {
        props,
        revalidate: 5
    };
}
async function getStaticPaths() {
    const { posts  } = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_3__/* .getRecentPosts */ .no)({
        count: 5,
        queryIncludes: "index"
    });
    const paths = posts.filter(({ slug  })=>typeof slug === "string").map(({ slug  })=>({
            params: {
                slug
            }
        }));
    return {
        paths,
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
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,550,251,958,391,706,97,572,363], () => (__webpack_exec__(9274)));
module.exports = __webpack_exports__;

})();