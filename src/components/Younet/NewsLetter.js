import SectionTitle from '../SectionTitle'
import WithTooltip from '../WithTooltip'
import CallToAction from '../CallToAction'
import Section from '../Section'
import { TypingText } from '../TypingText'
import { motion } from 'framer-motion'
import { staggerContainer, textVariant } from '../../utils/motion'

export default function NewsLetter() {
    return <Section className={'min-h-[0px] h-[300px] mb-0'}>
        <motion.div
            variants={staggerContainer}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.25 }}
            className='flex-col lg:flex-row   flex justify-between items-center'>
            <div className='w-full lg:w-1/3'>
                <SectionTitle size={'md'} title={' Sign Up To Get The Latest Digital Trends'} />
            </div>
            <motion.div variants={textVariant(.3)} className='w-full lg:w-1/2'>
                <form id='form' noValidate>
                    <div
                        className='relative z-0 w-full mt-10 lg:mt-0 flex-col lg:flex-row flex gap-4 items-center'>
                        <WithTooltip className={'relative w-full'}
                                     tooltipContent={'Διεύθυνση ηλεκτρονικού ταχυδρομείου'}>
                            <input
                                type='text'
                                name='name'
                                id={'name'}
                                placeholder=' '
                                required
                                className='p-4 h-[50px] lg:h-[70px] rounded-lg block w-full px-0 mt-0 bg-transparent border-2 appearance-none focus:outline-none focus:ring-0 focus:border-highlighted border-gray-200'
                            />
                            <label htmlFor='name'
                                   className='absolute duration-300 top-1/2 -translate-y-1/2 left-3 -z-1 origin-0 text-white'>Email</label>
                        </WithTooltip>


                        <CallToAction className={'lg:w-auto w-full'} onClick={() => {

                        }}>
                            <div className={'request-quote text-center cursor-pointer'}>εγγραφη</div>
                        </CallToAction>
                        <span className='text-sm text-red-600 hidden absolute'
                              id='error'>Name is required</span>
                    </div>
                </form>
            </motion.div>
        </motion.div>
        <motion.div
            variants={staggerContainer}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.25 }}
            className='text-2xl text-white text-center mt-10'>
            <motion.p variants={textVariant(.4)}>
                Κάνε εγγραφή στο Newsletter μας και μάθε πρώτος τις τελευταίες εξελίξεις στον κόσμο του Digital.
            </motion.p>

        </motion.div>
    </Section>
}