import { Link } from 'wouter';
import { Logo } from '@/components/ui/logo';

export function FooterSection() {
  return (
    <footer className="production-footer" id="about">
      <div className="section-wrap production-footer__top">
        <div><Logo tone="dark" size="footer" /><p className="footer-statement">A clearer way to decide what comes next.</p></div>
        <div className="footer-nav-group" id="resources"><span className="footer-label">Explore</span><Link href="/#modules">Modules</Link><Link href="/#how-it-works">How It Works</Link><Link href="/#menti">Meet Menti</Link></div>
        <div className="footer-nav-group"><span className="footer-label">Connect</span><Link href="/#get-started">Get Started</Link><Link href="/#why-mentoralm">Why MentoraLM</Link><Link href="/#about">About</Link></div>
      </div>
      <div className="section-wrap production-footer__bottom"><span>© {new Date().getFullYear()} MentoraLM</span><span>Guidance for what comes next.</span></div>
    </footer>
  );
}