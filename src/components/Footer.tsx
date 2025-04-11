
import React from "react";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-readline-darker pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <a href="#" className="text-2xl font-bold text-white tracking-wider block mb-4">
              READLINE
            </a>
            <p className="text-gray-400 mb-6">
              AI-powered contract assistance for everyone. Understand legal documents instantly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Product links */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-readline-teal transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-readline-teal transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">Security</a></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal links */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-readline-teal transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Readline AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
