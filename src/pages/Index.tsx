
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PreviewSection from "@/components/PreviewSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title with Coming Soon
    document.title = "Readline - Contract Analysis Made Simple | Coming Soon";
  }, []);

  return (
    <main className="min-h-screen bg-readline-dark text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <PreviewSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
