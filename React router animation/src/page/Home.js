import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../image/fleurs2.jpg'
import { motion } from 'framer-motion';
import { animationOne,transition } from '../Animations/index';
const Home = () => {
    return (
        <motion.div
            initial="out" animate="in" exit="out" variants={animationOne} transition={transition}
        >
            <Header />
            <Hero image={Image} title='Experience Nature' desc='once in a lifetime' />
        </motion.div>
    )
}

export default Home
