import React from 'react'
import { useNav } from '../hooks/useNav'
import { Trans} from 'react-i18next'
function Home() {
    const homeRef = useNav("home")
    
    return (
        <div className=' flex justify-between w-full mb-0 py-12  ' ref={homeRef} id="homeSection"  >
            <div className='  w-full ml-24 mt-32' data-aos="fade-up" data-aos-delay="300">
                <h1 className='font-bold text-5xl text-greenColor text-left' >
                    <Trans i18nKey="description.part1">
                    Get The Best Catering Service with us
                    </Trans>
                </h1>
            </div>
            <div className=' p-0 '>
                <img src='/SpicySizzling_Catering_logo.png' alt='failled loard' data-aos="fade-left" data-aos-delay="500" className=' w-[80%] ml-16 mr-0 animate-[bounce_8s_infinite_alternate-reverse]' />
            </div>
        </div>
    )
}

export default Home


