import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";

const ServiceSection = () => {
    return (
        <div className='bg-stone-800 text-white sm:px-20 xs:px-8 px-0 md:px-0 text-center'>
            <div className=' mx-auto md:w-[40%]'>
                <span className='font-semibold text-xl text-orange-600'>Testimonials</span>
                <h1 className='text-4xl py-5 font-semibold'>What My Clients Say</h1>
                <p className='text-[17px]'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 xl:gap-x-20 gap-x-10'>
                <div className='relative md:block hidden'>
                    <img className='absolute top-0 left-5 xl:left-10 w-20 h-20 rounded-full' src="../images/service/thumbs/1.jpg" alt="" />
                    <img className='absolute top-56 left-32 xl:left-60 w-10 h-10 rounded-full' src="../images/service/thumbs/2.jpg" alt="" />
                    <img className='absolute top-16 left-28 xl:left-52 w-12 h-12 rounded-full' src="../images/service/thumbs/3.jpg" alt="" />
                    <img className='absolute top-60 left-10 xl:left-20 w-10 h-10 rounded-full' src="../images/service/thumbs/4.jpg" alt="" />
                    <img className='absolute -bottom-56 left-5 xl:left-10 h-64' src="../images/service/thumb.png" alt="" />
                    <div className='absolute top-0 left-40 xl:left-60 bg-yellow-500 w-10 h-10 rounded-full'></div>
                    <div className='absolute top-40 left-40 xl:left-48 border-8 border-blue-500 w-10 h-10 rounded-full'></div>
                    <div className='absolute top-36 left-8 xl:left-16 bg-green-500 w-14 h-14 rounded-full'></div>
                </div>
                <div className='col-span-2 text-center'>
                    <div><RiDoubleQuotesL className='mx-auto text-8xl text-orange-600 mt-12' /></div>
                    <p className='text-[17px] font-extralight pb-12 text-lg leading-8 pt-5 font-courgette'>
                        Loved the template design, documentation, customizability and the customer support from
                        Marketify team! I am a noob in programming with very little knowledge about coding but
                        the Marketify team helped me to launch my resume website successfully. Much recommended!</p>
                    <div className=' flex justify-center gap-x-5'>
                        <img className=' w-16 h-16 rounded-full' src="../images/service/thumbs/1.jpg" alt="" />
                        <div>
                            <h1 className='text-xl font-semibold my-1'>Keita Smith</h1>
                            <p>Web Designer</p>
                        </div>
                    </div>
                </div>
                <div className='relative md:block hidden'>
                    <img className='absolute left-40 top-6 w-20 h-20 rounded-full' src="../images/service/thumbs/5.jpg" alt="" />
                    <img className='absolute left-50 top-48 w-16 h-16 rounded-full' src="../images/service/thumbs/6.jpg" alt="" />
                    <img className='absolute left-36 top-40 w-14 h-14 rounded-full' src="../images/service/thumbs/7.jpg" alt="" />
                    <div className='absolute bg-yellow-500 w-16 h-16 rounded-full'></div>
                    <div className='absolute left-12 top-24 border-8 border-blue-500 w-20 h-20 rounded-full'></div>
                    <div className='absolute left-32 top-64 bg-green-500 w-12 h-12 rounded-full'></div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection