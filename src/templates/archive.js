import { Helmet } from 'react-helmet'

import { WebpageJsonLd } from 'lib/json-ld'
import { helmetSettingsFromMetadata } from 'lib/site'
import useSite from 'hooks/use-site'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Section from 'components/Section'
import Container from 'components/Container'
import PostCard from 'components/PostCard'
import Pagination from 'components/Pagination/Pagination'

import styles from 'styles/templates/Archive.module.scss'
import Post from '../components/Post'
import SectionTitle from '../components/SectionTitle'

const DEFAULT_POST_OPTIONS = {}

export default function TemplateArchive({
                                            title = 'Archive',
                                            Title,
                                            posts,
                                            postOptions = DEFAULT_POST_OPTIONS,
                                            slug,
                                            metadata,
                                            pagination
                                        }) {
    const { metadata: siteMetadata = {} } = useSite()

    if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
        metadata.title = `${title} - ${siteMetadata.title}`
        metadata.og.title = metadata.title
        metadata.twitter.title = metadata.title
    }

    const helmetSettings = helmetSettingsFromMetadata(metadata)

    return (
        <Layout classes={'bg-gradient-body'}>
            <Helmet {...helmetSettings} />

            <WebpageJsonLd title={title} description={metadata.description} siteTitle={siteMetadata.title}
                           slug={slug} />
            <h1>{Title || title}</h1>
            {metadata.description && (
                <p
                    className={styles.archiveDescription}
                    dangerouslySetInnerHTML={{
                        __html: metadata.description
                    }}
                />
            )}

            <Section>
                <Section>
                    <SectionTitle title={Title || title} />
                    <div className={'mt-[50px] flex flex-col  gap-[30px] 800px:px-0 px-5'}>
                        {Array.isArray(posts) && posts && posts.map((post, index) => (
                            <Post
                                key={post.id}
                                {...post}
                            />
                        ))}
                    </div>
                    {pagination && (
                        <Pagination
                            currentPage={pagination?.currentPage}
                            pagesCount={pagination?.pagesCount}
                            basePath={pagination?.basePath}
                        />
                    )}
                </Section>
            </Section>
        </Layout>
    )
}
