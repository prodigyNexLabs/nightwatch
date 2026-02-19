import LegalPageShell from './LegalPageShell'

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-xl font-bold text-[#1B1B1B]">{children}</h2>
)
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-6 font-display text-lg font-bold text-[#1B1B1B]">{children}</h3>
)
const P = ({ children }: { children: React.ReactNode }) => <p className="mt-3">{children}</p>
const UL = ({ children }: { children: React.ReactNode }) => <ul className="mt-3 space-y-2 pl-5 list-disc">{children}</ul>

const RentingTermsPage = () => (
  <LegalPageShell title="Renting Terms" effectiveDate="February 19, 2026">
    <P>
      These Renting Terms ("Renting Terms") govern the listing, booking, and use of spaces, parking spots, and related rentable amenities offered through the Crozroad platform. These terms supplement the general Terms & Conditions and apply to both hosts (providers) and guests (renters).
    </P>

    <H2>1. Definitions</H2>
    <UL>
      <li><strong>"Host"</strong> means an individual or entity that lists a space, parking spot, or amenity for booking through Crozroad.</li>
      <li><strong>"Guest"</strong> means a user who books or reserves a space, parking spot, or amenity through the platform.</li>
      <li><strong>"Listing"</strong> means a published description of a space, parking spot, or amenity available for booking, including photos, pricing, availability, location, and rules.</li>
      <li><strong>"Booking"</strong> means a confirmed reservation between a guest and a host facilitated through Crozroad.</li>
      <li><strong>"Booking Period"</strong> means the time frame for which a booking is valid, as specified at the time of confirmation.</li>
    </UL>

    <H2>2. Host Obligations</H2>
    <H3>2.1 Listing Accuracy</H3>
    <UL>
      <li>Hosts must provide accurate, up-to-date, and truthful information in all listings, including descriptions, pricing, availability, amenities, and photos.</li>
      <li>Hosts must not misrepresent the location, condition, capacity, or features of a listed space or parking spot.</li>
      <li>Photos must accurately reflect the current state of the listed property.</li>
    </UL>

    <H3>2.2 Legal Compliance</H3>
    <UL>
      <li>Hosts are responsible for ensuring their listings comply with all applicable local, state, and national laws, including zoning, licensing, safety, and accessibility regulations.</li>
      <li>Hosts must maintain valid insurance coverage appropriate for the type of space being rented.</li>
      <li>Hosts must collect and remit applicable taxes as required by their jurisdiction.</li>
    </UL>

    <H3>2.3 Availability and Communication</H3>
    <UL>
      <li>Hosts must keep availability calendars current to avoid double-bookings or false availability.</li>
      <li>Hosts must respond to booking requests and guest communications within a reasonable timeframe.</li>
      <li>If a host must cancel a confirmed booking, they must notify the guest and Crozroad immediately and provide a full refund.</li>
    </UL>

    <H3>2.4 Property Standards</H3>
    <UL>
      <li>Listed spaces must be clean, safe, and in the condition described in the listing at the time of the booking.</li>
      <li>Parking spots must be accessible and available for the entire booking period.</li>
      <li>Hosts must provide any amenities advertised in the listing (Wi-Fi, power, equipment, etc.).</li>
    </UL>

    <H2>3. Guest Obligations</H2>
    <UL>
      <li>Guests must use rented spaces and parking spots only for the purposes specified in the listing and booking.</li>
      <li>Guests must treat all rented property with care and respect, leaving it in the condition found.</li>
      <li>Guests must comply with all house rules, community guidelines, and safety instructions provided by the host.</li>
      <li>Guests must not exceed the stated capacity or bring unauthorized vehicles to parking reservations.</li>
      <li>Guests are responsible for any damage caused during the booking period beyond normal wear and tear.</li>
      <li>Guests must vacate the space promptly at the end of the booking period.</li>
    </UL>

    <H2>4. Booking Process</H2>
    <H3>4.1 Reservation</H3>
    <P>
      Bookings are initiated through the Crozroad app. A booking is confirmed when the guest completes payment and receives a confirmation notification. Until confirmed, no booking obligation exists.
    </P>
    <H3>4.2 Pricing</H3>
    <UL>
      <li>Prices are set by hosts and displayed to guests before booking.</li>
      <li>The total price includes the host's rate, applicable service fees, and taxes.</li>
      <li>Hosts may offer dynamic pricing (peak/off-peak) but must clearly display rates before confirmation.</li>
      <li>Crozroad reserves the right to charge platform service fees on each transaction.</li>
    </UL>
    <H3>4.3 Modifications</H3>
    <P>
      Booking modifications (date changes, duration extensions) are subject to host approval and availability. Price adjustments for modifications will be calculated at the time of the change request.
    </P>

    <H2>5. Cancellation Policy</H2>
    <H3>5.1 Host Cancellation Policies</H3>
    <P>Hosts may select from the following cancellation tiers when creating a listing:</P>
    <UL>
      <li><strong>Flexible:</strong> Full refund if cancelled at least 24 hours before the booking start time.</li>
      <li><strong>Moderate:</strong> Full refund if cancelled at least 5 days before the booking start time; 50% refund within 5 days.</li>
      <li><strong>Strict:</strong> 50% refund if cancelled at least 7 days before the booking start time; no refund within 7 days.</li>
    </UL>
    <P>The applicable cancellation policy is displayed before booking confirmation.</P>

    <H3>5.2 Host-Initiated Cancellations</H3>
    <P>
      If a host cancels a confirmed booking, the guest receives a full refund. Repeated host cancellations may result in listing suspension, reduced visibility, or account restrictions.
    </P>

    <H3>5.3 Platform-Initiated Cancellations</H3>
    <P>
      Crozroad may cancel bookings in cases of Terms violations, safety concerns, fraud, or force majeure events. Affected guests will receive a full refund.
    </P>

    <H2>6. Disputes and Damage Claims</H2>
    <H3>6.1 Dispute Process</H3>
    <UL>
      <li>Disputes should first be communicated directly between host and guest through the platform's messaging system.</li>
      <li>If unresolved within 48 hours, either party may escalate to Crozroad support at support@crozroad.com.</li>
      <li>Crozroad will review evidence (photos, messages, booking details) and make a determination within 14 business days.</li>
    </UL>

    <H3>6.2 Damage Claims</H3>
    <UL>
      <li>Hosts must report damage within 48 hours of the booking end time with supporting evidence (photos, repair estimates).</li>
      <li>Guests will be notified and given 72 hours to respond.</li>
      <li>Crozroad may mediate damage claims but is not liable for damages between hosts and guests.</li>
    </UL>

    <H2>7. Insurance and Liability</H2>
    <UL>
      <li>Crozroad is a platform facilitating connections between hosts and guests. We are not a property management company, insurer, or landlord.</li>
      <li>Hosts are strongly encouraged to maintain appropriate property and liability insurance.</li>
      <li>Guests are responsible for their personal belongings and any personal insurance needs.</li>
      <li>Neither party should rely on Crozroad as a substitute for adequate insurance coverage.</li>
    </UL>

    <H2>8. Prohibited Uses</H2>
    <P>Rented spaces and parking spots may NOT be used for:</P>
    <UL>
      <li>Illegal activities of any kind.</li>
      <li>Activities that pose safety risks to the host, neighboring properties, or the community.</li>
      <li>Sub-letting or transferring the booking to another party without host consent.</li>
      <li>Exceeding the stated capacity or intended purpose of the listing.</li>
      <li>Storing hazardous materials, weapons, or controlled substances.</li>
    </UL>

    <H2>9. Reviews and Ratings</H2>
    <UL>
      <li>Both hosts and guests may leave reviews after a completed booking.</li>
      <li>Reviews must be honest, factual, and relevant to the booking experience.</li>
      <li>Retaliatory, fraudulent, or defamatory reviews may be removed at Crozroad's discretion.</li>
      <li>Crozroad does not edit or modify review content except to remove Terms violations.</li>
    </UL>

    <H2>10. Force Majeure</H2>
    <P>
      Neither hosts, guests, nor Crozroad shall be liable for failures or delays caused by events beyond reasonable control, including natural disasters, pandemics, government actions, civil unrest, or infrastructure failures. In such cases, affected bookings will be cancelled with full refunds.
    </P>

    <H2>11. Relationship to Other Terms</H2>
    <P>
      These Renting Terms operate alongside our general Terms & Conditions, Privacy Policy, and User Terms. In the event of conflict, the more specific provision (these Renting Terms) takes precedence for booking-related matters.
    </P>

    <H2>12. Contact</H2>
    <P>For questions about renting, bookings, or disputes:</P>
    <UL>
      <li><strong>Host support:</strong> host@crozroad.com</li>
      <li><strong>General support:</strong> support@crozroad.com</li>
      <li><strong>Legal inquiries:</strong> legal@crozroad.com</li>
    </UL>
  </LegalPageShell>
)

export default RentingTermsPage
