import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Fleet from './components/Fleet'
import WhyChooseUs from './components/WhyChooseUs'
import BookingProcess from './components/BookingProcess'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar Logo="/rklogo.jpeg" />
      <Hero />
      <About Logo="/rklogo.jpeg" />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <BookingProcess />
      <Contact />
      <Footer Logo="/rklogo.jpeg" />
    </div>
  )
}

export default App
