import React from 'react';
import { Bot, Github, Twitter, Linkedin, Mail, MapPin, Phone, Heart, Coffee, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Enhanced Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="relative">
                <img 
                  src="/images/icon.png" 
                  alt="Rhobots Logo" 
                  className="w-10 h-10 group-hover:scale-110 transition-all duration-300 drop-shadow-md"
                />
              </div>
              <span className="ml-3 text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">Rhobots</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              We build AI that actually gets stuff done. No fluff, no hype, just intelligent agents that make your work life better. 
              <span className="text-cyan-400 font-semibold">Because life's too short for bad AI.</span>
            </p>
            
            {/* Fun stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="text-lg font-bold text-blue-400">500+</div>
                <div className="text-xs text-gray-400">Happy Humans</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="text-lg font-bold text-purple-400">99.9%</div>
                <div className="text-xs text-gray-400">Uptime</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="text-lg font-bold text-cyan-400">0</div>
                <div className="text-xs text-gray-400">Robot Uprisings</div>
              </div>
            </div>

            {/* Enhanced social links */}
            <div className="flex space-x-4">
              <a href="#" className="group w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a href="#" className="group w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a href="#" className="group w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a href="#" className="group w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300 hover:scale-110">
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
              </a>
            </div>
          </div>

          {/* Products with emojis */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              Our AI Squad
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">📚</span>
                DocumentLM
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">🎯</span>
                FineTuning Platform
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">🔍</span>
                AI Browser Agent
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">🎙️</span>
                Voice AI Agent
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">📖</span>
                API Documentation
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">💰</span>
                Pricing (It's Fair)
              </a></li>
            </ul>
          </div>

          {/* Company with personality */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center">
              <Heart className="w-5 h-5 mr-2 text-red-400" />
              The Human Side
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">🤖</span>
                About Rhobots
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">🚀</span>
                Careers (We're Hiring!)
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">🧠</span>
                Research
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">✍️</span>
                Blog
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">📰</span>
                Press
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">💬</span>
                Contact Us
              </a></li>
            </ul>
          </div>
        </div>

        {/* Enhanced contact info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center">
              <Coffee className="w-5 h-5 mr-2 text-amber-400" />
              Let's Chat Over Digital Coffee
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center text-gray-400 bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
              <MapPin className="w-5 h-5 mr-3 text-blue-400" />
              <span>🌍 Worldwide (Remote-First)</span>
            </div>
            <div className="flex items-center justify-center text-gray-400 bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
              <Mail className="w-5 h-5 mr-3 text-blue-400" />
              <span>tech@rhobots.ai</span>
            </div>
            <div className="flex items-center justify-center text-gray-400 bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
              <Phone className="w-5 h-5 mr-3 text-blue-400" />
              <span>+91 (704) 200-8497</span>
            </div>
          </div>
        </div>

        {/* Enhanced bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            <span>© 2025 Rhobots. Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
            <span>and lots of</span>
            <Coffee className="w-4 h-4 mx-1 text-amber-400" />
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline">Security</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
