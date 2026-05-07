# Quick Reference Guide - Lasarz Immobilienbewertung

## Development Setup

### Running Locally
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Project Structure Overview
```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/               # Blog section
│   ├── leistungen/         # Services pages
│   ├── kontakt/            # Contact page
│   ├── ueber-uns/          # About page
│   └── ...                 # Other pages
├── components/             # Reusable UI components
│   ├── layout/             # Layout components (Header, Footer)
│   └── ui/                 # UI elements
├── lib/                    # Libraries and data utilities
│   └── blogData.ts         # Blog posts data
└── public/                 # Static assets
```

## Adding New Pages

### 1. Static Pages
To create a new static page:
1. Create a new file in `src/app/` directory
2. Name it `page.tsx` for the main page content
3. Export default component with JSX
4. Add proper metadata in the file

### 2. Service Pages
To create a new service page:
1. Create directory in `src/app/leistungen/` with service name
2. Add `page.tsx` file with content
3. Ensure proper metadata and structure

### 3. City Landing Pages
To create a new city landing page:
1. Create directory in `src/app/immobiliengutachter-[city]/`
2. Add `page.tsx` with city-specific content
3. Add proper metadata and local information

## Adding New Blog Posts

### Step-by-Step Process

1. **Update blogData.ts**:
   ```typescript
   // Add new blog post object to blogPosts array
   {
     id: '9',                          // Unique identifier
     slug: 'new-blog-post-slug',       // URL-friendly identifier
     title: 'New Blog Post Title',     // Post title
     date: '01. April 2024',           // Publication date
     readTime: '10 min Lesezeit',      // Reading time estimate
     category: 'Ratgeber',             // Category for filtering
     image: 'https://example.com/image.jpg',  // Featured image URL
     altText: 'Image alt text',        // Alt text for accessibility
     excerpt: 'Short description...',  // Excerpt for listing
     content: '<p>Full HTML content...</p>'   // Complete HTML content
   }
   ```

2. **Create Blog Post File** (if needed for dynamic routing):
   - Create file in `src/app/blog/posts/`
   - Name it using slug convention: `new-blog-post-slug.page.tsx`

3. **Verify the URL works**:
   - Access: `https://yourdomain.com/blog/new-blog-post-slug`

### Blog Post Requirements

- **Slug**: Must be URL-friendly (lowercase, hyphens only)
- **Title**: Should be descriptive and include target keywords
- **Date**: Format: "DD. Month YYYY" (German format)
- **Read Time**: Format: "X min Lesezeit"
- **Category**: One of existing categories or create new ones
- **Image**: High-quality image with proper aspect ratio
- **Alt Text**: Descriptive text for accessibility
- **Excerpt**: Brief summary (under 160 characters)
- **Content**: Valid HTML with proper heading structure

## Adding New City Landing Pages

### Process:
1. Create directory: `src/app/immobiliengutachter-[city-name]/`
2. Create `page.tsx` with content
3. Add proper metadata
4. Include city-specific information and services
5. Ensure consistent styling with existing pages

### Example:
```bash
mkdir src/app/immobiliengutachter-bremen
touch src/app/immobiliengutachter-bremen/page.tsx
```

## Deployment

### Deploy to Vercel:
1. Push code to GitHub repository
2. Connect repository to Vercel dashboard
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
4. Deploy automatically or manually

### Environment Variables:
- Add to Vercel project settings:
  - `NEXT_PUBLIC_SITE_URL`
  - Any other required environment variables

## Common Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Git Workflow
```bash
git add .
git commit -m "Add new blog post"
git push origin main
```

## Troubleshooting

### Common Issues:
1. **404 Errors on Blog Posts**: Ensure slug matches both blogData.ts and file names
2. **Build Failures**: Check for TypeScript errors in components
3. **Missing Images**: Verify image URLs are accessible
4. **SEO Issues**: Check meta tags and structured data

### Debugging Tips:
1. Check browser console for JavaScript errors
2. Validate HTML structure in browser developer tools
3. Test responsive design on different screen sizes
4. Use Next.js debugging tools and logs

## Best Practices

### Code Quality:
- Maintain consistent component structure
- Follow TypeScript typing conventions
- Use meaningful variable and function names
- Keep components small and focused

### SEO:
- Always include proper meta titles and descriptions
- Add alt texts to all images
- Use semantic HTML structure
- Implement structured data where appropriate

### Performance:
- Lazy load non-critical images
- Minimize unnecessary dependencies
- Use efficient component rendering
- Optimize for mobile responsiveness

## Version Control

### Branching Strategy:
- `main` branch: Production-ready code
- Feature branches: For new developments
- Pull requests: For code review and merging

### Commit Messages:
Follow conventional commit format:
- `feat: add new blog post`
- `fix: correct typo in footer`
- `docs: update deployment guide`
- `style: adjust spacing in header`

## Testing

### Manual Testing:
1. Test all navigation links
2. Verify responsive design on different devices
3. Check all blog post URLs
4. Validate contact form functionality
5. Test service page links

### Automated Testing:
- ESLint for code quality
- TypeScript compilation for type checking
- Build process verification