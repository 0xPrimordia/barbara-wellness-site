import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
}

interface GoogleReviewProps {
  quote: string;
  author: string;
  date: string;
  reviewCount?: string;
  photoCount?: string;
  isLocalGuide?: boolean;
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

const GoogleReview: React.FC<GoogleReviewProps> = ({ quote, author, date, reviewCount, photoCount, isLocalGuide }) => {
  return (
    <a
      href="https://www.google.com/search?client=safari&rls=en&q=Barbara+White+Wellness%2C+3312+Doolin+Dr%2C+Austin%2C+TX+78704&ie=UTF-8&oe=UTF-8&sei=9-_2Z_r1DNfLp84P5anHgQo#"
      target="_blank"
      rel="noopener noreferrer"
      className="testimonial-card bg-white rounded-xl p-8 md:p-10 m-4 block transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-slate-800">{author}</p>
            {isLocalGuide && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Local Guide</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            {reviewCount && <span>{reviewCount} reviews</span>}
            {photoCount && <span>• {photoCount} photos</span>}
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="mb-4">
        <p className="text-slate-700 leading-relaxed">{quote}</p>
      </blockquote>
      <div className="text-sm text-slate-500">
        {date}
      </div>
    </a>
  );
};

const Testimonials: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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
    }
  ];

  const googleReviews = [
    {
      quote: "Barbara is a body and energy work master. I am so amazed by how she listens to my body and soul and knows exactly what I need.",
      author: "Cora Poage",
      date: "2 weeks ago",
      reviewCount: "10 reviews",
      photoCount: "3 photos"
    },
    {
      quote: "Barbara is magic! I have never met a massage therapist like Barbara. She is a true healer in every sense of the word.",
      author: "Kelly Thompson",
      date: "Feb 13, 2024",
      reviewCount: "8 reviews",
      photoCount: "3 photos"
    },
    {
      quote: "I've been a bodyworker for over 20 years and have great difficulty finding people to provide good work for me. Barbara is exceptional.",
      author: "Erik Kuykendall",
      date: "Jun 26, 2023",
      reviewCount: "2 reviews"
    },
    {
      quote: "Few things can replace the wisdom gained from experience. During my first visit, I learned that Barbara White has been practicing for decades, and it shows in her work.",
      author: "Thomas Ruggiero",
      date: "Oct 13, 2020",
      reviewCount: "2 reviews"
    },
    {
      quote: "A session with Barbara will do wonders for your mind, body and spirit. She is a gentle soul with a healing touch and her expertise is unmatched.",
      author: "Taylor Rose",
      date: "Jun 8, 2020",
      reviewCount: "5 reviews"
    },
    {
      quote: "I've known Barbara for +30 years as a client! I traveled 3-4 days/week in my job and built up a lot of stress. I always felt better after seeing Barbara.",
      author: "Gary Armstrong",
      date: "Jul 19, 2019",
      reviewCount: "11 reviews"
    },
    {
      quote: "I used Barbara's services due to a car accident and I really liked her professionalism and effectiveness to solve my pain in my back and hand.",
      author: "Juan Martinez",
      date: "May 29, 2019",
      reviewCount: "57 reviews",
      photoCount: "8 photos",
      isLocalGuide: true
    },
    {
      quote: "Barbara is an exceptional masseuse who delivers the highest level of service and care to her clients. Highly skilled, professional, and caring.",
      author: "Matt Ditlow",
      date: "May 24, 2019",
      reviewCount: "10 reviews"
    },
    {
      quote: "I feel like a new person! I can not thank Barbara enough for the magic she worked on my injured shoulder that has been bothering me for years.",
      author: "Deyton Koch",
      date: "Mar 19, 2019",
      reviewCount: "18 reviews"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % googleReviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        {/* Main Testimonials */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Testimonials</h2>
          <p className="section-subheading">What our clients say about Barbara's work</p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>

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

        {/* Google Reviews */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Google Reviews</h2>
          <p className="section-subheading">What our clients say on Google</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
            >
              {googleReviews.map((review, index) => (
                <div key={index} className="min-w-full">
                  <GoogleReview {...review} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-white p-3 rounded-full shadow-md hover:bg-teal-50 transition"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} className="text-teal-700" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-white p-3 rounded-full shadow-md hover:bg-teal-50 transition"
            aria-label="Next review"
          >
            <ChevronRight size={20} className="text-teal-700" />
          </button>
        </div>

        {/* Add Review Button */}
        <div className="text-center mt-12">
          <a
            href="https://g.page/r/CSxT9o3QfTthEB0/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
