import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Leaf, Sparkles, Award, ShieldCheck, Mail, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { cn } from '../lib/utils';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const categories = [
    { name: 'Skincare', img: 'https://images.unsplash.com/photo-1556228720-da3e3020668b?auto=format&fit=crop&q=80&w=800', icon: <Leaf size={20} /> },
    { name: 'Haircare', img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800', icon: <Sparkles size={20} /> },
    { name: 'Body', img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800', icon: <ShieldCheck size={20} /> },
  ];

  const featuredProducts = PRODUCTS.slice(0, 8);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden marble-bg min-h-[90vh] flex items-center pt-20 pb-32 px-4 shadow-[inset_0_-20px_40px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 border border-brand-gold/30 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">
              <Sparkles size={12} />
              <span>Est. Kampala 2026</span>
            </div>

            <h1 className="text-6xl md:text-8xl xl:text-9xl serif text-brand-cream font-light leading-tight">
              Natural Beauty <br />
              <span className="italic font-normal text-brand-gold underline decoration-brand-gold/30 underline-offset-8">Wellness</span> <br />
              Found Here
            </h1>

            <p className="text-brand-cream/70 text-lg max-w-md leading-relaxed font-light">
              Experience the convergence of ancient botanical wisdom and modern luxury. MR Cosmetics brings the forest's purity to your vanity.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop" className="px-10 py-5 bg-brand-gold text-brand-forest rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform flex items-center group">
                Shop Collection
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
              <Link to="/loyalty" className="px-10 py-5 border border-brand-cream/30 text-brand-cream rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand-cream hover:text-brand-forest transition-all">
                The Circle
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-2xl aspect-[4/5] lg:aspect-auto lg:h-[650px] overflow-hidden rounded-[60px] border border-brand-gold/30 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                alt="Wellness and Radiance"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/40 to-transparent" />
            </div>
          </motion.div>
        </div>
        
        {/* Slogan Band */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-gold py-3 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-slow space-x-12 px-6">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-[10px] text-brand-forest font-bold uppercase tracking-[0.3em] flex items-center">
                <Leaf size={14} className="mr-2" /> NATURAL BEAUTY AND WELLNESS • ARTISANAL • RADIANCE FOUND
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Bento */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16 space-y-4">
          <p className="text-brand-gold uppercase text-[10px] font-bold tracking-[0.3em]">Curation</p>
          <h2 className="text-4xl md:text-5xl serif text-brand-forest italic">Our Natural Realms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">
          {categories.map((cat, idx) => (
            <Link 
              to={`/shop?cat=${cat.name}`} 
              key={idx}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img 
                src={cat.img} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                alt={cat.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-forest/20 group-hover:bg-brand-forest/40 transition-colors" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="text-white">
                  <p className="text-[8px] uppercase tracking-widest font-bold opacity-70 mb-1">Explore</p>
                  <h3 className="text-xl serif italic">{cat.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-brand-gold group-hover:border-brand-gold transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Treasures */}
      <section className="py-32 marble-bg/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <p className="text-brand-gold uppercase text-[10px] font-bold tracking-[0.4em]">Selection</p>
            <h2 className="text-4xl md:text-6xl serif text-brand-forest font-light">Featured <span className="italic">Treasures</span></h2>
            <div className="w-24 h-[1px] bg-brand-gold/30 mx-auto mt-8" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/shop" className="group inline-flex items-center space-x-3 text-brand-forest hover:text-brand-gold transition-colors">
              <span className="text-xs font-bold uppercase tracking-widest">View Entire Vault</span>
              <div className="w-10 h-10 rounded-full border border-brand-forest/10 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
