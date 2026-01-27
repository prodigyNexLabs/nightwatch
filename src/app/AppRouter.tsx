import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Landing from '../pages/Landing'
import PrivacyPolicyMobile from '../pages/legal/PrivacyPolicyMobile'
import PrivacyPolicyWeb from '../pages/legal/PrivacyPolicyWeb'
import TermsMobile from '../pages/legal/TermsMobile'
import TermsWeb from '../pages/legal/TermsWeb'

export const AppRouter = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<PageLayout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicyWeb />} />
          <Route path="terms" element={<TermsWeb />} />
        </Route>
        <Route path="privacy/mobile" element={<PrivacyPolicyMobile />} />
        <Route path="terms/mobile" element={<TermsMobile />} />
      </Routes>
    </AnimatePresence>
  )
}
