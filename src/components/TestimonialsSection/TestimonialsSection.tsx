import { Spotlight } from '../ui/spotlight-new';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This platform has transformed the way we approach decision-making. It's like having a strategic advisor on demand 24/7.",
      author: "Sarah Mitchell",
      role: "CEO, TechVision",
      image: "SM",
    },
    {
      quote: "The AI-driven insights have given our team the clarity we needed. We've seen a 35% increase in efficiency and ROI in just 3 months.",
      author: "Michael Chen",
      role: "COO, DataFlow Inc",
      image: "MC",
    },
    {
      quote: "Risk management has never been easier. We can identify and address potential issues before they become problems.",
      author: "Emma Rodriguez",
      role: "CFO, Global Ventures",
      image: "ER",
    },
  ];

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Spotlight Background */}
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(200, 100%, 85%, .08) 0, hsla(200, 100%, 55%, .02) 50%, hsla(200, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(200, 100%, 85%, .06) 0, hsla(200, 100%, 55%, .02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(200, 100%, 85%, .04) 0, hsla(200, 100%, 45%, .02) 80%, transparent 100%)"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm text-blue-600 dark:text-blue-400">💬 Real Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
            What Leaders Are Saying
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto">
            Hear from some of the world's best leaders who are using AI to make 
            smarter, more informed decisions that drive incredible business results for their teams.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm hover:bg-white dark:hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-blue-500/30" />
              </div>

              {/* Quote Text */}
              <p className="text-black/80 dark:text-white/80 mb-8 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-black/60 dark:text-white/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
