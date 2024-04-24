import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tr-lg rounded-tl-3xl text-black'>
        <h1 className='text-[3.5vw] tracking-tight font-["Neue-Montreal"] leading-[4.0vw]'>Ochi is a strategic partner for fast-growing tech
        businesses that need to raise funds, sell products,
        explain complex ideas, and hire great people.</h1>

        <div className='w-full border-t-[1px] flex mt-20 pt-10 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-7xl '>Our approach:</h1>
                <button className='text-md flex justify-between items-center gap-2 text-white uppercase mt-10 rounded-full px-6 py-3 bg-zinc-900 '>read more
                <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] '></div>
        </div>


    </div>
  )
}

export default About