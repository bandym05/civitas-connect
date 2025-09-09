
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


type Inputs = {
  feedback: string;
};

export default function FeedbackForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: Inputs) => {
    setIsLoading(true);
    try {
      // Here you would typically send the feedback to your backend
      console.log('Feedback submitted:', data.feedback);

      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback! We have received your submission.",
      });
      reset();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Could not submit feedback. Please try again later.",
      })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Your Feedback</CardTitle>
        <CardDescription>
          Let us know how we can improve. Your suggestions are valuable to us.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="feedback">Your Suggestion or Complaint</Label>
            <Textarea
              id="feedback"
              rows={6}
              placeholder="e.g., 'The crosswalk at Main and Oak street needs better lighting.' or 'I'd love to see more public art installations in our parks.'"
              {...register('feedback', { required: 'Feedback cannot be empty.' })}
            />
            {errors.feedback && <p className="text-sm text-destructive">{errors.feedback.message}</p>}
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Feedback'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
