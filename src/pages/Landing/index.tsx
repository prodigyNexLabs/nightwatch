import PageTransition from '../../components/layout/PageTransition'
import CTASection from '../../components/sections/CTASection'
import FeatureGrid from '../../components/sections/FeatureGrid'
import HeroSection from '../../components/sections/HeroSection'
import PillarsSection from '../../components/sections/PillarsSection'
import SignalBoard from '../../components/sections/SignalBoard'

const Landing = () => (
  <PageTransition>
    <HeroSection />
    <PillarsSection />
    <FeatureGrid />
    <SignalBoard />
    <CTASection />
  </PageTransition>
)

export default Landing
