import React, { useEffect, useRef } from 'react'

const img = [
    {
        id: 1,
        image: "/AnniversaryCake.jpg"
    },
    {
        id: 2,
        image: "/cupcakes.jpg"
    },
    {
        id: 3,
        image: "/GraduationCake.jpg"
    },
    {
        id: 4,
        image: "/4.jpg"
    },
    {
        id: 5,
        image: "/7.jpg"
    },
    {
        id: 6,
        image: "/6.jpg"
    }
]
function Ourwork() {

    return (
        <div className=' flex flex-col space-y-10  p-20' data-aos="fade-up" data-aos-delay="500">

            <div className=''>
                <h1 className=' space-x-4 justify-center  text-4xl font-semibold flex'>
                    <div className=' mt-5 border h-[2px]  w-16 border-orangeColor'></div>
                    <span>
                        PORTFOLIO
                    </span>
                    <div className=' mt-5 border h-[2px] w-16 border-orangeColor'></div>
                </h1>
                <p className='text-center mt-5 text-gray-700'>Checkout our Work</p>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        img.map((item) => {
                            return (
                                <div key={item.id} className=' hover:opacity-1 cursor-pointer' >
                                    <a href={item.image} data-gall="myGallery" className='venobox' >
                                        <img src={item.image} alt='' className='w-96 h-[60vh]' />
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Ourwork