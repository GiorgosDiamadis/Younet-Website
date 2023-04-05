"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_LatestPosts_js"],{

/***/ "./src/components/LatestPosts.js":
/*!***************************************!*\
  !*** ./src/components/LatestPosts.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LatestPosts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section */ \"./src/components/Section/index.js\");\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionTitle */ \"./src/components/SectionTitle/index.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ \"./src/components/Post.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction LatestPosts(param) {\n    let { posts  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Digital Trends\",\n                subTitle: \"Discover The Latest Digital Strategies & Emerging Ideas For Business Growth\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\LatestPosts.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                // variants={staggerContainer}\n                // initial={'hidden'}\n                // whileInView={'show'}\n                // viewport={{ once: true, amount: .1 }}\n                className: \"mt-[50px] flex flex-col gap-[30px] 800px:px-0 px-5\",\n                children: [\n                    posts && posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: post.title,\n                            postId: post.postId,\n                            date: post.date,\n                            slug: post.slug,\n                            featuredImage: post.featuredImage,\n                            author: post.author,\n                            categories: post.categories,\n                            excerpt: post.excerpt,\n                            id: post.id,\n                            index: index\n                        }, post.id, false, {\n                            fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\LatestPosts.js\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        // variants={fadeIn('up', 'tween', 1.5, .5)}\n                        className: \"btn btn-primary m-auto\",\n                        role: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/posts\",\n                            className: \"text-white\",\n                            children: \"More posts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\LatestPosts.js\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\LatestPosts.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\LatestPosts.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\LatestPosts.js\",\n        lineNumber: 10,\n        columnNumber: 12\n    }, this);\n}\n_c = LatestPosts;\nvar _c;\n$RefreshReg$(_c, \"LatestPosts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXRlc3RQb3N0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ1U7QUFDaEI7QUFDRztBQUdiLFNBQVNJLFlBQVksS0FBUyxFQUFFO1FBQVgsRUFBRUMsTUFBSyxFQUFFLEdBQVQ7SUFHaEMscUJBQU8sOERBQUNMLGdEQUFPQTs7MEJBQ1gsOERBQUNDLHFEQUFZQTtnQkFBQ0ssT0FBTztnQkFDUEMsVUFBVTs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQ0csOEJBQThCO2dCQUM5QixxQkFBcUI7Z0JBQ3JCLHVCQUF1QjtnQkFDdkIsd0NBQXdDO2dCQUN4Q0MsV0FBVzs7b0JBR1ZKLFNBQVNBLE1BQU1LLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDdkIsOERBQUNWLDZDQUFJQTs0QkFFREksT0FBT0ssS0FBS0wsS0FBSzs0QkFDakJPLFFBQVFGLEtBQUtFLE1BQU07NEJBQ25CQyxNQUFNSCxLQUFLRyxJQUFJOzRCQUNmQyxNQUFNSixLQUFLSSxJQUFJOzRCQUNmQyxlQUFlTCxLQUFLSyxhQUFhOzRCQUNqQ0MsUUFBUU4sS0FBS00sTUFBTTs0QkFDbkJDLFlBQVlQLEtBQUtPLFVBQVU7NEJBQzNCQyxTQUFTUixLQUFLUSxPQUFPOzRCQUNyQkMsSUFBSVQsS0FBS1MsRUFBRTs0QkFDWFIsT0FBT0E7MkJBVkZELEtBQUtTLEVBQUU7Ozs7O2tDQWVwQiw4REFBQ0M7d0JBQ0csNENBQTRDO3dCQUM1Q1osV0FBVTt3QkFBeUJhLE1BQUs7a0NBR3hDLDRFQUFDbkIsa0RBQUlBOzRCQUFDb0IsTUFBTTs0QkFBVWQsV0FBVztzQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRL0QsQ0FBQztLQTdDdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xhdGVzdFBvc3RzLmpzP2I1YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJ1xyXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4vU2VjdGlvblRpdGxlJ1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXRlc3RQb3N0cyh7IHBvc3RzIH0pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIDxTZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9eydEaWdpdGFsIFRyZW5kcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT17J0Rpc2NvdmVyIFRoZSBMYXRlc3QgRGlnaXRhbCBTdHJhdGVnaWVzICYgRW1lcmdpbmcgSWRlYXMgRm9yIEJ1c2luZXNzIEdyb3d0aCd9IC8+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgLy8gdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XHJcbiAgICAgICAgICAgIC8vIGluaXRpYWw9eydoaWRkZW4nfVxyXG4gICAgICAgICAgICAvLyB3aGlsZUluVmlldz17J3Nob3cnfVxyXG4gICAgICAgICAgICAvLyB2aWV3cG9ydD17eyBvbmNlOiB0cnVlLCBhbW91bnQ6IC4xIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J210LVs1MHB4XSBmbGV4IGZsZXgtY29sIGdhcC1bMzBweF0gODAwcHg6cHgtMCBweC01J30+XHJcblxyXG5cclxuICAgICAgICAgICAge3Bvc3RzICYmIHBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxQb3N0XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5wb3N0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17cG9zdC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cclxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlZEltYWdlPXtwb3N0LmZlYXR1cmVkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtwb3N0LmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgZXhjZXJwdD17cG9zdC5leGNlcnB0fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtwb3N0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIC8vIHZhcmlhbnRzPXtmYWRlSW4oJ3VwJywgJ3R3ZWVuJywgMS41LCAuNSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBtLWF1dG8nIHJvbGU9J2J1dHRvbic+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcG9zdHMnfSBjbGFzc05hbWU9eyd0ZXh0LXdoaXRlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgTW9yZSBwb3N0c1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9TZWN0aW9uPlxyXG59Il0sIm5hbWVzIjpbIlNlY3Rpb24iLCJTZWN0aW9uVGl0bGUiLCJQb3N0IiwiTGluayIsIkxhdGVzdFBvc3RzIiwicG9zdHMiLCJ0aXRsZSIsInN1YlRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicG9zdCIsImluZGV4IiwicG9zdElkIiwiZGF0ZSIsInNsdWciLCJmZWF0dXJlZEltYWdlIiwiYXV0aG9yIiwiY2F0ZWdvcmllcyIsImV4Y2VycHQiLCJpZCIsImJ1dHRvbiIsInJvbGUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/LatestPosts.js\n"));

