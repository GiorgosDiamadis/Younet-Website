'use client'


import SectionTitle from '../SectionTitle'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function Services({ services }) {

    const [width, setWidth] = useState()

    useEffect(() => {

        setWidth(window.screen.width)
    }, [])

    const ServicesDesktop = () => {
        const [activeService, setActiveService] = useState(0)

        return <div className='hidden lg:flex services-description h-[600px]  flex-col '>
            <div className='relative  flex-1 overflow-hidden'>
                <div className='hidden lg:block'>
                    {services && services.map((service, i) => (
                        <div key={service.id}
                             className={`images ${i === activeService ? 'active' : ''} ` + (i > 0 ? 'opacity-0' : '')}>
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
                        <div key={service.id} className={'group service'} onMouseEnter={() => {
                            setActiveService(i)
                        }}>
                            <div className='relative d-flex flex-col justify-end'>
                                <div
                                    // variants={staggerContainer}
                                    //         initial={'hidden'}
                                    //         whileInView={'show'}
                                    //         viewport={{ once: true, amount: 0.25 }}
                                     id={`heading-${service.id}`}
                                            className={'service-heading '}>
                                    <span
                                        // variants={textVariant(.1)}
                                                 className={'text-highlighted text-5xl font-bold'}>0{i + 1}</span>
                                    <p
                                        // variants={textVariant(.15)}
                                              className={' inline-block lg:text-2xl text-3xl font-bold'}>
                                        {service.title}
                                    </p>
                                </div>
                                <div className='opacity-0 service-description'>
                                    <p className={'mt-0 text-lg'}>
                                        {service.serviceFrontShortDescription}
                                    </p>

                                    {service.frontButtonLink && (
                                        <button className={'btn-primary w-full text-[16px]'}>
                                            <Link target={'_blank'} href={service.frontButtonLink} className={'text-white'}>
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

        const [activeService, setActiveService] = useState(0)

        return <div className='w-full block lg:hidden mx-auto px-5 800px:px-0'>
            <SectionTitle title={'Full Service Digital Agency'} />

            <div className='bg-transparent mt-7 shadow-sm'>

                {services && services.map((service, i) => (
                    <div key={'service-mobile-' + service.id} className='transition accordion-item'>
                        <div
                            onTouchStart={()=>{
                                setActiveService(i)

                            }}
                            className='accordion-header relative cursor-pointer transition flex px-0 items-center h-16'>
                            <div className={'service-heading '}>
                                <span className={'text-highlighted text-5xl font-bold'}>0{i + 1}</span>
                                <p className={' inline-block text-2xl font-bold m-0'}>
                                    {service.title}
                                </p>
                            </div>
                        </div>
                        <div className='accordion-content pt-0 overflow-hidden max-h-0'
                             style={{ maxHeight: `${i === activeService ? '300px' : '0px'}` }}>

                            <div className={'service-description w-100 relative'}>
                                <Image width={560} height={130} alt={service.serviceBgImage?.altText}
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


    return <>
        {width >= 1024 ? <ServicesDesktop /> : <ServicesMobile />}</>


}
