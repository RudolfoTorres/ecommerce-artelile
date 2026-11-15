import InteractiveLink from "@modules/common/components/interactive-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 | Página não encontrada",
  description: "Algo deu errado",
}

export default async function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)] px-4 text-center">
      <h1 className="text-2xl font-extrabold text-artelile-dark">Página não encontrada</h1>
      <p className="text-sm text-gray-500">
        A página que você tentou acessar não existe.
      </p>
      <InteractiveLink href="/">Ir para a página inicial</InteractiveLink>
    </div>
  )
}
