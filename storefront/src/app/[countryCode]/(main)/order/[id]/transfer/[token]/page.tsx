import { Heading, Text } from "@medusajs/ui"
import TransferActions from "@modules/order/components/transfer-actions"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  return (
    <div className="content-container py-12">
      <div className="flex flex-col gap-y-6 items-start max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-purple-50">
        <TransferImage />
        <div className="flex flex-col gap-y-4">
          <Heading level="h1" className="text-2xl font-extrabold text-artelile-dark">
            Solicitação de transferência do pedido {id}
          </Heading>
          <Text className="text-gray-600 text-sm leading-relaxed">
            Você recebeu uma solicitação para transferir a titularidade do seu pedido ({id}).
            Se estiver de acordo com esta solicitação, você pode aprová-la clicando no botão abaixo.
          </Text>
          <div className="w-full h-px bg-purple-100" />
          <Text className="text-gray-600 text-sm leading-relaxed">
            Caso aceite, o novo titular assumirá todas as responsabilidades e
            permissões associadas a este pedido.
          </Text>
          <Text className="text-gray-600 text-sm leading-relaxed">
            Se você não reconhece esta solicitação ou deseja manter a titularidade, nenhuma
            ação adicional é necessária.
          </Text>
          <div className="w-full h-px bg-purple-100" />
          <TransferActions id={id} token={token} />
        </div>
      </div>
    </div>
  )
}
