import { Home, Compass, UserPlus, UserSearch, Eye, Users, CalendarDays, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const nav = [
  { label: "Home", icon: Home, active: true },
  { label: "Explore", icon: Compass },
  { label: "Find a CoFounder", icon: UserPlus },
  { label: "Find an Advisor", icon: UserSearch },
  { label: "Who viewed your profile", icon: Eye },
  { label: "Connections", icon: Users },
  { label: "Meetings", icon: CalendarDays },
  { label: "Network", icon: Network },
];

const ProfileSidebar = () => (
  <aside className="flex h-full w-64 flex-col overflow-y-auto border-r border-sidebar-border bg-sidebar py-6 pr-5 text-sidebar-foreground xl:w-72">
    <div className="mb-6 flex items-center gap-3 rounded-xl bg-muted p-3">
      <Avatar className="h-11 w-11">
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Guest" />
        <AvatarFallback className="bg-primary text-primary-foreground">G</AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <p className="truncate font-semibold">Guest User</p>
        <p className="truncate text-xs text-muted-foreground">No tagline available</p>
      </div>
    </div>
    <nav className="flex-1 space-y-1">
      {nav.map(({ label, icon: Icon, active }) => (
        <button key={label} className={`relative flex w-full items-center gap-4 rounded-lg px-4 py-3 text-[15px] font-medium transition-colors ${active ? "text-primary" : "text-sidebar-foreground hover:bg-sidebar-accent"}`}>
          {active && <span className="absolute -left-4 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r bg-primary" />}
          <Icon className="h-5 w-5" />
          {label}
        </button>
      ))}
    </nav>
    <div className="mt-6 space-y-3">
      <Button className="h-12 w-full rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90">Manage Your Meetings</Button>
      <Button variant="outline" className="h-12 w-full rounded-xl border-primary/60 bg-transparent text-foreground hover:bg-sidebar-accent">Manage Your Network</Button>
    </div>
  </aside>
);

export default ProfileSidebar;
