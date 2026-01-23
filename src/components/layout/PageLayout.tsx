import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../app/ScrollToTop'
import Footer from './Footer'
import Navbar from './Navbar'

const PageLayout = () => (
  <div className="flex min-h-screen flex-col bg-sand">
    <ScrollToTop />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default PageLayout
