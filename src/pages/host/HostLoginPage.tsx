import { useMutation } from '@tanstack/react-query'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  LockKeyhole,
  Network,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  User,
  Users,
  Zap,
} from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import { siteConfig } from '../../config/site.config'
import { fetchCurrentHostUser, loginHost } from '../../services/hostApi'
import { selectIsHostAuthenticated, useHostAuthStore } from '../../store/useHostAuthStore'

/* ─── Slide data ─── */

const hostSlides = [
  {
    icon: TrendingUp,
    badge: 'Earn More',
    title: 'Turn your space into a revenue stream',
    description:
      'Whether you have a spare desk, a meeting room, a studio, or a parking spot, Crozroad puts it in front of people who need it right now. Set your prices, control your schedule, and start earning from underused assets.',
    highlight: 'Hosts on Crozroad see bookings within the first week of listing.',
    color: 'mint' as const,
  },
  {
    icon: CalendarCheck,
    badge: 'Events & Activities',
    title: 'Promote your events to people who are already nearby',
    description:
      'Running a workshop, pop-up, tasting event, or market? Activity puts your event in front of locals who are actively looking for things to do. No paid ads, no social media grind. Just nearby visibility when it matters.',
    highlight: 'Events listed on Crozroad reach people within walking distance in real-time.',
    color: 'gold' as const,
  },
  {
    icon: Store,
    badge: 'Your Business',
    title: 'Build a trusted local brand that people recognize',
    description:
      'Create a verified business profile with trust signals, reviews, and credentials. When guests see your listing, they book with confidence. Your reputation compounds over time as more people discover and rate your services.',
    highlight: 'Verified hosts see up to 3x more bookings than unverified profiles.',
    color: 'mint' as const,
  },
  {
    icon: Network,
    badge: 'Neighbourhood',
    title: 'Collaborate with nearby hosts and grow together',
    description:
      'Neighbourhood connects you with other local hosts. Link your spaces, offer joint discounts, and share guest traffic. A cafe links with a photography studio next door and both fill more off-peak slots.',
    highlight: 'Linked hosts report higher repeat guest rates than solo operators.',
    color: 'gold' as const,
  },
  {
    icon: Rocket,
    badge: 'New Ideas',
    title: 'Test new business concepts with zero overhead',
    description:
      'Want to try pop-up dinners, coworking events, or weekend workshops? List them on Crozroad and validate demand before committing to a lease, a team, or heavy investment. The platform handles discovery so you can focus on delivery.',
    highlight: 'Launch a new concept in under 10 minutes with Crozroad listings.',
    color: 'mint' as const,
  },
  {
    icon: BarChart3,
    badge: 'Dashboard',
    title: 'Manage everything from one powerful dashboard',
    description:
      'Track bookings, manage requests, update listings, monitor ratings, and handle guest communication all in one place. Available on web and optimized for mobile so you can run your operation from anywhere.',
    highlight: 'Real-time insights help you price smarter and fill more slots.',
    color: 'gold' as const,
  },
]

/* ─── Login steps ─── */

type LoginStep = 'choose' | 'mobile-input' | 'otp-verify' | 'credentials'

/* ─── Animations ─── */

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } }

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
}

const loginTransition = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
}

/* ─── Social button ─── */

const SocialButton = ({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}) => (
  <button
    type="button"
    onClick={onClick}
    className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-crz-outline/70 bg-crz-surface text-sm font-semibold text-crz-text transition hover:bg-crz-surfaceAlt active:scale-[0.98]"
  >
    {icon}
    {label}
  </button>
)

/* ─── Slide carousel ─── */

