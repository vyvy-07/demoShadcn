// components/Seo.tsx
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  image: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
  return (
    <Head>
      {/* Basic SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
