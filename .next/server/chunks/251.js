exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 6014:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__jY5v0"
};


/***/ }),

/***/ 8583:
/***/ ((module) => {

// Exports
module.exports = {
	"layoutContainer": "Layout_layoutContainer__5pQvD"
};


/***/ }),

/***/ 8367:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 3726:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Nav_nav__g0tUU",
	"navSection": "Nav_navSection___CwdX",
	"navName": "Nav_navName__qC0J3",
	"navSearch": "Nav_navSearch__qBaxZ",
	"navSearchResults": "Nav_navSearchResults__F7TWO",
	"navMenu": "Nav_navMenu__ehGpM",
	"navSubMenu": "Nav_navSubMenu__r8fDG"
};


/***/ }),

/***/ 4475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CallToAction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CallToAction({ children , onClick =()=>{} , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest,
        onClick: onClick,
        children: children
    });
}


/***/ }),

/***/ 3125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Container_Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/models/classname.js
var classname = __webpack_require__(1791);
// EXTERNAL MODULE: ./src/components/Container/Container.module.scss
var Container_module = __webpack_require__(6014);
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);
;// CONCATENATED MODULE: ./src/components/Container/Container.js



const Container = ({ children , className  })=>{
    const containerClassName = new classname/* default */.Z((Container_module_default()).container);
    containerClassName.addIf(className, className);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: containerClassName.toString(),
        children: children
    });
};
/* harmony default export */ const Container_Container = (Container);

;// CONCATENATED MODULE: ./src/components/Container/index.js



/***/ }),

/***/ 7426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(2791);
// EXTERNAL MODULE: ./src/components/Layout/Layout.module.scss
var Layout_module = __webpack_require__(8583);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./src/hooks/use-site.js
var use_site = __webpack_require__(2097);
// EXTERNAL MODULE: ./src/lib/site.js + 1 modules
var site = __webpack_require__(7027);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/YouNet-LogoW.webp
/* harmony default export */ const YouNet_LogoW = ({"src":"/_next/static/media/YouNet-LogoW.a497b596.webp","height":190,"width":346,"blurDataURL":"data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAV+H4639LejL///3//////7D////RldJ5AG6xYkgdEAAAVlA4IE4AAAAQAgCdASoIAAQAAkA4JbACdHIAAlG0wEoAAP67bfzbxS1QMQTpU+CjtcT1KGZbZ6lDS3OQXb6/cO+kj9Y5w/j1lsT/+oMy/x6y2J82gAA=","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./src/lib/menus.js + 1 modules
var lib_menus = __webpack_require__(7588);
// EXTERNAL MODULE: ./src/components/Nav/Nav.module.scss
var Nav_module = __webpack_require__(3726);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./src/components/NavListItem/NavListItem.js
// import ClassName from 'models/classname';
// import styles from './NavListItem.module.scss';


const NavListItem = ({ className , item  })=>{
    const nestedItems = (item.children || []).map((item)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(NavListItem, {
            item: item
        }, item.id);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "nav-menu-item",
        children: [
            !item.path.includes("http") && !item.target && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        legacyBehavior: true,
                        legacyBehavior: true,
                        href: item.path,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            style: {
                                padding: "0"
                            },
                            className: "nav-menu-link md:text-2xl lg:text-4xl text-2xl text-white",
                            title: item.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: item.label
                            })
                        })
                    }),
                    item.label === "Υπηρεσίες" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-2  mb-2 w-full mb-5 m-auto place-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: item.path,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        padding: "0"
                                    },
                                    className: "nav-menu-link  text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0",
                                    title: item.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Κατασκευή Website"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: item.path,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        padding: "0"
                                    },
                                    className: "nav-menu-link text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0",
                                    title: item.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "E-Commerce Solutions"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: item.path,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        padding: "0"
                                    },
                                    className: "nav-menu-link text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0",
                                    title: item.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Digital Marketing"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: item.path,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        padding: "0"
                                    },
                                    className: "nav-menu-link text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0",
                                    title: item.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "SEO"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: item.path,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        padding: "0"
                                    },
                                    className: "nav-menu-link text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0",
                                    title: item.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Web Hosting"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: item.path,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        padding: "0"
                                    },
                                    className: "nav-menu-link text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0",
                                    title: item.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Σχεδιασμός λογοτύπου"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            item.path.includes("http") && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                style: {
                    padding: "0"
                },
                href: item.path,
                className: "nav-menu-link md:text-2xl lg:text-4xl text-2xl text-white",
                title: item.title,
                target: item.target,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: item.label
                })
            }),
            nestedItems.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: className,
                children: nestedItems
            })
        ]
    }, item.id);
};
/* harmony default export */ const NavListItem_NavListItem = (NavListItem);

