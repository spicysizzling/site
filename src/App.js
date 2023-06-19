import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Ourwork from './Pages/Ourwork';
import Header from './components/Header';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" font-serif	 ">
      <Header />
      <Home/>
      <About/>
      <Ourwork/>
      <Contact/>
    </div>
  );
}

export default App;
