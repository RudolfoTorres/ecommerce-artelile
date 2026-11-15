import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block h-full">
      <div 
        data-testid="product-wrapper"
        className="bg-white rounded-3xl p-3.5 sm:p-4 border border-purple-50 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between h-full"
      >
        <div>
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
          <div className="flex flex-col mt-4 gap-y-1">
            <Text className="text-artelile-dark font-bold text-base group-hover:text-artelile-purple transition-colors line-clamp-1" data-testid="product-title">
              {product.title}
            </Text>
            <div className="flex items-center gap-x-2 mt-1">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-purple-50 flex items-center justify-between">
          <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
            Ver Detalhes
          </span>
          <span className="text-xs text-purple-400 font-bold group-hover:translate-x-1 group-hover:text-purple-600 transition-all">
            →
          </span>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
