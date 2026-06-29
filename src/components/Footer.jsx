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
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="text-center lg:text-left">
            <img src={Logo} alt="Rideonkey Logo" className="h-16 w-auto mx-auto lg:mx-0 mb-4" />
            <p className="text-gray-400 text-sm">
              Premium self-drive car rental service for all your travel needs.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-primary-orange">Quick Links</h3>
            <ul className="space-y-2">
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

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-primary-orange">Contact Details</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p><strong className="text-white">Phone:</strong> 7828122541</p>
              <p><strong className="text-white">Email:</strong> saumitrachaubey61@gmail.com</p>
              <p><strong className="text-white">Address:</strong> Migsun Twinz ETA-2, Greater Noida, 201310</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-primary-orange">Follow Us</h3>
            <div className="flex justify-center gap-4">
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

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2026 Rideonkey. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
