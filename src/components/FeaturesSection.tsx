
import React from "react";
import { Brain, Shield, FileCode, Users } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-8 w-8 text-readline-teal" />,
    title: "AI-Powered Legal Language Simplification",
    description: "Our advanced AI translates complex legal jargon into plain, understandable language anyone can comprehend."
  },
  {
    icon: <Shield className="h-8 w-8 text-readline-teal" />,
    title: "Industry-Grade Security & Privacy",
    description: "End-to-end encryption and secure document handling ensures your sensitive legal documents remain confidential."
  },
  {
    icon: <FileCode className="h-8 w-8 text-readline-teal" />,
    title: "Works with Multiple Document Formats",
    description: "Seamlessly upload and analyze PDFs, Word documents, Google Docs, and other common document formats."
  },
  {
    icon: <Users className="h-8 w-8 text-readline-teal" />,
    title: "Easy Collaboration and Export",
    description: "Share insights with team members and export documents with annotations, summaries, and plain language alternatives."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-readline-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Readline?</h2>
          <div className="w-20 h-1 bg-readline-teal mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powerful features designed to make legal documents accessible and actionable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-xl hover:border-readline-teal/30 transition-colors"
            >
              <div className="mb-6 inline-block p-3 rounded-full bg-readline-teal/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
