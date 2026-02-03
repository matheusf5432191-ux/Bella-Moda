import { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setShowOptions(false);
  };

  return (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
              NOVO
            </span>
          )}
          {product.isSale && (
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
              OFERTA
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
        <h3 className="font-semibold text-gray-900 mt-1 truncate">{product.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-pink-600">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
      </div>

      {/* Options Modal */}
      {showOptions && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowOptions(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-md w-full" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
              <button onClick={() => setShowOptions(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Tamanho:</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                      selectedSize === size 
                        ? 'border-pink-500 bg-pink-50 text-pink-600' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">Cor: {selectedColor}</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                      selectedColor === color 
                        ? 'border-pink-500 bg-pink-50 text-pink-600' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow"
            >
              Adicionar - R$ {product.price.toFixed(2).replace('.', ',')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
