import { Helmet } from 'react-helmet'

import { getPostBySlug, getRecentPosts, getRelatedPosts } from 'lib/posts'
import { categoryPathBySlug } from 'lib/categories'
import { ArticleJsonLd } from 'lib/json-ld'
import { helmetSettingsFromMetadata } from 'lib/site'
import useSite from 'hooks/use-site'
import usePageMetadata from 'hooks/use-page-metadata'

import Layout from 'components/Layout'
import Section from 'components/Section'
import Content from 'components/Content'
import Metadata from 'components/Metadata'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import useScript from '../../hooks/useScript'

export default function Post({ post, socialImage, related }) {
    const {
        title,
        metaTitle,
        description,
        content,
        date,
        author,
        categories,
        modified,
        featuredImage,
        isSticky = false
    } = post

    const { metadata: siteMetadata = {}, homepage } = useSite()

    if (!post.og) {
        post.og = {}
    }

    post.og.imageUrl = `${homepage}${socialImage}`
    post.og.imageSecureUrl = post.og.imageUrl
    post.og.imageWidth = 2000
    post.og.imageHeight = 1000

    const { metadata } = usePageMetadata({
        metadata: {
            ...post,
            title: metaTitle,
            description: description || post.og?.description || `Read more about ${title}`
        }
    })

    if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
        metadata.title = `${title} - ${siteMetadata.title}`
        metadata.og.title = metadata.title
        metadata.twitter.title = metadata.title
    }

    const metadataOptions = {
        compactCategories: false
    }

    const { posts: relatedPostsList, title: relatedPostsTitle } = related || {}

    const helmetSettings = helmetSettingsFromMetadata(metadata)
    const wpContentRef = useRef()
    const [tableOfContent, setTableOfContent] = useState([])

    const timelinejs = useScript('/timeline.js')

    useEffect(() => {
        if (!wpContentRef.current) return


        const h2s = wpContentRef.current.querySelectorAll('h2')
        const content = []
        var previous = 0
        const entry = {}
        h2s.forEach((h2, i) => {


            content.push({
                title: h2.innerHTML,
                link: `#${h2.getAttribute('id')}`
            })

            const rect = h2.getBoundingClientRect()
            if (i === 0) {
                previous = rect.y
            } else {
                content[i - 1].height = rect.y - previous
                previous = rect.y
            }
        })

        setTableOfContent(content)


    }, [wpContentRef.current])
    console.log(tableOfContent)


    return (
        <Layout classes={'bg-white'}>
            <Helmet {...helmetSettings} />

            <ArticleJsonLd post={post} siteTitle={siteMetadata.title} />

            {featuredImage && (
                <div className={'h-[50vh] overflow-hidden'}>

                    <Image alt={''} width={1920} height={400} className={'w-full h-auto'}
                           src={featuredImage.sourceUrl} />
                </div>
            )}
            <Content>
                <Section className={'w-full max-w-[95%]'}>
                    <h1
                        className={'text-8xl m-auto text-center'}
                        dangerouslySetInnerHTML={{
                            __html: title
                        }}
                    />
                    <Metadata
                        className={'flex justify-content-center'}
                        date={date}
                        author={author}
                        categories={categories}
                        options={metadataOptions}
                        isSticky={isSticky}
                    />
                    <div className='flex flex-row'>
                        <div className='table-of-contents flex-[0.2]'>
                            <div className='timeline'>
                                <div className='line'></div>
                                {tableOfContent.map((content) => (
                                    <div className='section'>
                                        <div className='bead'>

                                        </div>
                                        <div className='content'>
                                            <h2>{content.title}</h2>
                                            <p style={{ height: `${content.height ? (content.height - 70) : '0'}px` }}>
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                        <div

                            ref={wpContentRef}
                            className={'wp-content flex-[0.6] w-full'}
                            dangerouslySetInnerHTML={{
                                __html: content
                            }}

                        >

                        </div>
                        <div className='table-of-contents flex-[0.2]'></div>
                    </div>

                </Section>
            </Content>

        </Layout>
    )
}

export async function getStaticProps({ params = {} } = {}) {
    const { post } = await getPostBySlug(params?.slug)

    if (!post) {
        return {
            props: {},
            notFound: true
        }
    }

    const { categories, databaseId: postId } = post

    const props = {
        post,
        socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${params?.slug}.png`
    }

    const { category: relatedCategory, posts: relatedPosts } = (await getRelatedPosts(categories, postId)) || {}
    const hasRelated = relatedCategory && Array.isArray(relatedPosts) && relatedPosts.length

    if (hasRelated) {
        props.related = {
            posts: relatedPosts,
            title: {
                name: relatedCategory.name || null,
                link: categoryPathBySlug(relatedCategory.slug)
            }
        }
    }
    return {
        props,
        revalidate: 5
    }
}

export async function getStaticPaths() {

    const { posts } = await getRecentPosts({
        count: process.env.POSTS_PRERENDER_COUNT, // Update this value in next.config.js!
        queryIncludes: 'index'
    })

    const paths = posts
        .filter(({ slug }) => typeof slug === 'string')
        .map(({ slug }) => ({
            params: {
                slug
            }
        }))


    return {
        paths,
        fallback: 'blocking'
    }
}
