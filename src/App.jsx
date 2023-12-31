import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
import CallToAction from './components/CallToAction';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Services from './components/Services';


// ..
AOS.init({
  offset: 150,
  duration: 800
});

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Services />
      {/* portfolio */}
      <Pricing />
      <Featured />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
