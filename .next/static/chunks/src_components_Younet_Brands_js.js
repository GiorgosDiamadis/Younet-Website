"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_Younet_Brands_js"],{

/***/ "./src/components/Younet/Brands.js":
/*!*****************************************!*\
  !*** ./src/components/Younet/Brands.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Brands; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Section */ \"./src/components/Section/index.js\");\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SectionTitle */ \"./src/components/SectionTitle/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Brands(param) {\n    let { brands  } = param;\n    _s();\n    brands = [\n        {\n            name: \"Testimonial 1\",\n            image: \"https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp\",\n            testimonial: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum maiores neque pariatur provident reprehenderit? Cum nisi obcaecati sint veniam.\"\n        },\n        {\n            name: \"Testimonial 2\",\n            image: \"https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp\",\n            testimonial: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam blanditiis ducimus exercitationem fugit, nostrum rerum suscipit! Adipisci aspernatur delectus expedita explicabo iusto laudantium maxime necessitatibus, nulla, optio quidem ullam!\"\n        },\n        {\n            name: \"Testimonial 3\",\n            image: \"https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp\",\n            testimonial: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum maiores neque pariatur provident reprehenderit? Cum nisi obcaecati sint veniam.\"\n        },\n        {\n            name: \"Testimonial 4\",\n            image: \"https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp\",\n            testimonial: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum maiores neque pariatur provident reprehenderit? Cum nisi obcaecati sint veniam.\"\n        }\n    ];\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const changeTestimonial = (index)=>{\n        setActive(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Recognized Digital Agency Experts\",\n                subTitle: \"OUR EXPERTS HAVE WON INDUSTRY AWARDS\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-auto mt-[50px] 800px:px-0 px-5 flex lg:flex-row flex-col min-h-[70vh] gap-5\",\n                children: brands.map((param, index)=>/*#__PURE__*/ {\n                    let { image , testimonial , name  } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mdiv\", {\n                        // variants={staggerContainer}\n                        // initial={'hidden'}\n                        // whileInView={'show'}\n                        onClick: ()=>{\n                            changeTestimonial(index);\n                        },\n                        // viewport={{ once: true, amount: 0.25 }}\n                        className: \"relative \".concat(active === index ? \"lg:flex-[3.5] flex-[6]\" : \"lg:flex-[0.5] flex-[1]\", \"   flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                // variants={fadeIn('right', 'spring', .1 * (index + 1), '0.75')}\n                                className: \"absolute w-full h-full object-cover rounded-[24px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    width: 100,\n                                    height: 100,\n                                    loading: \"lazy\",\n                                    className: \"absolute w-full h-full object-cover rounded-[24px]\",\n                                    src: \"https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                // variants={fadeIn('right', 'spring', .1 * (index + 1), '0.75')}\n                                className: \"absolute flex \".concat(active !== index ? \" rounded-t-[24px] lg:rounded-t-[0px] bottom-0 w-full h-full lg:h-1/3 justify-center lg:justify-start\" : \"rounded-t-[24px] lg:rounded-t-[0px] justify-start p-4 h-full lg:h-1/3 lg:p-8 \", \" bottom-0    w-full  flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] overflow-hidden\"),\n                                children: active === index ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flexCenter w-[80px] h-[80px] rounded-[24px]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                width: 80,\n                                                height: 0,\n                                                loading: \"lazy\",\n                                                className: \"h-auto\",\n                                                src: image,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"m-0\",\n                                            children: testimonial\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flexCenter\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold sm:text-[24px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, \"testimonial-\".concat(index), true, {\n                        fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dimma\\\\Documents\\\\GitHub\\\\Younet-Website\\\\src\\\\components\\\\Younet\\\\Brands.js\",\n        lineNumber: 37,\n        columnNumber: 12\n    }, this);\n}\n_s(Brands, \"LYMHw6xE17pbh6ai9qaw76OM0Ms=\");\n_c = Brands;\nvar _c;\n$RefreshReg$(_c, \"Brands\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Zb3VuZXQvQnJhbmRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFnQztBQUNVO0FBQ1o7QUFDQTtBQUdmLFNBQVNJLE9BQU8sS0FBVSxFQUFFO1FBQVosRUFBRUMsT0FBTSxFQUFFLEdBQVY7O0lBRTNCQSxTQUFTO1FBQ0w7WUFDSUMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLGFBQWE7UUFDakI7UUFDQTtZQUNJRixNQUFNO1lBQ05DLE9BQU87WUFDUEMsYUFBYTtRQUNqQjtRQUNBO1lBQ0lGLE1BQU07WUFDTkMsT0FBTztZQUNQQyxhQUFhO1FBQ2pCO1FBQ0E7WUFDSUYsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLGFBQWE7UUFDakI7S0FDSDtJQUNELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNUyxvQkFBb0IsQ0FBQ0MsUUFBVTtRQUNqQ0YsVUFBVUU7SUFDZDtJQUVBLHFCQUFPLDhEQUFDWixnREFBT0E7OzBCQUVYLDhEQUFDQyxxREFBWUE7Z0JBQUNZLE9BQU87Z0JBQ1BDLFVBQVU7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUVWWCxPQUFPWSxHQUFHLENBQUMsUUFBK0JMLHNCQUN2Qzt3QkFEUyxFQUFFTCxNQUFLLEVBQUVDLFlBQVcsRUFBRUYsS0FBSSxFQUFFOzJCQUNyQyw4REFBQ1k7d0JBRUcsOEJBQThCO3dCQUM5QixxQkFBcUI7d0JBQ3JCLHVCQUF1Qjt3QkFDdkJDLFNBQVMsSUFBTTs0QkFDWFIsa0JBQWtCQzt3QkFDdEI7d0JBQ0EsMENBQTBDO3dCQUMxQ0ksV0FBVyxZQUFtRixPQUF2RVAsV0FBV0csUUFBUSwyQkFBMkIsd0JBQXdCLEVBQUM7OzBDQUU5Riw4REFBQ0c7Z0NBQ0csaUVBQWlFO2dDQUNqRUMsV0FBVzswQ0FFWCw0RUFBQ2IsbURBQUtBO29DQUNGaUIsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsU0FBUztvQ0FDVE4sV0FBVztvQ0FDWE8sS0FBSztvQ0FDTEMsS0FBSzs7Ozs7Ozs7Ozs7MENBRWIsOERBQUNUO2dDQUNHLGlFQUFpRTtnQ0FDakVDLFdBQVcsaUJBQTZOLE9BQTVNUCxXQUFXRyxRQUFRLHlHQUF5RywrRUFBK0UsRUFBQzswQ0FHdk9ILFdBQVdHLHNCQUNSOztzREFDSSw4REFBQ0c7NENBQUlDLFdBQVc7c0RBQ1osNEVBQUNiLG1EQUFLQTtnREFBQ2lCLE9BQU87Z0RBQUlDLFFBQVE7Z0RBQUdDLFNBQVM7Z0RBQVFOLFdBQVc7Z0RBQVVPLEtBQUtoQjtnREFDakVpQixLQUFJOzs7Ozs7Ozs7OztzREFHZiw4REFBQ0M7NENBQUVULFdBQVc7c0RBQ1RSOzs7Ozs7O2lFQUtULDhEQUFDTztvQ0FBSUMsV0FBVzs4Q0FDWiw0RUFBQ1U7d0NBQUdWLFdBQVc7a0RBQ1ZWOzs7Ozs7Ozs7O3dDQUlaOzs7Ozs7O3VCQTlDQSxlQUFxQixPQUFOTTs7Ozs7Z0JBa0RsQjs7Ozs7Ozs7Ozs7O0FBT3RCLENBQUM7R0FoR3VCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Zb3VuZXQvQnJhbmRzLmpzP2QyZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vU2VjdGlvbidcclxuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuLi9TZWN0aW9uVGl0bGUnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmFuZHMoeyBicmFuZHMgfSkge1xyXG5cclxuICAgIGJyYW5kcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdUZXN0aW1vbmlhbCAxJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2Rldi55b3VuZXQuZGlnaXRhbC9jbXMvd3AtY29udGVudC91cGxvYWRzLzIwMjMvMDMvanVzdC1mZXJyeS15b3VuZXQtc2xpZGUyLndlYnAnLFxyXG4gICAgICAgICAgICB0ZXN0aW1vbmlhbDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFeHBsaWNhYm8gaWxsdW0gbWFpb3JlcyBuZXF1ZSBwYXJpYXR1ciBwcm92aWRlbnQgcmVwcmVoZW5kZXJpdD8gQ3VtIG5pc2kgb2JjYWVjYXRpIHNpbnQgdmVuaWFtLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1Rlc3RpbW9uaWFsIDInLFxyXG4gICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZGV2LnlvdW5ldC5kaWdpdGFsL2Ntcy93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wMy9qdXN0LWZlcnJ5LXlvdW5ldC1zbGlkZTIud2VicCcsXHJcbiAgICAgICAgICAgIHRlc3RpbW9uaWFsOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFiIGFwZXJpYW0gYmxhbmRpdGlpcyBkdWNpbXVzIGV4ZXJjaXRhdGlvbmVtIGZ1Z2l0LCBub3N0cnVtIHJlcnVtIHN1c2NpcGl0ISBBZGlwaXNjaSBhc3Blcm5hdHVyIGRlbGVjdHVzIGV4cGVkaXRhIGV4cGxpY2FibyBpdXN0byBsYXVkYW50aXVtIG1heGltZSBuZWNlc3NpdGF0aWJ1cywgbnVsbGEsIG9wdGlvIHF1aWRlbSB1bGxhbSEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdUZXN0aW1vbmlhbCAzJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2Rldi55b3VuZXQuZGlnaXRhbC9jbXMvd3AtY29udGVudC91cGxvYWRzLzIwMjMvMDMvanVzdC1mZXJyeS15b3VuZXQtc2xpZGUyLndlYnAnLFxyXG4gICAgICAgICAgICB0ZXN0aW1vbmlhbDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFeHBsaWNhYm8gaWxsdW0gbWFpb3JlcyBuZXF1ZSBwYXJpYXR1ciBwcm92aWRlbnQgcmVwcmVoZW5kZXJpdD8gQ3VtIG5pc2kgb2JjYWVjYXRpIHNpbnQgdmVuaWFtLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1Rlc3RpbW9uaWFsIDQnLFxyXG4gICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZGV2LnlvdW5ldC5kaWdpdGFsL2Ntcy93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wMy9qdXN0LWZlcnJ5LXlvdW5ldC1zbGlkZTIud2VicCcsXHJcbiAgICAgICAgICAgIHRlc3RpbW9uaWFsOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV4cGxpY2FibyBpbGx1bSBtYWlvcmVzIG5lcXVlIHBhcmlhdHVyIHByb3ZpZGVudCByZXByZWhlbmRlcml0PyBDdW0gbmlzaSBvYmNhZWNhdGkgc2ludCB2ZW5pYW0uJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRlc3RpbW9uaWFsID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKGluZGV4KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8U2VjdGlvbj5cclxuXHJcbiAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17J1JlY29nbml6ZWQgRGlnaXRhbCBBZ2VuY3kgRXhwZXJ0cyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT17J09VUiBFWFBFUlRTIEhBVkUgV09OIElORFVTVFJZIEFXQVJEUyd9IC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLWF1dG8gbXQtWzUwcHhdIDgwMHB4OnB4LTAgcHgtNSAgZmxleCBsZzpmbGV4LXJvdyBmbGV4LWNvbCBtaW4taC1bNzB2aF0gZ2FwLTUnPlxyXG5cclxuICAgICAgICAgICAge2JyYW5kcy5tYXAoKHsgaW1hZ2UsIHRlc3RpbW9uaWFsLCBuYW1lIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bWRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YHRlc3RpbW9uaWFsLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXJpYW50cz17c3RhZ2dlckNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWFsPXsnaGlkZGVuJ31cclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGlsZUluVmlldz17J3Nob3cnfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlVGVzdGltb25pYWwoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvLyB2aWV3cG9ydD17eyBvbmNlOiB0cnVlLCBhbW91bnQ6IDAuMjUgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke2FjdGl2ZSA9PT0gaW5kZXggPyAnbGc6ZmxleC1bMy41XSBmbGV4LVs2XScgOiAnbGc6ZmxleC1bMC41XSBmbGV4LVsxXSd9ICAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLXctWzE3MHB4XSBoLVs3MDBweF0gdHJhbnNpdGlvbi1bZmxleF0gZHVyYXRpb24tWzAuN3NdIGVhc2Utb3V0LWZsZXggY3Vyc29yLXBvaW50ZXJgfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXJpYW50cz17ZmFkZUluKCdyaWdodCcsICdzcHJpbmcnLCAuMSAqIChpbmRleCArIDEpLCAnMC43NScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciByb3VuZGVkLVsyNHB4XSd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9eydsYXp5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2Fic29sdXRlIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWQtWzI0cHhdJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17J2h0dHBzOi8vZGV2LnlvdW5ldC5kaWdpdGFsL2Ntcy93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wMy9qdXN0LWZlcnJ5LXlvdW5ldC1zbGlkZTIud2VicCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9eycnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyaWFudHM9e2ZhZGVJbigncmlnaHQnLCAnc3ByaW5nJywgLjEgKiAoaW5kZXggKyAxKSwgJzAuNzUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgZmxleCAke2FjdGl2ZSAhPT0gaW5kZXggPyAnIHJvdW5kZWQtdC1bMjRweF0gbGc6cm91bmRlZC10LVswcHhdIGJvdHRvbS0wIHctZnVsbCBoLWZ1bGwgbGc6aC0xLzMganVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1zdGFydCcgOiAncm91bmRlZC10LVsyNHB4XSBsZzpyb3VuZGVkLXQtWzBweF0ganVzdGlmeS1zdGFydCBwLTQgaC1mdWxsIGxnOmgtMS8zIGxnOnAtOCAnfSBib3R0b20tMCAgICB3LWZ1bGwgIGZsZXgtY29sIGJnLVtyZ2JhKDAsMCwwLDAuNSldIHJvdW5kZWQtYi1bMjRweF0gb3ZlcmZsb3ctaGlkZGVuYH0+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSA9PT0gaW5kZXggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleENlbnRlciB3LVs4MHB4XSBoLVs4MHB4XSByb3VuZGVkLVsyNHB4XSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezgwfSBoZWlnaHQ9ezB9IGxvYWRpbmc9eydsYXp5J30gY2xhc3NOYW1lPXsnaC1hdXRvJ30gc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJyAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eydtLTAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3RpbW9uaWFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleENlbnRlcid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9eydmb250LXNlbWlib2xkIHNtOnRleHQtWzI0cHhdIHRleHQtWzE4cHhdIHRleHQtd2hpdGUgYWJzb2x1dGUgei0wIGxnOmJvdHRvbS0yMCBsZzpyb3RhdGUtWy05MGRlZ10gbGc6b3JpZ2luLVswLDBdJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvbWRpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDwvU2VjdGlvbj5cclxuXHJcbn0iXSwibmFtZXMiOlsiU2VjdGlvbiIsIlNlY3Rpb25UaXRsZSIsInVzZVN0YXRlIiwiSW1hZ2UiLCJCcmFuZHMiLCJicmFuZHMiLCJuYW1lIiwiaW1hZ2UiLCJ0ZXN0aW1vbmlhbCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNoYW5nZVRlc3RpbW9uaWFsIiwiaW5kZXgiLCJ0aXRsZSIsInN1YlRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibWRpdiIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsImxvYWRpbmciLCJzcmMiLCJhbHQiLCJwIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Younet/Brands.js\n"));

/***/ })

}]);