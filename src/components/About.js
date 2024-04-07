import React from 'react';
import CountUp from 'react-countup';

const About = () => {
    return (
        <div className='xxl:px-[15%] xl:px-[10%] px-[6%] overflow-x-hidden pb-20 bg-stone-800 ' >
            <img className='absolute right-10' src="../images/bgStickers/1.png" alt="" />
            <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-x-20 gap-x-10 text-white'>
                <div className='lg:bg-cover bg-no-repeat bg-center h-[40rem] w-full md:w-full md:h-full relative' style={{ backgroundImage: `url(${"../images/about/aboutBg.jpg"})` }}>
                    <div className='absolute top-20 xl:-left-20 -left-10 flex gap-x-3 bg-gray-600 rounded-[14px] px-4 py-2'>
                        <span className='text-green-700 xl:text-6xl text-5xl font-bold '><CountUp start={0} end={18} /></span>
                        <h1 className='xl:text-lg text-base xl:mt-2 mt-1'>Years of<br /> Success</h1>
                    </div>
                    {/* <img src="../images/bgStickers/2.png" alt="" /> */}
                    <div className='absolute right-0 top-96 flex gap-x-3 bg-gray-600 rounded-[14px] px-4 py-2'>
                        <span className='text-blue-700 xl:text-6xl text-4xl font-semibold'><CountUp start={0} end={9} />K</span>
                        <h1 className='text-lg font-semibold xl:mt-4 mt-2'>Total Project</h1>
                    </div>
                </div>
                <div className='my-20 text-center md:text-left'>
                    <span className='text-lg text-orange-600 font-mono font-semibold'>I'm a Programmer</span>
                    <h1 className='xl:text-5xl text-4xl font-semibold py-6'>I Can Design Anything You Want</h1>
                    <p className='text-[17px] mb-5 text-red-100'>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work.
                        With 20 years experience as a professional web developer, I have acquired the skills
                        and knowledge necessary to make your project a success. I enjoy every step of the
                        design process, from discussion and collaboration.</p>
                    <button className='my-4 bg-orange-600 px-6 py-2 rounded-3xl text-base font-semibold'>Hire Me</button>
                </div>
            </div >
        </div >
    )
}

export default About