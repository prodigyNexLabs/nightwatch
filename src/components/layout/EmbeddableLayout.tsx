import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../app/ScrollToTop'
import { useEmbeddedMode } from '../../utils/useEmbeddedMode'
import Footer from './Footer'
import Navbar from './Navbar'

/**
 * Layout that hides Navbar and Footer when `?embedded=1` is present.
 * Used for legal/FAQ/contact pages loaded inside iOS/Android in-app webviews.
 */
const EmbeddableLayout = () => {
  const isEmbedded = useEmbeddedMode()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      {!isEmbedded && <Navbar />}
      <main className={`flex-1 ${isEmbedded ? 'pb-8 pt-4' : ''}`}>
        <Outlet />
      </main>
      {!isEmbedded && <Footer />}
    </div>
  )
}

export default EmbeddableLayout
