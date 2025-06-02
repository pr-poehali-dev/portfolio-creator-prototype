import { useState } from "react";
import { Plus, Grid, List, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";

const Projects = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showCreateForm, setShowCreateForm] = useState(false);

  const projects = [
    {
      id: "1",
      title: "E-commerce Redesign",
      description: "Полный редизайн интернет-магазина с фокусом на UX",
      worksCount: 8,
      visibility: "public",
      lastUpdated: "2024-05-15",
      cover:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=300&h=200&fit=crop",
    },
    {
      id: "2",
      title: "Mobile Banking App",
      description: "Дизайн мобильного банковского приложения",
      worksCount: 12,
      visibility: "private",
      lastUpdated: "2024-05-10",
      cover:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
    },
    {
      id: "3",
      title: "Brand Identity Package",
      description: "Комплексная айдентика для стартапа",
      worksCount: 6,
      visibility: "public",
      lastUpdated: "2024-05-08",
      cover:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Мои проекты
            </h1>
            <p className="text-gray-600">
              Управляйте своими творческими проектами
            </p>
          </div>

          <Button onClick={() => setShowCreateForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Создать проект
          </Button>
        </div>

        {/* Filters and Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input placeholder="Поиск проектов..." className="w-64" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Фильтры
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Create Project Form */}
        {showCreateForm && (
          <Card className="p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">Создать новый проект</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Название проекта
                </label>
                <Input placeholder="Введите название проекта" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Видимость
                </label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2">
                  <option value="public">Публичный</option>
                  <option value="private">Приватный</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Описание</label>
              <textarea
                className="w-full border border-gray-200 rounded-lg px-3 py-2 h-24"
                placeholder="Опишите ваш проект..."
              />
            </div>
            <div className="flex gap-3">
              <Button>Создать проект</Button>
              <Button
                variant="outline"
                onClick={() => setShowCreateForm(false)}
              >
                Отмена
              </Button>
            </div>
          </Card>
        )}

        {/* Projects Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        project.visibility === "public"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {project.visibility === "public"
                        ? "Публичный"
                        : "Приватный"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{project.worksCount} работ</span>
                    <span>
                      Обновлен{" "}
                      {new Date(project.lastUpdated).toLocaleDateString(
                        "ru-RU",
                      )}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          project.visibility === "public"
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {project.visibility === "public"
                          ? "Публичный"
                          : "Приватный"}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      {project.description}
                    </p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{project.worksCount} работ</span>
                      <span>
                        Обновлен{" "}
                        {new Date(project.lastUpdated).toLocaleDateString(
                          "ru-RU",
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