const SlideCarousel = () => {
  const prefersReducedMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)
  const [[, direction], setPage] = useState([0, 0])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const paginate = useCallback(
    (dir: number) => {
      const next = (current + dir + hostSlides.length) % hostSlides.length
      setPage([next, dir])
      setCurrent(next)
    },
    [current],
  )

  useEffect(() => {
    timerRef.current = setInterval(() => paginate(1), 6000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paginate])

  const slide = hostSlides[current]
  const Icon = slide.icon

  return (
    <div className="relative flex h-full flex-col justify-between">
      {/* Slide content */}
      <div className="flex-1">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={prefersReducedMotion ? undefined : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div
              className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                slide.color === 'mint'
                  ? 'bg-[#4C9B86]/15 text-[#6FB8A5]'
                  : 'bg-[#D6A85E]/15 text-[#E3C58A]'
              }`}
            >
              <Icon size={28} strokeWidth={1.8} />
            </div>

            <Badge
              className={`w-fit ${
                slide.color === 'mint'
                  ? '!border-[#6FB8A5]/30 !bg-[#6FB8A5]/10 !text-[#6FB8A5]'
                  : '!border-[#E3C58A]/30 !bg-[#E3C58A]/10 !text-[#E3C58A]'
              }`}
            >
              {slide.badge}
            </Badge>

            <h2 className="font-display text-2xl font-bold leading-tight text-white lg:text-3xl">
              {slide.title}
            </h2>

            <p className="text-base leading-8 text-white/65">{slide.description}</p>

            <div
              className={`rounded-xl border px-5 py-4 ${
                slide.color === 'mint'
                  ? 'border-[#4C9B86]/20 bg-[#4C9B86]/8'
                  : 'border-[#D6A85E]/20 bg-[#D6A85E]/8'
              }`}
            >
              <div className="flex items-start gap-3">
                <Sparkles
                  size={16}
                  className={`mt-0.5 shrink-0 ${
                    slide.color === 'mint' ? 'text-[#6FB8A5]' : 'text-[#E3C58A]'
                  }`}
                />
                <p
                  className={`text-sm font-medium ${
                    slide.color === 'mint' ? 'text-[#6FB8A5]' : 'text-[#E3C58A]'
                  }`}
                >
                  {slide.highlight}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {hostSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setPage([i, i > current ? 1 : -1])
                setCurrent(i)
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-[#4C9B86]' : 'w-1.5 bg-white/20 hover:bg-white/35'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => paginate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition hover:border-white/25 hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition hover:border-white/25 hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─── Host Login Page ─── */

const HostLoginPage = () => {
  const navigate = useNavigate()
  const prefersReducedMotion = useReducedMotion()
  const variant = prefersReducedMotion ? fadeIn : fadeUp
  const [searchParams] = useSearchParams()
  const redirectTarget = searchParams.get('redirect') || '/host/dashboard/overview'

  const isAuthenticated = useHostAuthStore(selectIsHostAuthenticated)
  const applyLogin = useHostAuthStore((state) => state.login)

  // Login state
  const [step, setStep] = useState<LoginStep>('choose')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setFormError] = useState('')

  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  const title = useMemo(
    () => (isAuthenticated ? 'Redirecting to host dashboard...' : 'Host Login'),
    [isAuthenticated],
  )

  const loginMutation = useMutation({
    mutationFn: async () => {
      const session = await loginHost(username.trim(), password)
      const user = await fetchCurrentHostUser()
      return { session, user }
    },
    onSuccess: ({ session, user }) => {
      applyLogin(session, user)
      navigate(redirectTarget, { replace: true })
    },
    onError: (error) => {
      const message = error instanceof Error ? error.message : 'Could not sign in.'
      setFormError(message)
    },
  })

  const handleCredentialSubmit = (event: FormEvent) => {
    event.preventDefault()
    setFormError('')
    if (!username.trim() || !password) {
      setFormError('Username and password are required.')
      return
    }
    loginMutation.mutate()
  }

  const handlePhoneSubmit = (event: FormEvent) => {
    event.preventDefault()
    setFormError('')
    if (!phone.trim() || phone.trim().length < 10) {
      setFormError('Please enter a valid mobile number.')
      return
    }
    setStep('otp-verify')
  }

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpSubmit = (event: FormEvent) => {
    event.preventDefault()
    const code = otp.join('')
    if (code.length < 6) {
      setFormError('Please enter the complete 6-digit code.')
      return
    }
    // In production, verify OTP via API
    setFormError('')
  }

  if (isAuthenticated) {
    return <Navigate to={redirectTarget} replace />
  }

  return (
    <div className="relative min-h-screen bg-[#FAF6EF]">
      {/* Minimal top bar */}
      <header className="sticky top-0 z-50 border-b border-crz-outline/50 bg-[#FAF6EF]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 sm:px-8">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold text-[#6F6F6F] transition hover:text-[#1B1B1B]"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to {siteConfig.platformName}</span>
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/banner.png"
              alt={`${siteConfig.platformName} brand`}
              className="h-6 w-auto"
            />
          </Link>
          <div className="w-16" />
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto flex min-h-[calc(100vh-56px)] w-full max-w-[1440px] items-stretch px-4 py-6 sm:px-8 lg:py-10">
        <div className="grid w-full gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Left: Slides panel */}
          <motion.div
            className="hidden overflow-hidden rounded-3xl bg-[#1C1E1F] p-8 lg:flex lg:flex-col lg:p-10 xl:p-12"
            initial="hidden"
            animate="visible"
            variants={variant}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4C9B86]/15 text-[#6FB8A5]">
                <Building2 size={20} strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Crozroad for Hosts</p>
                <p className="text-xs text-white/45">Your local hosting platform</p>
              </div>
            </div>

            <SlideCarousel />
          </motion.div>

          {/* Right: Login panel */}
          <motion.div
            className="flex flex-col"
            initial="hidden"
            animate="visible"
            variants={variant}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="flex flex-1 flex-col !rounded-3xl !border-0 bg-white !p-6 shadow-sm sm:!p-8 lg:!p-10">
              <AnimatePresence mode="wait">
                {/* ── Step: Choose login method ── */}
                {step === 'choose' && (
                  <motion.div key="choose" {...loginTransition} className="flex flex-1 flex-col">
                    <div className="mb-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4C9B86]/10 text-[#4C9B86]">
                        <ShieldCheck size={24} strokeWidth={1.8} />
                      </div>
                      <h1 className="font-display text-2xl font-bold text-[#1B1B1B] sm:text-3xl">
                        {title}
                      </h1>
                      <p className="mt-2 text-sm leading-7 text-[#6F6F6F]">
                        Sign in to manage your listings, bookings, and local presence.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Mobile OTP (priority) */}
                      <button
                        type="button"
                        onClick={() => {
                          setFormError('')
                          setStep('mobile-input')
                        }}
                        className="flex h-14 w-full items-center gap-4 rounded-2xl border-2 border-[#4C9B86]/20 bg-[#4C9B86]/5 px-5 text-left transition hover:border-[#4C9B86]/40 hover:bg-[#4C9B86]/10 active:scale-[0.98]"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4C9B86]/15 text-[#4C9B86]">
                          <Smartphone size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-[#1B1B1B]">Continue with Mobile</p>
                          <p className="text-xs text-[#6F6F6F]">Quick OTP verification</p>
                        </div>
                        <ArrowRight size={16} className="text-[#4C9B86]" />
                      </button>

                      <div className="flex items-center gap-3 py-2">
                        <div className="h-px flex-1 bg-crz-outline/50" />
                        <span className="text-xs font-medium text-[#9FA8A3]">or continue with</span>
                        <div className="h-px flex-1 bg-crz-outline/50" />
                      </div>

                      {/* Social logins */}
                      <div className="grid gap-3 sm:grid-cols-3">
                        <SocialButton
                          icon={
                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                              <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                                fill="#4285F4"
                              />
                              <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                              />
                              <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                              />
                              <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                              />
                            </svg>
                          }
                          label="Google"
                        />
                        <SocialButton
                          icon={
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#1877F2" aria-hidden>
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          }
                          label="Facebook"
                        />
                        <SocialButton
                          icon={
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                          }
                          label="Apple"
                        />
                      </div>

                      <div className="flex items-center gap-3 py-2">
                        <div className="h-px flex-1 bg-crz-outline/50" />
                        <span className="text-xs font-medium text-[#9FA8A3]">or</span>
                        <div className="h-px flex-1 bg-crz-outline/50" />
                      </div>

                      {/* Email/password */}
                      <button
                        type="button"
                        onClick={() => {
                          setFormError('')
                          setStep('credentials')
                        }}
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-crz-outline/70 bg-crz-surface text-sm font-semibold text-crz-text transition hover:bg-crz-surfaceAlt active:scale-[0.98]"
                      >
                        <User size={16} />
                        Sign in with email & password
                      </button>
                    </div>

                    <div className="mt-auto pt-8">
                      <p className="text-xs leading-6 text-[#9FA8A3]">
                        By signing in you agree to our{' '}
                        <Link to="/legal/terms-and-conditions" className="font-semibold text-[#4C9B86]">
                          Terms
                        </Link>{' '}
                        and{' '}
                        <Link to="/legal/privacy-policy" className="font-semibold text-[#4C9B86]">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* ── Step: Mobile number input ── */}
                {step === 'mobile-input' && (
                  <motion.div key="mobile-input" {...loginTransition} className="flex flex-1 flex-col">
                    <button
                      type="button"
                      onClick={() => {
                        setFormError('')
                        setStep('choose')
                      }}
                      className="mb-6 flex w-fit items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-[#6F6F6F] transition hover:text-[#1B1B1B]"
                    >
                      <ArrowLeft size={14} />
                      Back
                    </button>

                    <div className="mb-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4C9B86]/10 text-[#4C9B86]">
                        <Phone size={24} strokeWidth={1.8} />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-[#1B1B1B]">
                        Enter your mobile number
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-[#6F6F6F]">
                        We'll send a 6-digit verification code to confirm your identity.
                      </p>
                    </div>

                    <form onSubmit={handlePhoneSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="host-phone"
                          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6F6F6F]"
                        >
                          Mobile number
                        </label>
                        <div className="relative">
                          <Phone
                            size={15}
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9FA8A3]"
                          />
                          <Input
                            id="host-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="!h-14 !rounded-xl pl-10 text-base"
                            placeholder="+91 98765 43210"
                            autoComplete="tel"
                            autoFocus
                          />
                        </div>
                      </div>

                      {formError && (
                        <p className="rounded-lg border border-crz-error/30 bg-crz-error/8 px-4 py-2.5 text-sm text-crz-error">
                          {formError}
                        </p>
                      )}

                      <Button type="submit" size="lg" className="!h-14 w-full !rounded-xl">
                        Send verification code
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </form>
                  </motion.div>
                )}

                {/* ── Step: OTP verification ── */}
                {step === 'otp-verify' && (
                  <motion.div key="otp-verify" {...loginTransition} className="flex flex-1 flex-col">
                    <button
                      type="button"
                      onClick={() => {
                        setFormError('')
                        setOtp(['', '', '', '', '', ''])
                        setStep('mobile-input')
                      }}
                      className="mb-6 flex w-fit items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-[#6F6F6F] transition hover:text-[#1B1B1B]"
                    >
                      <ArrowLeft size={14} />
                      Change number
                    </button>

                    <div className="mb-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4C9B86]/10 text-[#4C9B86]">
                        <LockKeyhole size={24} strokeWidth={1.8} />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-[#1B1B1B]">
                        Verify your number
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-[#6F6F6F]">
                        Enter the 6-digit code sent to{' '}
                        <span className="font-semibold text-[#1B1B1B]">{phone}</span>
                      </p>
                    </div>

                    <form onSubmit={handleOtpSubmit} className="space-y-6">
                      <div className="flex justify-center gap-3">
                        {otp.map((digit, i) => (
                          <input
                            key={i}
                            ref={(el) => {
                              otpRefs.current[i] = el
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(i, e.target.value)}
                            onKeyDown={(e) => handleOtpKeyDown(i, e)}
                            className="h-14 w-12 rounded-xl border-2 border-crz-outline/70 bg-crz-surface text-center text-xl font-bold text-[#1B1B1B] transition focus:border-[#4C9B86] focus:outline-none focus:ring-2 focus:ring-[#4C9B86]/20 sm:h-16 sm:w-14"
                            autoFocus={i === 0}
                          />
                        ))}
                      </div>

                      {formError && (
                        <p className="rounded-lg border border-crz-error/30 bg-crz-error/8 px-4 py-2.5 text-sm text-crz-error">
                          {formError}
                        </p>
                      )}

                      <Button type="submit" size="lg" className="!h-14 w-full !rounded-xl">
                        Verify and sign in
                        <BadgeCheck size={16} className="ml-2" />
                      </Button>

                      <p className="text-center text-sm text-[#6F6F6F]">
                        Didn't get the code?{' '}
                        <button type="button" className="font-semibold text-[#4C9B86]">
                          Resend
                        </button>
                      </p>
                    </form>
                  </motion.div>
                )}

                {/* ── Step: Email & password ── */}
                {step === 'credentials' && (
                  <motion.div key="credentials" {...loginTransition} className="flex flex-1 flex-col">
                    <button
                      type="button"
                      onClick={() => {
                        setFormError('')
                        setStep('choose')
                      }}
                      className="mb-6 flex w-fit items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-[#6F6F6F] transition hover:text-[#1B1B1B]"
                    >
                      <ArrowLeft size={14} />
                      Back
                    </button>

                    <div className="mb-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4C9B86]/10 text-[#4C9B86]">
                        <User size={24} strokeWidth={1.8} />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-[#1B1B1B]">
                        Sign in with credentials
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-[#6F6F6F]">
                        Use your host email and password to access the dashboard.
                      </p>
                    </div>

                    <form onSubmit={handleCredentialSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="host-username"
                          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6F6F6F]"
                        >
                          Email or username
                        </label>
                        <div className="relative">
                          <User
                            size={15}
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9FA8A3]"
                          />
                          <Input
                            id="host-username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="!h-14 !rounded-xl pl-10 text-base"
                            autoComplete="username"
                            placeholder="host@crozroad.com"
                            autoFocus
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="host-password"
                          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6F6F6F]"
                        >
                          Password
                        </label>
                        <div className="relative">
                          <LockKeyhole
                            size={15}
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9FA8A3]"
                          />
                          <Input
                            id="host-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="!h-14 !rounded-xl pl-10 text-base"
                            autoComplete="current-password"
                          />
                        </div>
                      </div>

                      {formError && (
                        <p className="rounded-lg border border-crz-error/30 bg-crz-error/8 px-4 py-2.5 text-sm text-crz-error">
                          {formError}
                        </p>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="!h-14 w-full !rounded-xl"
                        disabled={loginMutation.isPending}
                      >
                        {loginMutation.isPending ? 'Signing in...' : 'Sign in to dashboard'}
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </form>

                    <div className="mt-6 border-t border-crz-outline/50 pt-4 text-xs leading-6 text-[#9FA8A3]">
                      Need legal details first?{' '}
                      <Link to="/legal/terms-and-conditions" className="font-semibold text-[#4C9B86]">
                        Read terms
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>

            {/* Mobile-only slides (below login on small screens) */}
            <div className="mt-6 overflow-hidden rounded-3xl bg-[#1C1E1F] p-6 sm:p-8 lg:hidden">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4C9B86]/15 text-[#6FB8A5]">
                  <Building2 size={18} strokeWidth={1.8} />
                </div>
                <p className="text-sm font-bold text-white">Why host on Crozroad?</p>
              </div>
              <div className="space-y-4">
                {hostSlides.slice(0, 3).map((slide) => {
                  const SlideIcon = slide.icon
                  return (
                    <div key={slide.badge} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          slide.color === 'mint'
                            ? 'bg-[#4C9B86]/12 text-[#6FB8A5]'
                            : 'bg-[#D6A85E]/12 text-[#E3C58A]'
                        }`}
                      >
                        <SlideIcon size={15} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{slide.title}</p>
                        <p className="mt-0.5 text-xs leading-5 text-white/50">{slide.highlight}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Host-only app coming soon */}
      <section className="border-t border-crz-outline/50 bg-gradient-to-br from-[#1C1E1F] to-[#242627] py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={variant}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="mx-auto mb-5 w-fit !border-[#E3C58A]/30 !bg-[#E3C58A]/10 !text-[#E3C58A]">
              Coming Soon
            </Badge>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Crozroad Host App
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/60">
              A dedicated mobile app built exclusively for hosts. Manage bookings, respond to guests,
              update listings, and track performance on the go. Everything you do on the web dashboard,
              now optimized for your phone.
            </p>
            <div className="mx-auto mt-8 grid max-w-md gap-4 sm:grid-cols-3">
              {[
                { icon: Smartphone, label: 'iOS & Android' },
                { icon: Zap, label: 'Real-time alerts' },
                { icon: Users, label: 'Guest messaging' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/8 bg-white/4 p-5"
                >
                  <item.icon size={22} className="text-[#6FB8A5]" strokeWidth={1.8} />
                  <p className="text-xs font-semibold text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm font-medium text-[#6FB8A5]">
              Early access coming soon
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HostLoginPage
