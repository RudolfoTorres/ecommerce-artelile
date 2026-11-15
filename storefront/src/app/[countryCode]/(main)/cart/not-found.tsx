import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404 | Carrinho não encontrado",
  description: "Algo deu errado",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)] px-4 text-center">
      <h1 className="text-2xl font-extrabold text-artelile-dark">Página não encontrada</h1>
      <p className="text-sm text-gray-500 max-w-md">
        O carrinho que você tentou acessar não existe. Limpe seus cookies e tente
        novamente.
      </p>
      <InteractiveLink href="/">Ir para a página inicial</InteractiveLink>
    </div>
  )
}
