import {getApolloClient} from 'lib/apollo-client'

import {updateUserAvatar} from 'lib/users'
import {sortObjectsByDate} from 'lib/datetime'

import {
    buildProjectQuery,
    buildServicesQuery,
    QUERY_ALL_BRANDS_HOME, QUERY_ALL_PAGES,
    QUERY_ALL_POSTS,
    QUERY_ALL_POSTS_ARCHIVE,
    QUERY_ALL_POSTS_INDEX, QUERY_PAGE_BY_SLUG, QUERY_PAGE_SEO_BY_SLUG,
    QUERY_POST_BY_SLUG,
    QUERY_POST_PER_PAGE,
    QUERY_POST_SEO_BY_SLUG,
    QUERY_POSTS_BY_AUTHOR_SLUG,
    QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
    QUERY_POSTS_BY_AUTHOR_SLUG_INDEX,
    QUERY_POSTS_BY_CATEGORY_ID,
    QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
    QUERY_POSTS_BY_CATEGORY_ID_INDEX,
    QUERY_PROJECT_CATEGORIES
} from 'data/posts'


export function postPathBySlug(slug) {
    return `/posts/${slug}`
}

export async function getPageBySlug(slug) {
    const apolloClient = getApolloClient()
    const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host

    let pageData
    let seoData

    try {
        pageData = await apolloClient.query({
            query: QUERY_PAGE_BY_SLUG,
            variables: {
                slug
            }
        })
    } catch (e) {
        console.log(`[posts][getPostBySlug] Failed to query post data: ${e.message}`)
        throw e
    }

    if (!pageData?.data.page) return {post: undefined}

    const page = pageData?.data.page

    if (process.env.WORDPRESS_PLUGIN_SEO === true) {
        try {
            seoData = await apolloClient.query({
                query: QUERY_PAGE_SEO_BY_SLUG,
                variables: {
                    slug
                }
            })
        } catch (e) {
            console.log(`[posts][getPostBySlug] Failed to query SEO plugin: ${e.message}`)
            console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.')
            throw e
        }


        const {seo = {}} = seoData?.data?.page || {}

        page.metaTitle = seo.title
        page.metaDescription = seo.metaDesc
        page.readingTime = seo.readingTime


        if (seo.canonical && !seo.canonical.includes(apiHost)) {
            page.canonical = seo.canonical
        }

        page.og = {
            author: seo.opengraphAuthor,
            description: seo.opengraphDescription,
            image: seo.opengraphImage,
            modifiedTime: seo.opengraphModifiedTime,
            publishedTime: seo.opengraphPublishedTime,
            publisher: seo.opengraphPublisher,
            title: seo.opengraphTitle,
            type: seo.opengraphType
        }

        page.article = {
            author: page.og.author,
            modifiedTime: page.og.modifiedTime,
            publishedTime: page.og.publishedTime,
            publisher: page.og.publisher
        }

        page.robots = {
            nofollow: seo.metaRobotsNofollow,
            noindex: seo.metaRobotsNoindex
        }

        page.twitter = {
            description: seo.twitterDescription,
            image: seo.twitterImage,
            title: seo.twitterTitle
        }
    }


    return {
         page
    }
}


export async function getPostBySlug(slug) {
    const apolloClient = getApolloClient()
    const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host

    let postData
    let seoData

    try {
        postData = await apolloClient.query({
            query: QUERY_POST_BY_SLUG,
            variables: {
                slug
            }
        })
    } catch (e) {
        console.log(`[posts][getPostBySlug] Failed to query post data: ${e.message}`)
        throw e
    }

    if (!postData?.data.post) return {post: undefined}

    const post = [postData?.data.post].map(mapPostData)[0]


    if (process.env.WORDPRESS_PLUGIN_SEO === true) {
        try {
            seoData = await apolloClient.query({
                query: QUERY_POST_SEO_BY_SLUG,
                variables: {
                    slug
                }
            })
        } catch (e) {
            console.log(`[posts][getPostBySlug] Failed to query SEO plugin: ${e.message}`)
            console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.')
            throw e
        }

        const {seo = {}} = seoData?.data?.post || {}

        post.metaTitle = seo.title
        post.metaDescription = seo.metaDesc
        post.readingTime = seo.readingTime


        if (seo.canonical && !seo.canonical.includes(apiHost)) {
            post.canonical = seo.canonical
        }

        post.og = {
            author: seo.opengraphAuthor,
            description: seo.opengraphDescription,
            image: seo.opengraphImage,
            modifiedTime: seo.opengraphModifiedTime,
            publishedTime: seo.opengraphPublishedTime,
            publisher: seo.opengraphPublisher,
            title: seo.opengraphTitle,
            type: seo.opengraphType
        }

        post.article = {
            author: post.og.author,
            modifiedTime: post.og.modifiedTime,
            publishedTime: post.og.publishedTime,
            publisher: post.og.publisher
        }

        post.robots = {
            nofollow: seo.metaRobotsNofollow,
            noindex: seo.metaRobotsNoindex
        }

        post.twitter = {
            description: seo.twitterDescription,
            image: seo.twitterImage,
            title: seo.twitterTitle
        }
    }

    return {
        post
    }
}


