import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function CodeExamples() {
  return (
    <section id="code-examples">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Code Examples</h2>
        <p className="text-gray-600">
          Quick reference for common component patterns and usage.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Button Examples</h3>
          <Tabs defaultValue="primary">
            <TabsList>
              <TabsTrigger value="primary">Primary</TabsTrigger>
              <TabsTrigger value="outline">Outline</TabsTrigger>
              <TabsTrigger value="with-icon">With Icon</TabsTrigger>
            </TabsList>
            <TabsContent value="primary" className="mt-4">
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-gray-100">
                  <code>{`import { Button } from './components/ui/button';

<Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
  Primary Action
</Button>`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="outline" className="mt-4">
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-gray-100">
                  <code>{`import { Button } from './components/ui/button';

<Button variant="outline">
  Outline Button
</Button>

<Button variant="outline" className="border-2 border-gray-900">
  Bold Outline
</Button>`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="with-icon" className="mt-4">
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-gray-100">
                  <code>{`import { Button } from './components/ui/button';
import { Plus, ArrowRight } from 'lucide-react';

<Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
  <Plus className="mr-2 h-4 w-4" />
  Add New
</Button>

<Button className="bg-[#FF6B2C] hover:bg-[#FF5A1A]">
  <Star className="mr-2 h-4 w-4" />
  Highlight Action
</Button>`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Form Examples</h3>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-gray-100">
              <code>{`import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

// Basic Input
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>

// Input with Icon
<div className="space-y-2">
  <Label htmlFor="search">Search</Label>
  <div className="relative">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
    <Input id="search" placeholder="Search..." className="pl-10" />
  </div>
</div>

// Textarea
<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Enter your message..." rows={4} />
</div>

// Select Dropdown
<div className="space-y-2">
  <Label htmlFor="role">Role</Label>
  <Select>
    <SelectTrigger id="role">
      <SelectValue placeholder="Select your role" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="marketer">Marketer</SelectItem>
      <SelectItem value="sales">Sales</SelectItem>
      <SelectItem value="founder">Founder</SelectItem>
    </SelectContent>
  </Select>
</div>`}</code>
            </pre>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Data Display Examples</h3>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-gray-100">
              <code>{`import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Avatar, AvatarFallback } from './components/ui/avatar';

// Stat Card
<Card className="p-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-gray-600">Total Messages</h3>
    <TrendingUp className="h-5 w-5 text-green-500" />
  </div>
  <div className="text-gray-900 mb-2">2.5M</div>
  <p className="text-green-600">+12.5% from last month</p>
</Card>

// Badges
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge className="bg-[#0EA5E9] hover:bg-[#0284C7]">Primary Blue</Badge>
<Badge className="bg-green-100 text-green-800 hover:bg-green-100">Success</Badge>

// Avatars
<Avatar>
  <AvatarFallback className="bg-[#0EA5E9] text-white">JD</AvatarFallback>
</Avatar>`}</code>
            </pre>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Feedback Examples</h3>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-gray-100">
              <code>{`import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { toast } from 'sonner@2.0.3';
import { CheckCircle2, AlertCircle } from 'lucide-react';

// Success Alert
<Alert className="border-green-200 bg-green-50">
  <CheckCircle2 className="h-4 w-4 text-green-600" />
  <AlertTitle className="text-green-900">Success</AlertTitle>
  <AlertDescription className="text-green-800">
    Campaign has been successfully created!
  </AlertDescription>
</Alert>

// Error Alert
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Failed to send messages. Please try again.
  </AlertDescription>
</Alert>

// Toast Notifications
toast.success('Campaign created successfully!');
toast.error('Failed to delete campaign');
toast.info('Your campaign is being processed');

// Toast with Action
toast('Campaign sent', {
  description: '250 messages delivered successfully',
  action: {
    label: 'View',
    onClick: () => console.log('View clicked')
  }
});`}</code>
            </pre>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Modal Examples</h3>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-gray-100">
              <code>{`import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { Button } from './components/ui/button';

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Campaign</DialogTitle>
      <DialogDescription>
        Set up a new outreach campaign.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      {/* Form content here */}
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
        Create Campaign
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}</code>
            </pre>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Table Examples</h3>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-gray-100">
              <code>{`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Badge } from './components/ui/badge';

<div className="border rounded-lg overflow-hidden">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Campaign</TableHead>
        <TableHead>Status</TableHead>
        <TableHead className="text-right">Sent</TableHead>
        <TableHead className="text-right">Rate</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Q1 Tech Outreach</TableCell>
        <TableCell>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Active
          </Badge>
        </TableCell>
        <TableCell className="text-right">1,250</TableCell>
        <TableCell className="text-right">
          <span className="text-green-600">71.4%</span>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>`}</code>
            </pre>
          </div>
        </Card>
      </div>
    </section>
  );
}
