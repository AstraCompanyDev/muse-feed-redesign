import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import PostCreator from "@/components/PostCreator";
import FeedPost from "@/components/FeedPost";
import PromotionalSidebar from "@/components/PromotionalSidebar";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6 justify-center">
          <ProfileSidebar />
          
          <main className="flex-1 max-w-2xl space-y-4">
            <div className="flex justify-end mb-4">
              <Button variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
            </div>

            <PostCreator />

            {posts.map((post, index) => (
              <FeedPost key={index} {...post} />
            ))}
          </main>

          <PromotionalSidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
