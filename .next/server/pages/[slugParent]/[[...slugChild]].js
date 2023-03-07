(() => {
var exports = {};
exports.id = 651;
exports.ids = [651];
exports.modules = {

/***/ 7199:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbs": "Breadcrumbs_breadcrumbs__uFbGd"
};


/***/ }),

/***/ 4191:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 7858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(2791);
// EXTERNAL MODULE: ./src/lib/pages.js + 1 modules
var lib_pages = __webpack_require__(6374);
// EXTERNAL MODULE: ./src/lib/json-ld.js
var json_ld = __webpack_require__(8741);
// EXTERNAL MODULE: ./src/lib/site.js + 1 modules
var site = __webpack_require__(7027);
// EXTERNAL MODULE: ./src/hooks/use-site.js
var use_site = __webpack_require__(2097);
// EXTERNAL MODULE: ./src/hooks/use-page-metadata.js
var use_page_metadata = __webpack_require__(7322);
// EXTERNAL MODULE: ./src/components/Layout/index.js + 14 modules
var Layout = __webpack_require__(7426);
// EXTERNAL MODULE: ./src/components/Header/index.js + 1 modules
var Header = __webpack_require__(9010);
// EXTERNAL MODULE: ./src/components/Content/index.js + 1 modules
var Content = __webpack_require__(8732);
// EXTERNAL MODULE: ./src/components/Section/index.js + 1 modules
var Section = __webpack_require__(6126);
// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(3125);
// EXTERNAL MODULE: ./src/components/FeaturedImage/index.js + 3 modules
var FeaturedImage = __webpack_require__(8320);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(1791);
// EXTERNAL MODULE: ./src/components/Breadcrumbs/Breadcrumbs.module.scss
var Breadcrumbs_module = __webpack_require__(7199);
var Breadcrumbs_module_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_module);
;// CONCATENATED MODULE: ./src/components/Breadcrumbs/Breadcrumbs.js




const Breadcrumbs = ({ className , breadcrumbs  })=>{
    const breadcrumbsClassName = new classname/* default */.Z((Breadcrumbs_module_default()).breadcrumbs);
    breadcrumbsClassName.addIf(className, className);
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: breadcrumbsClassName.toString(),
        children: breadcrumbs.map(({ id , title , uri  })=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    !uri && title,
                    uri && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        legacyBehavior: true,
                        href: uri,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: title
                        })
                    })
                ]
            }, id);
        })
    });
};
/* harmony default export */ const Breadcrumbs_Breadcrumbs = (Breadcrumbs);

;// CONCATENATED MODULE: ./src/components/Breadcrumbs/index.js


// EXTERNAL MODULE: ./src/styles/pages/Page.module.scss
var Page_module = __webpack_require__(4191);
var Page_module_default = /*#__PURE__*/__webpack_require__.n(Page_module);
;// CONCATENATED MODULE: ./src/pages/[slugParent]/[[...slugChild]].js
















function Page({ page , breadcrumbs  }) {
    const { title , metaTitle , description , slug , content , featuredImage , children  } = page;
    const { metadata: siteMetadata = {}  } = (0,use_site/* default */.ZP)();
    const { metadata  } = (0,use_page_metadata/* default */.Z)({
        metadata: {
            ...page,
            title: metaTitle,
            description: description || page.og?.description || `Read more about ${title}`
        }
    });
    if (true) {
        metadata.title = `${title} - ${siteMetadata.title}`;
        metadata.og.title = metadata.title;
        metadata.twitter.title = metadata.title;
    }
    const hasChildren = Array.isArray(children) && children.length > 0;
    const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;
    const helmetSettings = (0,site/* helmetSettingsFromMetadata */.iB)(metadata);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_helmet_.Helmet, {
                ...helmetSettings
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(json_ld/* WebpageJsonLd */.PA, {
                title: metadata.title,
                description: metadata.description,
                siteTitle: siteMetadata.title,
                slug: slug
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header/* default */.Z, {
                children: [
                    hasBreadcrumbs && /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumbs_Breadcrumbs, {
                        breadcrumbs: breadcrumbs
                    }),
                    featuredImage && /*#__PURE__*/ jsx_runtime_.jsx(FeaturedImage/* default */.Z, {
                        ...featuredImage,
                        src: featuredImage.sourceUrl,
                        dangerouslySetInnerHTML: featuredImage.caption
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Page_module_default()).title,
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Page_module_default()).content,
                                dangerouslySetInnerHTML: {
                                    __html: content
                                }
                            })
                        })
                    }),
                    hasChildren && /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
                        className: (Page_module_default()).sectionChildren,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Page_module_default()).childrenHeader,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: children.map((child)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: child.uri,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: child.title
                                                    })
                                                })
                                            }, child.id);
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}
async function getStaticProps({ params ={}  } = {}) {
    const { slugParent , slugChild  } = params;
    // We can use the URI to look up our page and subsequently its ID, so
    // we can first contruct our URI from the page params
    let pageUri = `/${slugParent}/`;
    // We only want to apply deeper paths to the URI if we actually have
    // existing children
    if (Array.isArray(slugChild) && slugChild.length > 0) {
        pageUri = `${pageUri}${slugChild.join("/")}/`;
    }
    const { page  } = await (0,lib_pages/* getPageByUri */.Cg)(pageUri);
    if (!page) {
        return {
            props: {},
            notFound: true
        };
    }
    // In order to show the proper breadcrumbs, we need to find the entire
    // tree of pages. Rather than querying every segment, the query should
    // be cached for all pages, so we can grab that and use it to create
    // our trail
    const { pages  } = await (0,lib_pages/* getAllPages */.K0)({
        queryIncludes: "index"
    });
    const breadcrumbs = (0,lib_pages/* getBreadcrumbsByUri */.pJ)(pageUri, pages);
    return {
        props: {
            page,
            breadcrumbs
        },
        revalidate: 5
    };
}
async function getStaticPaths() {
    const { pages  } = await (0,lib_pages/* getAllPages */.K0)({
        queryIncludes: "index"
    });
    // Take all the pages and create path params. The slugParent will always be
    // the top level parent page, where the slugChild will be an array of the
    // remaining segments to make up the path or URI
    // We also filter out the `/` homepage as it will conflict with index.js if
    // as they have the same path, which will fail the build
    const paths = pages.filter(({ uri  })=>typeof uri === "string" && uri !== "/").map(({ uri  })=>{
        const segments = uri.split("/").filter((seg)=>seg !== "");
        return {
            params: {
                slugParent: segments.shift(),
                slugChild: segments
            }
        };
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [270,676,61,550,251,958,391,97,363], () => (__webpack_exec__(7858)));
module.exports = __webpack_exports__;

})();