"use strict";
exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 2097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AA": () => (/* binding */ useSiteContext),
/* harmony export */   "DN": () => (/* binding */ SiteContext),
/* harmony export */   "ZP": () => (/* binding */ useSite)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4147);
/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6298);



const SiteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/**
 * useSiteContext
 */ function useSiteContext(data) {
    let { homepage =""  } = _package_json__WEBPACK_IMPORTED_MODULE_1__;
    // Trim the trailing slash from the end of homepage to avoid
    // double // issues throughout the metadata
    homepage = (0,lib_util__WEBPACK_IMPORTED_MODULE_2__/* .removeLastTrailingSlash */ .bq)(homepage);
    return {
        ...data,
        homepage
    };
}
/**
 * useSite
 */ function useSite() {
    const site = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SiteContext);
    return site;
}


/***/ }),

/***/ 7831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getApolloClient)
/* harmony export */ });
/* unused harmony export _createApolloClient */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6298);


let client;
/**
 * getApolloClient
 */ function getApolloClient() {
    if (!client) {
        client = _createApolloClient();
    }
    return client;
}
/**
 * createApolloClient
 */ function _createApolloClient() {
    return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
        link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({
            uri: (0,lib_util__WEBPACK_IMPORTED_MODULE_1__/* .removeLastTrailingSlash */ .bq)("https://dev.younet.digital/cms/graphql")
        }),
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
            typePolicies: {
                RootQuery: {
                    queryType: true
                },
                RootMutation: {
                    mutationType: true
                }
            }
        }),
        defaultOptions: {
            watchQuery: {
                fetchPolicy: "cache-first",
                // fetchPolicy: 'no-cache',
                errorPolicy: "ignore"
            },
            query: {
                fetchPolicy: "cache-first",
                // fetchPolicy: 'no-cache',
                errorPolicy: "ignore"
            }
        }
    });
}


/***/ }),

/***/ 7588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pU": () => (/* binding */ findMenuByLocation),
  "xz": () => (/* binding */ getAllMenus)
});

// UNUSED EXPORTS: MENU_LOCATION_NAVIGATION_DEFAULT, createMenuFromPages, mapMenuData, mapPagesToMenuItems, parseHierarchicalMenu

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(7831);
// EXTERNAL MODULE: ./src/lib/pages.js + 1 modules
var pages = __webpack_require__(6374);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/menus.js

const QUERY_ALL_MENUS = client_.gql`
  query AllMenus {
    menus {
      edges {
        node {
          id
          menuItems {
            edges {
              node {
                cssClasses
                id
                parentId
                label
                title
                target
                path
              }
            }
          }
          name
          slug
          locations
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/menus.js



const MENU_LOCATION_NAVIGATION_DEFAULT = "DEFAULT_NAVIGATION";
/**
 * getAllMenus
 */ async function getAllMenus() {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const data = await apolloClient.query({
        query: QUERY_ALL_MENUS
    });
    const menus = data?.data.menus.edges.map(mapMenuData);
    const defaultNavigation = createMenuFromPages({
        locations: [
            MENU_LOCATION_NAVIGATION_DEFAULT
        ],
        pages: await (0,pages/* getTopLevelPages */.Gy)({
            queryIncludes: "index"
        })
    });
    menus.push(defaultNavigation);
    return {
        menus
    };
}
/**
 * mapMenuData
 */ function mapMenuData(menu = {}) {
    const { node  } = menu;
    const data = {
        ...node
    };
    data.menuItems = data.menuItems.edges.map(({ node  })=>{
        return {
            ...node
        };
    });
    return data;
}
/**
 * mapPagesToMenuItems
 */ function mapPagesToMenuItems(pages) {
    return pages.map(({ id , uri , title  })=>{
        return {
            label: title,
            path: uri,
            id
        };
    });
}
/**
 * createMenuFromPages
 */ function createMenuFromPages({ locations , pages  }) {
    return {
        menuItems: mapPagesToMenuItems(pages),
        locations
    };
}
/**
 * parseHierarchicalMenu
 */ const parseHierarchicalMenu = (data = [], { idKey ="id" , parentKey ="parentId" , childrenKey ="children"  } = {})=>{
    const tree = [];
    const childrenOf = {};
    data.forEach((item)=>{
        const newItem = {
            ...item
        };
        const { [idKey]: id , [parentKey]: parentId = 0  } = newItem;
        childrenOf[id] = childrenOf[id] || [];
        newItem[childrenKey] = childrenOf[id];
        parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem) : tree.push(newItem);
    });
    return tree;
};
/**
 * findMenuByLocation
 */ function findMenuByLocation(menus, location) {
    if (typeof location !== "string") {
        throw new Error("Failed to find menu by location - location is not a string.");
    }
    const menu = menus.find(({ locations  })=>{
        return locations.map((loc)=>loc.toUpperCase()).includes(location.toUpperCase());
    });
    return menu && parseHierarchicalMenu(menu.menuItems);
}


/***/ }),

/***/ 6374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K0": () => (/* binding */ getAllPages),
  "pJ": () => (/* binding */ getBreadcrumbsByUri),
  "Cg": () => (/* binding */ getPageByUri),
  "Gy": () => (/* binding */ getTopLevelPages),
  "yA": () => (/* binding */ pagePathBySlug)
});

// UNUSED EXPORTS: mapPageData

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(7831);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/pages.js

const PAGE_FIELDS = client_.gql`
  fragment PageFields on Page {
    children {
      edges {
        node {
          id
          slug
          uri
          ... on Page {
            id
            title
          }
        }
      }
    }
    id
    menuOrder
    parent {
      node {
        id
        slug
        uri
        ... on Page {
          title
        }
      }
    }
    slug
    title
    uri
  }
