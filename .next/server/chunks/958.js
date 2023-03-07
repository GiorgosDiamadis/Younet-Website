"use strict";
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate),
/* harmony export */   "v": () => (/* binding */ sortObjectsByDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

/**
 * formatDate
 */ function formatDate(date, pattern = "PPP") {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(date), pattern);
}
/**
 * sortObjectsByDate
 */ function sortObjectsByDate(array, { key ="date"  } = {}) {
    return array.sort((a, b)=>new Date(b[key]) - new Date(a[key]));
}


/***/ }),

/***/ 3958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bd": () => (/* binding */ getAllPosts),
  "vp": () => (/* binding */ getBrands),
  "tm": () => (/* binding */ getPagesCount),
  "BP": () => (/* binding */ getPaginatedPosts),
  "zQ": () => (/* binding */ getPostBySlug),
  "DI": () => (/* binding */ getPostsByAuthorSlug),
  "qd": () => (/* binding */ getPostsByCategoryId),
  "no": () => (/* binding */ getRecentPosts),
  "EE": () => (/* binding */ getRelatedPosts),
  "U2": () => (/* binding */ getServices),
  "F3": () => (/* binding */ postPathBySlug),
  "$4": () => (/* binding */ sanitizeExcerpt)
});

// UNUSED EXPORTS: getPostsPerPage, mapPostData, sortStickyPosts

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(7831);
// EXTERNAL MODULE: ./src/lib/users.js + 1 modules
var users = __webpack_require__(5584);
// EXTERNAL MODULE: ./src/lib/datetime.js
var datetime = __webpack_require__(537);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/posts.js

const POST_FIELDS = client_.gql`
  fragment PostFields on Post {
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
    databaseId
    date
    isSticky
    postId
    slug
    title
  }
`;
const QUERY_ALL_POSTS_INDEX = client_.gql`
  ${POST_FIELDS}
  query AllPostsIndex {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;
const QUERY_ALL_POSTS_ARCHIVE = client_.gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;
const QUERY_ALL_SERVICES_HOME = client_.gql`
query AllServices {
  services {
    nodes {
      content
      id
      slug
      title(format: RENDERED)
      link
      uri
      services {
        frontButtonText
        serviceFrontShortDescription
        serviceBgImage {
          altText
          caption
          sourceUrl
          srcSet
        }
      }
    }
  }
}

`;
const QUERY_ALL_BRANDS_HOME = client_.gql`
query AllBrands {
  brands {
    nodes {
      brandId
      title
      uri
      slug
      link
      brands {
        brandImage {
          altText
          id
          sourceUrl
          title
        }
      }
    }
  }
}

`;
const QUERY_ALL_POSTS = client_.gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;
const QUERY_POST_BY_SLUG = client_.gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      author {
        node {
          avatar {
            height
            url
            width
          }
          id
          name
          slug
        }
      }
      id
      categories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      content
      date
      excerpt
      featuredImage {
        node {
          altText
          caption
          sourceUrl
          srcSet
          sizes
          id
        }
      }
      modified
      databaseId
      title
      slug
      isSticky
    }
  }
`;
const QUERY_POSTS_BY_CATEGORY_ID_INDEX = client_.gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE = client_.gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_CATEGORY_ID = client_.gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
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
          modified
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_AUTHOR_SLUG_INDEX = client_.gql`
  ${POST_FIELDS}
  query PostByAuthorSlugIndex($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE = client_.gql`
  ${POST_FIELDS}
  query PostByAuthorSlugArchive($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
        }
      }
    }
  }
`;
const QUERY_POSTS_BY_AUTHOR_SLUG = client_.gql`
  ${POST_FIELDS}
  query PostByAuthorSlug($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
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
          modified
        }
      }
    }
  }
`;
const QUERY_POST_SEO_BY_SLUG = client_.gql`
  query PostSEOBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
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
const QUERY_POST_PER_PAGE = client_.gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/posts.js




