import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import Header from "@/components/Header";
import SearchSidebar from "@/components/SearchSidebar";
import UserCard from "@/components/UserCard";

const Search = () => {
  const [activeFilter, setActiveFilter] = useState("Roles");

  const filters = ["Roles", "Location", "Startup Stage", "Skills"];
  
  const roles = [
    { name: "Founder", icon: "👤" },
    { name: "Investor", icon: "💰" },
    { name: "Intern", icon: "💼" },
  ];

  const users = [
    {
      name: "Chris Quinn",
      title: "CTO, Builder Of Awesome T...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris",
      online: true,
    },
    {
      name: "Alex Grow",
      title: "Under A Magnum Rock Oppor...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      online: true,
    },
    {
      name: "Juan Rubedo",
      title: "Number One At Sales, Look...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
      online: true,
    },
    {
      name: "Ruzho Rekani",
      title: "Entrepreneur Turning Idea...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ruzho",
      online: true,
    },
    {
      name: "Avonika Ghose",
      title: "Product Designer & Startu...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Avonika",
      online: true,
    },
    {
      name: "Florian Roewing",
      title: "Building The Future Of Co...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Florian",
      online: true,
    },
    {
      name: "Rudra Kumar",
      title: "Tech Entrepreneur & AI En...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rudra",
      online: true,
    },
    {
      name: "Dikheba Sharma",
      title: "Marketing Expert & Growth...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dikheba",
      online: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block">
            <SearchSidebar />
          </div>
          
          <main className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-foreground">Find Your CoFounder</h1>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Reset
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-border text-foreground hover:bg-card-highlight"
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>

            {activeFilter === "Roles" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roles.map((role) => (
                  <button
                    key={role.name}
                    className="flex flex-col items-center justify-center p-8 rounded-lg border border-border bg-card hover:bg-card-highlight transition-colors"
                  >
                    <div className="text-4xl mb-3">{role.icon}</div>
                    <span className="text-foreground font-medium">{role.name}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="flex justify-end">
              <Button 
                size="sm" 
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {users.map((user, index) => (
                <UserCard key={index} {...user} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Search;
