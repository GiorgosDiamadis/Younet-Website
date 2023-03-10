import useSite from 'hooks/use-site';
import {getBrands, getServices} from 'lib/posts';
import {WebsiteJsonLd} from 'lib/json-ld';
import dynamic from 'next/dynamic'
import Layout from 'components/Layout';
import Header from 'components/Header';
import SectionTitle from "../components/SectionTitle";
import CallToAction from "../components/CallToAction";
import WithTooltip from "../components/WithTooltip";


const DynamicPortfolio = dynamic(() => import("../components/Younet/Portfolio"), {
    loading: () => "Loading"
})
const DynamicServices = dynamic(() => import("../components/Younet/Services"), {
    loading: () => "Loading"
})
const DynamicBrands = dynamic(() => import("../components/Younet/Brands"), {
    loading: () => "Loading"
})
const DynamicNewsletter = dynamic(() => import("../components/Younet/NewsLetter"), {
    loading: () => "Loading"
})


export default function Home({services, brands}) {
    const {metadata = {}} = useSite();
    const {title, description} = metadata;

    return (
        <Layout classes={"bg-gradient-body"}>
            <WebsiteJsonLd siteTitle={title}/>
            <Header>
                <div className="header-content flex flex-col items-center">
                    <SectionTitle title={'Growing Brands Online'}
                                  subTitle={'Results-Driven Creative Digital Agency Focused On'}/>
                    <WithTooltip tooltipContent={'Tooltip'}>
                        <CallToAction className={'request-quote cursor-pointer'} onClick={() => {
                        }}>
                            μιληστε μαζι μας
                        </CallToAction>
                    </WithTooltip>
                </div>
            </Header>
            <DynamicServices services={services}/>
            <DynamicPortfolio projects={[]}/>
            <DynamicBrands brands={brands}/>
            <DynamicNewsletter/>
        </Layout>
    );
}

export async function getStaticProps() {

    const {services} = await getServices()
    const {brands} = await getBrands()

    return {
        props: {
            services,
            brands,
            revalidate: 5
        },
    };
}
