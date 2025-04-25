import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background image with proper styling */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#000000", // Black background to ensure no white edges
        }}
      >
        <img 
          src="/lovable-uploads/8a30a44d-518d-4a3d-9a2e-c0e557a21039.png" 
          alt="AI brain visualization" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Darker overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      
      {/* Content container - centered vertically */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - Empty space for image background */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            {/* No content here, as the background image will show */}
          </div>
          
          {/* Right column - Text and CTA */}
          <div className="flex flex-col text-center lg:text-left order-1 lg:order-2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              <div>Understand</div>
              <div>Edit</div>
              <div>Redline</div>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0">
              AI-powered contract assistant designed for the creative professional. 
              Helping you navigate contract negotiations in the entertainment industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-readline-teal hover:bg-readline-teal-dark text-readline-dark text-lg font-medium px-8 box-glow"
                asChild
              >
                <Link to="/studio">Coming Soon</Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-readline-teal text-readline-teal hover:bg-readline-teal/10"
                onClick={() => {
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                How It Works
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity animate-bounce">
          <span className="text-sm text-gray-300">Scroll to explore</span>
          <ArrowDown className="text-readline-teal" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
