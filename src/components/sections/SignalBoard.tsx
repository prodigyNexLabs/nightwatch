import { motion } from 'framer-motion'
import { useState } from 'react'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import Container from '../layout/Container'

const audienceContent = {
  people: [
    {
      title: 'Where can I park nearby?',
      description: 'Find private, commercial, or event-linked parking with clear details and live context.',
    },
    {
      title: 'What spaces are available right now?',
      description: 'Explore rooftops, open grounds, halls, or pop-up zones with rules and capacity guidance.',
    },
    {
      title: 'What events are happening here?',
      description: 'See live, ticketed, or community events connected to spaces and local footfall.',
    },
    {
      title: 'What shops or vendors are inside?',
      description: 'Discover businesses operating within each space or event, not just static listings.',
    },
  ],
  businesses: [
    {
      title: 'Manage your presence',
      description: 'Keep space details, hours, rules, and capacity information accurate and visible.',
    },
    {
      title: 'Promote events',
      description: 'Highlight pop-ups or activations tied to your space with built-in visibility.',
    },
    {
      title: 'Bring vendors and shops',
      description: 'Attach shops or vendors to spaces so discovery happens in the right context.',
    },
    {
      title: 'Surface parking access',
      description: 'Connect parking options to events and spaces for smoother arrivals.',
    },
  ],
}

const SignalBoard = () => {
  const [audience, setAudience] = useState<'people' | 'businesses'>('people')
  const items = audienceContent[audience]

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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">How it Works</p>
          <h2 className="text-3xl font-semibold text-slate-900">The Crozroad mental model</h2>
          <p className="mt-3 text-sm text-slate-600">
            Toggle between user and business perspectives to see how spaces, events, and access stay aligned.
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setAudience('people')}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
              audience === 'people'
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-white/70 bg-white/70 text-slate-600 hover:text-slate-900'
            }`}
          >
            For people
          </button>
          <button
            type="button"
            onClick={() => setAudience('businesses')}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
              audience === 'businesses'
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-white/70 bg-white/70 text-slate-600 hover:text-slate-900'
            }`}
          >
            For businesses
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title} className="space-y-4">
              <Badge>{audience === 'people' ? 'Discover' : 'Manage'}</Badge>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SignalBoard
