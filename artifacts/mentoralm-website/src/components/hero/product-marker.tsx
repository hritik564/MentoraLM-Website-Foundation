import type { CSSProperties } from 'react';
import { Link } from 'wouter';
import { productAccentConfig } from '@/data/product-accents';
import type { JourneyProduct } from './hero-data';

interface ProductMarkerProps {
  product: JourneyProduct;
  isRelated: boolean;
  isQuiet: boolean;
  onActivate: (id: JourneyProduct['dimension']) => void;
  onDeactivate: () => void;
}

export function ProductMarker({
  product,
  isRelated,
  isQuiet,
  onActivate,
  onDeactivate,
}: ProductMarkerProps) {
  const accent = productAccentConfig[product.accent];
  const style = {
    '--product-accent': accent.primary,
    '--product-accent-surface': accent.surfaceTreatment,
  } as CSSProperties;

  return (
    <Link
      className={`product-marker product-marker--${product.dimension} ${
        isRelated ? 'is-related' : ''
      } ${isQuiet ? 'is-quiet' : ''}`}
      href={product.route}
      style={style}
      aria-label={`${product.name}, part of ${product.dimension.replace('-', ' ')} journey`}
      data-product-marker={product.id}
      onFocus={() => onActivate(product.dimension)}
      onBlur={onDeactivate}
      onMouseEnter={() => onActivate(product.dimension)}
      onMouseLeave={onDeactivate}
    >
      <span className="product-marker__dot" aria-hidden="true" />
      <span>{product.name}</span>
    </Link>
  );
}