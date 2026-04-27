import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Leaf, Zap } from 'lucide-react';

const pillars = [
  {
    title: 'Forest Crafted',
    desc: 'Each drop starts in the wild, sustainably harvested from protected forest ecosystems.',
    icon: <Leaf size={40} />
  },
  {
    title: 'Artisanal Science',
    desc: 'We combine ancient botanical wisdom with modern laboratory extraction techniques.',
    icon: <Zap size={40} />
  },
  {
    title: 'Radical Honesty',
    desc: 'Pure ingredients. Full transparency. Zero synthetic fillers or harmful chemicals.',
    icon: <ShieldCheck size={40} />
  },
  {
    title: 'Ethical Soul',
    desc: 'Beyond beauty, we support local communities and environmental conservation.',
    icon: <Heart size={40} />
  }
];

export default function WhyMR() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-4 marble-bg text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 marble-texture" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-gold uppercase text-[10px] font-bold tracking-[0.5em]"
          >
            Our Philosophy
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl serif italic"
          >
            Why MR?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-cream/60 text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            In a world of mass-produced beauty, we choose the path of slow, intentional, and pure alchemy.
          </motion.p>
        </div>
      </section>

      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 group"
            >
              <div className="w-20 h-20 rounded-[30px] bg-brand-cream flex items-center justify-center text-brand-gold shadow-lg group-hover:scale-110 transition-transform shrink-0">
                {pillar.icon}
              </div>
              <div className="space-y-4 pt-2">
                <h3 className="text-3xl serif text-brand-forest">{pillar.title}</h3>
                <p className="text-brand-forest/60 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-brand-cream/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl serif text-brand-forest italic">The Artisan's Promise</h2>
          <div className="aspect-video rounded-[60px] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1556228720-da3e3020668b?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover saturate-[0.8] brightness-75"
              alt="Making process"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-2xl serif italic px-12 leading-relaxed">"We don't just make cosmetics; we capture the essence of the wild for your skin."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
