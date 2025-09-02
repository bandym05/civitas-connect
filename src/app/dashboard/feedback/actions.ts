
'use server';

import { refineCommunityFeedback, RefineCommunityFeedbackInput, RefineCommunityFeedbackOutput } from '@/ai/flows/refine-community-feedback';

export async function getRefinedFeedback(
  input: RefineCommunityFeedbackInput
): Promise<RefineCommunityFeedbackOutput> {
  try {
    const output = await refineCommunityFeedback(input);
    return output;
  } catch (error) {
    console.error("Error in getRefinedFeedback server action:", error);
    throw new Error("Failed to refine feedback.");
  }
}
