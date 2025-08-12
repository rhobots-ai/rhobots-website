import { BarChart3, Coffee, FileText, Github, Heart, Linkedin, Mail, PhoneCall, Wrench, XIcon, Zap } from 'lucide-react';
import BrandLogo from './BrandLogo';

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
            <BrandLogo variant="sm" align="start" className="mb-6" />
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
              <a href="https://x.com/rhobotsai" target="_blank" className="group w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <XIcon className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a href="https://www.linkedin.com/company/rhobotsai/" target="_blank" className="group w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a href="https://github.com/rhobots-ai" target="_blank" className="group w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a href="mailto:tech@rhobots.ai" className="group w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300 hover:scale-110">
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
                <Wrench className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-400 group-hover:animate-bounce" />
                Studio
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <FileText className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-400 group-hover:animate-bounce" />
                Extract
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <BarChart3 className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-400 group-hover:animate-bounce" />
                Sage
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <PhoneCall className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-400 group-hover:animate-bounce" />
                Pulse
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
              {/* <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
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
              </a></li> */}
              <li><a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">💬</span>
                Contact Us
              </a></li>
            </ul>
          </div>
        </div>

        {/* Enhanced bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
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
