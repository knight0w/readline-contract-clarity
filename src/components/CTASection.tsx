
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CTASection = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // This would normally connect to your backend
    toast.success("Thanks for signing up! Check your email to get started.");
    setEmail("");
  };

  return (
    <section className="py-20 bg-readline-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,250,202,0.05),transparent_50%,rgba(10,250,202,0.05))]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-10 border border-readline-teal/20 shadow-[0_0_40px_rgba(10,250,202,0.15)]">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Start Reviewing Smarter</h2>
            <p className="text-xl text-gray-300">
              Join 10,000+ professionals already using Readline to understand contracts instantly.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-readline-dark border-readline-teal/30 focus:border-readline-teal text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              className="bg-readline-teal hover:bg-readline-teal-dark text-readline-dark font-medium box-glow"
            >
              Get Started
            </Button>
          </form>
          
          <p className="text-sm text-center text-gray-400 mt-4">
            Free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
