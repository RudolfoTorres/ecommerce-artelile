import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="w-full bg-white border-t border-purple-100 mt-20 relative overflow-hidden">
      {/* Barra de destaque com gradiente Artelilê */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-purple-400" />

      <div className="content-container flex flex-col w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-purple-50">
          
          {/* Coluna da Marca Artelilê */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <LocalizedClientLink href="/" className="inline-block">
              <img 
                src="/images/logo-artelile.png" 
                alt="Artelilê Personalizados" 
                className="w-48 sm:w-56 h-auto object-contain mix-blend-multiply"
              />
            </LocalizedClientLink>
            
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Transformamos momentos especiais em peças únicas e personalizadas com design exclusivo para você ou sua marca.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full border border-purple-200">
                ✨ Peças Exclusivas
              </span>
              <span className="bg-[#FAF5FF] text-purple-900 border border-purple-200 text-xs font-semibold px-3 py-1 rounded-full">
                💜 Feito à Mão
              </span>
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                🎁 100% Personalizado
              </span>
            </div>
          </div>

          {/* Links de Categorias, Coleções e Navegação */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-3">
                <span className="text-sm font-bold text-artelile-dark uppercase tracking-wider">
                  Categorias
                </span>
                <ul
                  className="grid grid-cols-1 gap-2.5"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return null
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-1.5 text-gray-600 text-sm"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-purple-700 transition-colors font-medium",
                            children && "font-semibold text-artelile-dark"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-2.5 gap-1.5 border-l-2 border-purple-100 pl-2">
                            {children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="text-gray-500 hover:text-purple-700 transition-colors text-xs"
                                  href={`/categories/${child.handle}`}
                                  data-testid="category-link"
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-3">
                <span className="text-sm font-bold text-artelile-dark uppercase tracking-wider">
                  Coleções
                </span>
                <ul
                  className="grid grid-cols-1 gap-2.5 text-gray-600 text-sm"
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-purple-700 transition-colors font-medium"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Institucional / Acesso Rápido */}
            <div className="flex flex-col gap-y-3">
              <span className="text-sm font-bold text-artelile-dark uppercase tracking-wider">
                Navegação
              </span>
              <ul className="grid grid-cols-1 gap-2.5 text-gray-600 text-sm">
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="hover:text-purple-700 transition-colors font-medium"
                  >
                    Vitrine de Produtos
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account"
                    className="hover:text-purple-700 transition-colors font-medium"
                  >
                    Minha Conta
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/cart"
                    className="hover:text-purple-700 transition-colors font-medium"
                  >
                    Meu Carrinho
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rodapé inferior / Copyright */}
        <div className="flex flex-col sm:flex-row w-full pt-8 justify-between items-center text-xs text-gray-500 gap-4">
          <Text className="txt-compact-small text-gray-500">
            © {new Date().getFullYear()} Artelilê Personalizados. Todos os direitos reservados.
          </Text>
          <div className="flex items-center space-x-2 text-purple-700 font-medium">
            <span>✨</span>
            <span>Feito à mão com amor e carinho</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
