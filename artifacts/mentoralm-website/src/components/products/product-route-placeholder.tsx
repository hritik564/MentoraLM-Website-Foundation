import type { ProductDefinition } from '@/data/products';

interface ProductRoutePlaceholderProps {
  product: ProductDefinition;
}

export function ProductRoutePlaceholder({ product }: ProductRoutePlaceholderProps) {
  return (
    <div className="page-container">
      <article className="product-layout" data-testid={`page-product-${product.id}`}>
        <div>
          <p className="product-route-label" data-testid={`text-product-status-${product.id}`}>
            Flagship product route / Phase 0
          </p>
          <h1 className="product-title" data-testid={`heading-product-${product.id}`}>
            {product.name}
          </h1>
        </div>
        <div className="product-status" role="status" data-testid={`status-product-${product.id}`}>
          <strong>Future phase marker</strong>
          This product experience will be implemented in a future phase.
        </div>
      </article>
    </div>
  );
}