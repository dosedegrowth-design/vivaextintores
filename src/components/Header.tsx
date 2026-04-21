import { useState, useCallback, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5511942925865&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20os%20servi%C3%A7os%20da%20Viva%20Extintores.'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobile = useCallback(() => setMobileOpen(prev => !prev), [])
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo" aria-label="Viva Extintores">
          <img src="/logos/viva-logo.png" alt="Viva Extintores" />
        </a>

        <nav className="desktop-nav">
          <a href="#laudos">Laudos AVCB/CLCB</a>
          <a href="#obras">Projetos & Obras</a>
          <a href="#equipamentos">Equipamentos</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="tel:+5511942925865" className="header-phone">
            <Phone size={16} />
            <span>(11) 94292-5865</span>
          </a>
          <a href={WHATSAPP_URL} className="btn btn-green btn-sm" target="_blank" rel="noopener noreferrer">
            Orçamento Grátis
          </a>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMobile} aria-label="Abrir menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <a href="#laudos" onClick={closeMobile}>Laudos AVCB/CLCB</a>
        <a href="#obras" onClick={closeMobile}>Projetos & Obras</a>
        <a href="#equipamentos" onClick={closeMobile}>Equipamentos</a>
        <a href="#depoimentos" onClick={closeMobile}>Depoimentos</a>
        <a href="tel:+5511942925865" className="mobile-phone-link" onClick={closeMobile}>
          <Phone size={18} /> (11) 94292-5865
        </a>
        <a href={WHATSAPP_URL} className="btn btn-green" target="_blank" rel="noopener noreferrer" onClick={closeMobile}>
          Solicitar Orçamento
        </a>
      </nav>
    </header>
  )
}
