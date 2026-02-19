import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  Battery,
  CheckCircle2,
  Download,
  Globe,
  Lock,
  MapPin,
  Smartphone,
  Star,
  Wifi,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

/* ─── Animations ─── */

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

/* ─── Data ─── */

const appDetails = {
  version: '2.4.1',
  size: '42 MB',
  rating: '4.7',
  reviews: '8.2K',
  installs: '50,000+',
  contentRating: 'Everyone',
  compatibility: 'Android 8.0 and up',
  languages: 'English, Hindi, Malayalam, Tamil, Kannada',
  developer: 'Crozroad Pvt Ltd',
  lastUpdated: 'June 2025',
}

const whatsNew = [
  'Streamlined booking process with one-tap confirm',
  'New neighbourhood explore view with map clusters',
  'Improved push notification system',
  'Reduced APK size for faster installs',
  'Battery optimization for background location',
]

const screenshots = [
  { label: 'Home feed', color: 'from-[#4C9B86]/20 to-[#4C9B86]/5' },
  { label: 'Search & filter', color: 'from-[#D6A85E]/20 to-[#D6A85E]/5' },
  { label: 'Booking flow', color: 'from-[#4C9B86]/20 to-[#4C9B86]/5' },
  { label: 'Host details', color: 'from-[#D6A85E]/20 to-[#D6A85E]/5' },
]

/* ─── Page ─── */

const PlayStorePage = () => {
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
              <path d="M17.523 2.078l1.753 3.14A8.454 8.454 0 0 1 21.5 11.5c0 2.547-1.12 4.832-2.892 6.389l1.775 3.18a.5.5 0 0 1-.873.487l-1.81-3.243A8.42 8.42 0 0 1 14 19.5h-4a8.42 8.42 0 0 1-3.7-1.187L4.49 21.556a.5.5 0 0 1-.873-.487l1.775-3.18C3.62 16.332 2.5 14.047 2.5 11.5a8.454 8.454 0 0 1 2.224-5.282l1.753-3.14A.5.5 0 0 1 7.35 3.565L5.733 6.462A7.44 7.44 0 0 1 10 5.5h4a7.44 7.44 0 0 1 4.267.962L16.65 3.565a.5.5 0 0 1 .873.487zM10 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            <span className="text-sm font-bold text-[#1B1B1B]">Google Play</span>
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
                Crozroad Pvt Ltd · Lifestyle
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-[#D6A85E] text-[#D6A85E]" />
                  <span className="text-sm font-bold text-[#1B1B1B]">{appDetails.rating}</span>
                  <span className="text-xs text-[#6F6F6F]">({appDetails.reviews} reviews)</span>
                </div>
                <span className="text-crz-outline">|</span>
                <span className="text-xs text-[#6F6F6F]">{appDetails.installs} downloads</span>
                <span className="text-crz-outline">|</span>
                <Badge className="!py-0.5 !text-[10px]">{appDetails.contentRating}</Badge>
              </div>
            </motion.div>

            {/* Install button */}
            <motion.div variants={variant}>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" className="!h-14 gap-3 !rounded-2xl !px-10">
                  <Download size={18} />
                  Install from Play Store
                </Button>
              </a>
              <p className="mt-2 text-center text-xs text-[#9FA8A3]">Free, contains no ads</p>
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
            Screenshots
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

      {/* About this app */}
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
              className="mb-4 font-display text-xl font-bold text-[#1B1B1B]"
            >
              About this app
            </motion.h2>
            <motion.p variants={variant} className="max-w-3xl text-sm leading-7 text-[#6F6F6F]">
              Crozroad is a hyperlocal discovery and booking platform that connects you with spaces,
              services, and activities in your neighbourhood. Find coworking desks, meeting rooms, studios,
              parking spots, events, workshops, and more. Book instantly with real-time availability, chat
              with verified hosts, and build your local network. Designed for the Indian market with support
              for multiple languages, low bandwidth optimization, and UPI-ready payments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What's new */}
      <section className="border-t border-crz-outline/50 bg-[#FAF6EF] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={variant} className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-[#1B1B1B]">What's New</h2>
              <span className="text-xs text-[#6F6F6F]">
                v{appDetails.version} · {appDetails.lastUpdated}
              </span>
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

      {/* Android-specific optimizations */}
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
              Optimized for Android
            </motion.h2>
            <motion.div variants={variant} className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Battery,
                  title: 'Battery efficient',
                  desc: 'Smart location handling that minimizes battery drain. Background services are throttled automatically.',
                },
                {
                  icon: Wifi,
                  title: 'Works on slow networks',
                  desc: 'Optimized for 2G/3G connections. Core features like search and booking work with minimal data usage.',
                },
                {
                  icon: Smartphone,
                  title: 'Light APK size',
                  desc: 'At just 42 MB, Crozroad installs fast and keeps storage usage minimal on budget devices.',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={variant}
                  className="rounded-xl border border-crz-outline/50 bg-[#FAF6EF] p-5"
                >
                  <item.icon size={20} className="mb-3 text-[#4C9B86]" strokeWidth={1.8} />
                  <p className="text-sm font-bold text-[#1B1B1B]">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#6F6F6F]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data safety */}
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
              Data Safety
            </motion.h2>
            <motion.div variants={variant} className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Lock,
                  title: 'Data encrypted in transit',
                  desc: 'All communication between the app and our servers uses TLS 1.3 encryption.',
                },
                {
                  icon: MapPin,
                  title: 'Approximate location',
                  desc: 'Used to show nearby listings. Precise location is only used during active search.',
                },
                {
                  icon: Globe,
                  title: 'No data shared with third parties',
                  desc: 'Your personal information and activity data are never sold to advertisers.',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={variant}
                  className="rounded-xl border border-crz-outline/50 bg-white p-5"
                >
                  <item.icon size={20} className="mb-3 text-[#4C9B86]" strokeWidth={1.8} />
                  <p className="text-sm font-bold text-[#1B1B1B]">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#6F6F6F]">{item.desc}</p>
                </motion.div>
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

      {/* App info */}
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
              Additional Information
            </motion.h2>
            <motion.div variants={variant} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: 'Updated', value: appDetails.lastUpdated },
                { label: 'Size', value: appDetails.size },
                { label: 'Installs', value: appDetails.installs },
                { label: 'Requires Android', value: appDetails.compatibility },
                { label: 'Content rating', value: appDetails.contentRating },
                { label: 'Offered by', value: appDetails.developer },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-crz-outline/50 bg-[#FAF6EF] px-5 py-4">
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
                Download Crozroad for Android
              </h3>
              <p className="mt-1 text-sm text-white/50">Free on Google Play. Works on Android 8.0 and above.</p>
            </div>
            <div className="flex gap-3">
              <a href="https://play.google.com" target="_blank" rel="noreferrer">
                <Button size="lg" className="!h-14 gap-3 !rounded-2xl !px-8">
                  <Download size={18} />
                  Install
                </Button>
              </a>
              <Link to="/download/ios">
                <Button variant="secondary" size="lg" className="!h-14 !rounded-2xl !px-6">
                  iOS version
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PlayStorePage
