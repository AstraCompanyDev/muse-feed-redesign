import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const PromotionalSidebar = () => {
  return (
    <aside className="w-full xl:w-80 space-y-4">
      {/* Welcome Card */}
      <Card className="border-border bg-gradient-to-br from-accent to-accent/80 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90">
              <span className="text-lg font-bold text-accent">C</span>
            </div>
            <span className="text-lg font-bold text-white">CoFoundersLab</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Welcome
            <br />
            <span className="text-primary">TO THE NEW</span>
            <br />
            <span className="text-primary">COFOUNDERSLAB</span>
          </h3>
          <p className="text-white font-semibold text-lg mb-4">
            FIND YOUR COFOUNDER TODAY
          </p>
          <div className="bg-white/90 rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop"
              alt="Team collaboration"
              className="w-full h-auto rounded"
            />
          </div>
          <p className="text-xs text-white/80 text-center mt-3">
            www.cofounderslab.com
          </p>
        </CardContent>
      </Card>

      {/* Speak with an Advisor */}
      <Card className="border-border bg-card">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg text-foreground mb-4">Speak with an Advisor</h3>
          <div className="space-y-3">
            {[
              { name: "John Miller", role: "Tech Advisor", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
              { name: "Sarah Chen", role: "Marketing Expert", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
              { name: "Mike Johnson", role: "Finance Advisor", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
            ].map((advisor) => (
              <div key={advisor.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-card-highlight transition-colors cursor-pointer">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={advisor.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {advisor.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-foreground">{advisor.name}</h4>
                  <p className="text-xs text-muted-foreground">{advisor.role}</p>
                </div>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Connect
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card className="border-border bg-card">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg text-foreground mb-4">Trending Topics</h3>
          <div className="space-y-3">
            {[
              { tag: "#SaaS", posts: 234 },
              { tag: "#AIStartup", posts: 189 },
              { tag: "#FintechFounder", posts: 156 },
              { tag: "#WebDevelopment", posts: 134 },
            ].map((topic) => (
              <div key={topic.tag} className="flex items-center justify-between p-3 rounded-lg hover:bg-card-highlight transition-colors cursor-pointer">
                <span className="font-medium text-primary">{topic.tag}</span>
                <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default PromotionalSidebar;
