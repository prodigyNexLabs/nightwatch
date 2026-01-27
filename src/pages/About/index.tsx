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
            {siteConfig.appName} is an app-first discovery layer for spaces, events, shops, and
            parking. We make every space clear and legible with rules and capacity so people can
            decide fast.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Our mission</h2>
            <p className="text-sm text-slate-600">
              We believe access should be clear and immediate. Crozroad connects people to real
              spaces, real events, and real businesses with live, trustworthy context.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Built by {siteConfig.companyName}</h2>
            <p className="text-sm text-slate-600">
              {siteConfig.companyName} builds products that unlock underused urban space. We focus on
              app-first discovery, clear operating rules, and local visibility that benefit both
              users and businesses.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-slate-900">What makes Crozroad different</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Spaces are the foundation, not static listings.</li>
            <li>• Events and shops are anchored to real space and real footfall.</li>
            <li>• Parking and pitstops are first-class access layers.</li>
            <li>• Clear rules and capacity keep expectations transparent.</li>
          </ul>
        </div>
      </Container>
    </section>
  </PageTransition>
)

export default About
