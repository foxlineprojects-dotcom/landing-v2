import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      {/* Header */}
      <Navbar />
      
      {/* Hero Section - Full Width */}
      <div className="relative w-full min-h-[700px] flex items-center">
        {/* Background Image - Full Width, Darkened */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6110062/pexels-photo-6110062.jpeg')",
            filter: 'brightness(0.35)'
          }}
        ></div>
        
        {/* Elegant Gold Overlay Gradient */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            background: 'linear-gradient(to right, rgba(212, 175, 55, 0.15), rgba(0, 0, 0, 0.3))'
          }}
        ></div>
        
        {/* Hero Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center z-10">
          
          {/* Headline - Elegant & Bold */}
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            style={{
              color: '#F5E6D3', // Cream
              textShadow: '2px 4px 12px rgba(0, 0, 0, 0.8)',
              letterSpacing: '-0.02em'
            }}
          >
            Stop Getting Taken Advantage Of at the Dealership
          </h1>
          
          {/* Subheadline - Smart & Clear */}
          <p 
            className="text-2xl md:text-3xl lg:text-4xl mb-14 max-w-5xl mx-auto font-light"
            style={{
              color: '#F5E6D3',
              textShadow: '1px 2px 8px rgba(0, 0, 0, 0.9)'
            }}
          >
            Upload your quote. We'll reveal every hidden fee and show you exactly how to negotiate back.
          </p>
          
          {/* CTA Button - More Orange */}
          <button
            onClick={() => {
              window.scrollTo({ top: 800, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 font-bold py-6 px-14 rounded-lg transition-all text-xl shadow-2xl hover:shadow-xl transform hover:scale-105"
            style={{ 
              backgroundColor: '#FF6B35',
              color: '#000000',
              border: '2px solid #D4AF37'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E85A28';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF6B35';
            }}
          >
            Check If This Deal Is Fair →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
