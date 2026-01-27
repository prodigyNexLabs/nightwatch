import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Container from '../layout/Container'

const features = [
  {
    title: 'Spaces are the foundation',
    description:
      'Explore private parking, open grounds, rooftops, halls, pop-up zones, or commercial spaces with clear rules and capacity.',
  },
  {
    title: 'Events activate spaces',
    description:
      'See live, ticketed, or community events surfaced inside nearby spaces and driving discovery.',
  },
  {
    title: 'Shops live inside spaces',
    description:
      'Businesses are anchored to the space or event where they operate, making discovery contextual and relevant.',
  },
  {
    title: 'Parking enables access',
    description:
      'Find private, commercial, or event-linked parking connected to the places that matter.',
  },
]

const FeatureGrid = () => (
  <section className="bg-white/70 py-16">
    <Container className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">The Model</p>
        <h2 className="text-3xl font-semibold text-slate-900">One system for spaces, events, shops, and parking</h2>
        <p className="mt-3 text-base text-slate-600">
          Crozroad keeps the mental model simple so discovery is fast and intuitive.
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title} className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
            <p className="text-sm text-slate-600">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Container>
  </section>
)

export default FeatureGrid
