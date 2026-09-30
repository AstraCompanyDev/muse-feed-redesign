import { Image, Video, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const PostCreator = () => {
  return (
    <Card className="border-0 bg-muted shadow-none">
      <CardContent className="p-3 sm:p-4">
        <div className="flex gap-3 items-center">
          <Avatar className="h-9 w-9 shrink-0">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Guest" />
            <AvatarFallback className="bg-primary text-primary-foreground">G</AvatarFallback>
          </Avatar>
          <Input
            placeholder="Share something"
            className="min-w-0 flex-1 border-0 bg-transparent text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-0"
          />
        </div>

        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex gap-1 sm:gap-3">
            <button className="flex items-center gap-2 p-2 text-sm text-muted-foreground hover:text-primary transition-colors" title="Photo">
              <Image className="h-5 w-5" />
              <span className="hidden sm:inline">Photo</span>
            </button>
            <button className="flex items-center gap-2 p-2 text-sm text-muted-foreground hover:text-primary transition-colors" title="Video">
              <Video className="h-5 w-5" />
              <span className="hidden sm:inline">Video</span>
            </button>
            <button className="flex items-center gap-2 p-2 text-sm text-muted-foreground hover:text-primary transition-colors" title="Poll">
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
