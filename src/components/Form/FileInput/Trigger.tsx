'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInputContex } from './Root'

export function Trigger() {
  const { id } = useFileInputContex()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-100 hover:bg-violet-25 hover:text-violet-500"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span>
          <span className="font-semibold text-violet-500">Click to upload</span>{' '}
          or drag and drop.
        </span>
        <span className="text-sm">SVG, PNG, JPG, GIF (800x400px)</span>
      </div>
    </label>
  )
}
