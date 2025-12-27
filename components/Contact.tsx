
import React, { useState } from 'react';
import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="pt-32 pb-24 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-[48px] overflow-hidden border">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 lg:p-20 bg-emerald-600 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">Get in Touch</h3>
                <p className="text-emerald-100 text-lg mb-12 max-w-md">
                  Have questions about your fitness journey? Our support team is here to help you live a longer, healthier life.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-emerald-200 text-sm font-semibold uppercase">Email Us</div>
                      <div className="text-lg font-bold">support@longevitymind.app</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-emerald-200 text-sm font-semibold uppercase">Chat with Support</div>
                      <div className="text-lg font-bold">Available Mon-Fri, 9am - 6pm</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-emerald-200 text-sm font-semibold uppercase">HQ Location</div>
                      <div className="text-lg font-bold">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decor */}
              <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12 opacity-10">
                <MessageCircle className="w-96 h-96" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12 lg:p-20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-6 py-4 bg-slate-800 rounded-2xl border border-transparent focus:border-emerald-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-6 py-4 bg-slate-800 rounded-2xl border border-transparent focus:border-emerald-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-6 py-4 bg-slate-800 rounded-2xl border border-transparent focus:border-emerald-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your goals..."
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSent}
                  className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center transition-all ${
                    isSent ? 'bg-emerald-500' : 'bg-emerald-600 hover:bg-emerald-500'
                  }`}
                >
                  {isSent ? 'Message Sent!' : 'Send Message'}
                  {!isSent && <Send className="ml-2 w-5 h-5" />}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;