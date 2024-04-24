import { motion } from 'framer-motion';
import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";
const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full  h-screen bg-zink-900 pt-2'>
            <div className='text-7xl mb-1 mt-32 px-20 tracking-tighter leading-none uppercase  font-semibold'>
                <h1>we create </h1>
                <div className='flex mb-1 content-center'>
                    <motion.div initial={{width:0}}
                     animate={{width:"7rem"}}
                     transition={{ease:[0.76, 0 , 0.24, 1], duration:1}}

                      className='w-30 mr-1 mt-3 rounded-lg  h-[55px] overflow-hidden bg-orange-500'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                    </motion.div>
                    <h1>eye-opening</h1>
                    </div>
                <h1>presentations</h1>
            </div>
            <div className='flex justify-between items-center py-5 px-20 border-t-2 mt-32 border-zink-800'>
                {
                    ["For public and private companies",
                    "From the first pitch to IPO"].map((item, index) => <p className='flex text-md font-light items-start '>{item}</p>)
                }
                <div className='start flex content-center items-center justify-between gap-2'>
                    <div className='px-4 py-2 border-[1px] border-zinc-600 font-light uppercase rounded-full text-sm'>start the project</div>
                    <div className='w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-zinc-6010  '>
                        <FaLongArrowAltUp className='text-sm rotate-45' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
