import { motion } from 'framer-motion'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import Container from '../layout/Container'

const pillars = [
  {
    title: 'Spaces',
    badge: 'Core Locations',
    description:
      'Discover private parking spaces, open grounds, rooftops, halls, streetside zones, pop-up areas, and commercial spaces. Each space includes clear rules and capacity so you can decide fast.',
    highlights: ['Clear rules', 'Capacity guidance', 'Flexible access windows'],
  },
  {
    title: 'Live Events & Businesses',
    badge: 'Activated Spaces',
    description:
      'Events sit on top of spaces, while shops and vendors live inside them. See what is happening, who is operating, and how to join — all tied to the same real-world location.',
    highlights: ['Live & ticketed events', 'Vendor discovery', 'Contextual visibility'],
  },
  {
    title: 'Parking',
    badge: 'First-Class Access',
    description:
      'Find private, commercial, or event-linked parking with transparent details. Parking options stay connected to nearby spaces and events.',
    highlights: ['Nearby availability', 'Event-linked parking', 'Live access context'],
  },
  {
    title: 'Pitstops',
    badge: 'Quick Stops',
    description:
      'Short-stay zones for pickups, drop-offs, and quick access. Find the nearest pitstop with time limits, safety rules, and live status.',
    highlights: ['Pickup & drop-off', 'Short-stay rules', 'Live status updates'],
  },
]

const PillarsSection = () => (
  <section className="bg-white/70 py-16">
    <Container className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">App-first</p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Crozroad is currently app-first. Web showcases the pillars.
        </h2>
        <p className="mt-3 text-base text-slate-600">
          The App Store and Play Store apps power the live experience. The web experience explains
          how spaces, events, businesses, parking, and pitstops connect.
        </p>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-2">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="space-y-4">
            <Badge>{pillar.badge}</Badge>
            <h3 className="text-2xl font-semibold text-slate-900">{pillar.title}</h3>
            <p className="text-sm text-slate-600">{pillar.description}</p>
            <ul className="grid gap-2 text-xs uppercase tracking-[0.25em] text-slate-500">
              {pillar.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Container>
  </section>
)

export default PillarsSection
