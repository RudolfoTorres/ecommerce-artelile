import { notFound } from "next/navigation"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export default function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category)
      getParents(category.parent_category)
    }
  }

  getParents(category)

  return (
    <div className="content-container py-8 md:py-12" data-testid="category-container">
      {/* Banner de Cabeçalho da Categoria alinhado com o Hero */}
      <div className="w-full bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-purple-50 mb-10 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="relative z-10 space-y-3">
          <div className="flex items-center space-x-2">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Categoria
            </span>
            {parents &&
              parents.map((parent) => (
                <span key={parent.id} className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                  <LocalizedClientLink
                    className="hover:text-purple-700 transition-colors"
                    href={`/categories/${parent.handle}`}
                    data-testid="sort-by-link"
                  >
                    {parent.name}
                  </LocalizedClientLink>
                  {" / "}
                </span>
              ))}
          </div>
          <h1 
            data-testid="category-page-title" 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-artelile-dark tracking-tight"
          >
            {category.name}
          </h1>
          {category.description && (
            <p className="text-gray-500 text-sm md:text-base max-w-xl">
              {category.description}
            </p>
          )}

          {category.category_children && category.category_children.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-2">
              {category.category_children.map((c) => (
                <LocalizedClientLink
                  key={c.id}
                  href={`/categories/${c.handle}`}
                  className="bg-[#FAF5FF] border border-purple-200 text-purple-800 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-purple-100 transition-colors shadow-sm"
                >
                  {c.name}
                </LocalizedClientLink>
              ))}
            </div>
          )}
        </div>

        {/* Gradiente sutil de fundo */}
        <div className="w-[200px] h-[200px] bg-gradient-to-tr from-blue-300/30 to-purple-300/30 rounded-full absolute -right-10 -bottom-10 z-0 pointer-events-none blur-2xl"></div>
      </div>

      <div className="flex flex-col small:flex-row small:items-start gap-8">
        <div className="small:w-[260px] shrink-0">
          <div className="bg-white rounded-3xl p-5 border border-purple-50 shadow-md small:sticky small:top-28">
            <RefinementList sortBy={sort} data-testid="sort-by-container" />
          </div>
        </div>
        <div className="w-full flex-1">
          <Suspense
            fallback={
              <SkeletonProductGrid
                numberOfProducts={category.products?.length ?? 8}
              />
            }
          >
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              categoryId={category.id}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
