import React from 'react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start mb-4">
              <img 
                src="/images/logo.png" 
                alt="Barbara White Wellness Logo" 
                className="h-16 w-auto mb-3"
              />
              <h3 className="text-xl font-semibold">Barbara White Wellness</h3>
            </div>
            <p className="text-slate-300 mb-4 text-center md:text-left">
              Integrative bodywork and holistic health practices to improve well-being on all levels.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className="text-slate-300 hover:text-white transition cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className="text-slate-300 hover:text-white transition cursor-pointer"
                >
                  About Barbara
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className="text-slate-300 hover:text-white transition cursor-pointer"
                >
                  Integrative Bodywork
                </Link>
              </li>
              <li>
                <Link
                  to="workshops"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className="text-slate-300 hover:text-white transition cursor-pointer"
                >
                  Workshops & Classes
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className="text-slate-300 hover:text-white transition cursor-pointer"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className="text-slate-300 hover:text-white transition cursor-pointer"
                >
                  Contact & Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <p className="text-slate-300 mb-2">
              Call: (512) 555-1234
            </p>
            <p className="text-slate-300 mb-4">
              Email: barbara@whitewellness.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-6 text-center">
          <p className="text-slate-300">
            &copy; {currentYear} Barbara White Wellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
