exports.id = 865;
exports.ids = [865];
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

/***/ 8865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewsLetter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8844);
/* harmony import */ var _WithTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8589);
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4475);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6126);





function NewsLetter() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: "max-h-[300px]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-col lg:flex-row flex justify-between items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full lg:w-1/3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            size: "md",
                            title: " Sign Up To Get The Latest Digital Trends"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full lg:w-1/2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            id: "form",
                            noValidate: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative z-0 w-full mt-10 lg:mt-0 flex-col lg:flex-row flex gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_WithTooltip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        className: "relative w-full",
                                        tooltipContent: "Διεύθυνση ηλεκτρονικού ταχυδρομείου",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                name: "name",
                                                id: "name",
                                                placeholder: " ",
                                                required: true,
                                                className: "p-4 h-[50px] lg:h-[70px] rounded-lg block w-full px-0 mt-0 bg-transparent border-2 appearance-none focus:outline-none focus:ring-0 focus:border-highlighted border-gray-200"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "name",
                                                className: "absolute duration-300 top-1/2 -translate-y-1/2 left-3 -z-1 origin-0 text-white",
                                                children: "Email"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CallToAction__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        className: "lg:w-auto w-full",
                                        onClick: ()=>{},
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "request-quote text-center cursor-pointer",
                                            children: "εγγραφη"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm text-red-600 hidden absolute",
                                        id: "error",
                                        children: "Name is required"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-2xl text-white text-center mt-10",
                children: "Κάνε εγγραφή στο Newsletter μας και μάθε πρώτος τις τελευταίες εξελίξεις στον κόσμο του Digital."
            })
        ]
    });
}


/***/ })

};
;