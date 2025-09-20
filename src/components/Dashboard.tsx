import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

const stats = [
  {
    title: 'Общие продажи',
    value: '₽2,847,230',
    change: '+12.5%',
    changeType: 'positive',
    icon: 'TrendingUp'
  },
  {
    title: 'Активные пользователи',
    value: '12,847',
    change: '+8.2%',
    changeType: 'positive',
    icon: 'Users'
  },
  {
    title: 'Конверсия',
    value: '4.23%',
    change: '-2.1%',
    changeType: 'negative',
    icon: 'Target'
  },
  {
    title: 'Средний чек',
    value: '₽8,340',
    change: '+5.7%',
    changeType: 'positive',
    icon: 'CreditCard'
  }
]

const recentActivity = [
  {
    user: 'Анна Петрова',
    action: 'Создала новый заказ',
    time: '2 мин назад',
    avatar: 'AP'
  },
  {
    user: 'Михаил Сидоров',
    action: 'Обновил профиль',
    time: '15 мин назад',
    avatar: 'МС'
  },
  {
    user: 'Елена Козлова',
    action: 'Отменила заказ #4521',
    time: '32 мин назад',
    avatar: 'ЕК'
  },
  {
    user: 'Дмитрий Волков',
    action: 'Оплатил подписку',
    time: '1 час назад',
    avatar: 'ДВ'
  }
]

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Дашборд</h1>
          <p className="text-muted-foreground mt-1">Обзор ключевых метрик и активности</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Calendar" size={16} />
          <span>Последнее обновление: 2 мин назад</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">
                {stat.title}
              </CardTitle>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={stat.icon as any} size={16} className="text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <p className={`text-xs flex items-center gap-1 mt-1 ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                <Icon 
                  name={stat.changeType === 'positive' ? 'ArrowUp' : 'ArrowDown'} 
                  size={12} 
                />
                {stat.change} за месяц
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Sources */}
        <Card className="lg:col-span-2 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Источники трафика</CardTitle>
            <CardDescription className="text-muted-foreground">
              Распределение посетителей по источникам
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Органический поиск</span>
                </div>
                <span className="text-sm text-muted-foreground">42%</span>
              </div>
              <Progress value={42} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Социальные сети</span>
                </div>
                <span className="text-sm text-muted-foreground">28%</span>
              </div>
              <Progress value={28} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium">Прямые переходы</span>
                </div>
                <span className="text-sm text-muted-foreground">18%</span>
              </div>
              <Progress value={18} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">Реферальные</span>
                </div>
                <span className="text-sm text-muted-foreground">12%</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Недавняя активность</CardTitle>
            <CardDescription className="text-muted-foreground">
              Последние действия пользователей
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">{activity.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-card-foreground">
                      {activity.user}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}