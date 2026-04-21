import { Phone, CheckCircle2, AlertTriangle } from 'lucide-react'

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5511942925865&text=Ol%C3%A1!%20Vim%20do%20site%20e%20quero%20regularizar%20meu%20im%C3%B3vel%20para%20obter%20o%20AVCB%2FCLCB.%20Preciso%20de%20um%20or%C3%A7amento%20completo%20para%20laudo%2C%20projeto%20e%20obra.'

const benefits = [
  'Consultoria Gratuita',
  '100% de Aprovação',
  'Acompanhamento Total',
  'Engenheiros CREA',
]

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-badge">🏆 +10 Anos Regularizando Imóveis</div>
        <h2>Evite Multas e Regularize Seu Imóvel com Segurança</h2>
        <p>Equipe técnica completa: do PPCI à vistoria final do Corpo de Bombeiros</p>

        <div className="final-warning">
          <AlertTriangle size={20} />
          <span>
            Multas por falta de regularização podem chegar a <strong>R$ 56.000 por imóvel</strong> — além do risco de interdição.
          </span>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-item">
              <CheckCircle2 size={20} className="benefit-icon" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <a href={WHATSAPP_URL} className="btn btn-green btn-xl pulse-cta" target="_blank" rel="noopener noreferrer">
          <Phone size={20} />
          Solicitar Orçamento Técnico Agora
        </a>

        <p style={{ marginTop: 20, color: 'var(--dark-muted)', fontSize: 14 }}>
          📍 Atendemos SP, MG, RJ, PR e SC • ⚡ Resposta em até 2h úteis
        </p>
      </div>
    </section>
  )
}
