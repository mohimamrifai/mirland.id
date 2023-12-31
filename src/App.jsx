import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import loadable from '@loadable/component'

import './App.css'
import About from './components/About'
import FAQ from './components/FAQ'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Services from './components/Services';


const CallToAction = loadable(() => import('./components/CallToAction'))
const Hero = loadable(() => import('./components/Hero'))
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
