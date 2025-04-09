import React from 'react';
import { BookOpen } from 'lucide-react';

interface WorkshopCardProps {
  title: string;
  description: string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md card-hover border-t-4 border-teal-500">
      <div className="text-teal-600 mb-4">
        <BookOpen size={36} />
      </div>
      <h3 className="text-2xl font-semibold text-teal-800 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Workshops: React.FC = () => {
  const workshops = [
    {
      title: "EFT Meridian Tapping",
      description: "Learn powerful tapping techniques to release stress, anxiety, and emotional blocks for improved well-being."
    },
    {
      title: "Jin Shin Jyutsu Self Help",
      description: "Discover ancient Japanese energy healing techniques you can practice on yourself for balance and harmony."
    },
    {
      title: "Roll & Renew",
      description: "Experience therapeutic self-massage using specialized tools to release tension and improve mobility."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Workshops & Classes</h2>
          <p className="section-subheading">
            Barbara offers workshops and classes designed to empower individuals with self-care techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {workshops.map((workshop, index) => (
            <WorkshopCard 
              key={index} 
              title={workshop.title} 
              description={workshop.description} 
            />
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-teal-800 mb-6 text-center">Practice Space</h3>
          <p className="text-slate-700 mb-8 text-center max-w-3xl mx-auto">
            Barbara's tranquil studio provides a serene environment for treatments and workshops.
            The space is designed to promote relaxation and healing with all necessary equipment for your comfort.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Consultation Area */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="src/images/space.jpg" 
                alt="Consultation area with comfortable chairs and plants" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-teal-700 mb-2">Consultation Area</h4>
                <p className="text-slate-600">
                  A comfortable space for initial consultations and relaxed discussions about your wellness journey.
                  Designed to help you feel at ease from the moment you arrive.
                </p>
              </div>
            </div>
            
            {/* Treatment Room */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="src/images/space2.jpg" 
                alt="Treatment room with massage table and calming decor" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-teal-700 mb-2">Treatment Room</h4>
                <p className="text-slate-600">
                  Our peaceful treatment room offers a serene environment for bodywork and healing therapies.
                  Equipped with professional-grade equipment and soothing ambiance for your comfort.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 rounded-xl p-6 shadow-md">
            <p className="text-slate-700 text-center">
              Small class sizes ensure personal attention in these tranquil spaces, providing
              an ideal environment for learning and experiencing Barbara's healing modalities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
