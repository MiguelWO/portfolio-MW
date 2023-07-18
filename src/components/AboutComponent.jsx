import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import {styles }  from '../styles'

import ServiceCard from './ServiceCard'
import { services } from "../constants";

import SectionWrapper from './SectionWrapper'

const AboutComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a passionate Machine Learning practitioner with a strong background 
        in data analysis and modeling. My expertise lies in developing and implementing 
        advanced algorithms to extract valuable insights from complex data sets. 
        With a deep understanding of statistical modeling, predictive analytics, 
        and domain knowledge, I am dedicated to delivering impactful solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AboutComponent, "about");
// export default AboutComponent