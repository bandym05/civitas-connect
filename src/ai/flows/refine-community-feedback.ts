'use server';

/**
 * @fileOverview A community feedback refinement AI agent.
 *
 * - refineCommunityFeedback - A function that handles the feedback refinement process.
 * - RefineCommunityFeedbackInput - The input type for the refineCommunityFeedback function.
 * - RefineCommunityFeedbackOutput - The return type for the refineCommunityFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineCommunityFeedbackInputSchema = z.object({
  feedback: z
    .string()
    .describe('The community feedback to be refined, categorized and summarized.'),
});
export type RefineCommunityFeedbackInput = z.infer<typeof RefineCommunityFeedbackInputSchema>;

const RefineCommunityFeedbackOutputSchema = z.object({
  category: z.string().describe('The category of the feedback.'),
  summary: z.string().describe('A concise summary of the feedback.'),
  actionable: z
    .string()
    .describe('Specific, actionable steps to address the feedback.'),
});
export type RefineCommunityFeedbackOutput = z.infer<typeof RefineCommunityFeedbackOutputSchema>;

export async function refineCommunityFeedback(input: RefineCommunityFeedbackInput): Promise<RefineCommunityFeedbackOutput> {
  return refineCommunityFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineCommunityFeedbackPrompt',
  input: {schema: RefineCommunityFeedbackInputSchema},
  output: {schema: RefineCommunityFeedbackOutputSchema},
  prompt: `You are a municipal administrator tasked with refining community feedback.

  You will categorize, summarize, and suggest actionable steps to address the feedback so that municipal administrators can efficiently understand and address citizen concerns.

  Feedback: {{{feedback}}}`,
});

const refineCommunityFeedbackFlow = ai.defineFlow(
  {
    name: 'refineCommunityFeedbackFlow',
    inputSchema: RefineCommunityFeedbackInputSchema,
    outputSchema: RefineCommunityFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
