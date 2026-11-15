import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="content-container py-8 md:py-12" data-testid="category-container">
      {/* Banner de Cabeçalho da Vitrine alinhado com o Hero */}
      <div className="w-full bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-purple-50 mb-10 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="relative z-10 space-y-3">
          <div className="flex items-center space-x-2">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Vitrine Exclusiva
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Feito com Carinho
            </span>
          </div>
          <h1 
            data-testid="store-page-title" 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-artelile-dark tracking-tight"
          >
            Nossa Vitrine de Produtos
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl">
            Descubra criações artesanais únicas e personalizadas para celebrar os momentos mais especiais.
          </p>
        </div>

        <div className="relative z-10 hidden sm:flex items-center gap-3">
          <div className="bg-[#FAF5FF] border border-purple-100 rounded-full px-5 py-2.5 flex items-center space-x-2 text-sm text-gray-600 shadow-sm">
            <span>✨</span>
            <span>Peças</span>
            <span className="font-bold text-purple-700 bg-white px-2 py-0.5 rounded shadow-sm">
              100%
            </span>
            <span>Originais</span>
          </div>
        </div>

        {/* Gradiente sutil de fundo */}
        <div className="w-[200px] h-[200px] bg-gradient-to-tr from-blue-300/30 to-purple-300/30 rounded-full absolute -right-10 -bottom-10 z-0 pointer-events-none blur-2xl"></div>
      </div>

      <div className="flex flex-col small:flex-row small:items-start gap-8">
        <div className="small:w-[260px] shrink-0">
          <div className="bg-white rounded-3xl p-5 border border-purple-50 shadow-md small:sticky small:top-28">
            <RefinementList sortBy={sort} />
          </div>
        </div>
        <div className="w-full flex-1">
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
