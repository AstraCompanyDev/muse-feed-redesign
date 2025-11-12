import { Image, Video, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const PostCreator = () => {
  return (
    <Card className="border-border bg-card">
      <CardContent className="p-4">
        <div className="flex gap-3 items-start">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Guest" />
            <AvatarFallback className="bg-primary text-primary-foreground">G</AvatarFallback>
          </Avatar>
          <Input
            placeholder="What's happening?"
            className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
              <Image className="h-5 w-5" />
              <span className="hidden sm:inline">Photo</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
              <Video className="h-5 w-5" />
              <span className="hidden sm:inline">Video</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
              <BarChart3 className="h-5 w-5" />
              <span className="hidden sm:inline">Poll</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCreator;
