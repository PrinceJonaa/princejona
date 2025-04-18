import { MetadataRoute } from 'next';

// Define known static routes
const staticRoutes = [
  '/',
  '/story',
  '/truths',
  '/downloads',
  '/offerings',
  '/mission-log',
  '/tech-beliefs',
  '/fractal-vision',
  '/portal',
];

// Define known dynamic identity slugs (ideally fetched from a data source)
const identitySlugs = ['prince-jona', 'the-interpreter', 'the-flame'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://princejona.com';

  // Map static routes to sitemap entries
  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    lastModified: new Date(), // Use current date, or fetch specific dates if available
    priority: route === '/' ? 1.0 : 0.8, // Homepage highest priority
  }));

  // Map dynamic identity routes
  const identityUrls = identitySlugs.map((slug) => ({
    url: `${baseUrl}/identity/${slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticUrls, ...identityUrls];
}
