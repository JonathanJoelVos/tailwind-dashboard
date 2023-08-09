'use client'

import { ComponentProps, createContext, useContext, useId } from 'react'

type RootProps = ComponentProps<'div'>

type FileInputContexType = {
  id: string
}

const FileInputContex = createContext({} as FileInputContexType)

export function Root(props: RootProps) {
  const id = useId()

  return (
    <FileInputContex.Provider value={{ id }}>
      <div {...props} />
    </FileInputContex.Provider>
  )
}

export const useFileInputContex = () => {
  return useContext(FileInputContex)
}
