import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Input from "./Input";

export default function ContactForm() {
    return <Section className={'flex justify-between flex-row gap-10'}>
        <div className="flex-[0.5]">
            <SectionTitle glow={'blue'} textAlign={'text-left'} size={'70px'} title={'Digitizing Your Business Growth'}
                          subTitle={'TAKE THE SILK ROAD TO'}/>
        </div>
        <div className="flex-[0.5] flex flex-col gap-10">
            <Input label={'Name'} name={'email'} type={'text'}/>
            <Input label={'Company name'} name={'email'} type={'text'}/>
            <Input label={'Email'} name={'email'} type={'text'}/>
            <Input label={'Phone'} name={'email'} type={'text'}/>
            <Input label={'Message'} name={'email'} type={'text'}/>
            <button className="btn btn-primary block m-auto">Submit</button>
        </div>


    </Section>
}