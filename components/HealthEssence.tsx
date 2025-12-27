
import React from 'react';
import { Heart, ShieldCheck, Zap } from 'lucide-react';

const HealthEssence: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm mb-4">The Philosophy</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-[1.1]">WHY HEALTH <br /><span className="text-emerald-500">IS WEALTH.</span></h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
              Physical fitness isn't just about the mirror; it's the biological insurance for your future self. Modern life has optimized for comfort, but our bodies were built for challenge. Reclaiming your health means reclaiming your time, energy, and freedom.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Heart className="text-rose-500" />, title: "Metabolic Resilience", text: "Better glucose management and hormone balance for long-term vitality." },
                { icon: <ShieldCheck className="text-blue-500" />, title: "Biological Shield", text: "Lower inflammation levels and a stronger immune response." },
                { icon: <Zap className="text-emerald-500" />, title: "Cognitive Clarity", text: "Improved blood flow to the brain, enhancing focus and memory." }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-4 p-6 glass rounded-2xl border border-slate-800/50">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-bold mb-1 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden border-8 border-slate-900 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Mindful Exercise" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl border border-white/10">
                <p className="text-white font-black italic text-xl leading-snug">
                  "The first wealth is health."
                </p>
                <p className="text-emerald-500 font-bold uppercase tracking-widest text-xs mt-2">— Ralph Waldo Emerson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthEssence;
