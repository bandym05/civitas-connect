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
    href: "/services",
    description: "Securely pay your property tax and utility bills online.",
  },
  {
    title: "Report an Issue",
    icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
    href: "/services",
    description: "Report a pothole, broken streetlight, or other issues.",
  },
  {
    title: "News & Announcements",
    icon: <Newspaper className="h-8 w-8 text-accent" />,
    href: "/news",
    description: "Stay updated with the latest news from the municipality.",
  },
  {
    title: "Projects & Development",
    icon: <Construction className="h-8 w-8 text-yellow-500" />,
    href: "/projects",
    description: "Track the progress of ongoing municipal projects.",
  },
  {
    title: "Community Feedback",
    icon: <Megaphone className="h-8 w-8 text-purple-500" />,
    href: "/feedback",
    description: "Share your suggestions and ideas to improve our city.",
  },
  {
    title: "Service Requests",
    icon: <Wrench className="h-8 w-8 text-gray-500" />,
    href: "/services",
    description: "Request services like waste pickup or road repairs.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-card py-20 md:py-32">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-headline">
            Welcome to Civitas Connect
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your one-stop portal for all municipal services, news, and community engagement.
          </p>
          <div className="mt-8 max-w-lg mx-auto flex gap-2">
            <Input
              type="search"
              placeholder="Search for services, news, projects..."
              className="flex-grow"
            />
            <Button type="submit" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Quick Access
          </h2>
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
      </section>
    </div>
  );
}
