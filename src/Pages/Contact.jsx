import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5'
import { BiMailSend } from 'react-icons/bi'
function Contact() {
    return (
        <div className='h-screen flex flex-col space-y-10  p-28' data-aos="fade-up" data-aos-delay="500">

            <div className=''>
                <h1 className=' space-x-4 justify-center  text-4xl font-semibold flex'>
                    <div className=' mt-5 border h-[2px]  w-16 border-orangeColor'></div>
                    <span>
                        CONTACT US
                    </span>
                    <div className=' mt-5 border h-[2px] w-16 border-orangeColor'></div>
                </h1>
            </div>
            <div className='flex justify-between'>
                <div className=''>
                    <h1 className='text-4xl mb-4 font-semibold'> SpicySizzling Catering</h1>
                    <p className='text-md  text-gray-500  leading-loose w-96 font-light mb-4'>
                        Reach out to us on the following social media platforms or using the Whatsapp link that we also have here
                    </p>
                    <div className='flex  space-x-5'>
                        <a href="https://www.facebook.com/Spicysizzling/" target='_blank' rel='noreferrer' className='border p-3 rounded-full border-orangeColor text-orangeColor hover:bg-orangeColor hover:text-white text-xl'> <FaFacebookF /></a>
                        <a href="https://instagram.com/spicysizzlingcatering" target='_blank' rel='noreferrer' className='border p-3 rounded-full border-orangeColor text-orangeColor hover:bg-orangeColor hover:text-white text-xl'> <BsInstagram /></a>
                    </div>
                </div>
                <div className='flex flex-col space-y-10'>
                    <div className='flex space-x-3'>
                        <IoLocationOutline className='text-4xl text-orangeColor' />
                        <p>
                            1 Oyekunle Street, Off Ikorodu Club Avenue, Ikorodu, Lagos
                        </p>
                    </div>

                    <div className='flex space-x-3 text-greenColor'>
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