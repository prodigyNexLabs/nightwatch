import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import Button from '../../components/ui/Button'
import { siteConfig } from '../../config/site.config'

const Brochure = () => (
  <PageTransition>
    <section className="bg-white/70 py-16">
      <Container className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Brochure</p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Introducing {siteConfig.appName}
          </h1>
          <p className="text-base text-slate-600">
            {siteConfig.appName} gives cities, operators, and local businesses a shared understanding
            of access. We orchestrate time-based signals for parking, street vendors, and live events
            so everyone can move faster and smarter.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Signal Layers',
              copy: 'Parking probability, curbside demand, and event ingress windows are mapped into live layers.',
            },
            {
              title: 'Urban Playbooks',
              copy: 'Deploy repeatable playbooks for district launches, event nights, or seasonal vendor activations.',
            },
            {
              title: 'Partner Console',
              copy: 'Provide stakeholders a single console with permissions, dashboards, and compliance-ready workflows.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.copy}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-mint/40 bg-sand p-8">
          <h2 className="text-2xl font-semibold text-slate-900">What you unlock</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-800">Curbside performance</p>
              <p>Reduce search time, increase turnover, and improve access equity.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Street commerce insights</p>
              <p>Understand vendor density, compliance health, and revenue corridors.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Event readiness</p>
              <p>Orchestrate arrival windows and staging zones with live guidance.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Community alignment</p>
              <p>Share transparent data with residents and city partners.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="lg">Download PDF</Button>
          <Button size="lg" variant="ghost">
            Talk to Sales
          </Button>
        </div>
      </Container>
    </section>
  </PageTransition>
)

export default Brochure
