
import React from 'react';
import { Star, Shield, Smartphone, Layers } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Layers className="w-8 h-8 text-emerald-500" />,
      title: "All-in-One Solution",
      description: "Replace five apps with one. Fitness, nutrition, steps, and clinical reports in a single dashboard."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: "Premium Mobile UI",
      description: "Fast, elegant, and clutter-free interface designed to reduce friction and improve engagement."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Data Security",
      description: "Your health data is encrypted and secure. We value your privacy as much as your health."
    },
    {
      icon: <Star className="w-8 h-8 text-amber-500" />,
      title: "Longevity-Centric",
      description: "We don't chase trends. We chase years of high-quality life through proven science."
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-emerald-500 font-semibold tracking-wider uppercase mb-3">The Longevity Advantage</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Why Choose Longevity Mind?</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <div 
              key={idx} 
              className="reveal opacity-0 translate-y-10 transition-all duration-700 glass p-8 rounded-3xl border text-center hover:scale-105 transition-transform"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="inline-block p-4 bg-slate-800/50 rounded-2xl mb-6">
                {point.icon}
              </div>
              <h4 className="text-lg font-bold mb-3">{point.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
