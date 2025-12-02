// Enhanced SEO component using next-seo package
// This component adds structured data without changing the frontend appearance

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export default function SEO({ title, description, canonical }: SEOProps) {
  // All SEO is handled through Next.js metadata in layout.tsx
  // This component can be extended in the future for page-specific SEO
  // For now, it serves as a placeholder for the structured data in page.tsx
  
  return null;
}
