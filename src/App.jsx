import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Fleet from './components/Fleet'
import WhyChooseUs from './components/WhyChooseUs'
import BookingProcess from './components/BookingProcess'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar Logo="/Ridelogo.jpeg" />
      <Hero />
      <About Logo="/Ridelogo.jpeg" />
      <Fleet />
      <WhyChooseUs />
      <BookingProcess />
      <Contact Logo="/Ridelogo.jpeg" />
      <Footer Logo="/Ridelogo.jpeg" />
    </div>
  )
}

export default App
