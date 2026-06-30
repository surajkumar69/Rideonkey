function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80')",
        }}
      ></div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary-orange/10 border border-primary-orange/20 text-primary-orange mb-6 animate-fade-in-up">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em]">Premium Car Hire in Andhra Pradesh</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 text-shadow animate-fade-in-up leading-tight">
          Drive Your Dream Journey <br />
          with <span className="text-primary-orange">RK Travels</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Self Drive Hatchback, SUV & Sedan Rental in Etcherla. Premium quality, best rates, and well-maintained fleet.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-primary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 text-center"
          >
            Book Now
          </a>
          <a
            href="tel:+916301272127"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 text-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
