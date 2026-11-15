import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1.5 items-center group text-artelile-purple hover:text-artelile-blue transition-colors font-medium text-sm"
      href={href}
      onClick={onClick}
      {...props}
    >
      <Text className="text-inherit font-medium">{children}</Text>
      <ArrowUpRightMini
        className="group-hover:rotate-45 group-hover:translate-x-0.5 ease-in-out duration-200 text-inherit"
      />
    </LocalizedClientLink>
  )
}

export default InteractiveLink
