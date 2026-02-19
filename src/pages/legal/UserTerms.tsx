import LegalPageShell from './LegalPageShell'

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-xl font-bold text-[#1B1B1B]">{children}</h2>
)
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-6 font-display text-lg font-bold text-[#1B1B1B]">{children}</h3>
)
const P = ({ children }: { children: React.ReactNode }) => <p className="mt-3">{children}</p>
const UL = ({ children }: { children: React.ReactNode }) => <ul className="mt-3 space-y-2 pl-5 list-disc">{children}</ul>

const UserTermsPage = () => (
  <LegalPageShell title="User Terms of Service" effectiveDate="February 19, 2026">
    <P>
      These User Terms of Service ("User Terms") establish the agreement between you and Crozroad for your use of the Crozroad mobile applications (iOS and Android), website, and related services. These terms focus on your rights and responsibilities as an end user and supplement the general Terms & Conditions.
    </P>

    <H2>1. Acceptance</H2>
    <P>
      By downloading, installing, or using the Crozroad app, you agree to these User Terms, the Terms & Conditions, and the Privacy Policy. If you do not agree, uninstall the app and discontinue use of the Services.
    </P>

    <H2>2. License Grant</H2>
    <H3>2.1 Limited License</H3>
    <P>
      We grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Crozroad application on devices you own or control, solely for personal, non-commercial use in accordance with these User Terms.
    </P>
    <H3>2.2 Restrictions</H3>
    <P>You may NOT:</P>
    <UL>
      <li>Copy, modify, adapt, translate, or create derivative works from the app or its content.</li>
      <li>Reverse-engineer, decompile, disassemble, or otherwise attempt to extract the source code.</li>
      <li>Remove, alter, or obscure any copyright, trademark, or proprietary notices.</li>
      <li>Distribute, sublicense, lease, rent, lend, or transfer the app to any third party.</li>
      <li>Use the app for any commercial purpose without written authorization from Crozroad.</li>
      <li>Use the app in any manner that could damage, disable, or impair the Services.</li>
    </UL>

    <H2>3. Account Security</H2>
    <UL>
      <li>You must create a strong, unique password and keep your credentials confidential.</li>
      <li>Enable two-factor authentication (2FA) when available for enhanced account security.</li>
      <li>Never share your login credentials or allow others to access your account.</li>
      <li>Immediately report any unauthorized access or suspicious activity to support@crozroad.com.</li>
      <li>You are liable for all actions taken through your account, whether or not authorized by you.</li>
    </UL>

    <H2>4. Data and Privacy</H2>
    <H3>4.1 Data Collection Consent</H3>
    <P>
      By using the app, you consent to the collection, processing, and storage of data as described in our Privacy Policy. This includes, but is not limited to:
    </P>
    <UL>
      <li>Device information (model, OS version, unique identifiers).</li>
      <li>Location data (when enabled) for proximity-based features.</li>
      <li>Usage analytics to improve service quality and user experience.</li>
      <li>Crash reports and performance logs for reliability improvements.</li>
    </UL>

    <H3>4.2 Permissions</H3>
    <P>The app may request the following device permissions:</P>
    <UL>
      <li><strong>Location:</strong> Required for map-based discovery, nearby search, and navigation features. You can revoke this at any time through device settings.</li>
      <li><strong>Camera:</strong> Used for taking photos for listings, exchange items, or profile pictures. Not accessed without your action.</li>
      <li><strong>Notifications:</strong> Used for booking confirmations, messages, and service alerts. You can manage preferences in app settings.</li>
      <li><strong>Storage / Photos:</strong> Used when uploading images for listings or exchange posts.</li>
    </UL>
    <P>
      All permissions are opt-in and can be managed through your device's operating system settings at any time.
    </P>

    <H3>4.3 Data Portability</H3>
    <P>
      You may request a copy of your personal data or request deletion of your account and associated data in accordance with the Privacy Policy and applicable data protection laws.
    </P>

    <H2>5. User Content</H2>
    <H3>5.1 Content You Create</H3>
    <P>
      You may create content through listings, reviews, exchange posts, messages, and profile information. You are solely responsible for the accuracy, legality, and appropriateness of all content you create.
    </P>
    <H3>5.2 Content Standards</H3>
    <P>User content must NOT:</P>
    <UL>
      <li>Contain false, misleading, or deceptive information.</li>
      <li>Include hate speech, discrimination, harassment, threats, or graphic violence.</li>
      <li>Infringe on any third party's intellectual property, privacy, or other rights.</li>
      <li>Contain spam, advertisements, or unsolicited commercial content.</li>
      <li>Include personal information of others without their consent.</li>
      <li>Violate any applicable law or regulation.</li>
    </UL>
    <H3>5.3 Content Moderation</H3>
    <P>
      Crozroad reserves the right to review, remove, or restrict content that violates these User Terms or the general Terms & Conditions. Repeated violations may result in account suspension or termination.
    </P>

    <H2>6. Conduct and Community Standards</H2>
    <UL>
      <li>Treat all users, hosts, and community members with respect and courtesy.</li>
      <li>Communicate honestly and in good faith in all interactions through the platform.</li>
      <li>Honor confirmed bookings and commitments unless cancelled through the proper process.</li>
      <li>Report safety concerns, Terms violations, or suspicious behavior through the app's reporting features.</li>
      <li>Comply with all applicable laws in your jurisdiction when using the Services.</li>
    </UL>

    <H2>7. In-App Purchases and Subscriptions</H2>
    <UL>
      <li>Certain features may require payment through Apple App Store or Google Play Store in-app purchase mechanisms.</li>
      <li>Subscription terms, pricing, and renewal conditions are displayed before purchase.</li>
      <li>Subscriptions auto-renew unless cancelled through your device's subscription management settings before the renewal date.</li>
      <li>Refund requests for in-app purchases should be directed to the respective app store per their refund policies.</li>
      <li>Crozroad is not responsible for billing disputes handled by Apple or Google.</li>
    </UL>

    <H2>8. Third-Party Services</H2>
    <P>
      The app may integrate or link to third-party services, including maps, payment processors, and authentication providers. Your use of these services is subject to their separate terms and privacy policies. Crozroad is not responsible for the availability, accuracy, or security of third-party services.
    </P>

    <H2>9. Updates and Changes</H2>
    <UL>
      <li>We may release updates to the app that include new features, bug fixes, performance improvements, or security patches.</li>
      <li>Some updates may be required for continued use of the Services.</li>
      <li>We recommend enabling automatic updates to ensure you always have the latest version with the most current security protections.</li>
      <li>Features may be added, modified, or removed at our discretion with reasonable notice for material changes.</li>
    </UL>

    <H2>10. Suspension and Termination</H2>
    <H3>10.1 Your Rights</H3>
    <P>
      You may stop using the app and delete your account at any time. Account deletion can be initiated through app settings or by contacting support@crozroad.com.
    </P>
    <H3>10.2 Our Rights</H3>
    <P>We may suspend or terminate your account if you:</P>
    <UL>
      <li>Violate these User Terms, the Terms & Conditions, or the Privacy Policy.</li>
      <li>Engage in fraudulent, abusive, or harmful behavior.</li>
      <li>Create safety risks for other users or the platform.</li>
      <li>Fail to maintain accurate account information.</li>
      <li>Remain inactive for an extended period (we will notify you before deletion for inactivity).</li>
    </UL>

    <H2>11. Apple App Store Additional Terms</H2>
    <P>If you downloaded Crozroad from the Apple App Store:</P>
    <UL>
      <li>These User Terms are between you and Crozroad only, not Apple Inc.</li>
      <li>Apple has no obligation to furnish any maintenance or support services.</li>
      <li>In the event of the app's failure to conform to any warranty, you may notify Apple for a refund of the purchase price (if any). Apple has no other warranty obligation.</li>
      <li>Apple is not responsible for addressing any claims related to the app, including product liability, legal compliance, or intellectual property claims.</li>
      <li>Apple and its subsidiaries are third-party beneficiaries of these User Terms.</li>
    </UL>

    <H2>12. Google Play Store Additional Terms</H2>
    <P>If you downloaded Crozroad from Google Play:</P>
    <UL>
      <li>These User Terms are between you and Crozroad only, not Google LLC.</li>
      <li>Google is not responsible for the app or its content.</li>
      <li>Google has no obligation to provide support or handle warranty claims.</li>
      <li>You agree to comply with Google Play's Terms of Service in addition to these User Terms.</li>
    </UL>

    <H2>13. Accessibility</H2>
    <P>
      Crozroad is committed to making the app accessible to all users. We follow platform accessibility guidelines (Apple Accessibility, Android Accessibility) and support assistive technologies including VoiceOver, TalkBack, and dynamic text sizing. If you encounter accessibility barriers, contact support@crozroad.com.
    </P>

    <H2>14. Open Source Notices</H2>
    <P>
      The Crozroad app may include open-source software components. Notices and license texts for these components are available within the app settings under "Open Source Licenses" or upon request to legal@crozroad.com.
    </P>

    <H2>15. Audit and Compliance</H2>
    <P>
      We maintain audit logs of significant account actions (login, bookings, data changes) for security and compliance purposes. These logs are retained in accordance with our Privacy Policy and are accessible to you upon request through our data access process.
    </P>

    <H2>16. Warranty Disclaimer</H2>
    <P>
      THE APP AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. CROZROAD DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
    </P>

    <H2>17. Contact</H2>
    <P>For questions about these User Terms:</P>
    <UL>
      <li><strong>Email:</strong> legal@crozroad.com</li>
      <li><strong>Support:</strong> support@crozroad.com</li>
      <li><strong>Address:</strong> Suite 210, Market District, Wilmington, Delaware, USA</li>
    </UL>
  </LegalPageShell>
)

export default UserTermsPage
