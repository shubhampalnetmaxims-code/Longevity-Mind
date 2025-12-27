
import React from 'react';
import { Dumbbell, Utensils, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm mb-4">The App</h2>
          <h3 className="text-4xl lg:text-6xl font-black text-white">Better Health, Simple.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Dumbbell className="w-8 h-8" />,
              title: "Power Up",
              desc: "Quick, effective workouts for any fitness level."
            },
            {
              icon: <Utensils className="w-8 h-8" />,
              title: "Eat Well",
              desc: "Easy meal tracking to help you hit your goals."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Move More",
              desc: "Keep track of your steps and stay active every day."
            }
          ].map((item, i) => (
            <div key={i} className="reveal opacity-0 translate-y-10 transition-all duration-700 glass p-10 rounded-[40px] border border-slate-800 text-center hover:bg-white/5 transition-all">
              <div className="inline-flex p-5 bg-emerald-500 text-slate-950 rounded-[24px] mb-8 shadow-lg shadow-emerald-500/20">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h4>
              <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
