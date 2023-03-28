const sitemap = require('./plugins/sitemap')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    images: {
        unoptimized: true
    },

    trailingSlash: true,


    eslint: {
        ignoreDuringBuilds: true
    },
    env: {


        OG_IMAGE_DIRECTORY: '/images/og',


        POSTS_PRERENDER_COUNT: 100,

        WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
        WORDPRESS_MENU_LOCATION_NAVIGATION: process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || 'PRIMARY',
        WORDPRESS_PLUGIN_SEO: true
    }
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// })
module.exports = () => {
    const plugins = [sitemap]
    return plugins.reduce((acc, plugin) => plugin(acc), nextConfig)
}

/**
 * parseEnv
 * @description Helper function to check if a variable is defined and parse booelans
 */

function parseEnvValue(value, defaultValue) {
    if (typeof value === 'undefined') return defaultValue
    if (value === true || value === 'true') return true
    if (value === false || value === 'false') return false
    return value
}
