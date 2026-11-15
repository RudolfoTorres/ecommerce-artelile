import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-[#FAF5FF] relative min-h-screen">
      <div className="h-18 bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-small-semi text-gray-700 hover:text-purple-700 flex items-center gap-x-2 flex-1 basis-0 transition-colors"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90 text-purple-600" size={16} />
            <span className="mt-px hidden small:block font-medium">
              Voltar ao carrinho
            </span>
            <span className="mt-px block small:hidden font-medium">
              Voltar
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="flex items-center justify-center"
            data-testid="store-link"
          >
            <img 
              src="/images/logo-artelile.png" 
              alt="Artelilê Personalizados" 
              className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply"
            />
          </LocalizedClientLink>
          <div className="flex-1 basis-0 flex justify-end">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full border border-purple-200 hidden sm:inline-block">
              🔒 Checkout Seguro
            </span>
          </div>
        </nav>
      </div>
      <div className="relative py-4" data-testid="checkout-container">{children}</div>
      <div className="py-8 w-full flex items-center justify-center">
        <MedusaCTA />
      </div>
    </div>
  )
}
