'use client'


import SectionTitle from '../SectionTitle'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerContainer, textVariant } from '../../utils/motion'
import useWindowSize from '../../hooks/useWindowSize'

export default function Services({ services }) {

    const { width, height } = useWindowSize()

    const ServicesDesktop = () => {
        return <div className='hidden lg:flex services-description h-[600px]  flex-col'>
            <div className='relative  flex-1 overflow-hidden'>
                <div className='hidden lg:block'>
                    {services && services.map((service, i) => (
                        <div className={'images ' + (i > 0 ? 'opacity-0' : '')}>
                            <Image src={service.serviceBgImage?.sourceUrl} alt={service.serviceBgImage?.altText}
                                   loading={'lazy'} objectFit={'cover'}
                                   layout={'fill'}
                                   objectPosition={'center'} />
                        </div>
                    ))}


                </div>

                <div className='services relative'>

                    <div className='absolute z-30 left-1/2 -translate-x-1/2 top-8 w-full'>

                        <SectionTitle title={'360⁰ Boutique Digital Agency'} />
                    </div>

                    {services && services.map((service, i) => (
                        <div onMouseEnter={() => {
                            document.querySelectorAll('.images').forEach((r) => {
                                r.classList.remove('active')
                            })
                            document.querySelector(`.images:nth-child(${i + 1})`).classList.add('active')
                        }} className={'group service'}>
                            <div className='relative d-flex flex-col justify-end'>
                                <motion.div variants={staggerContainer}
                                            initial={'hidden'}
                                            whileInView={'show'}
                                            viewport={{ once: false, amount: 0.25 }} id={`heading-${service.id}`}
                                            className={'service-heading '}>
                                    <motion.span variants={textVariant(.1)}
                                                 className={'text-highlighted text-5xl font-bold'}>0{i + 1}</motion.span>
                                    <motion.p variants={textVariant(.15)}
                                              className={' inline-block lg:text-2xl text-3xl font-bold'}>
                                        {service.title}
                                    </motion.p>
                                </motion.div>
                                <div className='opacity-0 service-description'>
                                    <p className={'mt-0 text-lg'}>
                                        {service.serviceFrontShortDescription}
                                    </p>

                                    {service.frontButtonLink && (
                                        <button className={'btn-primary w-full text-[16px]'}>
                                            <Link href={service.frontButtonLink} className={'text-white'}>
                                                {service.frontButtonText}

                                            </Link>
                                        </button>

                                    )}

                                </div>
                            </div>
                        </div>

                    ))}


                </div>
            </div>
        </div>
    }

    const ServicesMobile = () => {
        return <div className='w-full block lg:hidden mx-auto '>
            <SectionTitle title={'Full Service Digital Agency'} />

            <div className='bg-transparent mt-7 shadow-sm'>

                {services && services.map((service, i) => (
                    <div key={'service-mobile-' + service.id} className='transition accordion-item'>
                        <div
                            onClick={() => {
                                var height = document.getElementById('tab' + i).style.maxHeight
                                if (height !== '300px')
                                    document.getElementById('tab' + i).style.maxHeight = '300px'
                                else
                                    document.getElementById('tab' + i).style.maxHeight = '0'

                            }}
                            className='accordion-header cursor-pointer transition flex space-x-5 items-center h-16'>
                            <div className={'service-heading '}>
                                <span className={'text-highlighted text-5xl font-bold'}>0{i + 1}</span>
                                <p className={' inline-block text-2xl font-bold'}>
                                    {service.title}
                                </p>
                            </div>
                        </div>
                        <div id={'tab' + i} className='accordion-content px-5 pt-0 overflow-hidden max-h-0'
                             style={{ maxHeight: 0 }}>

                            <div className={'service-description w-100 relative'}>
                                <Image width={1920} height={400} alt={service.serviceBgImage?.altText}
                                       src={service.serviceBgImage?.sourceUrl} loading={'lazy'}
                                       objectFit={'cover'} />
                                <p className={'mt-0 text-lg'}>
                                    {service.serviceFrontShortDescription}
                                </p>

                                <p className='text-md font-bold'>{service.frontButtonText}</p>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    }


    return <div className='bg-dark_blue '>

        {width >= 1024 ? <ServicesDesktop /> : <ServicesMobile />}


    </div>
}
