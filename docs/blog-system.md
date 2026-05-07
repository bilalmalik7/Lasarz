# Blog System Documentation - Lasarz Immobilienbewertung

## Overview

The blog system is designed to dynamically display articles about real estate valuation, market trends, and related topics. It uses Next.js dynamic routing and stores content in a centralized data structure.

## How Blog Posts Are Created

### File Format and Location

Blog posts are stored in two locations:
1. **Data Source**: `src/lib/blogData.ts` - Contains structured data for all blog posts
2. **Individual Files**: `src/app/blog/posts/` - Contains individual blog post files (though currently only 5 exist)

### Required Frontmatter Fields

Each blog post in `blogData.ts` requires the following fields:

```typescript
interface BlogPost {
  id: string;                    // Unique identifier
  slug: string;                  // URL-friendly identifier (used for routing)
  title: string;                 // Post title
  date: string;                  // Publication date (formatted string)
  readTime: string;              // Estimated reading time
  category: string;              // Post category for filtering
  image: string;                 // Featured image URL
  altText: string;               // Alt text for featured image
  excerpt: string;               // Short description for blog listing
  content: string;               // Full HTML content of the post
}
```

## Blog Post Creation Process

### Step-by-Step Guide

1. **Add to Data Structure**: Modify `src/lib/blogData.ts` to add new blog post object
2. **Create Blog Post File**: Place individual post file in `src/app/blog/posts/` directory
3. **Ensure Consistent Naming**: Use slug-based naming convention (e.g., `immobilienwert-osnabrueck.page.tsx`)
4. **Update Content**: Include proper HTML content with SEO elements

### Example Blog Post Structure

```typescript
{
  id: '9',
  slug: 'example-blog-post',
  title: 'Example Blog Post Title',
  date: '01. April 2024',
  readTime: '8 min Lesezeit',
  category: 'Grundlagen',
  image: 'https://example.com/image.jpg',
  altText: 'Example image alt text',
  excerpt: 'Short description of the blog post content',
  content: `<p>Full HTML content goes here...</p>`
}
```

## Working Example Blog Post

Here's a complete working example of a blog post that follows the established patterns:

```typescript
{
  id: '9',
  slug: 'immobiliengutachter-osnabrueck-kosten',
  title: 'Kosten für einen Immobiliengutachter in Osnabrück – Was Sie bezahlen müssen',
  date: '01. April 2024',
  readTime: '10 min Lesezeit',
  category: 'Ratgeber',
  image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200',
  altText: 'Kosten für Immobilienbewertung in Osnabrück',
  excerpt: 'Welche Kosten sind bei einer Immobilienbewertung in Osnabrück zu erwarten? Wir erklären Ihnen alles.',
  content: `
    <p>Bei der Immobilienbewertung ist es wichtig, sich vorab über die Kosten zu informieren. In Osnabrück und Umgebung variieren die Preise je nach Art des Gutachtens und der Immobilie.</p>
    
    <h3>Preisstruktur für verschiedene Gutachten</h3>
    <p>Die Kosten für ein Immobilien-Gutachten in Osnabrück orientieren sich an verschiedenen Faktoren:</p>
    
    <ul>
      <li><strong>Kurzgutachten:</strong> Ab 399 €</li>
      <li><strong>Verkehrswertgutachten:</strong> Ab 1.200 €</li>
      <li><strong>Vollgutachten:</strong> Ab 2.500 €</li>
    </ul>
    
    <div class="glass-card" style="margin: 2rem 0; padding: 2rem; background: rgba(26, 117, 141, 0.07); border-radius: 12px;">
      <h4 style="color: var(--accent-secondary); margin-bottom: 1rem;">💡 Profi-Tipp</h4>
      <p>Ein Kurzgutachten kostet nur einen Bruchteil eines Vollgutachtens, gibt Ihnen aber sofortige Sicherheit über den realistischen Marktwert.</p>
    </div>
    
    <h3>Faktoren, die die Kosten beeinflussen</h3>
    <p>Mehrere Faktoren beeinflussen die Endkosten:</p>
    
    <ul>
      <li><strong>Immobilientyp:</strong> Einfamilienhaus, Mehrfamilienhaus, Gewerbeimmobilie</li>
      <li><strong>Größe und Lage:</strong> Größere Immobilien oder solche in Toplagen kosten mehr</li>
      <li><strong>Art des Gutachtens:</strong> Vollgutachten sind umfangreicher als Kurzgutachten</li>
      <li><strong>Technische Komplexität:</strong> Spezielle Anforderungen wie Erbschaft oder Scheidung</li>
    </ul>
    
    <p>Kontaktieren Sie uns für ein unverbindliches Erstgespräch, um eine individuelle Kostenübersicht zu erhalten.</p>
  `
}
```

## Why Blog Posts Were Returning 404

The blog posts were returning 404 errors because:

1. **Missing Files**: The required blog post files don't exist in the `src/app/blog/posts/` directory
2. **URL Mismatch**: The dynamic routing expects specific files named according to the slug
3. **Data Structure Mismatch**: The blogData.ts includes entries that don't correspond to actual files

## How to Fix Blog 404 Issues

To fix the 404 errors:

1. **Create the missing blog post files** in `src/app/blog/posts/` with proper naming conventions
2. **Ensure the slug matches** the file name exactly
3. **Update blogData.ts** to include the new blog posts
4. **Verify the structure** matches the existing patterns

## Blog URL Structure

All blog URLs follow this pattern:
- **Listing**: `/blog` - Displays all blog posts
- **Detail**: `/blog/[slug]` - Individual blog post based on slug
- **Example**: `/blog/immobiliengutachter-osnabrueck-kosten`

## Recommended File Naming Convention

Blog post files should be named following this pattern:
- `slug-name.page.tsx` (where slug-name corresponds to the `slug` field in blogData.ts)

For example:
- `immobiliengutachter-osnabrueck-kosten.page.tsx`
- `immobilienwert-osnabrueck.page.tsx`
- `hausbewertung-scheidung-osnabrueck.page.tsx`