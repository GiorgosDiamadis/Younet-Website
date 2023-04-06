import Layout from "components/Layout";
import React, {useEffect, useRef, useState} from "react";
import useEventListener from "hooks/useEventListener";
import dynamic from "next/dynamic";
import {getBrands, getProjects, getRecentPosts, getServices} from "../../lib/posts";
import useEffectOnce from "hooks/useEffectOnce";

import {Splide, SplideSlide} from '@splidejs/react-splide';
import Header from "components/Header";
import SectionTitle from "components/SectionTitle";
import CallToActionFramerHOC from "components/CallToActionFramerHOC";
import ContactForm from "components/ContactForm";
import LatestPosts from "components/LatestPosts";

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

const DynamicLatestPosts = dynamic(() => import('components/LatestPosts'), {
    loading: () => 'Loading'
})
export default function Home({services, brands, projectData, posts}) {

    // how many tabs
    const [numTabs, setNumTabs] = useState(0)
    const [tabIndex, setTabIndex] = useState(1)
    const [canScroll, setCanScroll] = useState(true)

    useEventListener('wheel', (e) => {
        if (!canScroll) return

        if (e.deltaY > 0) {
            if (tabIndex < numTabs) {
                setTabIndex(tabIndex + 1)
                document.querySelector("footer").classList.add("hidden")
            } else if (tabIndex === numTabs) {
                document.querySelector("footer").classList.remove("hidden")
            }
        } else {
            if (tabIndex > 1) {
                document.querySelector("footer").classList.add("hidden")
                setTabIndex(tabIndex - 1)
            }
        }

        setCanScroll(false)
        setTimeout(() => {
            setCanScroll(true)
        }, 1000)
    })

    useEffectOnce(() => {
        const tabs = document.querySelectorAll(".tabcontent")
        if (tabs) {
            setNumTabs(tabs.length)
        }
    })


    useEffect(() => {
        if (document === undefined) return
        const tab = document.querySelector(`#tab${tabIndex}`)
        if (tab) {
            tab.classList.add("active")
            const tabs = document.querySelectorAll(`.tabcontent:not(#tab${tabIndex})`)
            if (tabs) {
                tabs.forEach((el) => {
                    el.classList.remove("active")
                })
            }

        }
    }, [tabIndex])


    return <Layout classes={'bg-gradient-body'}>

        <div className=" absolute top-0 left-0 right-0 bottom-0 h-[100vh] flex justify-center items-center">
            <Splide aria-label="My Favorite Images" options={{
                direction: "ttb",
                height: "100vh",
                wheel: true,
                wheelSleep: 200,
                speed: 800
            }}>
                <SplideSlide>
                    <Header>
                        <div className='header-content flex flex-col items-center overflow-y-hidden'>
                            <SectionTitle title={'Growing Brands Online'}
                                          subTitle={'Results-Driven Creative Digital Agency Focused On'}/>

                            <CallToActionFramerHOC className={'request-quote cursor-pointer'} onClick={() => {
                            }}>
                                see our services
                            </CallToActionFramerHOC>
                        </div>
                    </Header>
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <DynamicServices services={services}/>
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <DynamicPortfolio projects={projectData.projects} projectCategories={projectData.categories}
                                      category={8}/>
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <DynamicBrands brands={brands}/>
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <LatestPosts posts={posts}/>
                </SplideSlide>
                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <ContactForm/>
                </SplideSlide>

                <SplideSlide className={'overflow-y-hidden flex flex-col items-center'}>
                    <DynamicNewsletter/>
                </SplideSlide>
            </Splide>
        </div>

        {/*<div id="tab1" className="tabcontent active " style={{height: `calc(100vh)`}}>*/}


        {/*</div>*/}

        {/*<div id="tab2" className="tabcontent " style={{height: `calc(100vh)`}}>*/}

        {/*</div>*/}
    </Layout>
}

export async function getStaticProps() {

    const {services} = await getServices(13)
    const {brands} = await getBrands()
    const {projects, categories} = await getProjects(8)

    const {posts} = await getRecentPosts({
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