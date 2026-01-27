import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import { siteConfig } from '../../config/site.config'

const TermsWeb = () => (
  <PageTransition>
    <main className="relative overflow-hidden bg-sand py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#9FD4C3_0%,transparent_60%)] opacity-40" />
      <Container className="relative">
        <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur md:p-12">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Legal</p>
            <h1 className="text-4xl font-semibold text-slate-900">Terms & Conditions — Web Platform</h1>
            <p className="text-sm text-slate-600">
              Effective date: January 24, 2026 • {siteConfig.companyName}
            </p>
          </header>

          <section className="mt-8 space-y-8 text-sm leading-7 text-slate-700">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">1. Platform scope</h2>
              <p>
                Crozroad provides access discovery and operational coordination for parking, street
                vendors, and live events. The platform facilitates discovery and context, not
                transactions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">2. Accuracy and availability</h2>
              <p>
                Real-time data is derived from sensors, partners, and user inputs. Availability and
                pricing can change rapidly. Crozroad does not guarantee accuracy or uninterrupted
                availability of signals, nor does it guarantee access outcomes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">3. User obligations</h2>
              <p>
                You agree to provide accurate information, comply with applicable laws, and use the
                platform for lawful purposes only. You are responsible for decisions made using
                platform information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">4. Acceptable use</h2>
              <p>
                You must not scrape, reverse-engineer, disrupt, or misuse Crozroad services.
                Unauthorized access or interference with system integrity is prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">5. Intellectual property</h2>
              <p>
                All platform content, data models, and interfaces are owned by {siteConfig.companyName}
                or its licensors. You may not copy, modify, or redistribute without permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">6. Termination and suspension</h2>
              <p>
                We may suspend or terminate access for policy violations, security risks, or legal
                compliance requirements. We may also restrict features if misuse is detected.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">7. Limitation of liability</h2>
              <p>
                Crozroad is provided on an “as is” basis. We are not liable for indirect, incidental,
                or consequential damages arising from reliance on real-time data or third-party
                actions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">8. Governing law</h2>
              <p>
                These terms are governed by the laws of India. Courts in Bengaluru, Karnataka have
                exclusive jurisdiction, without limiting rights under applicable local laws.
              </p>
            </section>
          </section>
        </div>
      </Container>
    </main>
  </PageTransition>
)

export default TermsWeb
