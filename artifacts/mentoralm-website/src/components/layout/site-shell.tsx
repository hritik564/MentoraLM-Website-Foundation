import { type ReactNode } from 'react';
import { SiteHeader } from '@/components/navigation/site-header';

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-main">{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <p data-testid="text-foundation-footer">
            MentoraLM / Phase 0 foundation
          </p>
        </div>
      </footer>
    </div>
  );
}