import { Card } from '../ui/card';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Button } from '../ui/button';
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Skeleton } from '../ui/skeleton';

export function FeedbackSection() {
  return (
    <section id="feedback">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Feedback Components</h2>
        <p className="text-gray-600">
          Alerts, toasts, loading states, and other feedback mechanisms.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Alerts</h3>
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                Your campaign has been scheduled and will start sending tomorrow at 9:00 AM.
              </AlertDescription>
            </Alert>

            <Alert className="border-green-200 bg-green-50">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-900">Success</AlertTitle>
              <AlertDescription className="text-green-800">
                Campaign has been successfully created and activated!
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-yellow-900">Warning</AlertTitle>
              <AlertDescription className="text-yellow-800">
                You're approaching your monthly message limit. Consider upgrading your plan.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Failed to send messages. Please check your email configuration and try again.
              </AlertDescription>
            </Alert>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Toast Notifications</h3>
          <p className="text-gray-600 mb-4">
            Click the buttons below to trigger toast notifications.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => toast.success('Campaign created successfully!')}
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error('Failed to delete campaign')}
            >
              Error Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info('Your campaign is being processed')}
            >
              Info Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning('You have 10 messages remaining')}
            >
              Warning Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toast('Campaign sent', {
                  description: '250 messages delivered successfully',
                  action: {
                    label: 'View',
                    onClick: () => console.log('View clicked')
                  }
                });
              }}
            >
              Toast with Action
            </Button>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Loading States</h3>
          <div className="space-y-6">
            <div className="space-y-3">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-3/4" />
            </div>

            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-32 w-full rounded-lg" />
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Empty States</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-gray-900 mb-2">No campaigns yet</h3>
            <p className="text-gray-600 mb-6">
              Get started by creating your first outreach campaign.
            </p>
            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              Create Campaign
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
