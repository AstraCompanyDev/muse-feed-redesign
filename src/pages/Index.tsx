import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import PostCreator from "@/components/PostCreator";
import FeedPost from "@/components/FeedPost";
import PromotionalSidebar from "@/components/PromotionalSidebar";

const mainStreamPosts = [
  {
    author: {
      name: "Sarah Martinez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      verified: false,
    },
    title: "Looking for a Technical Co-Founder",
    timestamp: "Today, 10:30 AM",
    content: `Seeking a technical co-founder for an AI-powered SaaS platform focused on healthcare analytics.

We have:
✅ Market validation with 3 pilot customers
✅ $50K in pre-seed funding
✅ Clear go-to-market strategy

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
    timestamp: "Today, 09:15 AM",
    content: `🚀 Just hit our first $10K MRR milestone!

Key learnings from the past month:
1. Customer feedback is gold
2. Iterate fast, ship faster
3. Focus on retention, not just acquisition

To all founders grinding: keep going!`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    likes: 67,
    comments: 15,
  },
];

const newsStreamPosts = [
  {
    author: {
      name: "Upfounder News",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=UpfounderNews",
      verified: true,
    },
    title: "Upfounder Weekly — This Week in Startups",
    timestamp: "Today, 08:00 AM",
    content: `📰 This week's headline stories:

• Seed rounds are up 18% quarter over quarter — investors are back
• EU startup visa programs expand to 6 new countries
• Solo founders raise more than ever with AI tooling

Full round-up in the article below.`,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop",
    likes: 41,
    comments: 6,
  },
  {
    author: {
      name: "Priya Raman",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      verified: true,
    },
    title: "New Grant Program Opens for Climate Startups",
    timestamp: "Yesterday, 04:20 PM",
    content: `🌍 Applications just opened for the $250K CleanFuture Grant — non-dilutive funding for early-stage climate tech.

Deadline is in 3 weeks. Happy to share my winning application from last cycle if anyone's applying.`,
    likes: 88,
    comments: 22,
  },
];

const learningStreamPosts = [
  {
    author: {
      name: "James Okafor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      verified: true,
    },
    title: "Lesson: How to Validate Before You Build",
    timestamp: "Today, 11:00 AM",
    content: `📚 Founder school, lesson #12: Validate before you build.

The 3-step method I teach:
1. Write your landing page BEFORE your product
2. Get 50 people to join a waitlist with their email
3. Interview 10 of them — ask about the problem, not your idea

If step 2 feels impossible, your idea needs sharpening.`,
    likes: 132,
    comments: 19,
  },
  {
    author: {
      name: "Lena Fischer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lena",
      verified: false,
    },
    title: "Free Workshop: Pitch Decks that Raise",
    timestamp: "Yesterday, 02:45 PM",
    content: `🎓 Hosting a free workshop this Thursday: "Pitch decks that actually raise."

We'll tear down 3 real decks live (anonymously) and rebuild the story slide by slide.

Drop a comment if you want your deck reviewed — I'll pick 3.`,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop",
    likes: 56,
    comments: 31,
  },
];

const marketStreamPosts = [
  {
    author: {
      name: "Tomás Rivera",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tomas",
      verified: true,
    },
    title: "For Hire: Fractional CTO (Equity + Cash)",
    timestamp: "Today, 09:40 AM",
    content: `💼 Available: Fractional CTO for early-stage startups.

12 years shipping consumer apps. I take on 2 ventures per year — equity + small retainer.

Recent: scaled a marketplace from 0 → 80K users in 9 months. DM for a case study.`,
    likes: 37,
    comments: 11,
  },
  {
    author: {
      name: "Aisha Bello",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
      verified: false,
    },
    title: "Selling: Fully-Built Shopify Store with 40K Followers",
    timestamp: "Yesterday, 06:10 PM",
    content: `🛒 For sale: profitable Shopify store in the fitness niche.

✅ 40K Instagram followers (included)
✅ $4.2K/month average revenue
✅ 3 suppliers under contract

Asking $28K. Financials open to serious buyers.`,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    likes: 15,
    comments: 9,
  },
];

const streams = [
  { name: "Main Stream", description: "Everything from your community", posts: mainStreamPosts },
  { name: "News Stream", description: "Headlines and announcements", posts: newsStreamPosts },
  { name: "Learning Stream", description: "Lessons, workshops and guides", posts: learningStreamPosts },
  { name: "Market Stream", description: "Hire, sell and trade", posts: marketStreamPosts },
];

const Index = () => {
  const [activeStream, setActiveStream] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const selectStream = (index: number) => {
    setActiveStream(Math.max(0, Math.min(streams.length - 1, index)));
  };

  return (
    <div className="h-dvh overflow-hidden bg-background bg-gradient-page">
      <Header />
      
      <div className="container mx-auto h-[calc(100dvh-4rem)] px-4 pb-0">
        <div className="flex h-full flex-col justify-center gap-6 lg:flex-row">
          <div className="hidden h-full lg:block">
            <ProfileSidebar />
          </div>
          
          <main className="flex min-h-0 min-w-0 w-full flex-1 flex-col gap-3 lg:max-w-2xl pt-4 sm:pt-6">

            <div className="flex shrink-0 items-center gap-2" aria-label="Streams">
              <div className="flex min-w-0 flex-1 gap-1 overflow-x-auto" role="tablist" aria-label="Streams">
                {streams.map((stream, index) => (
                  <Button
                    key={stream.name}
                    id={`stream-tab-${index}`}
                    role="tab"
                    aria-selected={activeStream === index}
                    aria-controls="stream-panel"
                    variant="ghost"
                    onClick={() => selectStream(index)}
                    className={`h-10 shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors ${activeStream === index ? "border-primary/70 bg-accent text-foreground" : "border-transparent text-primary hover:bg-muted hover:text-primary"}`}
                  >
                    {stream.name}
                  </Button>
                ))}
              </div>
              <div className="flex shrink-0 gap-1 pb-1">
                <Button variant="ghost" size="icon" aria-label="Previous stream" title="Previous stream" disabled={activeStream === 0} onClick={() => selectStream(activeStream - 1)}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Refresh stream" title="Refresh stream" className="text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => selectStream(0)}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Next stream" title="Next stream" disabled={activeStream === streams.length - 1} onClick={() => selectStream(activeStream + 1)}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div
              id="stream-panel"
              role="tabpanel"
              aria-labelledby={`stream-tab-${activeStream}`}
              className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain touch-pan-y pr-1 pb-5"
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
                  selectStream(activeStream + (dx < 0 ? 1 : -1));
                }
                touchStart.current = null;
              }}
            >
              {streams[activeStream].posts.map((post, index) => (
                <FeedPost key={post.author.name} tone={index % 3 === 0 ? "blue" : index % 3 === 1 ? "yellow" : "lilac"} {...post} />
              ))}
            </div>

            <div className="shrink-0 rounded-t-2xl border border-b-0 border-border bg-card p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:p-3" aria-label="Create a post">
              <PostCreator />
            </div>
          </main>

          <div className="hidden overflow-y-auto pt-6 xl:block">
            <PromotionalSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
