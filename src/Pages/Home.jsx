import React from 'react'
import { useNav } from '../hooks/useNav'
import { Trans } from 'react-i18next'
function Home() {
    const homeRef = useNav("home")

    return (
        <div className=' lg:flex justify-between w-full mb-0 py-12  ' ref={homeRef} id="homeSection"  >
            <div className='  w-full lg:ml-24 lg:mt-32' data-aos="fade-up" data-aos-delay="300">
                <h1 className='font-bold xl:text-5xl lg:text-3xl text-3xl text-center text-greenColor lg:text-left' >
                    <Trans i18nKey="description.part1">
                        Get The Best Catering Service with us
                    </Trans>
                </h1>
            </div>
            <div className=' p-0 '>
                <img src='/SpicySizzling_Catering_logo.png' alt='failled loard' data-aos="fade-left" data-aos-delay="500" className=' w-[80%] ml-16 mr-0 lg:animate-[bounce_8s_infinite_alternate-reverse]' />
            </div>
        </div>
    )
}

export default Home


