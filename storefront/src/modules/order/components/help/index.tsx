import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6 pt-4 border-t border-purple-50">
      <Heading className="text-base font-bold text-artelile-dark">Precisa de ajuda com seu pedido?</Heading>
      <div className="text-sm my-2">
        <ul className="gap-y-2 flex flex-col text-purple-700 font-medium">
          <li>
            <LocalizedClientLink href="/contact" className="hover:text-purple-900 transition-colors">
              Fale Conosco
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink href="/contact" className="hover:text-purple-900 transition-colors">
              Trocas e Devoluções
            </LocalizedClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
