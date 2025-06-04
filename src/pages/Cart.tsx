import { useState } from "react";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  title: string;
  author: string;
  image: string;
  price: number;
  quantity: number;
  type: "template" | "design" | "photo";
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "Минималистичный веб-дизайн",
      author: "Анна Петрова",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      price: 2500,
      quantity: 1,
      type: "template",
    },
    {
      id: "2",
      title: "Фотосессия в студии",
      author: "Максим Иванов",
      image:
        "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=400&h=300&fit=crop",
      price: 5000,
      quantity: 2,
      type: "photo",
    },
    {
      id: "3",
      title: "Логотип для стартапа",
      author: "Елена Сидорова",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      price: 8000,
      quantity: 1,
      type: "design",
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "template":
        return "Шаблон";
      case "design":
        return "Дизайн";
      case "photo":
        return "Фото";
      default:
        return type;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Корзина</h1>
          <span className="text-gray-500">({cartItems.length} товаров)</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">
              Корзина пуста
            </h2>
            <p className="text-gray-500 mb-6">
              Добавьте творческие работы для покупки
            </p>
            <Button asChild>
              <a href="/">Перейти к работам</a>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="space-y-6">
                  {cartItems.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {item.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Автор: {item.author}
                              </p>
                              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1">
                                {getTypeLabel(item.type)}
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-lg">
                                {(item.price * item.quantity).toLocaleString()}{" "}
                                ₽
                              </div>
                              {item.quantity > 1 && (
                                <div className="text-sm text-gray-500">
                                  {item.price.toLocaleString()} ₽ за шт.
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < cartItems.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="p-6 sticky top-8">
                <h3 className="text-xl font-semibold mb-4">Итого</h3>

                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.title} × {item.quantity}
                      </span>
                      <span>
                        {(item.price * item.quantity).toLocaleString()} ₽
                      </span>
                    </div>
                  ))}

                  <Separator />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Общая сумма:</span>
                    <span>{totalAmount.toLocaleString()} ₽</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Перейти к оплате
                </Button>

                <div className="mt-4 text-center">
                  <Button variant="ghost" asChild>
                    <a href="/">Продолжить покупки</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
