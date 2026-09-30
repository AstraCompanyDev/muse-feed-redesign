import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import PostCreator from "@/components/PostCreator";
import MarketTicker from "@/components/MarketTicker";
import FeedPost from "@/components/FeedPost";
import PromotionalSidebar from "@/components/PromotionalSidebar";
import founderStory01 from "@/assets/founder-story-01.jpg";
import founderStory02 from "@/assets/founder-story-02.jpg";
import founderStory03 from "@/assets/founder-story-03.jpg";

const mainStreamPosts = [
  {
    author: { name: "Maya Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MayaChen", verified: true },
    title: "From Sketch to First Demo",
    timestamp: "Today, 12:10 PM",
    content: "Three snapshots from our first product sprint: the idea on a whiteboard, the prototype on paper, and the moment we shared it with our first testers. Still early, but it feels real now.",
    imageRows: [
      { src: founderStory01, alt: "Founders planning product ideas at a whiteboard" },
      { src: founderStory02, alt: "The team sketching an early product prototype" },
      { src: founderStory03, alt: "Founders sharing their first demo with testers" },
    ],
    likes: 38,
    comments: 12,
  },
  {
    author: { name: "Upfounder Community", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=UC", verified: true },
    title: "Founder Poll",
    timestamp: "Today, 11:25 AM",
    content: "Every team starts somewhere. What would help your startup most right now?",
    poll: {
      question: "What is your biggest priority this month?",
      options: [
        { label: "Finding a co-founder", votes: 42 },
        { label: "Getting first customers", votes: 68 },
        { label: "Raising funding", votes: 31 },
        { label: "Building the product", votes: 55 },
      ],
    },
    likes: 16,
    comments: 24,
  },
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
  {
    author: {
      name: "Upfounder Advisors",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=UA",
      verified: true,
    },
    title: "Featured Advisors This Week",
    timestamp: "Today, 08:45 AM",
    content: "",
    advisors: [
      {
        name: "Elena Vasquez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
        role: "Growth Advisor",
        expertise: "Scaled two B2B SaaS startups from $0–$10M ARR. Growth loops, pricing and go-to-market.",
        rating: 4.9,
        sessions: 214,
        available: true,
      },
      {
        name: "Michael Torres",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelT",
        role: "Fundraising Advisor",
        expertise: "Ex-VC. Helped 60+ founders close pre-seed and seed rounds. Pitch and term-sheet prep.",
        rating: 4.8,
        sessions: 187,
        available: true,
      },
      {
        name: "Rachel Osei",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RachelO",
        role: "Product Advisor",
        expertise: "Former product lead at a fintech unicorn. Discovery, MVP scoping and roadmaps.",
        rating: 5.0,
        sessions: 96,
        available: true,
      },
      {
        name: "James Whitfield",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JamesW",
        role: "Technical Advisor",
        expertise: "CTO of two exits. Architecture reviews, hiring your first engineers, build-vs-buy.",
        rating: 4.7,
        sessions: 158,
        available: false,
      },
      {
        name: "Aiko Tanaka",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aiko",
        role: "Marketing Advisor",
        expertise: "Brand and content strategist. Positioning, launch playbooks and founder-led marketing.",
        rating: 4.9,
        sessions: 121,
        available: true,
      },
      {
        name: "Omar Haddad",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
        role: "Legal Advisor",
        expertise: "Startup counsel. Incorporation, founder agreements, SAFEs and IP assignments.",
        rating: 4.8,
        sessions: 143,
        available: true,
      },
      {
        name: "Sofia Lindqvist",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
        role: "Operations Advisor",
        expertise: "Built ops at a 200-person scale-up. Hiring pipelines, processes and remote teams.",
        rating: 4.6,
        sessions: 88,
        available: false,
      },
      {
        name: "David Okafor",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidO",
        role: "Sales Advisor",
        expertise: "First sales hire at three startups. Founder-led sales, outbound and enterprise deals.",
        rating: 4.9,
        sessions: 176,
        available: true,
      },
    ],
  },
  {
    author: { name: "Alex Rivera", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlexRivera", verified: false },
    title: "Looking for a Design Partner",
    timestamp: "Yesterday, 06:10 PM",
    content: "Building a simple workflow tool for independent studios. We have a clickable prototype and are looking for two or three teams to try it with us. If you manage client projects, I'd love to hear what your current process looks like.",
    likes: 29,
    comments: 11,
  },
];

const newsStreamPosts = [
  {
    author: { name: "Upfounder News", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=UpfounderNews", verified: true },
    title: "Community Briefing: What Founders Are Watching",
    timestamp: "Today, 09:40 AM",
    content: "This week's conversations across the community: early customer discovery, leaner launch plans, and how founders are deciding when to hire. Which topic should we cover in depth next?",
    likes: 35,
    comments: 17,
  },
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
  {
    author: { name: "Noah Ellis", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NoahEllis", verified: false },
    title: "Founder Event Roundup",
    timestamp: "Yesterday, 01:15 PM",
    content: "I've been collecting founder meetups and pitch nights happening this season. What local events have actually led to useful connections for you? Drop your favourites in the comments so others can find them.",
    likes: 27,
    comments: 14,
  },
  {
    author: { name: "Amira Bello", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AmiraBello", verified: true },
    title: "A New Accelerator Cohort to Follow",
    timestamp: "Monday, 03:30 PM",
    content: "A new group of early-stage teams is starting its accelerator journey. I'm most curious to see how they test demand before scaling. Have you been through an accelerator? What surprised you?",
    likes: 48,
    comments: 9,
  },
];

const learningStreamPosts = [
  {
    author: { name: "Leah Brooks", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LeahBrooks", verified: true },
    title: "A Simple Customer Interview Framework",
    timestamp: "Today, 12:00 PM",
    content: "Three questions I ask before pitching anything:\n\n1. What was the last time this problem came up?\n2. How did you deal with it?\n3. What did that cost you in time or money?\n\nAsk for a real story, not a prediction. You'll learn far more.",
    likes: 74,
    comments: 13,
  },
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
  {
    author: { name: "Samira Khan", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SamiraKhan", verified: false },
    title: "The One-Page Pricing Exercise",
    timestamp: "Monday, 10:20 AM",
    content: "Before you build a pricing page, write down who buys, what outcome they pay for, and the alternative they're comparing you to. Then talk to five potential buyers about those assumptions. Pricing starts with understanding value, not picking a number.",
    likes: 62,
    comments: 18,
  },
  {
    author: { name: "Theo Martin", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TheoMartin", verified: true },
    title: "How We Run a Weekly Product Review",
    timestamp: "Sunday, 04:50 PM",
    content: "Our 30-minute review has just three parts: what customers tried, where they got stuck, and the one thing we will change next. Keeping it small helps us ship improvements instead of debating a giant roadmap.",
    likes: 43,
    comments: 7,
  },
];

const marketStreamPosts = [
  {
    author: { name: "Upfounder Markets", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=UM", verified: true },
    title: "Stock Watch: NVDA",
    timestamp: "Today, 10:05 AM",
    content: `Nvidia is today's standout mover, climbing on strong data-centre demand as AI spending keeps accelerating. Analysts lifted their price targets after the chipmaker beat on revenue, and the stock is now one of the best performers in the NASDAQ this week.`,
    stock: { symbol: "NVDA", name: "NVIDIA Corp", price: 121.44, change: 2.8 },
    likes: 96,
    comments: 28,
  },
  {
    author: { name: "Upfounder Markets", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=UM", verified: true },
    title: "Market Open: Tech Leads as NASDAQ Climbs 1.2%",
    timestamp: "Today, 09:35 AM",
    content: `📈 US stocks opened higher as chipmakers rallied.

• NVDA +2.8% on new data-centre orders
• AAPL +0.9% ahead of product event
• 10-year Treasury yield eases to 3.78%

Watch: Fed minutes release at 2:00 PM ET.`,
    likes: 84,
    comments: 22,
  },
  {
    author: { name: "Marcus Lee", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus", verified: true },
    title: "Earnings Watch: 5 Reports That Could Move This Week",
    timestamp: "Today, 08:10 AM",
    content: `🗓️ My earnings calendar for the week:

1. MSFT — cloud growth is the number to watch
2. TSLA — margins vs. price cuts
3. AMZN — AWS reacceleration?
4. META — ad revenue and AI capex
5. GOOGL — search share vs. AI competitors

Which one are you trading?`,
    likes: 51,
    comments: 34,
  },
  {
    author: { name: "Nora Patel", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nora", verified: false },
    title: "IPO Pipeline: Three Startups Filing to Go Public",
    timestamp: "Yesterday, 05:45 PM",
    content: `🚀 The IPO window is reopening. Filed this week:

• A fintech payments platform (~$6B valuation)
• A design-software company (~$3.5B)
• A climate-tech battery maker (~$2B)

Founders: public-market appetite for profitable growth is back.`,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    likes: 67,
    comments: 18,
  },
  {
    author: { name: "Daniel Cho", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel", verified: false },
    title: "Why Founders Should Watch Interest Rates",
    timestamp: "Yesterday, 11:20 AM",
    content: `💡 Rate cuts ripple straight into startup funding.

Lower rates → investors chase growth → higher valuations for private companies.

If you're raising in the next 6 months, the market backdrop matters as much as your deck.`,
    likes: 42,
    comments: 12,
  },
  {
    author: { name: "Upfounder Markets", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=UM", verified: true },
    title: "Stock Watch: AAPL",
    timestamp: "Yesterday, 09:40 AM",
    content: "A second stock snapshot for the community to discuss. Product announcements and services growth are two themes investors often watch when considering Apple's next quarter.",
    stock: { symbol: "AAPL", name: "Apple Inc.", price: 226.84, change: -0.64 },
    likes: 33,
    comments: 14,
  },
  {
    author: { name: "Iris Wong", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=IrisWong", verified: true },
    title: "Market Notes: What a Red Day Can Tell You",
    timestamp: "Monday, 01:20 PM",
    content: "When a stock drops, I try to separate company news from a broader market move. A single day's change rarely tells the whole story. What do you check first before drawing a conclusion?",
    likes: 59,
    comments: 20,
  },
];

const streams = [
  { name: "Main Stream", description: "Everything from your community", posts: mainStreamPosts },
  { name: "News Stream", description: "Headlines and announcements", posts: newsStreamPosts },
  { name: "Learning Stream", description: "Lessons, workshops and guides", posts: learningStreamPosts },
  { name: "Market Stream", description: "Stocks, prices and market moves", posts: marketStreamPosts },
];

const Index = () => {
  const [activeStream, setActiveStream] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const selectStream = (index: number) => {
    setActiveStream(Math.max(0, Math.min(streams.length - 1, index)));
  };

  return (
    <div className="h-dvh overflow-hidden bg-background">
      <Header />
      
      <div className="flex h-[calc(100dvh-4rem)] w-full">
        <div className="hidden h-full shrink-0 lg:block">
          <ProfileSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((value) => !value)} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex h-full gap-4 px-4 sm:px-4">
          <main className="flex min-h-0 min-w-0 w-full flex-1 flex-col gap-3 pt-4 sm:pt-6">

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
              {activeStream === 3 && <MarketTicker />}
              {streams[activeStream].posts.map((post, index) => (
                <FeedPost key={post.title} tone={index % 3 === 0 ? "blue" : index % 3 === 1 ? "yellow" : "lilac"} {...post} />
              ))}
            </div>

            <div className="shrink-0 rounded-t-2xl border border-b-0 border-border bg-card p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:p-3" aria-label="Create a post">
              <PostCreator />
            </div>
          </main>

          <div className="hidden shrink-0 overflow-y-auto pt-6 xl:block">
            <PromotionalSidebar />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
