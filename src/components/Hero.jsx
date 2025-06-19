import HeroImage from '/img/Hero.jpg';

const Hero = () => {
  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${HeroImage}')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your
          <span className="block bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">Dream Space</span>
        </h1>        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Expert kitchen and bathroom renovations serving Vancouver, Washington and the Portland, Oregon area. 
          Where quality craftsmanship meets exceptional design.
        </p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={scrollToServices} className="btn-primary text-lg px-8 py-4">
            Our Services
          </button>
          <a href="tel:+13609917646" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
            Call (360) 991-7646
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
