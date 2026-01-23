import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import { siteConfig } from '../../config/site.config'

const PrivacyPolicyWeb = () => (
  <PageTransition>
    <main className="relative overflow-hidden bg-sand py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#9FD4C3_0%,transparent_60%)] opacity-40" />
      <Container className="relative">
        <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur md:p-12">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Legal</p>
            <h1 className="text-4xl font-semibold text-slate-900">Privacy Policy for Crozroad</h1>
            <p className="text-sm text-slate-600">
            <strong>Last Updated:</strong> January 24, 2026
            </p>
            <p className="text-sm text-slate-600">
            Crozroad (“we,” “our,” or “us”) respects your privacy and is committed to protecting
            personal data. This Privacy Policy describes how we collect, use, store, share, and
            protect information when you access or use the Crozroad mobile application, website, and
            related services (collectively, the “Services”).
            </p>
            <p className="text-sm text-slate-600">
            Crozroad is developed and operated by <strong>{siteConfig.companyName}</strong>.
            </p>
            <p className="text-sm text-slate-600">
            By using Crozroad, you acknowledge that you have read, understood, and agreed to this
            Privacy Policy. If you do not agree, please discontinue use of the Services.
            </p>
          </header>

          <section className="mt-8 space-y-8 text-sm leading-7 text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">1. Scope of This Policy</h2>
            <p>This Privacy Policy applies to:</p>
            <ul className="space-y-2">
              <li>• End users discovering parking, vendors, shops, and events</li>
              <li>• Vendors, merchants, and event organizers using Crozroad</li>
              <li>• All users interacting with Crozroad’s real-time, location-based features</li>
            </ul>
            <p>This policy is designed to comply with:</p>
            <ul className="space-y-2">
              <li>• India Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
              <li>• General Data Protection Regulation (GDPR – EU/EEA)</li>
              <li>• California Consumer Privacy Act & CPRA (CCPA/CPRA)</li>
              <li>• Google Play User Data Policy</li>
              <li>• Apple App Store Privacy Guidelines</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">2. Information We Collect</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900">2.1 Personal Information You Provide</h3>
                <ul className="mt-2 space-y-2">
                  <li>• Full name</li>
                  <li>• Phone number</li>
                  <li>• Email address</li>
                  <li>• Profile information</li>
                  <li>• Account credentials</li>
                  <li>• Vendor, shop, or event organizer details</li>
                  <li>• Government or business identifiers (vendors only, if required)</li>
                  <li>• Communications, feedback, and support requests</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900">2.2 Automatically Collected Information</h3>
                <ul className="mt-2 space-y-2">
                  <li>• Device identifiers</li>
                  <li>• Device type, OS version, app version</li>
                  <li>• IP address</li>
                  <li>• Log data, crash reports, and diagnostics</li>
                  <li>• App usage behavior and interaction data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900">2.3 Location Data (Core Feature)</h3>
                <p className="mt-2">Crozroad is a location-intelligent platform.</p>
                <p className="mt-2">We may collect:</p>
                <ul className="mt-2 space-y-2">
                  <li>• Precise location (GPS) with explicit consent</li>
                  <li>• Approximate location derived from IP</li>
                  <li>• Foreground or background location, depending on enabled features</li>
                </ul>
                <p className="mt-2">Location data is used for:</p>
                <ul className="mt-2 space-y-2">
                  <li>• Real-time parking availability</li>
                  <li>• Nearby vendor and event discovery</li>
                  <li>• High-footfall area intelligence</li>
                  <li>• Time-based and intent-driven recommendations</li>
                </ul>
                <p className="mt-2">
                  You may revoke location access at any time via device settings. Disabling location
                  may limit functionality.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900">2.4 Transactional & Operational Data</h3>
                <ul className="mt-2 space-y-2">
                  <li>• Parking or service interactions</li>
                  <li>• Vendor participation records</li>
                  <li>• Event engagement data</li>
                  <li>• Time, duration, and contextual activity metadata</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900">2.5 Cookies & Similar Technologies</h3>
                <p className="mt-2">We use cookies, SDKs, and similar technologies for:</p>
                <ul className="mt-2 space-y-2">
                  <li>• Authentication</li>
                  <li>• Analytics</li>
                  <li>• Performance optimization</li>
                  <li>• Fraud prevention</li>
                </ul>
                <p className="mt-2">You may control cookies through device or browser settings.</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900">2.6 Third-Party Data</h3>
                <p className="mt-2">We may receive data from:</p>
                <ul className="mt-2 space-y-2">
                  <li>• Payment providers</li>
                  <li>• Map and location services</li>
                  <li>• Analytics and crash-reporting tools</li>
                  <li>• Event or merchant integrations</li>
                </ul>
                <p className="mt-2">Such data is processed in accordance with this policy.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">3. Purpose of Processing</h2>
            <p>We process personal data to:</p>
            <ul className="space-y-2">
              <li>• Deliver core app functionality</li>
              <li>• Enable real-time, location-based discovery</li>
              <li>• Manage accounts and vendor onboarding</li>
              <li>• Improve performance, reliability, and security</li>
              <li>• Detect fraud and abuse</li>
              <li>• Send service-related notifications</li>
              <li>• Comply with legal obligations</li>
              <li>• Enforce terms and platform integrity</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">4. Legal Basis for Processing</h2>
            <p>Depending on jurisdiction, processing is based on:</p>
            <ul className="space-y-2">
              <li>• User consent</li>
              <li>• Contractual necessity</li>
              <li>• Legitimate interests</li>
              <li>• Legal obligations</li>
              <li>• Compliance with statutory requirements</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">5. Data Sharing & Disclosure</h2>
            <p>We do not sell personal data.</p>
            <p>Data may be shared with:</p>
            <ul className="space-y-2">
              <li>• Cloud hosting and infrastructure providers</li>
              <li>• Analytics and monitoring services</li>
              <li>• Notification and messaging services</li>
              <li>• Payment processors (if applicable)</li>
              <li>• Vendors or event organizers (only when users interact with them)</li>
              <li>• Government or regulatory authorities when legally required</li>
            </ul>
            <p>All third parties are bound by confidentiality and data protection obligations.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">6. Cross-Border Data Transfers</h2>
            <p>Your data may be stored or processed outside your country of residence. Where required, we implement:</p>
            <ul className="space-y-2">
              <li>• Standard contractual clauses</li>
              <li>• Adequate safeguards</li>
              <li>• Lawful transfer mechanisms</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">7. Data Retention</h2>
            <p>We retain data only as long as necessary for:</p>
            <ul className="space-y-2">
              <li>• Service delivery</li>
              <li>• Legal and regulatory compliance</li>
              <li>• Dispute resolution</li>
              <li>• Enforcement of agreements</li>
            </ul>
            <p>
              Upon account deletion, data is securely deleted or anonymized unless retention is
              legally required.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">8. User Rights</h2>

            <div>
              <h3 className="text-base font-semibold text-slate-900">8.1 India (DPDP Act)</h3>
              <p className="mt-2">You have the right to:</p>
              <ul className="mt-2 space-y-2">
                <li>• Access personal data</li>
                <li>• Correct or update data</li>
                <li>• Withdraw consent</li>
                <li>• Request erasure</li>
                <li>• Grievance redressal</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">8.2 EU/EEA (GDPR)</h3>
              <p className="mt-2">You have the right to:</p>
              <ul className="mt-2 space-y-2">
                <li>• Access, rectify, or erase data</li>
                <li>• Restrict or object to processing</li>
                <li>• Data portability</li>
                <li>• Withdraw consent</li>
                <li>• Lodge complaints with supervisory authorities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">8.3 California (CCPA/CPRA)</h3>
              <p className="mt-2">You have the right to:</p>
              <ul className="mt-2 space-y-2">
                <li>• Know what data is collected</li>
                <li>• Request deletion</li>
                <li>• Opt out of data sharing (if applicable)</li>
                <li>• Non-discrimination for exercising rights</li>
              </ul>
            </div>

            <p>Requests can be submitted using the contact details below.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">9. App Permissions Disclosure</h2>
            <p>Crozroad may request access to:</p>
            <ul className="space-y-2">
              <li>• Location (core functionality)</li>
              <li>• Camera (uploads, verification, QR scanning)</li>
              <li>• Storage (media uploads)</li>
              <li>• Notifications (alerts and updates)</li>
            </ul>
            <p>Permissions are requested contextually and can be revoked at any time.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">10. Security Measures</h2>
            <p>We implement:</p>
            <ul className="space-y-2">
              <li>• Encryption in transit and at rest</li>
              <li>• Access controls</li>
              <li>• Secure infrastructure</li>
              <li>• Monitoring and logging</li>
              <li>• Regular security reviews</li>
            </ul>
            <p>Despite safeguards, no system is entirely secure.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">11. Children’s Privacy</h2>
            <p>
              Crozroad is not intended for users under 13 years of age (or higher age where required
              by law). We do not knowingly collect data from children.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">12. Third-Party Services & Links</h2>
            <p>
              We are not responsible for the privacy practices of third-party platforms linked
              through the App.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">13. Business Transfers</h2>
            <p>
              In the event of a merger, acquisition, or asset sale, user data may be transferred
              subject to confidentiality and legal protections.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">14. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of Crozroad after
              updates constitutes acceptance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">15. Grievance & Contact Information</h2>
            <p>
              <strong>Data Controller / Operator:</strong> {siteConfig.companyName}
            </p>
            <p>
              <strong>Contact Email:</strong> {siteConfig.supportEmail}
            </p>
            <p>
              <strong>Business Address:</strong> {siteConfig.legal.officeAddress}
            </p>
            <p>
              Grievances will be acknowledged and resolved within legally prescribed timelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">16. Acceptance</h2>
            <p>
              By using Crozroad, you confirm that you have read, understood, and agreed to this
              Privacy Policy.
            </p>
          </section>
          </section>
        </div>
      </Container>
    </main>
  </PageTransition>
)

export default PrivacyPolicyWeb
