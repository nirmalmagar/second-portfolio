import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='xxl:px-[15%] xl:px-[10%] px-[6%] pb-40 bg-stone-800 text-white relative'>
            <div className='text-center'>
                <span className='text-lg font-semibold text-orange-600'>Contact Me</span>
                <h1 className='text-4xl font-semibold py-5'>I Want To Hear From You</h1>
                <p className='text-[17px] text-red-100 lg:mx-auto xl:max-w-[60%]'>Please fill out the
                    form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET,
                    Monday through Friday</p>
            </div>
            <img className='absolute left-0' src="../images/contact/1.png" alt="" />

            <div className='grid lg:grid-cols-2 grid-cols-1 my-24'>
                <div className='grid lg:grid-cols-1 md:grid-cols-3 grid-cols-1 md:mx-0 mx-auto md:gap-y-0 gap-y-10'>
                    <div className='flex lg:gap-x-8 gap-x-2'>
                        <div className='bg-red-100 rounded-full relative lg:w-20 w-14 lg:h-20 h-14'>
                            <FaMapMarkerAlt className='lg:w-8 lg:h-8 w-6 h-6 absolute lg:top-6 lg:left-6 top-4 left-4 text-red-600' />
                        </div>
                        <div className='mt-3'>
                            <h1 className='lg:text-2xl text-lg hover:text-orange-500 cursor-pointer font-semibold'>Address</h1>
                            <p className='hover:text-orange-500 lg:text-normal text-sm cursor-pointer'>20, Somewhere in world</p>
                        </div>
                    </div>
                    <div className='flex lg:gap-x-8 gap-x-2'>
                        <div className='bg-green-200 lg:w-20 w-14 relative lg:h-20 h-14 rounded-full'>
                            <MdEmail className='lg:w-8 lg:h-8 w-6 h-6 absolute lg:top-6 lg:left-6 top-4 left-4 text-green-600' />
                        </div>
                        <div className='mt-3'>
                            <h1 className='lg:text-2xl text-lg hover:text-orange-500 cursor-pointer font-semibold'>Email</h1>
                            <p className='hover:text-orange-500 lg:text-normal text-sm cursor-pointer'>hello@dizme.com</p>
                        </div>
                    </div>
                    <div className='flex lg:gap-x-8 gap-x-2'>
                        <div className='bg-blue-200 lg:w-20 w-14 relative lg:h-20 h-14 rounded-full'>
                            <FaPhone className='lg:w-8 lg:h-8 w-6 h-6 absolute lg:top-6 lg:left-6 top-4 left-4 text-blue-600' />
                        </div>
                        <div className='mt-3'>
                            <h1 className='lg:text-2xl text-lg hover:text-orange-500 cursor-pointer font-semibold'>Phone No.</h1>
                            <p className='hover:text-orange-500 lg:text-normal text-sm cursor-pointer'>+977 98474763726</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='grid grid-cols-2 gap-3 lg:mt-0 mt-20'>
                        <input className='bg-stone-800 border-2 h-14 border-gray-400 rounded-xl pl-4 text-lg' type="text" placeholder='Enter your name' />
                        <input className='bg-stone-800 border-2 h-14 border-gray-400 rounded-xl pl-4 text-lg' type="email" placeholder='Enter your email' />
                        <input className='bg-stone-800 border-2 h-14 border-gray-400 rounded-xl pl-4 text-lg' type="number" placeholder='Enter your phone no.' />
                        <input className='bg-stone-800 border-2 h-14 border-gray-400 rounded-xl pl-4 text-lg' type="text" placeholder='Subject' />
                    </div>
                    <textarea className='bg-stone-800 border-2 rounded-xl border-gray-400 min-h-40 w-full mt-4 pl-4 pt-2 text-lg'
                        name="" id="" cols="60" rows="10" placeholder='Write your message here..'></textarea>
                    <button className='bg-orange-600 px-8 py-3 rounded-3xl mt-2 font-semibold hover:bg-orange-700 text-lg duration-500'>Submit Now</button>
                    <img className='absolute -right-20 -bottom-14 ' src="../images/contact/2.png" alt="" />
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56542.97032933189!2d85.28195224374664!3d27.657462709794974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d3cf18ca51%3A0xd10ec3d53656e18f!2sLalitpur!5e0!3m2!1sen!2snp!4v1713458040835!5m2!1sen!2snp"
                className='w-full h-96' title='map'></iframe>
        </div>
    )
}

export default Contact