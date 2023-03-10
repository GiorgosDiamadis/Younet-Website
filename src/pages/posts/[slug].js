import Link from 'next/link';
import {Helmet} from 'react-helmet';

import {getPostBySlug, getRecentPosts, getRelatedPosts, postPathBySlug} from 'lib/posts';
import {categoryPathBySlug} from 'lib/categories';
import {formatDate} from 'lib/datetime';
import {ArticleJsonLd} from 'lib/json-ld';
import {helmetSettingsFromMetadata} from 'lib/site';
import useSite from 'hooks/use-site';
import usePageMetadata from 'hooks/use-page-metadata';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import Content from 'components/Content';
import Metadata from 'components/Metadata';
import FeaturedImage from 'components/FeaturedImage';

import styles from 'styles/pages/Post.module.scss';

export default function Post({post, socialImage, related}) {
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
        isSticky = false,
    } = post;

    const {metadata: siteMetadata = {}, homepage} = useSite();

    if (!post.og) {
        post.og = {};
    }

    post.og.imageUrl = `${homepage}${socialImage}`;
    post.og.imageSecureUrl = post.og.imageUrl;
    post.og.imageWidth = 2000;
    post.og.imageHeight = 1000;

    const {metadata} = usePageMetadata({
        metadata: {
            ...post,
            title: metaTitle,
            description: description || post.og?.description || `Read more about ${title}`,
        },
    });

    if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
        metadata.title = `${title} - ${siteMetadata.title}`;
        metadata.og.title = metadata.title;
        metadata.twitter.title = metadata.title;
    }

    const metadataOptions = {
        compactCategories: false,
    };

    const {posts: relatedPostsList, title: relatedPostsTitle} = related || {};

    const helmetSettings = helmetSettingsFromMetadata(metadata);

    return (
        <Layout classes={'bg-white'}>
            <Helmet {...helmetSettings} />

            <ArticleJsonLd post={post} siteTitle={siteMetadata.title}/>

            {featuredImage && (
                <FeaturedImage
                    {...featuredImage}
                    src={featuredImage.sourceUrl}
                    dangerouslySetInnerHTML={featuredImage.caption}
                />
            )}
            <Content>
                <Section>
                    <Container>
                        <h1
                            className={"text-8xl m-auto text-center"}
                            dangerouslySetInnerHTML={{
                                __html: title,
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
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        />
                    </Container>
                </Section>
            </Content>

        </Layout>
    );
}

export async function getStaticProps({params = {}} = {}) {
    const {post} = await getPostBySlug(params?.slug);

    if (!post) {
        return {
            props: {},
            notFound: true,
        };
    }

    const {categories, databaseId: postId} = post;

    const props = {
        post,
        socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${params?.slug}.png`,
    };

    const {category: relatedCategory, posts: relatedPosts} = (await getRelatedPosts(categories, postId)) || {};
    const hasRelated = relatedCategory && Array.isArray(relatedPosts) && relatedPosts.length;

    if (hasRelated) {
        props.related = {
            posts: relatedPosts,
            title: {
                name: relatedCategory.name || null,
                link: categoryPathBySlug(relatedCategory.slug),
            },
        };
    }

    return {
        props,
        revalidate: 5,
    };
}

export async function getStaticPaths() {

    const {posts} = await getRecentPosts({
        count: process.env.POSTS_PRERENDER_COUNT, // Update this value in next.config.js!
        queryIncludes: 'index',
    });

    const paths = posts
        .filter(({slug}) => typeof slug === 'string')
        .map(({slug}) => ({
            params: {
                slug,
            },
        }));

    return {
        paths,
        fallback: 'blocking',
    };
}
