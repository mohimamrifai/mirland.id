import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import loadable from '@loadable/component'

import './App.css'

const CallToAction = loadable(() => import('./components/CallToAction'))
const Hero = loadable(() => import('./components/Hero'))
const About = loadable(() => import('./components/About'))
const FAQ = loadable(() => import('./components/FAQ'))
const Featured = loadable(() => import('./components/Featured'))
const Footer = loadable(() => import('./components/Footer'))
const Navbar = loadable(() => import('./components/Navbar'))
const Pricing = loadable(() => import('./components/Pricing'))
const Services = loadable(() => import('./components/Services'))

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
