import SectionTitle from "../SectionTitle";
import Image from "next/image";
import portfolioimg from "public/portfolioimage.png";
import Section from "../Section";
import {useEffect, useState} from 'react'


export default function Portfolio({projects}) {


    return <Section>
        <SectionTitle title={'Featured Web Design Launches'}/>


        <div className="portfolio-container mt-10 1150px:w-full w-3/4 m-auto">

            {projects && projects.map((project) => (
                <div className="portfolio-item group relative  ">

                    <div

                        style={{"--bg-image": `url('${project.backgroundImage?.sourceUrl}')`}}
                        className="portfolio-item-details lg:group-hover:rotate-y-minus35  p-5">
                    </div>

                    <div className="flex flex-col relative  group w-full h-full items-end ">
                        <div className="lg:absolute left-3 bottom-3 w-[90%]">

                            <div
                                className={`lg:absolute left-0 bottom-0 lg:group-hover:bottom-full transition-all duration-500 w-full lg:w-auto text-center`}>
                                <img className={" text-white relative  text-5xl font-bold "}
                                     src={project.companyLogo?.sourceUrl}/>

                                <h1 className={"text-white relative  text-xl font-bold mt-3 text-center lg:text-left "}>
                                    {project.title}
                                </h1>
                            </div>

                            <p className={"mt-[10px] text-lg w-3/4 relative opacity-100 lg:opacity-0 duration-500 transition-all text-center lg:text-left lg:group-hover:opacity-100"}>
                                {project.description}
                            </p>
                            <div
                                className={'request-quote relative cursor-pointer text-center lg:group-hover:opacity-100 w-1/2  1150px:w-3/4  opacity-100 lg:opacity-0 duration-500 transition-all'}>
                                <a target={"_blank"} href={project.url} className={"text-white"}>
                                    Go to Website
                                </a>
                            </div>


                        </div>

                    </div>
                    <div className="angled-image  1150px:w-auto">
                        <Image src={project.onHover?.sourceUrl} width={250} height={300} alt={'alt'} loading={"lazy"}/>
                    </div>
                </div>


            ))}


        </div>

    </Section>
}