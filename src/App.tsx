import PromoBar from './components/PromoBar'
import Header from './components/Header'
import Hero from './components/Hero'
import ClientCarousel from './components/ClientCarousel'
import Stats from './components/Stats'
import LaudosSection from './components/LaudosSection'
import ObrasSection from './components/ObrasSection'
import EquipamentosSection from './components/EquipamentosSection'
import BusinessTypes from './components/BusinessTypes'
import Testimonials from './components/Testimonials'
import Steps from './components/Steps'
import HelpBanner from './components/HelpBanner'
import FinalCTA from './components/FinalCTA'
import PhotoGallery from './components/PhotoGallery'
import Footer from './components/Footer'
import ExitPopup from './components/ExitPopup'
import MobileFixedBar from './components/MobileFixedBar'
import BackToTop from './components/BackToTop'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="app-container">
      <PromoBar />
      <Header />

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

      <Footer />

      <WhatsAppFloat />
      <BackToTop />
      <MobileFixedBar />
      <ExitPopup />
    </div>
  )
}

export default App
