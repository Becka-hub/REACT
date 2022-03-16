import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../image/fleurs3.jpg'
import { motion } from 'framer-motion';
import { animationTwo,transition  } from '../Animations/index';
const About = () => {
    return (
        <motion.div initial="out" animate="in"  exit="out" variants={animationTwo} transition={transition}>
            <Header />
            <Hero image={Image} title='Experience Nature' desc='once in a lifetime' />
        </motion.div>
    )
}

export default About
