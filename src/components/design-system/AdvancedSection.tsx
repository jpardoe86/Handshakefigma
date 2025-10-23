import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '../ui/dropdown-menu';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator, ContextMenuShortcut } from '../ui/context-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { Calendar, Settings, MoreVertical, Info, Copy, Edit, Trash, Share2, Download, User } from 'lucide-react';
import { useState } from 'react';

export function AdvancedSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="advanced">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Advanced Components</h2>
        <p className="text-gray-600">
          Popovers, tooltips, dropdowns, context menus, and command palettes.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Popovers</h3>
          <div className="flex flex-wrap gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="text-gray-900">Schedule Campaign</h4>
                  <p className="text-gray-600">
                    Choose when to start sending messages to your prospects.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">Tomorrow at 9:00 AM</Button>
                    <Button className="w-full" variant="outline">Next Monday</Button>
                    <Button className="w-full" variant="outline">Custom Date</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h4 className="text-gray-900 mb-2">Quick Settings</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Daily Limit</span>
                    <span className="text-gray-900">50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Auto Follow-up</span>
                    <span className="text-gray-900">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Time Zone</span>
                    <span className="text-gray-900">PST</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Tooltips</h3>
          <TooltipProvider>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Info className="mr-2 h-4 w-4" />
                    Hover me
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a helpful tooltip</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Campaign Settings</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share Campaign</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Download Report</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Dropdown Menus</h3>
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Actions
                  <MoreVertical className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Campaign Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  View Options
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Display</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Show Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>
                  Show Paused
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Show Completed
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Sort By
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="date">
                  <DropdownMenuRadioItem value="date">Date Created</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="performance">Performance</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Context Menu</h3>
          <p className="text-gray-600 mb-4">
            Right-click on the box below to see the context menu.
          </p>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-32 w-full max-w-md items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
              <span className="text-gray-600">Right-click here</span>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit
                <ContextMenuShortcut>⌘E</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="text-red-600">
                <Trash className="mr-2 h-4 w-4" />
                Delete
                <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Hover Card</h3>
          <p className="text-gray-600 mb-4">
            Hover over the user to see additional information.
          </p>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="px-0">
                <User className="mr-2 h-4 w-4" />
                @johndoe
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white">
                  JD
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="text-gray-900">John Doe</h4>
                  <p className="text-gray-600">Product Manager at TechCorp</p>
                  <div className="flex gap-4 pt-2 text-gray-500">
                    <div>
                      <span className="text-gray-900">1,234</span> followers
                    </div>
                    <div>
                      <span className="text-gray-900">567</span> following
                    </div>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Command Palette</h3>
          <p className="text-gray-600 mb-4">
            Press the button below to open the command palette (⌘K).
          </p>
          <Button variant="outline" onClick={() => setOpen(true)}>
            Open Command Palette
          </Button>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Create New Campaign</CommandItem>
                <CommandItem>View Analytics</CommandItem>
                <CommandItem>Export Data</CommandItem>
                <CommandItem>Import Prospects</CommandItem>
              </CommandGroup>
              <CommandGroup heading="Navigation">
                <CommandItem>Dashboard</CommandItem>
                <CommandItem>Campaigns</CommandItem>
                <CommandItem>Prospects</CommandItem>
                <CommandItem>Analytics</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </Card>
      </div>
    </section>
  );
}
