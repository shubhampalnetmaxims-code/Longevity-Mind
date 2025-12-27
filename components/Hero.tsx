
import React from 'react';
import { ArrowRight, Activity, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Activity className="w-4 h-4" />
              <span>Simple. Scientific. Effective.</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              STAY FIT. <br />
              <span className="gradient-text">LIVE LONGER.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
              The only app you need for your fitness journey. Track workouts, plan meals, and watch your body transform with ease.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#pricing" className="group px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full font-black text-lg flex items-center transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-500/20">
                GET STARTED
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#features" className="px-10 py-5 glass text-white rounded-full font-black text-lg hover:bg-white/10 transition-all">
                EXPLORE APP
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-900 flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold text-slate-300">Custom Plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold text-slate-300">Food Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold text-slate-300">Step Counts</span>
              </div>
            </div>
          </div>

          <div className="relative reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600" alt="Active Woman" className="w-full h-72 object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" alt="Healthy Food" className="w-full h-48 object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600" alt="Training Man" className="w-full h-72 object-cover" />
                </div>
                <div className="rounded-3xl border-2 border-emerald-500/50 shadow-2xl p-6 bg-slate-900 text-center">
                  <div className="text-emerald-500 font-black text-4xl mb-1">98%</div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Success Rate</div>
                  <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[98%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
