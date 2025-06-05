import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalAmount: number;
}

const CheckoutModal = ({
  isOpen,
  onClose,
  cartItems,
  totalAmount,
}: CheckoutModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    cardHolder: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckout = async () => {
    setIsProcessing(true);

    // Имитация обработки платежа
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          cardNumber: "",
          cardExpiry: "",
          cardCvv: "",
          cardHolder: "",
        });
      }, 2000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Заказ оформлен!</h3>
            <p className="text-gray-600">
              Спасибо за покупку. Мы свяжемся с вами для подтверждения заказа.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Оформление заказа</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Форма заказа */}
          <div className="space-y-6">
            {/* Контактная информация */}
            <div>
              <h4 className="font-medium mb-4">Контактная информация</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя и фамилия</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Адрес доставки</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    placeholder="Укажите адрес для доставки цифровых товаров"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Способ оплаты */}
            <div>
              <h4 className="font-medium mb-4">Способ оплаты</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Номер карты</Label>
                  <Input
                    id="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      handleInputChange("cardNumber", e.target.value)
                    }
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cardExpiry">Срок действия</Label>
                    <Input
                      id="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={(e) =>
                        handleInputChange("cardExpiry", e.target.value)
                      }
                      placeholder="ММ/ГГ"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardCvv">CVV</Label>
                    <Input
                      id="cardCvv"
                      value={formData.cardCvv}
                      onChange={(e) =>
                        handleInputChange("cardCvv", e.target.value)
                      }
                      placeholder="123"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cardHolder">Имя владельца карты</Label>
                  <Input
                    id="cardHolder"
                    value={formData.cardHolder}
                    onChange={(e) =>
                      handleInputChange("cardHolder", e.target.value)
                    }
                    placeholder="IVAN IVANOV"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Сводка заказа */}
          <div>
            <Card className="p-6 sticky top-0">
              <h4 className="font-medium mb-4">Ваш заказ</h4>

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

                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Итого:</span>
                    <span>{totalAmount.toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isProcessing ? "Обработка заказа..." : "Оформить заказ"}
                </Button>
                <Button variant="outline" onClick={onClose} className="w-full">
                  Отмена
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
