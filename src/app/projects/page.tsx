import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  const ongoingProjects = projects.filter(p => p.status === 'Ongoing');
  const completedProjects = projects.filter(p => p.status === 'Completed');

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">Projects & Development</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Tracking the growth and improvement of our municipality.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold font-headline mb-8">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingProjects.map(project => (
            <Card key={project.id}>
              <CardHeader className='p-0'>
                <div className="relative h-48 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
                 <div className="p-6">
                    <Badge>{project.status}</Badge>
                    <CardTitle className="mt-2 font-headline">{project.title}</CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                 </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-muted-foreground">Progress</span>
                    <span className="text-sm font-bold text-primary">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-8">Completed Projects</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map(project => (
            <Card key={project.id} className="opacity-75">
              <CardHeader className='p-0'>
                 <div className="relative h-48 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg filter grayscale"
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
                <div className="p-6">
                    <Badge variant="secondary">{project.status}</Badge>
                    <CardTitle className="mt-2 font-headline">{project.title}</CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                </div>
              </CardHeader>
               <CardFooter className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
