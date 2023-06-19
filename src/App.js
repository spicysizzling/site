import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Ourwork from './Pages/Ourwork';
import Header from './components/Header';
import NavProvider from "./context/NavContext";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" font-serif " >
      <NavProvider>
        <Header />
        <Home />
        <About />
        <Ourwork />
        <Contact />
      </NavProvider>
    </div>
  );
}

export default App;
