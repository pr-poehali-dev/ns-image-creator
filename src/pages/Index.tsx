
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/10">
      <div className="container max-w-3xl text-center px-4">
        <h1 className="text-5xl font-bold tracking-tight mb-4 background-gradient">
          Нейрогенератор изображений
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Создавайте удивительные изображения с помощью искусственного интеллекта
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="gap-2">
            <Link to="/generator">
              <Icon name="ImagePlus" />
              Начать создавать
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#features">
              <Icon name="Info" />
              Узнать больше
            </a>
          </Button>
        </div>
        
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl mb-12">
          <img 
            src="https://source.unsplash.com/random/1200x800/?ai,art,generation" 
            alt="AI Generated Art" 
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 backdrop-blur-sm">
            <p className="text-sm">Примеры сгенерированных изображений</p>
          </div>
        </div>
        
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center p-4">
            <Icon name="Palette" size={48} className="mb-4 text-primary" />
            <h3 className="text-xl font-medium mb-2">5 уникальных стилей</h3>
            <p className="text-muted-foreground text-center">
              Выбирайте из различных стилей: от реализма до абстракции
            </p>
          </div>
          
          <div className="flex flex-col items-center p-4">
            <Icon name="Languages" size={48} className="mb-4 text-primary" />
            <h3 className="text-xl font-medium mb-2">Поддержка русского языка</h3>
            <p className="text-muted-foreground text-center">
              Создавайте промты на русском языке без ограничений
            </p>
          </div>
          
          <div className="flex flex-col items-center p-4">
            <Icon name="Lightbulb" size={48} className="mb-4 text-primary" />
            <h3 className="text-xl font-medium mb-2">Готовые промты</h3>
            <p className="text-muted-foreground text-center">
              Используйте готовые промты или создавайте свои собственные
            </p>
          </div>
        </div>
        
        <Button asChild variant="outline" className="mb-8">
          <Link to="/generator">
            <Icon name="ArrowRight" />
            Перейти к генератору
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
