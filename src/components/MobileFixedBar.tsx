import { Phone, MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5511942925865&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Viva%20Extintores%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'

export default function MobileFixedBar() {
  return (
    <div className="mobile-fixed-bar" role="navigation" aria-label="Ações rápidas">
      <a href="tel:+5511942925865" className="mfb-btn mfb-btn-phone" aria-label="Ligar">
        <Phone size={18} />
        <span>Ligar</span>
      </a>
      <a
        href={WHATSAPP_URL}
        className="mfb-btn mfb-btn-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
