import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  CarFront,
  CircleParking,
  CircleUserRound,
  Compass,
  Download,
  MapPin,
  MapPinned,
  Network,
  Smartphone,
  Store,
  Zap,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageTransition from '../../components/layout/PageTransition'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Section from '../../components/ui/Section'

/* ─── Feature Slide Data ─── */

type FeatureSlide = {
  id: string
  icon: typeof Building2
  badge: string
  title: string
  value: string
  description: string
  localExample: string
  cta: string
  accentColor: 'mint' | 'gold'
}

const featureSlides: FeatureSlide[] = [
  {
    id: 'spaces',
    icon: Building2,
    badge: 'Spaces',
    title: 'Find the right space, right when you need it',
    value: 'Book work desks, meeting rooms, studios, and pop-up venues near you, by the hour or by the day.',
    description:
      'Spaces helps you discover and reserve local venues with filters that matter: Wi-Fi, power, parking, and real-time availability. No more calling around or guessing. Just open the app, filter by what you need, and book in seconds.',
    localExample:
      'A freelancer in your neighborhood finds a quiet studio with Wi-Fi and books a 3-hour slot before lunch, all from their phone.',
    cta: 'Explore Spaces',
    accentColor: 'mint',
  },
  {
    id: 'parking',
    icon: CircleParking,
    badge: 'Parking',
    title: 'Park smarter, arrive calmer',
    value: 'Discover trusted parking spots near your destination, filtered by what actually matters.',
    description:
      'Stop circling blocks. Parking shows you verified nearby options with filters like 24/7 access, CCTV, EV charging, covered spots, and real ratings. Know the cost and distance before you drive there.',
    localExample:
      'Running late to a meeting across town? Filter for covered parking with EV charging near your venue and reserve it before you leave home.',
    cta: 'Find Parking',
    accentColor: 'gold',
  },
  {
    id: 'activity',
    icon: Zap,
    badge: 'Activity',
    title: "See what's happening around you right now",
    value: "Pop-ups, food trucks, workshops, and local events. Discover what's active in your area today.",
    description:
      "Activity brings together real-time happenings and scheduled events in one place. Street vendors going active, a weekend pottery class, or a food truck rally. It's all in one feed, prioritized by what's closest and freshest.",
    localExample:
      'Walking to your coworking spot and you discover a lunch food truck wave and an evening makers meetup, both within walking distance.',
    cta: 'See Activity',
    accentColor: 'mint',
  },
  {
    id: 'business',
    icon: CircleUserRound,
    badge: 'Host Identity',
    title: 'Build trust as a local host or provider',
    value: "Create your verified profile, whether you're an individual host or running a business.",
    description:
      'Your reputation powers everything. The Business module lets you set up a complete provider profile with verification markers, support contacts, and trust signals that help guests book with confidence.',
    localExample:
      'A yoga studio owner starts as an individual host, builds reviews, then upgrades to a verified business profile as classes fill up.',
    cta: 'Set Up Profile',
    accentColor: 'gold',
  },
  {
    id: 'pitstops',
    icon: CarFront,
    badge: 'Pitstops',
    title: 'Quick stops for people on the move',
    value: "Fuel, snacks, supplies, and roadside essentials, found fast while you're in transit.",
    description:
      "When you're between destinations, Pitstops finds the nearest essentials without switching apps. Fuel up, grab supplies, or get a quick service. Optimized for short stops and low-attention mobile use.",
    localExample:
      'Driving between two event venues? Find a refuel point and a coffee stop in one quick search, right along your route.',
    cta: 'Find Pitstops',
    accentColor: 'mint',
  },
  {
    id: 'cluster',
    icon: Compass,
    badge: 'Cluster',
    title: 'Navigate the busiest areas with ease',
    value: "See where activity is concentrated. Tonight's picks, trending spots, and local hotspots on a map.",
    description:
      'Instead of browsing dozens of listings, Cluster shows you which neighborhoods and districts have the most happening right now. Curated highlights help you go where the energy is.',
    localExample:
      'Visiting a new city for the weekend? Open Cluster to see which district is buzzing tonight and jump straight into the best options.',
    cta: 'Explore Clusters',
    accentColor: 'gold',
  },
  {
    id: 'neighbourhood',
    icon: Network,
    badge: 'Neighbourhood',
    title: 'Hosts working together, not competing',
    value: 'Nearby hosts can team up, share guests, offer joint discounts, and grow together.',
    description:
      'Neighbourhood turns isolated listings into a cooperative local network. Hosts can send collaboration requests, accept invites, and link spaces for shared guest benefits. Better for hosts, better for guests.',
    localExample:
      'A cafe and a nearby photography studio link their listings. Guests booking the cafe get a discount at the studio, and both fill more off-peak slots.',
    cta: 'Start Collaborating',
    accentColor: 'mint',
  },
  {
    id: 'garage-sale',
    icon: Store,
    badge: 'Exchange',
    title: 'Buy, sell, and swap locally',
    value: 'Moving out? Clearing inventory? List it for quick local pickup, or find what you need nearby.',
    description:
      'Exchange is built for short-cycle, hyperlocal trades. Society garage sales, moving-out clearance, equipment swaps. List it fast, sell it local, keep things out of landfill.',
    localExample:
      'A host refreshing their coworking space lists old chairs for quick pickup, while a neighbor finds exactly what they need two blocks away.',
    cta: 'Browse Exchange',
    accentColor: 'gold',
  },
]

