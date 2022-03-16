import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../image/fleurs5.jpg'
import { motion } from 'framer-motion';
import { animationFree,transition } from '../Animations/index';
const Service = () => {
    return (
        <motion.div initial="out" animate="end"  exit="out" variants={animationFree} transition={transition}>
            <Header />
            <Hero image={Image} title='Experience Nature' desc='once in a lifetime' />
        </motion.div>
    )
}

export default Service
