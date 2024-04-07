import React from 'react';

const PortfolioSection = () => {
    return (
        <>
            <div className='xxl:px-[15%] xl:px-[10%] px-[6%] overflow-x-hidden pb-20 bg-stone-800 ' >
                <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-x-20 gap-x-10 text-white'>
                    <div className='my-20 text-center md:text-left'>
                        <span className='text-lg text-orange-600 font-mono font-semibold'>Design is Life</span>
                        <h1 className='xl:text-4xl text-3xl font-semibold py-6'>I Develop Skills Regularly to Keep Me Update</h1>
                        <p className='text-[17px] mb-5 text-red-100'>Most common methods for designing websites
                            that work well on desktop is responsive and adaptive design</p>

                        <div className='text-white mt-16'>
                            <div>
                                <div className='flex mb-2'>
                                    <h1 className='lg:mr-[69%] md:mr-[63%] mr-[69%] font-semibold text-[16px]'>Illustrator</h1>
                                    <h1 className='text-orange-600'>85%</h1>
                                </div>
                                <div className='bg-white w-full h-2 rounded-r-3xl'>
                                    <div className='bg-orange-600 w-[85%] h-2'></div>
                                </div>
                            </div>
                            <div className='my-8'>
                                <div className='flex mb-2'>
                                    <h1 className='lg:mr-[73%] md:mr-[64%] mr-[73%] font-semibold text-[16px]'>Photoshop</h1>
                                    <h1 className='text-green-600'>90%</h1>
                                </div>
                                <div className='bg-white w-full h-2 rounded-r-3xl'>
                                    <div className='bg-green-600 w-[90%] h-2'></div>
                                </div>
                            </div>
                            <div>
                                <div className='flex mb-2'>
                                    <h1 className='lg:mr-[65%] md:mr-[63%] mr-[65%] font-semibold text-[16px]'>Figma</h1>
                                    <h1 className='text-blue-600'>75%</h1>
                                </div>
                                <div className='bg-white w-full h-2 rounded-r-3xl'>
                                    <div className='bg-blue-600 w-[75%] h-2'></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='lg:bg-cover bg-no-repeat bg-center h-[40rem] w-full md:w-full md:h-full
                        relative' style={{ backgroundImage: `url(${"../images/portfolio/portfolioBg.jpg"})` }}></div>
                </div >
            </div >
        </>
    )
}

export default PortfolioSection;