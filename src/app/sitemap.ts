import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://toolkb.in'
  const routes = [
    '',
    '/about',
    '/compress-image',
    '/compress-image-to-20kb',
    '/compress-image-to-50kb',
    '/compress-image-to-100kb',
    '/compress-image-to-200kb',
    '/resize-image',
    '/signature-compressor',
    '/signature-to-20kb',
    '/signature-to-50kb',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
