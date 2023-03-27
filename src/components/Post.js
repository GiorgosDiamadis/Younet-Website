import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

export default function Post({ id, categories, date, postId, slug, title, author, excerpt, featuredImage, index }) {

    return <motion.div
        key={id}
        variants={fadeIn('up', 'spring', index * .5, 1)}
        className={'flex md:flex-row flex-col gap-4'}>
        <img src={featuredImage &&  featuredImage.sourceUrl} alt={featuredImage && featuredImage.altText}
             className={'md:w-[270px] w-full h-[250px] rounded-[32px] object-cover'} />

        <div className={'w-full flex justify-between items-center'}>
            <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
                <h4>{title}</h4>

                <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
            </div>
        </div>

    </motion.div>
}