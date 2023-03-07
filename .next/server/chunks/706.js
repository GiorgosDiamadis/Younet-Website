"use strict";
exports.id = 706;
exports.ids = [706];
exports.modules = {

/***/ 7706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I5": () => (/* binding */ categoryPathBySlug),
  "tG": () => (/* binding */ getAllCategories),
  "fj": () => (/* binding */ getCategoryBySlug)
});

// UNUSED EXPORTS: getCategories, mapCategoryData

// EXTERNAL MODULE: ./src/lib/apollo-client.js
var apollo_client = __webpack_require__(7831);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/data/categories.js

const QUERY_ALL_CATEGORIES = client_.gql`
  query AllCategories {
    categories(first: 10000) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
        }
      }
    }
  }
`;
const QUERY_CATEGORY_BY_SLUG = client_.gql`
  query CategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      databaseId
      description
      id
      name
      slug
    }
  }
`;
const QUERY_CATEGORY_SEO_BY_SLUG = client_.gql`
  query CategorySEOBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
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

;// CONCATENATED MODULE: ./src/lib/categories.js


/**
 * categoryPathBySlug
 */ function categoryPathBySlug(slug) {
    return `/categories/${slug}`;
}
/**
 * getAllCategories
 */ async function getAllCategories() {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const data = await apolloClient.query({
        query: QUERY_ALL_CATEGORIES
    });
    const categories = data?.data.categories.edges.map(({ node ={}  })=>node);
    return {
        categories
    };
}
/**
 * getCategoryBySlug
 */ async function getCategoryBySlug(slug) {
    const apolloClient = (0,apollo_client/* getApolloClient */.W)();
    const apiHost = new URL("https://dev.younet.digital/cms/graphql").host;
    let categoryData;
    let seoData;
    try {
        categoryData = await apolloClient.query({
            query: QUERY_CATEGORY_BY_SLUG,
            variables: {
                slug
            }
        });
    } catch (e) {
        console.log(`[categories][getCategoryBySlug] Failed to query category data: ${e.message}`);
        throw e;
    }
    if (!categoryData?.data.category) return {
        category: undefined
    };
    const category = mapCategoryData(categoryData?.data.category);
    // If the SEO plugin is enabled, look up the data
    // and apply it to the default settings
    if (false) {}
    return {
        category
    };
}
/**
 * getCategories
 */ async function getCategories({ count  } = {}) {
    const { categories  } = await getAllCategories();
    return {
        categories: categories.slice(0, count)
    };
}
/**
 * mapCategoryData
 */ function mapCategoryData(category = {}) {
    const data = {
        ...category
    };
    return data;
}


/***/ })

};
;