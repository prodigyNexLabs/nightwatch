import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import { siteConfig } from '../../config/site.config'
import { useUIStore } from '../../store/useUIStore'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'
import Container from './Container'

const navItems = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const navigate = useNavigate()
  const { isNavOpen, setNavOpen, toggleNav } = useUIStore()

  return (
    <header className="sticky top-0 z-50 border-b border-crz-outline/70 bg-crz-surface/85 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3 sm:py-4" wide>
        <NavLink
          to="/"
          onClick={() => setNavOpen(false)}
          className="flex items-center gap-3 rounded-md focus-visible:outline-none"
          aria-label={`${siteConfig.platformName} homepage`}
        >
          <img src="/banner.png" alt={`${siteConfig.platformName} brand`} className="hidden h-8 w-auto sm:block" />
          <span className="font-display text-sm font-semibold tracking-[0.14em] text-crz-softText sm:hidden">
            CROZROAD
          </span>
        </NavLink>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-crz-softText lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 transition duration-fast ease-standard hover:text-crz-text',
                  isActive ? 'bg-crz-surfaceAlt text-crz-text' : 'text-crz-softText',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" onClick={() => navigate('/host/auth')}>
            Host Login
          </Button>
          <Button onClick={() => navigate('/download')}>
            Download App
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 items-center justify-center rounded-md border border-crz-outline/70 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-crz-text lg:hidden"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation menu"
        >
          {isNavOpen ? 'Close' : 'Menu'}
        </button>
      </Container>

      <AnimatePresence>
        {isNavOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-t border-crz-outline/70 bg-crz-surface/95 px-5 py-5 lg:hidden"
          >
            <Container className="flex flex-col gap-3 px-0">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setNavOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-md px-3 py-2 text-sm font-semibold',
                      isActive ? 'bg-crz-surfaceAlt text-crz-text' : 'text-crz-softText',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => {
                  setNavOpen(false)
                  navigate('/host/auth')
                }}
              >
                Host Login
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  setNavOpen(false)
                  navigate('/download')
                }}
              >
                Download App
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
