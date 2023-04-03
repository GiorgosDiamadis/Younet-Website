import {textVariant2} from '../utils/motion'

export const TypingText = ({ title, styles = '' }) => (

    <p
        // variants={textContainer}
        className={`${styles}`}
    >
        {Array.from(title).map((letter, index) => (
            <span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </span>
        ))}

    </p>
)