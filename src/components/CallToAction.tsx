import React, { useState, useEffect } from 'react';
import { Calendar, Zap, ArrowRight, Coffee, Rocket, Heart, Star } from 'lucide-react';

const CallToAction = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messages = [
    "Your AI dream team awaits! ✨",
    "Ready to make your workflow magical? 🪄",
    "Let's build something amazing together! 🚀",
    "Time to give your team superpowers! ⚡"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-cyan-300/20 rounded-full blur-lg animate-pulse delay-2000"></div>
      
      {/* Floating message bubble */}
      <div className="absolute top-20 right-20 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 text-white animate-bounce delay-1000">
        <div className="flex items-center space-x-2">
          <Rocket className="w-5 h-5 text-yellow-400" />
          <span className="text-sm transition-all duration-500">{messages[currentMessage]}</span>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Give Your Team
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
              AI Superpowers?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the Fortune 500 companies who've discovered that AI doesn't have to be scary, complicated, or compliance-nightmare-inducing. 
            <span className="text-yellow-300 font-semibold"> We promise it'll be more fun than your last software implementation.</span>
          </p>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center relative overflow-hidden">
              <Calendar className="mr-3 w-7 h-7 group-hover:animate-bounce" />
              <span className="relative z-10">Let's Talk AI Magic</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Enhanced value props */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { 
                icon: Heart, 
                title: 'Free', 
                subtitle: 'Initial Consultation', 
                description: 'No strings attached',
                gradient: 'from-red-400 to-pink-400'
              },
              { 
                icon: Zap, 
                title: '30 Days', 
                subtitle: 'Risk-Free Trial', 
                description: 'Long enough to fall in love with AI',
                gradient: 'from-yellow-400 to-orange-400'
              },
              { 
                icon: Rocket, 
                title: '24/7', 
                subtitle: 'Expert Support', 
                description: 'We never sleep',
                gradient: 'from-cyan-400 to-blue-400'
              }
            ].map((prop, index) => {
              const Icon = prop.icon;
              return (
                <div key={prop.title} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${prop.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{prop.title}</div>
                    <div className="text-blue-100 font-semibold mb-2">{prop.subtitle}</div>
                    <div className="text-sm text-blue-200">{prop.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced social proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">What Our Humans Say</h3>
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-300 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              <blockquote className="text-lg text-blue-100 italic mb-4">
                "I was skeptical about AI, but Rhobots made it so easy even my cat could probably use it. 
                (She's very smart, but still.)"
              </blockquote>
              <cite className="text-sm text-blue-200">
                — Sarah Chen, VP of Operations, TechCorp Industries
              </cite>
            </div>
            
            <div className="grid grid-cols-3 gap-6 text-center border-t border-white/20 pt-6">
              <div>
                <div className="text-2xl font-bold text-yellow-300">4.9/5</div>
                <div className="text-xs text-blue-200">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">500+</div>
                <div className="text-xs text-blue-200">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-300">0</div>
                <div className="text-xs text-blue-200">Regrets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
