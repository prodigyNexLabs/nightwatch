import PageTransition from '../../components/layout/PageTransition'
import CTASection from '../../components/sections/CTASection'
import FeatureGrid from '../../components/sections/FeatureGrid'
import HeroSection from '../../components/sections/HeroSection'
import SignalBoard from '../../components/sections/SignalBoard'

const Landing = () => (
  <PageTransition>
    <HeroSection />
    <FeatureGrid />
    <SignalBoard />
    <CTASection />
  </PageTransition>
)

export default Landing
