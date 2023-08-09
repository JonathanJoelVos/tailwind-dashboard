'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import TabItem from './TabItem'

export default function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab01')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          title="My details"
          value="tab01"
          isSelected={currentTab === 'tab01'}
        />
        <TabItem
          title="Profile"
          value="tab02"
          isSelected={currentTab === 'tab02'}
        />
        <TabItem
          title="Password"
          value="tab03"
          isSelected={currentTab === 'tab03'}
        />
        <TabItem
          title="Team"
          value="tab04"
          isSelected={currentTab === 'tab04'}
        />
        <TabItem
          title="Plan"
          value="tab05"
          isSelected={currentTab === 'tab05'}
        />
        <TabItem
          title="Billing"
          value="tab06"
          isSelected={currentTab === 'tab06'}
        />
        <TabItem
          title="Email"
          value="tab07"
          isSelected={currentTab === 'tab07'}
        />
        <TabItem
          title="Notification"
          value="tab08"
          isSelected={currentTab === 'tab08'}
        />
        <TabItem
          title="Integrations"
          value="tab09"
          isSelected={currentTab === 'tab09'}
        />
        <TabItem
          title="API"
          value="tab10"
          isSelected={currentTab === 'tab10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
