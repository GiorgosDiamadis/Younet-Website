import SectionTitle from "../SectionTitle";
import Image from "next/image";
import portfolioimg from "public/portfolioimage.png";
import Section from "../Section";
import {CSSProperties, useEffect, useState} from 'react'


export default function Portfolio({initial}) {

    const [projects, setProjects] = useState([]);
    const [projectCategory, setProjectCategory] = useState(0);


    useEffect(() => {

        if (projectCategory !== 0) {
            console.log("loading projects " + projectCategory)
        }

    }, [projectCategory])


    return <Section>
        <SectionTitle title={'Featured Web Design Launches'}/>

        <div className="portfolio-container mt-10 1150px:w-full w-3/4 m-auto">

            <div className="portfolio-item group relative  ">

                <div

                    style={{"--bg-image": "url('https://dev.younet.digital/cms/wp-content/uploads/2023/03/Creative-Digital-Agency-eCommerce-Projects-Dognomics.webp')"}}
                    className="portfolio-item-details lg:group-hover:rotate-y-minus35  p-5">

                    <div className="flex flex-col relative  group w-full h-full items-end ">
                        <div
                            className="lg:absolute left-0 bottom-0 lg:group-hover:-translate-y-32 transition-all duration-500 w-full lg:w-auto text-center">
                            <h1 className={" text-white relative  text-5xl font-bold "}>SOME LOGO</h1>

                            <h1 className={"text-white relative  text-3xl font-bold mt-3 text-center lg:text-left "}>University
                                Web Design</h1>
                        </div>

                        <div className="lg:absolute left-0 bottom-0">
                            <p className={"  text-xl w-3/4 relative opacity-100 lg:opacity-0 duration-500 transition-all text-center lg:text-left lg:group-hover:opacity-100"}>Medill
                                makes a great impression with superior site planning</p>
                            <div
                                className={'request-quote relative cursor-pointer text-center lg:group-hover:opacity-100 w-1/2  1150px:w-3/4  opacity-100 lg:opacity-0 duration-500 transition-all'}>Go
                                to Website
                            </div>

                        </div>

                    </div>
                </div>
                <div className="angled-image  1150px:w-auto">
                    <Image src={portfolioimg} alt={'alt'} loading={"lazy"}/>
                </div>
            </div>
        </div>

    </Section>
}