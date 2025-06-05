import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, Check } from "lucide-react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface QuickCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalAmount: number;
}

const QuickCheckoutModal = ({
  isOpen,
  onClose,
  cartItems,
  totalAmount,
}: QuickCheckoutModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Данные способа оплаты из профиля (обычно загружались бы из API)
  const savedPaymentMethod = {
    cardNumber: "**** **** **** 3456",
    cardHolder: "Анна Иванова",
    cardExpiry: "12/26",
  };

  const handleQuickPurchase = async () => {
    setIsProcessing(true);

    // Имитация обработки платежа
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
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
            <h3 className="text-xl font-semibold mb-2">Покупка завершена!</h3>
            <p className="text-gray-600">
              Спасибо за покупку. Товары будут доступны в вашем профиле.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Быстрая покупка</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Товары */}
          <div>
            <h4 className="font-medium mb-3">Товары к покупке</h4>
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
                </div>
              ))}
              <div className="border-t pt-2 font-semibold flex justify-between">
                <span>Итого:</span>
                <span>{totalAmount.toLocaleString()} ₽</span>
              </div>
            </div>
          </div>

          {/* Способ оплаты */}
          <div>
            <h4 className="font-medium mb-3">Способ оплаты</h4>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium">
                    {savedPaymentMethod.cardNumber}
                  </div>
                  <div className="text-sm text-gray-600">
                    {savedPaymentMethod.cardHolder} •{" "}
                    {savedPaymentMethod.cardExpiry}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Кнопки */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Отмена
            </Button>
            <Button
              onClick={handleQuickPurchase}
              disabled={isProcessing}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              {isProcessing ? "Обработка..." : "Купить"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickCheckoutModal;
