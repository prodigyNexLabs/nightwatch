import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import About from '../pages/About'
import Brochure from '../pages/Brochure'
import Contact from '../pages/Contact'
import Landing from '../pages/Landing'
import HostingRules from '../pages/legal/HostingRules'
import HostingTerms from '../pages/legal/HostingTerms'
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
          <Route path="brochure" element={<Brochure />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy/web" element={<PrivacyPolicyWeb />} />
          <Route path="terms/web" element={<TermsWeb />} />
          <Route path="hosting/rules" element={<HostingRules />} />
          <Route path="hosting/terms" element={<HostingTerms />} />
        </Route>
        <Route path="privacy/mobile" element={<PrivacyPolicyMobile />} />
        <Route path="terms/mobile" element={<TermsMobile />} />
      </Routes>
    </AnimatePresence>
  )
}
