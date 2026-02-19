import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTransition from '../../components/layout/PageTransition'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Section from '../../components/ui/Section'

/* ─── FAQ Data (categorized) ─── */

type FaqCategory = {
  label: string
  items: { question: string; answer: string }[]
}

const faqCategories: FaqCategory[] = [
  {
    label: 'General',
    items: [
      {
        question: 'What is Crozroad?',
        answer:
          'Crozroad is a local ecosystem app that connects you to nearby spaces, parking, activities, host services, community collaboration, and local exchange, all in one place. It\'s available on both iOS and Android.',
      },
      {
        question: 'Is Crozroad free to use?',
        answer:
          'Yes. Crozroad is free to download and use. Some premium features for hosts and providers may have separate pricing as the platform grows.',
      },
      {
        question: 'Where is Crozroad available?',
        answer:
          'Crozroad is designed to work in any location. As the community grows, more spaces, hosts, and activities become available in your area.',
      },
      {
        question: 'How do I get started?',
        answer:
          'Download the Crozroad app from the App Store or Google Play, create an account, and start discovering what\'s nearby. It takes less than a minute.',
      },
    ],
  },
  {
    label: 'Spaces & Booking',
    items: [
      {
        question: 'How does Spaces work?',
        answer:
          'Spaces helps you discover and book local venues: desks, meeting rooms, studios, and more. Use practical filters like Wi-Fi, power, parking, and real-time availability. Everything happens in the app.',
      },
      {
        question: 'Can I book a space by the hour?',
        answer:
          'Yes. Spaces supports flexible booking durations. Depending on the host, you can book by the hour, half-day, or full day.',
      },
      {
        question: 'How do I know if a space is available right now?',
        answer:
          'Use the "Open now" filter in Spaces. It shows only spaces that have confirmed availability at the current time.',
      },
    ],
  },
  {
    label: 'Parking',
    items: [
      {
        question: 'What makes Crozroad Parking different?',
        answer:
          'Unlike generic map search, Crozroad Parking emphasizes trusted, verified options with filters like 24/7 access, covered, CCTV, EV charging, and real user ratings, so you know what you\'re getting before you arrive.',
      },
      {
        question: 'Can I reserve parking in advance?',
        answer:
          'Yes. Where supported by the parking host, you can reserve a spot ahead of time directly through the app.',
      },
    ],
  },
  {
    label: 'Activity & Events',
    items: [
      {
        question: 'What shows up in Activity?',
        answer:
          'Activity shows real-time happenings near you: pop-ups, food trucks, workshops, markets, and events. Everything is ranked by proximity and freshness, so you see what\'s active now, not stale listings.',
      },
      {
        question: 'Can I list my own event or pop-up?',
        answer:
          'Yes. If you\'re a registered host, you can create activity listings through the app to attract nearby visitors.',
      },
    ],
  },
  {
    label: 'Hosting',
    items: [
      {
        question: 'How do I become a host on Crozroad?',
        answer:
          'Sign up through the app or host dashboard, complete your profile, add verification details, and publish your first listing. You can start as an individual and upgrade to a business profile later.',
      },
      {
        question: 'What can I list as a host?',
        answer:
          'Spaces (desks, rooms, studios), parking spots, activities and events, exchange items, and more. Each module has its own listing flow optimized for that category.',
      },
      {
        question: 'How do I manage requests?',
        answer:
          'Incoming requests appear in your host dashboard. You can accept, decline, or respond with context, all from the app or the host web panel.',
      },
      {
        question: 'What is Neighbourhood collaboration?',
        answer:
          'Neighbourhood lets nearby hosts work together. You can send collaboration requests, link spaces, and offer shared guest discounts, growing together instead of competing.',
      },
    ],
  },
  {
    label: 'Exchange',
    items: [
      {
        question: 'What is Exchange?',
        answer:
          'Exchange is Crozroad\'s local buy-sell-swap module. It\'s built for short-cycle trades like moving-out clearance, society garage sales, and equipment swaps, with fast listings and clear local pickup.',
      },
      {
        question: 'Is Exchange like a marketplace?',
        answer:
          'It\'s simpler than a traditional marketplace. Exchange focuses on speed and local relevance. List fast, sell fast, and keep things out of landfill.',
      },
    ],
  },
  {
    label: 'Privacy & Security',
    items: [
      {
        question: 'How does Crozroad protect my data?',
        answer:
          'We use encrypted transport (TLS), role-based access controls, and operational monitoring. We never sell your data to third parties. See our Privacy Policy for full details.',
      },
      {
        question: 'Can I request deletion of my data?',
        answer:
          'Yes. You can request data deletion by emailing legal@crozroad.com with "Data Deletion Request" in the subject line. We process requests per applicable regulations (GDPR, CCPA, etc.).',
      },
      {
        question: 'Does Crozroad share data with advertisers?',
        answer:
          'No. We do not sell or share personal data with advertisers. Data is only processed by infrastructure and compliance vendors required for service delivery.',
      },
    ],
  },
  {
    label: 'Account & Support',
    items: [
      {
        question: 'How do I contact support?',
        answer:
          'You can reach us through the in-app Help & Support section, email support@crozroad.com, or visit our Contact page on the website.',
      },
      {
        question: 'I forgot my password. What do I do?',
        answer:
          'Tap "Forgot Password" on the login screen. We\'ll send a reset link to your registered email address.',
      },
      {
        question: 'Can I delete my account?',
        answer:
          'Yes. You can request account deletion from the app settings under Privacy, or by emailing support@crozroad.com. Your data will be removed per our retention policy.',
      },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

/* ─── Accordion Item ─── */

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
}) => (
  <Card className="overflow-hidden rounded-xl p-0">
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#FAF6EF]/60"
      aria-expanded={isOpen}
    >
      <span className="font-display text-base font-bold text-[#1B1B1B] sm:text-lg">{item.question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="shrink-0"
      >
        <ChevronDown
          size={18}
          className={isOpen ? 'text-[#4C9B86]' : 'text-[#9FA8A3]'}
        />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="border-t border-crz-outline/50 px-6 pb-5 pt-4 text-sm leading-8 text-[#6F6F6F]">
            {item.answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </Card>
)

/* ─── FAQ Page ─── */

const FAQPage = () => {
  const navigate = useNavigate()
  const prefersReducedMotion = useReducedMotion()
  const variant = prefersReducedMotion ? fadeIn : fadeUp
  const [activeCategory, setActiveCategory] = useState(0)
  const [openIndex, setOpenIndex] = useState(0)

  const currentCategory = faqCategories[activeCategory]

  return (
    <PageTransition>
      {/* ━━━ Hero ━━━ */}
      <section className="relative overflow-hidden pb-10 pt-14 sm:pb-14 sm:pt-18 lg:pb-16 lg:pt-20">
        <div className="pointer-events-none absolute right-[-180px] top-[-140px] h-[340px] w-[340px] rounded-full bg-[#4C9B86]/10 blur-[100px]" />

        <div className="mx-auto w-full max-w-[1440px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={variant}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4C9B86]/10 text-[#4C9B86]">
              <HelpCircle size={28} strokeWidth={1.8} />
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-[#1B1B1B] sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#6F6F6F]">
              Find answers about Crozroad: the app, hosting, bookings, privacy, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ━━━ Category Tabs + Accordion ━━━ */}
      <Section wide contentClassName="space-y-8">
        {/* Category pills */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variant}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {faqCategories.map((cat, i) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => {
                setActiveCategory(i)
                setOpenIndex(0)
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                activeCategory === i
                  ? 'bg-[#4C9B86] text-white shadow-md'
                  : 'border border-[#9FA8A3]/40 bg-[#FAF6EF] text-[#6F6F6F] hover:border-[#4C9B86]/40 hover:text-[#1B1B1B]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ items */}
        <motion.div
          key={activeCategory}
          className="space-y-3"
          initial="hidden"
          animate="visible"
          variants={variant}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentCategory.items.map((item, i) => (
            <AccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </Section>

      {/* ━━━ Still have questions CTA ━━━ */}
      <section className="bg-[#1C1E1F] py-16 sm:py-20">
        <motion.div
          className="mx-auto max-w-2xl px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={variant}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6A85E]/15 text-[#E3C58A]">
            <MessageSquare size={22} strokeWidth={1.8} />
          </div>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-7 text-[#9FA8A3]">
            Our team is happy to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="!bg-[#4C9B86] !text-white hover:!bg-[#3D8A76]"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="!border-[#9FA8A3]/30 !text-white hover:!bg-white/2"
              onClick={() => window.location.href = `mailto:${siteConfig.supportEmail}`}
            >
              Email Support
            </Button>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  )
}

// Use siteConfig for email reference
import { siteConfig } from '../../config/site.config'

export default FAQPage
