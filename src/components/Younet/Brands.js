import Section from '../Section'
import SectionTitle from '../SectionTitle'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'
import { useState } from 'react'


export default function Brands({ brands }) {

    brands = [
        {
            name: 'Testimonial 1',
            image: 'https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum maiores neque pariatur provident reprehenderit? Cum nisi obcaecati sint veniam.'
        },
        {
            name: 'Testimonial 2',
            image: 'https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam blanditiis ducimus exercitationem fugit, nostrum rerum suscipit! Adipisci aspernatur delectus expedita explicabo iusto laudantium maxime necessitatibus, nulla, optio quidem ullam!'
        },
        {
            name: 'Testimonial 3',
            image: 'https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum maiores neque pariatur provident reprehenderit? Cum nisi obcaecati sint veniam.'
        },
        {
            name: 'Testimonial 4',
            image: 'https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum maiores neque pariatur provident reprehenderit? Cum nisi obcaecati sint veniam.'
        }
    ]
    const [active, setActive] = useState(0)

    const changeTestimonial = (index) => {
        setActive(index)
    }

    return <Section>

        <SectionTitle title={'Recognized Digital Agency Experts'}
                      subTitle={'OUR EXPERTS HAVE WON INDUSTRY AWARDS'} />

        <div className='m-auto mt-[50px] w-[1200px] flex lg:flex-row flex-col min-h-[70h] gap-5'>

            {brands.map(({ image, testimonial, name }, index) => (
                <motion.div
                    variants={staggerContainer}
                    initial={'hidden'}
                    whileInView={'show'}
                    onClick={() => {
                        changeTestimonial(index)
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                    className={`relative ${active === index ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'}   flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}>

                    <motion.img variants={fadeIn('right', 'spring', .1 * (index + 1), '0.75')}
                                className={'absolute w-full h-full object-cover rounded-[24px]'}
                                src='https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp'
                                alt='' />

                    <div
                        className={'absolute bottom-0 p-8 justify-start w-full h-1/3 flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] overflow-hidden'}>

                        {active === index ? (
                            <>
                                <div className={'flexCenter w-[80px] h-[80px] rounded-[24px]'}>
                                    <img src={image} alt='' />

                                </div>
                                <p className={'m-0'}>
                                    {testimonial}
                                </p>
                            </>

                        ) : (
                            <div className={'flexCenter'}>
                                <h3 className={'font-semibold sm:text-[24px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'}>
                                    {name}
                                </h3>
                            </div>

                        )}

                    </div>

                </motion.div>
            ))}
        </div>


    </Section>

}