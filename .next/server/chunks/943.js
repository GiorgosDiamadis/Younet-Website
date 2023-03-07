exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 7874:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Pagination_nav__6M51B",
	"active": "Pagination_active__zxT4y",
	"pages": "Pagination_pages__hZbzz",
	"prev": "Pagination_prev__En2ts",
	"dots": "Pagination_dots__B1lgQ"
};


/***/ }),

/***/ 1105:
/***/ ((module) => {

// Exports
module.exports = {
	"postCard": "PostCard_postCard__Jrp1b",
	"postCardSticky": "PostCard_postCardSticky__o_Xl8",
	"postCardTitle": "PostCard_postCardTitle__rhEZE",
	"postCardContent": "PostCard_postCardContent__3GwQH",
	"postCardMetadata": "PostCard_postCardMetadata__urTx_"
};


/***/ }),

/***/ 5208:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 8844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ SectionTitle_SectionTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/SectionTitle/SectionTitle.js


const SectionTitle = ({ title , subTitle , size ="lg"  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            subTitle && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-white text-center text-sm sm:text-xl lg:text-2xl  font-bold mr-1 inline-block",
                    children: subTitle
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: `p-1.5 mb-0 heading ${size === "md" ? "text-5xl" : ""} `,
                children: title
            })
        ]
    });
};
/* harmony default export */ const SectionTitle_SectionTitle = (SectionTitle);

;// CONCATENATED MODULE: ./src/components/SectionTitle/index.js



/***/ }),

/***/ 3943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TemplateArchive)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(2791);
// EXTERNAL MODULE: ./src/lib/json-ld.js
var json_ld = __webpack_require__(8741);
// EXTERNAL MODULE: ./src/lib/site.js + 1 modules
var site = __webpack_require__(7027);
// EXTERNAL MODULE: ./src/hooks/use-site.js
var use_site = __webpack_require__(2097);
// EXTERNAL MODULE: ./src/components/Layout/index.js + 14 modules
var Layout = __webpack_require__(7426);
// EXTERNAL MODULE: ./src/components/Header/index.js + 1 modules
var Header = __webpack_require__(9010);
// EXTERNAL MODULE: ./src/components/Section/index.js + 1 modules
var Section = __webpack_require__(6126);
// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(3125);
// EXTERNAL MODULE: ./src/components/SectionTitle/index.js + 1 modules
var SectionTitle = __webpack_require__(8844);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/posts.js + 1 modules
var posts = __webpack_require__(3958);
// EXTERNAL MODULE: ./src/components/Metadata/index.js + 1 modules
var Metadata = __webpack_require__(572);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./src/components/PostCard/PostCard.module.scss
var PostCard_module = __webpack_require__(1105);
var PostCard_module_default = /*#__PURE__*/__webpack_require__.n(PostCard_module);
;// CONCATENATED MODULE: ./src/components/PostCard/PostCard.js






const PostCard = ({ post , options ={}  })=>{
    const { title , excerpt , slug , date , author , categories , isSticky =false  } = post;
    const { excludeMetadata =[]  } = options;
    const metadata = {};
    if (!excludeMetadata.includes("author")) {
        metadata.author = author;
    }
    if (!excludeMetadata.includes("date")) {
        metadata.date = date;
    }
    if (!excludeMetadata.includes("categories")) {
        metadata.categories = categories;
    }
    let postCardStyle = (PostCard_module_default()).postCard;
    if (isSticky) {
        postCardStyle = `${postCardStyle} ${(PostCard_module_default()).postCardSticky}`;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: postCardStyle,
        children: [
            isSticky && /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaMapPin, {
                "aria-label": "Sticky Post"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                legacyBehavior: true,
                href: (0,posts/* postPathBySlug */.F3)(slug),
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (PostCard_module_default()).postCardTitle,
                        dangerouslySetInnerHTML: {
                            __html: title
                        }
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Metadata/* default */.Z, {
                className: (PostCard_module_default()).postCardMetadata,
                ...metadata
            }),
            excerpt && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (PostCard_module_default()).postCardContent,
                dangerouslySetInnerHTML: {
                    __html: (0,posts/* sanitizeExcerpt */.$4)(excerpt)
                }
            })
        ]
    });
};
/* harmony default export */ const PostCard_PostCard = (PostCard);

;// CONCATENATED MODULE: ./src/components/PostCard/index.js


// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(4147);
// EXTERNAL MODULE: external "react-icons/gr"
var gr_ = __webpack_require__(8547);
// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
// EXTERNAL MODULE: ./src/components/Pagination/Pagination.module.scss
var Pagination_module = __webpack_require__(7874);
var Pagination_module_default = /*#__PURE__*/__webpack_require__.n(Pagination_module);
;// CONCATENATED MODULE: ./src/components/Pagination/Pagination.js







const MAX_NUM_PAGES = 9;
const { homepage =""  } = package_0;
const Pagination = ({ pagesCount , currentPage , basePath , addCanonical =true  })=>{
    const path = `${basePath}/page/`;
    const hasPreviousPage = pagesCount > 1 && currentPage > 1;
    const hasNextPage = pagesCount > 1 && currentPage < pagesCount;
    let hasPrevDots = false;
    let hasNextDots = false;
    function getPages() {
        let pages = pagesCount;
        let start = 0;
        // If the number of pages exceeds the max
        if (pagesCount > MAX_NUM_PAGES) {
            // Set number of pages to the max
            pages = MAX_NUM_PAGES;
            const half = Math.ceil(MAX_NUM_PAGES / 2);
            const isHead = currentPage <= half;
            const isTail = currentPage > pagesCount - half;
            hasNextDots = !isTail;
            // If the current page is at the head, the start variable remains 0
            if (!isHead) {
                hasPrevDots = true;
                // If the current page is at the tail, the start variable is set to
                // the last chunk. Otherwise the start variable will place the current
                // page at the middle
                start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
            }
        }
        return [
            ...new Array(pages)
        ].map((_, i)=>i + 1 + start);
    }
    const pages = getPages();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_helmet_.Helmet, {
                children: [
                    addCanonical && !hasPreviousPage && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: `${homepage}${basePath}`
                    }),
                    hasPreviousPage && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "prev",
                        href: `${homepage}${path}${currentPage - 1}`
                    }),
                    hasNextPage && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "next",
                        href: `${homepage}${path}${currentPage + 1}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (Pagination_module_default()).nav,
                role: "navigation",
                "aria-label": "Pagination Navigation",
                children: [
                    hasPreviousPage && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        legacyBehavior: true,
                        href: `${path}${currentPage - 1}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: (Pagination_module_default()).prev,
                            "aria-label": "Goto Previous Page",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrPrevious, {}),
                                " Previous"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (Pagination_module_default()).pages,
                        children: [
                            hasPrevDots && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Pagination_module_default()).dots,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(hi_.HiOutlineDotsHorizontal, {
                                    "aria-label": `Navigation to pages 1-${pages[0] - 1} hidden`
                                })
                            }),
                            pages.map((page)=>{
                                const active = page === currentPage;
                                return active ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (Pagination_module_default()).active,
                                        "aria-label": `Current Page, Page ${page}`,
                                        "aria-current": "true",
                                        children: page
                                    })
                                }, page) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: `${path}${page}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            "aria-label": `Goto Page ${page}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: page
                                            })
                                        })
                                    })
                                }, page);
                            }),
                            hasNextDots && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Pagination_module_default()).dots,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(hi_.HiOutlineDotsHorizontal, {
                                    "aria-label": `Navigation to pages ${pages[pages.length - 1] + 1}-${pagesCount} hidden`
                                })
                            })
                        ]
                    }),
                    hasNextPage && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        legacyBehavior: true,
                        href: `${path}${currentPage + 1}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: (Pagination_module_default()).next,
                            "aria-label": "Goto Next Page",
                            children: [
                                "Next ",
                                /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrNext, {})
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Pagination_Pagination = (Pagination);

// EXTERNAL MODULE: ./src/styles/templates/Archive.module.scss
var Archive_module = __webpack_require__(5208);
var Archive_module_default = /*#__PURE__*/__webpack_require__.n(Archive_module);
;// CONCATENATED MODULE: ./src/templates/archive.js













const DEFAULT_POST_OPTIONS = {};
function TemplateArchive({ title ="Archive" , Title , posts , postOptions =DEFAULT_POST_OPTIONS , slug , metadata , pagination  }) {
    const { metadata: siteMetadata = {}  } = (0,use_site/* default */.ZP)();
    if (true) {
        metadata.title = `${title} - ${siteMetadata.title}`;
        metadata.og.title = metadata.title;
        metadata.twitter.title = metadata.title;
    }
    const helmetSettings = (0,site/* helmetSettingsFromMetadata */.iB)(metadata);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_helmet_.Helmet, {
                ...helmetSettings
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(json_ld/* WebpageJsonLd */.PA, {
                title: title,
                description: metadata.description,
                siteTitle: siteMetadata.title,
                slug: slug
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: Title || title
                        }),
                        metadata.description && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Archive_module_default()).archiveDescription,
                            dangerouslySetInnerHTML: {
                                __html: metadata.description
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
                    children: Array.isArray(posts) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (Archive_module_default()).posts,
                                children: posts.map((post)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PostCard_PostCard, {
                                            post: post,
                                            options: postOptions
                                        })
                                    }, post.slug);
                                })
                            }),
                            pagination && /*#__PURE__*/ jsx_runtime_.jsx(Pagination_Pagination, {
                                currentPage: pagination?.currentPage,
                                pagesCount: pagination?.pagesCount,
                                basePath: pagination?.basePath
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ })

};
;