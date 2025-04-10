import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
      <h3 className="text-xl font-semibold text-sage-600 mb-2">{title}</h3>
      <div className="w-16 h-1 bg-sage-200 mb-4"></div>
      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Deep Tissue Massage",
      description: "Relieve chronic tension and improve mobility with targeted, deep muscle therapy."
    },
    {
      title: "Lymph Drainage Therapy",
      description: "Boost circulation and reduce swelling with gentle, rhythmic techniques."
    },
    {
      title: "Foot Reflexology",
      description: "Restore balance and energy by stimulating reflex points on your feet."
    },
    {
      title: "Cupping Massage",
      description: "Enhance circulation and release tension with this ancient suction therapy."
    },
    {
      title: "Positional Release Therapy",
      description: "Ease pain and restore comfort through gentle, pain-free positioning."
    },
    {
      title: "Emotional Freedom Technique",
      description: "Release stress and emotional blocks with tapping-based energy therapy."
    },
    {
      title: "Jin Shin Jyutsu",
      description: "Harmonize your energy flow with this gentle, hands-on healing art."
    },
    {
      title: "Cranial Sacral Therapy",
      description: "Support your nervous system with light-touch therapy for deep relaxation."
    },
    {
      title: "Pranic Healing",
      description: "Personalized treatment to support your health and well-being through energy healing techniques."
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-50/90"></div>
        <img 
          src="/images/Workshops-and-Classes.jpeg" 
          alt="Peaceful bamboo forest background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Integrative Bodywork</h2>
          <p className="section-subheading">Increasing health and well-being on all levels.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>

        {/* Practice Space Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Barbara Wellness Center</h3>
          <p className="text-slate-700 mb-12 text-center max-w-3xl mx-auto">
            Experience healing in a tranquil environment surrounded by nature. Our studio is designed 
            to provide a peaceful sanctuary for your wellness journey.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Image */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="/images/house.jpg" 
                alt="Peaceful studio entrance surrounded by trees" 
                className="w-full h-[400px] object-cover" 
                style={{ objectPosition: '0 80%' }}
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-sage-600 mb-2">Serene Studio Setting</h4>
                <p className="text-slate-600">
                  Nestled among trees, our studio provides a peaceful retreat where nature and healing come together. 
                  The elevated deck and natural surroundings create a calming atmosphere from the moment you arrive.
                </p>
              </div>
            </div>

            {/* Entrance Image */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="/images/kitty.jpg" 
                alt="Welcoming studio entrance with plants" 
                className="w-full h-[400px] object-cover"
                style={{ objectPosition: '0 65%' }}
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-sage-600 mb-2">Welcoming Entrance</h4>
                <p className="text-slate-600">
                  The studio entrance is adorned with lush plants and natural elements, creating an 
                  inviting space that helps you transition from the outside world into a state of relaxation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
