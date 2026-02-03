import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { Product, CartItem } from './types';

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, size: string, color: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1, selectedSize: size, selectedColor: color }];
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, size, color);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeItem = (id: number, size: string, color: string) => {
    setCartItems(prevItems =>
      prevItems.filter(
        item => !(item.id === id && item.selectedSize === size && item.selectedColor === color)
      )
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <Features />
      <ProductGrid products={products} onAddToCart={addToCart} />
      <Newsletter />
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}
