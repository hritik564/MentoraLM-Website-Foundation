import { ProductRoutePlaceholder } from '@/components/products/product-route-placeholder';
import { flagshipProducts } from '@/data/products';

export default function GradLMPage() {
  return <ProductRoutePlaceholder product={flagshipProducts[2]} />;
}