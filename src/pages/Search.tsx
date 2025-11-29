import { useState } from "react";
import { RefreshCw, User, DollarSign, Briefcase, MapPin, Rocket, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SearchSidebar from "@/components/SearchSidebar";
import UserCard from "@/components/UserCard";

const Search = () => {
  const [activeFilter, setActiveFilter] = useState("Roles");

  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const filters = ["Roles", "Location", "Startup Stage", "Skills"];
  
  const roles = [
    { name: "Founder", Icon: User },
    { name: "Investor", Icon: DollarSign },
    { name: "Intern", Icon: Briefcase },
  ];

  const locations = ["United States", "United Kingdom", "Canada", "Germany", "India", "Remote"];
  const stages = ["Idea Stage", "MVP", "Early Stage", "Growth Stage", "Scale-Up"];
  const skills = ["Tech/Engineering", "Marketing", "Sales", "Design", "Finance", "Operations"];

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

            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-lg font-semibold text-foreground">Filter by</h2>
                <div className="flex gap-2 bg-muted/50 p-1 rounded-lg">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        activeFilter === filter
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-h-[200px] animate-fade-in">
                {activeFilter === "Roles" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {roles.map((role) => {
                      const IconComponent = role.Icon;
                      const isSelected = selectedRole === role.name;
                      return (
                        <button
                          key={role.name}
                          onClick={() => setSelectedRole(isSelected ? null : role.name)}
                          className={`group flex flex-col items-center justify-center p-8 rounded-lg border-2 transition-all hover:shadow-md ${
                            isSelected
                              ? "border-primary bg-primary/5 shadow-sm"
                              : "border-border bg-background hover:bg-card-highlight hover:border-primary/40"
                          }`}
                        >
                          <div className={`mb-4 p-4 rounded-full transition-colors ${
                            isSelected ? "bg-primary/10" : "bg-muted group-hover:bg-primary/5"
                          }`}>
                            <IconComponent className={`h-8 w-8 transition-colors ${
                              isSelected ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                            }`} />
                          </div>
                          <span className={`font-semibold ${isSelected ? "text-primary" : "text-foreground"}`}>
                            {role.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {activeFilter === "Location" && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {locations.map((location) => (
                      <Button
                        key={location}
                        variant="outline"
                        className="h-auto py-4 border-2 border-border text-foreground hover:bg-card-highlight hover:border-primary/50 justify-start group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <MapPin className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{location}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                )}

                {activeFilter === "Startup Stage" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {stages.map((stage) => (
                      <Button
                        key={stage}
                        variant="outline"
                        className="h-auto py-4 border-2 border-border text-foreground hover:bg-card-highlight hover:border-primary/50 justify-start group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Rocket className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{stage}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                )}

                {activeFilter === "Skills" && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skills.map((skill) => (
                      <Button
                        key={skill}
                        variant="outline"
                        className="h-auto py-4 border-2 border-border text-foreground hover:bg-card-highlight hover:border-primary/50 justify-start group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Lightbulb className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{skill}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>

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
