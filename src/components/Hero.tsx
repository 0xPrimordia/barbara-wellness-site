import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  useEffect(() => {
    // Load Open Sans font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      // Clean up
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-slate-50 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-sage-600/20 backdrop-blur-[2px]"></div>
        <img 
          src="dist/assets/images/1317144530.jpg" 
          alt="Serene bamboo forest background" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-lg">
          <div className="flex justify-center mb-6">
            <img 
              src="dist/assets/logo.png" 
              alt="Barbara White Wellness Logo" 
              className="h-24 w-auto rounded-full"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
            Barbara White Wellness
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-slate-700 leading-relaxed">
            Integrative bodywork and holistic health practices to improve well-being on all levels.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={800}
              className="px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white rounded-lg font-medium transition cursor-pointer shadow-md"
            >
              Explore Services
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={800}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-sage-600 border border-sage-600 rounded-lg font-medium transition cursor-pointer shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
