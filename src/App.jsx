import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
import About from './components/About'
import CallToAction from './components/CallToAction'
import FAQ from './components/FAQ'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'// You can also use <link> for styles
// ..
AOS.init({
  offset: 150,
  duration: 800
});

function App() {

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Pricing />
      <Featured />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
