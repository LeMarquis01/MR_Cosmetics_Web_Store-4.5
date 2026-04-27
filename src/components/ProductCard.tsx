import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useAppContext();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        to={`/product/${product.id}`} 
        className="block overflow-hidden relative rounded-[40px] aspect-[4/5] bg-brand-forest/5 border border-brand-forest/5 shadow-sm group"
      >
        <img 
          src={product.images[0]} 
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            isHovered && product.images[1] ? "opacity-0" : "opacity-100"
          )}
          referrerPolicy="no-referrer"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} alternate`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 hover:scale-105",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            referrerPolicy="no-referrer"
          />
        )}
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-brand-forest/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 space-y-3">
           <button 
             onClick={(e) => {
               e.preventDefault();
               addToCart(product.id);
             }}
             className="w-full py-4 bg-white text-brand-forest rounded-full text-[10px] uppercase font-bold tracking-[0.2em] flex items-center justify-center space-x-2 hover:bg-brand-gold hover:text-brand-forest transition-all shadow-2xl"
           >
             <ShoppingCart size={14} />
             <span>Add to Collection</span>
           </button>
           <div className="flex space-x-2">
             <button className="flex-1 py-3 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-brand-gold hover:text-brand-forest transition-colors">
               <Heart size={14} />
             </button>
             <Link 
              to={`/product/${product.id}`}
              className="flex-1 py-3 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-brand-gold hover:text-brand-forest transition-colors"
             >
               <Eye size={14} />
             </Link>
           </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
           {product.originalPrice && (
             <span className="px-3 py-1 bg-brand-gold text-brand-forest text-[8px] font-bold uppercase tracking-widest rounded-full">Sale</span>
           )}
           {product.stock < 10 && (
             <span className="px-3 py-1 bg-white/90 text-brand-forest text-[8px] font-bold uppercase tracking-widest rounded-full">Low Stock</span>
           )}
        </div>
      </Link>

      <div className="mt-6 text-center">
        <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-1">{product.category}</p>
        <h3 className="serif text-xl text-brand-forest group-hover:text-brand-gold transition-colors italic">{product.name}</h3>
        <div className="flex items-center justify-center space-x-2 mt-2">
          {product.originalPrice ? (
            <>
              <span className="text-brand-forest/40 line-through text-xs">${product.originalPrice}</span>
              <span className="text-brand-forest font-semibold text-sm">${product.price}</span>
            </>
          ) : (
            <span className="text-brand-forest font-semibold text-sm">${product.price}</span>
          )}
        </div>
        <div className="flex items-center justify-center mt-2 space-x-1">
           {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={i < 4 ? "var(--color-brand-gold)" : "none"} className={i < 4 ? "text-brand-gold" : "text-brand-gold/30"} />)}
           <span className="text-[10px] text-brand-forest/40 ml-1">(12)</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
