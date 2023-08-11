'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInputContex } from './Root'

type ControlProps = ComponentProps<'input'>
export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesChange } = useFileInputContex()

  function handleChangeFile(event: ChangeEvent<HTMLInputElement>) {
    console.log('abriu')
    if (!event.target.files?.length) {
      return
    }

    const file = Array.from(event.target.files)

    onFilesChange(file, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleChangeFile}
      {...props}
    />
  )
}
