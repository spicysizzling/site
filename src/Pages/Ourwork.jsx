import React from 'react'
import { useNav } from '../hooks/useNav';
import { Trans } from 'react-i18next';

const img = [
    {
        id: 1,
        image: "/9.jpg"
    },
    {
        id: 2,
        image: "/5.jpg"
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
    },
    {
        id: 7,
        image: "/1.jpg"
    },
    {
        id: 8,
        image: "/2.jpg"
    },
    {
        id: 9,
        image: "/3.jpg"
    }




]
function Ourwork({ handleOpenModal }) {
    const handleClick = (index, e) => {

        function isIT(ig) {
            return ig.id === index;
        }

        const element = img.find(isIT)
        handleOpenModal(element.image)
    };


    const workRef = useNav('ourwork ')

    return (
        <section id="ourworkSection" ref={workRef}>
            <div className=' flex flex-col space-y-10 p-20'   >
                <div className='' data-aos="fade-up" data-aos-delay="200">
                    <h1 className=' lg:space-x-4 space-x-3 justify-center text-2xl lg:text-4xl font-semibold flex'>
                        <div className=' mt-4 border h-[2px]  w-16 border-orangeColor'></div>
                        <span>
                            PORTFOLIO
                        </span>
                        <div className=' mt-4 border h-[2px] w-16 border-orangeColor'></div>
                    </h1>
                    <p className='text-center mt-5 text-gray-700'>
                        <Trans i18nKey="description.part4">
                            Checkout our Work
                        </Trans>
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                    <div className='lg:grid lg:grid-cols-3  flex lg:block flex-col space-y-12 lg:space-y-0 gap-4 lg:p-10 lg:px-20'>
                        {
                            img.map((item) => {
                                return (
                                    <div key={item.id} className=' hover:opacity-50 cursor-pointer' onClick={(e) => handleClick(item.id, e)} >
                                        {/* <a href={item.image} data-gall="myGallery" className='venobox' > */}
                                        <img src={item.image} alt='' className='  w-96 h-[50vh] rounded-lg' />
                                        {/* </a> */}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourwork