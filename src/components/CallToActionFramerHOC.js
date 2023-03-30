import { motion } from 'framer-motion'
import CallToAction from './CallToAction'
import { staggerContainer, textVariant } from '../utils/motion'

export default function CallToActionFramerHOC({
                                                  children, onClick = () => {
    }, ...rest
                                              }) {


    return <motion.div
        variants={staggerContainer}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.25 }}>

        <motion.div
            variants={textVariant(.4)}>
            <CallToAction onClick={onClick} children={children} {...rest} />

        </motion.div>

    </motion.div>
}