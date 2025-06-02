import { useState } from "react";
import { Save, Camera, Globe, Lock, Bell, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const Settings = () => {
  const [profileData, setProfileData] = useState({
    name: "Анна Иванова",
    email: "anna.ivanova@example.com",
    bio: "UI/UX дизайнер с 5+ годами опыта",
    location: "Москва, Россия",
    website: "https://anna-design.com",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
    projects: true,
  });

  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showEmail: false,
    allowMessages: true,
    indexBySearch: true,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Настройки</h1>
          <p className="text-gray-600">
            Управляйте своим профилем и предпочтениями
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="privacy">Приватность</TabsTrigger>
            <TabsTrigger value="notifications">Уведомления</TabsTrigger>
            <TabsTrigger value="appearance">Внешний вид</TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Информация профиля</h3>

              {/* Avatar */}
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  АИ
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Изменить фото
                  </Button>
                  <p className="text-sm text-gray-500 mt-1">JPG, PNG до 5 МБ</p>
                </div>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Местоположение</Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        location: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Веб-сайт</Label>
                  <Input
                    id="website"
                    value={profileData.website}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        website: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <Label htmlFor="bio">О себе</Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) =>
                    setProfileData({ ...profileData, bio: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <div className="flex justify-end mt-6">
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Сохранить изменения
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Настройки приватности
              </h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-medium">Публичный профиль</h4>
                    <p className="text-sm text-gray-600">
                      Ваш профиль виден всем пользователям
                    </p>
                  </div>
                  <Switch
                    checked={privacy.profilePublic}
                    onCheckedChange={(checked) =>
                      setPrivacy({ ...privacy, profilePublic: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-medium">Показывать email</h4>
                    <p className="text-sm text-gray-600">
                      Email адрес отображается в профиле
                    </p>
                  </div>
                  <Switch
                    checked={privacy.showEmail}
                    onCheckedChange={(checked) =>
                      setPrivacy({ ...privacy, showEmail: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-medium">Разрешить сообщения</h4>
                    <p className="text-sm text-gray-600">
                      Другие пользователи могут отправлять вам сообщения
                    </p>
                  </div>
                  <Switch
                    checked={privacy.allowMessages}
                    onCheckedChange={(checked) =>
                      setPrivacy({ ...privacy, allowMessages: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <h4 className="font-medium">
                      Индексация поисковыми системами
                    </h4>
                    <p className="text-sm text-gray-600">
                      Профиль может появляться в результатах поиска
                    </p>
                  </div>
                  <Switch
                    checked={privacy.indexBySearch}
                    onCheckedChange={(checked) =>
                      setPrivacy({ ...privacy, indexBySearch: checked })
                    }
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Уведомления
              </h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-medium">Email уведомления</h4>
                    <p className="text-sm text-gray-600">
                      Получать уведомления на email
                    </p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, email: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-medium">Push уведомления</h4>
                    <p className="text-sm text-gray-600">
                      Уведомления в браузере
                    </p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, push: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-medium">Маркетинговые рассылки</h4>
                    <p className="text-sm text-gray-600">
                      Новости и специальные предложения
                    </p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, marketing: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <h4 className="font-medium">Обновления проектов</h4>
                    <p className="text-sm text-gray-600">
                      Уведомления о лайках, комментариях и просмотрах
                    </p>
                  </div>
                  <Switch
                    checked={notifications.projects}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, projects: checked })
                    }
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Appearance */}
          <TabsContent value="appearance">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Внешний вид
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Тема</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="p-4 border-2 border-blue-500 rounded-lg bg-white">
                      <div className="w-full h-12 bg-white border rounded mb-2"></div>
                      <span className="text-sm">Светлая</span>
                    </button>
                    <button className="p-4 border-2 border-gray-200 rounded-lg bg-gray-900">
                      <div className="w-full h-12 bg-gray-800 rounded mb-2"></div>
                      <span className="text-sm text-white">Темная</span>
                    </button>
                    <button className="p-4 border-2 border-gray-200 rounded-lg bg-gradient-to-br from-white to-gray-100">
                      <div className="w-full h-12 bg-gradient-to-r from-white to-gray-200 rounded mb-2"></div>
                      <span className="text-sm">Авто</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Размер сетки портфолио</h4>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border-2 border-blue-500 rounded-lg bg-blue-50 text-blue-600">
                      Средний
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-200 rounded-lg">
                      Большой
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-200 rounded-lg">
                      Компактный
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
