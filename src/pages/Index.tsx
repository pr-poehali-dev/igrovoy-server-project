import Header from "@/components/ui/header";
import GameCard from "@/components/game-card";
import ServerStats from "@/components/server-stats";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredGames = [
    {
      title: "Minecraft SMP",
      description: "Выживание с друзьями на нашем сервере Minecraft с множеством уникальных плагинов и мини-игр",
      imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      players: 124,
      maxPlayers: 200,
      genre: "Выживание",
      online: true
    },
    {
      title: "CS:GO Арена",
      description: "Соревновательный режим Counter-Strike: Global Offensive с уникальными картами и турнирами",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      players: 87,
      maxPlayers: 100,
      genre: "Шутер",
      online: true
    },
    {
      title: "Rust Сервер",
      description: "Хардкорное выживание в мире без правил. Строй базы и выживай любой ценой",
      imageUrl: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      players: 75,
      maxPlayers: 150,
      genre: "Выживание",
      online: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero секция */}
        <section className="relative bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center py-24 text-white">
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Лучший игровой сервер для твоих приключений
              </h1>
              <p className="text-lg mb-6 text-gray-200">
                Мы предлагаем стабильные серверы с высоким аптаймом, низким пингом и дружелюбным комьюнити
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90">Начать играть</Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Статистика */}
        <section className="py-12 container">
          <h2 className="text-3xl font-bold mb-8">Статистика сервера</h2>
          <ServerStats />
        </section>

        {/* Популярные игры */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Популярные игры</h2>
              <Button variant="outline">Все игры</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGames.map((game, index) => (
                <GameCard key={index} {...game} />
              ))}
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-12 container">
          <h2 className="text-3xl font-bold mb-8 text-center">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Стабильность 24/7</h3>
              <p className="text-muted-foreground">
                Наши серверы работают без перебоев благодаря современному оборудованию и постоянному мониторингу
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Низкий пинг</h3>
              <p className="text-muted-foreground">
                Размещение серверов в разных регионах гарантирует минимальную задержку для всех игроков
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Активное сообщество</h3>
              <p className="text-muted-foreground">
                Тысячи игроков ежедневно присоединяются к нашим серверам, чтобы вместе получать удовольствие от игры
              </p>
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
              <span className="font-bold text-xl">GameServer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 GameServer. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;