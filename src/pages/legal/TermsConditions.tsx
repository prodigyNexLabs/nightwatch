import LegalPageShell from './LegalPageShell'

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-xl font-bold text-[#1B1B1B]">{children}</h2>
)
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-6 font-display text-lg font-bold text-[#1B1B1B]">{children}</h3>
)
const P = ({ children }: { children: React.ReactNode }) => <p className="mt-3">{children}</p>
const UL = ({ children }: { children: React.ReactNode }) => <ul className="mt-3 space-y-2 pl-5 list-disc">{children}</ul>

const TermsConditionsPage = () => (
  <LegalPageShell title="Terms & Conditions" effectiveDate="February 19, 2026">
    <P>
      These Terms & Conditions ("Terms") govern your access to and use of the Crozroad platform, including our mobile applications (iOS and Android), website, APIs, and all related services (collectively, "the Services"). By accessing or using the Services, you agree to be bound by these Terms.
    </P>
    <P>
      "Crozroad", "we", "us", or "our" refers to the Crozroad platform operated by Prodigy. "You" or "User" refers to any individual or entity accessing or using the Services.
    </P>

    <H2>1. Eligibility</H2>
    <UL>
      <li>You must be at least 18 years old (or the age of majority in your jurisdiction) to create an account and use the Services.</li>
      <li>By registering, you represent that all information you provide is accurate, current, and complete.</li>
      <li>Accounts are personal and non-transferable. You are responsible for maintaining the confidentiality of your credentials.</li>
      <li>Organizations may register host accounts; the individual creating the account warrants authority to bind the organization.</li>
    </UL>

    <H2>2. The Services</H2>
    <P>
      Crozroad provides a multi-module platform connecting users with local spaces, parking, community activities, neighborhoods, clusters, fuel pitstops, peer-to-peer exchange, and hosting services. The platform is available through native mobile applications (iOS and Android) and a web presence.
    </P>

    <H3>2.1 Platform Modules</H3>
    <UL>
      <li><strong>Spaces:</strong> Discover and book venues, co-working spaces, event halls, and unique locations.</li>
      <li><strong>Parking:</strong> Reserve parking spots and manage vehicle parking at participating locations.</li>
      <li><strong>Activity:</strong> Browse events, meetups, community activities, and local happenings.</li>
      <li><strong>Cluster:</strong> Join interest-based communities organized around shared activities and locations.</li>
      <li><strong>Neighbourhood:</strong> Explore hyperlocal services, businesses, and community infrastructure.</li>
      <li><strong>Pitstops:</strong> Locate fuel stations, EV charging points, and rest areas along routes.</li>
      <li><strong>Exchange:</strong> Buy, sell, and swap goods within your local community.</li>
      <li><strong>Host:</strong> List, manage, and monitor spaces, parking, and services through the host dashboard.</li>
    </UL>

    <H3>2.2 Service Availability</H3>
    <P>
      We strive for high availability but do not guarantee uninterrupted access. The Services may be temporarily unavailable due to maintenance, updates, infrastructure issues, or events beyond our control. We reserve the right to modify, suspend, or discontinue features with reasonable notice.
    </P>

    <H2>3. User Accounts</H2>
    <UL>
      <li>You must provide a valid email address and create a secure password to register.</li>
      <li>You are solely responsible for all activity under your account.</li>
      <li>Notify us immediately at support@crozroad.com if you suspect unauthorized access.</li>
      <li>We may suspend or terminate accounts for violations of these Terms, inactivity, or security concerns.</li>
    </UL>

    <H2>4. Acceptable Use</H2>
    <P>You agree NOT to:</P>
    <UL>
      <li>Use the Services for any unlawful, fraudulent, or deceptive purpose.</li>
      <li>Post misleading, inaccurate, or harmful content in listings, reviews, exchange posts, or communications.</li>
      <li>Harass, threaten, or discriminate against other users or hosts.</li>
      <li>Attempt to reverse-engineer, decompile, or access unauthorized areas of the platform or APIs.</li>
      <li>Use automated bots, scrapers, or crawlers to access the Services without written permission.</li>
      <li>Circumvent security measures, rate limits, or access controls.</li>
      <li>Upload malicious code, malware, or content that could compromise platform integrity.</li>
      <li>Create multiple accounts for fraudulent purposes or to evade suspension.</li>
      <li>Use the Exchange module for prohibited items (weapons, controlled substances, stolen goods, counterfeit products).</li>
      <li>Interfere with other users' experience or the proper functioning of the platform.</li>
    </UL>

    <H2>5. Intellectual Property</H2>
    <H3>5.1 Our Property</H3>
    <P>
      All intellectual property in the Services, including but not limited to the Crozroad name, logo, design, software, APIs, documentation, and content, is owned by Prodigy or its licensors. You may not copy, modify, distribute, or create derivative works without our express written consent.
    </P>
    <H3>5.2 Your Content</H3>
    <P>
      You retain ownership of content you create (listings, reviews, photos, exchange posts). By posting content, you grant Crozroad a worldwide, non-exclusive, royalty-free, sublicensable license to use, display, reproduce, and distribute your content within the Services for operational purposes. You represent that you have the right to share any content you upload.
    </P>

    <H2>6. Bookings and Transactions</H2>
    <UL>
      <li>Bookings are agreements between you and the host. Crozroad facilitates the connection but is not a party to the booking contract.</li>
      <li>Prices are set by hosts and displayed inclusive of applicable taxes and fees where required.</li>
      <li>Cancellation policies are set by individual hosts and displayed before booking confirmation.</li>
      <li>Crozroad may charge service fees for facilitating bookings and transactions.</li>
      <li>Exchange transactions are peer-to-peer; Crozroad does not guarantee the condition or legitimacy of exchanged items.</li>
    </UL>

    <H2>7. Payments</H2>
    <P>
      Payments are processed through certified third-party payment processors. By making a payment, you agree to the respective processor's terms. Crozroad does not store full payment card details. All financial transactions are encrypted in transit and at rest.
    </P>

    <H2>8. Limitation of Liability</H2>
    <P>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</P>
    <UL>
      <li>Crozroad provides the Services "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied.</li>
      <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.</li>
      <li>Our total aggregate liability shall not exceed the amount you paid to Crozroad in the 12 months preceding the claim.</li>
      <li>We are not responsible for the actions, content, or policies of hosts, guests, or third-party service providers.</li>
      <li>We do not guarantee the accuracy, safety, or quality of any listed space, parking spot, activity, exchange item, or service.</li>
    </UL>

    <H2>9. Indemnification</H2>
    <P>
      You agree to indemnify, defend, and hold harmless Crozroad, Prodigy, and their officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
    </P>

    <H2>10. Dispute Resolution</H2>
    <H3>10.1 Informal Resolution</H3>
    <P>
      Before initiating formal proceedings, you agree to attempt to resolve disputes informally by contacting support@crozroad.com. We will work in good faith to resolve issues within 30 days.
    </P>
    <H3>10.2 Arbitration</H3>
    <P>
      If informal resolution fails, disputes shall be resolved through binding arbitration administered under the rules of the American Arbitration Association (AAA). Arbitration shall take place in Wilmington, Delaware, USA, or remotely at the claimant's election. Class action waivers apply to the maximum extent permitted by law.
    </P>
    <H3>10.3 Exceptions</H3>
    <P>
      Either party may seek injunctive relief in court for intellectual property infringement, data breaches, or platform security threats without first pursuing arbitration.
    </P>

    <H2>11. Governing Law</H2>
    <P>
      These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict-of-law principles.
    </P>

    <H2>12. Termination</H2>
    <UL>
      <li>You may deactivate your account at any time through the app or by contacting support@crozroad.com.</li>
      <li>We may suspend or terminate your access for violation of these Terms, with or without notice, depending on severity.</li>
      <li>Upon termination, your right to use the Services ceases immediately. Provisions that by nature should survive (liability, indemnification, IP, dispute resolution) remain in effect.</li>
      <li>Data retention after account termination is governed by our Privacy Policy.</li>
    </UL>

    <H2>13. API and Developer Terms</H2>
    <P>
      Use of Crozroad APIs (REST and gRPC) is subject to these Terms. API consumers must authenticate using valid credentials, respect rate limits, and may not use API access to scrape, replicate, or compete with the Services. API access may be revoked at any time for Terms violations.
    </P>

    <H2>14. App Store Compliance</H2>
    <P>
      If you access Crozroad via the Apple App Store or Google Play Store, the following additional terms apply:
    </P>
    <UL>
      <li>Apple Inc. and Google LLC are not parties to these Terms and have no obligation to provide maintenance or support for the app.</li>
      <li>Any claims related to the app are the responsibility of Crozroad, not the app store provider.</li>
      <li>You represent that you are not located in a country subject to a U.S. government embargo or designated as a "terrorist supporting" country.</li>
      <li>Apple and Google are third-party beneficiaries of these Terms and may enforce them against you.</li>
    </UL>

    <H2>15. Modifications to Terms</H2>
    <P>
      We may update these Terms from time to time. Material changes will be communicated via in-app notification, email, or website banner at least 30 days before taking effect. Continued use after changes take effect constitutes acceptance.
    </P>

    <H2>16. Severability</H2>
    <P>
      If any provision of these Terms is found unenforceable, the remaining provisions continue in full force. The unenforceable provision will be modified to the minimum extent necessary to become enforceable while preserving its intent.
    </P>

    <H2>17. Entire Agreement</H2>
    <P>
      These Terms, together with the Privacy Policy, Renting Terms, and User Terms, constitute the entire agreement between you and Crozroad regarding the Services, superseding all prior agreements or understandings.
    </P>

    <H2>18. Contact</H2>
    <P>For questions about these Terms:</P>
    <UL>
      <li><strong>Email:</strong> legal@crozroad.com</li>
      <li><strong>Support:</strong> support@crozroad.com</li>
      <li><strong>Address:</strong> Suite 210, Market District, Wilmington, Delaware, USA</li>
    </UL>
  </LegalPageShell>
)

export default TermsConditionsPage
