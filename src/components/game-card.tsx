
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Users, Clock } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  players: number;
  maxPlayers: number;
  genre: string;
  online: boolean;
}

export default function GameCard({ 
  title, 
  description, 
  imageUrl, 
  players, 
  maxPlayers,
  genre,
  online
}: GameCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant={online ? "default" : "secondary"}>
            {online ? "Онлайн" : "Офлайн"}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center text-sm text-muted-foreground gap-4">
          <div className="flex items-center gap-1">
            <Gamepad2 className="h-4 w-4" />
            <span>{genre}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{players}/{maxPlayers}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Подключиться</Button>
      </CardFooter>
    </Card>
  );
}
