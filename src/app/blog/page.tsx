import BlogContent from './BlogContent';
import { blogPosts } from '@/lib/blogData';

// Add structured data for BlogPosting
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lasarz.com/blog"
  },
  "name": "Lasarz Blog",
  "description": "Aktuelle Informationen, Marktberichte und wertvolle Ratgeber rund um die Immobilienbewertung in Osnabrück. Expertenwissen von Marc-André Lasarz.",
  "publisher": {
    "@type": "Organization",
    "name": "Lasarz Immobiliengutachter",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lasarz.com/images/logo.png"
    }
  }
};

export const metadata = {
  title: 'Blog & Ratgeber | Immobilienbewertung Osnabrück',
  description: 'Aktuelle Informationen, Marktberichte und wertvolle Ratgeber rund um die Immobilienbewertung in Osnabrück. Expertenwissen von Marc-André Lasarz.',
  openGraph: {
    title: 'Blog & Ratgeber | Immobilienbewertung Osnabrück',
    description: 'Aktuelle Informationen, Marktberichte und wertvolle Ratgeber rund um die Immobilienbewertung in Osnabrück. Expertenwissen von Marc-André Lasarz.',
    url: 'https://lasarz.com/blog',
    siteName: 'Lasarz Immobiliengutachter',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://lasarz.com/images/blog-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Immobilienbewertung Blog Osnabrück'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Ratgeber | Immobilienbewertung Osnabrück',
    description: 'Aktuelle Informationen, Marktberichte und wertvolle Ratgeber rund um die Immobilienbewertung in Osnabrück. Expertenwissen von Marc-André Lasarz.',
    images: ['https://lasarz.com/images/blog-hero.jpg']
  },
  alternates: {
    canonical: 'https://lasarz.com/blog'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogContent blogPosts={blogPosts} />
    </>
  );
}