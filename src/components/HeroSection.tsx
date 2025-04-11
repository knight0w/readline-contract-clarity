
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/ea977371-8a03-4a25-b44c-9ff0cfc1f95a.png')",
          backgroundSize: "cover",
          backgroundPosition: "center" 
        }}
      ></div>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - Empty space for image background */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            {/* No content here, as the background image will show */}
          </div>
          
          {/* Right column - Text and CTA */}
          <div className="flex flex-col text-center lg:text-left order-1 lg:order-2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              <div>Understand</div>
              <div>Contracts</div>
              <div>Instantly</div>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0">
              AI-powered contract assistant designed specifically for music professionals. 
              Helping artists, songwriters, producers, and labels navigate complex legal documents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-readline-teal hover:bg-readline-teal-dark text-readline-dark text-lg font-medium px-8 box-glow"
              >
                Coming Soon
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
