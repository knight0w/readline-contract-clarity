
import React from "react";
import { FileUp, FileSearch, Edit } from "lucide-react";

const steps = [
  {
    icon: <FileUp className="w-12 h-12 text-readline-teal" />,
    title: "Upload a Contract",
    description: "Easily upload contracts in PDF, Word, or Google Docs format with our secure drag-and-drop interface.",
  },
  {
    icon: <FileSearch className="w-12 h-12 text-readline-teal" />,
    title: "AI Highlights Key Points",
    description: "Our AI analyzes the contract and identifies important clauses, potential risks, and complex legal language.",
  },
  {
    icon: <Edit className="w-12 h-12 text-readline-teal" />,
    title: "Edit or Export with Suggestions",
    description: "Review AI insights, make edits with plain language alternatives, and export with changes highlighted.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-readline-darker relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-readline-teal mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Readline uses advanced AI to analyze and simplify your legal documents in three easy steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-lg flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6 relative">
                <div className="absolute -inset-1 bg-readline-teal opacity-30 rounded-full blur-md"></div>
                <div className="p-4 rounded-full bg-readline-dark relative">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#0AFACA" fillOpacity="0.5"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
