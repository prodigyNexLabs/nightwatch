import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import EmbeddableLayout from '../components/layout/EmbeddableLayout'
import HostDashboardLayout from '../components/layout/HostDashboardLayout'
import PageLayout from '../components/layout/PageLayout'
import ContactPage from '../pages/Contact'
import DownloadPage from '../pages/Download'
import AppStorePage from '../pages/Download/AppStorePage'
import PlayStorePage from '../pages/Download/PlayStorePage'
import FAQPage from '../pages/Faq'
import Landing from '../pages/Landing'
import NotFoundPage from '../pages/NotFound'
import HostAuthRedirectPage from '../pages/host/HostAuthRedirectPage'
import HostLoginPage from '../pages/host/HostLoginPage'
import HostListingsPage from '../pages/host/dashboard/HostListingsPage'
import HostOverviewPage from '../pages/host/dashboard/HostOverviewPage'
import HostProfilePage from '../pages/host/dashboard/HostProfilePage'
import HostRequestsPage from '../pages/host/dashboard/HostRequestsPage'
import PrivacyPolicyPage from '../pages/legal/PrivacyPolicy'
import RentingTermsPage from '../pages/legal/RentingTerms'
import TermsConditionsPage from '../pages/legal/TermsConditions'
import UserTermsPage from '../pages/legal/UserTerms'
import RequireHostAuth from '../routes/RequireHostAuth'

export const AppRouter = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main pages - always have Navbar + Footer */}
        <Route element={<PageLayout />}>
          <Route index element={<Landing />} />
        </Route>

        {/* Embeddable pages - hide Navbar/Footer when ?embedded=1 (iOS/Android in-app webview) */}
        <Route element={<EmbeddableLayout />}>
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="download" element={<DownloadPage />} />
          <Route path="download/ios" element={<AppStorePage />} />
          <Route path="download/android" element={<PlayStorePage />} />

          <Route path="legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="legal/terms-and-conditions" element={<TermsConditionsPage />} />
          <Route path="legal/renting-terms" element={<RentingTermsPage />} />
          <Route path="legal/user-terms" element={<UserTermsPage />} />
        </Route>

        {/* Legacy redirects */}
        <Route path="privacy" element={<Navigate to="/legal/privacy-policy" replace />} />
        <Route path="terms" element={<Navigate to="/legal/terms-and-conditions" replace />} />

        {/* Host auth (standalone pages, no layout) */}
        <Route path="host">
          <Route index element={<Navigate to="auth" replace />} />
          <Route path="auth" element={<HostAuthRedirectPage />} />
          <Route path="login" element={<HostLoginPage />} />
        </Route>

        {/* Host dashboard (authenticated) */}
        <Route element={<RequireHostAuth />}>
          <Route path="host/dashboard" element={<HostDashboardLayout />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<HostOverviewPage />} />
            <Route path="listings" element={<HostListingsPage />} />
            <Route path="requests" element={<HostRequestsPage />} />
            <Route path="profile" element={<HostProfilePage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}
