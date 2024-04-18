import React from 'react'

const BlogSubscribe = () => {
    return (
        <div className='xxl:px-[15%] xl:px-[10%] px-[6%] pb-20 bg-stone-800 text-white relative'>
            <div className='bg-blue-700 rounded-xl '>
                <div className='grid md:grid-cols-2 grid-cols-1 md:text-start text-center xxl:px-20 md:pl-10 xxl:gap-x-20 gap-x-10 py-16'>
                    <div>
                        <h1 className='font-semibold text-xl'>Subscribe Now</h1>
                        <h2 className='font-semibold lg:text-4xl text-3xl py-3'>Get My Newsletter</h2>
                        <p className=''>Get latest news, update, tips and trics in your inbox</p>
                    </div>
                    <div className='md:my-auto mt-5'>
                        <input className='min-w-64 h-16 rounded-s-lg lg:rounded-e-none md:rounded-e-lg text-black pl-5' placeholder='Enter your email here' type="text" />
                        <button className='bg-orange-600 font-semibold text-lg w-32 h-16 lg:mt-0 mt-2 lg:rounded-s-none md:rounded-s-lg rounded-e-lg'>Send Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSubscribe