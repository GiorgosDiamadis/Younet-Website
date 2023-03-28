import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import TitleText from './TitleText'
import Link from 'next/link'

export default function Post({ id, categories, date, postId, slug, title, author, excerpt, featuredImage, index }) {

    return <motion.div
        key={id}
        variants={fadeIn('up', 'spring', index * .5, 1)}
        className={'flex md:flex-row flex-col gap-4'}>
        <img src={featuredImage && featuredImage.sourceUrl} alt={featuredImage && featuredImage.altText}
             className={'md:w-[270px] w-full h-[250px] rounded-[32px] object-cover'} />

        <div className={'w-full flex justify-between items-center'}>
            <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
                <TitleText title={title} />
                <div className='grid grid-cols-5 gap-3'>
                    {categories.map((category) => (
                        <div className={'p-1 text-white text-center bg-yn_blue-100 rounded-full'}>
                            <Link href={`/categories/${category.slug}`} className={'text-white'}>

                                {category.name}
                            </Link>
                        </div>

                    ))}
                </div>
                <div className={'flex gap-2 mt-3'}>
                    <img src={author.avatar.url} width={20} className={'rounded-full'} alt={author.name} />
                    <span className={'text-white'}>{author.name}</span>
                </div>

                <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
            </div>
        </div>

    </motion.div>
}