/***/ }),

/***/ "./src/components/Post.js":
/*!********************************!*\
  !*** ./src/components/Post.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TitleText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleText */ \"./src/components/TitleText.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Post(param) {\n    let { id , categories , date , postId , slug , title , author , excerpt , featuredImage , index , ...rest } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ...rest,\n        className: \"flex md:flex-row flex-col  gap-1 800px:gap-2 1150px:gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/posts/\".concat(slug),\n                className: \"w-[340px] h-[250px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    loading: \"lazy\",\n                    width: 340,\n                    height: 250,\n                    src: featuredImage && (featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.sourceUrl),\n                    alt: featuredImage && (featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.altText),\n                    className: \"md:w-[270px] w-full h-[250px] rounded-[32px] object-cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-between items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 md:ml-[62px] flex flex-col max-w-[650px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/posts/\".concat(slug),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TitleText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                title: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-3 lg:grid-cols-5 gap-3\",\n                            children: categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-1 text-white text-center bg-yn_blue-100 rounded-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/categories/\".concat(category.slug),\n                                        className: \"text-white\",\n                                        children: category.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, this)\n                                }, category.id, false, {\n                                    fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 mt-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    loading: \"lazy\",\n                                    src: author.avatar.url,\n                                    width: 20,\n                                    height: 0,\n                                    className: \"h-auto rounded-full\",\n                                    alt: author.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white\",\n                                    children: author.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            dangerouslySetInnerHTML: {\n                                __html: excerpt\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        ]\n    }, id, true, {\n        fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Post.js\",\n        lineNumber: 19,\n        columnNumber: 12\n    }, this);\n}\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUM7QUFDUDtBQUNFO0FBRWYsU0FBU0csS0FBSyxLQVlDLEVBQUU7UUFaSCxFQUNJQyxHQUFFLEVBQ0ZDLFdBQVUsRUFDVkMsS0FBSSxFQUNKQyxPQUFNLEVBQ05DLEtBQUksRUFDSkMsTUFBSyxFQUNMQyxPQUFNLEVBQ05DLFFBQU8sRUFDUEMsY0FBYSxFQUNiQyxNQUFLLEVBQ0wsR0FBR0MsTUFDTixHQVpEO0lBY3pCLHFCQUFPLDhEQUFDQztRQUdILEdBQUdELElBQUk7UUFDUkUsV0FBVzs7MEJBQ1gsOERBQUNmLGtEQUFJQTtnQkFBQ2dCLE1BQU0sVUFBZSxPQUFMVDtnQkFBUVEsV0FBVzswQkFFckMsNEVBQUNkLG1EQUFLQTtvQkFBQ2dCLFNBQVM7b0JBQVFDLE9BQU87b0JBQUtDLFFBQVE7b0JBQUtDLEtBQUtULGlCQUFpQkEsQ0FBQUEsMEJBQUFBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlVSxTQUFTO29CQUN4RkMsS0FBS1gsaUJBQWlCQSxDQUFBQSwwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVZLE9BQU87b0JBQzVDUixXQUFXOzs7Ozs7Ozs7OzswQkFHdEIsOERBQUNEO2dCQUFJQyxXQUFXOzBCQUNaLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNmLGtEQUFJQTs0QkFBQ2dCLE1BQU0sVUFBZSxPQUFMVDtzQ0FDbEIsNEVBQUNSLGtEQUFTQTtnQ0FBQ1MsT0FBT0E7Ozs7Ozs7Ozs7O3NDQUV0Qiw4REFBQ007NEJBQUlDLFdBQVU7c0NBQ1ZYLFdBQVdvQixHQUFHLENBQUMsQ0FBQ0MseUJBQ2IsOERBQUNYO29DQUFzQkMsV0FBVzs4Q0FDOUIsNEVBQUNmLGtEQUFJQTt3Q0FBQ2dCLE1BQU0sZUFBNkIsT0FBZFMsU0FBU2xCLElBQUk7d0NBQUlRLFdBQVc7a0RBRWxEVSxTQUFTQyxJQUFJOzs7Ozs7bUNBSFpELFNBQVN0QixFQUFFOzs7Ozs7Ozs7O3NDQVM3Qiw4REFBQ1c7NEJBQUlDLFdBQVc7OzhDQUNaLDhEQUFDZCxtREFBS0E7b0NBQUNnQixTQUFTO29DQUFRRyxLQUFLWCxPQUFPa0IsTUFBTSxDQUFDQyxHQUFHO29DQUFFVixPQUFPO29DQUFJQyxRQUFRO29DQUM1REosV0FBVztvQ0FBdUJPLEtBQUtiLE9BQU9pQixJQUFJOzs7Ozs7OENBQ3pELDhEQUFDRztvQ0FBS2QsV0FBVzs4Q0FBZU4sT0FBT2lCLElBQUk7Ozs7Ozs7Ozs7OztzQ0FHL0MsOERBQUNaOzRCQUFJZ0IseUJBQXlCO2dDQUFFQyxRQUFRckI7NEJBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWpDbkRQOzs7OztBQXNDYixDQUFDO0tBckR1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC5qcz81OTM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZVRleHQgZnJvbSAnLi9UaXRsZVRleHQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjZXJwdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWRJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXZcclxuICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgIC8vIHZhcmlhbnRzPXtmYWRlSW4oJ3VwJywgJ3NwcmluZycsIGluZGV4ICogLjUsIDEpfVxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgIGNsYXNzTmFtZT17J2ZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wgIGdhcC0xIDgwMHB4OmdhcC0yIDExNTBweDpnYXAtNCd9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtzbHVnfWB9IGNsYXNzTmFtZT17J3ctWzM0MHB4XSBoLVsyNTBweF0nfT5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZSBsb2FkaW5nPXsnbGF6eSd9IHdpZHRoPXszNDB9IGhlaWdodD17MjUwfSBzcmM9e2ZlYXR1cmVkSW1hZ2UgJiYgZmVhdHVyZWRJbWFnZT8uc291cmNlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgYWx0PXtmZWF0dXJlZEltYWdlICYmIGZlYXR1cmVkSW1hZ2U/LmFsdFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtZDp3LVsyNzBweF0gdy1mdWxsIGgtWzI1MHB4XSByb3VuZGVkLVszMnB4XSBvYmplY3QtY292ZXInfSAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LTEgbWQ6bWwtWzYycHhdIGZsZXggZmxleC1jb2wgbWF4LXctWzY1MHB4XSc+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7c2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVUZXh0IHRpdGxlPXt0aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGxnOmdyaWQtY29scy01IGdhcC0zJz5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeS5pZH0gY2xhc3NOYW1lPXsncC0xIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgYmcteW5fYmx1ZS0xMDAgcm91bmRlZC1mdWxsJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3JpZXMvJHtjYXRlZ29yeS5zbHVnfWB9IGNsYXNzTmFtZT17J3RleHQtd2hpdGUnfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGdhcC0yIG10LTMnfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbG9hZGluZz17J2xhenknfSBzcmM9e2F1dGhvci5hdmF0YXIudXJsfSB3aWR0aD17MjB9IGhlaWdodD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnaC1hdXRvIHJvdW5kZWQtZnVsbCd9IGFsdD17YXV0aG9yLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsndGV4dC13aGl0ZSd9PnthdXRob3IubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZXhjZXJwdCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbn0iXSwibmFtZXMiOlsiVGl0bGVUZXh0IiwiTGluayIsIkltYWdlIiwiUG9zdCIsImlkIiwiY2F0ZWdvcmllcyIsImRhdGUiLCJwb3N0SWQiLCJzbHVnIiwidGl0bGUiLCJhdXRob3IiLCJleGNlcnB0IiwiZmVhdHVyZWRJbWFnZSIsImluZGV4IiwicmVzdCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJsb2FkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJzb3VyY2VVcmwiLCJhbHQiLCJhbHRUZXh0IiwibWFwIiwiY2F0ZWdvcnkiLCJuYW1lIiwiYXZhdGFyIiwidXJsIiwic3BhbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Post.js\n"));

