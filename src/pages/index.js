import React, { useEffect } from 'react'
import useSite from 'hooks/use-site'
import { getBrands, getProjects, getRecentPosts, getServices } from 'lib/posts'
import { WebsiteJsonLd } from 'lib/json-ld'
import dynamic from 'next/dynamic'
import Layout from 'components/Layout'
import Header from 'components/Header'
import SectionTitle from '../components/SectionTitle'
import CallToActionFramerHOC from '../components/CallToActionFramerHOC'
import { useRef, useState } from 'react'
import useOnScreen from '../hooks/useOnScreen'


const DynamicPortfolio = dynamic(() => import('../components/Younet/Portfolio'), {
    loading: () => 'Loading'
})
const DynamicServices = dynamic(() => import('../components/Younet/Services'), {
    loading: () => 'Loading'
})
const DynamicBrands = dynamic(() => import('../components/Younet/Brands'), {
    loading: () => 'Loading'
})
const DynamicNewsletter = dynamic(() => import('../components/Younet/NewsLetter'), {
    loading: () => 'Loading'
})

const DynamicLatestPosts = dynamic(() => import('../components/LatestPosts'), {
    loading: () => 'Loading'
})


export default function Home({ services, brands, projectData, posts }) {
    const { metadata = {} } = useSite()
    const { title, description } = metadata
    const portfolioRef = useRef()
    const x = useOnScreen(portfolioRef, '200px')
    const [hasLoadedOnce, setHasLoadedOnce] = useState(false)

    useEffect(() => {

        if (hasLoadedOnce === false && x === true) {

            setHasLoadedOnce(true)
        }
    }, [x])


    return (
        <Layout classes={'bg-gradient-body'}>
            <WebsiteJsonLd siteTitle={title} />
            <Header>
                <div className='header-content flex flex-col items-center'>
                    <SectionTitle title={'Growing Brands Online'}
                                  subTitle={'Results-Driven Creative Digital Agency Focused On'} />

                    <CallToActionFramerHOC className={'request-quote cursor-pointer'} onClick={() => {
                    }}>
                        see our services
                    </CallToActionFramerHOC>
                </div>
            </Header>
            <DynamicServices services={services} />
            <DynamicPortfolio projects={projectData.projects} projectCategories={projectData.categories}
                              category={8} />


            <DynamicBrands brands={brands} />
            <DynamicLatestPosts posts={posts} />
            <DynamicNewsletter />
        </Layout>

    )
}

export async function getStaticProps() {

    const { services } = await getServices(13)
    const { brands } = await getBrands()
    const { projects, categories } = await getProjects(8)

    const { posts } = await getRecentPosts({
        count: 3,
        queryIncludes: 'archive'
    })

    return {
        revalidate: 5,
        props: {
            services,
            brands,
            projectData: {
                projects,
                categories
            },
            posts
        }
    }
}
