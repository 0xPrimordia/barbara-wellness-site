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
          src="/images/1317144530.jpg" 
          alt="Serene bamboo forest background" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-lg">
          <div className="flex justify-center mb-6">
            <img 
              src="/images/logo.png" 
              alt="Barbara White Wellness Logo" 
              className="h-24 w-auto rounded-full"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
            Barbara White Wellness
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-slate-700 leading-relaxed">
            Integrative bodywork and holistic  practices to support health & well-being on all levels.
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
          <div className="mt-10 bg-teal-50 rounded-xl p-8 shadow-md">
          <h2 className="section-heading text-center">About Barbara</h2>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <div className="h-64 w-64 rounded-full overflow-hidden mx-auto shadow-lg">
                  <img 
                    src="/images/About-Barbara.jpg" 
                    alt="Barbara White, Wellness Practitioner" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="space-y-6 text-slate-700">
                  <p>
                    Since being inspired by her experience of Reflexology in 1979, 
                    Barbara has trained in several massage therapy and energy healing modalities. 
                    Through Barbara's intuitive abilities, she provides personalized, effective, 
                    and transformative sessions.
                  </p>
                  <p>
                    Barbara has over 30 years of experience practicing Integrative Bodywork. 
                    She taught at the Lauterstein Conway Massage School and managed the 
                    Massage Therapy Department at The Hills Fitness Center. Additionally, 
                    she teaches self-care classes that are both practical and empowering.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
