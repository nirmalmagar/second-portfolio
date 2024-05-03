import React, { useEffect, useState } from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-scroll';



const Home = () => {
  const [displayNavbar, setDisplayNavbar] = useState(false);  //to display navbar state

  // to display navbar bg color while scrolling
  const [displayBg, setDisplayBg] = useState(true);

  const ListenScroll = () => {
    let height = 100;
    let heightValue = document.body.scrollTop || document.documentElement.scrollTop;

    if (height > heightValue) {
      setDisplayBg(true);
    }
    else {
      setDisplayBg(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", ListenScroll);
    return () => window.removeEventListener("scroll", ListenScroll);
  }, []);

  return (
    <>
      <div className={displayBg ? `xxl:px-52 xl:px-[10%] px-[6%] llgg:bg-transparent bg-black py-5 font-semibold text-base h-20 fixed
       text-white w-full justify-between flex z-10` : `xxl:px-52 bg-gray-900 duration-500 xl:px-[10%] px-[6%] py-5 font-semibold text-base h-20 fixed
       text-white w-full justify-between flex z-10`}>
        <img className='w-42 h-9' src="../images/dizme.png" alt="" />
        <HiOutlineMenu onClick={() => setDisplayNavbar(!displayNavbar)} className='llgg:hidden absolute right-20 h-8 -z-10 cursor-pointer w-8 flex-end' />

        <div className={displayNavbar ? `mt-2 llgg:ml-0 lgg:ml-[60%] sm:ml-[40%] xs:ml-[1%]` : `ml-[99%] llgg:ml-0 mt-2 `}>
          <ul className='llgg:flex llgg:flex-end llgg:mt-0 bg-black pl-5 llgg:pr-0 pr-40 w-full z-10 llgg:bg-transparent block
                          -mt-2'>
            <div onClick={() => setDisplayNavbar(!displayNavbar)} className='llgg:hidden block'>
              <button className='flex'>
                <h1 className='mr-10 py-2'>Close</h1> <FaArrowLeftLong className='mt-3' />
              </button>
            </div>
            <li className='mr-12 cursor-pointer llgg:w-auto w-screen llgg:py-0 py-2'><Link activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >Home</Link></li>
            <li className='mr-12 cursor-pointer llgg:w-auto w-screen llgg:py-0 py-2'><Link activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
            >About</Link></li>
            <li className='mr-12 cursor-pointer llgg:w-auto w-screen llgg:py-0 py-2'><Link activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >Portfolio</Link></li>
            <li className='mr-12 cursor-pointer llgg:w-auto w-screen llgg:py-0 py-2'><Link activeClass="active"
              to='service'
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >Service</Link></li>
            <li className='mr-12 cursor-pointer llgg:w-auto w-screen llgg:py-0 py-2'><Link activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-90}
              duration={600}
            >Blog</Link></li>
            <li className='mr-12 cursor-pointer llgg:w-auto w-screen llgg:py-0 py-2'><Link activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={600}
            >Contact</Link></li>
            <li className='pb-5'>
              <button className='bg-orange-600 px-5 py-2.5 llgg:-mt-2 rounded-3xl mt-5'>
                <a href="../images/avatar.jpg" download >Downloade CV</a>
              </button>
            </li>
          </ul>
        </div>

      </div>
      <div className='lgg:bg-cover bg-center lgg:h-screen h-[145vh]' id='home' style={{ backgroundImage: `url(${"../images/homeBgImg.jpg"})` }}>
        <div className='xxl:px-[15%] xl:px-[10%] px-[6%] overflow-x-hidden pb-20 ' >

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