import React from 'react';
import { motion } from 'framer-motion';
// import {  solar_logo } from '../../assets';

export default function Hero() {
    return (
        <div className='flex flex-wrap justify-around items-center gap-10 min-h-screen mx-5'>
            <div className='max-w-2xl'>
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        scale: {
                            type: "spring"
                        }
                    }}
                    className='text-primary-100 font-bold lg:text-[70px] md:text-[50px] text-[40px]'
                >
                    This platform
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        scale: {
                            type: "spring",
                            damping: 1,
                            stiffness: 200
                        }
                    }}
                    className='text-primary-100 font-bold lg:text-[70px] md:text-[50px] text-[40px]'
                >
                    will provide
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 1.5,
                        scale: {
                            type: "spring"
                        }
                    }}
                    className='text-primary-100 font-bold lg:text-[70px] md:text-[50px] text-[40px]'
                >
                    solar power.
                </motion.div>
                <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                        duration:1,
                        delay:2.5
                    }}
                >
                    Millions of the world's most successful brands trust Shopify
                    to sell, ship and process payments anywhere.
                </motion.p>
            </div>
            <div className='pt-32'>
                <motion.div
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        loop: Infinity,
                        duration: 3
                    }}
                    className='lg:w-[300px] lg:h-[300px] w-[100px] h-[100px] rounded-xl bg-green-900'
                />
            </div>
        </div>
    )
}