/* ─── App Highlights ─── */

const appHighlights = [
  {
    icon: MapPin,
    title: 'Location first discovery',
    detail: 'Every feature starts from where you are. Results adapt to your surroundings, not a generic city-wide directory.',
  },
  {
    icon: Zap,
    title: 'Filters that actually work',
    detail: 'Wi-Fi, parking, open now, covered, EV. Practical filters across every module so you decide faster with fewer dead-ends.',
  },
  {
    icon: Smartphone,
    title: 'Built for mobile life',
    detail: 'Quick taps, not complex forms. Accept, book, list, swap. Everything is optimized for real-world speed on your phone.',
  },
]

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
}

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
}

/* ─── Feature Slide Component ─── */

const FeatureSlideSection = ({
  slide,
  index,
}: {
  slide: FeatureSlide
  index: number
}) => {
  const prefersReducedMotion = useReducedMotion()
  const isEven = index % 2 === 0
  const Icon = slide.icon

  const textVariant = prefersReducedMotion ? fadeIn : isEven ? slideFromLeft : slideFromRight
  const cardVariant = prefersReducedMotion ? fadeIn : isEven ? slideFromRight : slideFromLeft

  return (
    <section
      className={`relative w-full overflow-hidden py-20 sm:py-24 lg:py-32 ${
        isEven ? '' : 'bg-[#F3EEE4]/50'
      }`}
    >
      {/* Decorative blur */}
      <div
        className={`pointer-events-none absolute top-0 h-[300px] w-[300px] rounded-full blur-[100px] ${
          slide.accentColor === 'mint'
            ? 'bg-[#4C9B86]/10'
            : 'bg-[#D6A85E]/10'
        } ${isEven ? 'right-[-100px]' : 'left-[-100px]'}`}
      />

      <div className="mx-auto w-full max-w-[1440px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          className={`grid items-center gap-10 lg:gap-16 ${
            isEven ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[0.9fr_1.1fr]'
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Text Column */}
          <motion.div
            className={`space-y-6 ${isEven ? '' : 'lg:order-2'}`}
            variants={textVariant}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge
              className={`w-fit ${
                slide.accentColor === 'mint'
                  ? '!border-[#C6E6D8] !bg-[#C6E6D8]/30 !text-[#4C9B86]'
                  : '!border-[#E3C58A] !bg-[#E3C58A]/30 !text-[#B8914E]'
              }`}
            >
              {slide.badge}
            </Badge>

            <h2 className="font-display text-3xl font-bold leading-tight text-[#1B1B1B] sm:text-4xl lg:text-[42px]">
              {slide.title}
            </h2>

            <p className="text-lg font-semibold leading-relaxed text-[#1B1B1B]/85 sm:text-xl">
              {slide.value}
            </p>

            <p className="max-w-xl text-base leading-8 text-[#6F6F6F]">{slide.description}</p>

            <Button
              size="lg"
              variant={slide.accentColor === 'mint' ? 'primary' : 'secondary'}
            >
              {slide.cta}
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>

          {/* Card Column */}
          <motion.div
            className={isEven ? '' : 'lg:order-1'}
            variants={cardVariant}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card
              className={`relative overflow-hidden rounded-2xl border-0 p-8 sm:p-10 ${
                slide.accentColor === 'mint'
                  ? 'bg-gradient-to-br from-[#C6E6D8]/40 via-[#F6F2E8] to-[#FAF6EF]'
                  : 'bg-gradient-to-br from-[#E3C58A]/30 via-[#F6F2E8] to-[#FAF6EF]'
              }`}
            >
              <div
                className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${
                  slide.accentColor === 'mint'
                    ? 'bg-[#4C9B86]/12 text-[#4C9B86]'
                    : 'bg-[#D6A85E]/12 text-[#D6A85E]'
                }`}
              >
                <Icon size={30} strokeWidth={1.8} />
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9FA8A3]">
                  Local example
                </p>
                <p className="text-base leading-8 text-[#1B1B1B]/80">
                  {slide.localExample}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-xl bg-[#1C1E1F]/5 p-4">
                <MapPinned size={18} className="shrink-0 text-[#4C9B86]" />
                <p className="text-sm font-medium text-[#6F6F6F]">
                  Available in the Crozroad app. Download on iOS and Android.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Landing Page ─── */

const Landing = () => {
  const navigate = useNavigate()
  const prefersReducedMotion = useReducedMotion()

  return (
    <PageTransition>
      {/* ━━━ Hero Section ━━━ */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-36 lg:pt-28">
        {/* Decorative blurs */}
        <div className="pointer-events-none absolute right-[-200px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#4C9B86]/12 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-160px] h-[380px] w-[380px] rounded-full bg-[#D6A85E]/15 blur-[120px]" />

        <div className="mx-auto w-full max-w-[1440px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={prefersReducedMotion ? fadeIn : fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge className="mx-auto mb-6 w-fit">Your local everything app</Badge>
            </motion.div>

            <motion.h1
              className="font-display text-4xl font-bold leading-[1.1] text-[#1B1B1B] sm:text-5xl lg:text-[56px]"
              variants={prefersReducedMotion ? fadeIn : fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Everything nearby.{' '}
              <span className="text-gradient">One app.</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6F6F6F] sm:text-xl"
              variants={prefersReducedMotion ? fadeIn : fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Crozroad connects you to local spaces, parking, activities, host services, and community
              collaboration, all from your pocket. No more switching between five different apps.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
              variants={prefersReducedMotion ? fadeIn : fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button size="lg" onClick={() => navigate('/download')}>
                <Download size={18} className="mr-2" />
                Download the App
              </Button>
              <Button variant="ghost" size="lg" onClick={() => navigate('/faq')}>
                Learn more
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mx-auto mt-14 grid max-w-lg gap-4 sm:grid-cols-3"
              variants={prefersReducedMotion ? fadeIn : fadeUp}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {[
                { value: 'iOS + Android', label: 'Available' },
                { value: 'Free', label: 'To Start' },
                { value: 'Local', label: 'First' },
              ].map((stat) => (
                <Card key={stat.label} className="rounded-xl bg-[#F6F2E8]/90 p-5 text-center">
                  <p className="font-display text-2xl font-bold text-[#4C9B86]">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#6F6F6F]">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ App Highlights (Dark Section) ━━━ */}
      <Section
        className="bg-[#1C1E1F] !text-white"
        wide
        contentClassName="grid gap-6 md:grid-cols-3"
      >
        <motion.div
          className="col-span-full mb-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={prefersReducedMotion ? fadeIn : fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6FB8A5]">Why Crozroad</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Built for how you actually use your neighborhood
          </h2>
        </motion.div>

        {appHighlights.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={prefersReducedMotion ? fadeIn : fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="h-full rounded-2xl border-[#2a2c2d] bg-[#242627] p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#4C9B86]/15 text-[#6FB8A5]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#9FA8A3]">{item.detail}</p>
              </Card>
            </motion.div>
          )
        })}
      </Section>

      {/* ━━━ Feature Slides ━━━ */}
      {featureSlides.map((slide, index) => (
        <FeatureSlideSection key={slide.id} slide={slide} index={index} />
      ))}

      {/* ━━━ Download CTA ━━━ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4C9B86] via-[#3D8A76] to-[#2D7A66] py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI2di0yaDF6TTM2IDI0djJIMjZ2LTJoMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="mx-auto w-full max-w-[1440px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div
              variants={prefersReducedMotion ? fadeIn : fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Smartphone size={48} className="mx-auto mb-6 text-white/80" strokeWidth={1.5} />
            </motion.div>

            <motion.h2
              className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              variants={prefersReducedMotion ? fadeIn : fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Your neighborhood, in your pocket
            </motion.h2>

            <motion.p
              className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/75"
              variants={prefersReducedMotion ? fadeIn : fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Download Crozroad on iOS or Android and start discovering everything that's happening
              locally, spaces, parking, activities, and more.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
              variants={prefersReducedMotion ? fadeIn : fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                size="lg"
                className="!bg-white !text-[#4C9B86] hover:!bg-white/90"
                onClick={() => navigate('/download/ios')}
              >
                <Download size={18} className="mr-2" />
                App Store
              </Button>
              <Button
                size="lg"
                className="!border-white/30 !bg-transparent !text-white hover:!bg-white/10"
                variant="ghost"
                onClick={() => navigate('/download/android')}
              >
                <Download size={18} className="mr-2" />
                Google Play
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ Host CTA ━━━ */}
      <Section wide className="bg-[#F3EEE4]/50">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.div
            variants={prefersReducedMotion ? fadeIn : fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="mx-auto mb-4 w-fit !border-[#E3C58A] !bg-[#E3C58A]/20 !text-[#B8914E]">
              For Hosts
            </Badge>
          </motion.div>

          <motion.h2
            className="font-display text-3xl font-bold text-[#1B1B1B] sm:text-4xl"
            variants={prefersReducedMotion ? fadeIn : fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Already hosting or want to start?
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-base leading-8 text-[#6F6F6F]"
            variants={prefersReducedMotion ? fadeIn : fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Manage your listings, handle guest requests, and grow your local presence, all from
            the Crozroad host dashboard.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            variants={prefersReducedMotion ? fadeIn : fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button size="lg" variant="secondary" onClick={() => navigate('/host/auth')}>
              Host Login
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="ghost" size="lg" onClick={() => navigate('/host/login')}>
              Learn about hosting
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </PageTransition>
  )
}

export default Landing
