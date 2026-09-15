import { Link } from 'wouter';

interface LogoProps {
  href?: string;
  className?: string;
  assetSrc?: string;
  tone?: 'light' | 'dark';
  size?: 'nav' | 'footer';
}

export function Logo({
  href = '/',
  className = '',
  assetSrc,
  tone = 'light',
  size = 'nav',
}: LogoProps) {
  const content = assetSrc ? (
    <img
      className="logo-asset"
      src={assetSrc}
      alt="MentoraLM"
      data-testid="img-official-logo"
    />
  ) : (
    <span
      className="logo-placeholder"
      data-logo-asset-slot="official-logo-to-be-supplied"
      data-testid="text-logo-wordmark"
    >
      MentoraLM
    </span>
  );

  return (
    <Link
      href={href}
      className={`logo logo--${tone} logo--${size} ${className}`.trim()}
      aria-label="MentoraLM home"
      data-testid="link-logo-home"
    >
      {content}
    </Link>
  );
}