import { ComponentProps } from 'react'

type PrefixProps = ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
  return <div {...props} />
}

type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

type ControllProps = ComponentProps<'input'>

export function Controll(props: ControllProps) {
  return (
    <input
      className="w-full border-0 bg-transparent placeholder-zinc-600"
      {...props}
    />
  )
}
