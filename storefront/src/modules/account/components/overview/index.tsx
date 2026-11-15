import { Container } from "@medusajs/ui"

import ChevronDown from "@modules/common/icons/chevron-down"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OverviewProps = {
  customer: HttpTypes.StoreCustomer | null
  orders: HttpTypes.StoreOrder[] | null
}

const Overview = ({ customer, orders }: OverviewProps) => {
  return (
    <div data-testid="overview-page-wrapper">
      <div className="hidden small:block">
        <div className="text-xl flex justify-between items-center mb-4">
          <span data-testid="welcome-message" data-value={customer?.first_name} className="font-extrabold text-artelile-dark text-2xl">
            Olá, {customer?.first_name || "Cliente"} 👋
          </span>
          <span className="text-sm text-gray-500">
            Conectado como:{" "}
            <span
              className="font-semibold text-purple-900"
              data-testid="customer-email"
              data-value={customer?.email}
            >
              {customer?.email}
            </span>
          </span>
        </div>
        <div className="flex flex-col py-6 border-t border-purple-50">
          <div className="flex flex-col gap-y-6 h-full col-span-1 row-span-2 flex-1">
            <div className="flex items-start gap-x-12 mb-2">
              <div className="flex flex-col gap-y-2 bg-[#FAF5FF] border border-purple-100 p-5 rounded-2xl flex-1">
                <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider">Perfil</h3>
                <div className="flex items-baseline gap-x-2">
                  <span
                    className="text-3xl font-extrabold text-purple-900 leading-none"
                    data-testid="customer-profile-completion"
                    data-value={getProfileCompletion(customer)}
                  >
                    {getProfileCompletion(customer)}%
                  </span>
                  <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                    Completo
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-y-2 bg-[#FAF5FF] border border-purple-100 p-5 rounded-2xl flex-1">
                <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider">Endereços</h3>
                <div className="flex items-baseline gap-x-2">
                  <span
                    className="text-3xl font-extrabold text-purple-900 leading-none"
                    data-testid="addresses-count"
                    data-value={customer?.addresses?.length || 0}
                  >
                    {customer?.addresses?.length || 0}
                  </span>
                  <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                    Salvos
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-lg font-bold text-artelile-dark">Pedidos Recentes</h3>
              </div>
              <ul
                className="flex flex-col gap-y-3"
                data-testid="orders-wrapper"
              >
                {orders && orders.length > 0 ? (
                  orders.slice(0, 5).map((order) => {
                    return (
                      <li
                        key={order.id}
                        data-testid="order-wrapper"
                        data-value={order.id}
                      >
                        <LocalizedClientLink
                          href={`/account/orders/details/${order.id}`}
                        >
                          <Container className="bg-[#FAF5FF] hover:bg-purple-100/60 border border-purple-100 rounded-2xl flex justify-between items-center p-4 transition-all shadow-xs">
                            <div className="grid grid-cols-3 grid-rows-2 text-sm gap-x-4 flex-1">
                              <span className="text-xs text-gray-400 font-semibold uppercase">Data do Pedido</span>
                              <span className="text-xs text-gray-400 font-semibold uppercase">Número do Pedido</span>
                              <span className="text-xs text-gray-400 font-semibold uppercase">Valor Total</span>
                              <span data-testid="order-created-date" className="font-medium text-gray-700">
                                {new Date(order.created_at).toLocaleDateString("pt-BR")}
                              </span>
                              <span
                                data-testid="order-id"
                                data-value={order.display_id}
                                className="font-bold text-purple-900"
                              >
                                #{order.display_id}
                              </span>
                              <span data-testid="order-amount" className="font-bold text-purple-900">
                                {convertToLocale({
                                  amount: order.total,
                                  currency_code: order.currency_code,
                                })}
                              </span>
                            </div>
                            <button
                              className="flex items-center justify-between p-2 rounded-full hover:bg-purple-200/50 text-purple-700 transition-colors"
                              data-testid="open-order-button"
                            >
                              <span className="sr-only">
                                Ver pedido #{order.display_id}
                              </span>
                              <ChevronDown className="-rotate-90" />
                            </button>
                          </Container>
                        </LocalizedClientLink>
                      </li>
                    )
                  })
                ) : (
                  <div className="bg-[#FAF5FF] border border-purple-100 p-8 rounded-2xl text-center" data-testid="no-orders-message">
                    <p className="text-gray-500 text-sm">Você ainda não realizou nenhum pedido.</p>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (customer: HttpTypes.StoreCustomer | null) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  const billingAddress = customer.addresses?.find(
    (addr) => addr.is_default_billing
  )

  if (billingAddress) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
