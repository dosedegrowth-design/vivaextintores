import Hero from '../components/Hero'
import ClientCarousel from '../components/ClientCarousel'
import Stats from '../components/Stats'
import LaudosSection from '../components/LaudosSection'
import ObrasSection from '../components/ObrasSection'
import EquipamentosSection from '../components/EquipamentosSection'
import BusinessTypes from '../components/BusinessTypes'
import Testimonials from '../components/Testimonials'
import Steps from '../components/Steps'
import HelpBanner from '../components/HelpBanner'
import FinalCTA from '../components/FinalCTA'
import PhotoGallery from '../components/PhotoGallery'
import ExitPopup from '../components/ExitPopup'

export default function Home() {
  return (
    <>
      <main role="main">
        <Hero />
        <ClientCarousel />
        <Stats />
        <LaudosSection />
        <ObrasSection />
        <EquipamentosSection />
        <BusinessTypes />
        <Testimonials />
        <Steps />
        <HelpBanner />
        <FinalCTA />
        <PhotoGallery />
      </main>
      <ExitPopup />
    </>
  )
}
