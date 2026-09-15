import type { ProductDefinition } from '@/data/products';

interface ProductRoutePlaceholderProps {
  product: ProductDefinition;
}

export function ProductRoutePlaceholder({ product }: ProductRoutePlaceholderProps) {
  return (
    <div className="page-container">
      <article className="product-layout" data-testid={`page-product-${product.slug}`}>
        <div>
          <p className="product-route-label" data-testid={`text-product-status-${product.slug}`}>
            Flagship product route / Phase 0
          </p>
          <h1 className="product-title" data-testid={`heading-product-${product.slug}`}>
            {product.name}
          </h1>
        </div>
        <div className="product-status" role="status" data-testid={`status-product-${product.slug}`}>
          <strong>Future phase marker</strong>
          This product experience will be implemented in a future phase.
        </div>
      </article>
    </div>
  );
}