const allPostsIncludesTypes = {
    all: QUERY_ALL_POSTS,
    archive: QUERY_ALL_POSTS_ARCHIVE,
    index: QUERY_ALL_POSTS_INDEX
}

export async function getAllPages() {

    const apolloClient = getApolloClient()

    const data = await apolloClient.query({
        query: QUERY_ALL_PAGES
    })


    const pages = data?.data.pages.nodes.map((node) => node)


    return {
        pages
    }
}

export async function getAllPosts(options = {}) {
    const {queryIncludes = 'index'} = options

    const apolloClient = getApolloClient()

    const data = await apolloClient.query({
        query: allPostsIncludesTypes[queryIncludes]
    })


    const posts = data?.data.posts.edges.map(({node = {}}) => node)


    return {
        posts: Array.isArray(posts) && posts.map(mapPostData)
    }
}


const postsByAuthorSlugIncludesTypes = {
    all: QUERY_POSTS_BY_AUTHOR_SLUG,
    archive: QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
    index: QUERY_POSTS_BY_AUTHOR_SLUG_INDEX
}

export async function getPostsByAuthorSlug({slug, ...options}) {
    const {queryIncludes = 'index'} = options

    const apolloClient = getApolloClient()

    let postData

    try {
        postData = await apolloClient.query({
            query: postsByAuthorSlugIncludesTypes[queryIncludes],
            variables: {
                slug
            }
        })
    } catch (e) {
        console.log(`[posts][getPostsByAuthorSlug] Failed to query post data: ${e.message}`)
        throw e
    }

    const posts = postData?.data.posts.edges.map(({node = {}}) => node)

    return {
        posts: Array.isArray(posts) && posts.map(mapPostData)
    }
}


const postsByCategoryIdIncludesTypes = {
    all: QUERY_POSTS_BY_CATEGORY_ID,
    archive: QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
    index: QUERY_POSTS_BY_CATEGORY_ID_INDEX
}

export async function getPostsByCategoryId({categoryId, ...options}) {
    const {queryIncludes = 'index'} = options

    const apolloClient = getApolloClient()

    let postData

    try {
        postData = await apolloClient.query({
            query: postsByCategoryIdIncludesTypes[queryIncludes],
            variables: {
                categoryId
            }
        })
    } catch (e) {
        console.log(`[posts][getPostsByCategoryId] Failed to query post data: ${e.message}`)
        throw e
    }

    const posts = postData?.data.posts.edges.map(({node = {}}) => node)

    return {
        posts: Array.isArray(posts) && posts.map(mapPostData)
    }
}


export async function getPages() {
    const {pages} = await getAllPages()
    const sorted = sortObjectsByDate(pages)
    return {
        pages
    }
}

export async function getRecentPosts({count, ...options}) {
    const {posts} = await getAllPosts(options)
    const sorted = sortObjectsByDate(posts)
    return {
        posts: sorted.slice(0, count)
    }
}

export function sanitizeExcerpt(excerpt) {
    if (typeof excerpt !== 'string') {
        throw new Error(`Failed to sanitize excerpt: invalid type ${typeof excerpt}`)
    }

    let sanitized = excerpt


    sanitized = sanitized.replace(/\s?\[&hellip;\]/, '&hellip;')

    sanitized = sanitized.replace('....', '.')
    sanitized = sanitized.replace('.&hellip;', '.')


    sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, '')

    return sanitized
}

export function mapPostData(post = {}) {
    const data = {...post}


    if (data.author) {
        data.author = {
            ...data.author.node
        }
    }

    if (data.author?.avatar) {
        data.author.avatar = updateUserAvatar(data.author.avatar)
    }

    if (data.categories) {
        data.categories = data.categories.edges.map(({node}) => {
            return {
                ...node
            }
        })
    }

    if (data.featuredImage) {
        data.featuredImage = data.featuredImage.node
    }

    return data
}

