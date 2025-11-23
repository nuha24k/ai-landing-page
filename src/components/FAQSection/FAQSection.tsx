import { Spotlight } from '../ui/spotlight-new';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What does AI do in a platform such?',
      answer: 'Our AI analyzes your business data in real-time to provide actionable insights, predict trends, identify risks, and recommend strategic decisions. It continuously learns from your data to improve accuracy and relevance.',
    },
    {
      question: 'What is the platform for?',
      answer: 'Our platform is designed to help businesses make data-driven decisions through AI-powered analytics, team collaboration tools, risk management, and performance tracking. It is ideal for companies looking to optimize operations and drive growth.',
    },
    {
      question: 'Is it easy to integrate with existing tools?',
      answer: 'Yes! Our platform integrates seamlessly with popular tools like Slack, Microsoft Teams, Google Workspace, Salesforce, and more. We provide APIs and webhooks for custom integrations as well.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR, SOC 2, and ISO 27001 standards. Your data is stored securely and never shared with third parties.',
    },
    {
      question: 'How much does it cost?',
      answer: 'We offer flexible pricing plans starting from $49/month for small teams to custom enterprise plans. All plans include a 14-day free trial with no credit card required.',
    },
    {
      question: 'Can I try it for free?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can cancel anytime during the trial period.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Spotlight Background */}
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(160, 100%, 85%, .08) 0, hsla(160, 100%, 55%, .02) 50%, hsla(160, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(160, 100%, 85%, .06) 0, hsla(160, 100%, 55%, .02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(160, 100%, 85%, .04) 0, hsla(160, 100%, 45%, .02) 80%, transparent 100%)"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm text-emerald-600 dark:text-emerald-400">❓ Got Questions?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70">
            Everything you need to know about our platform
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-black dark:text-white pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-black/50 dark:text-white/50 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black/50 dark:text-white/50 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 text-black/70 dark:text-white/70 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-black/60 dark:text-white/60">
            Still have questions?{' '}
            <a href="#contact" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
