import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import { siteConfig } from '../../config/site.config'

const HostingTerms = () => (
  <PageTransition>
    <section className="bg-sand py-16">
      <Container className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Hosting</p>
          <h1 className="text-4xl font-semibold text-slate-900">Hosting Terms</h1>
          <p className="text-sm text-slate-600">
            These terms govern hosting activities coordinated through {siteConfig.appName}.
          </p>
        </header>
        <div className="space-y-6 text-sm text-slate-600">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Role of Crozroad</h2>
            <p>
              Crozroad provides coordination tools and intelligence. We do not assume liability for
              on-site operations, safety enforcement, or permit issuance.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Host responsibilities</h2>
            <p>
              Hosts agree to follow municipal regulations, safety protocols, and any local partner
              requirements provided during onboarding.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Data accuracy</h2>
            <p>
              Hosts must submit accurate schedules, occupancy data, and vendor listings to ensure
              reliable access guidance for the community.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Termination</h2>
            <p>
              {siteConfig.companyName} may suspend hosting access if terms are violated or if
              operational safety is compromised.
            </p>
          </section>
        </div>
      </Container>
    </section>
  </PageTransition>
)

export default HostingTerms
