import { Metadata } from "next"
import { notFound } from "next/navigation"

import AddressBook from "@modules/account/components/address-book"

import { getRegion } from "@lib/data/regions"
import { retrieveCustomer } from "@lib/data/customer"

export const metadata: Metadata = {
  title: "Endereços | Artelilê Personalizados",
  description: "Gerencie seus endereços de entrega.",
}

export default async function Addresses(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const customer = await retrieveCustomer()
  const region = await getRegion(countryCode)

  if (!customer || !region) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="addresses-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-2">
        <h1 className="text-2xl font-extrabold text-artelile-dark tracking-tight">Endereços de Entrega</h1>
        <p className="text-sm text-gray-500">
          Visualize e atualize seus endereços de entrega; você pode cadastrar quantos
          precisar para agilizar suas próximas compras.
        </p>
      </div>
      <AddressBook customer={customer} region={region} />
    </div>
  )
}
