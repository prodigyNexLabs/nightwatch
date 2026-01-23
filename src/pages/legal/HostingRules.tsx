import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'

const HostingRules = () => (
  <PageTransition>
    <main className="relative overflow-hidden bg-sand py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#9FD4C3_0%,transparent_60%)] opacity-40" />
      <Container className="relative">
        <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur md:p-12">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Hosting</p>
            <h1 className="text-4xl font-semibold text-slate-900">Hosting Rules</h1>
            <p className="text-sm text-slate-600">
            These operational rules apply to all hosts listing parking, vendor access, or event
            participation on Crozroad.
            </p>
          </header>

          <section className="mt-8 space-y-8 text-sm leading-7 text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">1. Prohibited listings</h2>
            <p>
              Hosts must not list locations or services that are illegal, unpermitted, unsafe, or
              deceptive, including unauthorized curbside spaces or unlicensed street vending.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">2. Fraud and misrepresentation</h2>
            <p>
              Falsified availability, fabricated permits, or manipulation of event capacity is
              prohibited and results in immediate suspension or removal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">3. Safety requirements</h2>
            <p>
              Hosts must maintain safe access routes, comply with local safety standards, and keep
              emergency paths clear at all times. Hazards must be reported promptly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">4. No discrimination</h2>
            <p>
              Hosts must not discriminate based on race, religion, caste, gender, disability,
              nationality, or any protected characteristic.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">5. Emergency handling</h2>
            <p>
              Hosts must report incidents, hazards, or emergencies and update listings immediately
              when operational conditions change.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">6. Audits and verification</h2>
            <p>
              Crozroad may request documentation or conduct verification checks to confirm
              compliance. Failure to cooperate may result in suspension.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">7. Penalties</h2>
            <p>
              Violations may lead to warnings, temporary suspension, permanent removal, and reporting
              to relevant authorities when legally required.
            </p>
          </section>
          </section>
        </div>
      </Container>
    </main>
  </PageTransition>
)

export default HostingRules
