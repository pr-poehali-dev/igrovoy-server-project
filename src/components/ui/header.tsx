
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-b.svg" alt="Лого" className="h-6 w-6" />
            <span className="font-bold text-xl">GameServer</span>
          </Link>
        </div>
        <nav className="flex-1 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/games" className="text-sm font-medium hover:text-primary transition-colors">
              Игры
            </Link>
            <Link to="/stats" className="text-sm font-medium hover:text-primary transition-colors">
              Статистика
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              О нас
            </Link>
          </div>
          <div>
            <Button variant="default">Войти</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
