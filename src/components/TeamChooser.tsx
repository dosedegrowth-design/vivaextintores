import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

// ─────────────────────────────────────────────────────────────
// Seletor de equipe: todo clique de WhatsApp no site abre este
// card para o cliente escolher com quem falar.
// Felipe  → AVCB, Projetos, Obras e ART/RRT
// Cláudia → CLCB, Recargas, Extintores e demais serviços
// ─────────────────────────────────────────────────────────────

// Avatares ilustrativos (flat) — substituir por fotos reais quando disponíveis
function AvatarFelipe() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#E8EEF5" />
      {/* pescoço */}
      <rect x="42" y="56" width="16" height="14" rx="6" fill="#C98E63" />
      {/* camisa */}
      <path d="M18 100c2-20 14-30 32-30s30 10 32 30Z" fill="#28517E" />
      <path d="M44 70h12l-6 12z" fill="#1D3C5F" />
      {/* cabeça */}
      <ellipse cx="50" cy="40" rx="17" ry="19" fill="#D9A06F" />
      {/* orelhas */}
      <circle cx="33.5" cy="41" r="3.4" fill="#D9A06F" />
      <circle cx="66.5" cy="41" r="3.4" fill="#D9A06F" />
      {/* cabelo curto */}
      <path d="M33 38c-1-12 7-19 17-19s18 7 17 19c-.5-6-3-9-5-9 1 2 1 4 1 5-4-6-9-8-13-8s-9 2-13 8c0-1 0-3 1-5-2 0-4.5 3-5 9Z" fill="#2E2620" />
      {/* sobrancelhas */}
      <rect x="39" y="37" width="8" height="2.4" rx="1.2" fill="#2E2620" />
      <rect x="53" y="37" width="8" height="2.4" rx="1.2" fill="#2E2620" />
      {/* olhos */}
      <circle cx="43" cy="43" r="2" fill="#1F2937" />
      <circle cx="57" cy="43" r="2" fill="#1F2937" />
      {/* barba rala / sorriso */}
      <path d="M44 53c2 2.5 10 2.5 12 0" stroke="#7A4A28" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function AvatarClaudia() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#F4E8EE" />
      {/* cabelo atrás */}
      <path d="M27 72c-3-14-3-30 4-40 5-7 12-11 19-11s14 4 19 11c7 10 7 26 4 40l-10 6H37Z" fill="#3B2A24" />
      {/* pescoço */}
      <rect x="42" y="56" width="16" height="14" rx="6" fill="#C98E63" />
      {/* blusa */}
      <path d="M18 100c2-20 14-30 32-30s30 10 32 30Z" fill="#8D3F67" />
      {/* cabeça */}
      <ellipse cx="50" cy="41" rx="16" ry="18.5" fill="#D9A06F" />
      {/* franja */}
      <path d="M34 40c-1-12 6-20 16-20s17 8 16 20c-1-6-4-9-6-10 1 2 1 3 1 4-3-4-7-6-11-6s-8 2-11 6c0-1 0-2 1-4-2 1-5 4-6 10Z" fill="#3B2A24" />
      {/* mechas laterais */}
      <path d="M34 39c-2 6-2 14 0 20-4-2-6-5-6-10s2-8 6-10Z" fill="#3B2A24" />
      <path d="M66 39c2 6 2 14 0 20 4-2 6-5 6-10s-2-8-6-10Z" fill="#3B2A24" />
      {/* sobrancelhas */}
      <rect x="39.5" y="37.5" width="7.5" height="2.2" rx="1.1" fill="#3B2A24" />
      <rect x="53" y="37.5" width="7.5" height="2.2" rx="1.1" fill="#3B2A24" />
      {/* olhos */}
      <circle cx="43.5" cy="43" r="2" fill="#1F2937" />
      <circle cx="56.5" cy="43" r="2" fill="#1F2937" />
      {/* sorriso */}
      <path d="M44.5 52.5c2 2.5 9 2.5 11 0" stroke="#A85B32" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* brincos */}
      <circle cx="34" cy="47" r="1.6" fill="#FBBF24" />
      <circle cx="66" cy="47" r="1.6" fill="#FBBF24" />
    </svg>
  )
}

const TEAM = [
  {
    id: 'felipe',
    name: 'Falar com Felipe',
    services: 'AVCB, Projetos, Obras e ART/RRT',
    phone: '5511947095259',
    Avatar: AvatarFelipe,
    photoClass: 'team-photo-felipe',
  },
  {
    id: 'claudia',
    name: 'Falar com Cláudia',
    services: 'CLCB, Recargas, Extintores e demais serviços',
    phone: '5511942925865',
    Avatar: AvatarClaudia,
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
              <p.Avatar />
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
