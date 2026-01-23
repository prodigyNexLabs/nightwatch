import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import { siteConfig } from '../../config/site.config'

const HostingTerms = () => (
  <PageTransition>
    <main className="relative overflow-hidden bg-sand py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#9FD4C3_0%,transparent_60%)] opacity-40" />
      <Container className="relative">
        <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur md:p-12">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Hosting</p>
            <h1 className="text-4xl font-semibold text-slate-900">Hosting Terms</h1>
            <p className="text-sm text-slate-600">
            Effective date: January 24, 2026 • {siteConfig.companyName}
            </p>
          </header>

          <section className="mt-8 space-y-8 text-sm leading-7 text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">1. Eligibility</h2>
            <p>
              Hosts must be legally authorized to list parking spaces, vendor access, or event
              participation. We may request documentation or proof of permits before approving a
              listing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">2. Listing accuracy</h2>
            <p>
              Hosts must provide accurate location details, operating hours, capacity, pricing,
              access instructions, and safety conditions. Real-time updates must be submitted when
              conditions change.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">3. Legal compliance</h2>
            <p>
              Hosts are responsible for compliance with local laws, permits, and zoning rules,
              including municipal policies covering parking, street vending, and event staging.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">4. Pricing responsibility</h2>
            <p>
              Hosts control pricing and availability. Crozroad does not set prices, collect
              payments, or guarantee occupancy. Hosts must disclose all applicable fees.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">5. Service quality</h2>
            <p>
              Hosts must provide safe, accessible, and accurate services. Persistent issues related
              to safety, access, or reliability may result in suspension.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">6. Dispute handling</h2>
            <p>
              Hosts agree to respond to disputes in good faith and provide timely resolution details
              to affected users or partners. Hosts must maintain records related to disputes and
              resolutions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">7. Suspension and termination</h2>
            <p>
              {siteConfig.companyName} may suspend or terminate host access for policy violations,
              safety risks, fraud, or legal requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">8. Platform neutrality</h2>
            <p>
              Crozroad provides neutral discovery and coordination services and does not endorse or
              guarantee host offerings. Hosts remain solely responsible for the services they
              provide.
            </p>
          </section>
          </section>
        </div>
      </Container>
    </main>
  </PageTransition>
)

export default HostingTerms
