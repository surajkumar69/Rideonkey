function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop')",
        }}
      ></div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-shadow animate-fade-in-up">
          Drive Your Dream Car Today
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Self Drive SUV, Sedan & Luxury Cars Available
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#contact"
            className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
          >
            Book Now
          </a>
          <a
            href="tel:7828122541"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
