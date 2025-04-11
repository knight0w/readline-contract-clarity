
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Readline has transformed how our legal team reviews contracts. What used to take hours now takes minutes with AI-powered insights.",
    author: "Alexandra Chen",
    title: "Legal Counsel, TechCorp Inc.",
    rating: 5
  },
  {
    quote: "As a non-lawyer, I struggled with understanding contracts. Readline breaks down complex terms into plain language I can actually understand.",
    author: "Michael Rodriguez",
    title: "Startup Founder",
    rating: 5
  },
  {
    quote: "The time savings alone justify the investment. Our team processes 3x more contracts while catching more potential issues than before.",
    author: "Sarah Johnson",
    title: "VP of Operations, Enterprise Solutions",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-readline-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(10,250,202,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <div className="w-20 h-1 bg-readline-teal mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of professionals already using Readline to simplify their legal documents
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-xl flex flex-col h-full transform hover:-translate-y-1 transition-transform"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`}
                  />
                ))}
              </div>
              
              <blockquote className="text-lg mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mt-auto">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block glass px-8 py-4 rounded-full">
            <p className="text-gray-300">Trusted by <span className="text-readline-teal font-bold">10,000+</span> professionals from startups to Fortune 500 companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
