"use client"

import { Button } from "@medusajs/ui"

import OrderCard from "../order-card"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

const OrderOverview = ({ orders }: { orders: HttpTypes.StoreOrder[] }) => {
  if (orders?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        {orders.map((o) => (
          <div
            key={o.id}
            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
          >
            <OrderCard order={o} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-y-4 bg-[#FAF5FF] border border-purple-100 rounded-3xl p-8 text-center"
      data-testid="no-orders-container"
    >
      <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-2xl shadow-inner">
        📦
      </div>
      <h2 className="text-xl font-extrabold text-artelile-dark">Ainda não há pedidos por aqui</h2>
      <p className="text-sm text-gray-500 max-w-md">
        Você ainda não realizou nenhum pedido. Que tal explorar nossa vitrine de peças personalizadas?
      </p>
      <div className="mt-2">
        <LocalizedClientLink href="/store" passHref>
          <Button
            data-testid="continue-shopping-button"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 border-0 shadow-md"
          >
            Continuar comprando
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderOverview
