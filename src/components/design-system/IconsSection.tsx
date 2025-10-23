import { Card } from '../ui/card';
import { 
  Mail, User, Settings, Search, Plus, Edit, Trash2, Download, Upload, 
  Share2, Copy, Check, X, ChevronRight, ChevronLeft, ChevronDown, ChevronUp,
  ArrowRight, ArrowLeft, ArrowUp, ArrowDown, Home, LayoutDashboard, Users,
  BarChart3, Calendar, Clock, Bell, Info, AlertCircle, CheckCircle2, AlertTriangle,
  Star, Heart, Bookmark, Filter, MoreVertical, MoreHorizontal, Eye, EyeOff,
  Lock, Unlock, Key, Shield, Zap, TrendingUp, TrendingDown, Activity,
  FileText, Folder, Image, File, Paperclip, Link, ExternalLink, Award, Target, Rocket
} from 'lucide-react';
import { Badge } from '../ui/badge';

export function IconsSection() {
  const iconCategories = [
    {
      title: 'Common Actions',
      icons: [
        { Icon: Plus, name: 'Plus' },
        { Icon: Edit, name: 'Edit' },
        { Icon: Trash2, name: 'Trash2' },
        { Icon: Download, name: 'Download' },
        { Icon: Upload, name: 'Upload' },
        { Icon: Share2, name: 'Share2' },
        { Icon: Copy, name: 'Copy' },
        { Icon: Check, name: 'Check' },
        { Icon: X, name: 'X' },
        { Icon: Search, name: 'Search' },
        { Icon: Filter, name: 'Filter' },
        { Icon: MoreVertical, name: 'MoreVertical' },
      ]
    },
    {
      title: 'Navigation',
      icons: [
        { Icon: ChevronRight, name: 'ChevronRight' },
        { Icon: ChevronLeft, name: 'ChevronLeft' },
        { Icon: ChevronDown, name: 'ChevronDown' },
        { Icon: ChevronUp, name: 'ChevronUp' },
        { Icon: ArrowRight, name: 'ArrowRight' },
        { Icon: ArrowLeft, name: 'ArrowLeft' },
        { Icon: ArrowUp, name: 'ArrowUp' },
        { Icon: ArrowDown, name: 'ArrowDown' },
        { Icon: Home, name: 'Home' },
        { Icon: ExternalLink, name: 'ExternalLink' },
      ]
    },
    {
      title: 'Interface',
      icons: [
        { Icon: LayoutDashboard, name: 'LayoutDashboard' },
        { Icon: Users, name: 'Users' },
        { Icon: User, name: 'User' },
        { Icon: Settings, name: 'Settings' },
        { Icon: Mail, name: 'Mail' },
        { Icon: BarChart3, name: 'BarChart3' },
        { Icon: Calendar, name: 'Calendar' },
        { Icon: Clock, name: 'Clock' },
        { Icon: Bell, name: 'Bell' },
      ]
    },
    {
      title: 'Feedback',
      icons: [
        { Icon: Info, name: 'Info' },
        { Icon: AlertCircle, name: 'AlertCircle' },
        { Icon: CheckCircle2, name: 'CheckCircle2' },
        { Icon: AlertTriangle, name: 'AlertTriangle' },
        { Icon: TrendingUp, name: 'TrendingUp' },
        { Icon: TrendingDown, name: 'TrendingDown' },
        { Icon: Activity, name: 'Activity' },
        { Icon: Zap, name: 'Zap' },
      ]
    },
    {
      title: 'Files & Media',
      icons: [
        { Icon: FileText, name: 'FileText' },
        { Icon: Folder, name: 'Folder' },
        { Icon: Image, name: 'Image' },
        { Icon: File, name: 'File' },
        { Icon: Paperclip, name: 'Paperclip' },
        { Icon: Link, name: 'Link' },
      ]
    },
    {
      title: 'Security & Preferences',
      icons: [
        { Icon: Lock, name: 'Lock' },
        { Icon: Unlock, name: 'Unlock' },
        { Icon: Key, name: 'Key' },
        { Icon: Shield, name: 'Shield' },
        { Icon: Eye, name: 'Eye' },
        { Icon: EyeOff, name: 'EyeOff' },
        { Icon: Star, name: 'Star' },
        { Icon: Heart, name: 'Heart' },
        { Icon: Bookmark, name: 'Bookmark' },
      ]
    }
  ];

  return (
    <section id="icons">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Icons</h2>
        <p className="text-gray-600">
          Icon library using Lucide React. Consistent, scalable, and accessible icons.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-4">Icon Sizes</h3>
          <p className="text-gray-600 mb-6">
            Standard icon sizes for different use cases.
          </p>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mb-2">
                <Mail className="h-3 w-3 text-[#0EA5E9]" />
              </div>
              <p className="text-gray-600">h-3 w-3</p>
              <p className="text-gray-500">Small</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mb-2">
                <Mail className="h-4 w-4 text-[#0EA5E9]" />
              </div>
              <p className="text-gray-600">h-4 w-4</p>
              <p className="text-gray-500">Default</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mb-2">
                <Mail className="h-5 w-5 text-[#0EA5E9]" />
              </div>
              <p className="text-gray-600">h-5 w-5</p>
              <p className="text-gray-500">Medium</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-[#0EA5E9]" />
              </div>
              <p className="text-gray-600">h-6 w-6</p>
              <p className="text-gray-500">Large</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mb-2">
                <Mail className="h-8 w-8 text-[#0EA5E9]" />
              </div>
              <p className="text-gray-600">h-8 w-8</p>
              <p className="text-gray-500">Extra Large</p>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-4">Icon Colors</h3>
          <p className="text-gray-600 mb-6">
            Icons can be colored using text color utilities. Mix blue and orange for visual interest.
          </p>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-[#0EA5E9]" />
              </div>
              <p className="text-gray-600">Primary Blue</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-[#FF6B2C]" />
              </div>
              <p className="text-gray-600">Accent Orange</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-gray-900" />
              </div>
              <p className="text-gray-600">Gray 900</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-gray-600" />
              </div>
              <p className="text-gray-600">Gray 600</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-gray-600">Success</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-red-500" />
              </div>
              <p className="text-gray-600">Error</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-gray-900 mb-4">Mixed Icon Examples</h4>
            <p className="text-gray-600 mb-4">Combine blue and orange icons for visual hierarchy and variety. Use blue for primary features and orange for highlights or special items.</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <p className="text-gray-900">Primary Features (Blue)</p>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#0EA5E9]" />
                  </div>
                  <span className="text-gray-900">Messages</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                    <Settings className="h-5 w-5 text-[#0EA5E9]" />
                  </div>
                  <span className="text-gray-900">Settings</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#0EA5E9]" />
                  </div>
                  <span className="text-gray-900">Team</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-900">Highlights & Special (Orange)</p>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center">
                    <Star className="h-5 w-5 text-[#FF6B2C]" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-gray-900">Featured</span>
                    <Badge className="bg-[#FF6B2C] hover:bg-[#FF6B2C]">New</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-[#FF6B2C]" />
                  </div>
                  <span className="text-gray-900">Premium</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-[#FF6B2C]" />
                  </div>
                  <span className="text-gray-900">Quick Start</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex gap-3">
                <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-gray-900 mb-2">Icon Color Guidelines</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Use <strong className="text-[#0EA5E9]">blue icons</strong> for standard navigation, settings, and core features</li>
                    <li>• Use <strong className="text-[#FF6B2C]">orange icons</strong> for special features, new items, and call-outs</li>
                    <li>• Maintain consistency - don't randomly mix colors within the same category</li>
                    <li>• Orange draws attention, so use it sparingly for maximum impact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {iconCategories.map((category, idx) => (
          <Card key={idx} className="p-8">
            <h3 className="text-gray-900 mb-6">{category.title}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {category.icons.map(({ Icon, name }, iconIdx) => (
                <div 
                  key={iconIdx}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#0EA5E9]/10 transition-colors">
                    <Icon className="h-5 w-5 text-gray-700 group-hover:text-[#0EA5E9] transition-colors" />
                  </div>
                  <span className="text-gray-600 text-center break-all">{name}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Usage Examples</h3>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-gray-100">
              <code>{`import { Mail, Plus, Settings } from 'lucide-react';

// In a button
<Button>
  <Mail className="mr-2 h-4 w-4" />
  Send Email
</Button>

// Icon only button
<Button size="icon">
  <Plus className="h-4 w-4" />
</Button>

// With custom color
<Mail className="h-5 w-5 text-[#0EA5E9]" />

// In a card
<div className="flex items-center gap-3">
  <div className="w-10 h-10 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
    <Settings className="h-5 w-5 text-[#0EA5E9]" />
  </div>
  <span>Settings</span>
</div>

// Animated on hover
<Mail className="h-5 w-5 transition-colors hover:text-[#0EA5E9]" />`}</code>
            </pre>
          </div>
        </Card>

        <Card className="p-8 bg-blue-50 border-blue-200">
          <div className="flex gap-4">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-gray-900 mb-2">Icon Library</h3>
              <p className="text-gray-600 mb-3">
                This design system uses Lucide React for icons. Lucide is a community-maintained fork of Feather Icons 
                with over 1,000 icons available.
              </p>
              <p className="text-gray-600">
                Browse the full icon set at{' '}
                <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">
                  lucide.dev
                </a>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
