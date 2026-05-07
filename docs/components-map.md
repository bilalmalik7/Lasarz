# Components Map - Lasarz Immobilienbewertung

## Overview

This document provides a comprehensive map of all components used in the Lasarz Immobilienbewertung website, detailing their purpose, functionality, and usage.

## Layout Components

### Header Component (`src/components/layout/Header.tsx`)
**Purpose**: Main navigation header with mobile menu
**Key Features**:
- Responsive navigation with dropdown menus
- Mobile hamburger menu toggle
- Scroll-aware styling
- Logo display
- Contact button

**Usage**: Included in the main layout (`src/app/layout.tsx`)

### Footer Component (`src/components/layout/Footer.tsx`)
**Purpose**: Site footer with contact information and links
**Key Features**:
- Contact information display
- Social media links
- Site navigation links
- Copyright information
- Responsive design

**Usage**: Included in the main layout (`src/app/layout.tsx`)

## UI Components

### BlogContent Component (`src/app/blog/BlogContent.tsx`)
**Purpose**: Displays blog listing page with filtering capabilities
**Key Features**:
- Category filtering buttons
- Blog post cards with images and excerpts
- Responsive grid layout
- Lazy loading for images
- Navigation links

**Usage**: Used on blog listing page (`src/app/blog/page.tsx`)

### BlogDetailPage Component (`src/app/blog/[id]/page.tsx`)
**Purpose**: Displays individual blog post with rich content
**Key Features**:
- Dynamic content rendering from blogData
- Framer Motion animations
- Responsive design
- Back navigation link
- Contact call-to-action

**Usage**: Used for individual blog post pages (`src/app/blog/[id]/page.tsx`)

### ContactContent Component (`src/app/kontakt/KontaktContent.tsx`)
**Purpose**: Main content for contact page
**Key Features**:
- Contact form placeholder
- Location information
- Business hours display
- Contact details with icons
- Call-to-action buttons

**Usage**: Used on contact page (`src/app/kontakt/page.tsx`)

## Service Components

### Service Pages
Multiple service pages exist under `/src/app/leistungen/` directory:
- `verkehrswertgutachten/page.tsx`
- `beleihungswertgutachten/page.tsx`
- `kurzgutachten/page.tsx`
- And others...

**Purpose**: Individual service detail pages
**Key Features**:
- Service-specific content
- Pricing information
- Process descriptions
- Contact call-to-action

## Utility Components

### Glass Card Component
**Purpose**: Decorative card with glass effect
**Usage**: Appears throughout the site for information highlights
**Style**: Uses CSS variables for consistent theming

## Component Structure and Usage Patterns

### File Organization
- **Layout components**: `src/components/layout/`
- **UI components**: `src/components/ui/` or inline in pages
- **Reusable components**: Shared across multiple pages
- **Page-specific components**: Located near their respective pages

### Styling Approach
- Uses Tailwind CSS utility classes
- Custom CSS variables for consistent theming
- Responsive design with mobile-first approach
- Component-based styling with appropriate spacing

## Component Interaction Flow

1. **Header** → Navigation → Links to services, blog, contact
2. **BlogContent** → Click on blog post → Navigate to BlogDetailPage
3. **BlogDetailPage** → Back link → BlogContent
4. **Footer** → Social links → External sites
5. **Service pages** → Contact CTA → Contact page

## Modification Guidelines

### For Header Component:
1. Add new navigation items by adding new `<Link>` elements
2. Update dropdown menus by modifying the nested `<div>` structures
3. Change logo by updating the `<img>` src attribute

### For Footer Component:
1. Add new social links by extending the social media list
2. Update contact information by modifying the contact details
3. Add new footer links by adding new `<Link>` elements

### For Blog Components:
1. Add new categories by updating the `categories` array in BlogContent
2. Modify content structure by editing the HTML content in blogData.ts
3. Update styling by modifying CSS in the component files

### For Service Pages:
1. Add new service pages by creating new files in `/src/app/leistungen/`
2. Modify existing service content by editing the corresponding page.tsx files
3. Update pricing or service information in the component content

## Component Dependencies

### Header Component Dependencies:
- `Link` from next/link
- State management with React hooks
- CSS for responsive design

### Footer Component Dependencies:
- `Link` from next/link
- CSS for responsive design
- Social media icon placeholders

### Blog Components Dependencies:
- `Link` from next/link
- `blogPosts` data from `src/lib/blogData.ts`
- `motion` from framer-motion for animations
- CSS variables for theming

### Contact Component Dependencies:
- `Link` from next/link
- Form handling (if implemented)
- Contact information data
- CSS for responsive layout

## Performance Considerations

### Optimization Strategies:
1. **Lazy Loading**: Images are already using `loading="lazy"` attribute
2. **Code Splitting**: Next.js automatic code splitting in place
3. **Component Reuse**: Minimize duplication through reusable components
4. **CSS Optimization**: Minimal Tailwind usage for efficient bundles

### Potential Improvements:
1. Implement React.memo for frequently rendered components
2. Optimize SVG icons for faster loading
3. Consider dynamic imports for heavy components
4. Implement proper loading states for async operations