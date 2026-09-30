import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import PostCreator from "@/components/PostCreator";
import FeedPost from "@/components/FeedPost";
import PromotionalSidebar from "@/components/PromotionalSidebar";

const posts = [
    {
      author: {
        name: "Ell Falah",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ell",
        verified: true,
      },
      title: "Genes Expression Can Be Modified By Epigenetics",
      timestamp: "12-11-2025, 11:52 AM",
      content: `Subject: Co-Founder Opportunity at Established LLC Company in Wyoming, USA

Hello,

I'm Ell Azadeh a medical doctor and the founder of Mesophyl, an officially registered LLC Company in Wyoming, USA. We are actively seeking a co-founder to join our venture and help drive our mission forward.

Mesophyl is a patented product approved by WIPO, World Intellectual Property Organization.`,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop",
      likes: 12,
      comments: 3,
    },
    {
      author: {
        name: "Sarah Martinez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        verified: false,
      },
      title: "Looking for Technical Co-Founder",
      timestamp: "12-11-2025, 10:30 AM",
      content: `Seeking a technical co-founder for an AI-powered SaaS platform focused on healthcare analytics.

We have:
✅ Market validation with 3 pilot customers
✅ $50K in pre-seed funding
✅ Clear go-to-market strategy

Looking for someone with:
- Full-stack development experience
- Experience with AI/ML
- Passionate about healthcare innovation

Let's connect if this resonates with you!`,
      likes: 24,
      comments: 8,
    },
    {
      author: {
        name: "David Kim",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        verified: true,
      },
      title: "Building in Public: Day 30",
      timestamp: "12-11-2025, 09:15 AM",
      content: `🚀 Just hit our first $10K MRR milestone!

Key learnings from the past month:
1. Customer feedback is gold
2. Iterate fast, ship faster
3. Community building > paid ads
4. Focus on retention, not just acquisition

To all founders grinding: keep going! The journey is tough but worth it.

#BuildInPublic #StartupJourney #SaaS`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      likes: 67,
      comments: 15,
    },
];

const feeds = [
  { name: "For You", description: "From your community", posts },
  { name: "Co-founder Opportunities", description: "People looking to build together", posts: [posts[0], posts[1]] },
  { name: "Founder Updates", description: "Progress from the community", posts: [posts[2]] },
];

const Index = () => {
  const [activeFeed, setActiveFeed] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const selectFeed = (index: number) => {
    setActiveFeed(Math.max(0, Math.min(feeds.length - 1, index)));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          <div className="hidden lg:block">
            <ProfileSidebar />
          </div>
          
          <main className="flex-1 min-w-0 w-full lg:max-w-2xl space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h1 className="text-xl font-semibold text-foreground">Your feed</h1>
                <p className="text-sm text-muted-foreground">{feeds[activeFeed].description}</p>
              </div>
              <Button variant="outline" size="icon" aria-label="Refresh feed" title="Refresh feed" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => selectFeed(0)}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 border-b border-border" aria-label="Feeds">
              <div className="flex min-w-0 flex-1 overflow-x-auto" role="tablist" aria-label="Feeds">
                {feeds.map((feed, index) => (
                  <Button
                    key={feed.name}
                    id={`feed-tab-${index}`}
                    role="tab"
                    aria-selected={activeFeed === index}
                    aria-controls="feed-panel"
                    variant="ghost"
                    onClick={() => selectFeed(index)}
                    className={`h-12 shrink-0 rounded-none border-b-2 px-4 text-sm font-medium transition-colors ${activeFeed === index ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
                  >
                    {feed.name}
                  </Button>
                ))}
              </div>
              <div className="flex shrink-0 gap-1 pb-1">
                <Button variant="ghost" size="icon" aria-label="Previous feed" title="Previous feed" disabled={activeFeed === 0} onClick={() => selectFeed(activeFeed - 1)}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Next feed" title="Next feed" disabled={activeFeed === feeds.length - 1} onClick={() => selectFeed(activeFeed + 1)}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div
              id="feed-panel"
              role="tabpanel"
              aria-labelledby={`feed-tab-${activeFeed}`}
              className="space-y-4 touch-pan-y"
              onTouchStart={(event) => {
                const touch = event.touches[0];
                touchStart.current = { x: touch.clientX, y: touch.clientY };
              }}
              onTouchEnd={(event) => {
                if (!touchStart.current) return;
                const touch = event.changedTouches[0];
                const dx = touch.clientX - touchStart.current.x;
                const dy = touch.clientY - touchStart.current.y;
                if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) {
                  selectFeed(activeFeed + (dx < 0 ? 1 : -1));
                }
                touchStart.current = null;
              }}
            >
              {feeds[activeFeed].posts.map((post) => (
                <FeedPost key={post.author.name} {...post} />
              ))}
            </div>

            <div className="pt-4" aria-label="Create a post">
              <PostCreator />
            </div>
          </main>

          <div className="hidden xl:block">
            <PromotionalSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
