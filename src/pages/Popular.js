import React from 'react';
import Category from '../components/Category';
import PopularSection from '../components/PopularSection';
import Search from '../components/Search';
import VeggieSection from '../components/VeggieSection';
import { motion } from "framer-motion"

function Popular(props) {
    return (
        <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.5}}
        >
            <Search/>
            <Category/>
            <PopularSection/>
            <VeggieSection/>
        </motion.div>
        
    );
}

export default Popular;