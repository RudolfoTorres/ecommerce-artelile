import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const EmptyCartMessage = () => {
  return (
    <div 
      className="bg-white rounded-3xl shadow-xl p-8 sm:p-14 border border-purple-50 max-w-xl mx-auto flex flex-col items-center text-center my-8" 
      data-testid="empty-cart-message"
    >
      <div className="w-20 h-20 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner">
        🛍️
      </div>
      <Heading
        level="h1"
        className="text-2xl sm:text-3xl font-extrabold text-artelile-dark tracking-tight mb-2"
      >
        Seu carrinho está vazio
      </Heading>
      <Text className="text-gray-500 text-sm sm:text-base mb-8 max-w-md">
        Você ainda não escolheu suas peças. Que tal explorar nossa vitrine e encontrar produtos artesanais feitos com todo o carinho?
      </Text>
      <div>
        <LocalizedClientLink href="/store">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full px-8 py-3.5 shadow-lg shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 cursor-pointer">
            <span>🎁</span>
            <span>Explorar Produtos</span>
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
