import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div className='relative lg:px-60 md:px-14 px-8 py-40 bg-stone-800 text-white'>
                <img className='absolute top-32 left-5' src="../images/portfolio/bgSticker.png" alt="" />
                <img className='absolute bottom-10 right-20 w-60' src="../images/portfolio/bgSticker2.png" alt="" />
                <div className='text-center'>
                    <span className='text-lg font-semibold text-orange-600'>Portfolio</span>
                    <h1 className='text-4xl font-semibold py-5'>My Amazing Works</h1>
                    <p className='text-[17px] text-red-100'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
                    <h2 className='text-lg font-semibold text-orange-600 py-6'>All</h2>
                </div>

                <div className='grid grid-rows-3 gap-5 grid-flow-col'>
                    <div className='row-span-2'>
                        <img className='rounded-xl h-full hover:scale-95 duration-500' src="../images/portfolio/1.jpg" alt="" />
                    </div>
                    <div>
                        <img className='rounded-xl h-full hover:scale-95 duration-500' src="../images/portfolio/2.jpg" alt="" />
                    </div>
                    <div>
                        <img className='rounded-xl h-full hover:scale-95 duration-500' src="../images/portfolio/3.jpg" alt="" />
                    </div>
                    <div className='row-span-2'>
                        <img className='rounded-xl h-full hover:scale-95 duration-500' src="../images/portfolio/4.jpg" alt="" />
                    </div>
                    <div className='row-span-2'>
                        <img className='rounded-xl h-full hover:scale-95 duration-500' src="../images/portfolio/5.jpg" alt="" />
                    </div>
                    <div>
                        <img className='rounded-xl h-full hover:scale-95 duration-500' src="../images/portfolio/6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio