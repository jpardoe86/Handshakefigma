import { Card } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Progress } from '../ui/progress';
import { MoreVertical, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '../ui/button';

export function DataDisplaySection() {
  const campaigns = [
    { id: 1, name: 'Q1 Tech Outreach', status: 'Active', sent: 1250, opened: 892, replied: 267, rate: 71.4 },
    { id: 2, name: 'Agency Partners', status: 'Active', sent: 856, opened: 634, replied: 198, rate: 74.1 },
    { id: 3, name: 'SaaS Founders', status: 'Paused', sent: 2100, opened: 1456, replied: 412, rate: 69.3 },
    { id: 4, name: 'Marketing Directors', status: 'Completed', sent: 3200, opened: 2688, replied: 896, rate: 84.0 }
  ];

  return (
    <section id="data-display">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Data Display</h2>
        <p className="text-gray-600">
          Tables, cards, badges, and other components for displaying data.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Data Table</h3>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Sent</TableHead>
                  <TableHead className="text-right">Opened</TableHead>
                  <TableHead className="text-right">Replied</TableHead>
                  <TableHead className="text-right">Rate</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell>{campaign.name}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          campaign.status === 'Active'
                            ? 'bg-green-100 text-green-800 hover:bg-green-100'
                            : campaign.status === 'Paused'
                            ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-100'
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{campaign.sent.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{campaign.opened.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{campaign.replied.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <span className="text-green-600">{campaign.rate}%</span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Total Messages</h3>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-gray-900 mb-2">2.5M</div>
            <p className="text-green-600">+12.5% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Response Rate</h3>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-gray-900 mb-2">87.2%</div>
            <p className="text-green-600">+3.2% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Active Campaigns</h3>
              <TrendingDown className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-gray-900 mb-2">24</div>
            <p className="text-red-600">-2 from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Meetings Booked</h3>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-gray-900 mb-2">342</div>
            <p className="text-green-600">+24% from last month</p>
          </Card>
        </div>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Badges</h3>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge className="bg-[#0EA5E9] hover:bg-[#0284C7]">Primary</Badge>
            <Badge className="bg-[#FF6B2C] hover:bg-[#FF5A1A]">Accent</Badge>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Success</Badge>
            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Warning</Badge>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Avatars</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-[#0EA5E9] text-white">AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-[#FF6B2C] text-white">CD</AvatarFallback>
            </Avatar>
            <div className="flex -space-x-2">
              <Avatar className="border-2 border-white">
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarFallback className="bg-gray-200 text-gray-600">+5</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Progress Bars</h3>
          <div className="space-y-6 max-w-md">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Campaign Progress</span>
                <span className="text-gray-900">75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Response Rate</span>
                <span className="text-gray-900">87%</span>
              </div>
              <Progress value={87} className="[&>div]:bg-green-500" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Storage Used</span>
                <span className="text-gray-900">45%</span>
              </div>
              <Progress value={45} className="[&>div]:bg-[#FF6B2C]" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
