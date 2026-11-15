"use client"

import { XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OrderDetails from "@modules/order/components/order-details"
import OrderSummary from "@modules/order/components/order-summary"
import ShippingDetails from "@modules/order/components/shipping-details"
import React from "react"

type OrderDetailsTemplateProps = {
  order: HttpTypes.StoreOrder
}

const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({
  order,
}) => {
  return (
    <div className="flex flex-col justify-center gap-y-6">
      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-2xl font-extrabold text-artelile-dark tracking-tight">Detalhes do Pedido</h1>
        <LocalizedClientLink
          href="/account/orders"
          className="flex gap-1.5 items-center text-sm font-semibold text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-full transition-colors"
          data-testid="back-to-overview-button"
        >
          <XMark /> Voltar
        </LocalizedClientLink>
      </div>
      <div
        className="flex flex-col gap-6 h-full bg-[#FAF5FF] border border-purple-100 rounded-3xl p-6 w-full"
        data-testid="order-details-container"
      >
        <OrderDetails order={order} showStatus />
        <Items order={order} />
        <ShippingDetails order={order} />
        <OrderSummary order={order} />
        <Help />
      </div>
    </div>
  )
}

export default OrderDetailsTemplate
