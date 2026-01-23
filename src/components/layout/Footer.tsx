import { NavLink } from 'react-router-dom'
import { siteConfig } from '../../config/site.config'
import Container from './Container'

const legalLinks = [
  { label: 'Privacy Policy (Web)', href: '/privacy/web' },
  { label: 'Privacy Policy (Mobile)', href: '/privacy/mobile' },
  { label: 'Terms (Web)', href: '/terms/web' },
  { label: 'Terms (Mobile)', href: '/terms/mobile' },
  { label: 'Hosting Rules', href: '/hosting/rules' },
  { label: 'Hosting Terms', href: '/hosting/terms' },
]

const Footer = () => (
  <footer className="border-t border-white/60 bg-white/70 py-10">
    <Container className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Built by</p>
        <h3 className="text-2xl font-semibold text-slate-900">{siteConfig.companyName}</h3>
        <p className="text-sm text-slate-600">{siteConfig.summary}</p>
      </div>
      <div className="space-y-3 text-sm text-slate-600">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Contact</p>
        <p>{siteConfig.supportEmail}</p>
        <p>{siteConfig.legal.officeAddress}</p>
      </div>
      <div className="space-y-3 text-sm text-slate-600">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Legal</p>
        <div className="flex flex-col gap-2">
          {legalLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className="hover:text-slate-900">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </Container>
    <Container className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500">
      <p>© {new Date().getFullYear()} {siteConfig.appName}. All rights reserved.</p>
      <div className="flex items-center gap-4">
        {siteConfig.socials.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-slate-800" target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </Container>
  </footer>
)

export default Footer
