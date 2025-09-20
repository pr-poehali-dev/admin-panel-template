import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader } from '@/components/ui/sidebar'
import Icon from '@/components/ui/icon'

type AdminView = 'dashboard' | 'analytics' | 'database' | 'reports' | 'users'

interface AdminSidebarProps {
  currentView: AdminView
  onViewChange: (view: AdminView) => void
}

const menuItems = [
  {
    id: 'dashboard' as AdminView,
    label: 'Дашборд',
    icon: 'LayoutDashboard'
  },
  {
    id: 'analytics' as AdminView,
    label: 'Аналитика',
    icon: 'TrendingUp'
  },
  {
    id: 'database' as AdminView,
    label: 'База данных',
    icon: 'Database'
  },
  {
    id: 'reports' as AdminView,
    label: 'Отчеты',
    icon: 'FileText'
  },
  {
    id: 'users' as AdminView,
    label: 'Пользователи',
    icon: 'Users'
  }
]

export function AdminSidebar({ currentView, onViewChange }: AdminSidebarProps) {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Shield" size={18} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-sidebar-foreground">Admin Panel</h1>
            <p className="text-xs text-sidebar-foreground/60">Система управления</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80 px-3 text-xs font-medium">
            Навигация
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={currentView === item.id}
                    onClick={() => onViewChange(item.id)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-sidebar-accent"
                  >
                    <Icon name={item.icon as any} size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-sidebar-foreground/80 px-3 text-xs font-medium">
            Настройки
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-sidebar-accent">
                  <Icon name="Settings" size={18} />
                  <span className="text-sm font-medium">Настройки</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-sidebar-accent">
                  <Icon name="LogOut" size={18} />
                  <span className="text-sm font-medium">Выйти</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}