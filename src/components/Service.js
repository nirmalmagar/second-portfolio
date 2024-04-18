import React from 'react';
import { FaDropbox } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

const Service = () => {
    return (
        <div className='grid-cols-2'>
            {/* <img className='absolute top-80 left-5' src="../images/service/6.png" alt="" /> */}
            <div className='relative xxl:px-60 xl:px-40 md:px-10 sm:px-8 px-4 py-40 bg-stone-800 text-white'>
                <img className='absolute top-0 right-0 w-96 h-96' src="../images/service/5.png" alt="" />
                <div className='text-center'>
                    <span className='text-lg font-semibold text-orange-600'>Portfolio</span>
                    <h1 className='text-4xl font-semibold py-5'>My Amazing Works</h1>
                    <p className='text-[17px] text-red-100 lg:mx-auto xl:max-w-[50%]'>Most common methods
                        for designing websites that work well on desktop is responsive and adaptive design</p>
                </div>
                <div className='grid lgg:grid-cols-2 grid-cols-1 gap-4 lgg:mx-0 sm:mx-[10%] mx-1 mt-28'>
                    <div className='bg-neutral-600 hover:bg-neutral-700 duration-500 text-white py-16 rounded-2xl '>
                        <div className='grid grid-cols-3 sm:px-7 px-2'>
                            <div className='bg-no-repeat relative xxl:ml-7 lg:ml-3 ml-0 mt-4' style={{ backgroundImage: `url(${"../images/service/1.png"})` }}>
                                <div className='absolute top-6 left-6 text-black'><FaDropbox className='w-12 h-12' /></div>
                            </div>
                            <div className='col-span-2'>
                                <h1 className='text-2xl font-bold'>Creative Design</h1>
                                <div className='flex text-[17px] font-semibold py-4'>
                                    <h2>Starts from</h2><span className='text-orange-600'>$99</span>
                                </div>
                                <p className='text-white'>Web design refers to the design of websites that are displayed on the internet.
                                    It usually refers to the user experience aspects of website development</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-neutral-600 hover:bg-neutral-700 duration-500 text-white py-16 rounded-2xl '>
                        <div className='grid grid-cols-3 sm:px-7 px-2'>
                            <div className='bg-no-repeat relative xxl:ml-7 lg:ml-3 mt-4' style={{ backgroundImage: `url(${"../images/service/2.png"})` }}>
                                <div className='absolute top-6 left-6 text-black'><FaReact className='w-12 h-12' /></div>
                            </div>
                            <div className='col-span-2'>
                                <h1 className='text-2xl font-bold'>Creative Design</h1>
                                <div className='flex text-[17px] font-semibold py-4'>
                                    <h2>Starts from</h2><span className='text-orange-600'>$99</span>
                                </div>
                                <p className='text-white'>Web design refers to the design of websites that are displayed on the internet.
                                    It usually refers to the user experience aspects of website development</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-neutral-600 hover:bg-neutral-700 duration-500 text-white py-16 rounded-2xl '>
                        <div className='grid grid-cols-3 sm:px-7 px-2'>
                            <div className='bg-no-repeat relative xxl:ml-7 lg:ml-3 mt-4' style={{ backgroundImage: `url(${"../images/service/3.png"})` }}>
                                <div className='absolute top-6 left-6 text-black'><FaRegAddressCard className='w-12 h-12' /></div>
                            </div>
                            <div className='col-span-2'>
                                <h1 className='text-2xl font-bold'>Creative Design</h1>
                                <div className='flex text-[17px] font-semibold py-4'>
                                    <h2>Starts from</h2><span className='text-orange-600'>$99</span>
                                </div>
                                <p className='text-white'>Web design refers to the design of websites that are displayed on the internet.
                                    It usually refers to the user experience aspects of website development</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-neutral-600 hover:bg-neutral-700 duration-500 text-white py-16 rounded-2xl '>
                        <div className='grid grid-cols-3 sm:px-7 px-2'>
                            <div className='bg-no-repeat relative xxl:ml-7 lg:ml-3 mt-4' style={{ backgroundImage: `url(${"../images/service/4.png"})` }}>
                                <div className='absolute top-6 left-6 text-black'><CgWebsite className='w-12 h-12' /></div>
                            </div>
                            <div className='col-span-2'>
                                <h1 className='text-2xl font-bold'>Creative Design</h1>
                                <div className='flex text-[17px] font-semibold py-4'>
                                    <h2>Starts from</h2><span className='text-orange-600'>$99</span>
                                </div>
                                <p className='text-white'>Web design refers to the design of websites that are displayed on the internet.
                                    It usually refers to the user experience aspects of website development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service