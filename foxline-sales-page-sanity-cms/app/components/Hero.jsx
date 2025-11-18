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
            backgroundImage: "url('/assets/hero-woman-car-contract.jpg')",
            filter: 'brightness(0.5)'
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
            Dealership Contract Seem Too Good to Be True?
          </h1>
          
          {/* Subheadline - Smart & Clear */}
          <p 
            className="text-2xl md:text-3xl lg:text-4xl mb-14 max-w-5xl mx-auto font-light"
            style={{
              color: '#F5E6D3',
              textShadow: '1px 2px 8px rgba(0, 0, 0, 0.9)'
            }}
          >
            Upload your quote or contract. We'll show you every hidden fee, markup, and negotiation opportunity before you sign.
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
            Analyze My Quote Free →
          </button>
          
          {/* Trust Signals - Added below button */}
          <div className="mt-6 flex items-center justify-center gap-6 flex-wrap text-lg" style={{ color: '#F5E6D3' }}>
            <span className="flex items-center gap-2">
              🔒 Free
            </span>
            <span className="flex items-center gap-2">
              • Secure upload
            </span>
            <span className="flex items-center gap-2">
              • Results in 24 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
