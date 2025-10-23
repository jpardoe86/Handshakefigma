import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export function ModalsSection() {
  return (
    <section id="modals">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Modals & Overlays</h2>
        <p className="text-gray-600">
          Dialogs, alert dialogs, sheets, and drawer components for overlay content.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Dialog Modal</h3>
          <div className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Campaign</DialogTitle>
                  <DialogDescription>
                    Set up a new outreach campaign. Fill in the details below.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Campaign Name</Label>
                    <Input id="name" placeholder="Q1 Tech Outreach" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Campaign description..." rows={3} />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">Create Campaign</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Small Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share Campaign</DialogTitle>
                  <DialogDescription>
                    Anyone with this link can view the campaign.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <Input value="https://handshake.app/campaign/abc123" readOnly />
                  <Button type="button" size="sm">Copy</Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <Button variant="outline">Close</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Alert Dialog</h3>
          <p className="text-gray-600 mb-4">
            Use alert dialogs for important confirmations and destructive actions.
          </p>
          <div className="flex flex-wrap gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Campaign</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your campaign
                    and remove all associated data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Confirm Action</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Start Campaign?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will activate the campaign and begin sending messages to 1,250 prospects.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                    Start Campaign
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Sheet (Drawer)</h3>
          <p className="text-gray-600 mb-4">
            Sheets slide in from the side, perfect for forms and additional details.
          </p>
          <div className="flex flex-wrap gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Campaign Details</SheetTitle>
                  <SheetDescription>
                    View and edit campaign information.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Campaign Name</Label>
                    <Input defaultValue="Q1 Tech Outreach" />
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Input defaultValue="Active" />
                  </div>
                  <div className="space-y-2">
                    <Label>Daily Limit</Label>
                    <Input type="number" defaultValue="50" />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea rows={4} defaultValue="Targeting tech founders in B2B SaaS..." />
                  </div>
                  <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]">
                    Save Changes
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Filters</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filter Campaigns</SheetTitle>
                  <SheetDescription>
                    Apply filters to narrow down your results.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Input placeholder="All statuses" />
                  </div>
                  <div className="space-y-2">
                    <Label>Date Range</Label>
                    <Input placeholder="Last 30 days" />
                  </div>
                  <div className="space-y-2">
                    <Label>Response Rate</Label>
                    <Input placeholder="Any" />
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">Reset</Button>
                    <Button className="flex-1 bg-[#0EA5E9] hover:bg-[#0284C7]">Apply</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Card>
      </div>
    </section>
  );
}
