import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Аналитика</h1>
          <p className="text-muted-foreground mt-1">Детальная аналитика и метрики производительности</p>
        </div>
        <Badge variant="outline" className="text-sm">
          <Icon name="RefreshCw" size={14} className="mr-1" />
          Обновлено сейчас
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">График посещений</CardTitle>
            <CardDescription className="text-muted-foreground">За последние 30 дней</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-center">
                <Icon name="BarChart3" size={48} className="text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">График будет загружен</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Топ страницы</CardTitle>
            <CardDescription className="text-muted-foreground">Самые популярные разделы</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { page: '/dashboard', views: 12453, change: '+12%' },
                { page: '/products', views: 8934, change: '+8%' },
                { page: '/analytics', views: 6721, change: '+15%' },
                { page: '/users', views: 4532, change: '+3%' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <div>
                    <p className="font-medium text-card-foreground">{item.page}</p>
                    <p className="text-sm text-muted-foreground">{item.views} просмотров</p>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    {item.change}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}