import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../utils/motion'

export const TypingText = ({ title, styles = '' }) => (

    <motion.p
        variants={textContainer}
        className={`${styles}`}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}

    </motion.p>
)