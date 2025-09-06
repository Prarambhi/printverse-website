import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import "@google/model-viewer"; // Import the model-viewer web component

const Hero: React.FC = () => {
  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Professional
                <span className="text-blue-600"> Printing</span>
                <br />
                Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                From single-color prints to complex multi-color projects, we
                deliver exceptional quality printing services with fast
                turnaround times and competitive pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToQuote}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={scrollToServices}
                className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
              >
                View Services
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Fast 24-48 hour turnaround
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Premium quality materials
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Competitive wholesale pricing
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Model */}
          <div className="relative">
            
              
                <model-viewer
                  src="/models/business_card_holder.glb"
                  alt="Business Card Holder 3D Model"
                  auto-rotate
                  camera-controls
                  shadow-intensity="1.5"
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "10px",
                  }}
                >
                </model-viewer>
              </div>
            
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
