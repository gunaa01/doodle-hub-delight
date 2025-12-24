import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDoodle, RocketDoodle } from "./doodles/DoodleCharacters";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:rotate-12">
            <CalendarDoodle className="w-full h-full" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Thittam<span className="text-primary">1</span>Hub
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors font-medium doodle-underline">
            Home
          </Link>
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium doodle-underline">
            Features
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium doodle-underline">
            About
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" className="font-semibold">
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="doodle" className="flex items-center gap-2">
              <RocketDoodle className="w-5 h-5" />
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
