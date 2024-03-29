import {gql} from '@apollo/client'

export const POST_FIELDS = gql`
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
    featuredImage {
        node {
          sourceUrl
          altText
        }
    }
  }
`

export const QUERY_ALL_POSTS_INDEX = gql`
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
`


export const QUERY_ALL_POSTS_ARCHIVE = gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts(first: 10000, where: { language: EL }) {
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
          slug
        }
      }
    }
  }
`

//


export const buildServicesQuery = (categoryId) => {
    return gql`
  query ServicesByCategoryQuery {
  servicesCategories(where: {termTaxonomyId: "${categoryId}"}) {
     nodes {
      contentNodes {
        nodes {
          ... on Service {
            id
            services {
              fieldGroupName
              frontbuttonlink {
                ... on Page {
                  id
                  slug
                }
                ... on Service {
                  id
                  slug
                }
                ... on Project {
                  id
                  slug
                }
                ... on Brand {
                  id
                  slug
                }
              }
              frontButtonText
              serviceFrontShortDescription
              serviceBgImage {
                altText
                slug
                sourceUrl
                uri
                title
              }
            }
            title
            uri
          }
          slug
          link
        }
      }
    }
  }
}
  `
}
export const QUERY_ALL_SERVICES_HOME = gql`
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

`
export const QUERY_PROJECT_CATEGORIES = gql`
query ProjectCategoriesQuery {
  projectCategories {
    nodes {
      taxonomyName
      id
      name
      link
      termTaxonomyId
      count
    }
  }
}
`

export const buildProjectQuery = (categoryId) => {
    return gql`
    query ProjectsQuery {
  projectCategories(where: {termTaxonomId: "${categoryId}"}) {
    nodes {
      slug
      id
      termTaxonomyId
      contentNodes {
        nodes {
          slug
          ... on Project {
            projects {
              fieldGroupName
              websiteUrl
              projectShortDescription
              projectOnHoverImage {
                altText
                sourceUrl
                title
                uri
                slug
              }
              projectCompanyLogo {
                altText
                sourceUrl
                title
                slug
                id
              }
              projectBackgroundImage {
                altText
                sourceUrl
                slug
                title
              }
            }
            title
            id
          }
          link
        }
      }
    }
  }
}
    `
}

export const QUERY_ALL_PROJECTS = gql`
query ProjectsQuery {
  projects(where: {}) {
    nodes {
      projects {
        fieldGroupName
        projectBackgroundImage {
          id
          slug
          srcSet
          sourceUrl
          title
        }
        projectCompanyLogo {
          id
          sourceUrl
          srcSet
          slug
          title
        }
        projectShortDescription
        projectOnHoverImage {
          id
          srcSet
          sourceUrl
          slug
          title
        }
        websiteUrl
      }
      title
    }
  }
}

`


export const QUERY_ALL_BRANDS_HOME = gql`
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

`
export const QUERY_ALL_PAGES = gql`
query AllPages {
pages {
    nodes {
      content
      id
      pageId
      slug
      title
      uri
      featuredImage {
        node {
          altText
          title
          uri
          sourceUrl
          slug
        }
      }
      servicesDataForPages {
        fieldGroupName
        servicesCategoryId
        isServicesPage
      }
    }
  }
  }
`
export const QUERY_ALL_POSTS = gql`
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
`

export const QUERY_POST_BY_SLUG = gql`
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
`


export const QUERY_PAGE_BY_SLUG = gql`
  query PageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
    content
    date
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
    servicesDataForPages {
        fieldGroupName
        servicesCategoryId
        isServicesPage
      }
    modified
    databaseId
    title
    slug
    }
  }
`

export const QUERY_POSTS_BY_CATEGORY_ID_INDEX = gql`
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
`

export const QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE = gql`
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
`

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
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
`

export const QUERY_POSTS_BY_AUTHOR_SLUG_INDEX = gql`
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
`

export const QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE = gql`
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
`

export const QUERY_POSTS_BY_AUTHOR_SLUG = gql`
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
`

export const QUERY_POST_SEO_BY_SLUG = gql`
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
`

export const QUERY_PAGE_SEO_BY_SLUG = gql`
  query PageSEOBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
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
`

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`
