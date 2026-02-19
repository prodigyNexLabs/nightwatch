import LegalPageShell from './LegalPageShell'

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-xl font-bold text-[#1B1B1B]">{children}</h2>
)
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-6 font-display text-lg font-bold text-[#1B1B1B]">{children}</h3>
)
const P = ({ children }: { children: React.ReactNode }) => <p className="mt-3">{children}</p>
const UL = ({ children }: { children: React.ReactNode }) => <ul className="mt-3 space-y-2 pl-5 list-disc">{children}</ul>

const PrivacyPolicyPage = () => (
  <LegalPageShell title="Privacy Policy" effectiveDate="February 19, 2026">
    <P>
      This Privacy Policy explains how Crozroad ("we", "us", "our", "the Platform") collects, uses, shares, and protects personal information when you use our mobile applications (iOS and Android), website, APIs, and related services (collectively, "the Services"). This policy applies to all users, hosts, and visitors.
    </P>
    <P>
      By using Crozroad, you agree to the collection and use of information as described in this policy. If you do not agree, please do not use the Services.
    </P>

    <H2>1. Information We Collect</H2>

    <H3>1.1 Information You Provide</H3>
    <UL>
      <li><strong>Account information:</strong> Name, email address, phone number, password, and profile details when you register.</li>
      <li><strong>Host information:</strong> Business name, registration details, address, support contact, verification documents, and operational metadata.</li>
      <li><strong>Listing data:</strong> Descriptions, pricing, availability, photos, location coordinates, amenity tags, and status settings.</li>
      <li><strong>Communication data:</strong> Messages, support inquiries, feedback, and any content you submit through forms.</li>
      <li><strong>Payment information:</strong> Billing details processed through certified third-party payment processors (we do not store full card numbers).</li>
      <li><strong>Exchange data:</strong> Buy, sell, and swap listing content, pickup details, and transaction confirmations.</li>
    </UL>

    <H3>1.2 Information Collected Automatically</H3>
    <UL>
      <li><strong>Device information:</strong> Device model, operating system and version, unique device identifiers (IDFV, Android ID), language, and timezone.</li>
      <li><strong>Location data:</strong> Approximate and precise location (when you grant permission) to enable proximity-based discovery of spaces, parking, activities, and services.</li>
      <li><strong>Usage data:</strong> Features used, pages viewed, tap patterns, session duration, search queries, and filter selections.</li>
      <li><strong>Network data:</strong> IP address, browser type, referring URLs, and connection type.</li>
      <li><strong>Log data:</strong> Timestamps, error reports, crash logs, and API call metadata (including gRPC service interactions).</li>
    </UL>

    <H3>1.3 Information from Third Parties</H3>
    <UL>
      <li><strong>Authentication providers:</strong> If you sign in via Apple, Google, or other identity providers, we receive basic profile data as authorized by you.</li>
      <li><strong>Map and location services:</strong> Geocoding data from mapping providers to resolve addresses and display nearby results.</li>
      <li><strong>Analytics services:</strong> Aggregated performance and crash data from platform analytics tools.</li>
    </UL>

    <H2>2. How We Use Your Information</H2>
    <UL>
      <li><strong>Service delivery:</strong> Operate and personalize Spaces, Parking, Activity, Cluster, Neighbourhood, Pitstops, Exchange, and host dashboards.</li>
      <li><strong>Location-based features:</strong> Provide proximity-based search, discovery, and navigation across all modules.</li>
      <li><strong>Communication:</strong> Send service notifications, booking confirmations, host alerts, and support responses.</li>
      <li><strong>Safety and security:</strong> Detect and prevent fraud, abuse, unauthorized access, and platform misuse.</li>
      <li><strong>Improvement:</strong> Analyze usage patterns to improve features, performance, and user experience.</li>
      <li><strong>Legal compliance:</strong> Meet regulatory requirements, respond to lawful requests, and enforce our terms.</li>
      <li><strong>Marketing (with consent):</strong> Send promotional content about new features or services where you have opted in.</li>
    </UL>

    <H2>3. Legal Bases for Processing (GDPR)</H2>
    <P>Where applicable under the General Data Protection Regulation (GDPR), we process personal data based on:</P>
    <UL>
      <li><strong>Contract performance:</strong> Data necessary to provide the Services you requested (account creation, bookings, host operations).</li>
      <li><strong>Legitimate interests:</strong> Service improvement, fraud prevention, security monitoring, and analytics, balanced against your rights.</li>
      <li><strong>Consent:</strong> Marketing communications, optional location tracking, and non-essential cookies.</li>
      <li><strong>Legal obligation:</strong> Tax records, regulatory compliance, and lawful authority requests.</li>
    </UL>

    <H2>4. Data Sharing and Disclosure</H2>
    <P>We do not sell your personal information. We may share data in these limited situations:</P>
    <UL>
      <li><strong>Service providers:</strong> Cloud infrastructure (hosting, storage, CDN), payment processors, analytics platforms, email delivery, and customer support tools, all bound by data processing agreements.</li>
      <li><strong>Other users:</strong> Information you make public through listings, host profiles, reviews, or exchange posts is visible to other platform users.</li>
      <li><strong>Host-guest interactions:</strong> Booking details are shared between host and guest to facilitate the reservation.</li>
      <li><strong>Legal requirements:</strong> Court orders, subpoenas, regulatory requests, or where necessary to protect rights, safety, or property.</li>
      <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or restructuring, user data may transfer to the successor entity under equivalent protections.</li>
    </UL>

    <H2>5. International Data Transfers</H2>
    <P>
      Crozroad operates globally. Your data may be processed in the United States or other jurisdictions where our infrastructure providers operate. We ensure appropriate safeguards through Standard Contractual Clauses (SCCs), adequacy decisions, or equivalent measures as required by applicable data protection laws.
    </P>

    <H2>6. Data Retention</H2>
    <UL>
      <li><strong>Active accounts:</strong> Data is retained for the duration of your account and active use of the Services.</li>
      <li><strong>After account deletion:</strong> Personal data is deleted or anonymized within 90 days, except where retention is required by law (e.g., tax records, dispute resolution).</li>
      <li><strong>Logs and analytics:</strong> Technical logs are retained for up to 12 months for security and performance purposes, then purged.</li>
      <li><strong>Backup systems:</strong> Encrypted backups may retain data for up to 30 days after deletion before being purged from rotation.</li>
    </UL>

    <H2>7. Security Measures</H2>
    <P>We implement industry-standard security practices, including:</P>
    <UL>
      <li>TLS 1.2+ encryption for all data in transit (including gRPC API calls and REST endpoints).</li>
      <li>AES-256 encryption for data at rest in databases and storage systems.</li>
      <li>Role-based access control (RBAC) to limit internal access to personal data.</li>
      <li>Multi-factor authentication for administrative accounts.</li>
      <li>Automated vulnerability scanning and penetration testing.</li>
      <li>Incident response procedures with breach notification within 72 hours per GDPR requirements.</li>
      <li>Secure API authentication using OAuth 2.0 and JWT tokens with short-lived expiry.</li>
      <li>DDoS protection and rate limiting at the network edge.</li>
    </UL>

    <H2>8. Your Rights</H2>
    <P>Depending on your jurisdiction, you may have the following rights:</P>
    <UL>
      <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
      <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
      <li><strong>Deletion:</strong> Request deletion of your personal data ("Right to be Forgotten").</li>
      <li><strong>Portability:</strong> Receive your data in a structured, commonly-used, machine-readable format.</li>
      <li><strong>Restriction:</strong> Request restriction of certain processing activities.</li>
      <li><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
      <li><strong>Withdraw consent:</strong> Withdraw previously given consent at any time without affecting prior lawful processing.</li>
      <li><strong>Lodge a complaint:</strong> File a complaint with your local data protection authority.</li>
    </UL>

    <H3>8.1 For California Residents (CCPA/CPRA)</H3>
    <UL>
      <li>Right to know what personal information is collected, used, and disclosed.</li>
      <li>Right to delete personal information.</li>
      <li>Right to opt out of the sale of personal information (we do not sell your data).</li>
      <li>Right to non-discrimination for exercising privacy rights.</li>
      <li>Right to correct inaccurate personal information.</li>
      <li>Right to limit use of sensitive personal information.</li>
    </UL>

    <H3>8.2 How to Exercise Your Rights</H3>
    <P>
      Submit requests to <strong>legal@crozroad.com</strong> with subject line "Privacy Rights Request". We will verify your identity and respond within 30 days (or 45 days for complex requests). You may also manage location permissions, notification preferences, and data sharing options directly in the app settings.
    </P>

    <H2>9. Children's Privacy</H2>
    <P>
      Crozroad is not directed at children under 16 (or 13 where permitted by local law). We do not knowingly collect personal data from children. If we discover we have collected data from a child, we will delete it promptly. Parents or guardians who believe their child has provided data to us should contact legal@crozroad.com.
    </P>

    <H2>10. Cookies and Tracking Technologies</H2>
    <UL>
      <li><strong>Essential cookies:</strong> Required for authentication, session management, and security. Cannot be disabled.</li>
      <li><strong>Analytics cookies:</strong> Help us understand usage patterns and improve the Services. Can be opted out.</li>
      <li><strong>Performance cookies:</strong> Monitor load times and error rates for reliability improvements.</li>
    </UL>
    <P>
      The mobile apps use device-level analytics SDKs that respect your operating system privacy settings (iOS App Tracking Transparency, Android privacy controls).
    </P>

    <H2>11. Third-Party Links and Services</H2>
    <P>
      The Services may contain links to third-party websites, maps, or payment providers. We are not responsible for the privacy practices of these external services. We encourage you to review their policies independently.
    </P>

    <H2>12. API and Developer Data (gRPC / REST)</H2>
    <P>
      Crozroad APIs (REST and gRPC) transmit data over TLS-encrypted channels. API authentication requires valid OAuth 2.0 tokens. Rate limiting and request logging are applied to prevent abuse. API consumers must comply with this Privacy Policy and may not use collected data for purposes outside the scope of Crozroad Services.
    </P>

    <H2>13. Changes to This Policy</H2>
    <P>
      We may update this Privacy Policy periodically. Material changes will be communicated through in-app notifications, email, or prominent website notices at least 30 days before taking effect. Continued use of the Services after changes constitutes acceptance.
    </P>

    <H2>14. Contact Us</H2>
    <P>For privacy inquiries, data requests, or complaints:</P>
    <UL>
      <li><strong>Privacy / Legal:</strong> legal@crozroad.com</li>
      <li><strong>General support:</strong> support@crozroad.com</li>
      <li><strong>Address:</strong> Suite 210, Market District, Wilmington, Delaware, USA</li>
      <li><strong>Parent company:</strong> Prodigy</li>
    </UL>
  </LegalPageShell>
)

export default PrivacyPolicyPage
