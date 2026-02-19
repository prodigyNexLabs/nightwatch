import { motion } from 'framer-motion'
import { LogOut, Menu, Settings, SquareChartGantt, Ticket, UsersRound } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { siteConfig } from '../../config/site.config'
import { useHostAuthStore } from '../../store/useHostAuthStore'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'

const hostLinks = [
  { label: 'Overview', href: '/host/dashboard/overview', icon: SquareChartGantt },
  { label: 'Listings', href: '/host/dashboard/listings', icon: Settings },
  { label: 'Requests', href: '/host/dashboard/requests', icon: Ticket },
  { label: 'Profile', href: '/host/dashboard/profile', icon: UsersRound },
]

const HostDashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const hostUser = useHostAuthStore((state) => state.hostUser)
  const logout = useHostAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    navigate('/host/login')
  }

  return (
    <div className="min-h-screen bg-grid bg-crz-bg">
      <div className="grid min-h-screen lg:grid-cols-[290px_1fr]">
        <aside className="hidden border-r border-crz-outline/70 bg-crz-surface/90 p-6 lg:block">
          <div className="space-y-6">
            <div className="space-y-3">
              <img src="/banner.png" alt="Crozroad" className="h-8 w-auto" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crz-softText">Host Operations</p>
            </div>

            <nav className="space-y-2">
              {hostLinks.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold transition',
                        isActive
                          ? 'bg-crz-primary text-white shadow-card'
                          : 'text-crz-softText hover:bg-crz-surfaceAlt hover:text-crz-text',
                      )
                    }
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </NavLink>
                )
              })}
            </nav>

            <div className="rounded-lg border border-crz-outline/70 bg-crz-surfaceAlt/75 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-crz-softText">Signed in as</p>
              <p className="mt-2 text-sm font-semibold text-crz-text">{hostUser?.email ?? 'host@crozroad.com'}</p>
              <Button variant="ghost" size="sm" className="mt-3 w-full" onClick={handleLogout}>
                <LogOut size={14} className="mr-2" />
                Sign out
              </Button>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-between border-b border-crz-outline/70 bg-crz-surface/85 px-5 py-4 backdrop-blur-md lg:px-8">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-crz-outline/70 lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle dashboard menu"
            >
              <Menu size={17} />
            </button>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-crz-softText">{siteConfig.platformName}</p>
              <h1 className="font-display text-lg font-semibold text-crz-text">Host Control Center</h1>
            </div>

            <Button variant="ghost" size="sm" onClick={handleLogout} className="hidden sm:inline-flex">
              <LogOut size={14} className="mr-2" />
              Logout
            </Button>
          </header>

          {mobileOpen ? (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-b border-crz-outline/70 bg-crz-surface/95 px-4 py-4 lg:hidden"
            >
              <div className="grid gap-2">
                {hostLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold',
                          isActive ? 'bg-crz-primary text-white' : 'text-crz-softText',
                        )
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      <Icon size={16} />
                      {item.label}
                    </NavLink>
                  )
                })}
              </div>
            </motion.nav>
          ) : null}

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default HostDashboardLayout
