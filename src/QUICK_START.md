# Quick Start Guide

Get up and running with the Handshake Design System in minutes.

## 🚀 Getting Started

### 1. Import Components

All components are ready to use. Simply import what you need:

```tsx
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card } from './components/ui/card';
```

### 2. Basic Button Example

```tsx
import { Button } from './components/ui/button';
import { Plus } from 'lucide-react';

function MyComponent() {
  return (
    <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
      <Plus className="mr-2 h-4 w-4" />
      Create Campaign
    </Button>
  );
}
```

### 3. Form Example

```tsx
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Button } from './components/ui/button';

function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="you@example.com" 
        />
      </div>
      
      <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]">
        Submit
      </Button>
    </form>
  );
}
```

### 4. Card with Data

```tsx
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { TrendingUp } from 'lucide-react';

function StatCard() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600">Total Messages</h3>
        <TrendingUp className="h-5 w-5 text-green-500" />
      </div>
      <div className="text-gray-900 mb-2">2.5M</div>
      <p className="text-green-600">+12.5% from last month</p>
    </Card>
  );
}
```

### 5. Toast Notifications

```tsx
import { Button } from './components/ui/button';
import { toast } from 'sonner@2.0.3';

function MyComponent() {
  return (
    <Button 
      onClick={() => toast.success('Campaign created!')}
      className="bg-[#0EA5E9] hover:bg-[#0284C7]"
    >
      Create
    </Button>
  );
}

// Don't forget to add <Toaster /> to your root component!
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <>
      <YourComponents />
      <Toaster />
    </>
  );
}
```

### 6. Modal Dialog

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { Button } from './components/ui/button';

function MyModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Campaign</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          {/* Your form content here */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

## 🎨 Color Palette

Use these colors consistently throughout your app:

```tsx
// Primary Blue - Main CTAs and primary actions
className="bg-[#0EA5E9] hover:bg-[#0284C7]"

// Accent Orange - Highlights and special features
className="bg-[#FF6B2C] hover:bg-[#FF5A1A]"

// Text colors
className="text-gray-900"  // Primary text
className="text-gray-600"  // Secondary text
className="text-gray-500"  // Muted text
```

## 📐 Common Patterns

### Page Layout

```tsx
function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        {/* Header content */}
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Page content */}
        </div>
      </main>
    </div>
  );
}
```

### Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

### Responsive Spacing

```tsx
// Padding
className="p-4 md:p-6 lg:p-8"

// Margin
className="mb-6 lg:mb-8"

// Gap
className="space-y-4 md:space-y-6"
```

## 🔍 Finding Components

Browse the full design system at the root of the app to see:

- **Colors & Tokens** - Complete color palette and design tokens
- **Typography** - Heading and text styles
- **Icons** - Full Lucide icon library
- **Buttons** - All button variants and sizes
- **Forms** - Inputs, selects, checkboxes, etc.
- **Data Display** - Tables, cards, badges, avatars
- **Feedback** - Alerts, toasts, loading states
- **Navigation** - Tabs, breadcrumbs, pagination
- **Modals** - Dialogs, sheets, popovers
- **Advanced** - Tooltips, dropdowns, context menus
- **Layouts** - Pre-built page layouts

## 📦 Common Imports

```tsx
// Buttons & Actions
import { Button } from './components/ui/button';

// Forms
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Checkbox } from './components/ui/checkbox';
import { Switch } from './components/ui/switch';

// Data Display
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Avatar, AvatarFallback } from './components/ui/avatar';

// Feedback
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

// Modals
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet';

// Navigation
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

// Icons
import { Mail, User, Settings, Plus, Edit, Trash2 } from 'lucide-react';
```

## ✨ Tips

1. **Consistent Colors**: Always use `#0EA5E9` for primary CTAs and `#FF6B2C` for accent highlights
2. **Icon Sizes**: Use `h-4 w-4` for button icons, `h-5 w-5` for larger UI elements
3. **Spacing**: Use `space-y-4` for form fields, `space-y-6` for sections
4. **Responsive**: Always test on mobile - most components are responsive by default
5. **Accessibility**: Always include labels for form inputs

## 🐛 Troubleshooting

**Icons not showing?**
```tsx
// Make sure you're importing from lucide-react
import { Mail } from 'lucide-react';
```

**Toast not appearing?**
```tsx
// Make sure <Toaster /> is in your root component
import { Toaster } from './components/ui/sonner';
```

**Styles not applying?**
```tsx
// Tailwind classes should be in className, not style
<div className="bg-white p-4"> ✅
<div style={{ background: 'white' }}> ❌
```

## 📚 Next Steps

- Explore the full design system in the app
- Check out the code examples for each component
- Review the layout patterns for common page structures
- Read the usage guidelines for best practices

Happy building! 🚀
