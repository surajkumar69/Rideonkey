import { Key, Calendar, Clock, Car, Sparkles, Plane, Map, Briefcase } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: <Key className="w-8 h-8 text-primary-orange" />,
      title: 'Self Drive Car Rental',
      description: 'Get total freedom and privacy with our self-drive car hire options.',
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary-orange" />,
      title: 'Daily Car Rental',
      description: 'Flexible day-to-day car rental plans for your local travel needs.',
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-orange" />,
      title: 'Weekly & Monthly Rental',
      description: 'Economical long-term car rentals for individuals and corporate needs.',
    },
    {
      icon: <Car className="w-8 h-8 text-primary-orange" />,
      title: 'SUV Rental',
      description: 'Spacious and robust SUVs like XUV500 for perfect family trips and rough roads.',
    },
    {
      icon: <Car className="w-8 h-8 text-primary-orange" />,
      title: 'Sedan Rental',
      description: 'Comfortable and premium sedans for elegant styling and smooth highway driving.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary-orange" />,
      title: 'Luxury Car Rental',
      description: 'Ride in style with our high-end luxury vehicles for weddings and special occasions.',
    },
    {
      icon: <Plane className="w-8 h-8 text-primary-orange" />,
      title: 'Airport Pickup & Drop',
      description: 'Timely and comfortable airport transfer services to ensure you never miss a flight.',
    },
    {
      icon: <Map className="w-8 h-8 text-primary-orange" />,
      title: 'Outstation Trips',
      description: 'Reliable self-drive or chauffeur-driven outstation travel packages.',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary-orange" />,
      title: 'Corporate Car Rental',
      description: 'Dedicated premium fleet and customized billing options for corporate clients.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services Offered</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            We provide a wide range of premium car rental services tailored to meet all your local and outstation travel requirements.
          </p>
          <div className="w-20 h-1 bg-primary-orange mx-auto rounded mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center group"
            >
              <div className="p-4 bg-gray-50 rounded-2xl mb-6 transition-all duration-300 group-hover:bg-primary-orange/10 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
