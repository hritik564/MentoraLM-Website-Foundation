import { Link } from 'wouter';

interface LogoProps {
  href?: string;
  className?: string;
  assetSrc?: string;
}

export function Logo({
  href = '/',
  className = '',
  assetSrc,
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
      className="logo-wordmark"
      data-logo-asset-slot="official-logo-to-be-supplied"
      data-testid="text-logo-wordmark"
    >
      Mentora<em>LM</em>
    </span>
  );

  return (
    <Link
      href={href}
      className={`logo ${className}`.trim()}
      aria-label="MentoraLM foundation home"
      data-testid="link-logo-home"
    >
      {content}
    </Link>
  );
}