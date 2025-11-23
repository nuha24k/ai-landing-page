import { Spotlight } from '../ui/spotlight-new';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative min-h-[80vh] w-full py-24 overflow-hidden bg-black">
      {/* Spotlight Background */}
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(280, 100%, 85%, .12) 0, hsla(280, 100%, 55%, .04) 50%, hsla(280, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 85%, .08) 0, hsla(280, 100%, 55%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 85%, .06) 0, hsla(280, 100%, 45%, .04) 80%, transparent 100%)"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">Start Your Free Trial Today</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Make Smarter
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Business Decisions?
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Join thousands of forward-thinking businesses leveraging AI to drive 
          strategic decisions, boost collaboration, and unlock unprecedented growth.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2 shadow-2xl shadow-purple-500/50">
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 bg-white/10 border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm">
            Schedule a Demo
          </button>
        </div>

        {/* Additional Info */}
        <p className="mt-8 text-sm text-white/50">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
