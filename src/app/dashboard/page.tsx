
'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wrench, Newspaper, AlertTriangle, CheckCircle, Clock, Construction, Megaphone, FileText } from "lucide-react";
import Link from "next/link";
import useLocalStorage from "@/hooks/use-local-storage";
import { news } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import type { ServiceRequest } from "@/lib/data";


const statusIcons = {
  Pending: <Clock className="h-5 w-5 text-yellow-500" />,
  'In Progress': <Wrench className="h-5 w-5 text-blue-500" />,
  Completed: <CheckCircle className="h-5 w-5 text-green-500" />,
};


export default function DashboardPage() {
  const [requests] = useLocalStorage<ServiceRequest[]>('service-requests', []);
  const latestRequest = requests.length > 0 ? requests[0] : null;
  const latestNews = news.find(n => !n.isEmergency) || news[0];

  const quickActions = [
      {
          title: "Request a Service",
          icon: <Wrench className="h-6 w-6 text-primary"/>,
          description: "Submit a request for waste pickup, permits, etc.",
          href: "/dashboard/services"
      },
      {
          title: "Read the News",
          icon: <Newspaper className="h-6 w-6 text-primary"/>,
          description: "Get the latest updates and announcements.",
          href: "/dashboard/news"
      },
      {
          title: "View Projects",
          icon: <Construction className="h-6 w-6 text-primary"/>,
          description: "Track ongoing and completed city projects.",
          href: "/dashboard/projects"
      },
      {
          title: "Give Feedback",
          icon: <Megaphone className="h-6 w-6 text-primary"/>,
          description: "Share your suggestions or report concerns.",
          href: "/dashboard/feedback"
      },
      {
          title: "Pay a Bill/Ticket",
          icon: <FileText className="h-6 w-6 text-primary"/>,
          description: "Settle utility bills or parking tickets online.",
          href: "/dashboard/services"
      }
  ]

  return (
    <div>
        <div className="mb-8">
            <h1 className="text-3xl font-bold font-headline">Welcome back, Jane!</h1>
            <p className="text-muted-foreground">Here's a quick overview of your city services and latest updates.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wrench className="h-6 w-6 text-primary"/>
                        Latest Service Request
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {latestRequest ? (
                        <div className="space-y-3">
                            <h3 className="font-semibold">{latestRequest.serviceTitle}</h3>
                            <div className="flex items-center gap-3 text-sm">
                                {statusIcons[latestRequest.status]}
                                <span className="font-medium">{latestRequest.status}</span>
                                <span className="text-muted-foreground">
                                    - {new Date(latestRequest.submittedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                            </div>
                             <p className="text-sm text-muted-foreground pt-2">
                                You can track the progress of all your requests on the services page.
                            </p>
                            <Button asChild variant="outline" className="mt-4">
                                <Link href="/dashboard/services">View All Requests</Link>
                            </Button>
                        </div>
                    ) : (
                         <div className="text-center text-muted-foreground py-8">
                            <p>You haven't made any service requests yet.</p>
                            <Button asChild variant="secondary" className="mt-4">
                                <Link href="/dashboard/services">Explore Services</Link>
                            </Button>
                        </div>
                    )}
                </CardContent>
             </Card>
              <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Newspaper className="h-6 w-6 text-primary"/>
                        Latest News
                    </CardTitle>
                </CardHeader>
                <CardContent>
                   {latestNews && (
                        <div className="space-y-3">
                             <Badge variant="secondary">{latestNews.category}</Badge>
                            <h3 className="font-semibold">{latestNews.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {latestNews.content.substring(0, 100)}...
                            </p>
                             <p className="text-xs text-muted-foreground pt-2">
                                {new Date(latestNews.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                            <Button asChild variant="outline" className="mt-4">
                                <Link href="/dashboard/news">Read More</Link>
                            </Button>
                        </div>
                   )}
                </CardContent>
             </Card>
           </div>
            <div className="lg:col-span-1">
                 <Card className="bg-secondary">
                    <CardHeader>
                        <CardTitle>Quick Links</CardTitle>
                        <CardDescription>Fast access to common actions.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                         <Button asChild variant="link" className="p-0 h-auto justify-start">
                            <Link href="/dashboard/services">Pay a Bill</Link>
                        </Button>
                         <Button asChild variant="link" className="p-0 h-auto justify-start">
                            <Link href="/dashboard/feedback">Submit Feedback</Link>
                        </Button>
                         <Button asChild variant="link" className="p-0 h-auto justify-start">
                            <Link href="/dashboard/projects">View City Projects</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
        <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Easily navigate to the most used sections of the portal.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {quickActions.map(action => (
                         <Link href={action.href} key={action.title} className="group">
                             <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary">
                                 <CardContent className="p-4 flex flex-col items-center text-center gap-3">
                                     {action.icon}
                                     <h3 className="font-semibold">{action.title}</h3>
                                     <p className="text-xs text-muted-foreground">{action.description}</p>
                                 </CardContent>
                             </Card>
                         </Link>
                    ))}
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
