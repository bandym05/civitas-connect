import FeedbackForm from "./FeedbackForm";

export default function FeedbackPage() {
  return (
    <div>
        <div className="space-y-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-headline">Community Feedback</h1>
                <p className="text-lg text-muted-foreground mt-2">
                Have a suggestion or a complaint? Let us know how we can improve.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                <FeedbackForm />
            </div>
        </div>
    </div>
  );
}
