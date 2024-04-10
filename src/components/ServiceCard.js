import React from 'react';
import { FaDropbox } from "react-icons/fa";

const ServiceCard = () => {
    return (
        <div className='bg-gray-500 text-white w-1/3 px-10 py-20 '>
            <div className='grid grid-cols-3'>
                <div className='bg-no-repeat relative' style={{ backgroundImage: `url(${"../images/service/1.png"})` }}>
                    <div className='absolute top-4 left-2 text-black'><FaDropbox className='w-20 h-16' /></div>
                </div>
                <div className='col-span-2'>
                    <h1 className='text-3xl font-semibold'>Creative Design</h1>
                    <div className='flex text-lg font-semibold'>
                        <h2>Starts from</h2><span className='text-orange-600'>$99</span>
                    </div>
                    <p className='text-red-950'>Web design refers to the design of websites that are displayed on the internet.
                        It usually refers to the user experience aspects of website development</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard