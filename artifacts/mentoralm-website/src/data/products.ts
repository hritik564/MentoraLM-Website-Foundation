export type ProductSlug =
  | 'ai-career-counselling'
  | 'careerignite'
  | 'gradlm';

export interface ProductDefinition {
  slug: ProductSlug;
  name: string;
  path: `/products/${ProductSlug}`;
  status: 'flagship' | 'planned';
}

export const flagshipProducts: readonly [
  ProductDefinition,
  ProductDefinition,
  ProductDefinition,
] = [
  {
    slug: 'ai-career-counselling',
    name: 'AI Career Counselling',
    path: '/products/ai-career-counselling',
    status: 'flagship',
  },
  {
    slug: 'careerignite',
    name: 'CareerIgnite Program',
    path: '/products/careerignite',
    status: 'flagship',
  },
  {
    slug: 'gradlm',
    name: 'GradLM Study Abroad',
    path: '/products/gradlm',
    status: 'flagship',
  },
];

export const ecosystemArchitecture = {
  flagshipProductCount: flagshipProducts.length,
  unnamedUpcomingModuleCount: 4,
} as const;

export function getProductBySlug(slug: string | undefined) {
  return flagshipProducts.find((product) => product.slug === slug);
}