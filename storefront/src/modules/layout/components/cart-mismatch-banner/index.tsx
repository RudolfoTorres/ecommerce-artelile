"use client"

import { transferCart } from "@lib/data/customer"
import { ExclamationCircleSolid } from "@medusajs/icons"
import { StoreCart, StoreCustomer } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import { useState } from "react"

function CartMismatchBanner(props: {
  customer: StoreCustomer
  cart: StoreCart
}) {
  const { customer, cart } = props
  const [isPending, setIsPending] = useState(false)
  const [actionText, setActionText] = useState("Run transfer again")

  if (!customer || !!cart.customer_id) {
    return
  }

  const handleSubmit = async () => {
    try {
      setIsPending(true)
      setActionText("Transferring..")

      await transferCart()
    } catch {
      setActionText("Run transfer again")
      setIsPending(false)
    }
  }

  return (
    <div className="flex items-center justify-center small:p-3 p-2 text-center bg-purple-100 border-b border-purple-200 small:gap-2 gap-1 text-sm text-purple-900">
      <div className="flex flex-col small:flex-row small:gap-2 gap-1 items-center">
        <span className="flex items-center gap-1.5 font-medium">
          <ExclamationCircleSolid className="inline text-purple-700" />
          Algo deu errado ao sincronizar seu carrinho
        </span>

        <span>·</span>

        <Button
          variant="transparent"
          className="hover:bg-transparent active:bg-transparent focus:bg-transparent disabled:text-purple-400 text-purple-700 hover:text-purple-900 font-semibold p-0 bg-transparent underline"
          size="base"
          disabled={isPending}
          onClick={handleSubmit}
        >
          {actionText === "Run transfer again" ? "Tentar novamente" : "Transferindo..."}
        </Button>
      </div>
    </div>
  )
}

export default CartMismatchBanner
