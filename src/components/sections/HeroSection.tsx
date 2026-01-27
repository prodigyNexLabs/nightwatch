import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { siteConfig } from '../../config/site.config'
import Button from '../ui/Button'
import Container from '../layout/Container'

const contactPath = '/contact'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden bg-sand pb-16 pt-20">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Built by {siteConfig.companyName}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Spaces, live events, businesses, parking, and pitstops — in one view.
          </h1>
          <p className="text-lg text-slate-600">
            {siteConfig.appName} is app-first and maps how spaces power events, shops, and parking
            access. Use the web experience to understand the ecosystem and discover what is nearby.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => navigate(contactPath)}>
              Get the App
            </Button>
            <Button variant="ghost" size="lg" onClick={() => navigate(contactPath)}>
              Talk to the Team
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">App-first</p>
              <p>App Store and Play Store experiences power the live network.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Live context</p>
              <p>See spaces, events, businesses, parking, and pitstops nearby.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-soft">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Live Snapshot</p>
              <h2 className="text-2xl font-semibold text-slate-900">Access in one view</h2>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>• Nearby spaces with details, rules, and capacity</li>
                <li>• Events happening now with linked space context</li>
                <li>• Shops and vendors inside each space or event</li>
                <li>• Parking and pitstops connected to real-world demand</li>
              </ul>
              <Button variant="secondary" size="md" onClick={() => navigate(contactPath)}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="absolute -bottom-8 right-6 hidden rounded-3xl border border-white/60 bg-white/90 p-4 text-xs text-slate-600 shadow-soft md:block">
            <p className="font-semibold text-slate-900">+32% faster access</p>
            <p>Avg. reduction in curbside search time</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HeroSection
