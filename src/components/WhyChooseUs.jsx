function WhyChooseUs() {
  const features = [
    {
      icon: '🚗',
      title: 'Self Drive Cars',
      description: 'Enjoy complete freedom and privacy with our self-drive rental options.',
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Competitive rates with no hidden charges. Get the best value for your money.',
    },
    {
      icon: '🧼',
      title: 'Sanitized Vehicles',
      description: 'Every vehicle is thoroughly cleaned and sanitized before each rental.',
    },
    {
      icon: '📞',
      title: '24×7 Customer Support',
      description: 'Round-the-clock assistance to ensure a smooth rental experience.',
    },
    {
      icon: '📱',
      title: 'Easy Booking',
      description: 'Simple and quick booking process. Rent your car in just a few clicks.',
    },
    {
      icon: '🔧',
      title: 'Well Maintained Cars',
      description: 'Regular servicing and maintenance ensure reliable and safe vehicles.',
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-primary-orange mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
