# Color System Guide

## Overview

The Handshake Design System uses a **primary blue** color scheme with **orange accents** for highlights and special features. This creates a professional, trustworthy appearance while allowing strategic use of orange to draw attention to important elements.

## Color Hierarchy

### Primary Color: Blue
**Hex**: `#0EA5E9` (with `#0284C7` for hover states)

**Use for:**
- Main CTA buttons (Get Started, Sign Up, Submit, Save)
- Primary navigation elements
- Core feature icons
- Active states
- Links and interactive elements
- Primary badges and status indicators

**Example:**
```tsx
<Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
  Get Started
</Button>
```

### Accent Color: Orange
**Hex**: `#FF6B2C` (with `#FF5A1A` for hover states)

**Use for:**
- Special highlights and call-outs
- Premium features or upgrade prompts
- New feature badges
- Featured items or starred content
- Important notifications
- Special promotional buttons

**Example:**
```tsx
<Button className="bg-[#FF6B2C] hover:bg-[#FF5A1A]">
  <Star className="mr-2 h-4 w-4" />
  Upgrade to Pro
</Button>
```

## When to Use Each Color

### Use Blue (Primary) When:
- ✅ Creating standard action buttons
- ✅ Designing primary navigation
- ✅ Marking active or selected states
- ✅ Showing regular feature icons
- ✅ Building forms and data tables
- ✅ Creating standard badges

### Use Orange (Accent) When:
- ⭐ Highlighting premium or special features
- ⭐ Drawing attention to new items
- ⭐ Promoting upgrades or special offers
- ⭐ Marking featured or important content
- ⭐ Creating urgency or excitement
- ⭐ Emphasizing limited-time actions

## Icon Color Mixing

### Best Practices for Icons

**Primary Features (Blue Icons):**
```tsx
<div className="w-10 h-10 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
  <Mail className="h-5 w-5 text-[#0EA5E9]" />
</div>
```

**Special/Highlighted Features (Orange Icons):**
```tsx
<div className="w-10 h-10 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center">
  <Star className="h-5 w-5 text-[#FF6B2C]" />
</div>
```

### Icon Usage Guidelines

1. **Consistency**: Use blue for all standard feature icons in a category
2. **Strategic Orange**: Only use orange for 20-30% of icons to highlight special items
3. **Visual Balance**: Alternate blue and orange in feature grids for visual interest
4. **Meaning**: Orange should always indicate something special or important

## Real-World Examples

### Navigation Menu
```tsx
// Standard items - Blue
<LayoutDashboard className="h-5 w-5 text-[#0EA5E9]" /> Dashboard
<Mail className="h-5 w-5 text-[#0EA5E9]" /> Campaigns
<Users className="h-5 w-5 text-[#0EA5E9]" /> Team

// New or special feature - Orange
<Star className="h-5 w-5 text-[#FF6B2C]" /> Featured ✨
```

### Feature Grid
Alternate colors for visual interest:
```tsx
const features = [
  { icon: Bot, color: 'bg-blue-500' },        // Blue
  { icon: Target, color: 'bg-orange-500' },   // Orange
  { icon: Zap, color: 'bg-blue-500' },        // Blue
  { icon: BarChart3, color: 'bg-orange-500' }, // Orange
  { icon: MessageSquare, color: 'bg-blue-500' }, // Blue
  { icon: Users, color: 'bg-orange-500' }     // Orange
];
```

### Buttons in Context
```tsx
// Main CTA - Blue
<Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
  Start Free Trial
</Button>

// Secondary action - Outline
<Button variant="outline">
  Learn More
</Button>

// Special promotional action - Orange
<Button className="bg-[#FF6B2C] hover:bg-[#FF5A1A]">
  <Star className="mr-2 h-4 w-4" />
  Get 50% Off - Limited Time
</Button>
```

### Badges
```tsx
// Standard status - Blue
<Badge className="bg-[#0EA5E9]">Active</Badge>

// Special/New feature - Orange
<Badge className="bg-[#FF6B2C]">New</Badge>
<Badge className="bg-[#FF6B2C]">Premium</Badge>
<Badge className="bg-[#FF6B2C]">Featured</Badge>
```

## Color Don'ts

❌ **Don't** use orange for every button - it loses impact
❌ **Don't** randomly mix blue and orange in the same component group
❌ **Don't** use orange for destructive actions (use red)
❌ **Don't** make orange the dominant color
❌ **Don't** use both colors for the same type of element without a clear distinction

## Color Ratios

**Recommended Distribution:**
- 🔵 Blue (Primary): 70-80% of colorful elements
- 🟠 Orange (Accent): 20-30% of colorful elements
- ⚪ Neutral (Gray/White): Background and supporting elements

This ratio ensures:
- Professional, cohesive appearance
- Strategic attention-drawing
- Visual hierarchy
- Brand consistency

## Accessibility

Both colors meet WCAG AA standards for contrast:

**Blue on White:**
- Contrast ratio: 3.9:1 (AA for large text)
- Use white text on blue backgrounds

**Orange on White:**
- Contrast ratio: 3.5:1 (AA for large text)
- Use white text on orange backgrounds

**Text Colors:**
```tsx
// Always use white text on colored backgrounds
<div className="bg-[#0EA5E9] text-white">Blue Background</div>
<div className="bg-[#FF6B2C] text-white">Orange Background</div>
```

## Quick Reference

| Element | Color | Usage |
|---------|-------|-------|
| Primary CTA | Blue | Main actions |
| Special CTA | Orange | Highlights, promotions |
| Navigation | Blue | Standard nav items |
| Active State | Blue | Selected items |
| New Badge | Orange | New features |
| Premium Badge | Orange | Paid features |
| Feature Icons | Mixed | 70% blue, 30% orange |
| Links | Blue | Standard links |
| Hover States | Darker shade | -20% lightness |

## Migration from Orange-Primary

If updating from an orange-primary design:

1. ✅ Change all primary CTAs from orange to blue
2. ✅ Keep special/highlight CTAs in orange
3. ✅ Update navigation from orange to blue
4. ✅ Convert standard icons to blue
5. ✅ Reserve orange for badges indicating "new", "premium", "featured"
6. ✅ Update documentation and examples

## Summary

**Blue is reliable and trustworthy** - use it for your main interface.
**Orange is energetic and eye-catching** - use it strategically to guide attention.

Together, they create a professional yet engaging user experience that builds trust while highlighting what matters most.
