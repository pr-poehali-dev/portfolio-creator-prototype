import WorkCard from "./WorkCard";

const WorkGrid = () => {
  // Примеры работ
  const works = [
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
      author: "Максим Петров",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
      likes: 89,
      views: 1534,
      comments: 12,
      tags: ["Брендинг", "Логотип", "Айдентика"],
    },
    {
      id: "3",
      title: "Иллюстрации для детской книги",
      author: "София Козлова",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      likes: 256,
      views: 4721,
      comments: 34,
      tags: ["Иллюстрация", "Детские книги", "Акварель"],
    },
    {
      id: "4",
      title: "Мобильное приложение для фитнеса",
      author: "Дмитрий Волков",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      likes: 178,
      views: 3245,
      comments: 22,
      tags: ["UI/UX", "Мобильные приложения", "Фитнес"],
    },
    {
      id: "5",
      title: "Фотосессия для модного бренда",
      author: "Елена Морозова",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      likes: 342,
      views: 6891,
      comments: 45,
      tags: ["Фотография", "Мода", "Портрет"],
    },
    {
      id: "6",
      title: "Анимация для рекламного ролика",
      author: "Игорь Смирнов",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      likes: 98,
      views: 2134,
      comments: 16,
      tags: ["Анимация", "Motion Graphics", "After Effects"],
    },
  ];

  return (
    <div className="flex-1">
      {/* Sort Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Сортировать:</span>
          <select className="text-sm border border-gray-200 rounded-lg px-3 py-1 bg-white">
            <option>Рекомендуемые</option>
            <option>Недавние</option>
            <option>Популярные</option>
            <option>Просматриваемые</option>
          </select>
        </div>
        <span className="text-sm text-gray-500">
          {works.length} работ найдено
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work) => (
          <WorkCard key={work.id} {...work} />
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          Загрузить еще
        </button>
      </div>
    </div>
  );
};

export default WorkGrid;
