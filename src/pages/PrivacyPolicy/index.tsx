import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import { siteConfig } from '../../config/site.config'

const PrivacyPolicy = () => (
  <PageTransition>
    <section className="bg-white/70 py-16">
      <Container className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Legal</p>
          <h1 className="text-4xl font-semibold text-slate-900">Privacy Policy</h1>
          <p className="text-sm text-slate-600">
            Effective date: January 24, 2026 • {siteConfig.companyName}
          </p>
        </header>
        <div className="space-y-6 text-sm text-slate-600">
          <p>
            {siteConfig.appName} is built by {siteConfig.companyName}. This policy explains how we
            collect, use, and protect information when you interact with our platform, website, and
            services.
          </p>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Information we collect</h2>
            <ul className="space-y-2">
              <li>• Contact details provided in forms or partnership inquiries.</li>
              <li>• Usage data such as page views, signal interactions, and navigation patterns.</li>
              <li>• Operational data shared by partners for access coordination and compliance.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">How we use data</h2>
            <ul className="space-y-2">
              <li>• Deliver real-time access intelligence and system performance insights.</li>
              <li>• Improve routing accuracy, vendor density predictions, and event readiness.</li>
              <li>• Respond to support requests and partnership onboarding.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Data sharing</h2>
            <p>
              We only share data with vetted partners and municipal stakeholders to deliver the
              Crozroad experience. We do not sell personal information.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Security</h2>
            <p>
              We apply industry-standard security controls including encryption in transit, access
              logging, and data minimization for all partner integrations.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
            <p>
              For privacy questions, reach out to {siteConfig.legal.dataContact} or
              {` ${siteConfig.supportEmail}`}.
            </p>
          </section>
        </div>
      </Container>
    </section>
  </PageTransition>
)

export default PrivacyPolicy
