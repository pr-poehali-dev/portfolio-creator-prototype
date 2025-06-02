import { Search, Plus, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-gray-900">
            <a href="/">PortfolioCreator</a>
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="/projects"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Проекты
            </a>
            <a
              href="/profile"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Профиль
            </a>
          </nav>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Поиск творческих работ"
            className="pl-10 bg-gray-50 border-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Опубликовать
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <a href="/settings">
              <User className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
