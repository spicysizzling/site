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
import Nav from "./components/nav";

function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false)
  const [currentItem, setItem] = useState(null)
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  const handleOpenNav = () => {
    setNavOpen(true)
  }
  const handleCloseNav = (item) => {
    setItem(item)
    setNavOpen(false);
  }

  return (
    <div className=" font-serif "   >
      {isNavOpen &&
        <Nav handleCloseNav={handleCloseNav} currentItem={currentItem} />
      }
      {isModalOpen &&
        <div className='h-screen bg-gray-800/80  fixed z-50 w-full' id='modal'>
          <div className='w-full flex justify-end'>
            <IoClose
              className='text-5xl  my-5 relative top-2 mx-5'
              onClick={handleCloseModal}
            />
          </div>
          <div className='flex justify-center items-center'>
            <img src={selectedImage} alt='' className='lg:w-[60%]  w-[80%] h-[60vh] lg:h-[70vh] rounded' />
          </div>
        </div>
      }
      <NavProvider  >
        <Header handleOpenNav={handleOpenNav} />
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
