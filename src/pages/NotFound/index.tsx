import { useNavigate } from 'react-router-dom'
import Container from '../../components/layout/Container'
import Button from '../../components/ui/Button'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="py-24">
      <Container className="max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crz-softText">404</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-crz-text">Page not found</h1>
        <p className="mt-4 text-base text-crz-softText">
          This page doesn't exist. Let's get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button onClick={() => navigate('/')}>Back to home</Button>
          <Button variant="ghost" onClick={() => navigate('/host/login')}>
            Host login
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default NotFoundPage
