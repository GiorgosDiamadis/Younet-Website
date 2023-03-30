import Image from 'next/image'

export default function Project({ project, ...rest }) {


    return <>
        <div {...rest} className='portfolio-item group relative  '>

            <div className='portfolio-item-details 800px:group-hover:rotate-y-minus35'>
                <Image src={project.backgroundImage?.sourceUrl} alt={''}
                       loading={'lazy'}
                       width={680} height={500}
                       className={'h-full w-full absolute top-0 bottom-0 left-0 right-0'} />
            </div>

            <div style={{ '--bg-image': `url('${project.backgroundImage?.sourceUrl}')` }}
                 className={'portfolio-item-perspective'}>


            </div>

            <div className='flex flex-col relative  group w-full h-full items-end z-[12] '>
                <div className='absolute left-3 bottom-4 800px:bottom-12 w-[90%]'>

                    <div
                        className={`absolute left-0 bottom-full 800px:bottom-0 group-hover:bottom-full transition-all duration-500 w-full w-auto text-center`}>
                        <Image loading={'lazy'} width={100} height={0}
                               className={'h-auto text-white relative  text-5xl font-bold '}
                               src={project.companyLogo?.sourceUrl} alt={''} />

                        <h1 className={'text-white relative w-[350px]  text-xl font-bold mt-3 text-left lg:text-left '}>
                            {project.title}
                        </h1>
                    </div>

                    <p className={'leading-[20px] 800px:leading-[26px]  800px:text-[18px] text-[15px]  mt-[10px] text-lg w-[350px] relative opacity-100 800px:opacity-0 duration-500 transition-all text-left group-hover:opacity-100'}>
                        {project.description}
                    </p>
                    <a target={'_blank'} href={project.url} className={'text-white'}>
                        <div
                            className={'request-quote relative cursor-pointer text-center group-hover:opacity-100 w-[300px]   opacity-100 800px:opacity-0 duration-500 transition-all'}>
                            Go to Website
                        </div>
                    </a>


                </div>

            </div>
            <div className='angled-image  z-[12] 1150px:w-auto'>
                <Image src={project.onHover?.sourceUrl} width={250} height={300} alt={'alt'}
                       loading={'lazy'} />
            </div>
        </div>
    </>

}