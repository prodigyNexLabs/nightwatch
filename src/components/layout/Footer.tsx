import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/site.config'
import Container from './Container'

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms & Conditions', href: '/legal/terms-and-conditions' },
  { label: 'Renting Terms', href: '/legal/renting-terms' },
  { label: 'User Terms', href: '/legal/user-terms' },
]

const Footer = () => (
  <footer className="border-t border-crz-outline/70 bg-crz-surface/80 py-12">
    <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_0.8fr]" wide>
      <div className="space-y-4">
        <img src="/banner.png" alt={`${siteConfig.platformName} brand`} className="h-9 w-auto" />
        <p className="max-w-xl text-sm leading-7 text-crz-softText">{siteConfig.appSummary}</p>
      </div>

      <div className="space-y-3 text-sm text-crz-softText">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">Contact</p>
        <p>{siteConfig.supportEmail}</p>
        <p>{siteConfig.headquarters}</p>
        <Link to="/contact" className="inline-block transition hover:text-crz-text">Contact Us &rarr;</Link>
        <p className="text-xs text-crz-softText">A {siteConfig.parentCompany} product</p>
      </div>

      <div className="space-y-3 text-sm text-crz-softText">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">Quick Links</p>
        <div className="flex flex-col gap-2">
          <Link to="/download" className="transition hover:text-crz-text">Download App</Link>
          <Link to="/download/ios" className="transition hover:text-crz-text">App Store</Link>
          <Link to="/download/android" className="transition hover:text-crz-text">Google Play</Link>
          <Link to="/host/auth" className="transition hover:text-crz-text">Host Login</Link>
        </div>
      </div>

      <div className="space-y-3 text-sm text-crz-softText">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">Legal</p>
        <div className="flex flex-col gap-2">
          {legalLinks.map((link) => (
            <Link key={link.href} to={link.href} className="transition hover:text-crz-text">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </Container>

    <Container className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-crz-outline/60 pt-6 text-xs text-crz-softText" wide>
      <p>© {new Date().getFullYear()} Crozroad. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a
          href="https://www.crozroad.com"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-crz-text"
        >
          crozroad.com
        </a>
      </div>
    </Container>
  </footer>
)

export default Footer
