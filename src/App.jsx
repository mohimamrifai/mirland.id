import './App.css'
import About from './components/About'
import CallToAction from './components/CallToAction'
import FAQ from './components/FAQ'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'

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
