import { useState } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import WorkGrid from "@/components/WorkGrid";
import AddWorkModal from "@/components/AddWorkModal";

const Index = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Покажите свои творческие работы миру
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Создавайте портфолио, находите вдохновение и общайтесь с творческим
            сообществом
          </p>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Начать создавать
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          <FilterSidebar />
          <WorkGrid />
        </div>
      </div>

      {/* Add Work Modal */}
      <AddWorkModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
};

export default Index;
