import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LogIn, ArrowRight, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, just redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream/30 px-4 py-32">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="marble-texture w-full h-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[60px] p-12 shadow-2xl relative z-10 border border-brand-forest/5"
      >
        <div className="text-center space-y-4 mb-12">
          <div className="w-16 h-16 bg-brand-forest rounded-full flex items-center justify-center text-brand-gold mx-auto shadow-lg mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl serif text-brand-forest italic">Welcome Back</h1>
          <p className="text-brand-forest/50 text-sm font-light">Access your artisanal wellness portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold ml-4">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="artisan@mrcosmetics.co.ug"
              className="w-full px-8 py-4 rounded-full bg-brand-cream/50 border-none focus:ring-2 focus:ring-brand-gold transition-all text-sm"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold ml-4">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-8 py-4 rounded-full bg-brand-cream/50 border-none focus:ring-2 focus:ring-brand-gold transition-all text-sm"
            />
          </div>

          <div className="flex justify-end pr-4">
            <a href="#" className="text-[10px] uppercase font-bold text-brand-forest/40 hover:text-brand-gold transition-colors">Forgot Password?</a>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-brand-forest text-white rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-2 hover:bg-brand-forest/90 transition-all shadow-xl"
          >
            <span>Enter Studio</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-brand-forest/50 font-light">
            New to the forest? <Link to="/auth" className="text-brand-gold font-bold hover:underline">Join the collective</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
