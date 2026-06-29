function About({ Logo }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Rideonkey</h2>
          <div className="w-20 h-1 bg-primary-orange mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to <strong className="text-primary-orange">Rideonkey</strong> – your premium self-drive car rental partner. We provide safe, affordable, and well-maintained vehicles for all your travel needs. Whether you need an SUV for a family trip, a sedan for business, or a luxury car for a special occasion, we have the perfect vehicle for you.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to excellence ensures that every vehicle is thoroughly sanitized, regularly serviced, and ready to deliver an exceptional driving experience. With 24×7 customer support and easy booking, renting a car has never been easier.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={Logo}
              alt="Rideonkey Logo"
              className="max-w-sm w-full h-auto object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
