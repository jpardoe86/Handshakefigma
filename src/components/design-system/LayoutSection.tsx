import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { LayoutDashboard, Mail, Users, Settings, Search, Bell, Plus, TrendingUp, BarChart3 } from 'lucide-react';

export function LayoutSection() {
  return (
    <section id="layouts">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Layout Patterns</h2>
        <p className="text-gray-600">
          Common layout patterns and page structures for SaaS applications.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Dashboard Layout</h3>
          <div className="border rounded-lg overflow-hidden bg-white">
            {/* Top Navigation Bar */}
            <div className="border-b bg-white px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <h3 className="text-gray-900">Dashboard</h3>
                  <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Search campaigns..." 
                      className="pl-10 w-64 h-9"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button size="icon" variant="ghost">
                    <Bell className="h-5 w-5" />
                  </Button>
                  <Avatar>
                    <AvatarFallback className="bg-[#0EA5E9] text-white">JD</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 border-r bg-gray-50 p-4">
                <nav className="space-y-1">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 bg-[#0EA5E9] text-white rounded-lg">
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                    <Mail className="h-5 w-5" />
                    <span>Campaigns</span>
                    <Badge className="ml-auto bg-[#FF6B2C] hover:bg-[#FF6B2C]">3</Badge>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                    <Users className="h-5 w-5" />
                    <span>Prospects</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                    <BarChart3 className="h-5 w-5" />
                    <span>Analytics</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </nav>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-6 bg-gray-50">
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">Total Sent</span>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="text-gray-900 mb-1">24,567</div>
                      <p className="text-green-600">+12.5%</p>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">Response Rate</span>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="text-gray-900 mb-1">87.2%</div>
                      <p className="text-green-600">+3.2%</p>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">Meetings</span>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="text-gray-900 mb-1">342</div>
                      <p className="text-green-600">+24%</p>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-gray-900">Recent Campaigns</h4>
                      <Button size="sm" className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                        <Plus className="mr-2 h-4 w-4" />
                        New Campaign
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center">
                              <Mail className="h-5 w-5 text-[#0EA5E9]" />
                            </div>
                            <div>
                              <div className="text-gray-900">Q{i} Campaign</div>
                              <div className="text-gray-600">Active • 1,250 sent</div>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            Active
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">List View Layout</h3>
          <div className="border rounded-lg overflow-hidden bg-white">
            {/* Header */}
            <div className="border-b bg-white px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-900 mb-1">All Campaigns</h3>
                  <p className="text-gray-600">Manage your outreach campaigns</p>
                </div>
                <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Campaign
                </Button>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="border-b bg-gray-50 px-6 py-3">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">All Campaigns</Button>
                <Button variant="ghost" size="sm">Active</Button>
                <Button variant="ghost" size="sm">Paused</Button>
                <Button variant="ghost" size="sm">Completed</Button>
                <div className="ml-auto">
                  <Input placeholder="Search..." className="w-64 h-9" />
                </div>
              </div>
            </div>

            {/* Table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Sent</TableHead>
                  <TableHead className="text-right">Opened</TableHead>
                  <TableHead className="text-right">Replied</TableHead>
                  <TableHead className="text-right">Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: 'Q1 Tech Outreach', status: 'Active', sent: 1250, opened: 892, replied: 267, rate: 71.4 },
                  { name: 'Agency Partners', status: 'Active', sent: 856, opened: 634, replied: 198, rate: 74.1 },
                  { name: 'SaaS Founders', status: 'Paused', sent: 2100, opened: 1456, replied: 412, rate: 69.3 },
                ].map((campaign, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#0EA5E9]/10 flex items-center justify-center">
                          <Mail className="h-4 w-4 text-[#0EA5E9]" />
                        </div>
                        {campaign.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        campaign.status === 'Active'
                          ? 'bg-green-100 text-green-800 hover:bg-green-100'
                          : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                      }>
                        {campaign.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{campaign.sent.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{campaign.opened.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{campaign.replied.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <span className="text-green-600">{campaign.rate}%</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Settings Layout</h3>
          <div className="border rounded-lg overflow-hidden bg-white">
            <div className="flex">
              {/* Settings Navigation */}
              <div className="w-64 border-r bg-gray-50 p-4">
                <nav className="space-y-1">
                  <a href="#" className="block px-3 py-2 bg-white text-gray-900 rounded-lg">
                    General
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                    Profile
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                    Billing
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                    Integrations
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                    Team
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                    Security
                  </a>
                </nav>
              </div>

              {/* Settings Content */}
              <div className="flex-1 p-6">
                <div className="max-w-2xl space-y-6">
                  <div>
                    <h3 className="text-gray-900 mb-1">General Settings</h3>
                    <p className="text-gray-600">Manage your account preferences and settings.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-gray-900">Company Name</label>
                      <Input defaultValue="TechCorp Inc." />
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-900">Email Address</label>
                      <Input type="email" defaultValue="john@techcorp.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-900">Time Zone</label>
                      <Input defaultValue="Pacific Time (PT)" />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Empty State Layout</h3>
          <div className="border rounded-lg bg-white p-12">
            <div className="text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-gray-900 mb-2">No campaigns yet</h3>
              <p className="text-gray-600 mb-6">
                Get started by creating your first outreach campaign. 
                Our AI will help you personalize messages at scale.
              </p>
              <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                <Plus className="mr-2 h-4 w-4" />
                Create Your First Campaign
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
