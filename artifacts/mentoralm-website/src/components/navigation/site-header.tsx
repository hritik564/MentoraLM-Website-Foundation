import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { flagshipProducts } from '@/data/products';
import { Logo } from '@/components/ui/logo';

function isCurrentPath(path: string, location: string) {
  return path === '/' ? location === '/' : location.startsWith(path);
}

export function SiteHeader() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = [
    { label: 'Foundation', href: '/' },
    ...flagshipProducts.map((product) => ({
      label: product.name,
      href: product.path,
    })),
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="primary-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={isCurrentPath(item.href, location) ? 'page' : undefined}
              data-testid={`link-nav-${item.label.toLowerCase().replace(/ /g, '-')}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
          data-testid="button-mobile-navigation"
        >
          {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>
      {isMenuOpen ? (
        <nav
          id="mobile-primary-navigation"
          className="mobile-nav"
          aria-label="Mobile primary navigation"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={isCurrentPath(item.href, location) ? 'page' : undefined}
              onClick={closeMenu}
              data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/ /g, '-')}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}