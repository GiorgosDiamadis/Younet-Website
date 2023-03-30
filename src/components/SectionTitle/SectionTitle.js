import { slideIn, staggerContainer, textVariant } from '../../utils/motion'
import { motion } from 'framer-motion'

const SectionTitle = ({ title, subTitle, size = 'lg' }) => {
    return <motion.div
        variants={staggerContainer}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.25 }}
    >
        {subTitle && <div className='text-center'>
            <motion.span
                variants={textVariant(.05)}
                className={'text-white text-center text-sm sm:text-xl lg:text-2xl  font-bold mr-1 inline-block'}>{subTitle}</motion.span>
        </div>}


        <motion.p variants={textVariant(.1)} className={`mb-0 heading ${size === 'md' ? 'text-5xl' : ''} `}>{title}</motion.p>
    </motion.div>
}

export default SectionTitle
