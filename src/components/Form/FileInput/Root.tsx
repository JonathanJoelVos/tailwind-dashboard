'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type RootProps = ComponentProps<'div'>

type FileInputContexType = {
  id: string
  files: File[]
  onFilesChange: (files: File[], multiple: boolean) => void
}

const FileInputContex = createContext({} as FileInputContexType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesChange(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContex.Provider value={{ id, files, onFilesChange }}>
      <div {...props} />
    </FileInputContex.Provider>
  )
}

export const useFileInputContex = () => {
  return useContext(FileInputContex)
}
