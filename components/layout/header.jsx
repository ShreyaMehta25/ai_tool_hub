'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              AI Tools Hub
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/tools" className="transition-colors hover:text-primary">
              Browse Tools
            </Link>
            <Link href="/collections" className="transition-colors hover:text-primary">
              Collections
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}