/***/ }),

/***/ "./src/components/TitleText.js":
/*!*************************************!*\
  !*** ./src/components/TitleText.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TitleText; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction TitleText(param) {\n    let { title , textStyles  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"mt-4 font-bold md:text-[50px] text-[30px] text-white \".concat(textStyles),\n        children: title\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\TitleText.js\",\n        lineNumber: 3,\n        columnNumber: 12\n    }, this);\n}\n_c = TitleText;\nvar _c;\n$RefreshReg$(_c, \"TitleText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaXRsZVRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxVQUFVLEtBQXFCLEVBQUU7UUFBdkIsRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQUUsR0FBckI7SUFFOUIscUJBQU8sOERBQUNDO1FBQ0pDLFdBQVcsd0RBQW1FLE9BQVhGO2tCQUVsRUQ7Ozs7OztBQUlULENBQUM7S0FUdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpdGxlVGV4dC5qcz9kNzViIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpdGxlVGV4dCh7IHRpdGxlLCB0ZXh0U3R5bGVzIH0pIHtcclxuXHJcbiAgICByZXR1cm4gPGgyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgbXQtNCBmb250LWJvbGQgbWQ6dGV4dC1bNTBweF0gdGV4dC1bMzBweF0gdGV4dC13aGl0ZSAke3RleHRTdHlsZXN9YH1cclxuICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcblxyXG4gICAgPC9oMj5cclxuXHJcbn0iXSwibmFtZXMiOlsiVGl0bGVUZXh0IiwidGl0bGUiLCJ0ZXh0U3R5bGVzIiwiaDIiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TitleText.js\n"));

/***/ })

}]);