import { Spotlight } from '../ui/spotlight-new';
import { Target, Users, AlertTriangle, TrendingUp } from 'lucide-react';

export default function AboutSection() {
    const features = [
        {
            icon: Target,
            title: 'Strategic Planning',
            description: 'Gain strategic insights for long-term planning and execution. Our platform helps you formulate robust strategies backed by data and cutting-edge analytics.',
        },
        {
            icon: Users,
            title: 'Team Collaboration',
            description: 'Foster real-time collaboration across teams. Share insights, track progress, and ensure all stakeholders stay aligned for better outcomes.',
        },
        {
            icon: AlertTriangle,
            title: 'Risk Management',
            description: 'Identify, assess, and mitigate risks proactively with AI-powered tools. Stay ahead of challenges and protect your business from potential threats.',
        },
        {
            icon: TrendingUp,
            title: 'Performance Tracking',
            description: 'Monitor your business performance in real time with precision dashboards. Gain insights into key metrics and optimize your operations continuously.',
        },
    ];

    return (
        <section className="relative min-h-screen w-full py-24 overflow-hidden bg-white dark:bg-black">
            {/* Spotlight Background */}
            <Spotlight
                gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 100%, 85%, .08) 0, hsla(270, 100%, 55%, .02) 50%, hsla(270, 100%, 45%, 0) 80%)"
                gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 85%, .06) 0, hsla(270, 100%, 55%, .02) 80%, transparent 100%)"
                gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 85%, .04) 0, hsla(270, 100%, 45%, .02) 80%, transparent 100%)"
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
                        <span className="text-sm text-purple-600 dark:text-purple-400">✨ Trusted by Thousands of Businesses</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
                        Smarter Solutions for
                        <br />
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Every Business Decision
                        </span>
                    </h2>
                    <p className="text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto">
                        Our AI-powered insights help you navigate complex business decisions with ease.
                        Make data-driven choices that propel your business forward.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-black/70 dark:text-white/70 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
