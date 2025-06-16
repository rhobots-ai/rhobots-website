import React from 'react';
import { Bot, Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Bot className="w-8 h-8 text-blue-400" />
              <span className="ml-3 text-2xl font-bold text-white">Rhobots</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Pioneering the future of AI with specialized agents that think, work, and scale. 
              Transform your workflow with intelligent automation that understands your domain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">DeepCite</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">FineTuning Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">AI Browser Agent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Voice AI Agent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About Rhobots</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center text-gray-400">
              <MapPin className="w-5 h-5 mr-3 text-blue-400" />
              <span>Worldwide</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Mail className="w-5 h-5 mr-3 text-blue-400" />
              <span>hello@rhobots.ai</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Phone className="w-5 h-5 mr-3 text-blue-400" />
              <span>+91 (704) 200-8497</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Rhobots. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Security</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;