;// CONCATENATED MODULE: ./src/components/NavListItem/index.js


;// CONCATENATED MODULE: ./src/hooks/useScrollPosition.js

const useScrollPosition = ()=>{
    const [scrollPosition, setScrollPosition] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        const updatePosition = ()=>{
            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return ()=>window.removeEventListener("scroll", updatePosition);
    }, []);
    return scrollPosition;
};
/* harmony default export */ const hooks_useScrollPosition = (useScrollPosition);

// EXTERNAL MODULE: ./src/components/CallToAction.js
var CallToAction = __webpack_require__(4475);
;// CONCATENATED MODULE: ./src/components/Nav/Burger.js

function Burger(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "burger",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        ...props,
                        className: "burger-line"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        ...props,
                        className: "burger-line"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        ...props,
                        className: "burger-line"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ...props,
                className: "menu-x-close"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Nav/Nav.js












const SEARCH_VISIBLE = "visible";
const SEARCH_HIDDEN = "hidden";
const Nav = ()=>{
    const formRef = (0,external_react_.useRef)();
    const menuRef = (0,external_react_.useRef)();
    const scrollPosition = hooks_useScrollPosition();
    const [searchVisibility, setSearchVisibility] = (0,external_react_.useState)(SEARCH_HIDDEN);
    const { metadata ={} , menus  } = (0,use_site/* default */.ZP)();
    const { title  } = metadata;
    const navigationLocation = "HEADER" || 0;
    const navigation = (0,lib_menus/* findMenuByLocation */.pU)(menus, navigationLocation);
    (0,external_react_.useEffect)(()=>{
        if (searchVisibility === SEARCH_HIDDEN) {
            removeDocumentOnClick();
            return;
        }
        addDocumentOnClick();
        addResultsRoving();
        const searchInput = Array.from(formRef.current.elements).find((input)=>input.type === "search");
        searchInput.focus();
        return ()=>{
            removeResultsRoving();
            removeDocumentOnClick();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        searchVisibility
    ]);
    (0,external_react_.useEffect)(()=>{
        if (window.location.pathname === "/") {
            if (scrollPosition >= 120) {
                if (menuRef.current) {
                    menuRef.current.classList.add("nav-scrolled");
                }
            } else {
                if (menuRef.current) {
                    menuRef.current.classList.remove("nav-scrolled");
                }
            }
        } else {
            menuRef.current.classList.add("nav-scrolled");
        }
    }, [
        scrollPosition
    ]);
    /**
     * addDocumentOnClick
     */ function addDocumentOnClick() {
        document.body.addEventListener("click", handleOnDocumentClick, true);
    }
    /**
     * removeDocumentOnClick
     */ function removeDocumentOnClick() {
        document.body.removeEventListener("click", handleOnDocumentClick, true);
    }
    /**
     * handleOnDocumentClick
     */ function handleOnDocumentClick(e) {
        if (!e.composedPath().includes(formRef.current)) {
            setSearchVisibility(SEARCH_HIDDEN);
        }
    }
    /**
     * handleOnSearch
     */ function handleOnSearch({ currentTarget  }) {}
    /**
     * handleOnToggleSearch
     */ function handleOnToggleSearch() {
        setSearchVisibility(SEARCH_VISIBLE);
    }
    /**
     * addResultsRoving
     */ function addResultsRoving() {
        document.body.addEventListener("keydown", handleResultsRoving);
    }
    /**
     * removeResultsRoving
     */ function removeResultsRoving() {
        document.body.removeEventListener("keydown", handleResultsRoving);
    }
    /**
     * handleResultsRoving
     */ function handleResultsRoving(e) {
        const focusElement = document.activeElement;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (focusElement.nodeName === "INPUT" && focusElement.nextSibling.children[0].nodeName !== "P") {
                focusElement.nextSibling.children[0].firstChild.firstChild.focus();
            } else if (focusElement.parentElement.nextSibling) {
                focusElement.parentElement.nextSibling.firstChild.focus();
            } else {
                focusElement.parentElement.parentElement.firstChild.firstChild.focus();
            }
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (focusElement.nodeName === "A" && focusElement.parentElement.previousSibling) {
                focusElement.parentElement.previousSibling.firstChild.focus();
            } else {
                focusElement.parentElement.parentElement.lastChild.firstChild.focus();
            }
        }
    }
    /**
     * escFunction
     */ // pressing esc while search is focused will close it
    const escFunction = (0,external_react_.useCallback)((event)=>{
        if (event.keyCode === 27) {
            setSearchVisibility(SEARCH_HIDDEN);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("keydown", escFunction, false);
        return ()=>{
            document.removeEventListener("keydown", escFunction, false);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                "data-menu-transition": true,
                ref: menuRef,
                className: "p-[1rem] main-nav pt-2  m-0 fixed w-full z-50",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "site-navigation",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Nav_module_default()).navName + " z-50",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-4xl text-white p-0 m-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: YouNet_LogoW,
                                        alt: "me",
                                        width: "90",
                                        height: "51",
                                        loading: "lazy"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    "aria-label": "Ζητήστε τιμή",
                                    type: "button",
                                    className: "burger-container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CallToAction/* default */.Z, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            "data-menu-transition": true,
                                            className: "request-quote hidden md:block",
                                            children: "Ζητηστε τιμη"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    "aria-label": "Μενού",
                                    type: "button",
                                    className: "burger-container",
                                    onClick: ()=>{
                                        const lines = [
                                            ...document.querySelectorAll("[data-menu-transition]")
                                        ];
                                        lines.forEach((line)=>{
                                            line.classList.toggle("menu-open");
                                        });
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        id: "nav-burger",
                                        className: "flex gap-2 relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Burger, {
                                                "data-menu-transition": true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                "data-menu-transition": true,
                                                className: "menu-text hidden md:block",
                                                children: "menu"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                "data-menu-transition": true,
                className: "menu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "menu-scaling-bg bg-gradient"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: (Nav_module_default()).navMenu + " nav-menu",
                        children: navigation?.map((listItem)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(NavListItem_NavListItem, {
                                className: (Nav_module_default()).navSubMenu,
                                item: listItem
                            }, listItem.id);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Nav_Nav = (Nav);

;// CONCATENATED MODULE: ./src/components/Nav/index.js


// EXTERNAL MODULE: ./src/components/Main/Main.module.scss
var Main_module = __webpack_require__(8367);
var Main_module_default = /*#__PURE__*/__webpack_require__.n(Main_module);
;// CONCATENATED MODULE: ./src/components/Main/Main.js


const Main = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: (Main_module_default()).main,
        children: children
    });
};
/* harmony default export */ const Main_Main = (Main);

;// CONCATENATED MODULE: ./src/components/Main/index.js


;// CONCATENATED MODULE: ./public/location.svg
/* harmony default export */ const public_location = ({"src":"/_next/static/media/location.7474944a.svg","height":512,"width":384});
;// CONCATENATED MODULE: ./public/phone.svg
/* harmony default export */ const phone = ({"src":"/_next/static/media/phone.2d7aa91a.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js








const Footer = ()=>{
    const { metadata ={} , menus  } = (0,use_site/* default */.ZP)();
    const { title  } = metadata;
    const navigationLocation = "HEADER" || 0;
    const navigation = (0,lib_menus/* findMenuByLocation */.pU)(menus, navigationLocation);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-dark_blue py-5 relative mt-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-[95%] m-auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-10",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " text-white flex gap-3 items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-1/2 hidden md:block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: YouNet_LogoW,
                                                alt: "me",
                                                width: "90",
                                                height: "51",
                                                loading: "lazy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Είμαστε εδώ για να μετατρέψουμε με επιτυχία τις μεγάλες ιδέες σας σε πραγματικότητα."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " text-white flex gap-3 items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-1/2 hidden md:block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: YouNet_LogoW,
                                                alt: "me",
                                                width: "90",
                                                height: "51",
                                                loading: "lazy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Κάνε εγγραφή στο Newsletter μας και μάθε πρώτος τις τελευταίες εξελίξεις στον κόσμο του Digital."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " text-white items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: " hidden md:block",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: public_location,
                                                        width: 24,
                                                        height: 24,
                                                        loading: "lazy"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mt-0 mb-0",
                                                    children: "Αγίου Κωνσταντίνου 13, Πειραιάς TK 185 32, 8ος Όροφος"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: " flex gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: " hidden md:block",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: phone,
                                                        width: 24,
                                                        height: 24,
                                                        loading: "lazy"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mt-0 mb-0",
                                                    children: "210 300 28 78"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " text-white flex gap-3 items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-1/2 hidden md:block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: YouNet_LogoW,
                                                alt: "me",
                                                width: "90",
                                                height: "51",
                                                loading: "lazy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Follow us"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "dropdown flex justify-end cursor-pointer group relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative z-[39] lg:z-0 flex w-[70px] h-[30px] justify-end",
                                onMouseEnter: ()=>{
                                    const lines = [
                                        ...document.querySelectorAll("[data-footer-transition]")
                                    ];
                                    lines.forEach((line)=>{
                                        line.classList.toggle("menu-open");
                                    });
                                },
                                onClick: ()=>{
                                    const lines = [
                                        ...document.querySelectorAll("[data-footer-transition]")
                                    ];
                                    lines.forEach((line)=>{
                                        if (line.classList.contains("menu-open")) line.classList.remove("menu-open");
                                        else line.classList.add("menu-open");
                                    });
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Burger, {
                                    "data-footer-transition": true
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onMouseLeave: ()=>{
                    const lines = [
                        ...document.querySelectorAll("[data-footer-transition]")
                    ];
                    lines.forEach((line)=>{
                        line.classList.toggle("menu-open");
                    });
                },
                "data-footer-transition": true,
                className: "dropdown-menu bg-dark_blue",
                children: navigation?.map((listItem)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-yn_blue-100 text-white p-2 rounded",
                        children: listItem.label
                    }, listItem.label))
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Footer/index.js


;// CONCATENATED MODULE: ./src/components/Layout/Layout.js









const Layout = ({ children , classes  })=>{
    const router = (0,router_.useRouter)();
    const { asPath  } = router;
    const { homepage , metadata ={}  } = (0,use_site/* default */.ZP)();
    if (!metadata.og) {
        metadata.og = {};
    }
    metadata.og.url = `${homepage}${asPath}`;
    const helmetSettings = {
        defaultTitle: metadata.title,
        titleTemplate:  false ? 0 : `%s - ${metadata.title}`,
        ...(0,site/* helmetSettingsFromMetadata */.iB)(metadata, {
            setTitle: false,
            link: [
                {
                    rel: "alternate",
                    type: "application/rss+xml",
                    href: "/feed.xml"
                },
                // Favicon sizes and manifest generated via https://favicon.io/
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png"
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png"
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png"
                },
                {
                    rel: "manifest",
                    href: "/site.webmanifest"
                }
            ]
        })
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).layoutContainer + " " + classes,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_helmet_.Helmet, {
                ...helmetSettings
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Nav_Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Main_Main, {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/components/Layout/index.js



/***/ }),

/***/ 1791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ClassName {
    constructor(className){
        this.base = className;
        if (!Array.isArray(className)) {
            this.base = [
                this.base
            ];
        }
    }
    add(className) {
        if (!Array.isArray(className)) {
            className = [
                className
            ];
        }
        this.base = [
            ...this.base,
            ...className
        ];
        return this;
    }
    addIf(className, condition) {
        if (condition) this.add(className);
        return this;
    }
    toString() {
        return this.base.join(" ");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassName);


/***/ })

};
;