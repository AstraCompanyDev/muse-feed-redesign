import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-2 sm:gap-4 px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-bold text-primary-foreground">C</span>
          </div>
          <span className="hidden sm:inline text-xl font-bold text-primary">CoFoundersLab</span>
        </div>
        
        <div className="flex flex-1 items-center gap-2 md:gap-4">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-input pl-9 border-border focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-foreground hover:text-primary hidden sm:flex">
            Login
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-sm sm:text-base px-3 sm:px-4">
            <span className="hidden sm:inline">Find a CoFounder</span>
            <span className="sm:hidden">Find</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
