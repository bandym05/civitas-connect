'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { services, Service } from '@/lib/data';
import useLocalStorage from '@/hooks/use-local-storage';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid'; // Need to add uuid

type FormData = {
  [key: string]: string;
};

type ServiceRequest = {
  id: string;
  serviceTitle: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  submittedAt: string;
  data: FormData;
};

const ServiceRequestForm = ({
  service,
  onFormSubmit,
}: {
  service: Service;
  onFormSubmit: (data: FormData) => void;
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      {service.formFields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.type === 'textarea' ? (
            <Textarea
              id={field.name}
              placeholder={field.placeholder}
              {...register(field.name, { required: field.required })}
            />
          ) : (
            <Input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name, { required: field.required })}
            />
          )}
          {errors[field.name] && <p className="text-sm text-destructive">This field is required.</p>}
        </div>
      ))}
      <DialogFooter>
        <Button type="submit">Submit Request</Button>
      </DialogFooter>
    </form>
  );
};

const ServiceTracker = ({ requests }: { requests: ServiceRequest[] }) => {
  if (requests.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>You have no active service requests.</p>
        <p className="text-sm">Submit a request using one of the services above.</p>
      </div>
    )
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Service Requests</CardTitle>
        <CardDescription>Track the status of your submitted requests.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Date Submitted</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.serviceTitle}</TableCell>
                <TableCell>{new Date(request.submittedAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={
                      request.status === 'Completed'
                        ? 'default'
                        : request.status === 'In Progress'
                        ? 'secondary'
                        : 'outline'
                    }
                    className={cn({
                      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': request.status === 'Completed',
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': request.status === 'In Progress',
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': request.status === 'Pending',
                    })}
                  >
                    {request.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default function ServicesPage() {
  const [requests, setRequests] = useLocalStorage<ServiceRequest[]>('service-requests', []);
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // This is a mock function to simulate generating a UUID.
  // In a real app, you would install the `uuid` package.
  const mockUuid = () => Math.random().toString(36).substring(2, 15);

  const handleFormSubmit = (serviceTitle: string) => (data: FormData) => {
    const newRequest: ServiceRequest = {
      id: mockUuid(), // In a real app: uuidv4(),
      serviceTitle,
      status: 'Pending',
      submittedAt: new Date().toISOString(),
      data,
    };
    setRequests([newRequest, ...requests]);
    setIsDialogOpen(false);
    toast({
      title: "Request Submitted!",
      description: `Your request for "${serviceTitle}" has been received.`,
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">Citizen Services</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Access municipal services from the comfort of your home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <Dialog key={service.id} onOpenChange={setIsDialogOpen} open={isDialogOpen && isDialogOpen[service.id]} >
             <Card className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                    <span className="text-primary">{service.icon({className: "w-8 h-8"})}</span>
                    <CardTitle className="font-headline">{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <DialogTrigger asChild>
                  <Button className="w-full" onClick={() => setIsDialogOpen(prevState => ({...prevState, [service.id]: true}))}>
                    Open Form
                  </Button>
                </DialogTrigger>
              </CardContent>
            </Card>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{service.title}</DialogTitle>
                <DialogDescription>
                  Please fill out the form below. Required fields are marked with an asterisk.
                </DialogDescription>
              </DialogHeader>
              <ServiceRequestForm
                service={service}
                onFormSubmit={(data) => {
                    handleFormSubmit(service.title)(data);
                    setIsDialogOpen(prevState => ({...prevState, [service.id]: false}));
                }}
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <div className="mt-16">
        <ServiceTracker requests={requests} />
      </div>
    </div>
  );
}
