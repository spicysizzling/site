import React from 'react'

function Home() {
    return (
        <div className=' flex justify-between w-full  ' data-aos="fade-up" data-aos-delay="200">
            <div className='  w-full ml-24 my-48'>
                <h1 className='font-bold text-5xl text-greenColor text-left' data-aos="fade-right">Get The Best Catering Service with us</h1>
            </div>
            <div className='py-12 p-0 '>
                <img src='/SpicySizzling_Catering_logo.png' alt='failled loard' data-aos="fade-left" className=' w-[80%]  animate-[bounce_8s_infinite_alternate-reverse]' />
            </div>
        </div>
    )
}

export default Home


