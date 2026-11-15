"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] bg-[#FAF5FF] flex items-center justify-center px-4 py-8 md:px-16 overflow-hidden">
      
      {/* Container principal */}
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl p-6 md:p-14 pb-10 md:pb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative border border-purple-50">
        
        {/* Lado esquerdo: Logo, textos e chamada para ação */}
        <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Exclusivo</span>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Feito com Carinho</span>
          </div>

          {/* Logo da Artelilê */}
          <div className="flex justify-center lg:justify-start">
            <h1 className="sr-only">Artelilê Personalizados</h1>
            <img 
              src="/images/logo-artelile.png" 
              alt="Artelilê Personalizados" 
              className="w-56 md:w-80 h-auto object-contain mix-blend-multiply"
            />
          </div>

          <p className="text-gray-500 max-w-md text-sm md:text-base">
            Transformamos momentos especiais em peças únicas e personalizadas com design exclusivo para você ou sua marca.
          </p>

          {/* Área de ação / Botão */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
            <div className="bg-[#FAF5FF] border border-purple-100 rounded-full px-4 py-2 flex items-center justify-center space-x-1 text-sm text-gray-600 w-full sm:w-auto">
              <span>Peças</span> 
              <span className="font-bold text-purple-700 bg-white px-2 py-0.5 rounded shadow-sm">100%</span>
              <span>criativas</span>
            </div>

            <Link href="/store" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full px-8 py-4 shadow-lg transition-all duration-300 flex items-center space-x-2 cursor-pointer">
                <span>🎁</span>
                <span>Ver Produtos</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Lado direito: Círculo, imagem do produto e elementos em órbita com eixo fixo */}
        <div className="lg:col-span-6 relative flex justify-center items-center py-4 lg:py-0 min-h-[320px] sm:min-h-[380px]">
          
          {/* Círculo de fundo com gradiente */}
          <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-blue-400/80 to-purple-400/80 rounded-full absolute z-0 flex items-center justify-center shadow-inner"></div>

          {/* Container orbita no sentido horário */}
          <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[440px] md:h-[440px] absolute z-20 pointer-events-none animate-orbit">
            
            {/* Tag Superior (Exclusivo) - Gira no sentido anti-horário para manter o eixo fixo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg text-xs font-semibold text-purple-900 pointer-events-auto animate-counter-orbit">
              ✨ Exclusivo
            </div>

            {/* Tag Inferior (Feito à Mão) - Gira no sentido anti-horário para manter o eixo fixo */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/95 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg text-xs font-semibold text-purple-900 pointer-events-auto animate-counter-orbit">
              💜 Feito à Mão
            </div>

          </div>

          {/* Imagem do produto em destaque (estática no centro) */}
          <div className="relative z-10 w-full max-w-xs sm:max-w-sm flex justify-center px-4">
            <img 
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" 
              alt="Produto em Destaque" 
              className="w-60 sm:w-72 md:w-88 object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>

        </div>

      </div>

      {/* Definições das animações sincronizadas */}
      <style jsx global>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit 25s linear infinite;
        }
        .animate-counter-orbit {
          animation: counter-orbit 25s linear infinite;
        }
        /* Pausa a órbita ao passar o mouse */
        .animate-orbit:hover,
        .animate-orbit:hover .animate-counter-orbit {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}