function About({ Logo }) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About RK Travels</h2>
          <div className="w-20 h-1 bg-primary-orange mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to <strong className="text-primary-orange font-semibold">RK Travels</strong> – your premier self-drive car rental partner based in <strong className="text-gray-900 font-semibold">Etcherla</strong>. We provide safe, affordable, and meticulously maintained vehicles for all your travel needs. Whether you need a fuel-efficient hatchback for local runs, an SUV like the Mahindra XUV500 for a family trip, or a premium car for business, we have you covered.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to excellence ensures that every vehicle in our fleet is thoroughly sanitized, regularly serviced, and ready to deliver an exceptional driving experience. With 24x7 support, seamless booking, and convenient terms, RK Travels is the ultimate choice for your next journey in Srikakulam district.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-950 p-8 sm:p-12 rounded-3xl border border-gray-800 shadow-2xl flex items-center justify-center max-w-sm w-full transition-transform duration-500 hover:scale-105">
              <img
                src={Logo}
                alt="RK Travels Logo"
                className="w-full h-auto object-contain animate-float rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
