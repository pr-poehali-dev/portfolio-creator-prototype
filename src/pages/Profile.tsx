import { useState } from "react";
import { Edit, MapPin, Link as LinkIcon, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import WorkCard from "@/components/WorkCard";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userWorks = [
    {
      id: "1",
      title: "Современный веб-дизайн для стартапа",
      author: "Анна Иванова",
      image:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop",
      likes: 124,
      views: 2856,
      comments: 18,
      tags: ["Веб-дизайн", "UI/UX", "Figma"],
    },
    {
      id: "2",
      title: 'Брендинг для кофейни "Утро"',
      author: "Анна Иванова",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
      likes: 89,
      views: 1534,
      comments: 12,
      tags: ["Брендинг", "Логотип", "Айдентика"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Profile Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              АИ
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Анна Иванова
                  </h1>
                  <p className="text-gray-600">
                    UI/UX Designer & Creative Director
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Редактировать
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Москва, Россия
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Участник с 2020
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Создаю уникальные цифровые продукты с фокусом на
                пользовательский опыт. Специализируюсь на веб-дизайне, мобильных
                интерфейсах и брендинге.
              </p>

              <div className="flex gap-3">
                <Button size="sm" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Связаться
                </Button>
                <Button size="sm" variant="outline">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Сайт
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Tabs defaultValue="works" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="works">Работы ({userWorks.length})</TabsTrigger>
            <TabsTrigger value="projects">Проекты (3)</TabsTrigger>
            <TabsTrigger value="about">О себе</TabsTrigger>
          </TabsList>

          <TabsContent value="works">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userWorks.map((work) => (
                <WorkCard key={work.id} {...work} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">
                  Проект E-commerce
                </h3>
                <p className="text-gray-600 mb-4">
                  Полный редизайн интернет-магазина
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>5 работ</span>
                  <span>2024</span>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="about">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Обо мне</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Я UI/UX дизайнер с более чем 5-летним опытом создания цифровых
                  продуктов. Моя страсть — создавать интуитивно понятные и
                  визуально привлекательные интерфейсы.
                </p>
                <p>
                  Работала с такими компаниями как Яндекс, Mail.ru Group и
                  множеством стартапов. Специализируюсь на исследовании
                  пользователей, прототипировании и системах дизайна.
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