`;
const QUERY_ALL_PAGES_INDEX = client_.gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }
`;
const QUERY_ALL_PAGES_ARCHIVE = client_.gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }
`;
const QUERY_ALL_PAGES = client_.gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PageFields
          content
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
  }
`;
const QUERY_PAGE_BY_URI = client_.gql`
  query PageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      children {
        edges {
          node {
            id
            slug
            uri
            ... on Page {
              id
              title
            }
          }
        }
      }
      content
      featuredImage {
        node {
          altText
          caption
          id
          sizes
          sourceUrl
          srcSet
        }
      }
      id
      menuOrder
      parent {
        node {
          id
          slug
          uri
          ... on Page {
            title
          }
        }
      }
      slug
      title
      uri
    }
  }
`;
const QUERY_PAGE_SEO_BY_URI = client_.gql`
  query PageSEOByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/pages.js


/**
 * pagePathBySlug
 */ function pagePathBySlug(slug) {
    return `/${slug}`;
}
/**
 * getPageByUri
 */ async function getPageByUri(uri) {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const apiHost = new URL("https://dev.younet.digital/cms/graphql").host;
    let pageData;
    let seoData;
    try {
        pageData = await apolloClient.query({
            query: QUERY_PAGE_BY_URI,
            variables: {
                uri
            }
        });
    } catch (e) {
        console.log(`[pages][getPageByUri] Failed to query page data: ${e.message}`);
        throw e;
    }
    if (!pageData?.data.page) return {
        page: undefined
    };
    const page = [
        pageData?.data.page
    ].map(mapPageData)[0];
    // If the SEO plugin is enabled, look up the data
    // and apply it to the default settings
    if (false) {}
    return {
        page
    };
}
/**
 * getAllPages
 */ const allPagesIncludesTypes = {
    all: QUERY_ALL_PAGES,
    archive: QUERY_ALL_PAGES_ARCHIVE,
    index: QUERY_ALL_PAGES_INDEX
};
async function getAllPages(options = {}) {
    const { queryIncludes ="index"  } = options;
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const data = await apolloClient.query({
        query: allPagesIncludesTypes[queryIncludes]
    });
    const pages = data?.data.pages.edges.map(({ node ={}  })=>node).map(mapPageData);
    return {
        pages
    };
}
/**
 * getTopLevelPages
 */ async function getTopLevelPages(options) {
    const { pages  } = await getAllPages(options);
    const navPages = pages.filter(({ parent  })=>parent === null);
    // Order pages by menuOrder
    navPages.sort((a, b)=>parseFloat(a.menuOrder) - parseFloat(b.menuOrder));
    return navPages;
}
/**
 * mapPageData
 */ function mapPageData(page = {}) {
    const data = {
        ...page
    };
    if (data.featuredImage) {
        data.featuredImage = data.featuredImage.node;
    }
    if (data.parent) {
        data.parent = data.parent.node;
    }
    if (data.children) {
        data.children = data.children.edges.map(({ node  })=>node);
    }
    return data;
}
/**
 * getBreadcrumbsByUri
 */ function getBreadcrumbsByUri(uri, pages) {
    const breadcrumbs = [];
    const uriSegments = uri.split("/").filter((segment)=>segment !== "");
    // We don't want to show the current page in the breadcrumbs, so pop off
    // the last chunk before we start
    uriSegments.pop();
    // Work through each of the segments, popping off the last chunk and finding the related
    // page to gather the metadata for the breadcrumbs
    do {
        const breadcrumb = pages.find((page)=>page.uri === `/${uriSegments.join("/")}/`);
        // If the breadcrumb is the active page, we want to pass udefined for the uri to
        // avoid the breadcrumbs being rendered as a link, given it's the current page
        if (breadcrumb) {
            breadcrumbs.push({
                id: breadcrumb.id,
                title: breadcrumb.title,
                uri: breadcrumb.uri
            });
        }
        uriSegments.pop();
    }while (uriSegments.length > 0);
    // When working through the segments, we're doing so from the lowest child to the parent
    // which means the parent will be at the end of the array. We need to reverse to show
    // the correct order for breadcrumbs
    breadcrumbs.reverse();
    return breadcrumbs;
}


/***/ }),

/***/ 7027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z0": () => (/* binding */ constructPageMetadata),
  "Oq": () => (/* binding */ getSiteMetadata),
  "iB": () => (/* binding */ helmetSettingsFromMetadata)
});

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(7831);
// EXTERNAL MODULE: ./src/lib/util.js
var util = __webpack_require__(6298);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/site.js

const QUERY_SITE_DATA = client_.gql`
  query SiteData {
    generalSettings {
      description
      language
      title
    }
  }
