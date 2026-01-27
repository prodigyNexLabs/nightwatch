import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { siteConfig } from '../../config/site.config'
import Button from '../ui/Button'
import Container from '../layout/Container'

const contactPath = '/contact'

const CTASection = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-white/70 py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-[32px] border border-white/70 bg-white/90 p-10 text-center shadow-soft"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Get the App</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            The Crozroad experience lives in the apps
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            {siteConfig.appName} is app-first today. Use the mobile apps to explore spaces, events,
            businesses, parking, and pitstops with live context.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => navigate(contactPath)}>
              Get the App
            </Button>
            <Button size="lg" variant="ghost" onClick={() => navigate(contactPath)}>
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTASection
