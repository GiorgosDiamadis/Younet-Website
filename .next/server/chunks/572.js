exports.id = 572;
exports.ids = [572];
exports.modules = {

/***/ 7247:
/***/ ((module) => {

// Exports
module.exports = {
	"metadata": "Metadata_metadata__DBDXc",
	"metadataAuthor": "Metadata_metadataAuthor__ytsac",
	"metadataCategories": "Metadata_metadataCategories__yOeC4",
	"metadataSticky": "Metadata_metadataSticky__kmI14"
};


/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Metadata_Metadata)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/categories.js + 1 modules
var lib_categories = __webpack_require__(7706);
// EXTERNAL MODULE: ./src/lib/users.js + 1 modules
var users = __webpack_require__(5584);
// EXTERNAL MODULE: ./src/lib/datetime.js
var datetime = __webpack_require__(537);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(1791);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./src/components/Metadata/Metadata.module.scss
var Metadata_module = __webpack_require__(7247);
var Metadata_module_default = /*#__PURE__*/__webpack_require__.n(Metadata_module);
;// CONCATENATED MODULE: ./src/components/Metadata/Metadata.js








const DEFAULT_METADATA_OPTIONS = {
    compactCategories: true
};
const Metadata = ({ className , author , date , categories , options =DEFAULT_METADATA_OPTIONS , isSticky =false  })=>{
    const metadataClassName = new classname/* default */.Z((Metadata_module_default()).metadata);
    metadataClassName.addIf(className, className);
    const { compactCategories  } = options;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: metadataClassName.toString(),
        style: {
            width: "fit-content",
            margin: "auto"
        },
        children: [
            author && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (Metadata_module_default()).metadataAuthor,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
                    children: [
                        author.avatar && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            width: author.avatar.width,
                            height: author.avatar.height,
                            src: author.avatar.url,
                            alt: "Author Avatar"
                        }),
                        "By",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            legacyBehavior: true,
                            href: (0,users/* authorPathByName */.h$)(author.name),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                rel: "author",
                                children: author.name
                            })
                        })
                    ]
                })
            }),
            date && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                    pubdate: "pubdate",
                    dateTime: date,
                    children: (0,datetime/* formatDate */.p)(date)
                })
            }),
            Array.isArray(categories) && categories[0] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: (Metadata_module_default()).metadataCategories,
                children: [
                    compactCategories && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        title: categories.map(({ name  })=>name).join(", "),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: (0,lib_categories/* categoryPathBySlug */.I5)(categories[0].slug),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: categories[0].name
                                })
                            }),
                            categories.length > 1 && " and more"
                        ]
                    }),
                    !compactCategories && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: categories.map((category)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: (0,lib_categories/* categoryPathBySlug */.I5)(category.slug),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: category.name
                                    })
                                })
                            }, category.slug);
                        })
                    })
                ]
            }),
            isSticky && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (Metadata_module_default()).metadataSticky,
                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaMapPin, {
                    "aria-label": "Sticky Post"
                })
            })
        ]
    });
};
/* harmony default export */ const Metadata_Metadata = (Metadata);

;// CONCATENATED MODULE: ./src/components/Metadata/index.js



/***/ })

};
;