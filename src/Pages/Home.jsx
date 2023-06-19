import React from 'react'
import { useNav } from '../hooks/useNav'
function Home() {
    const homeRef = useNav("home")
    return (
        <div className=' flex justify-between w-full mb-0  '  ref={homeRef} id="homeSection"  >
            <div className='  w-full ml-24 my-48' data-aos="fade-up" data-aos-delay="300">
                <h1 className='font-bold text-5xl text-greenColor text-left' >Get The Best Catering Service with us</h1>
            </div>
            <div className='py-12 p-0 '>
                <img src='/SpicySizzling_Catering_logo.png' alt='failled loard' data-aos="fade-left" data-aos-delay="500" className=' w-[80%]  animate-[bounce_8s_infinite_alternate-reverse]' />
            </div>
        </div>
    )
}

export default Home