export async function getRelatedPosts(categories, postId, count = 5) {
    if (!Array.isArray(categories) || categories.length === 0) return

    let related = {
        category: categories && categories.shift()
    }

    if (related.category) {
        const {posts} = await getPostsByCategoryId({
            categoryId: related.category.databaseId,
            queryIncludes: 'archive'
        })

        const filtered = posts.filter(({postId: id}) => id !== postId)
        const sorted = sortObjectsByDate(filtered)

        related.posts = sorted.map((post) => ({title: post.title, slug: post.slug}))
    }

    if (!Array.isArray(related.posts) || related.posts.length === 0) {
        const relatedPosts = await getRelatedPosts(categories, postId, count)
        related = relatedPosts || related
    }

    if (Array.isArray(related.posts) && related.posts.length > count) {
        return related.posts.slice(0, count)
    }

    return related
}


export function sortStickyPosts(posts) {
    return [...posts].sort((post) => (post.isSticky ? -1 : 1))
}


export async function getPostsPerPage() {
    //If POST_PER_PAGE is defined at next.config.js
    if (process.env.POSTS_PER_PAGE) {
        console.warn(
            'You are using the deprecated POST_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").'
        )
        return Number(process.env.POSTS_PER_PAGE)
    }

    try {
        const apolloClient = getApolloClient()

        const {data} = await apolloClient.query({
            query: QUERY_POST_PER_PAGE
        })

        return Number(data.allSettings.readingSettingsPostsPerPage)
    } catch (e) {
        console.log(`Failed to query post per page data: ${e.message}`)
        throw e
    }
}


export async function getPagesCount(posts, postsPerPage) {
    const _postsPerPage = postsPerPage ?? (await getPostsPerPage())
    return Math.ceil(posts.length / _postsPerPage)
}


export async function getPaginatedPosts({currentPage = 1, ...options} = {}) {
    const {posts} = await getAllPosts(options)

    const postsPerPage = await getPostsPerPage()
    const pagesCount = await getPagesCount(posts, postsPerPage)

    let page = Number(currentPage)

    if (typeof page === 'undefined' || isNaN(page)) {
        page = 1
    } else if (page > pagesCount) {
        return {
            posts: [],
            pagination: {
                currentPage: undefined,
                pagesCount
            }
        }
    }

    const offset = postsPerPage * (page - 1)
    const sortedPosts = sortStickyPosts(posts)
    return {
        posts: sortedPosts.slice(offset, offset + postsPerPage),
        pagination: {
            currentPage: page,
            pagesCount
        }
    }
}


export async function getServices(categoryId) {
    const apolloClient = getApolloClient()

    const data = await apolloClient.query({
        query: buildServicesQuery(categoryId)
    })


    const queriedServices = []


    data.data.servicesCategories.nodes[0].contentNodes.nodes.forEach(({slug, title, link, id, uri, services}) => {
        queriedServices.push({
            slug,
            title,
            id,
            path: uri,
            ...services

        })
    })


    return {
        services: queriedServices
    }
}


async function getAllBrands() {

    const apolloClient = getApolloClient()

    const data = await apolloClient.query({
        query: QUERY_ALL_BRANDS_HOME
    })

    const queriedBrands = []


    data.data.brands.nodes.forEach(({brandId, title, uri, slug, link, brands}) => {

        queriedBrands.push({
            brandId,
            title,
            uri,
            slug,
            link,
            alt: brands.brandImage.altText,
            imgId: brands.brandImage.id,
            imgUrl: brands.brandImage.sourceUrl
        })
    })


    return {
        brands: queriedBrands
    }

}

export async function getBrands() {

    const {brands} = await getAllBrands()


    return {brands}
}


export async function getProjectCategories() {

    const apolloClient = getApolloClient()

    const data = await apolloClient.query({
        query: QUERY_PROJECT_CATEGORIES
    })


    return {
        categories: data.data.projectCategories.nodes
    }
}

export async function getProjects(categoryId) {
    const apolloClient = getApolloClient()


    const {categories} = await getProjectCategories()

    const categoriesWithTaxonomyKeys = {}

    categories.forEach((c) => {
        categoriesWithTaxonomyKeys[c.termTaxonomyId] = c
    })

    const data = await apolloClient.query({
        query: buildProjectQuery(categoryId)
    })


    const projectCategory = data.data.projectCategories.nodes[0]

    const projects = projectCategory.contentNodes.nodes

    const queriedProjects = []


    projects.forEach((project) => {
        queriedProjects.push({
            title: project.title,
            backgroundImage: project.projects.projectBackgroundImage,
            companyLogo: project.projects.projectCompanyLogo,
            description: project.projects.projectShortDescription,
            onHover: project.projects.projectOnHoverImage,
            url: project.projects.websiteUrl,
            id: project.id,
            link: project.link
        })
    })

    return {
        projects: queriedProjects,
        categories: categoriesWithTaxonomyKeys
    }
}


