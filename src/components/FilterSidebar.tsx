import { Card } from "@/components/ui/card";

const FilterSidebar = () => {
  const categories = [
    "Все работы",
    "Графический дизайн",
    "Веб-дизайн",
    "Иллюстрация",
    "Фотография",
    "Анимация",
    "Брендинг",
    "UI/UX",
    "Типографика",
  ];

  const tools = [
    "Adobe Photoshop",
    "Figma",
    "Adobe Illustrator",
    "Sketch",
    "Adobe After Effects",
    "Blender",
  ];

  return (
    <div className="w-64 space-y-6">
      {/* Categories */}
      <Card className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Категории</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                index === 0
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Card>

      {/* Tools */}
      <Card className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Инструменты</h3>
        <div className="space-y-2">
          {tools.map((tool, index) => (
            <label
              key={index}
              className="flex items-center text-sm text-gray-600"
            >
              <input type="checkbox" className="mr-3 rounded" />
              {tool}
            </label>
          ))}
        </div>
      </Card>

      {/* Color Filter */}
      <Card className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Цвета</h3>
        <div className="grid grid-cols-6 gap-2">
          {[
            "#FF5733",
            "#33FF57",
            "#3357FF",
            "#FF33F5",
            "#F5FF33",
            "#33F5FF",
            "#FF8C33",
            "#8C33FF",
            "#33FF8C",
            "#FF338C",
            "#8CFF33",
            "#338CFF",
          ].map((color, index) => (
            <button
              key={index}
              className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-colors"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FilterSidebar;
