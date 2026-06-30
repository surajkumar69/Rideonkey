function Fleet() {
  const cars = [
    {
      name: 'Maruti Baleno',
      type: 'Premium Hatchback',
      image: '/baleno.jpeg',
      transmission: 'Manual / AMT',
      seats: '5 Seats',
      fuel: 'Petrol / CNG',
      features: ['Air Conditioned', 'SmartPlay Infotainment', 'High Fuel Economy', 'ABS & Airbags'],
    },
    {
      name: 'Maruti Fronx',
      type: 'Compact SUV',
      image: '/fronx.jpeg',
      transmission: 'Manual / Automatic',
      seats: '5 Seats',
      fuel: 'Petrol',
      features: ['High Ground Clearance', 'Modern LED Styling', 'Premium Interior', 'Reverse Camera'],
    },
    {
      name: 'Mahindra XUV500',
      type: 'Premium 7-Seater SUV',
      image: '/xuv500.jpeg',
      transmission: 'Manual / Automatic',
      seats: '7 Seats',
      fuel: 'Diesel',
      features: ['Powerful mHawk Engine', '7-Seater Comfort', 'Dual Zone AC', 'Perfect for Offroad & Highways'],
    },
  ]

  const getWhatsAppLink = (carName) => {
    const text = `Hello RK Travels, I would like to inquire about booking the ${carName} for self-drive car rental.`
    return `https://wa.me/916301272127?text=${encodeURIComponent(text)}`
  }

  return (
    <section id="fleet" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Premium Fleet</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Choose from our fleet of perfectly maintained and fully sanitized vehicles. Rent by the day, week, or month.
          </p>
          <div className="w-20 h-1 bg-primary-orange mx-auto rounded mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div>
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute top-4 right-4 bg-primary-orange text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full z-10 shadow-md">
                    {car.type}
                  </div>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 pb-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-orange transition-colors">
                    {car.name}
                  </h3>
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 mb-4 text-center">
                    <div>
                      <span className="block text-lg">⚙</span>
                      <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Gearbox</span>
                      <span className="block text-xs text-gray-700 font-semibold mt-0.5">{car.transmission.split('/')[0]}</span>
                    </div>
                    <div>
                      <span className="block text-lg">👥</span>
                      <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Capacity</span>
                      <span className="block text-xs text-gray-700 font-semibold mt-0.5">{car.seats}</span>
                    </div>
                    <div>
                      <span className="block text-lg">⛽</span>
                      <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Fuel</span>
                      <span className="block text-xs text-gray-700 font-semibold mt-0.5">{car.fuel.split('/')[0]}</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 mb-6">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <span className="text-primary-orange mr-2">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppLink(car.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary-orange hover:bg-orange-600 text-white text-center py-3.5 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-[1.02]"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fleet
