
import React from 'react';
import { Moon, Coffee, Brain, Sun } from 'lucide-react';

const LongevityPillars: React.FC = () => {
  const pillars = [
    {
      icon: <Moon className="w-8 h-8 text-indigo-400" />,
      title: "Optimized Sleep",
      desc: "7-9 hours of quality sleep is the foundation of all repair and recovery."
    },
    {
      icon: <Coffee className="w-8 h-8 text-amber-400" />,
      title: "Nutrient Density",
      desc: "Feeding your cells what they need to thrive, not just satisfy hunger."
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      title: "Mindful Stress",
      desc: "Managing your mental environment to prevent biological aging."
    },
    {
      icon: <Sun className="w-8 h-8 text-orange-400" />,
      title: "Vitamin D",
      desc: "The essential pro-hormone for immunity and bone longevity."
    }
  ];

  return (
    <section className="py-24 bg-slate-900/20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Foundations</h2>
        <h3 className="text-4xl lg:text-6xl font-black text-white mb-16 uppercase">THE PILLARS OF LIFE.</h3>

        <div className="grid md:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="reveal opacity-0 translate-y-10 transition-all duration-700 glass p-8 rounded-[40px] border border-slate-800 hover:bg-white/5 transition-all text-center">
              <div className="inline-flex p-4 bg-slate-800/50 rounded-2xl mb-6">
                {pillar.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{pillar.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 p-12 glass rounded-[56px] border border-slate-800 flex flex-col items-center justify-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <h4 className="text-2xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tighter max-w-2xl mx-auto">
            Ready to start your journey to 100?
          </h4>
          <p className="text-slate-400 mb-10 text-lg font-medium">We provide the tools. You provide the intent.</p>
          <a href="#/pricing" className="px-12 py-5 bg-white text-slate-950 rounded-full font-black uppercase tracking-widest text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
            Join the movement
          </a>
        </div>
      </div>
    </section>
  );
};

export default LongevityPillars;
