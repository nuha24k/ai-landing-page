import { Spotlight } from '../ui/spotlight-new';
import { Zap, LineChart, Users2, BarChart3, Rocket, Lock } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Smart Discovery',
      description: 'Unlock actionable insights and uncover hidden trends in your data that drive smarter business outcomes.',
    },
    {
      icon: LineChart,
      title: 'AI-Driven Collaboration',
      description: 'Foster cross-team alignment with intelligent collaboration tools and real-time insights sharing.',
    },
    {
      icon: Users2,
      title: 'Team Management',
      description: 'Identify potential risks and analyze strategic data to keep your business and team on the right track.',
    },
    {
      icon: BarChart3,
      title: 'Automate Growth',
      description: 'Streamline operations with AI automation and intelligent workflows to focus on high-impact activities.',
    },
    {
      icon: Rocket,
      title: 'Enhance Productivity',
      description: 'Scale your team efficiency with powerful tools and optimize resource allocation for better performance.',
    },
    {
      icon: Lock,
      title: 'Optimize Performance',
      description: 'Track key metrics in real-time with comprehensive dashboards and continuously improve business outcomes.',
    },
  ];

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden bg-white dark:bg-black">
      {/* Spotlight Background */}
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(180, 100%, 85%, .08) 0, hsla(180, 100%, 55%, .02) 50%, hsla(180, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(180, 100%, 85%, .06) 0, hsla(180, 100%, 55%, .02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(180, 100%, 85%, .04) 0, hsla(180, 100%, 45%, .02) 80%, transparent 100%)"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm text-cyan-600 dark:text-cyan-400">🎯 Powerful Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
            Maximize Potential and
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Drive Business Success
            </span>
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto">
            Streamline operations, improve collaboration, enhance productivity and make 
            smarter data-driven decisions with our suite of cutting-edge features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
