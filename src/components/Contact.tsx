import React, { useState } from 'react';
import { Calendar, Clock, Mail, MapPin, Phone, Video } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    console.log(formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    
    // Reset the submission state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/barbara-wellness/first-time-consult'
      });
    }
    return false;
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Contact & Pricing</h2>
          <p className="section-subheading">Reach out to schedule a session or learn more</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-700">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-netlify="true">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-600"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-600"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-600"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-600"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-sage-600 hover:bg-sage-700 text-white font-medium rounded-md transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
              
              <div className="mt-8 pt-6 border-t border-slate-200">
                <button
                  onClick={openCalendly}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-sage-600 hover:bg-sage-700 text-white font-medium rounded-md transition"
                >
                  <Calendar size={20} />
                  Schedule an Appointment
                </button>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Pricing Information</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-lg font-semibold text-slate-800">30 Minutes</p>
                      <p className="text-2xl font-bold text-sage-600">$85</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-lg font-semibold text-slate-800">60 Minutes</p>
                      <p className="text-2xl font-bold text-sage-600">$150</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-lg font-semibold text-slate-800">90 Minutes</p>
                      <p className="text-2xl font-bold text-sage-600">$225</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-lg font-semibold text-slate-800">120 Minutes</p>
                      <p className="text-2xl font-bold text-sage-600">$300</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="text-sage-600" size={20} />
                      <p className="text-slate-700 font-medium">Outcalls available for an extra charge</p>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <Phone className="text-sage-600" size={20} />
                        <p className="text-slate-700">Phone sessions available</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="text-sage-600" size={20} />
                        <p className="text-slate-700">Video call sessions available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone size={20} className="text-sage-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">Phone</p>
                      <p className="text-slate-600"><a href='tel:5127674015'>(512) 767-4015</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={20} className="text-sage-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">Email</p>
                      <p className="text-slate-600">barbara@whitewellness.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={20} className="text-sage-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">Location</p>
                      <p className="text-slate-600">Austin, Texas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={20} className="text-sage-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">Hours</p>
                      <p className="text-slate-600">Mon - Fri: 9am - 6pm</p>
                      <p className="text-slate-600">Sat: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendly Embed */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Schedule a Session</h3>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/barbara-wellness/first-time-consult"
              style={{ minWidth: '600px', height: '1200px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
