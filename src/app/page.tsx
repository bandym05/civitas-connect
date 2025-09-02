
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Landmark,
  Newspaper,
  Wrench,
  Construction,
  Search,
  LogIn,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featureTiles = [
  {
    title: "Request Services",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    href: "/dashboard/services",
    description: "Easily request waste pickups, apply for permits, and more.",
  },
  {
    title: "Pay Bills Online",
    icon: <Landmark className="h-8 w-8 text-primary" />,
    href: "/dashboard/services",
    description: "Securely pay your property tax and utility bills online.",
  },
  {
    title: "Stay Informed",
    icon: <Newspaper className="h-8 w-8 text-primary" />,
    href: "/dashboard/news",
    description: "Get the latest news, alerts, and announcements.",
  },
  {
    title: "Track Projects",
    icon: <Construction className="h-8 w-8 text-primary" />,
    href: "/dashboard/projects",
    description: "Follow the progress of municipal projects in your area.",
  },
];

const howItWorksSteps = [
    {
        icon: <Search className="h-10 w-10 text-primary" />,
        title: "Step 1: Find Your Service",
        description: "Use our search or browse categories to find the service you need."
    },
    {
        icon: <LogIn className="h-10 w-10 text-primary" />,
        title: "Step 2: Log In or Sign Up",
        description: "Create an account or log in to access dashboard features and track requests."
    },
     {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: "Step 3: Submit & Track",
        description: "Fill out the required form and track the status of your request in real-time."
    },
    {
        icon: <CheckCircle className="h-10 w-10 text-primary" />,
        title: "Step 4: Get Notified",
        description: "Receive updates and notifications as your request is processed and completed."
    }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-background">
      {/* Hero Section */}
      <section className="relative w-full py-32 md:py-48 text-center bg-card">
        <div className="absolute inset-0">
            <Image
                src="https://picsum.photos/1200/800"
                alt="City skyline"
                fill
                className="object-cover opacity-20"
                data-ai-hint="city skyline"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-headline">
            Your City, Connected.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Civitas Connect is your one-stop portal for municipal services, news, and community engagement. Access everything you need, right at your fingertips.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/login">Get Started <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">A Better Way to Engage with Your City</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">From paying bills to reporting issues, we've streamlined the process to save you time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureTiles.map((tile) => (
              <Card key={tile.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                        {tile.icon}
                    </div>
                  <CardTitle className="font-headline mt-4">{tile.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tile.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* How It Works Section */}
        <section className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">How It Works</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A simple, transparent process from start to finish.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {howItWorksSteps.map(step => (
                        <div key={step.title} className="flex flex-col items-center text-center">
                            <div className="p-4 bg-background rounded-full border shadow-sm">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-semibold mt-6 mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold font-headline">Ready to Get Started?</h2>
          <p className="mt-2 max-w-xl mx-auto text-muted-foreground">
            Create an account today to unlock your personalized dashboard, track your requests, and stay connected with your community.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/login">Create Your Account <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
