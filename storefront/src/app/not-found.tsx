import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 | Página não encontrada",
  description: "Algo deu errado",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)] px-4 text-center">
      <h1 className="text-2xl font-extrabold text-artelile-dark">Página não encontrada</h1>
      <p className="text-sm text-gray-500">
        A página que você tentou acessar não existe.
      </p>
      <Link
        className="flex gap-x-1 items-center group text-purple-700 hover:text-purple-900 font-semibold"
        href="/"
      >
        <Text className="text-inherit">Ir para a página inicial</Text>
        <ArrowUpRightMini
          className="group-hover:rotate-45 ease-in-out duration-150 text-inherit"
        />
      </Link>
    </div>
  )
}
