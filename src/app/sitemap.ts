import { MetadataRoute } from 'next';
import { serviceGuides } from '@/lib/services';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/` }, ...serviceGuides.map(guide => ({ url: `${SITE_URL}/ambientes/${guide.slug}/`, images: [`${SITE_URL}${guide.image}`] }))];
}
