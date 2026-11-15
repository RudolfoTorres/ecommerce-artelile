"use client"

import { acceptTransferRequest, declineTransferRequest } from "@lib/data/orders"
import { Button, Text } from "@medusajs/ui"
import { useState } from "react"

type TransferStatus = "pending" | "success" | "error"

const TransferActions = ({ id, token }: { id: string; token: string }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [status, setStatus] = useState<{
    accept: TransferStatus | null
    decline: TransferStatus | null
  } | null>({
    accept: null,
    decline: null,
  })

  const acceptTransfer = async () => {
    setStatus({ accept: "pending", decline: null })
    setErrorMessage(null)

    const { success, error } = await acceptTransferRequest(id, token)

    if (error) setErrorMessage(error)
    setStatus({ accept: success ? "success" : "error", decline: null })
  }

  const declineTransfer = async () => {
    setStatus({ accept: null, decline: "pending" })
    setErrorMessage(null)

    const { success, error } = await declineTransferRequest(id, token)

    if (error) setErrorMessage(error)
    setStatus({ accept: null, decline: success ? "success" : "error" })
  }

  return (
    <div className="flex flex-col gap-y-4">
      {status?.accept === "success" && (
        <Text className="text-emerald-500 font-medium">
          Pedido transferido com sucesso!
        </Text>
      )}
      {status?.decline === "success" && (
        <Text className="text-emerald-500 font-medium">
          Transferência do pedido recusada com sucesso!
        </Text>
      )}
      {status?.accept !== "success" && status?.decline !== "success" && (
        <div className="flex flex-wrap gap-3">
          <Button
            size="large"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold border-0 px-6"
            onClick={acceptTransfer}
            isLoading={status?.accept === "pending"}
            disabled={
              status?.accept === "pending" || status?.decline === "pending"
            }
          >
            Aceitar transferência
          </Button>
          <Button
            size="large"
            variant="secondary"
            className="rounded-full border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-6"
            onClick={declineTransfer}
            isLoading={status?.decline === "pending"}
            disabled={
              status?.accept === "pending" || status?.decline === "pending"
            }
          >
            Recusar transferência
          </Button>
        </div>
      )}
      {errorMessage && <Text className="text-red-500">{errorMessage}</Text>}
    </div>
  )
}

export default TransferActions
