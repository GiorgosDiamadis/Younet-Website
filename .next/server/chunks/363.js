exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 7349:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Content_content__HI96t"
};


/***/ }),

/***/ 2826:
/***/ ((module) => {

// Exports
module.exports = {
	"featuredImage": "FeaturedImage_featuredImage__bheWa"
};


/***/ }),

/***/ 3363:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "Image_image__1H4C3"
};


/***/ }),

/***/ 8732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Content_Content)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(1791);
// EXTERNAL MODULE: ./src/components/Content/Content.module.scss
var Content_module = __webpack_require__(7349);
var Content_module_default = /*#__PURE__*/__webpack_require__.n(Content_module);
;// CONCATENATED MODULE: ./src/components/Content/Content.js



const Content = ({ children , className  })=>{
    const contentClassName = new classname/* default */.Z((Content_module_default()).content);
    contentClassName.addIf(className, className);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: contentClassName.toString(),
        children: children
    });
};
/* harmony default export */ const Content_Content = (Content);

;// CONCATENATED MODULE: ./src/components/Content/index.js



/***/ }),

/***/ 8320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ FeaturedImage_FeaturedImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(1791);
// EXTERNAL MODULE: ./src/components/Image/Image.module.scss
var Image_module = __webpack_require__(3363);
var Image_module_default = /*#__PURE__*/__webpack_require__.n(Image_module);
;// CONCATENATED MODULE: ./src/components/Image/Image.js



const Image = ({ children , className , width ="100%" , height ="auto" , src , alt , srcSet , sizes , dangerouslySetInnerHTML  })=>{
    const imageClassName = new classname/* default */.Z((Image_module_default()).image);
    imageClassName.addIf(className, className);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
        className: imageClassName.toString(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Image_module_default()).featuredImageImg,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    width: width,
                    height: height,
                    src: src,
                    alt: alt || "",
                    srcSet: srcSet,
                    sizes: sizes
                })
            }),
            children && /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                children: children
            }),
            dangerouslySetInnerHTML && /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                dangerouslySetInnerHTML: {
                    __html: dangerouslySetInnerHTML
                }
            })
        ]
    });
};
/* harmony default export */ const Image_Image = (Image);

;// CONCATENATED MODULE: ./src/components/Image/index.js


// EXTERNAL MODULE: ./src/components/FeaturedImage/FeaturedImage.module.scss
var FeaturedImage_module = __webpack_require__(2826);
var FeaturedImage_module_default = /*#__PURE__*/__webpack_require__.n(FeaturedImage_module);
;// CONCATENATED MODULE: ./src/components/FeaturedImage/FeaturedImage.js




const FeaturedImage = ({ className , alt , ...rest })=>{
    const featuredImageClassName = new classname/* default */.Z((FeaturedImage_module_default()).featuredImage);
    featuredImageClassName.addIf(className, className);
    return /*#__PURE__*/ jsx_runtime_.jsx(Image_Image, {
        className: featuredImageClassName,
        alt: alt,
        ...rest
    });
};
/* harmony default export */ const FeaturedImage_FeaturedImage = (FeaturedImage);

;// CONCATENATED MODULE: ./src/components/FeaturedImage/index.js



/***/ })

};
;