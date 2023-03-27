import useSite from 'hooks/use-site'
import { getBrands, getPaginatedPosts, getProjects, getServices } from 'lib/posts'
import { WebsiteJsonLd } from 'lib/json-ld'
import dynamic from 'next/dynamic'
import Layout from 'components/Layout'
import Header from 'components/Header'
import SectionTitle from '../components/SectionTitle'
import CallToActionFramerHOC from '../components/CallToActionFramerHOC'
import LatestPosts from '../components/LatestPosts'


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


export default function Home({ services, brands, projects, posts }) {
    const { metadata = {} } = useSite()
    const { title, description } = metadata
    console.log(posts)


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

            <DynamicPortfolio projects={projects} />
            <DynamicBrands brands={brands} />
            <LatestPosts />
            <DynamicNewsletter />
        </Layout>
    )
}

export async function getStaticProps() {

    const { services } = await getServices()
    const { brands } = await getBrands()
    const { projects } = await getProjects()
    const { posts, pagination } = await getPaginatedPosts({
        queryIncludes: 'archive'
    })

    return {
        revalidate: 5,
        props: {
            services,
            brands,
            projects,
            posts
        }
    }
}
