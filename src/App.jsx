import React from 'react';
import './App.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import About from './components/About';
import FAQ from './components/FAQ';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Services from './components/Services';


function App() {

  AOS.init({
    offset: 150,
    duration: 800
  });

  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Featured />
        <CallToAction />
        <FAQ />
        <Footer />
    </>
  )
}

export default App
