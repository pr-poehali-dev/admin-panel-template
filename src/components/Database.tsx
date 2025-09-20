import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export function Database() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">База данных</h1>
          <p className="text-muted-foreground mt-1">Управление данными и структурой базы</p>
        </div>
        <Badge variant="outline" className="text-green-600">
          <Icon name="CheckCircle" size={14} className="mr-1" />
          Подключено
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Таблицы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">24</div>
            <p className="text-sm text-muted-foreground">Активных таблиц</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Записи</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">847,392</div>
            <p className="text-sm text-muted-foreground">Общее количество</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Размер</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">2.4 GB</div>
            <p className="text-sm text-muted-foreground">Занято места</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Основные таблицы</CardTitle>
          <CardDescription className="text-muted-foreground">
            Структура и статистика главных таблиц системы
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'users', records: 12847, size: '156 MB', status: 'Активна' },
              { name: 'orders', records: 45692, size: '892 MB', status: 'Активна' },
              { name: 'products', records: 8934, size: '234 MB', status: 'Активна' },
              { name: 'analytics', records: 156432, size: '1.2 GB', status: 'Активна' }
            ].map((table, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Database" size={20} className="text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">{table.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {table.records.toLocaleString()} записей • {table.size}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="text-green-600">
                  {table.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}