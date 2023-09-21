import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mhmmdamir.biz.id',
      lastModified: new Date(),
    },
    {
      url: 'https://mhmmdamir.biz.id/about',
      lastModified: new Date(),
    },
    {
      url: 'https://mhmmdamir.biz.id/skills',
      lastModified: new Date(),
    },
    {
      url: 'https://mhmmdamir.biz.id/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://mhmmdamir.biz.id/contact',
      lastModified: new Date(),
    },
  ];
}
