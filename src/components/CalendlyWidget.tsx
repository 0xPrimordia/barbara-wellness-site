import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        // Initialize badge widget
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/rags-consignments/first-time-consult',
          text: 'Schedule time with me',
          color: '#7a9e8e', // sage green to match logo
          textColor: '#ffffff'
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      
      // Remove the Calendly widgets if they exist
      const calendlyBadge = document.querySelector('.calendly-badge-widget');
      if (calendlyBadge) {
        calendlyBadge.remove();
      }
      
      const calendlyInline = document.querySelector('.calendly-inline-widget');
      if (calendlyInline) {
        calendlyInline.innerHTML = '';
      }
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default CalendlyWidget;
