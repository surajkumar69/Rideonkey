function Footer({ Logo }) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: '📘', href: '#' },
    { icon: '📸', href: '#' },
    { icon: '🐦', href: '#' },
    { icon: '▶️', href: '#' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <img src={Logo} alt="RK Travels Logo" className="h-16 w-auto mb-4 rounded" />
            <p className="text-gray-400 text-sm text-center lg:text-left max-w-xs">
              Premium self-drive car rental service in Etcherla. Enjoy freedom, privacy, and safety on every journey.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-bold mb-4 text-primary-orange">Quick Links</h3>
            <ul className="space-y-2 text-center lg:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-gray-400 hover:text-primary-orange transition-colors duration-300 hover:pl-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-bold mb-4 text-primary-orange">Contact Details</h3>
            <div className="space-y-3 text-gray-400 text-sm text-center lg:text-left">
              <p>
                <strong className="text-white block lg:inline">Phone: </strong> 
                <a href="tel:+916301272127" className="hover:text-primary-orange transition-colors font-medium">
                  +91 6301272127
                </a>
              </p>
              <p>
                <strong className="text-white block lg:inline">Email: </strong> 
                <a href="mailto:karthiktravels@gmail.com" className="hover:text-primary-orange transition-colors font-medium break-all">
                  karthiktravels@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white block">Address:</strong> 
                Etcherla, Srikakulam District, <br className="hidden lg:inline" />
                Andhra Pradesh, India
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-bold mb-4 text-primary-orange">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-2xl text-gray-400 hover:text-primary-orange transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2026 RK Travels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
