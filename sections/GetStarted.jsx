'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';


const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
      <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:'false, amount:0.25'}}
      className={`${styles.innerWidth} mx-auto flex
      lg:flex-row flex-col gap-8`}>
        <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}>
          <img
            src='/get-started.png' 
            alt='get-started'
            className='w-[90%] h-[90%] object-contain'/>

        </motion.div>

      </motion.div>
  </section>
);

export default GetStarted;
