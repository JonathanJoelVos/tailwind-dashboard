'use client'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectProps {
  children: ReactNode
  placeholder: string
}

export default function Select({ children, placeholder }: SelectProps) {
  // data-[placeholder]:text-zinc-500 -> estiliza o placeholder
  // SelectPrimitive.Trigger -> button de select
  // SelectPrimitive.Value -> value do select
  // - // placeholder quando nao tem value
  // SelectPrimitive.Icon -> icone do select

  // SelectPrimitive.Content -> conteudo do select
  // - side="bottom" -> lado do select
  // - position="popper" -> posicao do select (fica embaixo)
  // - sideOffset={8} -> distancia do select
  // - w-[--radix-select-trigger-width] -> classe do radix que coloca o width do content igual ao do trigger

  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-500">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white"
          sideOffset={8}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
