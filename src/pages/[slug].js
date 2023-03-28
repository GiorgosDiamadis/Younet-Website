import Link from 'next/link'
import { Helmet } from 'react-helmet'

import { getPostBySlug, getRecentPosts, getRelatedPosts, postPathBySlug } from 'lib/posts'
import { categoryPathBySlug } from 'lib/categories'
import { formatDate } from 'lib/datetime'
import { ArticleJsonLd } from 'lib/json-ld'
import { helmetSettingsFromMetadata } from 'lib/site'
import useSite from 'hooks/use-site'
import usePageMetadata from 'hooks/use-page-metadata'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Section from 'components/Section'
import Container from 'components/Container'
import Content from 'components/Content'
import Metadata from 'components/Metadata'
import FeaturedImage from 'components/FeaturedImage'

import styles from 'styles/pages/Post.module.scss'

export default function Page({ post, socialImage, related }) {


    return (
        <Layout classes={'bg-white'}>
            <h1>asdkalsdj</h1>

        </Layout>
    )
}

export async function getServerSideProps({ params = {} } = {}) {
    console.log(params)
    return {
        props: {}
    }
}
