
import React from 'react';
import { Zap, Heart, Shield, TrendingUp } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Results</h2>
        <h3 className="text-4xl lg:text-6xl font-black text-white mb-16 uppercase">Feel Great Every Day.</h3>

        <div className="grid md:grid-cols-4 gap-12">
          {[
            { icon: <Zap size={32} />, title: "More Energy", desc: "Start your day with a boost." },
            { icon: <TrendingUp size={32} />, title: "Real Strength", desc: "Build muscle and tone up." },
            { icon: <Heart size={32} />, title: "Healthy Heart", desc: "Better cardio, easier life." },
            { icon: <Shield size={32} />, title: "Strong Body", desc: "Protect yourself from injury." }
          ].map((item, i) => (
            <div key={i} className="reveal opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-emerald-500 mb-6 flex justify-center">
                <div className="p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 reveal opacity-0 translate-y-10 transition-all duration-700">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" 
            alt="Fit Woman" 
            className="w-full h-80 object-cover rounded-[40px] border border-slate-800"
          />
          <img 
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800" 
            alt="Fit Man" 
            className="w-full h-80 object-cover rounded-[40px] border border-slate-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
