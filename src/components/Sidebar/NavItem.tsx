import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
}
export default function NavItem({ icon: Icon, title }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="text-zinc-500 group-hover:text-violet-500">{title}</span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-500 group-hover:text-violet-500" />
    </a>
  )
}
