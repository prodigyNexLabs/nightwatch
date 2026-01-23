import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import { siteConfig } from '../../config/site.config'

const TermsConditions = () => (
  <PageTransition>
    <section className="bg-sand py-16">
      <Container className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Legal</p>
          <h1 className="text-4xl font-semibold text-slate-900">Terms & Conditions</h1>
          <p className="text-sm text-slate-600">
            Effective date: January 24, 2026 • {siteConfig.companyName}
          </p>
        </header>
        <div className="space-y-6 text-sm text-slate-600">
          <p>
            These terms govern your access to {siteConfig.appName} and any related services provided
            by {siteConfig.companyName}. By using the platform, you agree to these terms.
          </p>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Use of the platform</h2>
            <p>
              You may use Crozroad for planning, operational coordination, and access discovery. You
              agree not to misuse data, reverse engineer signals, or disrupt service availability.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Access signals</h2>
            <p>
              Signal layers are directional guidance, not guarantees. Parking availability and event
              routing remain subject to city conditions, policy enforcement, and real-world changes.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Intellectual property</h2>
            <p>
              All content, signal models, and interface elements belong to {siteConfig.companyName}
              or licensed partners. You may not reuse them without explicit permission.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Support</h2>
            <p>
              For operational support or service inquiries, contact {siteConfig.supportEmail}. We
              prioritize requests tied to active deployments.
            </p>
          </section>
        </div>
      </Container>
    </section>
  </PageTransition>
)

export default TermsConditions
