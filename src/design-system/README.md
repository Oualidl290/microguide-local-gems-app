
# MicroGuide Design System

A clean, modern, minimalist design system inspired by Meta UI for the MicroGuide SaaS platform.

## Overview

MicroGuide is a SaaS platform for creating and monetizing local mini-guides (e.g., "Top Coffee Spots in Soho"). This design system supports two roles:

1. **Admin**: Full control over all guides, users, earnings data, ad approvals
2. **User**: Can sign up, log in, create/edit/delete guides, and track earnings from ads

## Design Principles

- **Clean & Minimal**: Uncluttered interfaces with plenty of whitespace
- **Focused**: Clear visual hierarchy highlighting important actions
- **Responsive**: Mobile-first design approach
- **Consistent**: Predictable patterns across all interfaces
- **Accessible**: Designed for users of all abilities

## File Structure

```
src/
├── design-system/               # Design system files
│   ├── MicroGuideDesignSystem.tsx  # Main design system component
│   ├── ComponentExamples.tsx    # Examples of individual components
│   ├── ComponentShowcase.tsx    # Component showcase page
│   ├── DesignTokens.tsx         # Design tokens visualization
│   ├── RoleBasedUI.tsx          # UI flows for different user roles
│   └── README.md                # Documentation
├── components/
│   ├── ui/                      # UI components
│   │   ├── button.tsx           
│   │   ├── card.tsx
│   │   └── ...
│   └── layouts/                 # Layout components
│       ├── MicroGuideSidebar.tsx
│       └── PageLayout.tsx
└── styles/
    └── index.css                # Global styles and variables
```

## Design Tokens

### Colors

- **Primary**: Blue (#0066D6) - Main brand color, used for primary actions
- **Secondary**: Light blue tints - Used for secondary actions and highlights
- **Accent**: Vibrant blue (#3385DF) - Used sparingly for emphasis
- **Neutral**: Grayscale - Used for text, backgrounds, and borders

### Typography

- **Font Family**: Inter (sans-serif)
- **Sizes**: xs (12px), sm (14px), base (16px), lg (18px), xl (20px), 2xl (24px), 3xl (30px), 4xl (36px)

### Spacing

- **Scale**: 4px increments
- **Common values**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Border Radius

- **sm**: 4px
- **md**: 6px
- **lg**: 8px
- **xl**: 12px
- **2xl**: 16px
- **full**: 9999px (fully rounded)

### Shadows

- **sm**: Subtle shadow for cards and buttons
- **md**: Medium shadow for dropdowns
- **lg**: Strong shadow for modals
- **xl**: Extra strong shadow for overlays

## Components

### Navigation
- Navbar
- MicroGuideSidebar
- Breadcrumbs

### Inputs & Controls
- Button (Primary, Secondary, Outline, Ghost)
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch

### Display
- Card
- Table
- Avatar
- Badge
- Alert
- Toast

### Layout
- PageLayout
- Container
- Divider

### Feedback
- Skeleton
- Spinner
- Progress bar

## Theme Support

The design system supports both light and dark modes, automatically respecting user preferences while allowing manual toggle.

## Role-Based UI Flows

### User Flows
- Landing Page
- Auth Pages (Login/Signup)
- User Dashboard
- Guide Creation
- Public Guide Page
- Earnings Page

### Admin Flows
- Admin Dashboard
- Guide Management
- User Management
- Ad Management
- Analytics Overview

## Usage Guidelines

- Use primary buttons for main actions only
- Keep UI density appropriate for the target audience
- Follow accessibility best practices
- Maintain consistent spacing throughout interfaces
