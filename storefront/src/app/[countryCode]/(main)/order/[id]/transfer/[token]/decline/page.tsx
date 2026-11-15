import { declineTransferRequest } from "@lib/data/orders"
import { Heading, Text } from "@medusajs/ui"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  const { success, error } = await declineTransferRequest(id, token)

  return (
    <div className="content-container py-12">
      <div className="flex flex-col gap-y-6 items-start max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-purple-50">
        <TransferImage />
        <div className="flex flex-col gap-y-4">
          {success && (
            <>
              <Heading level="h1" className="text-2xl font-extrabold text-artelile-dark">
                Transferência recusada!
              </Heading>
              <Text className="text-gray-600 text-sm">
                A transferência do pedido {id} foi recusada com sucesso.
              </Text>
            </>
          )}
          {!success && (
            <>
              <Text className="text-gray-600 text-sm">
                Ocorreu um erro ao recusar a transferência. Tente novamente.
              </Text>
              {error && (
                <Text className="text-red-500 text-sm">Mensagem de erro: {error}</Text>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
