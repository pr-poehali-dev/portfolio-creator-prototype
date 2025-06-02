import { useState } from "react";
import { X, Upload, Image as ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface AddWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddWorkModal = ({ isOpen, onClose }: AddWorkModalProps) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Добавить работу
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Upload */}
          <div className="space-y-2">
            <Label htmlFor="images">Изображения</Label>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
            >
              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">
                Перетащите изображения сюда или
              </p>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Выберите файлы
              </Button>
              <p className="text-xs text-gray-500 mt-2">PNG, JPG до 10 MB</p>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Название работы</Label>
            <Input id="title" placeholder="Введите название вашей работы" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              placeholder="Расскажите о вашей работе, процессе создания, используемых инструментах..."
              rows={4}
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Категория</Label>
            <select
              id="category"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white"
            >
              <option value="">Выберите категорию</option>
              <option value="graphic-design">Графический дизайн</option>
              <option value="web-design">Веб-дизайн</option>
              <option value="illustration">Иллюстрация</option>
              <option value="photography">Фотография</option>
              <option value="animation">Анимация</option>
              <option value="branding">Брендинг</option>
              <option value="ui-ux">UI/UX</option>
            </select>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label htmlFor="tags">Теги</Label>
            <Input
              id="tags"
              placeholder="веб-дизайн, figma, ui/ux (разделите запятыми)"
            />
          </div>

          {/* Visibility */}
          <div className="space-y-2">
            <Label>Видимость</Label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  className="mr-2"
                  defaultChecked
                />
                Публичная
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  className="mr-2"
                />
                Приватная
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Опубликовать работу
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddWorkModal;
