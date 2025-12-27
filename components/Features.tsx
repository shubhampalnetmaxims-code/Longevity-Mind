
import React from 'react';
import { Play, PieChart, FileText, Footprints } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "Gym Plans",
      desc: "Easy-to-follow videos of real trainers showing you the right way to move."
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Food Tracker",
      desc: "Log your meals in seconds and keep track of your daily calories."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Body Stats",
      desc: "Check your progress with simple charts for muscle and fat levels."
    },
    {
      icon: <Footprints className="w-6 h-6" />,
      title: "Step Tracker",
      desc: "See how much you walk and stay active every day without effort."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm mb-4">What you get</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-none">EVERYTHING <br />YOU NEED.</h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                    {f.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden border-8 border-slate-900 shadow-2xl">
                {/* Fixed Image Link */}
                <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800" alt="Active Lifestyle" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border border-white/10 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-black text-slate-950">9.5</div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest">Daily Score</div>
                    <div className="text-[10px] text-emerald-500 font-bold">Doing Great!</div>
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

export default Features;
