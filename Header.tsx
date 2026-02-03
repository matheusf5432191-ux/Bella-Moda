import { useState } from 'react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

export function Header({ cartItems, onCartClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Bella Moda
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Início
            </a>
            <a href="#produtos" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Produtos
            </a>
            <a href="#novidades" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Novidades
            </a>
            <a href="#contato" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-600 hover:text-pink-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a href="#inicio" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Início
              </a>
              <a href="#produtos" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Produtos
              </a>
              <a href="#novidades" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Novidades
              </a>
              <a href="#contato" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
