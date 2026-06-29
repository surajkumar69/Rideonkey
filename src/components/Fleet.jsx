function Fleet() {
  const cars = [
    {
      type: 'SUV',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&h=300&fit=crop',
      transmission: 'Automatic',
      seats: '7 Seats',
      fuel: 'Diesel/Petrol',
    },
    {
      type: 'Sedan',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop',
      transmission: 'Automatic/Manual',
      seats: '5 Seats',
      fuel: 'Diesel/Petrol',
    },
    {
      type: 'Hatchback',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&h=300&fit=crop',
      transmission: 'Manual/Automatic',
      seats: '5 Seats',
      fuel: 'Petrol/CNG',
    },
    {
      type: 'Luxury Cars',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300&fit=crop',
      transmission: 'Automatic',
      seats: '5 Seats',
      fuel: 'Petrol/Diesel',
    },
  ]

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Fleet</h2>
          <div className="w-20 h-1 bg-primary-orange mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.type}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{car.type}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">⚙</span>
                    <span className="text-sm">{car.transmission}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">👥</span>
                    <span className="text-sm">{car.seats}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">⛽</span>
                    <span className="text-sm">{car.fuel}</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="block w-full bg-primary-orange hover:bg-orange-600 text-white text-center py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  Book Now
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
