import { motion, useReducedMotion } from 'framer-motion'
import { Clock, Mail, MapPin, MessageSquare, Phone, Send, Shield } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import PageTransition from '../../components/layout/PageTransition'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import Section from '../../components/ui/Section'
import Textarea from '../../components/ui/Textarea'
import { siteConfig } from '../../config/site.config'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const contactChannels = [
  {
    icon: Mail,
    title: 'General Support',
    detail: siteConfig.supportEmail,
    description: 'For questions about your account, bookings, spaces, or the app.',
    accentColor: 'mint' as const,
  },
  {
    icon: Shield,
    title: 'Legal & Privacy',
    detail: siteConfig.legalEmail,
    description: 'Privacy requests, data deletion, compliance, and legal inquiries.',
    accentColor: 'gold' as const,
  },
  {
    icon: MessageSquare,
    title: 'Host Support',
    detail: siteConfig.supportEmail,
    description: 'Help with listings, requests, profile verification, and host operations.',
    accentColor: 'mint' as const,
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    detail: siteConfig.headquarters,
    description: 'Our registered office address for official correspondence.',
    accentColor: 'gold' as const,
  },
]

const quickFaqs = [
  {
    question: 'How long does it take to get a response?',
    answer: 'We typically respond within 24–48 hours on business days. Urgent security matters are prioritized.',
  },
  {
    question: 'Can I request deletion of my data?',
    answer: 'Yes. Email legal@crozroad.com with "Data Deletion Request" in the subject line and we\'ll process it per applicable regulations.',
  },
  {
    question: 'I\'m a host. Where do I get help with listings?',
    answer: 'Use the host support channel above, or reach out directly from your host dashboard under Settings > Support.',
  },
]

const ContactPage = () => {
  const prefersReducedMotion = useReducedMotion()
  const variant = prefersReducedMotion ? fadeIn : fadeUp
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      {/* ━━━ Hero ━━━ */}
      <section className="relative overflow-hidden pb-12 pt-14 sm:pb-16 sm:pt-18 lg:pb-20 lg:pt-20">
        <div className="pointer-events-none absolute left-[-160px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#4C9B86]/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-100px] right-[-140px] h-[300px] w-[300px] rounded-full bg-[#D6A85E]/12 blur-[100px]" />

        <div className="mx-auto w-full max-w-[1440px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={variant}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="mx-auto mb-5 w-fit">Get in Touch</Badge>
            <h1 className="font-display text-4xl font-bold leading-tight text-[#1B1B1B] sm:text-5xl">
              We're here to help
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#6F6F6F]">
              Whether you're a user, host, or business partner, reach out and we'll get back to you quickly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ━━━ Contact Channels ━━━ */}
      <Section
        wide
        contentClassName="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {contactChannels.map((channel, i) => {
          const Icon = channel.icon
          return (
            <motion.div
              key={channel.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={variant}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="h-full rounded-2xl p-6">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    channel.accentColor === 'mint'
                      ? 'bg-[#4C9B86]/12 text-[#4C9B86]'
                      : 'bg-[#D6A85E]/12 text-[#D6A85E]'
                  }`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-lg font-bold text-[#1B1B1B]">{channel.title}</h3>
                <p className="mt-1 text-sm font-semibold text-[#4C9B86]">{channel.detail}</p>
                <p className="mt-3 text-sm leading-7 text-[#6F6F6F]">{channel.description}</p>
              </Card>
            </motion.div>
          )
        })}
      </Section>

      {/* ━━━ Contact Form + Info ━━━ */}
      <Section wide className="bg-[#F3EEE4]/50">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={variant}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="rounded-2xl p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-[#1B1B1B]">Send us a message</h2>
              <p className="mt-2 text-sm leading-7 text-[#6F6F6F]">
                Fill out the form below and our team will respond within 24–48 hours.
              </p>

              {submitted ? (
                <motion.div
                  className="mt-8 rounded-xl bg-[#C6E6D8]/30 p-8 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#4C9B86]/15 text-[#4C9B86]">
                    <Send size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1B1B1B]">Message received!</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6F6F6F]">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-[#1B1B1B]">
                        Full Name
                      </label>
                      <Input id="contact-name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-[#1B1B1B]">
                        Email
                      </label>
                      <Input id="contact-email" type="email" placeholder="you@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-semibold text-[#1B1B1B]">
                      Subject
                    </label>
                    <Input id="contact-subject" placeholder="How can we help?" required />
                  </div>

                  <div>
                    <label htmlFor="contact-category" className="mb-1.5 block text-sm font-semibold text-[#1B1B1B]">
                      Category
                    </label>
                    <select
                      id="contact-category"
                      className="h-11 w-full rounded-md border border-crz-outline/80 bg-crz-surface px-4 text-sm text-crz-text shadow-sm transition-[border-color,box-shadow] duration-fast ease-standard focus:border-crz-primary focus:outline-none focus:ring-2 focus:ring-crz-primary/20"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">App Support</option>
                      <option value="host">Host Support</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="privacy">Privacy & Data</option>
                      <option value="legal">Legal</option>
                      <option value="partnership">Partnership</option>
                      <option value="bug">Bug Report</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-[#1B1B1B]">
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us more about your question or issue..."
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={variant}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="rounded-2xl p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#D6A85E]/12 text-[#D6A85E]">
                <Clock size={20} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-bold text-[#1B1B1B]">Response Times</h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-[#6F6F6F]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4C9B86]" />
                  <span><strong className="text-[#1B1B1B]">General:</strong> 24–48 business hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A85E]" />
                  <span><strong className="text-[#1B1B1B]">Host support:</strong> 12–24 business hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D35C5C]" />
                  <span><strong className="text-[#1B1B1B]">Security issues:</strong> Prioritized immediately</span>
                </li>
              </ul>
            </Card>

            <Card className="rounded-2xl p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#4C9B86]/12 text-[#4C9B86]">
                <Phone size={20} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-bold text-[#1B1B1B]">Other Ways to Reach Us</h3>
              <div className="mt-3 space-y-3 text-sm leading-7 text-[#6F6F6F]">
                <p>
                  <strong className="text-[#1B1B1B]">In-app:</strong> Tap Help & Support in the app settings.
                </p>
                <p>
                  <strong className="text-[#1B1B1B]">Email:</strong> {siteConfig.supportEmail}
                </p>
                <p>
                  <strong className="text-[#1B1B1B]">Host dashboard:</strong> Settings → Support from your host panel.
                </p>
              </div>
            </Card>

            {/* Quick FAQs */}
            <Card className="rounded-2xl p-7">
              <h3 className="font-display text-lg font-bold text-[#1B1B1B]">Quick Answers</h3>
              <div className="mt-4 space-y-4">
                {quickFaqs.map((faq) => (
                  <div key={faq.question}>
                    <p className="text-sm font-semibold text-[#1B1B1B]">{faq.question}</p>
                    <p className="mt-1 text-sm leading-7 text-[#6F6F6F]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </PageTransition>
  )
}

export default ContactPage
