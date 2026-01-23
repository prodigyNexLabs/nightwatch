import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Container from '../layout/Container'

const features = [
  {
    title: 'Real-time urban intelligence',
    description:
      'Blend sensor data, merchant signals, and civic feeds into a single time-based operating layer.',
  },
  {
    title: 'Access-first routing',
    description:
      'Coordinate arrivals, parking, and event ingress with predictive routing windows that shift by demand.',
  },
  {
    title: 'Vendor ecosystem clarity',
    description:
      'Surface street commerce density, category mix, and compliance availability in real time.',
  },
  {
    title: 'Programmable hosting',
    description:
      'Unlock hosting workflows for pop-ups and live events with guardrails and legal readiness.',
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
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Why Crozroad</p>
        <h2 className="text-3xl font-semibold text-slate-900">Operate the city as a living system</h2>
        <p className="mt-3 text-base text-slate-600">
          Crozroad synchronizes access across people, places, and time. We surface the signals that
          matter most when decisions need to be made fast.
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
