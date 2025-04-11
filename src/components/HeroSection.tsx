
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden grid-bg">
      {/* Background elements */}
      <div className="absolute inset-0 bg-readline-dark bg-opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-readline-dark to-readline-darker"></div>
      
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-readline-darker to-transparent"></div>
      
      {/* Dots and sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-readline-teal animate-pulse-glow"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - Brain Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <img 
              src="/lovable-uploads/9b6e67bf-81ce-4f4e-a962-1639df8ad2e8.png" 
              alt="AI Brain Wireframe" 
              className="w-[80%] lg:w-[90%] max-w-[500px] animate-float"
            />
          </div>
          
          {/* Right column - Text and CTA */}
          <div className="flex flex-col text-center lg:text-left order-1 lg:order-2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-glow">
              Understand Contracts<br /> 
              <span className="text-readline-teal">Instantly</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              AI-powered contract assistant that helps you understand and
              edit legal documents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-readline-teal hover:bg-readline-teal-dark text-readline-dark text-lg font-medium px-8 box-glow"
              >
                Try Readline Free
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
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <ArrowDown className="text-readline-teal" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
