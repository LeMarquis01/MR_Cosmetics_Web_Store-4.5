import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Mail, Lock, User as UserIcon, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const { signIn } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
       signIn(formData.email);
       setIsProcessing(false);
       navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-brand-cream">
       <div className="hidden lg:block relative overflow-hidden marble-bg p-20 flex flex-col justify-between text-brand-cream">
          <div className="space-y-4">
             <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-forest font-bold text-3xl serif animate-float">MR</div>
             <h2 className="text-6xl serif italic leading-tight">The Sanctuary <br /> Awaits You</h2>
             <p className="text-brand-cream/60 max-w-sm text-lg font-light leading-relaxed">Join our exclusive circle of botanical enthusiasts and unlock rewards with every ritual purchase.</p>
          </div>
          
          <div className="space-y-8 relative z-10">
             <div className="p-8 bg-brand-cream/5 rounded-[40px] border border-brand-cream/10 backdrop-blur-sm">
                <blockquote className="serif italic text-xl opacity-80 mb-4 font-light">"Purest ingredients I've ever experienced in Kampala. My skin has never looked more radiant."</blockquote>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">— Sarah J., Botanical Member</p>
             </div>
             <div className="flex space-x-6 text-[10px] uppercase font-bold tracking-widest opacity-40">
                <span>Natural Source</span>
                <span>Artisanal Batch</span>
                <span>Pure Radiance</span>
             </div>
          </div>

          {/* Artistic Elements */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 border border-brand-gold/10 rounded-full animate-orbit" />
          <div className="absolute -top-20 -right-20 w-60 h-60 border border-brand-gold/5 rounded-full animate-orbit" style={{ animationDelay: '-5s' }} />
       </div>

       <div className="flex items-center justify-center p-8 md:p-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md space-y-12"
          >
             <div className="text-center lg:text-left space-y-4">
                <div className="lg:hidden mx-auto w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-forest font-bold text-xl serif mb-4">MR</div>
                <h1 className="text-4xl serif italic text-brand-forest">{isLogin ? 'Welcome Back' : 'Create Sanctuary'}</h1>
                <p className="text-brand-forest/60 text-sm">Enter your credentials to access your botanical collection.</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-2"
                    >
                       <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Full Name</label>
                       <div className="relative">
                          <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-forest/20" size={18} />
                          <input 
                            type="text" 
                            className="w-full bg-white border border-brand-forest/10 rounded-2xl p-4 pl-12 text-sm focus:border-brand-gold outline-none" 
                            placeholder="Your Name"
                            required
                          />
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Email Address</label>
                   <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-forest/20" size={18} />
                      <input 
                        type="email" 
                        className="w-full bg-white border border-brand-forest/10 rounded-2xl p-4 pl-12 text-sm focus:border-brand-gold outline-none" 
                        placeholder="studio@radiant.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Secret PIN / Password</label>
                   <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-forest/20" size={18} />
                      <input 
                        type="password" 
                        className="w-full bg-white border border-brand-forest/10 rounded-2xl p-4 pl-12 text-sm focus:border-brand-gold outline-none" 
                        placeholder="••••••••"
                        required
                      />
                   </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full h-16 bg-brand-forest marble-texture text-brand-cream rounded-full font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center space-x-3 hover:bg-brand-gold hover:text-brand-forest transition-all shadow-xl disabled:opacity-50"
                >
                   {isProcessing ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                   <span>{isLogin ? 'Enter The Sanctuary' : 'Initiate Membership'}</span>
                </button>
             </form>

             <div className="space-y-8 pt-8">
                <p className="text-center text-xs text-brand-forest/60">
                   {isLogin ? "Don't have a sanctuary yet?" : "Already a botanical member?"}{' '}
                   <button 
                     onClick={() => setIsLogin(!isLogin)} 
                     className="text-brand-gold font-bold underline underline-offset-4 decoration-brand-gold/30"
                   >
                      {isLogin ? 'Initiate Member' : 'Sign In'}
                   </button>
                </p>
             </div>
          </motion.div>
       </div>
    </div>
  );
}
