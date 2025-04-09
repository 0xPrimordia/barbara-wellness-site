import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="testimonial-card bg-white rounded-xl p-8 md:p-10 m-4">
      <div className="flex justify-center mb-6">
        <Quote size={36} className="text-teal-400" />
      </div>
      <blockquote className="text-center mb-8">
        <p className="text-slate-700 italic leading-relaxed">{quote}</p>
      </blockquote>
      <div className="text-center">
        <p className="font-semibold text-teal-800">{author}</p>
        {role && <p className="text-sm text-slate-500">{role}</p>}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const testimonials = [
    {
      quote: "Barbara combines decades of experience and education in body work with a deeply caring and attentive attitude. The strength and skill in her hands are impressive, but her nurturing touch might be the greatest gift she offers.",
      author: "Sarah Brumgart",
      role: "Professional Dancer / Yoga Instructor"
    },
    {
      quote: "I would describe Barbara as very skilled and intuitive. When I leave after a session with her, I feel 10 times better than when I arrived.",
      author: "A.C.",
      role: "Design Consultant"
    },
    {
      quote: "I have worked with Barbara for many years. She is fundamental to how I maintain my best physical well-being. We have worked together both in person and on the phone, and I truly appreciate that she is constantly learning new methods to facilitate our work.",
      author: "Victoria F."
    },
    {
      quote: "Barbara White's massages are as fine as I've ever had, and I've had quite a few over the past ten years. I enjoyed working with her very much when I was in Austin this past spring. She is excellent at what she does.",
      author: "Robert Duval",
      role: "Actor"
    },
    {
      quote: "A session with Barbara is a divine treat. She is so many things all rolled into one wonderful package: kind and friendly, easy to talk to, very experienced and knowledgeable about the body, anatomy, and holistic natural methods.",
      author: "Dr. Stephen Summers",
      role: "Chiropractor"
    },
    {
      quote: "After just one session with Barbara, my back pains and stiffness were completely gone. I do not know how she does it, but she seems to be able to read my body and do exactly what I need.",
      author: "Deyton Koch",
      role: "Graphic Designer"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Testimonials</h2>
          <p className="section-subheading">What our clients say about Barbara's work</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="min-w-full"
                >
                  <Testimonial
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-white p-3 rounded-full shadow-md hover:bg-teal-50 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-teal-700" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-white p-3 rounded-full shadow-md hover:bg-teal-50 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-teal-700" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === currentIndex ? 'bg-teal-600' : 'bg-teal-200'
              }`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
