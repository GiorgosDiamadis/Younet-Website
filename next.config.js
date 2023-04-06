const sitemap = require('./plugins/sitemap')

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'el'],
        defaultLocale: 'en-US'
    },
    reactStrictMode: false,
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

module.exports = () => {
    const plugins = [sitemap]
    return plugins.reduce((acc, plugin) => plugin(acc), nextConfig)
}

function parseEnvValue(value, defaultValue) {
    if (typeof value === 'undefined') return defaultValue
    if (value === true || value === 'true') return true
    if (value === false || value === 'false') return false
    return value
}
