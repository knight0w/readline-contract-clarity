
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-readline-darker bg-opacity-80 backdrop-blur-md shadow-md"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white tracking-wider">
          READLINE
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-readline-teal transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-readline-teal transition-colors">
            How It Works
          </a>
          <a href="#preview" className="text-gray-300 hover:text-readline-teal transition-colors">
            Preview
          </a>
          <Button
            className="bg-readline-teal hover:bg-readline-teal-dark text-readline-dark font-medium px-6"
            asChild
          >
            <Link to="/studio">Try Readline Free</Link>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-readline-darker bg-opacity-95 backdrop-blur-md shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a
              href="#features"
              className="text-gray-300 hover:text-readline-teal py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-readline-teal py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#preview"
              className="text-gray-300 hover:text-readline-teal py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Preview
            </a>
            <Button
              className="bg-readline-teal hover:bg-readline-teal-dark text-readline-dark font-medium w-full"
              asChild
            >
              <Link to="/studio" onClick={() => setIsMobileMenuOpen(false)}>Try Readline Free</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

