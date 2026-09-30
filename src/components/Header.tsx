import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/ThemeToggle";
import logoUrl from "@/assets/upfounder-logo.jpeg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
      <div className="flex h-12 w-full items-center gap-2 px-4 sm:px-[10%]">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logoUrl} alt="Upfounder" className="h-7 w-auto" />
        </Link>

        
        <div className="flex flex-1 items-center justify-center gap-2 md:gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="h-8 w-full rounded-lg bg-input pl-8 text-sm border-border focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" className="text-foreground hover:text-primary hidden sm:flex">
            Login
          </Button>
          <Link to="/search">
            <Button className="rounded-xl bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium text-sm sm:text-base px-3 sm:px-4">
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
