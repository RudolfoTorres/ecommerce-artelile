import { useMemo } from "react"

import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OrderCardProps = {
  order: HttpTypes.StoreOrder
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(() => {
    return (
      order.items?.reduce((acc, item) => {
        return acc + item.quantity
      }, 0) ?? 0
    )
  }, [order])

  const numberOfProducts = useMemo(() => {
    return order.items?.length ?? 0
  }, [order])

  return (
    <div className="bg-[#FAF5FF] border border-purple-100 rounded-3xl p-6 flex flex-col shadow-xs" data-testid="order-card">
      <div className="uppercase text-lg font-extrabold text-purple-900 mb-1">
        #<span data-testid="order-display-id">{order.display_id}</span>
      </div>
      <div className="flex items-center divide-x divide-purple-200 text-xs sm:text-sm text-gray-600">
        <span className="pr-2" data-testid="order-created-at">
          {new Date(order.created_at).toLocaleDateString("pt-BR")}
        </span>
        <span className="px-2 font-bold text-purple-900" data-testid="order-amount">
          {convertToLocale({
            amount: order.total,
            currency_code: order.currency_code,
          })}
        </span>
        <span className="pl-2">{`${numberOfLines} ${
          numberOfLines > 1 ? "itens" : "item"
        }`}</span>
      </div>
      <div className="grid grid-cols-2 small:grid-cols-4 gap-4 my-4">
        {order.items?.slice(0, 3).map((i) => {
          return (
            <div
              key={i.id}
              className="flex flex-col gap-y-2"
              data-testid="order-item"
            >
              <Thumbnail thumbnail={i.thumbnail} images={[]} size="full" />
              <div className="flex items-center text-xs sm:text-sm text-artelile-dark">
                <span
                  className="font-semibold truncate"
                  data-testid="item-title"
                >
                  {i.title}
                </span>
                <span className="ml-1.5 text-purple-700 font-bold">x</span>
                <span data-testid="item-quantity" className="text-purple-700 font-bold">{i.quantity}</span>
              </div>
            </div>
          )
        })}
        {numberOfProducts > 4 && (
          <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-2xl border border-purple-100 p-4">
            <span className="text-sm font-bold text-purple-900">
              + {numberOfLines - 4}
            </span>
            <span className="text-xs text-gray-500">mais</span>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <LocalizedClientLink href={`/account/orders/details/${order.id}`}>
          <button 
            data-testid="order-details-link" 
            className="border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 font-semibold text-xs sm:text-sm px-5 py-2 rounded-full transition-all shadow-xs cursor-pointer"
          >
            Ver detalhes
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderCard
