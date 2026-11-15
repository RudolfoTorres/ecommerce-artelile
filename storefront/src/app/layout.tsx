import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-mode="light">
      <body className="bg-warmbg text-artelile-dark min-h-screen antialiased selection:bg-purple-200 selection:text-purple-900">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
