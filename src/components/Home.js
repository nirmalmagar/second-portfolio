import React, { useState } from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-scroll'


const Home = () => {
  const [displayNavbar, setDisplayNavbar] = useState(true);  //to display navbar state
  // const display = () => {   //navbar display button
  //   setDisplayNavbar(true);
  // }
  return (
    <>
      <div className='lgg:bg-cover bg-center lgg:h-screen h-[145vh]' style={{ backgroundImage: `url(${"../images/homeBgImg.jpg"})` }}>
        <div className='xxl:px-[15%] xl:px-[10%] px-[6%] overflow-x-hidden pb-20 ' >
          <div className='flex justify-between py-5 '>
            <img className='w-32 h-9' src="../images/dizme.png" alt="" />

            <HiOutlineMenu onClick={() => setDisplayNavbar(!displayNavbar)} className='absolute duration-300 right-10 text-white llgg:hidden block text-3xl cursor-pointer' />

            <div className={`relative ${displayNavbar ? 'left-60' : 'left-0 duration-300'} leading-10 llgg:left-0 z-10 bg-sky-950 llgg:bg-transparent llgg:px-0 llgg:pb-0 px-10 pb-8 llgg:mr-0 -mr-16 llgg:top-0 top-0`}>
              <ul className='llgg:flex font-semibold text-white'>
                <div className='llgg:hidden block'>
                  <button onClick={() => setDisplayNavbar(true)} className='bg-black -mx-10 pl-9 flex justify-between'>
                    <h1 className='mr-28'>Close</h1> <FaArrowLeftLong className='mt-3.5 mr-6' />
                  </button>
                </div>
                <li className='mr-12 cursor-pointer'><Link activeClass="active"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={600}
                >Home</Link></li>
                <li className='mr-12 cursor-pointer'><Link activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={600}
                >About</Link></li>
                <li className='mr-12 cursor-pointer'><Link activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={600}
                >Portfolio</Link></li>
                <li className='mr-12 cursor-pointer'><Link activeClass="active"
                  to='service'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={600}
                >Service</Link></li>
                <li className='mr-12 cursor-pointer'><Link activeClass="active"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={600}
                >Blog</Link></li>
                <li className='mr-12 cursor-pointer'><Link activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={600}
                >Contact</Link></li>
                <li>
                  <button className='bg-orange-600 px-5 py-0.5 llgg:-mt-2 rounded-3xl mt-5'>
                    <a href="../images/avatar.jpg" download >Downloade CV</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className=' lgg:flex-row lgg:text-start text-center flex-col-reverse absolute top-16 llgg:top-32 flex lg:gap-x-40 lgg:gap-x-20 gap-x-5 mt-32'>
            <div className='text-white pt-10'>
              <span className='text-2xl text-orange-600 font-semibold '>Hello, I'm</span>
              <h1 className='font-semibold md:text-6xl xs:text-5xl text-4xl '>James Smith</h1>
              <p className='text-xl my-6  '>A <span className='text-green-500 '>Creative Designer</span> From <span className='text-blue-500'> New York </span></p>
              <p className='text-md '> I'm creative designer based in New York, and I'm very passionate and dedicated to my work.</p>
              <div className='grid grid-cols-2 w-80 mt-10 lgg:ml-0 sm:ml-[20%]'>
                <div>
                  <button className='font-semibold bg-orange-600 rounded-3xl px-6 py-2 text-lg'>About Me</button>
                </div>
                <div className='flex justify-between mt-3'>
                  <FaFacebookF />
                  <FaLinkedinIn />
                  <FaTwitter />
                  <FaGithub />
                </div>
              </div>
            </div>
            <div className='relative '>
              <img className='lgg:mx-0 lgg:ml-0 mx-auto ml-[13%] w-[70%] h-[95%]' src="../images/avatar.png" alt="" />
              <button className='bg-stone-900 md:block hidden absolute top-0 lgg:left-0 left-32 text-3xl font-bold text-orange-600 px-2 py-1 rounded-lg text-center animate-bounce'>Ai</button>
              <button className='bg-sky-950 md:block hidden absolute top-20 right-36  text-3xl font-bold text-blue-600 px-2 py-1 rounded-lg text-center animate-bounce'>Ps</button>
              <div className='md:block hidden'>
                <div className='bg-white  absolute left-24 lgg:top-72 top-80 animate-bounce  w-11 h-11 rounded-lg flex items-center justify-center'><img className='w-4 h-6  ' src="../images/figmaLogo.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home