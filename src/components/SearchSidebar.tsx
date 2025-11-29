import { Eye, Users, Compass, UserPlus, UserSearch, MessageSquare, Bell, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const SearchSidebar = () => {
  return (
    <aside className="w-full lg:w-80 space-y-4">
      {/* Profile Card */}
      <Card className="border-border bg-card overflow-hidden">
        <div className="h-20 bg-gradient-to-br from-primary/20 to-secondary" />
        <CardContent className="pt-0 pb-6 px-6">
          <div className="flex flex-col items-center -mt-12">
            <Avatar className="h-24 w-24 border-4 border-card">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Official" />
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">C</AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-xl font-bold text-foreground">CoFoundersLab Official</h3>
            <p className="text-sm text-muted-foreground">Start, Grow, Fund</p>
          </div>

          <div className="mt-6 space-y-2">
            <Link to="/profile-views" className="flex items-center justify-between text-sm px-3 py-2 rounded-lg hover:bg-card-highlight transition-colors">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-primary" />
                <span className="text-foreground">Who viewed your profile</span>
              </div>
              <span className="text-muted-foreground">0</span>
            </Link>
            <div className="flex items-center justify-between text-sm px-3 py-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-foreground">Connections</span>
              </div>
              <span className="text-muted-foreground">479820</span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Manage Your Meetings
            </Button>
            <Button variant="outline" className="w-full border-border hover:bg-card-highlight text-foreground">
              Manage Your Network
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Card */}
      <Card className="border-border bg-card">
        <CardContent className="p-4 space-y-2">
          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-foreground hover:bg-card-highlight transition-colors">
            <Compass className="h-5 w-5 text-primary" />
            <span>Explore</span>
          </button>
          <Button className="w-full justify-start gap-3 bg-primary hover:bg-primary/90 text-primary-foreground">
            <UserPlus className="h-5 w-5" />
            Find a CoFounder
          </Button>
          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-foreground hover:bg-card-highlight transition-colors">
            <UserSearch className="h-5 w-5 text-primary" />
            <span>Find an Advisor</span>
          </button>
          <button className="flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm text-foreground hover:bg-card-highlight transition-colors">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span>Messages</span>
            </div>
            <Badge className="bg-destructive text-destructive-foreground">99+</Badge>
          </button>
          <button className="flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm text-foreground hover:bg-card-highlight transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-primary" />
              <span>Notifications</span>
            </div>
            <Badge className="bg-destructive text-destructive-foreground">55</Badge>
          </button>
          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-foreground hover:bg-card-highlight transition-colors">
            <Mail className="h-5 w-5 text-primary" />
            <span>Requests</span>
          </button>
        </CardContent>
      </Card>
    </aside>
  );
};

export default SearchSidebar;
