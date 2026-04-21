import { useState, useEffect, type FormEvent } from 'react'
import { X, Phone, Shield, Clock } from 'lucide-react'

const POPUP_KEY = 'viva-exit-popup-v2'
const TIMER_DURATION = 15 * 60 // 15 minutos

function formatTime(secs: number) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0')
  const s = (secs % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(TIMER_DURATION)

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [servico, setServico] = useState('')

  useEffect(() => {
    const lastShown = localStorage.getItem(POPUP_KEY)
    if (lastShown) {
      const diff = Date.now() - parseInt(lastShown, 10)
      if (diff < 7 * 24 * 60 * 60 * 1000) return
    }

    let shown = false
    const show = () => {
      if (shown) return
      shown = true
      setIsVisible(true)
      localStorage.setItem(POPUP_KEY, String(Date.now()))
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show()
    }

    const handleScroll = () => {
      const scrolled = (window.scrollY + window.innerHeight) / document.body.scrollHeight
      if (scrolled >= 0.6) show()
    }

    const fallbackTimer = setTimeout(show, 45000)

    const mountTimer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
      window.addEventListener('scroll', handleScroll, { passive: true })
    }, 3000)

    return () => {
      clearTimeout(fallbackTimer)
      clearTimeout(mountTimer)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setSecondsLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [isVisible])

  const handleClose = () => setIsVisible(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const msg = `Olá! Vi a oferta do popup (15% OFF Laudo AVCB/CLCB) e quero aproveitar.

*Nome:* ${nome}
*Telefone:* ${telefone}
*Serviço:* ${servico || 'Não informado'}

Aguardo retorno urgente!`

    const url = `https://api.whatsapp.com/send/?phone=5511942925865&text=${encodeURIComponent(msg)}`

    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'exit_popup_conversion', {
        service: servico || 'não informado',
      })
    }

    window.open(url, '_blank')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="exit-popup-overlay" onClick={handleClose}>
      <div className="exit-popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="exit-popup-close" onClick={handleClose} aria-label="Fechar">
          <X size={20} />
        </button>

        <div className="exit-popup-content">
          <div className="exit-popup-badge">🎁 OFERTA EXCLUSIVA</div>

          <h2 className="exit-popup-title">
            Espere! <span>Não Saia Sem Aproveitar</span>
          </h2>

          <p className="exit-popup-subtitle">
            Ganhe <strong>15% OFF</strong> no Laudo AVCB/CLCB
            <br/>+ <strong>Consultoria Técnica Grátis</strong>
          </p>

          <div className="exit-popup-timer">
            <Clock size={18} />
            <span>Oferta expira em:</span>
            <strong>{formatTime(secondsLeft)}</strong>
          </div>

          <form onSubmit={handleSubmit} className="exit-popup-form">
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="WhatsApp — (11) 99999-9999"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
              required
            />
            <select value={servico} onChange={e => setServico(e.target.value)} required>
              <option value="">Qual serviço?</option>
              <option value="Laudo AVCB">Laudo AVCB</option>
              <option value="Laudo CLCB">Laudo CLCB</option>
              <option value="Projeto PPCI">Projeto Técnico (PPCI)</option>
              <option value="Execução de Obra">Execução de Obra</option>
              <option value="Outro">Outro</option>
            </select>

            <button type="submit" className="exit-popup-cta">
              <Phone size={18} />
              Quero Aproveitar a Oferta
            </button>
          </form>

          <div className="exit-popup-benefits">
            <div className="exit-benefit-item"><Shield size={14} /> Engenheiros CREA</div>
            <div className="exit-benefit-item"><Clock size={14} /> Resposta em 2h</div>
          </div>

          <button className="exit-popup-cta-secondary" onClick={handleClose}>
            Não, prefiro pagar o preço cheio.
          </button>
        </div>
      </div>
    </div>
  )
}
