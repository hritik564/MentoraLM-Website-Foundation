import { type ReactNode } from 'react';
import { Route, Router as WouterRouter, Switch, useLocation } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { SiteShell } from '@/components/layout/site-shell';
import HomePage from '@/pages/home';
import NotFound from '@/pages/not-found';
import AiCareerCounsellingPage from '@/pages/products/ai-career-counselling';
import CareerIgnitePage from '@/pages/products/careerignite';
import GradLMPage from '@/pages/products/gradlm';

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <SiteShell>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route
            path="/products/ai-career-counselling"
            component={AiCareerCounsellingPage}
          />
          <Route path="/products/careerignite" component={CareerIgnitePage} />
          <Route path="/products/gradlm" component={GradLMPage} />
          <Route component={NotFound} />
        </Switch>
      </SiteShell>
    </RoutedErrorBoundary>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;