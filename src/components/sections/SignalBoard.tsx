import { motion } from 'framer-motion'
import { useFeaturedSignals } from '../../hooks/useFeaturedSignals'
import type { FeaturedSignal } from '../../services/api'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import Container from '../layout/Container'

const SignalBoard = () => {
  const { data } = useFeaturedSignals()
  const signals: FeaturedSignal[] = data ?? []

  return (
    <section className="bg-sand py-16">
      <Container className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Live Signals</p>
          <h2 className="text-3xl font-semibold text-slate-900">Time-based urban intelligence</h2>
          <p className="mt-3 text-sm text-slate-600">
            Curated signal snapshots show how access shifts across the city. Integrate with your own
            ops layer or follow Crozroad guidance in real time.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {signals.map((signal) => (
            <Card key={signal.id} className="space-y-4">
              <Badge>{signal.category}</Badge>
              <h3 className="text-lg font-semibold text-slate-900">{signal.title}</h3>
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                {signal.location}
              </div>
              <p className="text-sm text-slate-600">{signal.detail}</p>
              <p className="text-xs font-semibold text-slate-700">{signal.window}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SignalBoard
