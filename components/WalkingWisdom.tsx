
import React from 'react';
import StepChart from './Charts/StepChart';
import { Footprints, Map, Wind } from 'lucide-react';

const WalkingWisdom: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 reveal opacity-0 translate-y-10 transition-all duration-700">
            <div className="relative">
              <div className="glass p-8 rounded-[48px] border border-slate-800 h-80 relative overflow-hidden">
                <StepChart />
                <div className="absolute top-6 left-6 flex items-center space-x-2 px-4 py-2 bg-slate-900/50 rounded-full border border-blue-500/20">
                  <Footprints className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Daily Step Goal Achieved</span>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-[32px] overflow-hidden border-4 border-slate-900 shadow-xl">
                  <img src="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=400" alt="Walking in nature" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-[32px] overflow-hidden border-4 border-slate-900 shadow-xl">
                  <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=400" alt="Morning walk" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Low Intensity</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-[1.1]">THE POWER <br />OF <span className="text-blue-500">THE WALK.</span></h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
              Walking is the most underrated longevity hack. It's low impact, resets the nervous system, and triggers the "active recovery" your body needs after sitting at a desk all day.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex space-x-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight mb-2">Lymphatic Drainage</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Walking moves the fluid that carries waste out of your tissues.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight mb-2">Stress Relief</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Forward motion helps the brain process stress and reduces cortisol.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalkingWisdom;
