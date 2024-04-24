import React from 'react';

const Cards = () => {
    return (
        <div className='w-full h-screen items-center justify-center flex gap-10 px-10 py-20 bg-zinc-100'>
            <div className='cardcontainer rounded-xl overflow-hidden  h-96 w-1/2'>
                <div className='card w-full relative h-full bg-[#004D43]'>
                    <div className='h-full absolute flex items-center justify-center w-full'>
                            <img className='h-[70px]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                            
                    </div>
                    <div className='absolute h-40 w-50 mt-72 px-10 pt-10'>
                        <div className='text-[#CDEA68]'>
                        <h3 className='p-2  border-[#CDEA68] border-[1px]  rounded-full'>&copy;2019-2022</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardcontainer  h-96 w-1/2'>
                <div className='card w-full flex gap-10 h-full'>
                    <div className='h-full w-1/2 relative rounded-xl bg-[#212121]'>
                        <div className='absolute  flex items-center justify-center w-full h-full'>
                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        </div>
                        <div className='mt-64 ml-10 px-5 pt-20'>
                            <h3 className='uppercase text-sm border-[1px] border-white py-1.5 text-center -ml-10 mr-10 rounded-full'>rating 5.0 on clutch</h3>
                        </div>
                    </div>
                    <div className='h-full w-1/2 relative rounded-xl bg-[#212121]'>
                        <div className='absolute  flex items-center justify-center w-full h-full'>
                            <img className='h-auto w-[120px]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                        </div>
                        <div className='p-2 mt-64 pt-16 px-10'>
                            <h3 className='uppercase text-sm  border-[1px] border-white    text-center rounded-full'>buisness bootcamp <br /> alumini</h3>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Cards;
