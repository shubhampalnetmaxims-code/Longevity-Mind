
import React from 'react';
import { Play, FileText, Footprints, CheckCircle2, Video, Apple, Scale, History, Timer, BarChart3, AppWindow, Activity } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm mb-4">The Toolkit</h2>
          <h3 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">PRECISION <br />ENGINEERING.</h3>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
            Longevity Mind isn't just a tracker—it's a personalized health laboratory. We combine advanced biomechanics, nutrition science, and real-time biometric feedback.
          </p>
        </div>

        {/* Feature 1: Gym Plans */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="relative">
            <div className="aspect-square rounded-[48px] overflow-hidden border-8 border-slate-900 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" 
                alt="Strength Training" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-8 left-8 p-6 glass rounded-2xl border border-white/10 flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Play className="text-slate-950 w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-white font-black uppercase text-xs tracking-widest">Live Coaching</div>
                  <div className="text-emerald-400 text-[10px] font-bold">Session Control Active</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex p-3 bg-blue-500/10 rounded-2xl mb-6">
              <Video className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Adaptive Gym Architecture</h4>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
              Take total command of your training. We provide the guidance, but you control the flow.
            </p>
            
            <div className="space-y-6 mt-10">
              {[
                {
                  title: "Video Tutorials",
                  desc: "High-definition, professional exercise demonstrations for every movement to ensure perfect form and safety."
                },
                {
                  title: "Control over breaks, reps and sets",
                  desc: "Fully customizable session parameters. Adjust your recovery time and volume on the fly based on how you feel."
                },
                {
                  title: "Track history of reps",
                  desc: "Detailed historical logs of every lift you've ever performed, allowing for data-driven progressive overload."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 group">
                  <div className="mt-1 shrink-0 bg-emerald-500/10 p-1.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white uppercase tracking-tighter mb-1 group-hover:text-emerald-400 transition-colors">{item.title}</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 2: Nutrition */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="order-2 lg:order-1">
            <div className="inline-flex p-3 bg-emerald-500/10 rounded-2xl mb-6">
              <Apple className="w-8 h-8 text-emerald-500" />
            </div>
            <h4 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Track Calories Of Your Diet</h4>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
              Fuel your performance with precision monitoring of exactly what goes into your body.
            </p>
            
            <div className="space-y-6 mt-10">
              {[
                {
                  title: "Log daily food in the app",
                  desc: "Quickly scan or search our extensive database to record your meals and snacks throughout the day."
                },
                {
                  title: "Check the calories history",
                  desc: "Visualize your intake patterns over weeks and months to identify trends and stay consistent with your goals."
                },
                {
                  title: "Track micro nutrition fats carbs and protein as well",
                  desc: "Get a complete breakdown of your macronutrients to ensure your body is receiving the optimal balance of fuel."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 group">
                  <div className="mt-1 shrink-0 bg-emerald-500/10 p-1.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white uppercase tracking-tighter mb-1 group-hover:text-emerald-400 transition-colors">{item.title}</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-[48px] overflow-hidden border-8 border-slate-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" 
                alt="Healthy Meal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Feature 3: Steps & Reports */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden border-8 border-slate-900 shadow-2xl bg-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" 
                alt="Body Analysis" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-slate-950/20">
                 <Scale className="w-20 h-20 text-emerald-500 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                 <h5 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">STEPS & REPORTS</h5>
                 <p className="text-slate-200 text-sm font-bold">Visualizing internal health markers</p>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex p-3 bg-indigo-500/10 rounded-2xl mb-6">
              <Activity className="w-8 h-8 text-indigo-500" />
            </div>
            <h4 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Step Tracking & InBody Reports</h4>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
              We sync with high-precision hardware to give you a clinical view of your daily movement and body composition.
            </p>
            <div className="space-y-6 mt-10">
              <div className="p-8 glass rounded-[32px] border border-slate-800 group hover:border-blue-500/30 transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <Footprints className="text-emerald-500 w-8 h-8" />
                  <h5 className="text-xl font-bold text-white uppercase tracking-tight">Track your walking on app</h5>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-2">
                  See your daily steps here and compare on weekly basis over graph to track your activity goals.
                </p>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mt-4">
                   <div className="h-full bg-emerald-500 w-[78%]" />
                </div>
              </div>

              <div className="p-8 glass rounded-[32px] border border-slate-800 group hover:border-emerald-500/30 transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <BarChart3 className="text-blue-500 w-8 h-8" />
                  <h5 className="text-xl font-bold text-white uppercase tracking-tight">Report of InBody 970s</h5>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Check your report directly from the app. All the measurement will be shown in app directly, from segmental lean analysis to body fat percentage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final All-in-One Summary */}
        <div className="reveal opacity-0 translate-y-10 transition-all duration-700 bg-emerald-500 rounded-[64px] p-12 lg:p-24 text-slate-950 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <AppWindow className="w-full h-full scale-150 rotate-12" />
          </div>
          <div className="relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] mb-6">Total Integration</h2>
            <h3 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">ONE APP. NO LIMITS.</h3>
            <p className="text-xl lg:text-2xl font-bold mb-12 max-w-3xl mx-auto leading-relaxed">
              All in one place: Workout, Steps, Nutrition and Report in one app. <br />
              <span className="opacity-80">Stop switching between multiple interfaces and unify your results.</span>
            </p>
            <div className="bg-slate-950 text-emerald-500 px-10 py-5 rounded-full inline-block font-black text-xl uppercase tracking-widest shadow-2xl shadow-slate-950/20">
              No need to manage 4 different apps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
