const SITE_URL = 'https://rhobots.ai';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RHOBOTS AI',
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      'Enterprise AI platform that works with your existing systems — intelligent automation, document processing, business analytics, and more.',
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: `${SITE_URL}${product.path}`,
    brand: { '@type': 'Organization', name: 'RHOBOTS AI' },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
