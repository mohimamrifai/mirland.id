import React, { lazy } from 'react';
import './App.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = lazy(() => import('./components/Hero'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const About = lazy(() => import('./components/About'));
const FAQ = lazy(() => import('./components/FAQ'));
const Featured = lazy(() => import('./components/Featured'));
const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));
const Pricing = lazy(() => import('./components/Pricing'));
const Services = lazy(() => import('./components/Services'));

function App() {

  AOS.init({
    offset: 150,
    duration: 800
  });

  return (
    <>
        <Navbar />
        {/* <Hero />
        <About />
        <Services />
        <Pricing />
        <Featured />
        <CallToAction />
        <FAQ />
        <Footer /> */}
    </>
  )
}

export default App
