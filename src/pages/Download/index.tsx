import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Bell,
  Building2,
  Calendar,
  CheckCircle2,
  Globe,
  Heart,
  MapPin,
  MessageCircle,
  Search,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

/* ─── Animations ─── */

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

/* ─── Feature data ─── */

const coreFeatures = [
  {
    icon: MapPin,
    title: 'Hyperlocal Discovery',
    description: 'Find spaces, services, and activities around you. Results ranked by proximity, relevance, and ratings.',
    color: 'mint' as const,
  },
  {
    icon: Calendar,
    title: 'Instant Booking',
    description: 'Book a workspace, studio, or event in seconds. Real-time availability means no back-and-forth.',
    color: 'gold' as const,
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Filter by category, price, distance, availability, and trusted host status. Find exactly what you need.',
    color: 'mint' as const,
  },
  {
    icon: Bell,
    title: 'Live Notifications',
    description: 'Get alerts when new spaces open nearby, when bookings are confirmed, or when hosts respond.',
    color: 'gold' as const,
  },
  {
    icon: Shield,
    title: 'Verified Hosts',
    description: 'Every host is reviewed. Trust ratings, verified credentials, and community reviews give you confidence.',
    color: 'mint' as const,
  },
  {
    icon: MessageCircle,
    title: 'Direct Messaging',
    description: 'Chat with hosts before booking. Ask questions, negotiate terms, or request custom availability.',
    color: 'gold' as const,
  },
]

const stats = [
  { value: '4.8', label: 'App Store rating', icon: Star },
  { value: '50K+', label: 'Active users', icon: Users },
  { value: '12K+', label: 'Listings available', icon: Globe },
  { value: '<2s', label: 'Average load time', icon: Zap },
]

const userReviews = [
  {
    name: 'Arun M.',
    role: 'Freelance Designer',
    review: 'I found a beautiful coworking space five minutes from home. The booking was instant and the host was verified. This app changed how I work.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    role: 'Event Organizer',
    review: 'We hosted a pop-up market through Crozroad and reached 400+ people nearby. No ad spend, just proximity and trust. The platform is brilliant.',
    rating: 5,
  },
  {
    name: 'Rahul K.',
    role: 'Small Business Owner',
    review: 'As someone who rents out a meeting room, the host dashboard is clean and simple. The app makes managing bookings painless.',
    rating: 5,
  },
]

/* ─── Page ─── */