`;
const QUERY_SEO_DATA = client_.gql`
  query SeoData {
    seo {
      webmaster {
        yandexVerify
        msVerify
        googleVerify
        baiduVerify
      }
      social {
        youTube {
          url
        }
        wikipedia {
          url
        }
        twitter {
          username
          cardType
        }
        pinterest {
          metaTag
          url
        }
        mySpace {
          url
        }
        linkedIn {
          url
        }
        instagram {
          url
        }
        facebook {
          url
          defaultImage {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/site.js



/**
 * getSiteMetadata
 */ async function getSiteMetadata() {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    let siteData;
    let seoData;
    try {
        siteData = await apolloClient.query({
            query: QUERY_SITE_DATA
        });
    } catch (e) {
        console.log(`[site][getSiteMetadata] Failed to query site data: ${e.message}`);
        throw e;
    }
    const { generalSettings  } = siteData?.data || {};
    let { title , description , language  } = generalSettings;
    const settings = {
        title,
        siteTitle: title,
        description
    };
    // It looks like the value of `language` when US English is set
    // in WordPress is empty or "", meaning, we have to infer that
    // if there's no value, it's English. On the other hand, if there
    // is a code, we need to grab the 2char version of it to use ofr
    // the HTML lang attribute
    if (!language || language === "") {
        settings.language = "en";
    } else {
        settings.language = language.split("_")[0];
    }
    // If the SEO plugin is enabled, look up the data
    // and apply it to the default settings
    if (false) {}
    settings.title = (0,util/* decodeHtmlEntities */.aV)(settings.title);
    return settings;
}
/**
 * constructHelmetData
 */ function constructPageMetadata(defaultMetadata = {}, pageMetadata = {}, options = {}) {
    const { router ={} , homepage =""  } = options;
    const { asPath  } = router;
    const url = `${homepage}${asPath}`;
    const pathname = new URL(url).pathname;
    const canonical = pageMetadata.canonical || `${homepage}${pathname}`;
    const metadata = {
        canonical,
        og: {
            url
        },
        twitter: {}
    };
    // Static Properties
    // Loop through top level metadata properties that rely on a non-object value
    const staticProperties = [
        "description",
        "language",
        "title"
    ];
    staticProperties.forEach((property)=>{
        const value = typeof pageMetadata[property] !== "undefined" ? pageMetadata[property] : defaultMetadata[property];
        if (typeof value === "undefined") return;
        metadata[property] = value;
    });
    // Open Graph Properties
    // Loop through Open Graph properties that rely on a non-object value
    if (pageMetadata.og) {
        const ogProperties = [
            "description",
            "imageUrl",
            "imageHeight",
            "imageSecureUrl",
            "imageWidth",
            "title",
            "type"
        ];
        ogProperties.forEach((property)=>{
            const pageOg = pageMetadata.og?.[property];
            const pageStatic = pageMetadata[property];
            const defaultOg = defaultMetadata.og?.[property];
            const defaultStatic = defaultMetadata[property];
            const value = pageOg || pageStatic || defaultOg || defaultStatic;
            if (typeof value === "undefined") return;
            metadata.og[property] = value;
        });
    }
    // Twitter Properties
    // Loop through Twitter properties that rely on a non-object value
    if (pageMetadata.twitter) {
        const twitterProperties = [
            "cardType",
            "description",
            "imageUrl",
            "title",
            "username"
        ];
        twitterProperties.forEach((property)=>{
            const pageTwitter = pageMetadata.twitter?.[property];
            const pageOg = metadata.og[property];
            const value = pageTwitter || pageOg;
            if (typeof value === "undefined") return;
            metadata.twitter[property] = value;
        });
    }
    // Article Properties
    // Loop through article properties that rely on a non-object value
    if (metadata.og.type === "article" && pageMetadata.article) {
        metadata.article = {};
        const articleProperties = [
            "author",
            "modifiedTime",
            "publishedTime",
            "publisher"
        ];
        articleProperties.forEach((property)=>{
            const value = pageMetadata.article[property];
            if (typeof value === "undefined") return;
            metadata.article[property] = value;
        });
    }
    return metadata;
}
/**
 * helmetSettingsFromMetadata
 */ function helmetSettingsFromMetadata(metadata = {}, options = {}) {
    const { link =[] , meta =[] , setTitle =true  } = options;
    const sanitizedDescription = (0,util/* removeExtraSpaces */.zm)(metadata.description);
    const settings = {
        htmlAttributes: {
            lang: metadata.language
        }
    };
    if (setTitle) {
        settings.title = metadata.title;
    }
    settings.link = [
        ...link,
        {
            rel: "canonical",
            href: metadata.canonical
        }
    ].filter(({ href  } = {})=>!!href);
    settings.meta = [
        ...meta,
        {
            name: "description",
            content: sanitizedDescription
        },
        {
            property: "og:title",
            content: metadata.og?.title || metadata.title
        },
        {
            property: "og:description",
            content: metadata.og?.description || sanitizedDescription
        },
        {
            property: "og:url",
            content: metadata.og?.url
        },
        {
            property: "og:image",
            content: metadata.og?.imageUrl
        },
        {
            property: "og:image:secure_url",
            content: metadata.og?.imageSecureUrl
        },
        {
            property: "og:image:width",
            content: metadata.og?.imageWidth
        },
        {
            property: "og:image:height",
            content: metadata.og?.imageHeight
        },
        {
            property: "og:type",
            content: metadata.og?.type || "website"
        },
        {
            property: "og:site_name",
            content: metadata.siteTitle
        },
        {
            property: "twitter:title",
            content: metadata.twitter?.title || metadata.og?.title || metadata.title
        },
        {
            property: "twitter:description",
            content: metadata.twitter?.description || metadata.og?.description || sanitizedDescription
        },
        {
            property: "twitter:image",
            content: metadata.twitter?.imageUrl || metadata.og?.imageUrl
        },
        {
            property: "twitter:site",
            content: metadata.twitter?.username && `@${metadata.twitter.username}`
        },
        {
            property: "twitter:card",
            content: metadata.twitter?.cardType
        },
        {
            property: "article:modified_time",
            content: metadata.article?.modifiedTime
        },
        {
            property: "article:published_time",
            content: metadata.article?.publishedTime
        }
    ].filter(({ content  } = {})=>!!content);
    return settings;
}


/***/ }),

/***/ 6298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aV": () => (/* binding */ decodeHtmlEntities),
/* harmony export */   "bq": () => (/* binding */ removeLastTrailingSlash),
/* harmony export */   "zm": () => (/* binding */ removeExtraSpaces)
/* harmony export */ });
/**
 * decodeHtmlEntities
 */ function decodeHtmlEntities(text) {
    if (typeof text !== "string") {
        throw new Error(`Failed to decode HTML entity: invalid type ${typeof text}`);
    }
    let decoded = text;
    const entities = {
        "&amp;": "&",
        "&quot;": '"',
        "&#039;": "'"
    };
    return decoded.replace(/&amp;|&quot;|&#039;/g, (char)=>entities[char]);
}
/**
 * removeLastTrailingSlash
 */ function removeLastTrailingSlash(url) {
    if (typeof url !== "string") return url;
    return url.replace(/\/$/, "");
}
function removeExtraSpaces(text) {
    if (typeof text !== "string") return;
    return text.replace(/\s+/g, " ").trim();
}


/***/ }),

/***/ 4147:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Younet","homepage":"http://localhost","version":"0.1.0","scripts":{"build":"next build","dev":"next dev","export":"next export","format":"yarn lint --fix","format:no-path":"yarn lint:no-path --fix","lint":"eslint .","lint:no-path":"eslint","start":"NODE_ENV=production node server.js"},"lint-staged":{"**/*.js":"yarn format:no-path","**/*.scss":"yarn prettier --write"},"dependencies":{"@apollo/client":"^3.7.4","date-fns":"^2.29.3","graphql":"^16.6.0","he":"^1.2.0","next":"13.0.1","nextjs-progressbar":"^0.0.14","parameterize":"^1.0.0","react":"18.2.0","react-dom":"18.2.0","react-helmet":"^6.1.0","react-icons":"^4.7.1","rss":"^1.2.2"},"devDependencies":{"@tailwindcss/jit":"^0.1.18","autoprefixer":"^10.4.13","eslint":"8.23.1","eslint-config-next":"^12.3.1","eslint-config-prettier":"^8.6.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-react":"^7.32.1","lint-staged":">=13.1.0","playwright":"^1.26.0","postcss":"^8.4.21","prettier":"2.7.1","tailwindcss":"^2.0.3"}}');

/***/ })

};
;