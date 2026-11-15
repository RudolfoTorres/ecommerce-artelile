"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="text-2xl font-extrabold text-artelile-dark tracking-tight mb-2 text-center">
        Crie sua Conta Artelilê
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Cadastre-se para acompanhar seus pedidos e vivenciar uma experiência personalizada.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-3">
          <Input
            label="Nome"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Sobrenome"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="E-mail"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label="Telefone"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />
          <Input
            label="Senha"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-xs text-gray-500 mt-4 leading-relaxed">
          Ao criar uma conta, você concorda com as diretrizes de privacidade e termos da Artelilê Personalizados.
        </span>
        <SubmitButton className="w-full mt-6" data-testid="register-button">
          Cadastrar Conta
        </SubmitButton>
      </form>
      <span className="text-center text-gray-600 text-sm mt-6">
        Já tem uma conta?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="text-purple-700 hover:text-purple-900 font-semibold underline cursor-pointer"
        >
          Entrar
        </button>
      </span>
    </div>
  )
}

export default Register
