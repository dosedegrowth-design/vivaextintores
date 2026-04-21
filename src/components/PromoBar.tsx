import { useState, useEffect } from 'react'

const messages = [
  { icon: '🔥', strong: '15% OFF em Laudos AVCB/CLCB', detail: 'Válido até o fim do mês' },
  { icon: '⚡', strong: 'Orçamento em 2h úteis', detail: 'Laudo pronto em até 15 dias' },
  { icon: '📞', strong: '(11) 94292-5865', detail: 'Engenheiros CREA atendendo agora' },
]

export default function PromoBar() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(prev => (prev + 1) % messages.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const current = messages[idx]

  return (
    <div className="promo-bar">
      <div className="container">
        <p key={idx}>
          <span className="promo-main">{current.icon} <strong>{current.strong}</strong></span>
          <span className="promo-detail">• {current.detail}</span>
        </p>
      </div>
    </div>
  )
}
