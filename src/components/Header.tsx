import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoUrl from "@/assets/upfounder-logo.jpeg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
      <div className="container flex h-16 items-center gap-2 sm:gap-4 px-4">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logoUrl} alt="Upfounder" className="h-9 w-auto" />
        </Link>

        
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
          <Link to="/search">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm sm:text-base px-3 sm:px-4">
              <span className="hidden sm:inline">Find a CoFounder</span>
              <span className="sm:hidden">Find</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
