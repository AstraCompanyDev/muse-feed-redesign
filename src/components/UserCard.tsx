import { Send, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserCardProps {
  name: string;
  title: string;
  avatar: string;
  online?: boolean;
}

const UserCard = ({ name, title, avatar, online = false }: UserCardProps) => {
  return (
    <Card className="border-border bg-card overflow-hidden hover:border-primary/40 transition-colors">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarImage src={avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            {online && (
              <div className="absolute bottom-1 right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-card" />
            )}
          </div>
          
          <h3 className="mt-4 font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{title}</p>

          <div className="flex gap-2 mt-4 w-full">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 gap-1 border-border hover:bg-card-highlight text-foreground"
            >
              <Send className="h-3.5 w-3.5 shrink-0" />
              Message
            </Button>
            <Button 
              size="sm" 
              className="flex-1 gap-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link2 className="h-3.5 w-3.5 shrink-0" />
              Connect
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
