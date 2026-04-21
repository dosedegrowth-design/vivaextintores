import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5511942925865&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Viva%20Extintores.'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  )
}
