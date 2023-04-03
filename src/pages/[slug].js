import Layout from 'components/Layout'
import {getAllPages, getPageBySlug, getServices} from "../lib/posts";
import React, {useEffect, useState} from 'react'
import Services from "../components/Younet/Services";

export default function Page({page, socialImage}) {

    const [services, setServices] = useState(null)

    useEffect(() => {
        getServices(page.servicesDataForPages.servicesCategoryId).then((res) => {
            setServices(res.services)
        })
    }, [])

    return (
        <Layout classes={'bg-gradient-body'}>

            <div className="mt-20"></div>
            <p className={'max-w-[1400px] m-auto mb-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab illum
                laborum obcaecati perferendis possimus
                quia? Amet aut beatae blanditiis cum debitis deleniti distinctio doloremque dolores dolorum et, eveniet
                expedita hic id in incidunt magnam nemo nihil officia, pariatur placeat quae qui recusandae rem sapiente
                sed sit voluptates! Accusamus adipisci amet animi beatae debitis dignissimos dolor doloremque, dolorum
                eligendi enim excepturi exercitationem facilis fuga fugiat, fugit incidunt laborum maiores modi mollitia
                nam, necessitatibus nemo nostrum officia perferendis perspiciatis quaerat quas quod rem saepe sapiente
                sunt vel voluptatem voluptatibus. Accusamus, aspernatur deleniti officiis sapiente ut veniam voluptatem!
                Amet blanditiis cumque deserunt qui.</p>

            {services && <Services services={services}/>}


            <p className={'max-w-[1400px] m-auto mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab illum
                laborum obcaecati perferendis possimus
                quia? Amet aut beatae blanditiis cum debitis deleniti distinctio doloremque dolores dolorum et, eveniet
                expedita hic id in incidunt magnam nemo nihil officia, pariatur placeat quae qui recusandae rem sapiente
                sed sit voluptates! Accusamus adipisci amet animi beatae debitis dignissimos dolor doloremque, dolorum
                eligendi enim excepturi exercitationem facilis fuga fugiat, fugit incidunt laborum maiores modi mollitia
                nam, necessitatibus nemo nostrum officia perferendis perspiciatis quaerat quas quod rem saepe sapiente
                sunt vel voluptatem voluptatibus. Accusamus, aspernatur deleniti officiis sapiente ut veniam voluptatem!
                Amet blanditiis cumque deserunt qui.</p>
        </Layout>
    )
}

export async function getStaticProps({params = {}} = {}) {
    const {page} = await getPageBySlug(params?.slug)

    if (!page) {
        return {
            props: {},
            notFound: true
        }
    }

    const props = {
        page,
        socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${params?.slug}.png`
    }

    return {
        props,
        revalidate: 5
    }
}

export async function getStaticPaths() {

    const {pages} = await getAllPages()

    const paths = pages
        .filter(({slug}) => typeof slug === 'string')
        .map(({slug}) => ({
            params: {
                slug
            }
        }))

    return {
        paths,
        fallback: 'blocking'
    }
}
