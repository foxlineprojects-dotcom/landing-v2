import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      {/* Header */}
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/6110062/pexels-photo-6110062.jpeg"
            alt="Freedom on the road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Tired of Feeling Taken Advantage Of When Buying a Car?{" "}
              <span style={{ color: "#f5e6d3" }}>
                Foxline Puts the Power Back in Your Hands.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-200 mb-6 leading-relaxed">
              Dealerships count on confusion, pressure, and hidden markups—especially with women. 
              Foxline exposes every trick in your contract and gives you the confidence 
              (and the words) to take control of your deal.
            </p>

            {/* Pain Statement */}
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              If you've ever walked out of a dealership wondering if you were talked over, 
              overcharged, or pressured into something… you're not imagining it. 
              <span className="font-semibold text-white"> The system is built to make you doubt yourself.</span>
            </p>

            {/* Solution Statement */}
            <p className="text-xl text-white mb-10 leading-relaxed font-medium">
              Upload your contract and Foxline will break down every number, reveal every hidden fee, 
              and show you exactly how to push back—with clarity, fairness, and total confidence. 
              <span style={{ color: "#f5e6d3" }}> You're not alone. You're just finally on the inside.</span>
            </p>

            {/* CTA Button */}
            <button
              onClick={() => {
                window.scrollTo({ top: 800, behavior: 'smooth' });
              }}
              className="inline-block font-semibold py-4 px-10 rounded-lg transition-all text-lg shadow-2xl hover:shadow-xl transform hover:-translate-y-1"
              style={{ 
                backgroundColor: "#f5e6d3", 
                color: "#2c5f5f",
              }}
            >
              Upload Your Contract →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
