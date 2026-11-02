export const SITE = {
  name: 'Sablay',
  title: 'Sablay | IT Consulting in Brussels, Belgium',
  description:
    'Sablay is an IT consulting company in Brussels, Belgium. Niche technology services, Odoo implementation and custom development, delivered with a shorter turnaround time.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://example.com',
  twitterHandle: '@sablay',
  socials: {},
} as const;

export type SiteConfig = typeof SITE;
