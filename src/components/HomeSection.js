import React from 'react';
import { GiSupersonicArrow } from "react-icons/gi";
import { FaBrush } from "react-icons/fa6";
import { IoBulb } from "react-icons/io5";

const HomeSection = () => {
    return (
        <div className='bg-stone-800'>
            <div className='xxl:px-[15%] py-40 text-white xl:px-[10%] text-center md:px-[6%] sm:px-32 px-20 gap-10 grid md:grid-cols-3 grid-cols-1'>
                <div>
                    <div className='items-center justify-center flex '>
                        <img src="../images/homeSection/1.png" alt="" />
                        <GiSupersonicArrow className='w-10 text-red-400 h-10 absolute' />
                    </div>
                    <h1 className='text-2xl py-5 font-semibold'>
                        Pixel Perfect
                    </h1>
                    <p className='text-red-100 leading-6'>
                        Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                    </p>
                </div>

                <div>
                    <div className='items-center justify-center flex '>
                        <img src="../images/homeSection/2.png" alt="" />
                        <FaBrush className='w-10 h-10 text-green-300 absolute' />
                    </div>
                    <h1 className='text-2xl py-5 font-semibold'>
                        High Quality
                    </h1>
                    <p className='text-red-100 leading-7 text-[17px]'>
                        Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                    </p>
                </div>

                <div>
                    <div className='items-center justify-center flex '>
                        <img src="../images/homeSection/3.png" alt="" />
                        <IoBulb className='w-12 h-12 text-yellow-300 absolute' />
                    </div>
                    <h1 className='text-2xl py-5 font-semibold'>
                        Awesome Idea
                    </h1>
                    <p className='text-red-100 leading-7 text-[17px]'>
                        Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeSection