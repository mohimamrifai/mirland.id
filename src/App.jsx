import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useReveal from './hooks/useReveal';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Featured from './components/Featured';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useEffect(() => {
    AOS.init({ offset: 120, duration: 700, once: true, disable: 'mobile' });
  }, []);

  // Custom IntersectionObserver-based reveal for class="reveal" elements
  useReveal();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-ink-900 antialiased">
      <Navbar />
      <main id="main">
        <Hero />
        <LogoMarquee />
        <Services />
        <About />
        <Process />
        <Pricing />
        <Featured />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
