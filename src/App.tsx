import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import PromoBar from './components/PromoBar'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileFixedBar from './components/MobileFixedBar'
import BackToTop from './components/BackToTop'
import WhatsAppFloat from './components/WhatsAppFloat'
import TeamChooser from './components/TeamChooser'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

/** Ao trocar de rota, sobe pro topo (a nao ser que venha com ancora) */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <PromoBar />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />

        <WhatsAppFloat />
        <BackToTop />
        <MobileFixedBar />
        <TeamChooser />
      </div>
    </BrowserRouter>
  )
}

export default App
