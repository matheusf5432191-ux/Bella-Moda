export function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
              ✨ Nova Coleção 2024
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Vista-se com
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Elegância</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Descubra as últimas tendências da moda feminina. Peças exclusivas selecionadas para realçar sua beleza e estilo único.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#produtos"
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1"
              >
                Ver Coleção
              </a>
              <a 
                href="#novidades"
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-pink-500 hover:text-pink-500 transition-all"
              >
                Novidades
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-gray-500 text-sm">Produtos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">10k+</p>
                <p className="text-gray-500 text-sm">Clientes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">4.9★</p>
                <p className="text-gray-500 text-sm">Avaliação</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20 transform -rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=700&fit=crop"
              alt="Moda Feminina"
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Frete Grátis</p>
                  <p className="text-sm text-gray-500">Acima de R$199</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full blur-xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-50"></div>
    </section>
  );
}
