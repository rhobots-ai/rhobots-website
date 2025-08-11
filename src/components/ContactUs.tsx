import { Mail, Phone, MessageSquare, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Let's Talk</h2>
          <p className="text-lg text-gray-300">
            Tell us about your use case. We'll respond within 1 business day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a
            href="mailto:tech@rhobots.ai"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-lg">Email</div>
              <div className="text-gray-300">tech@rhobots.ai</div>
              <div className="text-gray-400 text-sm mt-1">Fastest way to reach the team</div>
            </div>
          </a>

          <a
            href="tel:+917042008497"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-lg">Phone</div>
              <div className="text-gray-300">+91 (704) 200-8497</div>
              <div className="text-gray-400 text-sm mt-1">Mon–Fri, 9am–6pm IST</div>
            </div>
          </a>

          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-pink-500 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-lg">Slack/Teams</div>
              <div className="text-gray-300">Ask for an invite in your email</div>
              <div className="text-gray-400 text-sm mt-1">We collaborate where you already work</div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 text-center text-gray-400 flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4 text-blue-400" />
          Worldwide (Remote-first)
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


