import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AlertTriangle,
  Landmark,
  Megaphone,
  Newspaper,
  Search,
  Users,
  Wrench,
  Construction,
} from "lucide-react";
import Link from "next/link";

const quickAccessTiles = [
  {
    title: "Pay Bills",
    icon: <Landmark className="h-8 w-8 text-primary" />,
    href: "/dashboard/services",
    description: "Securely pay your property tax and utility bills online.",
  },
  {
    title: "Report an Issue",
    icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
    href: "/dashboard/services",
    description: "Report a pothole, broken streetlight, or other issues.",
  },
  {
    title: "News & Announcements",
    icon: <Newspaper className="h-8 w-8 text-accent" />,
    href: "/dashboard/news",
    description: "Stay updated with the latest news from the municipality.",
  },
  {
    title: "Projects & Development",
    icon: <Construction className="h-8 w-8 text-yellow-500" />,
    href: "/dashboard/projects",
    description: "Track the progress of ongoing municipal projects.",
  },
  {
    title: "Community Feedback",
    icon: <Megaphone className="h-8 w-8 text-purple-500" />,
    href: "/dashboard/feedback",
    description: "Share your suggestions and ideas to improve our city.",
  },
  {
    title: "Service Requests",
    icon: <Wrench className="h-8 w-8 text-gray-500" />,
    href: "/dashboard/services",
    description: "Request services like waste pickup or road repairs.",
  },
];

export default function DashboardPage() {
  return (
    <div>
        <div className="mb-8">
            <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
            <p className="text-muted-foreground">Here's a quick overview of our city services.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {quickAccessTiles.map((tile) => (
            <Link href={tile.href} key={tile.title} className="group">
            <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                {tile.icon}
                <CardTitle className="font-headline">{tile.title}</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-muted-foreground">{tile.description}</p>
                </CardContent>
            </Card>
            </Link>
        ))}
        </div>
    </div>
  );
}
