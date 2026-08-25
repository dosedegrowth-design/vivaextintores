import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

// ─────────────────────────────────────────────────────────────
// Seletor de equipe: todo clique de WhatsApp no site abre este
// card para o cliente escolher com quem falar.
// Felipe  → AVCB, Projetos, Obras e ART/RRT
// Cláudia → CLCB, Recargas, Extintores e demais serviços
// ─────────────────────────────────────────────────────────────

// Fotos reais da equipe (public/equipe/)
const TEAM = [
  {
    id: 'felipe',
    name: 'Falar com Felipe',
    services: 'AVCB, Projetos, Obras e ART/RRT',
    phone: '5511947095259',
    photo: '/equipe/felipe.jpg',
    photoClass: 'team-photo-felipe',
  },
  {
    id: 'claudia',
    name: 'Falar com Cláudia',
    services: 'CLCB, Recargas, Extintores e demais serviços',
    phone: '5511942925865',
    photo: '/equipe/claudia.jpg',
    photoClass: 'team-photo-claudia',
  },
]

const DEFAULT_MSG =
  'Olá! Vim do site da Viva Extintores e gostaria de mais informações.'

let currentMsg = DEFAULT_MSG
let openChooserFn: (() => void) | null = null

/** Chamado por qualquer botão de WhatsApp do site. Guarda a mensagem
 *  pré-preenchida daquele botão e abre o seletor de equipe. */
export function openWhatsApp(message?: string) {
  currentMsg = message || DEFAULT_MSG
  if (openChooserFn) openChooserFn()
}

function WhatsIcon({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
      <path
        fill="currentColor"
        stroke="none"
        d="M16.6 14.9c-.2.5-1 1-1.4 1-.4.1-.9.1-1.4-.1-.3-.1-.8-.2-1.3-.5-2.3-1-3.8-3.3-3.9-3.5-.1-.1-.9-1.2-.9-2.2 0-1.1.5-1.6.7-1.8.2-.2.4-.2.6-.2h.4c.2 0 .3 0 .5.4l.7 1.6c.1.2.1.3 0 .5l-.3.4-.3.4c-.1.1-.2.2-.1.4.1.2.6.9 1.3 1.5.8.8 1.5 1 1.7 1.1.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.7c.2.1.4.2.4.3.1.2.1.5-.1 1Z"
      />
    </svg>
  )
}

export default function TeamChooser() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    openChooserFn = () => setOpen(true)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    // Intercepta TODO clique em link de WhatsApp do site: em vez de abrir
    // direto, guarda a mensagem daquele botão e mostra o seletor de equipe.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.('a[href*="api.whatsapp.com"], a[href*="wa.me"]')
      if (!anchor) return
      e.preventDefault()
      const href = anchor.getAttribute('href') || ''
      const text = new URL(href).searchParams.get('text')
      openWhatsApp(text || undefined)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick, true)
    return () => {
      openChooserFn = null
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick, true)
    }
  }, [])

  const choose = (phone: string, personId: string) => {
    const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(currentMsg)}`

    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (w.gtag) {
      w.gtag('event', 'whatsapp_team_choice', { person: personId })
    }

    window.open(url, '_blank')
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="team-overlay"
      onClick={e => {
        if (e.target === e.currentTarget) setOpen(false)
      }}
    >
      <div className="team-widget" role="dialog" aria-modal="true" aria-label="Fale com nossa equipe">
        <button className="team-close" onClick={() => setOpen(false)} aria-label="Fechar">
          <X size={18} />
        </button>
        <h3 className="team-title">Fale com nossa equipe</h3>
        <p className="team-sub">Escolha quem deseja falar:</p>

        {TEAM.map(p => (
          <button key={p.id} className="team-person" onClick={() => choose(p.phone, p.id)}>
            <span className={`team-photo ${p.photoClass}`}>
              <img src={p.photo} alt={p.name} width={58} height={58} loading="lazy" />
            </span>
            <span className="team-info">
              <span className="team-name">{p.name}</span>
              <span className="team-services">{p.services}</span>
            </span>
            <span className="team-wa-icon">
              <WhatsIcon />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
