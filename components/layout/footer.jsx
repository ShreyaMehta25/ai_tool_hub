'use client';

import Link from 'next/link';
import { Github, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span>AI Tools Hub</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Discover the best AI tools for every need. From chatbots to image generation,
              find the perfect AI solution for your workflow.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-foreground transition-colors">
                  Browse Tools
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-foreground transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Collections</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/collections/top-rated" className="hover:text-foreground transition-colors">
                  Top Rated
                </Link>
              </li>
              <li>
                <Link href="/collections/free-tools" className="hover:text-foreground transition-colors">
                  Free Tools
                </Link>
              </li>
              <li>
                <Link href="/collections/developer-tools" className="hover:text-foreground transition-colors">
                  Developer Tools
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui</p>
          <p className="mt-2">© 2025 AI Tools Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}