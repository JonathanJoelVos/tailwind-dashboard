/* eslint-disable @next/next/no-img-element */

import { LogOut } from 'lucide-react'

export default function Profile() {
  return (
    <div className="flex items-center gap-3 border-t border-zinc-200 pt-6">
      <img
        src="https://github.com/JonathanJoelVos.png"
        className="h-10 w-10 rounded-full"
        alt="Profile picture"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-medium text-zinc-700">
          Jonathan Joel Vós
        </span>
        <span className=" truncate text-sm text-zinc-500">
          jonathanjonyjonathanjoelvos@gmail.com
        </span>
      </div>
      <button className="group ml-auto rounded-lg p-2 hover:bg-violet-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
