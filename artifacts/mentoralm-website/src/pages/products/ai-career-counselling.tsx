import { ProductRoutePlaceholder } from '@/components/products/product-route-placeholder';
import { flagshipProducts } from '@/data/products';

export default function AiCareerCounsellingPage() {
  return <ProductRoutePlaceholder product={flagshipProducts[0]} />;
}