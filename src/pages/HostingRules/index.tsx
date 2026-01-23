import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import { siteConfig } from '../../config/site.config'

const HostingRules = () => (
  <PageTransition>
    <section className="bg-white/70 py-16">
      <Container className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Hosting</p>
          <h1 className="text-4xl font-semibold text-slate-900">Hosting Rules</h1>
          <p className="text-sm text-slate-600">
            Standards for street vendors, pop-ups, and live event hosts within the {siteConfig.appName}
            ecosystem.
          </p>
        </header>
        <div className="space-y-6 text-sm text-slate-600">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Respect access corridors</h2>
            <p>
              Hosts must keep mapped access corridors clear during designated ingress and egress
              windows. Crozroad provides time-based guidance to maintain safe flow.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Permit and compliance alignment</h2>
            <p>
              All vendors and event operators are responsible for maintaining current permits and
              following municipal requirements for signage, noise, and operating hours.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Signal updates</h2>
            <p>
              Hosts must update their operational status in Crozroad when changes occur, including
              delays, relocations, or capacity adjustments.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Community-first operations</h2>
            <p>
              Hosting activity should support safe pedestrian flow, accessible routes, and
              neighborhood standards. Crozroad partners with local teams to monitor impact.
            </p>
          </section>
        </div>
      </Container>
    </section>
  </PageTransition>
)

export default HostingRules
