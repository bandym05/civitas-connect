
'use client'

import * as React from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarInset,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wind, LayoutDashboard, Newspaper, Wrench, Construction, Megaphone, LogOut, Settings } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/services', label: 'Services', icon: Wrench },
  { href: '/dashboard/news', label: 'News', icon: Newspaper },
  { href: '/dashboard/projects', label: 'Projects', icon: Construction },
  { href: '/dashboard/feedback', label: 'Feedback', icon: Megaphone },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
            <SidebarContent>
                <SidebarHeader>
                    <div className="flex items-center gap-2">
                        <Wind className="h-6 w-6 text-primary" />
                        <h1 className="font-semibold text-lg font-headline">Civitas Connect</h1>
                    </div>
                </SidebarHeader>
                <SidebarMenu>
                    {navItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                        <Link href={item.href}>
                        <SidebarMenuButton isActive={pathname === item.href}>
                            <item.icon />
                            <span>{item.label}</span>
                        </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <div className="flex items-center gap-3 p-2 border-t">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <p className="text-sm font-semibold">Jane Doe</p>
                        <p className="text-xs text-muted-foreground">jane.doe@example.com</p>
                    </div>
                     <ThemeToggle />
                </div>
                 <SidebarMenu>
                    <SidebarMenuItem>
                        <Link href="#">
                            <SidebarMenuButton>
                                <Settings/>
                                <span>Settings</span>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <Link href="/">
                            <SidebarMenuButton>
                                <LogOut/>
                                <span>Logout</span>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                 </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between p-4 border-b md:justify-end">
            <div className="md:hidden">
                <SidebarTrigger />
            </div>
             <p className="text-sm font-medium hidden md:block">Welcome back, Jane!</p>
          </header>
          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
