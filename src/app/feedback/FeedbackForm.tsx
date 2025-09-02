'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { getRefinedFeedback } from './actions';
import type { RefineCommunityFeedbackOutput } from '@/ai/flows/refine-community-feedback';
import { Loader2, Lightbulb, ThumbsUp, ClipboardList } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';


type Inputs = {
  feedback: string;
};

export default function FeedbackForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<RefineCommunityFeedbackOutput | null>(null);
  const { toast } = useToast();

  const onSubmit = async (data: Inputs) => {
    setIsLoading(true);
    setResult(null);
    try {
      const refinedFeedback = await getRefinedFeedback({ feedback: data.feedback });
      setResult(refinedFeedback);
      reset();
    } catch (error) {
      console.error('Error refining feedback:', error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Could not process feedback. Please try again later.",
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
          Your submission will be analyzed by our AI to help us categorize and address it faster.
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
                Analyzing...
              </>
            ) : (
              'Submit Feedback'
            )}
          </Button>
        </form>

        {isLoading && (
            <div className="mt-8 text-center text-muted-foreground animate-pulse">
                <Lightbulb className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-4">Our AI is processing your feedback...</p>
            </div>
        )}

        {result && (
          <div className="mt-8 space-y-6 animate-in fade-in-50">
            <h3 className="text-xl font-semibold text-center font-headline">Feedback Analysis Complete</h3>
            <Card className="bg-secondary/50">
                <CardHeader>
                    <div className='flex justify-between items-start'>
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <ThumbsUp className="h-5 w-5 text-primary" />
                                Summary
                            </CardTitle>
                            <CardDescription>A concise overview of your feedback.</CardDescription>
                        </div>
                        <Badge>{result.category}</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p>{result.summary}</p>
                </CardContent>
            </Card>
             <Card className="bg-secondary/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ClipboardList className="h-5 w-5 text-primary" />
                        Actionable Steps
                    </CardTitle>
                     <CardDescription>How we might address your feedback.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{result.actionable}</p>
                </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
