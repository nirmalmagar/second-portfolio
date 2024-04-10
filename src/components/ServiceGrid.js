import React from 'react'

const ServiceGrid = () => {
    return (
        <div className='bg-stone-800'>
            <div className='grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 xl:mx-60 lg:mx-20 md:mx-5 sm:mx-20 mx-2 py-40'>
                <div className='border-2 border-gray-400'>
                    <img className='mx-auto py-16 px-6' src="../images/service/gridBox/1.png" alt="" />
                </div>
                <div className='border-2'>
                    <img className='mx-auto py-16 px-6' src="../images/service/gridBox/2.png" alt="" />
                </div>
                <div className='border-2'>
                    <img className='mx-auto py-16 px-6' src="../images/service/gridBox/3.png" alt="" />
                </div>
                <div className='border-2'>
                    <img className='mx-auto py-16 px-6' src="../images/service/gridBox/4.png" alt="" />
                </div>
                <div className='border-2'>
                    <img className='mx-auto py-16 px-6' src="../images/service/gridBox/5.png" alt="" />
                </div>
                <div className='border-2'>
                    <img className='mx-auto py-16 px-6' src="../images/service/gridBox/6.png" alt="" />
                </div>
                <div className='border-2'>
                    <img className='mx-auto py-16 px-6' src="../images/service/gridBox/7.png" alt="" />
                </div>
                <div className='border-2'>
                    <img className='mx-auto py-16 px-6' src="../images/service/gridBox/8.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ServiceGrid