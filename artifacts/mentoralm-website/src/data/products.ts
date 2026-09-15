export type ProductSlug =
  | 'ai-career-counselling'
  | 'careerignite'
  | 'gradlm';

export type ProductStatus = 'active' | 'upcoming';
export type ProductVisualType = 'flagship' | 'reserved';
export type ProductAccent = 'cyan-blue' | 'purple-magenta' | 'orange-gold' | 'neutral';

export interface ProductDefinition {
  id: string;
  number: number;
  name: string;
  shortName: string;
  category: string;
  description?: string;
  status: ProductStatus;
  route?: `/products/${ProductSlug}`;
  accent: ProductAccent;
  visualType: ProductVisualType;
}

export const products: readonly ProductDefinition[] = [
  {
    id: 'ai-career-counselling',
    number: 1,
    name: 'AI Career Counselling',
    shortName: 'AI Counselling',
    category: 'Flagship product',
    status: 'active',
    route: '/products/ai-career-counselling',
    accent: 'cyan-blue',
    visualType: 'flagship',
  },
  {
    id: 'careerignite',
    number: 2,
    name: 'CareerIgnite Program',
    shortName: 'CareerIgnite',
    category: 'Flagship product',
    status: 'active',
    route: '/products/careerignite',
    accent: 'purple-magenta',
    visualType: 'flagship',
  },
  {
    id: 'gradlm',
    number: 3,
    name: 'GradLM Study Abroad',
    shortName: 'GradLM',
    category: 'Flagship product',
    status: 'active',
    route: '/products/gradlm',
    accent: 'orange-gold',
    visualType: 'flagship',
  },
  {
    id: 'upcoming-module-04',
    number: 4,
    name: 'Upcoming Module',
    shortName: 'Upcoming Module',
    category: 'Future module',
    status: 'upcoming',
    accent: 'neutral',
    visualType: 'reserved',
  },
  {
    id: 'upcoming-module-05',
    number: 5,
    name: 'Upcoming Module',
    shortName: 'Upcoming Module',
    category: 'Future module',
    status: 'upcoming',
    accent: 'neutral',
    visualType: 'reserved',
  },
  {
    id: 'upcoming-module-06',
    number: 6,
    name: 'Upcoming Module',
    shortName: 'Upcoming Module',
    category: 'Future module',
    status: 'upcoming',
    accent: 'neutral',
    visualType: 'reserved',
  },
  {
    id: 'upcoming-module-07',
    number: 7,
    name: 'Upcoming Module',
    shortName: 'Upcoming Module',
    category: 'Future module',
    status: 'upcoming',
    accent: 'neutral',
    visualType: 'reserved',
  },
];

export const flagshipProducts = products.filter(
  (product): product is ProductDefinition & { route: `/products/${ProductSlug}` } =>
    product.status === 'active' && product.route !== undefined,
);

export const ecosystemArchitecture = {
  flagshipProductCount: flagshipProducts.length,
  unnamedUpcomingModuleCount: products.filter(
    (product) => product.status === 'upcoming',
  ).length,
  totalModuleCount: products.length,
} as const;

export function getProductBySlug(slug: string | undefined) {
  return flagshipProducts.find(
    (product) => product.route === `/products/${slug}`,
  );
}