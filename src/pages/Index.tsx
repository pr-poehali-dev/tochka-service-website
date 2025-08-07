import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-dark via-gray-900 to-tech-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-tech-dark/90 backdrop-blur-sm border-b border-electric/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://cdn.poehali.dev/files/b1efe3fc-6ed5-4386-87c3-102f503d2e24.JPG" 
                  alt="Логотип Точка" 
                  className="h-10 w-auto"
                />
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-electric">
                <Icon name="Phone" size={18} />
                <a href="tel:8-9029-38-33-33" className="text-lg font-medium hover:text-neon-green transition-colors">
                  8-9029-38-33-33
                </a>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#hero" className="hover:text-electric transition-colors">Главная</a>
              <a href="#services" className="hover:text-electric transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-electric transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric/10 to-neon-green/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Сервисный центр
                <span className="block bg-gradient-to-r from-electric to-neon-green bg-clip-text text-transparent">
                  ТОЧКА
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Профессиональный ремонт компьютеров, ноутбуков и оргтехники. 
                Заправка и восстановление картриджей с гарантией качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setShowContactForm(true)}
                  className="bg-gradient-to-r from-electric to-neon-green hover:scale-105 transform transition-all duration-300 text-lg px-8 py-3"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
                <Button variant="outline" size="lg" className="border-electric text-electric hover:bg-electric hover:text-white transition-all duration-300 text-lg px-8 py-3">
                  <Icon name="Info" size={20} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-glow">
                <img 
                  src="/img/e8e49ade-174c-480c-bd47-c54aea4d490a.jpg" 
                  alt="Современный сервисный центр" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Наши <span className="text-electric">услуги</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию компьютерной техники
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-tech-dark/50 border-gray-800 hover:border-electric/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-electric to-neon-green flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <Icon name="Monitor" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Ремонт ПК</h3>
                <p className="text-gray-400">Диагностика и ремонт настольных компьютеров любой сложности</p>
              </CardContent>
            </Card>

            <Card className="bg-tech-dark/50 border-gray-800 hover:border-electric/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-electric to-neon-green flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <Icon name="Laptop" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Ремонт ноутбуков</h3>
                <p className="text-gray-400">Восстановление работоспособности ноутбуков всех марок</p>
              </CardContent>
            </Card>

            <Card className="bg-tech-dark/50 border-gray-800 hover:border-electric/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-electric to-neon-green flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <Icon name="Printer" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Ремонт оргтехники</h3>
                <p className="text-gray-400">Обслуживание принтеров, МФУ и другой офисной техники</p>
              </CardContent>
            </Card>

            <Card className="bg-tech-dark/50 border-gray-800 hover:border-electric/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-electric to-neon-green flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <Icon name="Package" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Заправка картриджей</h3>
                <p className="text-gray-400">Заправка и восстановление картриджей с гарантией качества</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Свяжитесь с <span className="text-neon-green">нами</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Готовы помочь с любыми вопросами по ремонту техники
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-electric/10 to-neon-green/10 border-electric/30 hover:border-electric transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-electric flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Телефон</h3>
                <p className="text-gray-300">8-9029-38-33-33</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-electric/10 to-neon-green/10 border-electric/30 hover:border-electric transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-neon-green flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-tech-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-300">htclub@bk.ru</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-electric/10 to-neon-green/10 border-electric/30 hover:border-electric transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-electric flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Адрес</h3>
                <p className="text-gray-300">г. Тамбов, Бульвар Энтузиастов 1"Г"</p>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Как нас найти</h3>
              <p className="text-gray-400">г. Тамбов, Бульвар Энтузиастов 1"Г"</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-electric/20">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f7c8a5c4d2e1f3b9a6c7d8e9f0a1b2c&amp;source=constructor"
                  width="100%" 
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Карта местоположения сервисного центра Точка в Тамбове"
                />
                <div className="absolute inset-0 pointer-events-none border-2 border-electric/30 rounded-2xl animate-glow"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-electric to-neon-green hover:scale-105 transform transition-all duration-300 text-lg px-10 py-4"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-dark border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/b1efe3fc-6ed5-4386-87c3-102f503d2e24.JPG" 
                alt="Логотип Точка" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400">© 2024 Сервисный центр "Точка". Все права защищены.</p>
          </div>
        </div>
      </footer>
      
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
};

export default Index;