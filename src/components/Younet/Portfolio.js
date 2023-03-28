import SectionTitle from '../SectionTitle'
import Image from 'next/image'
import portfolioimg from 'public/portfolioimage.png'
import Section from '../Section'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion'
import { getProjects } from '../../lib/posts'

export default function Portfolio({ projects, category, projectCategories }) {


    const [initialProjects, setInitialProjects] = useState(projects)
    const [categories, setCategories] = useState(projectCategories)
    const [initialCategory, setInitialCategory] = useState(category)
    const [currentCategory, setCurrentCategory] = useState(category)

    useEffect(() => {

        getProjects(currentCategory).then(({ projects }) => {
            setInitialProjects(projects)
        })
    }, [currentCategory])


    return <Section>
        <SectionTitle title={'Featured Web Design Launches'} />
        <div className={'flex flex-row gap-5 w-full justify-center'}>
            {categories && Object.keys(categories).map((category) => (
                <div onClick={() => {
                    setCurrentCategory(category)

                }} key={categories[category].id}
                     className={'p-2 bg-yn_blue-100 rounded-full mt-10 text-white cursor-pointer'}>
                    {categories[category].name}
                </div>
            ))}
        </div>
        <motion.div
            variants={staggerContainer}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: .1 }}
            className='portfolio-container mt-10 1150px:w-full w-3/4 m-auto'>


            {initialProjects && initialProjects.map((project, i) => (
                <div
                    // variants={fadeIn('up', 'tween', .1 * i, .5)}
                    className='portfolio-item group relative  '>

                    <div style={{ '--bg-image': `url('${project.backgroundImage?.sourceUrl}')` }}
                         className='portfolio-item-details lg:group-hover:rotate-y-minus35  p-5'>
                    </div>

                    <div style={{ '--bg-image': `url('${project.backgroundImage?.sourceUrl}')` }}
                         className='portfolio-item-perspective'>


                    </div>

                    <div className='flex flex-col relative  group w-full h-full items-end '>
                        <div className='lg:absolute left-3 bottom-12 w-[90%]'>

                            <div
                                className={`lg:absolute left-0 bottom-0 lg:group-hover:bottom-full transition-all duration-500 w-full lg:w-auto text-center`}>
                                <img className={' text-white relative  text-5xl font-bold '}
                                     src={project.companyLogo?.sourceUrl} />

                                <h1 className={'text-white relative w-[350px] text-xl font-bold mt-3 text-center lg:text-left '}>
                                    {project.title}
                                </h1>
                            </div>

                            <p className={'mt-[10px] text-lg w-[350px] relative opacity-100 lg:opacity-0 duration-500 transition-all text-center lg:text-left lg:group-hover:opacity-100'}>
                                {project.description}
                            </p>
                            <a target={'_blank'} href={project.url} className={'text-white'}>
                                <div
                                    className={'request-quote relative cursor-pointer text-center lg:group-hover:opacity-100 w-[300px]   opacity-100 lg:opacity-0 duration-500 transition-all'}>
                                    Go to Website
                                </div>
                            </a>


                        </div>

                    </div>
                    <div className='angled-image  1150px:w-auto'>
                        <Image src={project.onHover?.sourceUrl} width={250} height={300} alt={'alt'} loading={'lazy'} />
                    </div>
                </div>


            ))}


        </motion.div>

    </Section>
}