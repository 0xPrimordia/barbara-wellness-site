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
          src="https://mocha-cdn.com/01961aeb-e834-7edf-bda1-9f61246c8c13/Workshops-and-Classes.jpeg" 
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
      </div>
    </section>
  );
};

export default Services;
