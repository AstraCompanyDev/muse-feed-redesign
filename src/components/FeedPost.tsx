import { useRef, useState } from "react";
import { Heart, MessageCircle, Share2, MoreHorizontal, CheckCircle2, TrendingUp, TrendingDown, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FeedPoll, { type PollData } from "@/components/FeedPoll";

interface StockQuote {
  symbol: string;
  name: string;
  price: number;
  change: number; // percent, e.g. 2.4 or -1.1
}

export interface Advisor {
  name: string;
  avatar: string;
  role: string;
  expertise: string;
  rating: number; // e.g. 4.9
  sessions: number; // advising sessions completed
  available: boolean;
}

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
  imageRows?: { src: string; alt: string }[];
  poll?: PollData;
  likes?: number;
  comments?: number;
  tone?: "blue" | "yellow" | "lilac";
  stock?: StockQuote;
  advisors?: Advisor[];
}

const AdvisorCarousel = ({ advisors }: { advisors: Advisor[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-advisor-card]");
    const step = card ? card.offsetWidth + 12 : track.clientWidth / 4;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x gap-3 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Featured advisors"
      >
        {advisors.map((advisor) => (
          <div
            key={advisor.name}
            data-advisor-card
            className="w-[calc((100%-1.5rem)/3)] shrink-0 snap-start rounded-xl border border-border bg-card p-4"
          >
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-14 w-14 shrink-0">
                <AvatarImage src={advisor.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {advisor.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h4 className="mt-2 w-full truncate text-sm font-semibold text-foreground">{advisor.name}</h4>
              <p className="w-full truncate text-xs text-muted-foreground">{advisor.role}</p>
              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="font-medium text-foreground">{advisor.rating}</span>
                <span>· {advisor.sessions} sessions</span>
              </div>
              <p className="mt-2 line-clamp-2 min-h-8 text-xs leading-relaxed text-muted-foreground">{advisor.expertise}</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${advisor.available ? "bg-emerald-500" : "bg-muted-foreground"}`}
                />
                <span className={advisor.available ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"}>
                  {advisor.available ? "Available" : "Waitlist"}
                </span>
              </div>
              <Button size="sm" className="mt-3 h-8 w-full rounded-full text-xs">
                Connect
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        aria-label="Previous advisors"
        onClick={() => scrollByCard(-1)}
        className="absolute -left-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-card sm:flex"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        aria-label="Next advisors"
        onClick={() => scrollByCard(1)}
        className="absolute -right-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-card sm:flex"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

const FeedPost = ({ author, title, timestamp, content, image, imageRows, poll, likes = 0, comments = 0, tone = "blue", stock, advisors }: FeedPostProps) => {
  const [open, setOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  const photos = [
    ...(imageRows ?? []),
    ...(image ? [{ src: image, alt: "Post content" }] : []),
  ];

  const openPost = (photoIndex = 0) => {
    setActivePhoto(photoIndex);
    setOpen(true);
  };

  const stepPhoto = (direction: 1 | -1) => {
    if (photos.length < 2) return;
    setActivePhoto((i) => (i + direction + photos.length) % photos.length);
  };

  return (
    <>
    <Card className={`border-border shadow-none transition-colors hover:border-primary/40 ${tone === "blue" ? "bg-feed-blue" : tone === "yellow" ? "bg-feed-yellow" : "bg-feed-lilac"}`}>
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
          {stock ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center">
              <div className="aspect-square w-full rounded-xl border border-border bg-background p-4 flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-foreground">{stock.symbol}</span>
                  <span className={`flex items-center gap-1 text-sm font-semibold tabular-nums ${stock.change >= 0 ? "text-emerald-500" : "text-destructive"}`}>
                    {stock.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    {stock.change >= 0 ? "+" : ""}
                    {stock.change.toFixed(2)}%
                  </span>
                </div>
                <div className="mt-1 text-2xl font-bold tabular-nums text-foreground">
                  ${stock.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">{stock.name} · Today</div>
              </div>
              <p role="button" tabIndex={0} onClick={() => openPost()} onKeyDown={(e) => e.key === "Enter" && openPost()} className="min-w-0 flex-1 cursor-pointer text-sm sm:text-base text-foreground leading-relaxed">{content}</p>
            </div>
          ) : advisors && advisors.length > 0 ? null : (
            <p role="button" tabIndex={0} onClick={() => openPost()} onKeyDown={(e) => e.key === "Enter" && openPost()} className="cursor-pointer text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line">{content}</p>
          )}
          
          {advisors && advisors.length > 0 && <AdvisorCarousel advisors={advisors} />}

          {poll && <FeedPoll poll={poll} />}

          {imageRows && imageRows.length > 0 && (
            <div className="grid grid-cols-3 gap-2" aria-label="Post photos">
              {imageRows.map((photo, index) => (
                <button key={photo.src} type="button" onClick={() => openPost(index)} aria-label={`Open ${photo.alt}`} className="group overflow-hidden rounded-md border border-border">
                  <img src={photo.src} alt={photo.alt} loading="lazy" width={640} height={640} className="aspect-square w-full object-cover transition-transform duration-200 group-hover:scale-105" />
                </button>
              ))}
            </div>
          )}

          {image && (
            <button type="button" onClick={() => openPost(imageRows?.length ?? 0)} aria-label="Open post image" className="block w-full overflow-hidden rounded-lg border border-border">
              <img
                src={image}
                alt="Post content"
                className="w-full h-auto object-cover transition-transform duration-200 hover:scale-[1.02]"
              />
            </button>
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

    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 text-left">
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarImage src={author.avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground">{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <DialogTitle className="flex items-center gap-2 text-base">
                <span className="truncate">{author.name}</span>
                {author.verified && <CheckCircle2 className="h-4 w-4 shrink-0 fill-primary text-primary" />}
              </DialogTitle>
              <DialogDescription className="truncate">{title} · {timestamp}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {photos.length > 0 && (
          <div className="relative">
            <img
              src={photos[activePhoto].src}
              alt={photos[activePhoto].alt}
              className="max-h-[60vh] w-full rounded-lg border border-border object-contain"
            />
            {photos.length > 1 && (
              <>
                <Button variant="outline" size="icon" aria-label="Previous image" onClick={() => stepPhoto(-1)} className="absolute left-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-card">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Next image" onClick={() => stepPhoto(1)} className="absolute right-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-card">
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="mt-2 text-center text-xs text-muted-foreground">
                  {activePhoto + 1} / {photos.length}
                </div>
              </>
            )}
          </div>
        )}

        {stock && (
          <div className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-foreground">{stock.symbol}</span>
              <span className={`flex items-center gap-1 text-sm font-semibold tabular-nums ${stock.change >= 0 ? "text-emerald-500" : "text-destructive"}`}>
                {stock.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                {stock.change >= 0 ? "+" : ""}
                {stock.change.toFixed(2)}%
              </span>
            </div>
            <div className="mt-1 text-2xl font-bold tabular-nums text-foreground">
              ${stock.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="mt-0.5 text-xs text-muted-foreground">{stock.name} · Today</div>
          </div>
        )}

        <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">{content}</p>

        {poll && <FeedPoll poll={poll} />}

        <div className="flex items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Heart className="h-4 w-4" />{likes}</span>
          <span className="flex items-center gap-1.5"><MessageCircle className="h-4 w-4" />{comments}</span>
          <span className="flex items-center gap-1.5"><Share2 className="h-4 w-4" />Share</span>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default FeedPost;
