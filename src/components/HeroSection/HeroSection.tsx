import { ArrowRight } from 'lucide-react';
import Orb from '../Orb/Orb';
import TextType from '../TextType';
import StarBorder from '../StarBorder/StarBorder';
import './HeroSection.css';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Orb Background */}
            <div className="absolute inset-0 w-full h-full opacity-50">
                <Orb hue={260} hoverIntensity={0.4} rotateOnHover={true} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                {/* Small Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-in">
                    <span className="text-sm text-white/80">🚀 AI-Powered Analytics Platform - New Era</span>
                </div>

                {/* Main Heading with Typing Animation */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    <TextType
                        text={[
                            "Make Smarter Decisions",
                        ]}
                        as="span"
                        typingSpeed={80}
                        deletingSpeed={50}
                        pauseDuration={2000}
                        loop={false}
                        showCursor={true}
                        cursorCharacter="_"
                        cursorClassName="text-white"
                        startOnVisible={true}
                        className="inline-block"
                    />
                    <br />
                    <span className="text-white bg-clip-text text-transparent">
                        with AI-Powered Insights
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-6 leading-relaxed animate-fade-in-up">
                    Harness the power of AI and data analytics to unlock insights that
                    drive strategic decisions, improve collaboration, and achieve
                    unparalleled business success.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
                    <StarBorder
                        as="button"
                        color="rgb(255, 255, 255)"
                        speed="4s"
                        thickness={2}
                        className="group hover:scale-105 transition-transform"
                    >
                        <div className="flex items-center gap-2 px-4 py-1">
                            <span className="font-semibold text-lg">Get Started Today</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </StarBorder>
                    <StarBorder
                        as="button"
                        color="rgb(255, 255, 255)"
                        speed="5s"
                        thickness={2}
                        className="hover:scale-105 transition-transform"
                    >
                        <div className="px-4 py-1">
                            <span className="font-semibold text-lg">Watch Demo</span>
                        </div>
                    </StarBorder>
                </div>
            </div>
        </section>
    );
}
