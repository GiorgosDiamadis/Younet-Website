import Layout from 'components/Layout'
import React from 'react'
import dynamic from 'next/dynamic'
import { getBrands, getProjects, getRecentPosts, getServices } from 'lib/posts'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import Header from 'components/Header'
import SectionTitle from 'components/SectionTitle'
import CallToActionFramerHOC from 'components/CallToActionFramerHOC'
import ContactForm from 'components/ContactForm'
import LatestPosts from '../components/LatestPosts'

const DynamicPortfolio = dynamic(() => import('components/Younet/Portfolio'), {
    loading: () => 'Loading'
})
const DynamicServices = dynamic(() => import('components/Younet/Services'), {
    loading: () => 'Loading'
})
const DynamicBrands = dynamic(() => import('components/Younet/Brands'), {
    loading: () => 'Loading'
})
const DynamicNewsletter = dynamic(() => import('components/Younet/NewsLetter'), {
    loading: () => 'Loading'
})

const DynamicLatestPosts = dynamic(() => import('components/LatestPosts'), { loading: () => 'Loading' })

export default function Home({ services, brands, projectData, posts }) {


    return <Layout classes={'bg-gradient-body overflow-y-hidden'}>

        <div className=' absolute top-0 left-0 right-0 bottom-0 h-[100vh] flex justify-center items-center homepage'>
            <Splide aria-label='My Favorite Images' options={{
                direction: 'ttb',
                height: '100vh',
                wheel: true,
                wheelSleep: 200,
                speed: 800
            }}>
                <SplideSlide>
                    <Header>
                        <div className='header-content flex flex-col items-center overflow-y-hidden'>
                            <SectionTitle title={'Growing Brands Online'}
                                          subTitle={'Results-Driven Creative Digital Agency Focused On'} />

                            <CallToActionFramerHOC className={'request-quote cursor-pointer'} onClick={() => {
                            }}>
                                see our services
                            </CallToActionFramerHOC>
                        </div>
                    </Header>
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <DynamicServices services={services} />
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <DynamicPortfolio projects={projectData.projects} projectCategories={projectData.categories}
                                      category={8} />
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <DynamicBrands brands={brands} />
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <DynamicLatestPosts posts={posts} />
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <ContactForm />
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <DynamicNewsletter />
                </SplideSlide>
            </Splide>
        </div>

    </Layout>
}

export async function getStaticProps({ locale }) {


    const { services } = await getServices(13, locale)
    const { brands } = await getBrands()
    const { projects, categories } = await getProjects(8)
    const { posts } = await getRecentPosts(3)

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