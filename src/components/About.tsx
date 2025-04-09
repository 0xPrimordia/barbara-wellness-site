import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">About Barbara</h2>
          <div className="mt-10 bg-teal-50 rounded-xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <div className="h-64 w-64 rounded-full overflow-hidden mx-auto shadow-lg">
                  <img 
                    src="https://mocha-cdn.com/01961aeb-e834-7edf-bda1-9f61246c8c13/About-Barbara.jpg" 
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
      </div>
    </section>
  );
};

export default About;
