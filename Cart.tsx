import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, size: string, color: string, quantity: number) => void;
  onRemoveItem: (id: number, size: string, color: string) => void;
}

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal >= 199 ? 0 : 19.90;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-gray-900">Carrinho de Compras</h2>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-gray-500 text-lg">Seu carrinho está vazio</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-colors"
                >
                  Continuar Comprando
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div 
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex gap-4 bg-gray-50 rounded-xl p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.selectedSize} • {item.selectedColor}
                      </p>
                      <p className="text-pink-600 font-semibold mt-1">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                            className="px-2 py-1 text-gray-500 hover:text-pink-500"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                            className="px-2 py-1 text-gray-500 hover:text-pink-500"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id, item.selectedSize, item.selectedColor)}
                          className="text-red-400 hover:text-red-600 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-gray-900">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Frete</span>
                  <span className={shipping === 0 ? 'text-green-500 font-medium' : 'text-gray-900'}>
                    {shipping === 0 ? 'GRÁTIS' : `R$ ${shipping.toFixed(2).replace('.', ',')}`}
                  </span>
                </div>
                {subtotal < 199 && (
                  <p className="text-xs text-pink-500">
                    Faltam R$ {(199 - subtotal).toFixed(2).replace('.', ',')} para frete grátis!
                  </p>
                )}
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total</span>
                  <span className="text-pink-600">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow">
                Finalizar Compra
              </button>
              
              <button
                onClick={onClose}
                className="w-full py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
              >
                Continuar Comprando
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
