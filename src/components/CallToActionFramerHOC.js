import { motion } from 'framer-motion'
import CallToAction from './CallToAction'
import { staggerContainer, textVariant } from '../utils/motion'

export default function CallToActionFramerHOC({
                                                  children, onClick = () => {
    }, ...rest
                                              }) {


    return <div
        // variants={staggerContainer}
        // initial={'hidden'}
        // whileInView={'show'}
        // viewport={{ once: true, amount: 0.25 }}
    >

        <div
            // variants={textVariant(.4)}
        >
            <CallToAction onClick={onClick} children={children} {...rest} />

        </div>

    </div>
}