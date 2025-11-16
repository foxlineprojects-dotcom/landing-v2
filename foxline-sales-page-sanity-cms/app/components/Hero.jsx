import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      {/* Header */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image - 20% Opacity (Subtle) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6110062/pexels-photo-6110062.jpeg')"
          }}
        ></div>
        
        {/* Solid Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #2c5f5f 0%, #1a4040 100%)" }}
        ></div>

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stop Getting Taken Advantage Of at the Dealership
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto">
            Upload your contract. We'll show you every hidden fee and exactly how to negotiate back.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
              window.scrollTo({ top: 800, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 font-semibold py-5 px-12 rounded-lg transition-all text-xl shadow-2xl hover:shadow-xl transform hover:scale-105"
            style={{ 
              backgroundColor: "#f5e6d3", 
              color: "#2c5f5f",
            }}
          >
            Get Your Free Analysis →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
