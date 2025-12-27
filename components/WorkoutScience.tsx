
import React from 'react';
import CalorieChart from './Charts/CalorieChart';
import { Dumbbell, Target, History } from 'lucide-react';

const WorkoutScience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-sm mb-4">The Training</h2>
          <h3 className="text-4xl lg:text-6xl font-black text-white uppercase">Consistency > Intensity</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 reveal opacity-0 translate-y-10 transition-all duration-700">
            <div className="glass p-10 rounded-[48px] border border-slate-800 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <History className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tighter">The Compound Effect</h4>
                </div>
                
                <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                  Studies show that 3 short workouts per week consistently over a year is 5x more beneficial than a month of daily intense training. Routine builds muscle memory, increases mitochondrial density, and stabilizes mood.
                </p>

                <div className="mt-auto h-64 w-full">
                  <CalorieChart />
                  <div className="text-center mt-4">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Steady metabolic burn over a consistent week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="glass p-10 rounded-[40px] border border-slate-800 hover:border-blue-500/50 transition-all group">
              <Dumbbell className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Sarcopenia Prevention</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                As we age, we lose muscle mass. Consistent resistance training is the ONLY way to halt and reverse this decline, keeping your joints supported and your metabolism high.
              </p>
            </div>
            
            <div className="glass p-10 rounded-[40px] border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <Target className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Neurogenesis</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Working out releases BDNF (Brain-Derived Neurotrophic Factor). It's essentially "Miracle-Gro" for your brain, building new neurons and protecting against cognitive decline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutScience;
