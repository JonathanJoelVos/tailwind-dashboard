'use client'

import { ComponentProps } from 'react'
import { useFileInputContex } from './Root'

type ControlProps = ComponentProps<'input'>
export function Control(props: ControlProps) {
  const { id } = useFileInputContex()

  return <input type="file" className="sr-only" id={id} {...props} />
}
