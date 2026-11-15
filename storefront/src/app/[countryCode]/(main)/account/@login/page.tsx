import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Entrar | Artelilê Personalizados",
  description: "Acesse sua conta na Artelilê Personalizados.",
}

export default function Login() {
  return <LoginTemplate />
}
