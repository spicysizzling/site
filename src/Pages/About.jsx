import React from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNav } from '../hooks/useNav';
import { Trans } from 'react-i18next';

function About() {
    const aboutRef = useNav('about')
    return (
        <div className='flex flex-col space-y-10  py-28 mt-0' id='aboutSection' ref={aboutRef}>

            <div  >
                <div className='flex space-x-5 justify-center'>
                    <h1 className=' space-x-4 justify-center  text-4xl font-semibold flex' data-aos="fade-up" data-aos-delay="200" >
                        <div className=' mt-5 border h-[2px]  w-16 border-orangeColor'></div>
                        <span>
                            <Trans i18nKey="description.title2" >
                                About us
                            </Trans>
                        </span>
                        <div className=' mt-5 border h-[2px] w-16 border-orangeColor'></div>
                    </h1>
                </div>
                <div className='flex justify-between  space-x-12 text-justify text-md font-light text-gray-700  mx-32 m-10  transition-all duration-100  '>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <p className='leading-loose   ' >
                            <Trans i18nKey="description.part2First">
                                Spicysizzling Cakes turns the sweet moments at your events such as weddings, graduations, seminars, anniversaries, etc to fond memories with our exquisite and luscious cakes.
                            </Trans>
                        </p>
                        <div className='leading-loose mt-10 '>
                            <Trans i18nKey="description.part2ListTitle">
                                Contact us for your :
                            </Trans>
                            <ul >
                                <li className='flex'>
                                    <BsCheck2All className='mx-2 mt-1  text-xl text-orangeColor' />
                                    <Trans i18nKey="description.part2List1">
                                        Pasteries
                                    </Trans>
                                </li>
                                <li className='flex'>
                                    <BsCheck2All className='mx-2 mt-1 text-xl text-orangeColor' />
                                    <Trans i18nKey="description.part2List2">
                                        Cakes
                                    </Trans>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <p className='leading-loose w-[40vw]'>
                            <Trans i18nKey="description.part2Second">
                                Also, cakes make your guests happy, after all, when organising an event, your priority is to make sure that your guests leave happily and with unforgettable memories. All these and more are what we make happen. So, for your pastries, cakes, cupcakes, mini cakes of different shapes, contact us and let's be part of your event.
                            </Trans>
                        </p>
                        <div>
                            <ul className='my-5'>
                                <li className='flex'>
                                    <BsCheck2All className='mx-2  text-xl text-orangeColor' />
                                    <Trans i18nKey="description.part2List3">
                                        Cupcakes
                                    </Trans>
                                </li>
                            </ul>

                            <button className='border-2 border-orangeColor text-orangeColor   p-2  px-6  rounded-full'>
                                <Trans i18nKey="description.part2Contact">
                                    Contact us
                                </Trans>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-slate-100 p-20'>

                <div data-aos="fade-up" data-aos-delay="200"  >
                    <h1 className=' space-x-4 justify-center  text-4xl font-semibold flex'>
                        <div className=' mt-5 border h-[2px]  w-16 border-orangeColor'></div>
                        <span>
                            <Trans i18nKey="description.title3">
                                TESTIMONIALS
                            </Trans>
                        </span>
                        <div className=' mt-5 border h-[2px] w-16 border-orangeColor'></div>
                    </h1>
                    <p className='text-center mt-5 text-gray-700'>
                        <Trans i18nKey="description.subTitle3">
                            Happy customers feedback on social medial platform of our services
                        </Trans>
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                    <OwlCarousel items={1}
                        className=""
                        loop autoPlay={true}
                        margin={8} >

                        <div className=" p-20">
                            <div className=" bg-white p-16 rounded shadow-lg  ">
                                <h3 className='text-xl font-semibold mb-4'>Olumuyiwa Ojo</h3>
                                <p className='italic leading-loose text-md  flex '>
                                    <FaQuoteLeft className='text-6xl mx-2 text-slate-300' />
                                    <Trans i18nKey="description.part3Text1">
                                        Many thanks for coming to prepare the amazing job and delicious cakes and meatpies for our invitedguests during the presentation of our movie at Brasil Consulate in Lagos. We called you 36hours toinform you of what we need, and then your appeared with your staff, as if you have been briefed some months earlier.
                                    </Trans>
                                    <FaQuoteRight className='text-6xl mx-2 text-slate-300' />
                                </p>
                            </div>
                        </div>


                        <div className="p-20">
                            <div className="bg-white p-20 rounded shadow-lg">
                                <h3 className='text-xl font-semibold mb-4' >Mrs Owoyemi Tokunbo</h3>
                                <p className='italic leading-loose text-md  flex '>
                                    <FaQuoteLeft className='text-6xl mx-2 text-slate-300' />
                                    <Trans i18nKey="description.part3Text2">
                                        The cake is so tasty and fantastic!, i must say, the flavor is so out of this world,thanks u very much ma. I love the fact that different flavors were mixed for the cupcakes, you're the best.
                                    </Trans>
                                    <FaQuoteRight className='text-6xl mx-2 text-slate-300' />
                                </p>
                            </div>
                        </div>

                        <div className="p-20">
                            <div className="bg-white p-20 rounded shadow-lg">
                                <h3 className='text-xl font-semibold mb-4'>Faith Ogbonna</h3>
                                <p className='italic leading-loose text-smd  flex  '>
                                    <FaQuoteLeft className=' text-6xl mx-2 text-slate-300' />
                                    <Trans i18nKey="description.part3Text3">
                                        The cake you made was so nice and taste really good, my children loved it, i will order for more soon, thank you very much ma.<FaQuoteRight className='text-xl text-slate-300' />
                                    </Trans>
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