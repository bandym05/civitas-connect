'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Wind } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/news', label: 'News' },
  { href: '/projects', label: 'Projects' },
  { href: '/feedback', label: 'Feedback' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Wind className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Civitas Connect
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex-1 md:hidden">
            <Link href="/" className="flex items-center space-x-2">
               <Wind className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Civitas Connect</span>
            </Link>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              className="md:hidden"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={cn(
              'fixed inset-x-0 top-14 z-50 grid gap-6 bg-background/95 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden animate-in slide-in-from-top-4'
            )}
          >
            <nav className="grid gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
