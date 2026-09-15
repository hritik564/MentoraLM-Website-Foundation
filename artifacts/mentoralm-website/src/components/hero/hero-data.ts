import { productAccentConfig } from '@/data/product-accents';
import { products, type ProductAccent } from '@/data/products';

export type JourneyId = 'understand' | 'build' | 'explore' | 'move-forward';

export interface JourneyDimension {
  id: JourneyId;
  label: string;
  descriptor: string;
}

export interface JourneyProduct {
  id: string;
  name: string;
  dimension: JourneyId;
  route: `/products/${string}`;
  accent: ProductAccent;
}

export const journeyDimensions: readonly JourneyDimension[] = [
  {
    id: 'understand',
    label: 'Understand',
    descriptor: 'Know yourself',
  },
  {
    id: 'build',
    label: 'Build',
    descriptor: 'Develop capability',
  },
  {
    id: 'explore',
    label: 'Explore',
    descriptor: 'Discover possibilities',
  },
  {
    id: 'move-forward',
    label: 'Move forward',
    descriptor: 'Turn direction into action',
  },
];

const flagshipById = Object.fromEntries(products.map((product) => [product.id, product]));

export const journeyProducts: readonly JourneyProduct[] = [
  {
    id: 'ai-career-counselling',
    name: flagshipById['ai-career-counselling'].name,
    dimension: 'understand',
    route: flagshipById['ai-career-counselling'].route!,
    accent: flagshipById['ai-career-counselling'].accent,
  },
  {
    id: 'careerignite',
    name: flagshipById.careerignite.name,
    dimension: 'build',
    route: flagshipById.careerignite.route!,
    accent: flagshipById.careerignite.accent,
  },
  {
    id: 'gradlm',
    name: flagshipById.gradlm.name,
    dimension: 'explore',
    route: flagshipById.gradlm.route!,
    accent: flagshipById.gradlm.accent,
  },
];

export const journeyProductAccents = journeyProducts.reduce(
  (accents, product) => {
    accents[product.id] = productAccentConfig[product.accent];
    return accents;
  },
  {} as Record<string, (typeof productAccentConfig)[ProductAccent]>,
);