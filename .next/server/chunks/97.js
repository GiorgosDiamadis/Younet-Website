exports.id = 97;
exports.ids = [97];
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

/***/ 7322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePageMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2097);
/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7027);




function usePageMetadata({ metadata: pageMetadata  }) {
    const { homepage , metadata: defaultMetadata  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(hooks_use_site__WEBPACK_IMPORTED_MODULE_2__/* .SiteContext */ .DN);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const metadata = (0,lib_site__WEBPACK_IMPORTED_MODULE_3__/* .constructPageMetadata */ .z0)(defaultMetadata, pageMetadata, {
        homepage,
        router
    });
    return {
        metadata
    };
}


/***/ })

};
;