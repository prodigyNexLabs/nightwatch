import { NavLink, useNavigate } from 'react-router-dom'
import { siteConfig } from '../../config/site.config'
import { useUIStore } from '../../store/useUIStore'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'
import Container from './Container'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const contactPath = '/contact'

const Navbar = () => {
  const { isNavOpen, toggleNav, setNavOpen } = useUIStore()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-sand/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <NavLink
          to="/"
          className="text-lg font-bold uppercase tracking-[0.2em] text-slate-900"
          onClick={() => setNavOpen(false)}
        >
          {siteConfig.appName}
        </NavLink>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  'transition hover:text-slate-900',
                  isActive ? 'text-slate-900' : 'text-slate-600',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button
            onClick={() => {
              setNavOpen(false)
              navigate(contactPath)
            }}
          >
            Get the App
          </Button>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm md:hidden"
          onClick={toggleNav}
        >
          <span className="text-xs font-semibold">{isNavOpen ? 'Close' : 'Menu'}</span>
        </button>
      </Container>
      {isNavOpen ? (
        <div className="border-t border-white/60 bg-sand md:hidden">
          <Container className="flex flex-col gap-4 py-4 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setNavOpen(false)}
                className={({ isActive }: { isActive: boolean }) =>
                  cn(
                    'transition hover:text-slate-900',
                    isActive ? 'text-slate-900' : 'text-slate-600',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              onClick={() => {
                setNavOpen(false)
                navigate(contactPath)
              }}
              className="w-full"
            >
              Get the App
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
