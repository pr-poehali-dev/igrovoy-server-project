import Header from "@/components/ui/header";
import GameCard from "@/components/game-card";
import ServerStats from "@/components/server-stats";
import { Button } from "@/components/ui/button";
import { Server, Activity, Users } from "lucide-react";

const Index = () => {
  const featuredGames = [
    {
      title: "DayZ Основной",
      description: "Выживание в постапокалиптическом мире с зомби, PvP и расширенным лутом. Уникальные территории и события.",
      imageUrl: "https://images.unsplash.com/photo-1597336346142-486e9bf9eb61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      players: 82,
      maxPlayers: 100,
      genre: "Выживание",
      online: true
    },
    {
      title: "DayZ PvP Арена",
      description: "Интенсивный PvP режим с быстрым лутом и частыми боями в ключевых локациях Черноруси.",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      players: 45,
      maxPlayers: 50,
      genre: "PvP",
      online: true
    },
    {
      title: "DayZ Roleplay",
      description: "Погрузитесь в атмосферу выживания с глубоким ролевым процессом, фракциями и экономикой.",
      imageUrl: "https://images.unsplash.com/photo-1618176729090-253077a8f948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      players: 63,
      maxPlayers: 80,
      genre: "Roleplay",
      online: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero секция */}
        <section className="relative bg-[url('https://images.unsplash.com/photo-1624813743686-7f23e03b551d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center py-24 text-white">
          <div className="absolute inset-0 bg-black/70" />
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                DayZ Серверы для настоящих выживших
              </h1>
              <p className="text-lg mb-6 text-gray-200">
                Погрузитесь в мир постапокалипсиса с нашими стабильными DayZ серверами. Разнообразные моды, низкий пинг и дружелюбное сообщество
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90">Присоединиться сейчас</Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Список серверов
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Статистика */}
        <section className="py-12 container">
          <h2 className="text-3xl font-bold mb-8">Статистика серверов DayZ</h2>
          <ServerStats />
        </section>

        {/* Популярные серверы */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Наши DayZ серверы</h2>
              <Button variant="outline">Все серверы</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGames.map((game, index) => (
                <GameCard key={index} {...game} />
              ))}
            </div>
          </div>
        </section>

        {/* Моды и особенности */}
        <section className="py-12 container">
          <h2 className="text-3xl font-bold mb-8 text-center">Особенности наших серверов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Расширенный лут</h3>
              <p className="text-muted-foreground">
                Уникальные настройки спавна лута, больше оружия и снаряжения, включая редкие предметы
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Кастомные зоны</h3>
              <p className="text-muted-foreground">
                Уникальные локации для PvP, торговые зоны и опасные территории с особыми правилами
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Активная администрация</h3>
              <p className="text-muted-foreground">
                Всегда готовы помочь игрокам, регулярные ивенты и постоянные обновления контента
              </p>
            </div>
          </div>
        </section>

        {/* Таблица с модами */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Моды на наших серверах</h2>
            <div className="overflow-hidden rounded-lg border bg-card">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left font-medium">Название мода</th>
                    <th className="px-4 py-3 text-left font-medium">Описание</th>
                    <th className="px-4 py-3 text-left font-medium">Тип</th>
                    <th className="px-4 py-3 text-left font-medium">Сервер</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Expanded Weapons</td>
                    <td className="px-4 py-3 text-muted-foreground">Дополнительное оружие и модификации</td>
                    <td className="px-4 py-3">Оружие</td>
                    <td className="px-4 py-3">Все</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Custom Base Building</td>
                    <td className="px-4 py-3 text-muted-foreground">Расширенное строительство баз</td>
                    <td className="px-4 py-3">Строительство</td>
                    <td className="px-4 py-3">Основной, Roleplay</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Advanced Vehicles</td>
                    <td className="px-4 py-3 text-muted-foreground">Дополнительный транспорт с настройкой</td>
                    <td className="px-4 py-3">Транспорт</td>
                    <td className="px-4 py-3">Все</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Trader Mod</td>
                    <td className="px-4 py-3 text-muted-foreground">Торговые зоны и экономика</td>
                    <td className="px-4 py-3">Экономика</td>
                    <td className="px-4 py-3">Roleplay</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Как начать играть */}
        <section className="py-12 container">
          <h2 className="text-3xl font-bold mb-8 text-center">Как начать играть</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Установите DayZ</h3>
                  <p className="text-muted-foreground mb-2">Убедитесь, что у вас установлена актуальная версия DayZ в Steam</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Скачайте лаунчер DZSA</h3>
                  <p className="text-muted-foreground mb-2">Для удобной установки модов рекомендуем использовать DZSA Launcher</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Найдите наши серверы</h3>
                  <p className="text-muted-foreground mb-2">В поиске введите "DayZ Выживание" или найдите в списке популярных</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">Подключиться к серверу</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Футер */}
      <footer className="bg-card py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/logo-b.svg" alt="Лого" className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">DayZ Серверы</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 DayZ Выживание. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;