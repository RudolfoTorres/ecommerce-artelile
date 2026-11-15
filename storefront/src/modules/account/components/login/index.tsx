import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center"
      data-testid="login-page"
    >
      <h1 className="text-2xl font-extrabold text-artelile-dark tracking-tight mb-2">Bem-vindo(a) de volta</h1>
      <p className="text-center text-sm text-gray-500 mb-8">
        Acesse sua conta para acompanhar seus pedidos e criações personalizadas.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-3">
          <Input
            label="E-mail"
            name="email"
            type="email"
            title="Digite um e-mail válido."
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton data-testid="sign-in-button" className="w-full mt-6">
          Entrar na Conta
        </SubmitButton>
      </form>
      <span className="text-center text-gray-600 text-sm mt-6">
        Ainda não tem cadastro?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="text-purple-700 hover:text-purple-900 font-semibold underline cursor-pointer"
          data-testid="register-button"
        >
          Criar conta
        </button>
      </span>
    </div>
  )
}

export default Login
