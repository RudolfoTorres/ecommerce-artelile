import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info" className="w-full">
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          {product.collection && (
            <LocalizedClientLink
              href={`/collections/${product.collection.handle}`}
              className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full hover:bg-purple-200 transition-colors inline-block"
            >
              {product.collection.title}
            </LocalizedClientLink>
          )}
          <span className="bg-[#FAF5FF] text-purple-900 border border-purple-200 text-xs font-semibold px-2.5 py-1 rounded-full">
            💜 Feito à Mão
          </span>
        </div>

        <Heading
          level="h2"
          className="text-2xl sm:text-3xl font-extrabold text-artelile-dark tracking-tight"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        <Text
          className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mt-1"
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
