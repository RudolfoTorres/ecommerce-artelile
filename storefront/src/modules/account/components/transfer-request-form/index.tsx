"use client"

import { useActionState } from "react"
import { createTransferRequest } from "@lib/data/orders"
import { Text, Heading, Input, Button, IconButton, Toaster } from "@medusajs/ui"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { CheckCircleMiniSolid, XCircleSolid } from "@medusajs/icons"
import { useEffect, useState } from "react"

export default function TransferRequestForm() {
  const [showSuccess, setShowSuccess] = useState(false)

  const [state, formAction] = useActionState(createTransferRequest, {
    success: false,
    error: null,
    order: null,
  })

  useEffect(() => {
    if (state.success && state.order) {
      setShowSuccess(true)
    }
  }, [state.success, state.order])

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="grid sm:grid-cols-2 items-center gap-x-8 gap-y-4 w-full">
        <div className="flex flex-col gap-y-1">
          <Heading level="h3" className="text-lg font-bold text-artelile-dark">
            Transferência de pedidos
          </Heading>
          <Text className="text-sm text-gray-500">
            Não encontrou o pedido que está procurando?
            <br /> Vincule um pedido à sua conta.
          </Text>
        </div>
        <form
          action={formAction}
          className="flex flex-col gap-y-1 sm:items-end"
        >
          <div className="flex flex-col gap-y-2 w-full">
            <Input className="w-full rounded-xl border-purple-200 focus:border-purple-500" name="order_id" placeholder="ID do pedido" />
            <SubmitButton
              variant="secondary"
              className="w-fit whitespace-nowrap self-end px-6"
            >
              Solicitar transferência
            </SubmitButton>
          </div>
        </form>
      </div>
      {!state.success && state.error && (
        <Text className="text-sm text-rose-500 text-right">
          {state.error}
        </Text>
      )}
      {showSuccess && (
        <div className="flex justify-between p-4 bg-[#FAF5FF] border border-purple-100 rounded-2xl w-full self-stretch items-center">
          <div className="flex gap-x-2 items-center">
            <CheckCircleMiniSolid className="w-4 h-4 text-emerald-500" />
            <div className="flex flex-col gap-y-1">
              <Text className="text-sm font-semibold text-artelile-dark">
                Transferência do pedido {state.order?.id} solicitada
              </Text>
              <Text className="text-xs text-gray-600">
                E-mail de solicitação enviado para {state.order?.email}
              </Text>
            </div>
          </div>
          <IconButton
            variant="transparent"
            className="h-fit"
            onClick={() => setShowSuccess(false)}
          >
            <XCircleSolid className="w-4 h-4 text-gray-500" />
          </IconButton>
        </div>
      )}
    </div>
  )
}
