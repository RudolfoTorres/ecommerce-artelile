import { Text } from "@medusajs/ui"

const MedusaCTA = () => {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      <Text className="txt-compact-small text-gray-500 font-medium">
        Artelilê Personalizados • Compra Segura
      </Text>
    </div>
  )
}

export default MedusaCTA
