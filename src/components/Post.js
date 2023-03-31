import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import TitleText from './TitleText'
import Link from 'next/link'
import Image from 'next/image'

export default function Post({
                                 id,
                                 categories,
                                 date,
                                 postId,
                                 slug,
                                 title,
                                 author,
                                 excerpt,
                                 featuredImage,
                                 index,
                                 ...rest
                             }) {

    return <motion.div
        key={id}
        variants={fadeIn('up', 'spring', index * .5, 1)}
        {...rest}
        className={'flex md:flex-row flex-col  gap-1 800px:gap-2 1150px:gap-4'}>
        <Link href={`/posts/${slug}`} className={'w-[340px] h-[250px]'}>

            <Image loading={'lazy'} width={340} height={250} src={featuredImage && featuredImage.sourceUrl}
                   alt={featuredImage && featuredImage.altText}
                   className={'md:w-[270px] w-full h-[250px] rounded-[32px] object-cover'} />
        </Link>

        <div className={'w-full flex justify-between items-center'}>
            <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
                <Link href={`/posts/${slug}`}>
                    <TitleText title={title} />
                </Link>
                <div className='grid grid-cols-3 lg:grid-cols-5 gap-3'>
                    {categories.map((category) => (
                        <div key={category.id} className={'p-1 text-white text-center bg-yn_blue-100 rounded-full'}>
                            <Link href={`/categories/${category.slug}`} className={'text-white'}>

                                {category.name}
                            </Link>
                        </div>

                    ))}
                </div>
                <div className={'flex gap-2 mt-3'}>
                    <Image loading={'lazy'} src={author.avatar.url} width={20} height={0}
                           className={'h-auto rounded-full'} alt={author.name} />
                    <span className={'text-white'}>{author.name}</span>
                </div>

                <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
            </div>
        </div>

    </motion.div>
}