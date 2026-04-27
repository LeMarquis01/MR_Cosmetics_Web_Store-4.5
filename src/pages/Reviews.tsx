import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';

const reviews = [
  {
    name: 'Elena R.',
    location: 'London, UK',
    rating: 5,
    text: 'The Royal Forest Serum is unlike any other. It feels like a dewy morning walk in the forest on my face.',
    date: 'April 20, 2026'
  },
  {
    name: 'Marcus K.',
    location: 'Kampala, Uganda',
    rating: 5,
    text: 'Authentic Small-batch quality that you can actually feel. The scent of the Gold Vein oil is divine.',
    date: 'April 18, 2026'
  },
  {
    name: 'Sophia L.',
    location: 'Paris, FR',
    rating: 5,
    text: 'The packaging, the consistency, the result—everything about MR Cosmetics screams luxury and integrity.',
    date: 'April 15, 2026'
  },
  {
    name: 'Sarah M.',
    location: 'Kampala',
    rating: 5,
    text: 'The Fern Serum is absolute magic. My skin has never felt this hydrated and glowing. It is like a forest spa in a bottle.',
    date: 'March 15, 2026'
  },
  {
    name: 'James K.',
    location: 'Mombasa',
    rating: 5,
    text: 'I was skeptical about artisanal oils, but the Golden Vein Discovery set changed my mind. The quality is world-class.',
    date: 'April 2, 2026'
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-brand-cream/30">
      <section className="py-24 px-4 text-center space-y-6">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-gold uppercase text-xs font-bold tracking-[0.5em]"
        >
          Community Voices
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl serif text-brand-forest italic"
        >
          Customer Reviews
        </motion.h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white rounded-[40px] shadow-sm border border-brand-forest/5 flex flex-col space-y-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < review.rating ? 'fill-brand-gold text-brand-gold' : 'text-gray-200'} />
              ))}
            </div>
            <Quote className="text-brand-gold opacity-20" size={40} />
            <p className="text-brand-forest/70 font-light leading-relaxed flex-1 italic">
              "{review.text}"
            </p>
            <div className="pt-6 border-t border-brand-forest/5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-brand-forest uppercase">{review.name}</p>
                <p className="text-[10px] text-brand-gold uppercase font-bold tracking-widest">{review.location}</p>
              </div>
              <p className="text-[10px] text-brand-forest/30 font-medium">{review.date}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
