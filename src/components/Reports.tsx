import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Отчеты</h1>
          <p className="text-muted-foreground mt-1">Создание и управление отчетами системы</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Icon name="Plus" size={16} className="mr-2" />
          Создать отчет
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Финансовый отчет',
            description: 'Ежемесячные финансовые показатели',
            lastGenerated: '2 часа назад',
            status: 'ready',
            type: 'financial'
          },
          {
            title: 'Отчет по пользователям',
            description: 'Активность и регистрации пользователей',
            lastGenerated: '1 день назад',
            status: 'processing',
            type: 'users'
          },
          {
            title: 'Отчет по продажам',
            description: 'Статистика продаж и конверсии',
            lastGenerated: '3 дня назад',
            status: 'ready',
            type: 'sales'
          },
          {
            title: 'Технический отчет',
            description: 'Производительность и ошибки системы',
            lastGenerated: '1 неделя назад',
            status: 'error',
            type: 'technical'
          },
          {
            title: 'Маркетинговый отчет',
            description: 'Эффективность рекламных кампаний',
            lastGenerated: '5 дней назад',
            status: 'ready',
            type: 'marketing'
          },
          {
            title: 'Отчет безопасности',
            description: 'Инциденты и угрозы безопасности',
            lastGenerated: '2 дня назад',
            status: 'ready',
            type: 'security'
          }
        ].map((report, index) => (
          <Card key={index} className="border-border bg-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Icon 
                    name={
                      report.type === 'financial' ? 'DollarSign' :
                      report.type === 'users' ? 'Users' :
                      report.type === 'sales' ? 'TrendingUp' :
                      report.type === 'technical' ? 'Settings' :
                      report.type === 'marketing' ? 'Megaphone' :
                      'Shield'
                    } 
                    size={20} 
                    className="text-primary" 
                  />
                  <CardTitle className="text-lg text-card-foreground">{report.title}</CardTitle>
                </div>
                <Badge 
                  variant="outline" 
                  className={
                    report.status === 'ready' ? 'text-green-600' :
                    report.status === 'processing' ? 'text-yellow-600' :
                    'text-red-600'
                  }
                >
                  {report.status === 'ready' ? 'Готов' :
                   report.status === 'processing' ? 'Обработка' :
                   'Ошибка'}
                </Badge>
              </div>
              <CardDescription className="text-muted-foreground">
                {report.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Обновлен: {report.lastGenerated}
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Icon name="Download" size={14} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Eye" size={14} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="RefreshCw" size={14} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Автоматические отчеты</CardTitle>
          <CardDescription className="text-muted-foreground">
            Настройка регулярной генерации отчетов
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Ежедневный сводный отчет', frequency: 'Каждый день в 09:00', active: true },
              { name: 'Недельный отчет по продажам', frequency: 'Каждый понедельник', active: true },
              { name: 'Месячный финансовый отчет', frequency: '1 числа каждого месяца', active: false },
              { name: 'Квартальный отчет руководству', frequency: 'Каждый квартал', active: true }
            ].map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                <div>
                  <p className="font-medium text-card-foreground">{schedule.name}</p>
                  <p className="text-sm text-muted-foreground">{schedule.frequency}</p>
                </div>
                <Badge 
                  variant="outline" 
                  className={schedule.active ? 'text-green-600' : 'text-gray-600'}
                >
                  {schedule.active ? 'Активен' : 'Отключен'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}