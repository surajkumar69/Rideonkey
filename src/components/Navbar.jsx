import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar({ Logo }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-950/95 shadow-xl border-b border-gray-800' : 'bg-gray-950/80 backdrop-blur-md border-b border-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img src={Logo} alt="RK Travels Logo" className="h-14 w-auto object-contain rounded" />
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="text-gray-300 hover:text-primary-orange font-medium transition-colors duration-300 relative group text-sm lg:text-base py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="tel:+916301272127"
              className="bg-primary-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm hover:scale-105 shadow-md shadow-orange-500/10 flex items-center gap-1.5"
            >
              <span>📞</span> Call +91 6301272127
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-screen opacity-100 border-t border-gray-900' : 'max-h-0 opacity-0'
      } overflow-hidden bg-gray-950`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className="block text-gray-300 hover:text-primary-orange font-medium py-2 transition-colors border-b border-gray-900/50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+916301272127"
            className="block w-full bg-primary-orange hover:bg-orange-600 text-white text-center py-3 rounded-full font-semibold transition-all duration-300 text-sm"
          >
            📞 Call +91 6301272127
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
