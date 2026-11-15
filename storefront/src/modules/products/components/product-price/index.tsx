import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex flex-col text-artelile-dark my-2">
      <div className="flex items-baseline gap-2">
        <span
          className={clx("text-2xl sm:text-3xl font-extrabold text-purple-900 tracking-tight", {
            "text-purple-700": selectedPrice.price_type === "sale",
          })}
        >
          {!variant && <span className="text-sm font-normal text-gray-500">A partir de </span>}
          <span
            data-testid="product-price"
            data-value={selectedPrice.calculated_price_number}
          >
            {selectedPrice.calculated_price}
          </span>
        </span>
        {selectedPrice.price_type === "sale" && (
          <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
            -{selectedPrice.percentage_diff}%
          </span>
        )}
      </div>
      {selectedPrice.price_type === "sale" && (
        <p className="text-xs text-gray-500 mt-0.5">
          <span>De: </span>
          <span
            className="line-through"
            data-testid="original-product-price"
            data-value={selectedPrice.original_price_number}
          >
            {selectedPrice.original_price}
          </span>
        </p>
      )}
    </div>
  )
}
