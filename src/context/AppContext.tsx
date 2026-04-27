import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, User, Order } from '../types';
import { PRODUCTS } from '../data/products';

interface AppContextType {
  products: Product[];
  cart: CartItem[];
  user: User | null;
  orders: Order[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  signIn: (email: string) => void;
  signOut: () => void;
  addLoyaltyPoints: (points: number) => void;
  placeOrder: (order: Omit<Order, 'id' | 'date' | 'status'>) => void;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  // Simulate persistent login for demo
  useEffect(() => {
    const savedUser = {
      id: 'u1',
      name: 'Sarah J.',
      email: 'member@mrcosmetics.co.ug',
      loyaltyPoints: 450,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      addresses: ['Market Street, Kampala, Uganda']
    };
    setUser(savedUser);
  }, []);

  const addToCart = (productId: string, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item => item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { productId, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => item.productId === productId ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  const signIn = (email: string) => {
    setUser({
      id: 'u' + Math.random(),
      name: email.split('@')[0],
      email,
      loyaltyPoints: 0,
      addresses: []
    });
  };

  const signOut = () => setUser(null);

  const addLoyaltyPoints = (points: number) => {
    if (user) {
      setUser({ ...user, loyaltyPoints: user.loyaltyPoints + points });
    }
  };

  const placeOrder = (orderData: Omit<Order, 'id' | 'date' | 'status'>) => {
    const newOrder: Order = {
      ...orderData,
      id: 'ORD-' + Math.floor(Math.random() * 1000000),
      date: new Date().toISOString(),
      status: 'Pending'
    };
    setOrders(prev => [newOrder, ...prev]);
    addLoyaltyPoints(Math.floor(orderData.total));
    clearCart();
  };

  return (
    <AppContext.Provider value={{
      products,
      cart,
      user,
      orders,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      signIn,
      signOut,
      addLoyaltyPoints,
      placeOrder,
      setProducts
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