/**
 * postPathBySlug
 */ function postPathBySlug(slug) {
    return `/posts/${slug}`;
}
/**
 * getPostBySlug
 */ async function getPostBySlug(slug) {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const apiHost = new URL("https://dev.younet.digital/cms/graphql").host;
    let postData;
    let seoData;
    try {
        postData = await apolloClient.query({
            query: QUERY_POST_BY_SLUG,
            variables: {
                slug
            }
        });
    } catch (e) {
        console.log(`[posts][getPostBySlug] Failed to query post data: ${e.message}`);
        throw e;
    }
    if (!postData?.data.post) return {
        post: undefined
    };
    const post = [
        postData?.data.post
    ].map(mapPostData)[0];
    // If the SEO plugin is enabled, look up the data
    // and apply it to the default settings
    if (false) {}
    return {
        post
    };
}
/**
 * getAllPosts
 */ const allPostsIncludesTypes = {
    all: QUERY_ALL_POSTS,
    archive: QUERY_ALL_POSTS_ARCHIVE,
    index: QUERY_ALL_POSTS_INDEX
};
async function getAllPosts(options = {}) {
    const { queryIncludes ="index"  } = options;
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const data = await apolloClient.query({
        query: allPostsIncludesTypes[queryIncludes]
    });
    const posts = data?.data.posts.edges.map(({ node ={}  })=>node);
    return {
        posts: Array.isArray(posts) && posts.map(mapPostData)
    };
}
/**
 * getPostsByAuthorSlug
 */ const postsByAuthorSlugIncludesTypes = {
    all: QUERY_POSTS_BY_AUTHOR_SLUG,
    archive: QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
    index: QUERY_POSTS_BY_AUTHOR_SLUG_INDEX
};
async function getPostsByAuthorSlug({ slug , ...options }) {
    const { queryIncludes ="index"  } = options;
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    let postData;
    try {
        postData = await apolloClient.query({
            query: postsByAuthorSlugIncludesTypes[queryIncludes],
            variables: {
                slug
            }
        });
    } catch (e) {
        console.log(`[posts][getPostsByAuthorSlug] Failed to query post data: ${e.message}`);
        throw e;
    }
    const posts = postData?.data.posts.edges.map(({ node ={}  })=>node);
    return {
        posts: Array.isArray(posts) && posts.map(mapPostData)
    };
}
/**
 * getPostsByCategoryId
 */ const postsByCategoryIdIncludesTypes = {
    all: QUERY_POSTS_BY_CATEGORY_ID,
    archive: QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
    index: QUERY_POSTS_BY_CATEGORY_ID_INDEX
};
async function getPostsByCategoryId({ categoryId , ...options }) {
    const { queryIncludes ="index"  } = options;
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    let postData;
    try {
        postData = await apolloClient.query({
            query: postsByCategoryIdIncludesTypes[queryIncludes],
            variables: {
                categoryId
            }
        });
    } catch (e) {
        console.log(`[posts][getPostsByCategoryId] Failed to query post data: ${e.message}`);
        throw e;
    }
    const posts = postData?.data.posts.edges.map(({ node ={}  })=>node);
    return {
        posts: Array.isArray(posts) && posts.map(mapPostData)
    };
}
/**
 * getRecentPosts
 */ async function getRecentPosts({ count , ...options }) {
    const { posts  } = await getAllPosts(options);
    const sorted = (0,datetime/* sortObjectsByDate */.v)(posts);
    return {
        posts: sorted.slice(0, count)
    };
}
/**
 * sanitizeExcerpt
 */ function sanitizeExcerpt(excerpt) {
    if (typeof excerpt !== "string") {
        throw new Error(`Failed to sanitize excerpt: invalid type ${typeof excerpt}`);
    }
    let sanitized = excerpt;
    // If the theme includes [...] as the more indication, clean it up to just ...
    sanitized = sanitized.replace(/\s?\[&hellip;\]/, "&hellip;");
    // If after the above replacement, the ellipsis includes 4 dots, it's
    // the end of a setence
    sanitized = sanitized.replace("....", ".");
    sanitized = sanitized.replace(".&hellip;", ".");
    // If the theme is including a "Continue..." link, remove it
    sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, "");
    return sanitized;
}
/**
 * mapPostData
 */ function mapPostData(post = {}) {
    const data = {
        ...post
    };
    // Clean up the author object to avoid someone having to look an extra
    // level deeper into the node
    if (data.author) {
        data.author = {
            ...data.author.node
        };
    }
    // The URL by default that comes from Gravatar / WordPress is not a secure
    // URL. This ends up redirecting to https, but it gives mixed content warnings
    // as the HTML shows it as http. Replace the url to avoid those warnings
    // and provide a secure URL by default
    if (data.author?.avatar) {
        data.author.avatar = (0,users/* updateUserAvatar */.BA)(data.author.avatar);
    }
    // Clean up the categories to make them more easy to access
    if (data.categories) {
        data.categories = data.categories.edges.map(({ node  })=>{
            return {
                ...node
            };
        });
    }
    // Clean up the featured image to make them more easy to access
    if (data.featuredImage) {
        data.featuredImage = data.featuredImage.node;
    }
    return data;
}
/**
 * getRelatedPosts
 */ async function getRelatedPosts(categories, postId, count = 5) {
    if (!Array.isArray(categories) || categories.length === 0) return;
    let related = {
        category: categories && categories.shift()
    };
    if (related.category) {
        const { posts  } = await getPostsByCategoryId({
            categoryId: related.category.databaseId,
            queryIncludes: "archive"
        });
        const filtered = posts.filter(({ postId: id  })=>id !== postId);
        const sorted = (0,datetime/* sortObjectsByDate */.v)(filtered);
        related.posts = sorted.map((post)=>({
                title: post.title,
                slug: post.slug
            }));
    }
    if (!Array.isArray(related.posts) || related.posts.length === 0) {
        const relatedPosts = await getRelatedPosts(categories, postId, count);
        related = relatedPosts || related;
    }
    if (Array.isArray(related.posts) && related.posts.length > count) {
        return related.posts.slice(0, count);
    }
    return related;
}
/**
 * sortStickyPosts
 */ function sortStickyPosts(posts) {
    return [
        ...posts
    ].sort((post)=>post.isSticky ? -1 : 1);
}
/**
 * getPostsPerPage
 */ async function getPostsPerPage() {
    //If POST_PER_PAGE is defined at next.config.js
    if (process.env.POSTS_PER_PAGE) {
        console.warn('You are using the deprecated POST_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").');
        return Number(process.env.POSTS_PER_PAGE);
    }
    try {
        const apolloClient = (0,apollo_client/* getApolloClient */.W)();
        const { data  } = await apolloClient.query({
            query: QUERY_POST_PER_PAGE
        });
        return Number(data.allSettings.readingSettingsPostsPerPage);
    } catch (e) {
        console.log(`Failed to query post per page data: ${e.message}`);
        throw e;
    }
}
/**
 * getPageCount
 */ async function getPagesCount(posts, postsPerPage) {
    const _postsPerPage = postsPerPage ?? await getPostsPerPage();
    return Math.ceil(posts.length / _postsPerPage);
}
/**
 * getPaginatedPosts
 */ async function getPaginatedPosts({ currentPage =1 , ...options } = {}) {
    const { posts  } = await getAllPosts(options);
    const postsPerPage = await getPostsPerPage();
    const pagesCount = await getPagesCount(posts, postsPerPage);
    let page = Number(currentPage);
    if (typeof page === "undefined" || isNaN(page)) {
        page = 1;
    } else if (page > pagesCount) {
        return {
            posts: [],
            pagination: {
                currentPage: undefined,
                pagesCount
            }
        };
    }
    const offset = postsPerPage * (page - 1);
    const sortedPosts = sortStickyPosts(posts);
    return {
        posts: sortedPosts.slice(offset, offset + postsPerPage),
        pagination: {
            currentPage: page,
            pagesCount
        }
    };
}
async function getAllServices() {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const data = await apolloClient.query({
        query: QUERY_ALL_SERVICES_HOME
    });
    const queriedServices = [];
    data.data.services.nodes.forEach(({ slug , title , link , id , uri , services  })=>{
        queriedServices.push({
            slug,
            title,
            id,
            path: uri,
            ...services
        });
    });
    return {
        services: queriedServices
    };
}
async function getServices() {
    const { services  } = await getAllServices();
    return {
        services
    };
}
async function getAllBrands() {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const data = await apolloClient.query({
        query: QUERY_ALL_BRANDS_HOME
    });
    const queriedBrands = [];
    data.data.brands.nodes.forEach(({ brandId , title , uri , slug , link , brands  })=>{
        queriedBrands.push({
            brandId,
            title,
            uri,
            slug,
            link,
            alt: brands.brandImage.altText,
            imgId: brands.brandImage.id,
            imgUrl: brands.brandImage.sourceUrl
        });
    });
    return {
        brands: queriedBrands
    };
}
async function getBrands() {
    const { brands  } = await getAllBrands();
    return {
        brands
    };
}


