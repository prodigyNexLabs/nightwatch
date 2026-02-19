import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { selectIsHostAuthenticated, useHostAuthStore } from '../../store/useHostAuthStore'

const HostAuthRedirectPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isAuthenticated = useHostAuthStore(selectIsHostAuthenticated)

  useEffect(() => {
    const next = searchParams.get('next') || '/host/dashboard/overview'

    if (isAuthenticated) {
      navigate(next, { replace: true })
      return
    }

    const params = new URLSearchParams({ redirect: next })
    navigate(`/host/login?${params.toString()}`, { replace: true })
  }, [isAuthenticated, navigate, searchParams])

  return (
    <div className="flex min-h-screen items-center justify-center px-5 text-sm text-crz-softText">
      Preparing host authentication...
    </div>
  )
}

export default HostAuthRedirectPage
