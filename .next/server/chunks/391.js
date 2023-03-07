exports.id = 391;
exports.ids = [391];
exports.modules = {

/***/ 2298:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__FGbDi",
	"header": "Header_header__NLhag"
};


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

/***/ 8741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MV": () => (/* binding */ WebsiteJsonLd),
/* harmony export */   "PA": () => (/* binding */ WebpageJsonLd),
/* harmony export */   "Yh": () => (/* binding */ AuthorJsonLd),
/* harmony export */   "dX": () => (/* binding */ ArticleJsonLd)
/* harmony export */ });
/* unused harmony export LogoJsonLd */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5584);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3958);
/* harmony import */ var lib_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6374);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4147);






function ArticleJsonLd({ post ={} , siteTitle =""  }) {
    const { homepage ="" , faviconPath ="/favicon.ico"  } = _package_json__WEBPACK_IMPORTED_MODULE_5__;
    const { title , slug , excerpt , date , author , categories , modified , featuredImage  } = post;
    const path = (0,lib_posts__WEBPACK_IMPORTED_MODULE_3__/* .postPathBySlug */ .F3)(slug);
    const datePublished = !!date && new Date(date);
    const dateModified = !!modified && new Date(modified);
    /** TODO - As image is a recommended field would be interesting to have a
   * default image in case there is no featuredImage comming from WP,
   * like the open graph social image
   * */ const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${homepage}${path}`
        },
        headline: title,
        image: [
            featuredImage?.sourceUrl
        ],
        datePublished: datePublished ? datePublished.toISOString() : "",
        dateModified: dateModified ? dateModified.toISOString() : datePublished.toISOString(),
        description: excerpt,
        keywords: [
            categories.map(({ name  })=>`${name}`).join(", ")
        ],
        copyrightYear: datePublished ? datePublished.getFullYear() : "",
        author: {
            "@type": "Person",
            name: author?.name
        },
        publisher: {
            "@type": "Organization",
            name: siteTitle,
            logo: {
                "@type": "ImageObject",
                url: `${homepage}${faviconPath}`
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
        encodeSpecialCharacters: false,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
            type: "application/ld+json",
            children: JSON.stringify(jsonLd)
        })
    });
}
function WebsiteJsonLd({ siteTitle =""  }) {
    const { homepage =""  } = _package_json__WEBPACK_IMPORTED_MODULE_5__;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteTitle,
        url: homepage,
        copyrightYear: new Date().getFullYear(),
        potentialAction: {
            "@type": "SearchAction",
            target: `${homepage}/search/?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
        encodeSpecialCharacters: false,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
            type: "application/ld+json",
            children: JSON.stringify(jsonLd)
        })
    });
}
function WebpageJsonLd({ title ="" , description ="" , siteTitle ="" , slug =""  }) {
    const { homepage =""  } = _package_json__WEBPACK_IMPORTED_MODULE_5__;
    const path = (0,lib_pages__WEBPACK_IMPORTED_MODULE_4__/* .pagePathBySlug */ .yA)(slug);
    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        name: title,
        description: description,
        url: `${homepage}${path}`,
        publisher: {
            "@type": "ProfilePage",
            name: siteTitle
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
        encodeSpecialCharacters: false,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
            type: "application/ld+json",
            children: JSON.stringify(jsonLd)
        })
    });
}
function AuthorJsonLd({ author ={}  }) {
    const { homepage =""  } = _package_json__WEBPACK_IMPORTED_MODULE_5__;
    const { name , avatar , description  } = author;
    const path = (0,lib_users__WEBPACK_IMPORTED_MODULE_2__/* .authorPathByName */ .h$)(name);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: name,
        image: avatar?.url,
        url: `${homepage}${path}`,
        description: description
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
        encodeSpecialCharacters: false,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
            type: "application/ld+json",
            children: JSON.stringify(jsonLd)
        })
    });
}
function LogoJsonLd() {
    const { homepage ="" , faviconPath ="/favicon.ico"  } = config;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        url: `${homepage}`,
        logo: `${homepage}${faviconPath}`
    };
    return /*#__PURE__*/ _jsx(Helmet, {
        encodeSpecialCharacters: false,
        children: /*#__PURE__*/ _jsx("script", {
            type: "application/ld+json",
            children: JSON.stringify(jsonLd)
        })
    });
}


/***/ })

};
;