import { useState } from "react";
import {
  Heart,
  Eye,
  MessageCircle,
  Share2,
  Bookmark,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const projectImages = [
    "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 py-4">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>
      </div>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          {/* Project Header */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  АИ
                </div>
                <div>
                  <h3 className="font-semibold">Анна Иванова</h3>
                  <p className="text-sm text-gray-600">UI/UX Designer</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? "text-red-500 border-red-200" : ""}
                >
                  <Heart
                    className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`}
                  />
                  {isLiked ? "125" : "124"}
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Поделиться
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSaved(!isSaved)}
                  className={isSaved ? "text-blue-500 border-blue-200" : ""}
                >
                  <Bookmark
                    className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`}
                  />
                </Button>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Современный веб-дизайн для стартапа
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                2,856 просмотров
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-1" />
                18 комментариев
              </div>
              <span>Опубликовано 15 мая 2024</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Веб-дизайн", "UI/UX", "Figma", "React", "Стартап"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Project Images */}
          <div className="space-y-4 p-6">
            {projectImages.map((image, index) => (
              <div key={index} className="w-full">
                <img
                  src={image}
                  alt={`Проект изображение ${index + 1}`}
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>

          {/* Project Description */}
          <div className="p-6 border-t">
            <h2 className="text-xl font-semibold mb-4">О проекте</h2>
            <div className="prose prose-gray max-w-none">
              <p className="mb-4">
                Этот проект представляет собой комплексный редизайн
                веб-платформы для технологического стартапа. Основная цель —
                создать современный, интуитивно понятный интерфейс, который
                повысит конверсию и улучшит пользовательский опыт.
              </p>
              <p className="mb-4">
                В процессе работы было проведено исследование пользователей,
                создана система дизайна и разработаны интерактивные прототипы.
                Особое внимание уделено мобильной версии и accessibility.
              </p>
              <p>
                Результат: увеличение конверсии на 40%, улучшение метрик
                пользовательского опыта и положительные отзывы от клиентов.
              </p>
            </div>
          </div>
        </div>

        {/* Related Works */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Другие работы автора</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="group cursor-pointer overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop"
                  alt="Другая работа"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Брендинг для кофейни "Утро"
                </h3>
                <p className="text-sm text-gray-600">
                  89 лайков • 1,534 просмотра
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
