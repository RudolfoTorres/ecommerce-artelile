import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <Heading level="h2" className="text-lg font-bold text-artelile-dark">
          Já tem uma conta cadastrada?
        </Heading>
        <Text className="text-sm text-gray-500 mt-1">
          Acesse para acompanhar seus pedidos e aproveitar uma experiência personalizada.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <button 
            className="border border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full px-5 py-2 text-sm font-semibold transition-all shadow-xs cursor-pointer whitespace-nowrap" 
            data-testid="sign-in-button"
          >
            Entrar na conta
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
