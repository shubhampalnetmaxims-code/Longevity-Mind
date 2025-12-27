
import React from 'react';
import { Zap, Apple, Footprints, BarChart3, Activity, TrendingUp, ShieldCheck, Heart } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm mb-4">The Impact</h2>
          <h3 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">THE POWER OF <br />UNIFIED DATA.</h3>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
            By connecting your training, diet, and biology, you unlock a superior level of performance and longevity.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {[
            {
              icon: <Zap className="w-10 h-10 text-blue-500" />,
              title: "Workout Mastery",
              desc: "Track every rep and set history. Use HD tutorials to master your form and ensure maximum progress without injury.",
              bg: "bg-blue-500/5"
            },
            {
              icon: <Apple className="w-10 h-10 text-emerald-500" />,
              title: "Nutrition Precision",
              desc: "Deep calorie tracking and macronutrient breakdown (fats, carbs, protein). Log food daily to keep your biology in peak state.",
              bg: "bg-emerald-500/5"
            },
            {
              icon: <Footprints className="w-10 h-10 text-indigo-500" />,
              title: "Walking Wisdom",
              desc: "Monitor your steps daily and compare trends over weekly graphs to maintain metabolic health and cardiovascular baseline.",
              bg: "bg-indigo-500/5"
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-rose-500" />,
              title: "Clinical Reporting",
              desc: "Direct access to your InBody 970s reports. Every biological measurement is synced directly to your pocket.",
              bg: "bg-rose-500/5"
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-cyan-500" />,
              title: "Habit Consistency",
              desc: "A unified dashboard means you don't forget the small things. Consistency is the secret ingredient to long-term health.",
              bg: "bg-cyan-500/5"
            },
            {
              icon: <Heart className="w-10 h-10 text-orange-500" />,
              title: "Functional Longevity",
              desc: "We don't just optimize for the gym; we optimize for a lifetime of movement, clarity, and strength.",
              bg: "bg-orange-500/5"
            }
          ].map((benefit, i) => (
            <div key={i} className="reveal opacity-0 translate-y-10 transition-all duration-700 glass p-10 rounded-[48px] border border-slate-800 hover:border-slate-700 transition-all group flex flex-col h-full">
              <div className={`p-5 rounded-3xl inline-block mb-8 ${benefit.bg} group-hover:scale-110 transition-transform w-fit`}>
                {benefit.icon}
              </div>
              <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{benefit.title}</h4>
              <p className="text-slate-400 leading-relaxed font-medium mb-8 flex-grow">{benefit.desc}</p>
              
              <div className="pt-6 border-t border-white/5">
                <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2 flex items-center">
                   <Activity className="w-3 h-3 mr-2 text-emerald-500" /> Result Driver
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
