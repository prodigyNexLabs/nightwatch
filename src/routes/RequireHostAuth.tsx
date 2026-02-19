import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectIsHostAuthenticated, useHostAuthStore } from '../store/useHostAuthStore'

const RequireHostAuth = () => {
  const location = useLocation()
  const isAuthenticated = useHostAuthStore(selectIsHostAuthenticated)

  if (!isAuthenticated) {
    const redirectTo = `${location.pathname}${location.search}`
    const params = new URLSearchParams({ redirect: redirectTo })

    return <Navigate to={`/host/login?${params.toString()}`} replace />
  }

  return <Outlet />
}

export default RequireHostAuth
