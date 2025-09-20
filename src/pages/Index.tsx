import { useState } from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AdminSidebar } from '@/components/AdminSidebar'
import { Dashboard } from '@/components/Dashboard'
import { UsersManagement } from '@/components/UsersManagement'
import { Analytics } from '@/components/Analytics'
import { Database } from '@/components/Database'
import { Reports } from '@/components/Reports'

type AdminView = 'dashboard' | 'analytics' | 'database' | 'reports' | 'users'

const Index = () => {
  const [currentView, setCurrentView] = useState<AdminView>('dashboard')

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'analytics':
        return <Analytics />
      case 'database':
        return <Database />
      case 'reports':
        return <Reports />
      case 'users':
        return <UsersManagement />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="dark min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex min-h-screen">
          <AdminSidebar 
            currentView={currentView} 
            onViewChange={setCurrentView} 
          />
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Index