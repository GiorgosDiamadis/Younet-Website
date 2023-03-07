exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 3616:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 6126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Section_Section)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(1791);
// EXTERNAL MODULE: ./src/components/Section/Section.module.scss
var Section_module = __webpack_require__(3616);
var Section_module_default = /*#__PURE__*/__webpack_require__.n(Section_module);
;// CONCATENATED MODULE: ./src/components/Section/Section.js



const Section = ({ children , className , ...rest })=>{
    const sectionClassName = new classname/* default */.Z((Section_module_default()).section);
    sectionClassName.addIf(className, className);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: className,
        ...rest,
        children: children
    });
};
/* harmony default export */ const Section_Section = (Section);

;// CONCATENATED MODULE: ./src/components/Section/index.js



/***/ }),

/***/ 5378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Portfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/SectionTitle/index.js + 1 modules
var SectionTitle = __webpack_require__(8844);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/portfolioimage.png
/* harmony default export */ const portfolioimage = ({"src":"/_next/static/media/portfolioimage.95ff6310.png","height":540,"width":285,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAk0lEQVR4nAGIAHf/AaOi2ITs+f4p8PLmKtjqABsBhHrP/wYT/AAuEdAAyvcn/wH39vv89fXyAA4MCgIAAgH+Af/////b290AFBUUAAgICP0BzbvV//LuBAAAAP0AHy0L/QHBptH84NHzAO/l9gIlOOz9Afj2+//y8vYAAwAEAAAC+P8B9Pf4gPz49Cn69e8rCAwTGw6rRyCw/N8JAAAAAElFTkSuQmCC","blurWidth":4,"blurHeight":8});
// EXTERNAL MODULE: ./src/components/Section/index.js + 1 modules
var Section = __webpack_require__(6126);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Younet/Portfolio.js






function Portfolio({ initial  }) {
    const [projects, setProjects] = (0,external_react_.useState)([]);
    const [projectCategory, setProjectCategory] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        if (projectCategory !== 0) {
            console.log("loading projects " + projectCategory);
        }
    }, [
        projectCategory
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                title: "Featured Web Design Launches"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "portfolio-container mt-10 1150px:w-full w-3/4 m-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "portfolio-item group relative ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                "--bg-image": "url('https://dev.younet.digital/cms/wp-content/uploads/2023/03/Creative-Digital-Agency-eCommerce-Projects-Dognomics.webp')"
                            },
                            className: "portfolio-item-details lg:group-hover:rotate-y-minus35 p-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col relative group w-full h-full items-end ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "lg:absolute left-0 bottom-0 lg:group-hover:-translate-y-32 transition-all duration-500 w-full lg:w-auto text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: " text-white relative  text-5xl font-bold ",
                                                children: "SOME LOGO"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "text-white relative  text-3xl font-bold mt-3 text-center lg:text-left ",
                                                children: "University Web Design"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "lg:absolute left-0 bottom-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "  text-xl w-3/4 relative opacity-100 lg:opacity-0 duration-500 transition-all text-center lg:text-left lg:group-hover:opacity-100",
                                                children: "Medill makes a great impression with superior site planning"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "request-quote relative cursor-pointer text-center lg:group-hover:opacity-100 w-1/2  1150px:w-3/4  opacity-100 lg:opacity-0 duration-500 transition-all",
                                                children: "Go to Website"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "angled-image 1150px:w-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: portfolioimage,
                                alt: "alt",
                                loading: "lazy"
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;