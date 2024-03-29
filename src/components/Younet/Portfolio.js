import SectionTitle from '../SectionTitle'
import Section from '../Section'
import { useEffect, useState } from 'react'
import { getProjects } from '../../lib/posts'
import Project from '../Project'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export default function Portfolio({ projects, category, projectCategories, ...rest }) {


    const [initialProjects, setInitialProjects] = useState(projects)
    const [categories, setCategories] = useState(projectCategories)
    const [currentCategory, setCurrentCategory] = useState(category)

    const [isLoading, setIsLoading] = useState(false)

    const [width, setWidth] = useState()

    useEffect(() => {

        setWidth(window.screen.width)
    }, [])

    useEffect(() => {

        setIsLoading(true)
        getProjects(currentCategory).then(({ projects }) => {
            setIsLoading(false)
            setInitialProjects(projects)
        })
    }, [currentCategory])

    const Skeleton = ({ number }) => {

        return <>
            {Array.from(Array(number < 4 ? number : 4).keys()).map((i) => (
                <div key={`skeleton-${i}`} className='card'>
                    <div className='card-img skeleton'>

                    </div>
                    <div className='card-body'>
                        <p className='card-intro skeleton'>
                        </p>
                    </div>
                </div>
            ))}
        </>
    }

    const CategoriesDesktopSelector = ({ categories }) => {
        return <>
            {categories && Object.keys(categories).map((category) => (
                <div onClick={() => {
                    setCurrentCategory(category)

                }} key={categories[category].id}
                     className={'p-2 bg-yn_blue-100 rounded-full mt-10 text-white cursor-pointer'}>
                    {categories[category].name}
                </div>
            ))}</>
    }

    const CategoriesMobileSelector = ({ categories }) => {
        return <>
            <select onChange={(e) => {
                setCurrentCategory(e.target.value)
            }}>
                {categories && Object.keys(categories).map((category) => (
                    <option key={categories[category].id} selected={category === currentCategory}
                            value={category}>{categories[category].name}</option>
                ))}
            </select>
        </>
    }


    return <Section {...rest}>
        <SectionTitle title={'Featured Web Design Launches'} />
        <div className={'flex flex-row gap-5 w-full justify-center'}>
            {width >= 800 ? <CategoriesDesktopSelector categories={categories} /> :
                <CategoriesMobileSelector categories={categories} />}
        </div>
        <div
            // variants={staggerContainer}
            // initial={'hidden'}
            // whileInView={'show'}
            // viewport={{ once: true, amount: .1 }}
            className='portfolio-container mt-10 w-full m-auto'>

            {isLoading ? <Skeleton number={categories[currentCategory].count} /> : (
                <Splide aria-label='My Favorite Images' options={{
                    direction: 'ltr',
                    perPage: 2,
                    width: "100%",
                    height: 500,
                    speed: 800
                }}>
                    {
                        initialProjects && initialProjects.map(
                            (project, i) => (
                                <SplideSlide>
                                    <Project key={project.id} project={project} />
                                </SplideSlide>
                            )
                        )
                    }
                </Splide>

            )}


        </div>

    </Section>
}