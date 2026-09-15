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
    </div>
  );
}