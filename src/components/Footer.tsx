'use client';

import { Wind, Twitter, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    if (pathname.startsWith('/dashboard') || pathname === '/login') {
        return null;
    }

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Wind className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Civitas Connect</span>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Civitas Connect. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
