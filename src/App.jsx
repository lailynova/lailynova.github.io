import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import About from "./sections/About";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import AOS from "aos";
import "aos/dist/aos.css";  

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,       
      offset: 100,      
    });
  }, []);

  return (
    <>
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
