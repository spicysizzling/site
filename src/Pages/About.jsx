import React from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNav } from '../hooks/useNav';

function About() {
    const aboutRef = useNav('about')
    return (
        <div className='flex flex-col space-y-10  py-28 mt-0' id='aboutSection' ref={aboutRef}>

            <div  >
                <div className='flex space-x-5 justify-center'>
                    <h1 className=' space-x-4 justify-center  text-4xl font-semibold flex'  data-aos="fade-up" data-aos-delay="200" >
                        <div className=' mt-5 border h-[2px]  w-16 border-orangeColor'></div>
                        <span>
                            ABOUT US
                        </span>
                        <div className=' mt-5 border h-[2px] w-16 border-orangeColor'></div>
                    </h1>
                </div>
                <div className='flex justify-between space-x-12 text-justify text-md font-light text-gray-700  mx-32 m-10  transition-all duration-100  '>
                    <div  data-aos="fade-up" data-aos-delay="500">
                        <p className='leading-loose  ' >
                            At Spicysizzling Catering, we offer top quality catering service be it at weddings, anniversaries, graduation ceremonies, seminars, conferences, workshops, etc. We create strong bonds with our exquisite meals at your events. We'll turn the sweet moments you're celebrating at your event to fond memories with our show-stopping cakes and meals. Cutting of cake is the focal point of every event and it makes every event special.
                        </p>
                        <div className='leading-loose '>
                            Contact us for your :
                            <ul >
                                <li className='flex'>
                                    <BsCheck2All className='mx-2 mt-1  text-xl text-orangeColor' />
                                    Pasteries
                                </li>
                                <li className='flex'>
                                    <BsCheck2All className='mx-2 mt-1 text-xl text-orangeColor' />
                                    Small chops (finger  foods )
                                </li>
                                <li className='flex'>
                                    <BsCheck2All className='mx-2 mt-1 text-xl text-orangeColor' />
                                    Cakes
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div  data-aos="fade-up" data-aos-delay="500">
                        <p className='leading-loose '>
                            Also, cakes make your guests happy, after all, when organising an event, your priority is to make sure that your guests leave happily and with unforgettable memories. All these and more are what we make happen. So, for your pastries, small chops (finger foods), cakes, cupcakes, mini cakes of different shapes, contact us and let's be part of your event.
                        </p>
                        <div>
                            <ul className='my-5'>
                                <li className='flex'>
                                    <BsCheck2All className='mx-2  text-xl text-orangeColor' />
                                    Cupcakes
                                </li>
                            </ul>

                            <button className='border-2 border-orangeColor text-orangeColor   p-2  px-6  rounded-full'>
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-slate-100 p-20'>

                <div  data-aos="fade-up" data-aos-delay="200"  >
                    <h1 className=' space-x-4 justify-center  text-4xl font-semibold flex'>
                        <div className=' mt-5 border h-[2px]  w-16 border-orangeColor'></div>
                        <span>
                            TESTIMONIALS
                        </span>
                        <div className=' mt-5 border h-[2px] w-16 border-orangeColor'></div>
                    </h1>
                    <p className='text-center mt-5 text-gray-700'>Happy customers feedback on social medial platform of our services</p>
                </div>
                <div  data-aos="fade-up" data-aos-delay="400">
                    <OwlCarousel items={1}
                        className=""
                        loop autoPlay={true}
                        margin={8} >

                        <div className=" p-20">
                            <div className=" bg-white p-16 rounded shadow-lg  ">
                                <h3 className='text-xl font-semibold mb-4'>Olumuyiwa Ojo</h3>
                                <p className='italic leading-loose text-md  flex '>
                                    <FaQuoteLeft className='text-6xl mx-2 text-slate-300' />  Many thanks for coming to prepare the amazing job and delicious cakes and meatpies for our invited
                                    guests during the presentation of our movie at Brasil Consulate in Lagos. We called you 36hours to
                                    inform you of what we need, and then your appeared with your staff, as if you have been briefed some
                                    months earlier.
                                    <FaQuoteRight className='text-6xl mx-2 text-slate-300' />
                                </p>
                            </div>
                        </div>


                        <div className="p-20">
                            <div className="bg-white p-20 rounded shadow-lg">
                                <h3 className='text-xl font-semibold mb-4' >Mrs Owoyemi Tokunbo</h3>

                                <p className='italic leading-loose text-md  flex '>
                                    <FaQuoteLeft className='text-6xl mx-2 text-slate-300' />
                                    The cake is so tasty and fantastic!, i must say, the flavor is so out of this world,
                                    thanks u very much ma. I love the fact that different flavors were mixed for the cupcakes, you're the
                                    best.
                                    <FaQuoteRight className='text-6xl mx-2 text-slate-300' />
                                </p>
                            </div>
                        </div>

                        <div className="p-20">
                            <div className="bg-white p-20 rounded shadow-lg">
                                <h3 className='text-xl font-semibold mb-4'>Faith Ogbonna</h3>
                                <p className='italic leading-loose text-smd  flex  '>
                                    <FaQuoteLeft className=' text-6xl mx-2 text-slate-300' />
                                    The cake you made was so nice and taste really good, my children loved it, i will order for more soon,
                                    thank you very much ma.<FaQuoteRight className='text-xl text-slate-300' />
                                </p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default About