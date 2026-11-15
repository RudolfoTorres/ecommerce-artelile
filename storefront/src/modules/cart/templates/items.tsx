import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items
  return (
    <div>
      <div className="pb-4 flex items-center gap-3">
        <span className="w-2.5 h-7 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full inline-block"></span>
        <Heading className="text-2xl sm:text-3xl font-extrabold text-artelile-dark tracking-tight">
          Carrinho de Compras
        </Heading>
      </div>
      <Table>
        <Table.Header className="border-t-0 border-b border-purple-100">
          <Table.Row className="text-gray-500 font-semibold text-xs uppercase tracking-wider">
            <Table.HeaderCell className="!pl-0">Produto</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Quantidade</Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell">
              Preço
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-right">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      currencyCode={cart?.currency_code}
                    />
                  )
                })
            : repeat(5).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
