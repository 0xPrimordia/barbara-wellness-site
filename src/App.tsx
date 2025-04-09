import { useState, useEffect } from 'react';
import { ChevronUp, Menu, X } from 'lucide-react';
import { Link, Element, Events, scrollSpy, scroller } from 'react-scroll';
import './index.css';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CalendlyWidget from './components/CalendlyWidget';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      // Close mobile menu when navigation starts
      closeMenu();
    });

    // Setup scroll spy for navigation highlighting
    scrollSpy.update();

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const navigationLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Barbara' },
    { id: 'services', label: 'Integrative Bodywork' },
    { id: 'workshops', label: 'Workshops & Classes' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact & Pricing' },
  ];

  return (
    <div className="relative bg-neutral-50 text-slate-800 min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Barbara White Wellness Logo" 
                className="h-12 w-auto mr-3 rounded-full"
              />
              <span className="text-xl font-semibold text-slate-800 hidden sm:inline-block">Barbara White Wellness</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      spy={true}
                      smooth={true}
                      duration={600}
                      className="text-slate-700 hover:text-sage-600 cursor-pointer text-sm font-medium transition"
                      activeClass="text-sage-600 font-semibold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-700 hover:text-sage-600" aria-label="Toggle Menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 pb-6 px-6 md:hidden overflow-y-auto">
          <div className="flex justify-center mb-6">
            <img 
              src="/images/logo.png" 
              alt="Barbara White Wellness Logo" 
              className="h-20 w-auto"
            />
          </div>
          <ul className="flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  duration={600}
                  className="block py-2 text-lg font-medium text-slate-700 hover:text-sage-600 cursor-pointer"
                  activeClass="text-sage-600 font-semibold"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Main Content */}
      <main className="pt-16">
        <Element name="home">
          <Hero />
        </Element>
        
        <Element name="about">
          <About />
        </Element>
        
        <Element name="services">
          <Services />
        </Element>
        
        <Element name="workshops">
          <Workshops />
        </Element>
        
        <Element name="testimonials">
          <Testimonials />
        </Element>
        
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      
      <Footer />
      
      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-sage-600 hover:bg-sage-700 text-white rounded-full shadow-lg transition-all z-40"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Calendly Widget */}
      <CalendlyWidget />
    </div>
  );
}

export default App;
