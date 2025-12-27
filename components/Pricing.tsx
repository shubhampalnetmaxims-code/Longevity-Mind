
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "1 Month",
      price: "24",
      features: ["All Gym Plans", "Food Tracking", "Step Counter", "Email Help"],
      cta: "Join Now",
      pop: false,
      period: "/month"
    },
    {
      name: "1 Year",
      price: "12",
      features: ["Best Value", "Everything Included", "Progress Reports", "Priority Support"],
      cta: "Save Most",
      pop: true,
      period: "/month"
    },
    {
      name: "3 Months",
      price: "18",
      features: ["All Gym Plans", "Food Tracking", "Progress Tracking", "Standard Help"],
      cta: "Start Now",
      pop: false,
      period: "/month"
    }
  ];

  return (
    <section id="pricing" className="pt-32 pb-24 bg-slate-950 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Simple Plans</h2>
          <h3 className="text-4xl lg:text-6xl font-black text-white mb-8">Pick Your Goal</h3>
          <p className="text-slate-400 max-w-xl mx-auto font-medium">No hidden fees. Cancel anytime you want.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`reveal opacity-0 translate-y-10 transition-all duration-700 glass p-10 rounded-[40px] border relative ${p.pop ? 'border-emerald-500 ring-2 ring-emerald-500/20 scale-105 z-10' : 'border-slate-800'}`}>
              {p.pop && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-4 py-1 rounded-full">Most Popular</div>}
              <h4 className="text-xl font-bold mb-6 uppercase tracking-widest">{p.name}</h4>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black">€</span>
                <span className="text-6xl font-black">{p.price}</span>
                <span className="text-slate-500 ml-1">{p.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center text-sm text-slate-300 font-medium">
                    <Check className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`block w-full py-4 rounded-2xl font-black uppercase text-center transition-all ${p.pop ? 'bg-emerald-500 text-slate-950' : 'glass hover:bg-white/10'}`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;