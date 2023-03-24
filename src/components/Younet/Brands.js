import Section from "../Section";
import SectionTitle from "../SectionTitle";

export default function Brands({brands}) {


    return <Section>
        <SectionTitle title={'Recognized Digital Agency Experts'}
                      subTitle={'OUR EXPERTS HAVE WON INDUSTRY AWARDS'}/>

        <div
            className=" mt-10 grid lg:grid-cols-3 md:grid-cols-3  grid-cols-2 gap-10 lg:w-full xl:w-3/4 lg:ml-auto lg:mr-auto mt-20 "
        >

        </div>
    </Section>

}