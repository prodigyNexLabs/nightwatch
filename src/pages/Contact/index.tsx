import type { FormEvent } from 'react'
import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { siteConfig } from '../../config/site.config'

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <PageTransition>
      <section className="bg-sand py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Contact</p>
            <h1 className="text-4xl font-semibold text-slate-900">Connect with Crozroad</h1>
            <p className="text-base text-slate-600">
              Tell us what you want to learn or explore. We will guide you to the right app
              experience for spaces, events, shops, parking, and pitstops.
            </p>
            <div className="rounded-3xl border border-white/70 bg-white/80 p-6 text-sm text-slate-600 shadow-soft">
              <p className="font-semibold text-slate-900">Direct line</p>
              <p>{siteConfig.supportEmail}</p>
              <p className="mt-3 font-semibold text-slate-900">Headquarters</p>
              <p>{siteConfig.legal.officeAddress}</p>
            </div>
          </div>
          <form
            className="space-y-4 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft"
            onSubmit={handleSubmit}
          >
            <Input placeholder="Full name" name="name" />
            <Input placeholder="Work email" name="email" type="email" />
            <Input placeholder="Organization (optional)" name="organization" />
            <Input placeholder="City or district" name="location" />
            <textarea
              name="message"
              placeholder="What are you looking for? Include dates, location, and space type."
              className="min-h-[140px] w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-mintAccent focus:ring-2 focus:ring-mint/40"
            />
            <Button type="submit" size="lg" className="w-full">
              Send message
            </Button>
          </form>
        </Container>
      </section>
    </PageTransition>
  )
}

export default Contact
