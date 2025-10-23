import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';
import { Home, LayoutDashboard, Mail, Users, Settings, BarChart } from 'lucide-react';

export function NavigationSection() {
  return (
    <section id="navigation">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Navigation</h2>
        <p className="text-gray-600">
          Tabs, breadcrumbs, pagination, and navigation menus.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Tabs</h3>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-2">Overview Content</h4>
                <p className="text-gray-600">
                  Dashboard overview showing key metrics and recent activity.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="mt-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-2">Analytics Content</h4>
                <p className="text-gray-600">
                  Detailed analytics and performance reports.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="campaigns" className="mt-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-2">Campaigns Content</h4>
                <p className="text-gray-600">
                  Manage and view all your outreach campaigns.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="settings" className="mt-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-2">Settings Content</h4>
                <p className="text-gray-600">
                  Configure your account and preferences.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Breadcrumbs</h3>
          <div className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <Home className="h-4 w-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/campaigns">Campaigns</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Q1 Tech Outreach</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Profile</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Pagination</h3>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Sidebar Navigation</h3>
          <div className="border rounded-lg p-4 bg-gray-50 max-w-xs">
            <nav className="space-y-2">
              <a href="#" className="flex items-center gap-3 px-3 py-2 bg-[#0EA5E9] text-white rounded-lg">
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                <Mail className="h-5 w-5" />
                <span>Campaigns</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                <Users className="h-5 w-5" />
                <span>Prospects</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                <BarChart className="h-5 w-5" />
                <span>Analytics</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white rounded-lg transition-colors">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </nav>
          </div>
        </Card>
      </div>
    </section>
  );
}
