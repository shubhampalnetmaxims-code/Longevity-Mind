
import React from 'react';
import { Zap, Apple, Footprints, BarChart3, Activity, Clock, TrendingUp, Moon, Anchor } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm mb-4">The Impact</h2>
          <h3 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">THE POWER OF <br />UNIFIED DATA.</h3>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
            Committing to Longevity Mind means finally seeing the full picture of your health. By connecting your training, diet, and biology, you unlock a superior level of performance.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-32">
          {[
            {
              icon: <Zap className="w-10 h-10 text-blue-500" />,
              title: "Adaptive Training Progress",
              desc: "By tracking every rep and set history, the app ensures you never plateau. Precision workout science leads to consistent muscle growth and structural strength.",
              mechanism: "Ensures Progressive Overload via historical data analysis.",
              bg: "bg-blue-500/5"
            },
            {
              icon: <Apple className="w-10 h-10 text-emerald-500" />,
              title: "Nutritional Mastery",
              desc: "Deep tracking of calories and macronutrients stabilizes your energy levels. No more guessing—know exactly how much protein, fats, and carbs your body needs.",
              mechanism: "Optimizes insulin response and stabilizes metabolic rate.",
              bg: "bg-emerald-500/5"
            },
            {
              icon: <Footprints className="w-10 h-10 text-indigo-500" />,
              title: "Cardiovascular Baseline",
              desc: "Consistent walking tracking improves VO2 Max and lymphatic drainage. Compare your weekly activity graph to maintain a high metabolic baseline.",
              mechanism: "Reduces resting heart rate and lowers systemic cortisol.",
              bg: "bg-indigo-500/5"
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-rose-500" />,
              title: "Clinical Body Composition",
              desc: "Accessing your InBody 970s reports in-app provides absolute clarity on fat loss vs muscle gain. Laboratory-grade data in the palm of your hand.",
              mechanism: "Accurate visceral fat and skeletal muscle tracking.",
              bg: "bg-rose-500/5"
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
                <p className="text-white text-xs font-bold italic">{benefit.mechanism}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Section */}
        <div className="bg-slate-900/40 rounded-[64px] p-12 lg:p-24 border border-slate-800 reveal opacity-0 translate-y-10 transition-all duration-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Clock className="w-96 h-96" />
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-4xl font-black text-white text-center mb-16 uppercase tracking-tight">The Longevity Advantage</h3>
            <p className="text-center text-slate-400 mb-20 max-w-2xl mx-auto text-lg font-medium">
              We focus on the metrics that matter for your future self. It's not just about looking good; it's about staying functional for life.
            </p>
            
            <div className="space-y-16">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="text-emerald-500 font-black text-5xl mb-2">+12%</div>
                  <div className="text-white font-bold uppercase tracking-widest text-xs">Skeletal Integrity</div>
                </div>
                <div className="lg:col-span-2">
                  <h5 className="text-white font-bold mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-emerald-500" />
                    Strength Training Core
                  </h5>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Consistent resistance training through our adaptive plans signals the body to increase bone mineral density, preventing future fragility.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="text-blue-500 font-black text-5xl mb-2">-22%</div>
                  <div className="text-white font-bold uppercase tracking-widest text-xs">Biological Aging</div>
                </div>
                <div className="lg:col-span-2">
                  <h5 className="text-white font-bold mb-3 flex items-center">
                    <Moon className="w-5 h-5 mr-2 text-blue-500" />
                    Nutrition & Recovery
                  </h5>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    By matching your macronutrients to your recovery score, you preserve cellular integrity and keep systemic inflammation at record lows.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="text-indigo-500 font-black text-5xl mb-2">+15y</div>
                  <div className="text-white font-bold uppercase tracking-widest text-xs">Functional Life</div>
                </div>
                <div className="lg:col-span-2">
                  <h5 className="text-white font-bold mb-3 flex items-center">
                    <Anchor className="w-5 h-5 mr-2 text-indigo-500" />
                    Movement Consistency
                  </h5>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Walking 10k steps daily, tracked and graphed for accountability, is the most consistent predictor of a long, healthy healthspan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
