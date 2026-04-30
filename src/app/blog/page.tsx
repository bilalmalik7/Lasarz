import BlogContent from './BlogContent';

// Define types for blog posts
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
  altText: string;
  category: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Immobiliengutachter Osnabrück - Was kostet eine professionelle Hausbewertung?',
    excerpt: 'Erfahren Sie, wie viel eine professionelle Immobilienbewertung in Osnabrück kostet. Kostenübersicht für Verkehrswertgutachten, Kurzgutachten und weitere Dienstleistungen.',
    date: '29. April 2026',
    readTime: '5 min Lesezeit',
    slug: 'immobiliengutachter-osnabrueck-kosten',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    altText: 'Hausbewertung in Osnabrück - Immobilienbewertung durch Fachmann',
    category: 'Immobilienbewertung'
  },
  {
    id: '2',
    title: 'Immobilienwert ermitteln in Osnabrück und Umgebung - So funktioniert es',
    excerpt: 'Erfahren Sie, wie ein Immobilienwert in Osnabrück und Umgebung ermittelt wird. Verfahren und Schritte für eine professionelle Bewertung.',
    date: '28. April 2026',
    readTime: '6 min Lesezeit',
    slug: 'immobilienwert-ermitteln-osnabrueck',
    image: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=800',
    altText: 'Immobilienwert ermitteln in Osnabrück - Professionelle Bewertung',
    category: 'Immobilienbewertung'
  },
  {
    id: '3',
    title: 'Hausbewertung bei Scheidung in Osnabrück - Was Sie wissen müssen',
    excerpt: 'Erfahren Sie alles über Hausbewertung bei Scheidung in Osnabrück. Rechtliche Aspekte, Kosten und wie Sie einen Immobiliengutachter wählen sollten.',
    date: '27. April 2026',
    readTime: '7 min Lesezeit',
    slug: 'hausbewertung-scheidung-osnabrueck',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    altText: 'Hausbewertung bei Scheidung in Osnabrück - Rechtliche Aspekte',
    category: 'Scheidung'
  },
  {
    id: '4',
    title: 'Erbschaft und Immobilienbewertung in Osnabrück - Der komplette Leitfaden',
    excerpt: 'Kompletter Leitfaden für Erbschaft und Immobilienbewertung in Osnabrück. Was Sie über Erbschaftsgutachten wissen müssen und wie Sie die richtige Bewertung wählen.',
    date: '26. April 2026',
    readTime: '8 min Lesezeit',
    slug: 'erbschaft-immobilienbewertung-osnabrueck',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    altText: 'Erbschaft und Immobilienbewertung in Osnabrück - Leitfaden',
    category: 'Erbschaft'
  },
  {
    id: '5',
    title: 'Grundstücksbewertung Georgsmarienhütte, Bramsche und Melle - Regional kompetent',
    excerpt: 'Regional kompetente Grundstücksbewertung in Georgsmarienhütte, Bramsche und Melle. Wie wir Immobilien in diesen Städten bewerten und welche Faktoren wichtig sind.',
    date: '25. April 2026',
    readTime: '6 min Lesezeit',
    slug: 'grundstuecksbewertung-georgsmarienhuette-bramsche-melle',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    altText: 'Grundstücksbewertung in Georgsmarienhütte, Bramsche und Melle - Regional kompetent',
    category: 'Grundstücksbewertung'
  }
];

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