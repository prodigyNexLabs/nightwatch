import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import { siteConfig } from '../../config/site.config'

const About = () => (
  <PageTransition>
    <section className="bg-sand py-16">
      <Container className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">About</p>
          <h1 className="text-4xl font-semibold text-slate-900">Meet {siteConfig.appName}</h1>
          <p className="text-base text-slate-600">
            {siteConfig.appName} is the Urban Access & Discovery OS designed to align fast-moving
            city environments with real-time context. We orchestrate parking, curbside commerce, and
            live event flows into a single operational view.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Our mission</h2>
            <p className="text-sm text-slate-600">
              We believe every city deserves an access layer that respects time, intent, and
              community. Crozroad connects travelers, operators, and local stakeholders through live
              intelligence that makes the urban experience more predictable.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Built by {siteConfig.companyName}</h2>
            <p className="text-sm text-slate-600">
              {siteConfig.companyName} is an urban technology studio focused on making dense
              environments legible. We blend software, data, and operational design to keep cities
              accessible without losing their character.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-slate-900">What makes Crozroad different</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Time-windowed signal layers, not static maps.</li>
            <li>• Multi-stakeholder routing for drivers, vendors, and event producers.</li>
            <li>• Compliance-ready hosting tools for street commerce and pop-up activations.</li>
            <li>• A modular OS that scales from a single district to an entire metro.</li>
          </ul>
        </div>
      </Container>
    </section>
  </PageTransition>
)

export default About
