'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'
import Agents from '@/components/Agents'
import Tasks from '@/components/Tasks'
import Reports from '@/components/Reports'
import Clients from '@/components/Clients'
import Settings from '@/components/Settings'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'agents':
        return <Agents />
      case 'tasks':
        return <Tasks />
      case 'reports':
        return <Reports />
      case 'clients':
        return <Clients />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-8">
        {renderContent()}
      </main>
    </div>
  )
}
