import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://muhammadamir.my.id',
      lastModified: new Date(),
    },
    {
      url: 'https://muhammadamir.my.id/about',
      lastModified: new Date(),
    },
    {
      url: 'https://muhammadamir.my.id/contact',
      lastModified: new Date(),
    },
  ];
}
