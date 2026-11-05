import { siteUrl } from './site-config';

export default function sitemap() {
  return [{ url: siteUrl, changeFrequency: 'monthly', priority: 1 }];
}
