import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      {/* Header */}

      <Navbar />
      {/* Hero Section */}
      <div className="max-w-4xl py-20 mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Tired of feeling{" "}
          <span style={{ color: "#2c5f5f" }}>intimidated and confused</span>{" "}
          when shopping for a car?
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-4">
          Know what you can save and what's fair—before you sign anything.
        </p>
        <p className="text-lg text-slate-500">
          Upload your car contract or estimate. Get a plain-English breakdown in
          24 hours.{" "}
          <span className="font-semibold">
            No pressure. No upsells. Just clarity.
          </span>
        </p>
      </div>
      {/* <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12 transition-colors">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 :text-white mb-6 leading-tight">
            Tired of the maze of{" "}
            <span className="text-blue-600 :text-blue-400">
              hidden fees
            </span>{" "}
            and{" "}
            <span className="text-blue-600 :text-blue-400">
              fine print?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 :text-slate-300 mb-4">
            Get your contract analyzed—free. Know exactly what you're signing.
          </p>

          <p className="text-lg text-slate-500 :text-slate-400">
            Upload your estimate or contract. Get a plain-English breakdown in
            24 hours.{" "}
            <span className="font-semibold :text-white">
              No pressure. No upsells. Just clarity.
            </span>
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
