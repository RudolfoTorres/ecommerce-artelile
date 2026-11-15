import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-18 sm:h-20 mx-auto duration-200 bg-white/90 backdrop-blur-md border-b border-purple-100/80 shadow-sm transition-all">
        <nav className="content-container flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
          </div>

          <div className="flex items-center h-full py-2">
            <LocalizedClientLink
              href="/"
              className="flex items-center justify-center transition-transform duration-200 hover:scale-[1.02]"
              data-testid="nav-store-link"
            >
              <img 
                src="/images/logo-artelile.png" 
                alt="Artelilê Personalizados" 
                className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply"
              />
              <span className="sr-only">Artelilê Personalizados</span>
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-4 sm:gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="text-gray-600 hover:text-purple-700 font-medium transition-colors"
                href="/store"
              >
                Vitrine
              </LocalizedClientLink>
              <LocalizedClientLink
                className="text-gray-600 hover:text-purple-700 font-medium transition-colors"
                href="/account"
                data-testid="nav-account-link"
              >
                Conta
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex items-center gap-2 text-gray-700 hover:text-purple-700 font-medium"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-purple-200">
                    Carrinho (0)
                  </span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
