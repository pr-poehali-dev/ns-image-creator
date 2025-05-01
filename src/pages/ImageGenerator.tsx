
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

// Имитация API ключа
const API_KEY = "sk-dummy-key-not-real-1234567890abcdef";

// Стили изображений
const imageStyles = [
  { id: "realistic", name: "Реалистичный", description: "Фотореалистичное изображение" },
  { id: "anime", name: "Аниме", description: "В стиле японской анимации" },
  { id: "fantasy", name: "Фэнтези", description: "С элементами фэнтези и магии" },
  { id: "abstract", name: "Абстрактный", description: "Необычные формы и цвета" },
  { id: "retro", name: "Ретро", description: "Стилизовано под старину" },
];

// Предустановленные промты
const presetPrompts = [
  "Портрет красивой девушки в летнем платье",
  "Мужчина и женщина на пляже на закате",
  "Пара в романтической обстановке",
  "Портрет в стиле Ренессанса",
  "Космический пейзаж с лунным светом",
  "Портрет девушки в стиле киберпанк",
  "Стилизованный портрет с неоновой подсветкой",
  "Русалка на берегу моря",
  "Женщина в исторической одежде 19 века",
  "Портрет в стиле фэнтези с магическими элементами",
  "Силуэт пары на фоне города",
  "Девушка в образе воительницы",
  "Портрет в футуристическом стиле",
  "Историческая сцена в средневековом стиле",
  "Портрет в классическом живописном стиле",
  "Девушка с фантастическими украшениями",
  "Портрет с элементами природы",
  "Сюрреалистическая композиция с человеческими фигурами",
  "Девушка в образе из мира фэнтези",
  "Абстрактный портрет с необычными цветами"
];

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("realistic");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");

  // Функция для генерации изображения
  const generateImage = async () => {
    if (!prompt) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите текст промта",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Имитация загрузки и обработки API
    setTimeout(() => {
      // Создаем заглушку вместо реального запроса к API
      const placeholderUrl = `https://source.unsplash.com/random/800x600/?portrait,art,${style}`;
      
      setGeneratedImage(placeholderUrl);
      setLoading(false);
      
      toast({
        title: "Изображение сгенерировано",
        description: "Ваш промт был обработан успешно.",
      });
    }, 2000);
  };

  // Функция для выбора предустановленного промта
  const selectPresetPrompt = (presetPrompt: string) => {
    setPrompt(presetPrompt);
  };

  return (
    <div className="container max-w-5xl py-10 mx-auto">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Генератор изображений</h1>
          <p className="text-muted-foreground">
            Создавайте изображения с помощью искусственного интеллекта
          </p>
        </div>

        <Card className="bg-secondary/5">
          <CardHeader>
            <CardTitle>Настройки генерации</CardTitle>
            <CardDescription>
              Введите текстовый промт на русском языке и выберите стиль изображения
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">API ключ</Label>
              <div className="flex items-center space-x-2">
                <Input 
                  id="api-key" 
                  value={API_KEY.substring(0, 5) + "..." + API_KEY.substring(API_KEY.length - 5)} 
                  disabled 
                />
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Активен
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="prompt">Текстовый промт</Label>
              <Input
                id="prompt"
                placeholder="Опишите изображение, которое хотите создать..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="style">Стиль изображения</Label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger id="style">
                  <SelectValue placeholder="Выберите стиль" />
                </SelectTrigger>
                <SelectContent>
                  {imageStyles.map((styleOption) => (
                    <SelectItem key={styleOption.id} value={styleOption.id}>
                      {styleOption.name} - {styleOption.description}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={generateImage} 
              disabled={loading} 
              className="w-full"
            >
              {loading ? (
                <>
                  <Icon name="Loader2" className="animate-spin" />
                  Генерация...
                </>
              ) : (
                <>
                  <Icon name="ImagePlus" />
                  Создать изображение
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Tabs defaultValue="presets">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="presets">Готовые промты</TabsTrigger>
            <TabsTrigger value="results">Результат</TabsTrigger>
          </TabsList>
          
          <TabsContent value="presets" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              {presetPrompts.map((presetPrompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto py-2 justify-start text-left"
                  onClick={() => selectPresetPrompt(presetPrompt)}
                >
                  <span className="line-clamp-1">{presetPrompt}</span>
                </Button>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="results">
            <div className="flex flex-col items-center space-y-4 p-4 bg-secondary/5 rounded-md">
              {generatedImage ? (
                <div className="space-y-4 w-full">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border shadow-md">
                    <img
                      src={generatedImage}
                      alt="Сгенерированное изображение"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm font-medium">Использованный промт:</p>
                    <p className="text-sm text-muted-foreground bg-background p-2 rounded">{prompt}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium">Стиль:</p>
                      <Badge variant="secondary">
                        {imageStyles.find(s => s.id === style)?.name || style}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Download" />
                      Скачать
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Share2" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-10 text-center space-y-2">
                  <Icon name="Image" size={64} className="text-muted-foreground/50" />
                  <p className="text-lg font-medium">Здесь будет ваше изображение</p>
                  <p className="text-sm text-muted-foreground">
                    Введите промт и нажмите "Создать изображение"
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-sm text-muted-foreground">
          <p>Обратите внимание: Сервис имеет систему модерации содержимого. Некоторые запросы могут быть отклонены по соображениям безопасности и этики.</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
