
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PreviewSection from "@/components/PreviewSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Readline - Understand Contracts Instantly";
  }, []);

  return (
    <main className="min-h-screen bg-readline-dark text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <PreviewSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
