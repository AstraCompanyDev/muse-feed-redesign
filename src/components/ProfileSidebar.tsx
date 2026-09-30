import { Home, Compass, UserPlus, UserSearch, Eye, Users, CalendarDays, Network, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

const nav = [
  { label: "Home", icon: Home, active: true },
  { label: "Explore", icon: Compass },
  { label: "Find a CoFounder", icon: UserPlus },
  { label: "Find an Advisor", icon: UserSearch },
  { label: "Who viewed your profile", icon: Eye },
  { label: "Connections", icon: Users },
  { label: "Meetings", icon: CalendarDays, to: "/meetings" },
  { label: "Network", icon: Network, to: "/network" },
];

interface ProfileSidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const ProfileSidebar = ({ collapsed = false, onToggle }: ProfileSidebarProps) => {
  const navigate = useNavigate();
  return (
  <aside
    className={`flex h-full flex-col overflow-y-auto overflow-x-hidden border-r border-sidebar-border bg-sidebar py-6 text-sidebar-foreground transition-[width] duration-200 ease-in-out ${
      collapsed ? "w-16 items-center px-2" : "w-64 pr-5 xl:w-72"
    }`}
  >
    {collapsed ? (
      <div className="mb-4 flex w-full flex-col items-center gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Guest" />
          <AvatarFallback className="bg-primary text-primary-foreground">G</AvatarFallback>
        </Avatar>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          aria-label="Expand menu"
          aria-expanded={false}
          title="Expand menu"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
        >
          <PanelLeftOpen className="h-4 w-4" />
        </Button>
      </div>
    ) : (
      <div className="mb-6 flex items-start gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-muted p-3">
          <Avatar className="h-11 w-11 shrink-0">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Guest" />
            <AvatarFallback className="bg-primary text-primary-foreground">G</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate font-semibold">Guest User</p>
            <p className="truncate text-xs text-muted-foreground">No tagline available</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          aria-label="Collapse menu"
          aria-expanded={true}
          title="Collapse menu"
          className="mt-1 h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground"
        >
          <PanelLeftClose className="h-4 w-4" />
        </Button>
      </div>
    )}

    <nav className={`flex w-full flex-1 flex-col gap-1 ${collapsed ? "items-center" : ""}`}>
      {nav.map(({ label, icon: Icon, active, to }) => (
        <Button
          key={label}
          variant="ghost"
          onClick={to ? () => navigate(to) : undefined}
          title={label}
          aria-label={label}
          className={`relative flex items-center rounded-lg font-medium transition-colors ${
            collapsed ? "w-11 justify-center py-3" : "w-full justify-start gap-4 px-4 py-3 text-[15px]"
          } ${active ? "text-primary" : "text-sidebar-foreground hover:bg-sidebar-accent"}`}
        >
          {active && (
            <span
              className={`absolute top-1/2 h-7 w-1 -translate-y-1/2 rounded-r bg-primary ${collapsed ? "-left-2" : "-left-4"}`}
            />
          )}
          <Icon className="h-5 w-5 shrink-0" />
          {!collapsed && label}
        </Button>
      ))}
    </nav>

    <div className={`mt-6 flex w-full flex-col gap-3 ${collapsed ? "items-center" : ""}`}>
      {collapsed ? (
        <>
          <Button
            size="icon"
            title="Manage Your Meetings"
            aria-label="Manage Your Meetings"
            onClick={() => navigate("/meetings")}
            className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90"
          >
            <CalendarDays className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            title="Manage Your Network"
            aria-label="Manage Your Network"
            onClick={() => navigate("/network")}
            className="h-11 w-11 rounded-xl border-primary/60 bg-transparent text-foreground hover:bg-sidebar-accent"
          >
            <Network className="h-5 w-5" />
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => navigate("/meetings")} className="h-12 w-full rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90">Manage Your Meetings</Button>
          <Button onClick={() => navigate("/network")} variant="outline" className="h-12 w-full rounded-xl border-primary/60 bg-transparent text-foreground hover:bg-sidebar-accent">Manage Your Network</Button>
        </>
      )}
    </div>
  </aside>
  );
};

export default ProfileSidebar;
