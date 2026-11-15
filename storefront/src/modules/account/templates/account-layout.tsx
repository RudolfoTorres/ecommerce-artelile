import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 py-8 sm:py-12" data-testid="account-page">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-purple-50 flex flex-col">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] py-6 sm:py-8 gap-8">
          <div>{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-start small:items-center justify-between border-t border-purple-50 pt-8 mt-4 gap-4">
          <div>
            <h3 className="text-lg font-bold text-artelile-dark mb-1">Precisa de ajuda ou dúvidas?</h3>
            <span className="text-sm text-gray-500">
              Estamos sempre à disposição para tirar qualquer dúvida sobre seus pedidos e personalizações.
            </span>
          </div>
          <div>
            <UnderlineLink href="/store">
              Explorar Vitrine
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
