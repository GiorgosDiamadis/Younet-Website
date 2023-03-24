import Section from '../Section'
import SectionTitle from '../SectionTitle'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion'
import { TypingText } from '../TypingText'
//
export default function Brands({ brands }) {


    return <Section>
        <SectionTitle title={'Recognized Digital Agency Experts'}
                      subTitle={'OUR EXPERTS HAVE WON INDUSTRY AWARDS'} />

        <div className='m-auto mt-[50px] w-[1200px] flex lg:flex-row flex-col min-h-[70h] gap-5'>
            <motion.div
                variants={staggerContainer}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.25 }}
                className={'relative lg:flex-[3.5] flex-[10]  flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer'}>
                <motion.img variants={fadeIn('right', 'spring', .1, '0.75')}
                            className={'absolute w-full h-full object-cover rounded-[24px]'}
                            src='https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp'
                            alt='' />

                <div
                    className={'absolute bottom-0 p-8 justify-start w-full h-1/3 flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'}>
                    <div className={'flexCenter w-[80px] h-[80px] rounded-[24px]'}>
                        <img src='https://justferry.gr/wp-content/uploads/2022/05/justferry-logo-300x100.webp' alt='' />

                    </div>

                    <p className={'m-0'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at atque culpa debitis
                        deserunt dolorum exercitationem, fuga fugiat illum ipsum maxime nihil quam qui quia repellendus
                        reprehenderit voluptatem voluptatum. Commodi earum esse in laboriosam magnam mollitia nam
                        officiis ratione sunt?
                    </p>

                </div>

            </motion.div>
            <motion.div
                variants={staggerContainer}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.25 }}
                className={'relative lg:flex-[0.5] flex-[2]  flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer'}>
                <motion.img variants={fadeIn('right', 'spring', .2, '0.75')}
                            className={'absolute w-full h-full object-cover rounded-[24px]'}
                            src='https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp'
                            alt='' />

                <h3 className={'font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'}>Testimonial
                    2</h3>

            </motion.div>
            <motion.div
                variants={staggerContainer}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.25 }}
                className={'relative lg:flex-[0.5] flex-[2]  flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer'}>
                <motion.img variants={fadeIn('right', 'spring', .3, '0.75')}
                            className={'absolute w-full h-full object-cover rounded-[24px]'}
                            src='https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp'
                            alt='' />

                <h3 className={'font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'}>Testimonial
                    3</h3>

            </motion.div>
            <motion.div
                variants={staggerContainer}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.25 }}
                className={'relative lg:flex-[0.5] flex-[2]  flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer'}>
                <motion.img variants={fadeIn('right', 'spring', .4, '0.75')}
                            className={'absolute w-full h-full object-cover rounded-[24px]'}
                            src='https://dev.younet.digital/cms/wp-content/uploads/2023/03/just-ferry-younet-slide2.webp'
                            alt='' />

                <h3 className={'font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'}>Testimonial
                    4</h3>

            </motion.div>

        </div>


    </Section>

}