import Section from './Section'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'
import Post from './Post'
import Link from 'next/link'


export default function LatestPosts({ posts }) {
    console.log(posts)

    return <Section>
        <SectionTitle title={'Digital Trends'}
                      subTitle={'Discover The Latest Digital Strategies & Emerging Ideas For Business Growth'} />

        <motion.div
            variants={staggerContainer}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: .1 }}
            className={'mt-[50px] flex flex-col gap-[30px] 800px:px-0 px-5'}>


            {posts && posts.map((post, index) => (
                <Post
                    key={post.id}
                    title={post.title}
                    postId={post.postId}
                    date={post.date}
                    slug={post.slug}
                    featuredImage={post.featuredImage}
                    author={post.author}
                    categories={post.categories}
                    excerpt={post.excerpt}
                    id={post.id}
                    index={index}
                />
            ))}


            <motion.button variants={fadeIn('up', 'tween', 1.5, .5)} className='btn btn-primary m-auto' role='button'>


                <Link href={'/posts'} className={'text-white'}>
                    More posts
                </Link>
            </motion.button>

        </motion.div>

    </Section>
}