const DownloadPage = () => {
  const prefersReducedMotion = useReducedMotion()
  const variant = prefersReducedMotion ? fadeIn : fadeUp

  return (
    <div className="relative">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1C1E1F] via-[#1C1E1F] to-[#242627] py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(76,155,134,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(214,168,94,0.1),transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={variant}>
              <Badge className="mx-auto mb-6 w-fit !border-[#6FB8A5]/30 !bg-[#6FB8A5]/10 !text-[#6FB8A5]">
                Available on iOS & Android
              </Badge>
            </motion.div>

            <motion.h1
              variants={variant}
              className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Your neighbourhood,
              <br />
              <span className="bg-gradient-to-r from-[#6FB8A5] to-[#E3C58A] bg-clip-text text-transparent">
                in your pocket
              </span>
            </motion.h1>

            <motion.p
              variants={variant}
              className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg"
            >
              Discover local spaces, book instantly, attend nearby events, and connect with trusted hosts.
              Crozroad brings everything close to you into one clean, fast experience.
            </motion.p>

            <motion.div variants={variant} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/download/ios">
                <Button size="lg" className="!h-14 gap-3 !rounded-2xl !px-8">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Download for iOS
                </Button>
              </Link>
              <Link to="/download/android">
                <Button variant="secondary" size="lg" className="!h-14 gap-3 !rounded-2xl !px-8">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M17.523 2.078l1.753 3.14A8.454 8.454 0 0 1 21.5 11.5c0 2.547-1.12 4.832-2.892 6.389l1.775 3.18a.5.5 0 0 1-.873.487l-1.81-3.243A8.42 8.42 0 0 1 14 19.5h-4a8.42 8.42 0 0 1-3.7-1.187L4.49 21.556a.5.5 0 0 1-.873-.487l1.775-3.18C3.62 16.332 2.5 14.047 2.5 11.5a8.454 8.454 0 0 1 2.224-5.282l1.753-3.14A.5.5 0 0 1 7.35 3.565L5.733 6.462A7.44 7.44 0 0 1 10 5.5h4a7.44 7.44 0 0 1 4.267.962L16.65 3.565a.5.5 0 0 1 .873.487zM10 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                  Download for Android
                </Button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={variant}
              className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/8 bg-white/4 p-4 text-center">
                  <stat.icon size={18} className="mx-auto mb-2 text-[#6FB8A5]" strokeWidth={1.8} />
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-white/45">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Core features grid ── */}
      <section className="bg-[#FAF6EF] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            className="mx-auto mb-14 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={variant}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mx-auto mb-4 w-fit">Everything you need</Badge>
            <h2 className="font-display text-3xl font-bold text-[#1B1B1B] sm:text-4xl">
              One app, endless possibilities
            </h2>
            <p className="mt-4 text-base leading-8 text-[#6F6F6F]">
              Crozroad is designed around the way you actually use local services. No clutter, no friction.
              Just powerful tools wrapped in a beautiful interface.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {coreFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={variant}
                  className="group rounded-2xl border border-crz-outline/60 bg-white p-6 transition hover:border-crz-outline hover:shadow-sm"
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                      feature.color === 'mint'
                        ? 'bg-[#4C9B86]/10 text-[#4C9B86]'
                        : 'bg-[#D6A85E]/10 text-[#D6A85E]'
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1B1B1B]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6F6F6F]">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Why Crozroad ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.div variants={variant}>
                <Badge className="mb-4 w-fit">Why people love it</Badge>
              </motion.div>
              <motion.h2
                variants={variant}
                className="font-display text-3xl font-bold text-[#1B1B1B] sm:text-4xl"
              >
                Built for real neighbourhoods
              </motion.h2>
              <motion.p variants={variant} className="mt-4 text-base leading-8 text-[#6F6F6F]">
                Unlike generic listing platforms, Crozroad is designed around proximity. Everything you see
                is nearby, relevant, and verified. No sponsored results, no algorithm manipulation. Just
                real people offering real services close to where you are.
              </motion.p>
              <motion.div variants={variant} className="mt-8 space-y-4">
                {[
                  'Results prioritized by distance, not ad spend',
                  'Every host goes through a verification process',
                  'Built-in trust scores from real community reviews',
                  'No hidden fees or surge pricing',
                  'Optimized for low-bandwidth and older devices',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#4C9B86]" />
                    <p className="text-sm font-medium text-[#3A3A3A]">{item}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              {[
                { icon: Heart, label: 'Save favourites', desc: 'Bookmark spaces and hosts you love' },
                { icon: Globe, label: 'Explore areas', desc: 'Browse listings in any neighbourhood' },
                { icon: Sparkles, label: 'Personalised feed', desc: 'Suggestions based on your preferences' },
                { icon: Building2, label: 'Host profiles', desc: 'Detailed host pages with ratings' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={variant}
                  className="rounded-2xl border border-crz-outline/60 bg-[#FAF6EF] p-5"
                >
                  <item.icon size={22} className="mb-3 text-[#4C9B86]" strokeWidth={1.8} />
                  <p className="text-sm font-bold text-[#1B1B1B]">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-[#6F6F6F]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-[#FAF6EF] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            className="mx-auto mb-14 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={variant}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mx-auto mb-4 w-fit">Community voices</Badge>
            <h2 className="font-display text-3xl font-bold text-[#1B1B1B] sm:text-4xl">
              Trusted by thousands of locals
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {userReviews.map((review) => (
              <motion.div
                key={review.name}
                variants={variant}
                className="rounded-2xl border border-crz-outline/60 bg-white p-6"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D6A85E] text-[#D6A85E]" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-[#3A3A3A]">&ldquo;{review.review}&rdquo;</p>
                <div className="mt-4 border-t border-crz-outline/50 pt-3">
                  <p className="text-sm font-bold text-[#1B1B1B]">{review.name}</p>
                  <p className="text-xs text-[#6F6F6F]">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section className="bg-gradient-to-br from-[#1C1E1F] to-[#242627] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={variant}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to explore your neighbourhood?
            </h2>
            <p className="mt-4 text-base leading-8 text-white/60">
              Download Crozroad today and discover what's happening around you. Free on both platforms.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/download/ios">
                <Button size="lg" className="!h-14 gap-3 !rounded-2xl !px-8">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  App Store
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/download/android">
                <Button variant="secondary" size="lg" className="!h-14 gap-3 !rounded-2xl !px-8">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M17.523 2.078l1.753 3.14A8.454 8.454 0 0 1 21.5 11.5c0 2.547-1.12 4.832-2.892 6.389l1.775 3.18a.5.5 0 0 1-.873.487l-1.81-3.243A8.42 8.42 0 0 1 14 19.5h-4a8.42 8.42 0 0 1-3.7-1.187L4.49 21.556a.5.5 0 0 1-.873-.487l1.775-3.18C3.62 16.332 2.5 14.047 2.5 11.5a8.454 8.454 0 0 1 2.224-5.282l1.753-3.14A.5.5 0 0 1 7.35 3.565L5.733 6.462A7.44 7.44 0 0 1 10 5.5h4a7.44 7.44 0 0 1 4.267.962L16.65 3.565a.5.5 0 0 1 .873.487zM10 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                  Google Play
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Host app coming soon ── */}
      <section className="border-t border-white/8 bg-[#1C1E1F] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={variant}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mx-auto mb-5 w-fit !border-[#E3C58A]/30 !bg-[#E3C58A]/10 !text-[#E3C58A]">
              For Hosts Only
            </Badge>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Crozroad Host App
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/55">
              A separate, dedicated mobile app for hosts and providers. Manage your listings, respond to
              requests, track earnings, and stay connected with your guests. Coming to iOS and Android.
            </p>
            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-[#4C9B86]/25 bg-[#4C9B86]/8 px-5 py-2.5">
              <Sparkles size={14} className="text-[#6FB8A5]" />
              <span className="text-sm font-medium text-[#6FB8A5]">Coming Soon</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DownloadPage
