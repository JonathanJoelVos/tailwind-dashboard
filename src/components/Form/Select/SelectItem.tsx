'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

interface SelectItemProps extends Select.SelectItemProps {
  text: string
}
export default function SelectItem({ text, ...props }: SelectItemProps) {
  // Select.Item -> item do select
  // - data-[highlighted]: aplica quando estamos com o mouse em cima do item
  // Select.ItemText -> texto do item
  // Select.ItemIndicator -> indicador que aparece quando o item esta selecionado

  return (
    <Select.Item
      className="flex items-center gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50 data-[highlighted]:outline-none"
      {...props}
    >
      <Select.ItemText>{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-600" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
