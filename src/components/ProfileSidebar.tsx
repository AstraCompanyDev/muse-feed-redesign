import { Eye, Users, Compass, UserPlus, UserSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileSidebar = () => {
  return (
    <aside className="w-full lg:w-80 space-y-4">
      {/* Profile Card */}
      <Card className="border-border bg-card overflow-hidden">
        <div className="h-20 bg-gradient-to-br from-primary/20 to-secondary" />
        <CardContent className="pt-0 pb-6 px-6">
          <div className="flex flex-col items-center -mt-12">
            <Avatar className="h-24 w-24 border-4 border-card">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Guest" />
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">G</AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-xl font-bold text-foreground">Guest User</h3>
            <p className="text-sm text-muted-foreground">No tagline available</p>
          </div>

          <div className="mt-6 space-y-3">
            <Link to="/profile-views" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-card-highlight transition-colors">
              <Eye className="h-4 w-4 text-primary" />
              <span>Who viewed your profile</span>
            </Link>
            <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-card-highlight transition-colors">
              <Users className="h-4 w-4 text-primary" />
              <span>Connections</span>
            </button>
          </div>

          <div className="mt-4 space-y-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/30">
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
          <Button className="w-full justify-start gap-3 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Compass className="h-5 w-5" />
            Explore
          </Button>
          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-foreground hover:bg-card-highlight transition-colors">
            <UserPlus className="h-5 w-5" />
            <span>Find a CoFounder</span>
          </button>
          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-foreground hover:bg-card-highlight transition-colors">
            <UserSearch className="h-5 w-5" />
            <span>Find an Advisor</span>
          </button>
        </CardContent>
      </Card>
    </aside>
  );
};

export default ProfileSidebar;
