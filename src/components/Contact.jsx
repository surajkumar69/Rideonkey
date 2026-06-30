function Contact() {
  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 6301272127',
      action: 'tel:+916301272127',
      buttonText: 'Call Now',
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'karthiktravels@gmail.com',
      action: 'mailto:karthiktravels@gmail.com',
      buttonText: 'Email Us',
    },
    {
      icon: '📍',
      title: 'Address',
      value: 'Etcherla, Andhra Pradesh, India',
      action: 'https://maps.google.com/?q=Etcherla,+Andhra+Pradesh',
      buttonText: 'Google Maps',
      target: '_blank',
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Get in touch with us for bookings, inquiries, and custom packages. We are available 24/7.
          </p>
          <div className="w-20 h-1 bg-primary-orange mx-auto rounded mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-6 break-all">{item.value}</p>
              </div>
              <div>
                <a
                  href={item.action}
                  target={item.target || '_self'}
                  className="inline-block bg-primary-orange hover:bg-orange-600 text-white px-8 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/916301272127?text=Hello%20RK%20Travels%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20car."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20 flex items-center gap-2"
          >
            <span className="text-2xl">💬</span>
            Chat on WhatsApp
          </a>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15181.163352936746!2d83.80930784458005!3d18.283182182882894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c22b10a2bb12d%3A0xc3466ee7c10b42d7!2sEtcherla%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RK Travels Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
