import { Heart, MessageCircle, Share2, MoreHorizontal, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FeedPostProps {
  author: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  title: string;
  timestamp: string;
  content: string;
  image?: string;
  likes?: number;
  comments?: number;
}

const FeedPost = ({ author, title, timestamp, content, image, likes = 0, comments = 0 }: FeedPostProps) => {
  return (
    <Card className="border-border bg-card hover:border-primary/30 transition-colors">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-2 sm:gap-3 flex-1 min-w-0">
            <Avatar className="h-10 w-10 sm:h-12 sm:w-12 shrink-0">
              <AvatarImage src={author.avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground truncate">{author.name}</h3>
                {author.verified && (
                  <CheckCircle2 className="h-4 w-4 text-primary fill-primary shrink-0" />
                )}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">{title}</p>
              <p className="text-xs text-muted-foreground mt-1">{timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground shrink-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line">{content}</p>
          
          {image && (
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src={image}
                alt="Post content"
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-2 sm:gap-4 pt-4 border-t border-border">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent gap-1 sm:gap-2 px-2 sm:px-3">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm hidden sm:inline">Like</span>
              {likes > 0 && <span className="text-xs">({likes})</span>}
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-1 sm:gap-2 px-2 sm:px-3">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm hidden sm:inline">Comment</span>
              {comments > 0 && <span className="text-xs">({comments})</span>}
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-1 sm:gap-2 px-2 sm:px-3">
              <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm hidden sm:inline">Share</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedPost;
