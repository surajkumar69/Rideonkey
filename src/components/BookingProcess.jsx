function BookingProcess() {
  const steps = [
    {
      number: 1,
      title: 'Select Car',
      description: 'Browse our fleet and choose the perfect vehicle for your needs.',
    },
    {
      number: 2,
      title: 'Upload Documents',
      description: 'Submit your driving license and ID proof for verification.',
    },
    {
      number: 3,
      title: 'Make Payment',
      description: 'Complete your booking securely with our payment options.',
    },
    {
      number: 4,
      title: 'Pick Up Vehicle',
      description: 'Collect your car from our location or request doorstep delivery.',
    },
    {
      number: 5,
      title: 'Enjoy Your Ride',
      description: 'Hit the road and enjoy your journey with complete freedom.',
    },
  ]

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Booking Process</h2>
          <div className="w-20 h-1 bg-primary-orange mx-auto rounded"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 min-w-[200px] max-w-[250px] text-center"
            >
              <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/80 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookingProcess
