import { useState } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import PromotionalSidebar from "@/components/PromotionalSidebar";

const ProfileViews = () => {
  const [timeFilter, setTimeFilter] = useState("90");

  const viewers = [
    {
      name: "Promise Ogor",
      title: "Driven and Insightful",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Promise",
      viewed: "2 months ago",
    },
    {
      name: "Haruki Mizuno",
      title: "Mobile Full-Stack Developer | End-to-End App Builder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Haruki",
      viewed: "20 days ago",
    },
    {
      name: "Sagar Dey",
      title: "Technical Director At CoFoundersLab(ASTRA)",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sagar",
      viewed: "3 minutes ago",
    },
  ];

  const suggestions = [
    {
      name: "Sagar Dey",
      title: "Technical Director At CoFoundersLab(ASTRA)",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sagar2",
      viewed: "3 minutes ago",
    },
    {
      name: "Seanie Walsh",
      title: "CoFounder of V3S3",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Seanie",
      viewed: "18 days ago",
    },
    {
      name: "Rigaud Alexandre",
      title: "Visionary on mission & purpose",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rigaud",
      viewed: "16 days ago",
    },
    {
      name: "Alan Dickinson",
      title: "Digital Product Designer, Ex-Spotify, Ex-frog",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alan",
      viewed: "24 days ago",
    },
    {
      name: "Janessa Robinson",
      title: "Unlock the money niche else sees",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Janessa",
      viewed: "a month ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block">
            <ProfileSidebar />
          </div>
          
          <main className="flex-1 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h1 className="text-2xl font-bold text-foreground">Who viewed your profile</h1>
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-[180px] border-border">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Past 7 Days</SelectItem>
                  <SelectItem value="30">Past 30 Days</SelectItem>
                  <SelectItem value="90">Past 90 Days</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{viewers.length}</h2>
                    <p className="text-sm text-muted-foreground">Profile Viewers In The Past {timeFilter} Days</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Viewers</h3>
                  <div className="space-y-3">
                    {viewers.map((viewer, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-4 p-4 rounded-lg border border-border bg-background hover:bg-card-highlight transition-colors"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <Avatar className="h-12 w-12 flex-shrink-0">
                            <AvatarImage src={viewer.avatar} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {viewer.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground truncate">{viewer.name}</h4>
                            <p className="text-sm text-muted-foreground truncate">{viewer.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">Viewed {viewer.viewed}</p>
                          </div>
                        </div>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0">
                          View Profile
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  You might be interested in
                </h3>
                <div className="space-y-3">
                  {suggestions.map((person, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4 p-4 rounded-lg border border-border bg-background hover:bg-card-highlight transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <Avatar className="h-12 w-12 flex-shrink-0">
                          <AvatarImage src={person.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {person.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground truncate">{person.name}</h4>
                          <p className="text-sm text-muted-foreground truncate">{person.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">Visited {person.viewed}</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0">
                        View Profile
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>

          <div className="hidden xl:block">
            <PromotionalSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileViews;
