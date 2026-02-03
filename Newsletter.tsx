import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="novidades" className="py-16 bg-gradient-to-br from-pink-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Receba Novidades Exclusivas
          </h2>
          <p className="text-pink-100 mb-8">
            Cadastre-se e ganhe 10% de desconto na primeira compra, além de receber ofertas especiais e lançamentos em primeira mão.
          </p>

          {subscribed ? (
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 inline-flex items-center gap-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-medium">Obrigado! Você receberá nossas novidades.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white placeholder-pink-100 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:shadow-lg transition-shadow"
              >
                Cadastrar
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
