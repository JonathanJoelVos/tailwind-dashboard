'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}
export default function TabItem({ value, title, isSelected }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="font-mediumtext-zinc-500 relative px-1 pb-4 text-sm  hover:text-violet-500 data-[state=active]:text-violet-500"
    >
      {title}
      {isSelected && (
        <motion.div
          layoutId="layout-id"
          className="absolute -bottom-0.5 left-0 right-0 h-0.5 w-full bg-violet-500"
        />
      )}
    </Tabs.Trigger>
  )
}
