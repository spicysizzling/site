import React, { useEffect, useState } from "react";
import { IoClose } from 'react-icons/io5'
import AOS from "aos";
import "aos/dist/aos.css";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Ourwork from './Pages/Ourwork';
import Header from './components/Header';
import NavProvider from "./context/NavContext";
import Footer from "./components/Footer";
import { useTranslation, Trans } from 'react-i18next';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    console.log(image)
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  return (
    <div className=" font-serif "   >
      {isModalOpen &&
        <div className='h-screen bg-gray-800/80  fixed z-50 w-full' id='modal'>
          <div className='w-full flex justify-end'>
            <IoClose
              className='text-5xl relative top-2 mx-5'
              onClick={handleCloseModal}
            />
          </div>
          <div className='flex justify-center items-center'>
            <img src={selectedImage} alt='' className='w-[50%] h-[90vh]' />
          </div>
        </div>
      }
<NavProvider  >
          <Header />
          <Home />
          <About />
          <Ourwork handleOpenModal={handleOpenModal} />
          <Contact />
          <Footer />
        </NavProvider>
    </div>
  );
}

export default App;
