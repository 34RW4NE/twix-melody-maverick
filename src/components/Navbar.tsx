
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Music, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 lg:px-12",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Music size={22} className="text-twix-gold absolute animate-pulse-soft" />
            <Volume2 size={18} className="text-twix-chocolate absolute -bottom-0.5 -right-0.5" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Twix<span className="text-twix-gold">Bot</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Commands', 'Stats', 'FAQ'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-twix-gold transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            className="hidden md:flex bg-twix-gold hover:bg-twix-gold/90 text-black transition-all duration-300 rounded-full"
          >
            Add to Discord
          </Button>
          
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md p-4 flex flex-col gap-4 transition-all duration-300 ease-in-out">
          {['Features', 'Commands', 'Stats', 'FAQ'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground py-2 px-4 hover:bg-muted rounded-md transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button 
            className="bg-twix-gold hover:bg-twix-gold/90 text-black mt-2 transition-all duration-300 rounded-full"
          >
            Add to Discord
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
