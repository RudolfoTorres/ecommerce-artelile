import { Label, RadioGroup, Text, clx } from "@medusajs/ui"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  "data-testid"?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <Text className="text-xs font-bold text-artelile-dark uppercase tracking-wider">{title}</Text>
      <RadioGroup data-testid={dataTestId} onValueChange={handleChange} className="flex flex-col gap-y-1.5 w-full">
        {items?.map((i) => {
          const isSelected = i.value === value
          return (
            <div
              key={i.value}
              className={clx(
                "flex items-center gap-x-2.5 px-3 py-2 rounded-xl transition-all cursor-pointer text-sm",
                isSelected
                  ? "bg-purple-50 text-purple-900 font-semibold border border-purple-200/80"
                  : "text-gray-600 hover:bg-purple-50/50 hover:text-purple-700"
              )}
            >
              <span
                className={clx(
                  "w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all",
                  isSelected
                    ? "border-purple-600 bg-purple-600"
                    : "border-gray-300 bg-white"
                )}
              >
                {isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
              </span>
              <RadioGroup.Item
                checked={isSelected}
                className="hidden peer"
                id={i.value}
                value={i.value}
              />
              <Label
                htmlFor={i.value}
                className="!transform-none hover:cursor-pointer flex-1"
                data-testid="radio-label"
                data-active={isSelected}
              >
                {i.label}
              </Label>
            </div>
          )
        })}
      </RadioGroup>
    </div>
  )
}

export default FilterRadioGroup
