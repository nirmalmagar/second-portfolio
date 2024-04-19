import React from 'react'

const Blog = () => {
    return (
        <div className='xxl:px-[15%] xl:px-[10%] px-[6%] pb-20 bg-stone-800 text-white relative' id='blog'>
            <img className='absolute top-10 left-16' src="../images/blog/blogBg.png" alt="" />
            <img className='absolute -top-14 right-10' src="../images/blog/blogBg2.png" alt="" />
            <div className='text-center mb-20'>
                <span className='text-xl text-orange-600'>From My Blog</span>
                <h1 className='font-semibold sm:text-4xl text-2xl my-6'>Our Recent Updates, Blog, Tips,<br /> Tricks & More</h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-y-20 gap-x-6'>
                <div className='relative'>
                    <div className='absolute right-5 top-4 py-1 rounded-xl bg-green-600 text-center'>
                        <span className='text-2xl font-semibold'>23</span>
                        <p className='w-20'>Dec</p>
                    </div>
                    <img className='rounded-xl lg:h-56 h-42 w-full mb-4' src="../images/blog/1.jpg" alt="" />
                    <p className='text-orange-600 cursor-pointer md:text-left text-center'>Web Development</p>
                    <h6 className='py-2 text-lg hover:text-orange-600 cursor-pointer font-semibold md:text-left text-center'>Jim Morisson Says when the musics over turn off the light</h6>
                </div>

                <div className='relative'>
                    <div className='absolute right-5 top-4 py-1 rounded-xl bg-green-600 text-center'>
                        <span className='text-2xl font-semibold'>23</span>
                        <p className='w-20'>Dec</p>
                    </div>
                    <img className='rounded-xl lg:h-56 h-42 w-full mb-4' src="../images/blog/2.jpg" alt="" />
                    <p className='text-orange-600 cursor-pointer md:text-left text-center'>Branding</p>
                    <h6 className='py-2 text-lg hover:text-orange-600 cursor-pointer font-semibold md:text-left text-center'>How to be appreciated for your hard work as a developer</h6>
                </div>

                <div className='relative'>
                    <div className='absolute right-5 top-4 py-1 rounded-xl bg-green-600 text-center'>
                        <span className='text-2xl font-semibold'>23</span>
                        <p className='w-20'>Dec</p>
                    </div>
                    <img className='rounded-xl lg:h-56 h-42 w-full mb-4' src="../images/blog/3.jpg" alt="" />
                    <p className='text-orange-600 cursor-pointer md:text-left text-center'>Social Media</p>
                    <h6 className='py-2 text-lg hover:text-orange-600 cursor-pointer font-semibold md:text-left text-center'>How designers and developers can collaborate better</h6>
                </div>
            </div>
        </div>
    )
}

export default Blog