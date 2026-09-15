import { ProductRoutePlaceholder } from '@/components/products/product-route-placeholder';
import { flagshipProducts } from '@/data/products';

export default function CareerIgnitePage() {
  return <ProductRoutePlaceholder product={flagshipProducts[1]} />;
}