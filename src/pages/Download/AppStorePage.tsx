import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  Globe,
  Lock,
  MapPin,
  Smartphone,
  Star,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'

/* ─── Animations ─── */

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

/* ─── Data ─── */

const appDetails = {
  version: '2.4.1',
  size: '58 MB',
  rating: '4.8',
  reviews: '12.4K',
  age: '4+',
  category: 'Lifestyle',
  compatibility: 'iOS 16.0 or later',
  languages: 'English, Hindi, Malayalam, Tamil, Kannada',
  developer: 'Crozroad Pvt Ltd',
}

const whatsNew = [
  'Redesigned booking flow with fewer steps',
  'Improved map view for nearby spaces',
  'Faster search with smart filters',
  'Bug fixes and performance improvements',
]

const screenshots = [
  { label: 'Discover nearby', color: 'from-[#4C9B86]/20 to-[#4C9B86]/5' },
  { label: 'Book instantly', color: 'from-[#D6A85E]/20 to-[#D6A85E]/5' },
  { label: 'Host profiles', color: 'from-[#4C9B86]/20 to-[#4C9B86]/5' },
  { label: 'Live activity', color: 'from-[#D6A85E]/20 to-[#D6A85E]/5' },
]

/* ─── Page ─── */

const AppStorePage = () => {
  const prefersReducedMotion = useReducedMotion()
  const variant = prefersReducedMotion ? fadeIn : fadeUp

  return (
    <div className="relative min-h-screen bg-[#FAF6EF]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-crz-outline/50 bg-[#FAF6EF]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-8">
          <Link
            to="/download"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold text-[#6F6F6F] transition hover:text-[#1B1B1B]"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">All downloads</span>
          </Link>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#1B1B1B]" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <span className="text-sm font-bold text-[#1B1B1B]">App Store</span>
          </div>
          <div className="w-16" />
        </div>
      </header>

      {/* App summary card */}
      <section className="border-b border-crz-outline/50 bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* App icon */}
            <motion.div
              variants={variant}
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#4C9B86] to-[#3A7D6A] shadow-lg sm:h-28 sm:w-28"
            >
              <img src="/banner.png" alt="Crozroad" className="h-10 w-auto brightness-0 invert" />
            </motion.div>

            {/* Info */}
            <motion.div variants={variant} className="flex-1">
              <h1 className="font-display text-2xl font-bold text-[#1B1B1B] sm:text-3xl">
                Crozroad
              </h1>
              <p className="mt-1 text-sm text-[#6F6F6F]">
                Discover and book local spaces, activities, and services
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-[#D6A85E] text-[#D6A85E]" />
                  <span className="text-sm font-bold text-[#1B1B1B]">{appDetails.rating}</span>
                  <span className="text-xs text-[#6F6F6F]">({appDetails.reviews} ratings)</span>
                </div>
                <span className="text-crz-outline">|</span>
                <span className="text-xs text-[#6F6F6F]">{appDetails.category}</span>
                <span className="text-crz-outline">|</span>
                <span className="text-xs text-[#6F6F6F]">Age {appDetails.age}</span>
              </div>
            </motion.div>

            {/* Download button */}
            <motion.div variants={variant}>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" className="!h-14 gap-3 !rounded-2xl !px-10">
                  <Download size={18} />
                  Get on App Store
                </Button>
              </a>
              <p className="mt-2 text-center text-xs text-[#9FA8A3]">Free, no in-app purchases</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Screenshot previews */}
      <section className="bg-[#FAF6EF] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.h2
            className="mb-6 font-display text-xl font-bold text-[#1B1B1B]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variant}
          >
            Preview
          </motion.h2>
          <motion.div
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {screenshots.map((shot) => (
              <motion.div
                key={shot.label}
                variants={variant}
                className={`flex h-72 w-40 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-b ${shot.color} border border-crz-outline/40 sm:h-80 sm:w-44`}
              >
                <Smartphone size={32} className="mb-3 text-[#4C9B86]/60" strokeWidth={1.5} />
                <p className="text-xs font-semibold text-[#3A3A3A]">{shot.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's new */}
      <section className="border-t border-crz-outline/50 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={variant} className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-[#1B1B1B]">What's New</h2>
              <span className="text-xs text-[#6F6F6F]">Version {appDetails.version}</span>
            </motion.div>
            <motion.div variants={variant} className="mt-6 space-y-3">
              {whatsNew.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#4C9B86]" />
                  <p className="text-sm text-[#3A3A3A]">{item}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App info details */}
      <section className="border-t border-crz-outline/50 bg-[#FAF6EF] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={variant}
              className="mb-6 font-display text-xl font-bold text-[#1B1B1B]"
            >
              Information
            </motion.h2>
            <motion.div variants={variant} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: 'Developer', value: appDetails.developer },
                { label: 'Size', value: appDetails.size },
                { label: 'Category', value: appDetails.category },
                { label: 'Compatibility', value: appDetails.compatibility },
                { label: 'Languages', value: appDetails.languages },
                { label: 'Age Rating', value: appDetails.age },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-crz-outline/50 bg-white px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9FA8A3]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#1B1B1B]">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Privacy & permissions */}
      <section className="border-t border-crz-outline/50 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={variant}
              className="mb-6 font-display text-xl font-bold text-[#1B1B1B]"
            >
              Privacy & Data
            </motion.h2>
            <motion.div variants={variant} className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Lock,
                  title: 'Data encryption',
                  desc: 'All data is encrypted in transit and at rest using AES-256.',
                },
                {
                  icon: MapPin,
                  title: 'Location access',
                  desc: 'Used only while the app is open, to show nearby listings and calculate distances.',
                },
                {
                  icon: Globe,
                  title: 'No third-party tracking',
                  desc: 'We do not sell or share your data with advertisers or third parties.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-crz-outline/50 bg-[#FAF6EF] p-5">
                  <item.icon size={20} className="mb-3 text-[#4C9B86]" strokeWidth={1.8} />
                  <p className="text-sm font-bold text-[#1B1B1B]">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#6F6F6F]">{item.desc}</p>
                </div>
              ))}
            </motion.div>
            <motion.p variants={variant} className="mt-6 text-xs text-[#9FA8A3]">
              Read our full{' '}
              <Link to="/legal/privacy-policy" className="font-semibold text-[#4C9B86]">
                Privacy Policy
              </Link>{' '}
              for complete details.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-[#1C1E1F] to-[#242627] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            className="flex flex-col items-center justify-between gap-6 sm:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variant}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Download Crozroad for iPhone
              </h3>
              <p className="mt-1 text-sm text-white/50">Free on the App Store. No account required to browse.</p>
            </div>
            <div className="flex gap-3">
              <a href="https://apps.apple.com" target="_blank" rel="noreferrer">
                <Button size="lg" className="!h-14 gap-3 !rounded-2xl !px-8">
                  <Download size={18} />
                  Download
                </Button>
              </a>
              <Link to="/download/android">
                <Button variant="secondary" size="lg" className="!h-14 !rounded-2xl !px-6">
                  Android version
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AppStorePage
