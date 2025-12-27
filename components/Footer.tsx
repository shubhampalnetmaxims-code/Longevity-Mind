
import React from 'react';
import { Activity, Instagram, Twitter, Facebook, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-emerald-500 p-2 rounded-xl">
                <Activity className="w-6 h-6 text-slate-950" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                LONGEVITY<span className="text-emerald-500">MIND</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-10 font-medium">
              We help you build healthy habits that last. Track your gym, food, and steps in one simple, powerful app.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Youtube, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 glass rounded-xl hover:bg-emerald-500 hover:text-slate-950 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-8">Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About', href: '#about' },
                { name: 'Features', href: '#features' },
                { name: 'Benefits', href: '#benefits' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-emerald-500 font-bold transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-8">Support</h4>
            <ul className="space-y-4">
              {[
                { name: 'Pricing', href: '#pricing' },
                { name: 'Help Center', href: '#contact' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Use', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-emerald-500 font-bold transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs font-black uppercase tracking-widest text-slate-600">
          <p>© {new Date().getFullYear()} LONGEVITY MIND. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
