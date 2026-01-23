import { siteConfig } from '../../config/site.config'

const TermsMobile = () => (
  <main className="min-h-screen bg-sand">
    <section className="mx-auto w-full max-w-md px-6 py-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Legal</p>
        <h1 className="text-3xl font-semibold text-slate-900">Terms & Conditions</h1>
        <p className="text-sm text-slate-600">
          Effective date: January 24, 2026 • {siteConfig.companyName}
        </p>
      </header>

      <div className="mt-6 rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur">
        <div className="space-y-8 text-sm leading-7 text-slate-700">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">1. App scope</h2>
          <p>
            The Crozroad mobile apps provide access discovery and operational coordination. The apps
            do not process transactions or guarantee availability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">2. Connectivity and accuracy</h2>
          <p>
            Features depend on network connectivity and device capabilities. When offline or in
            low-signal areas, data may be delayed, incomplete, or unavailable. Real-time signals are
            directional guidance and not guarantees.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">3. App updates and feature evolution</h2>
          <p>
            We may issue updates to improve safety, accuracy, and performance. Features may change,
            be limited, or retired to meet legal or operational requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">4. Store-based billing</h2>
          <p>
            If paid features are offered, purchases and subscriptions are processed by the App
            Store or Play Store. Billing disputes must be handled through the respective store.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">5. Device compatibility</h2>
          <p>
            You are responsible for ensuring your device meets minimum requirements. Certain
            features may not be available on older devices or unsupported operating systems.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">6. Suspension or termination</h2>
          <p>
            We may suspend access or terminate accounts for policy violations, security risks, or
            legal requirements. We may also remove the app from distribution when required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">7. Limitation of liability</h2>
          <p>
            The app is provided “as is.” We are not liable for losses arising from connectivity
            issues, location inaccuracies, host actions, or third-party services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">8. Governing law</h2>
          <p>
            These terms are governed by the laws of India. Courts in Bengaluru, Karnataka have
            exclusive jurisdiction, without limiting rights under applicable local laws.
          </p>
        </section>
        </div>
      </div>
    </section>
  </main>
)

export default TermsMobile
