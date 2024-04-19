import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollUpBtn = () => {
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    // scroll up button
    const ScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const ListenScroll = () => {
        let height = 100;
        let heightValue = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(heightValue);
        if (height > heightValue) {
            setShowScrollBtn(false);
        }
        else {
            setShowScrollBtn(true);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", ListenScroll);
        return () => window.removeEventListener("scroll", ListenScroll);
    }, [])
    return (
        <>{
            showScrollBtn ? (
                <div className='fixed top-[90%] lg:left-[96%] md:left-[94%] sm:left-[90%] left-[86%]' >
                    <button onClick={ScrollTop} className='border-2 relative rounded-full animate-bounce w-10 h-10 bg-black
            hover:bg-blue-900 duration-300 text-white'><FaArrowUp className='absolute top-2.5 left-2.5' />
                    </button>
                </div >) : null}
        </>
    )
}

export default ScrollUpBtn