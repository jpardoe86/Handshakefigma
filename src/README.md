# Handshake UI Design System

A comprehensive design system and UI component library for building modern SaaS applications. Built with React, Tailwind CSS, and shadcn/ui.

## Overview

This design system provides a complete set of components, patterns, and guidelines for creating consistent, accessible, and beautiful user interfaces. It features a primary blue (#0EA5E9) color scheme with vibrant orange (#FF6B2C) accents for highlights and special features.

## Features

- 🎨 **Complete Color System** - Primary, neutral, and semantic colors
- 📝 **Typography Scale** - Consistent heading and body text styles
- 🔘 **Comprehensive Components** - Buttons, inputs, forms, tables, modals, and more
- 📊 **Data Display** - Tables, cards, badges, avatars, and progress bars
- 💬 **Feedback Components** - Alerts, toasts, loading states, and empty states
- 🧭 **Navigation** - Tabs, breadcrumbs, pagination, and sidebars
- 🎯 **Advanced Patterns** - Popovers, tooltips, dropdowns, context menus
- 📱 **Responsive Design** - Mobile-first approach with breakpoint utilities
- ♿ **Accessibility** - WCAG compliant with full keyboard navigation
- 🎭 **Layout Patterns** - Pre-built dashboard, list view, and settings layouts

## Quick Start

### Installation

All components are pre-installed and ready to use. Simply import what you need:

```tsx
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card } from './components/ui/card';
```

### Basic Usage

```tsx
import { Button } from './components/ui/button';

function MyComponent() {
  return (
    <Button className="bg-[#FF6B2C] hover:bg-[#FF5A1A]">
      Click Me
    </Button>
  );
}
```

## Components

### Buttons
- Primary, secondary, outline, and ghost variants
- Multiple sizes (sm, default, lg)
- Icon support
- Loading and disabled states

### Forms
- Text inputs, textareas, and select dropdowns
- Checkboxes, radio buttons, and switches
- Date pickers and sliders
- Form validation patterns

### Data Display
- Tables with sorting and filtering
- Cards for content grouping
- Badges for status indicators
- Avatars for user representation
- Progress bars for loading states

### Feedback
- Alert components for notifications
- Toast notifications (via Sonner)
- Skeleton loaders
- Empty states

### Navigation
- Tabs for content organization
- Breadcrumbs for navigation hierarchy
- Pagination for long lists
- Sidebar navigation patterns

### Modals & Overlays
- Dialog modals for forms and content
- Alert dialogs for confirmations
- Sheets/drawers for side panels
- Popovers for contextual information

### Advanced
- Tooltips for helpful hints
- Dropdown menus for actions
- Context menus (right-click)
- Hover cards for rich previews
- Command palette for quick actions

## Color System

### Primary Color
- **Primary Blue**: `#0EA5E9` - Main CTAs and primary actions
- **Dark Blue**: `#0284C7` - Hover states for blue

### Accent Color
- **Accent Orange**: `#FF6B2C` - Highlights, special features, and call-outs
- **Dark Orange**: `#FF5A1A` - Hover states for orange

### Semantic Colors
- **Success**: `#10B981` - Success states and confirmations
- **Warning**: `#F59E0B` - Warning messages
- **Error**: `#EF4444` - Error states and destructive actions
- **Info**: `#0EA5E9` - Informational messages

### Neutral Colors
- **Gray 900**: `#111827` - Primary text
- **Gray 600**: `#4B5563` - Secondary text
- **Gray 400**: `#9CA3AF` - Placeholder text
- **Gray 200**: `#E5E7EB` - Borders and dividers
- **Gray 100**: `#F3F4F6` - Component backgrounds
- **Gray 50**: `#F9FAFB` - Page backgrounds

## Typography

### Headings
- **H1**: Hero titles and main page headings
- **H2**: Major section headings
- **H3**: Subsection and card titles
- **H4**: Component headings

### Body Text
- **Large**: Important content and introductions (18px)
- **Regular**: Most content throughout application (16px)
- **Small**: Captions and secondary information (14px)

## Spacing

Use consistent spacing values:
- `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`

```tsx
<div className="p-4">    {/* 16px padding */}
<div className="space-y-6"> {/* 24px gap between children */}
<div className="mb-8">   {/* 32px margin bottom */}
```

## Responsive Design

### Breakpoints
- `sm:` 640px - Small devices (mobile landscape)
- `md:` 768px - Medium devices (tablets)
- `lg:` 1024px - Large devices (laptops)
- `xl:` 1280px - Extra large devices (desktops)
- `2xl:` 1536px - 2X large devices (large desktops)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid layout */}
</div>
```

## Best Practices

### Colors
- Use Primary Blue (#0EA5E9) for main CTAs and primary actions
- Use Accent Orange (#FF6B2C) for highlights and special features
- Mix blue and orange icons for visual variety and hierarchy
- Maintain consistent color contrast ratios (WCAG AA)
- Use semantic colors appropriately

### Typography
- Use H1 for page titles only
- Maintain consistent heading hierarchy
- Keep line lengths readable (60-80 characters)

### Spacing
- Use consistent padding: 16px between related elements
- Use 24-32px spacing between major sections
- Maintain consistent margins across similar components

### Accessibility
- Always include labels for form inputs
- Provide clear error messages
- Ensure keyboard navigation works
- Test with screen readers
- Maintain adequate color contrast

### Forms
- Group related fields together
- Provide clear validation feedback
- Use appropriate input types
- Include helpful placeholder text
- Show clear success/error states

## Layout Patterns

### Dashboard Layout
- Top navigation bar with search and user menu
- Sidebar navigation
- Stats cards for key metrics
- Content area with cards and tables

### List View Layout
- Page header with title and actions
- Filter bar for data manipulation
- Table or grid view of items
- Pagination for long lists

### Settings Layout
- Vertical navigation sidebar
- Content area with form sections
- Clear save/cancel actions
- Breadcrumbs for deep navigation

## File Structure

```
/components
  /ui                    # shadcn/ui components
  /design-system        # Design system documentation
  /figma               # Figma integration components
/styles
  globals.css          # Global styles and typography
```

## Contributing

When adding new components:
1. Follow existing patterns and conventions
2. Ensure accessibility compliance
3. Add responsive behavior
4. Include proper documentation
5. Test across different breakpoints

## Icons

This design system uses [Lucide React](https://lucide.dev/) for icons:

```tsx
import { Mail, User, Settings } from 'lucide-react';

<Mail className="h-4 w-4" />
```

## Toast Notifications

Toast notifications use Sonner:

```tsx
import { toast } from 'sonner@2.0.3';

toast.success('Success message');
toast.error('Error message');
toast.info('Info message');
```

Don't forget to add `<Toaster />` to your root component.

## Support

For questions or issues, refer to:
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## Version

Current Version: 1.0.0

## License

© 2025 Handshake Design System