/***/ }),

/***/ 5584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h$": () => (/* binding */ authorPathByName),
  "uk": () => (/* binding */ getAllAuthors),
  "Wt": () => (/* binding */ getUserByNameSlug),
  "BA": () => (/* binding */ updateUserAvatar),
  "d4": () => (/* binding */ userSlugByName)
});

// UNUSED EXPORTS: authorPathBySlug, getAllUsers, getUserBySlug, mapUserData

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(7831);
// EXTERNAL MODULE: external "parameterize"
var external_parameterize_ = __webpack_require__(8181);
var external_parameterize_default = /*#__PURE__*/__webpack_require__.n(external_parameterize_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/users.js

const QUERY_ALL_USERS = client_.gql`
  query AllUsers {
    users(first: 10000) {
      edges {
        node {
          avatar {
            height
            width
            url
          }
          description
          id
          name
          roles {
            nodes {
              name
            }
          }
          slug
        }
      }
    }
  }
`;
const QUERY_ALL_USERS_SEO = client_.gql`
  query AllUsersSeo {
    users(first: 10000) {
      edges {
        node {
          id
          seo {
            metaDesc
            metaRobotsNofollow
            metaRobotsNoindex
            title
            social {
              youTube
              wikipedia
              twitter
              soundCloud
              pinterest
              mySpace
              linkedIn
              instagram
              facebook
            }
          }
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/lib/users.js



// const ROLES_AUTHOR = ['author', 'administrator'];
/**
 * postPathBySlug
 */ function authorPathBySlug(slug) {
    return `/authors/${slug}`;
}
/**
 * getUserBySlug
 */ async function getUserBySlug(slug) {
    const { users  } = await getAllUsers();
    const user = users.find((user)=>user.slug === slug);
    return {
        user
    };
}
/**
 * authorPathByName
 */ function authorPathByName(name) {
    return `/authors/${external_parameterize_default()(name)}`;
}
/**
 * getUserByNameSlug
 */ async function getUserByNameSlug(name) {
    const { users  } = await getAllUsers();
    const user = users.find((user)=>external_parameterize_default()(user.name) === name);
    return {
        user
    };
}
/**
 * userSlugByName
 */ function userSlugByName(name) {
    return external_parameterize_default()(name);
}
/**
 * getAllUsers
 */ async function getAllUsers() {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    let usersData;
    let seoData;
    try {
        usersData = await apolloClient.query({
            query: QUERY_ALL_USERS
        });
    } catch (e) {
        console.log(`[users][getAllUsers] Failed to query users data: ${e.message}`);
        throw e;
    }
    let users = usersData?.data.users.edges.map(({ node ={}  })=>node).map(mapUserData);
    // If the SEO plugin is enabled, look up the data
    // and apply it to the default settings
    if (false) {}
    return {
        users
    };
}
/**
 * getAllAuthors
 */ async function getAllAuthors() {
    const { users  } = await getAllUsers();
    // TODO: Roles aren't showing in response - we should be filtering here
    // const authors = users.filter(({ roles }) => {
    //   const userRoles = roles.map(({ name }) => name);
    //   const authorRoles = userRoles.filter(role => ROLES_AUTHOR.includes(role));
    //   return authorRoles.length > 0;
    // });
    return {
        authors: users
    };
}
/**
 * mapUserData
 */ function mapUserData(user) {
    return {
        ...user,
        roles: [
            ...user.roles.nodes
        ],
        avatar: user.avatar && updateUserAvatar(user.avatar)
    };
}
/**
 * updateUserAvatar
 */ function updateUserAvatar(avatar) {
    // The URL by default that comes from Gravatar / WordPress is not a secure
    // URL. This ends up redirecting to https, but it gives mixed content warnings
    // as the HTML shows it as http. Replace the url to avoid those warnings
    // and provide a secure URL by default
    return {
        ...avatar,
        url: avatar.url?.replace("http://", "https://")
    };
}


/***/ })

};
;