import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { siteConfig } from '../../config/site.config'
import Button from '../ui/Button'
import Container from '../layout/Container'

const brochurePath = '/brochure'

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
            {siteConfig.appName} is the {siteConfig.tagline}
          </h1>
          <p className="text-lg text-slate-600">{siteConfig.summary}</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Request Early Access</Button>
            <Button variant="ghost" size="lg" onClick={() => navigate(brochurePath)}>
              View Brochure
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Focus</p>
              <p>Parking, street vendors, live events</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Signals</p>
              <p>Time-based intelligence with live routing</p>
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
              <h2 className="text-2xl font-semibold text-slate-900">Urban access in one glance</h2>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>• Parking availability probability with live pricing cues</li>
                <li>• Vendor heatmaps mapped to time-of-day footfall</li>
                <li>• Event ingress and egress routing windows</li>
                <li>• Compliance-ready hosting recommendations</li>
              </ul>
              <Button variant="secondary" size="md">
                Explore Signal Layers
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
