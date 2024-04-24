import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-speed=".1" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text overflow-hidden border-t-2 border-b-2 whitespace-nowrap border-zinc-300 flex'>
            <motion.h1 
            initial={{x:0}}
            animate={{x:"-100%"}}
            transition={{repeat:Infinity, duration:10, ease:'linear'}}
              className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase'>we are ochi&nbsp;</motion.h1>
            <motion.h1
            initial={{x:0}}
            animate={{x:"-100%"}}
            transition={{repeat:Infinity, duration:10, ease:'linear'}}
             className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase'> we are ochi</motion.h1>
        </div>
        
    </div>
    )
}

export default Marquee