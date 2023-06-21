import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5'
import { BiMailSend } from 'react-icons/bi'
import { useNav } from '../hooks/useNav'
import { Trans } from 'react-i18next'
function Contact() {
    const contactRef = useNav('contact')
    return (
        <div className='lg:h-screen flex flex-col lg:space-y-10  mb-10  lg:p-28' id='contactSection' ref={contactRef} >
            <div className='' data-aos="fade-up" data-aos-delay="200">
                <h1 className=' space-x-4 justify-center text-xl  lg:text-4xl font-semibold flex'>
                    <div className=' mt-5 border h-[2px]  w-16 border-orangeColor'></div>
                    <span>
                        <Trans i18nKey="description.title5">
                            CONTACT US
                        </Trans>
                    </span>
                    <div className=' mt-5 border h-[2px] w-16 border-orangeColor'></div>
                </h1>
            </div>
            <div className='lg:flex justify-between' data-aos="fade-up" data-aos-delay="500">
                <div className=''>
                    <h1 className='lg:text-4xl text-xl  my-4 m-2 font-semibold'> SpicySizzling Catering</h1>
                    <p className='text-md mx-2 text-gray-500  leading-loose w-96 font-light mb-4'>
                        <Trans i18nKey="description.part5Text1">
                            Reach out to us on the following social media platforms or using the Whatsapp link that we also have here
                        </Trans>
                    </p>
                    <div className='flex  space-x-5 my-2 mx-2'>
                        <a href="https://www.facebook.com/Spicysizzling/" target='_blank' rel='noreferrer' className='border lg:p-3 rounded-full border-orangeColor text-orangeColor hover:bg-orangeColor hover:text-white lg:lg:text-xl p-3'> <FaFacebookF /></a>
                        <a href="https://www.instagram.com/spicysizzlingcakes" target='_blank' rel='noreferrer' className='border lg:p-3 rounded-full border-orangeColor text-orangeColor hover:bg-orangeColor hover:text-white text-xl p-3'> <BsInstagram /></a>
                    </div>
                </div>
                <div className='flex flex-col lg:space-y-10 mx-2' data-aos="fade-up" data-aos-delay="500">
                    <div className='flex space-x-3'>
                        <IoLocationOutline className='lg:text-4xl text-xl text-orangeColor' />
                        <p>
                            Arconville , Abomey-Calavi, Benin
                        </p>
                    </div>
                    <div className='flex space-x-3 text-greenColor' >
                        <BiMailSend className='text-4xl text-orangeColor' />
                        <a href="mailto:">spicysizzling@gmail.com</a>
                    </div>

                    <div className='flex space-x-3 text-greenColor'>
                        <IoCallOutline className='text-4xl text-orangeColor' />
                        <a href="https://api.whatsapp.com/send?phone=2348096886785&text=Reaching%20you%20from%20your%20website" target="_blank" rel='noreferrer'>whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact