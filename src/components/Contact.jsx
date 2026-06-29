function Contact() {
  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      value: '7828122541',
      action: 'tel:7828122541',
      buttonText: 'Call Now',
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'saumitrachaubey61@gmail.com',
      action: 'mailto:saumitrachaubey61@gmail.com',
      buttonText: 'Email Us',
    },
    {
      icon: '📍',
      title: 'Address',
      value: 'Migsun Twinz ETA-2, Greater Noida, 201310',
      action: 'https://maps.google.com/?q=Migsun+Twinz+ETA-2,+Greater+Noida,+201310',
      buttonText: 'Google Maps',
      target: '_blank',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-primary-orange mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.value}</p>
              <a
                href={item.action}
                target={item.target || '_self'}
                className="inline-block bg-primary-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
              >
                {item.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/917828122541"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
          >
            <span className="text-2xl">💬</span>
            WhatsApp
          </a>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.123456789!2d77.5!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rideonkey Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
