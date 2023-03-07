import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import {useEffect, useRef} from "react";

export default function Brands({brands}) {




    return <div className="bg-dark_blue py-3">
        <Section>
            <SectionTitle title={'Recognized Digital Agency Experts'}
                          subTitle={'OUR EXPERTS HAVE WON INDUSTRY AWARDS'}/>

            <div
                className=" mt-10 grid lg:grid-cols-3 md:grid-cols-3  grid-cols-2 gap-10 lg:w-full xl:w-3/4 lg:ml-auto lg:mr-auto mt-20 "
            >

                {brands && brands.map((brand) => (
                        <Image
                            className={"masonry-item inline-block"}
                            key={brand.imgId}
                            loading={'lazy'}
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: 'auto', height: '80px' }}
                            src={brand.imgUrl}
                            alt={brand.alt}/>

                ))}
            </div>
        </Section>
    </div>

}