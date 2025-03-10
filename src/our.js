import React from 'react';
import Frame1 from './asset/Frame 72.svg'
import Frame2 from './asset/Frame 73.svg'
import Frame3 from './asset/Frame 74.svg'
import { motion } from 'framer-motion';

const Our = () => {
    return (
        <>
        <div className='service-plan'>
        <p> <span>PLANS</span></p>
        <h1>Our Service</h1>
        <p> Lorem ipsum , dolor sit amet consectetur adipisicing elit</p>
        </div>
        <motion.div
        className="frame"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1}}
        >
        <motion.img
            src={Frame1}
            alt="frame1"
            className="frame1"
        />
        <motion.img
            src={Frame2}
            alt="frame2"
            className="frame2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        
        />
        <motion.img
            src={Frame3}
            alt="frame3"
            className="frame3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

        />
        </motion.div>
        </>
    );
};

export default Our;

