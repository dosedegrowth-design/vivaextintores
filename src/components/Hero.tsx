import { Phone } from 'lucide-react'
import HeroForm from './HeroForm'

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5511942925865&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20solicitar%20uma%20consultoria%20gratuita%20sobre%20regulariza%C3%A7%C3%A3o%20do%20meu%20im%C3%B3vel%20junto%20ao%20Corpo%20de%20Bombeiros.'

export default function Hero() {
  return (
    <section className="hero" aria-label="Seção principal">
      <div className="container hero-split-grid">

        <div className="hero-content animate-fade-in">
          <div className="hero-badges" role="list">
            <span className="badge-trust" role="listitem">✓ Aprovado pelo CREA</span>
            <span className="badge-trust" role="listitem">✓ +10 Anos de Experiência</span>
            <span className="badge-urgency" role="listitem">⚡ Atendimento Imediato</span>
          </div>

          <h1 itemProp="name">
            Solução Completa em <br/>
            <span className="text-primary">Engenharia de Incêndio</span>
          </h1>
          <p className="hero-tagline">— Projetos, Obras, Laudos e Equipamentos —</p>
          <p className="hero-desc">
            Do laudo técnico à execução da obra. Somos especialistas na regularização do seu imóvel junto ao Corpo de Bombeiros (AVCB/CLCB), garantindo segurança total para sua empresa.
          </p>

          <div className="hero-social-proof">
            <div className="stars-container" aria-label="5 estrelas">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="social-proof-text">⭐ +1.500 obras e laudos aprovados</span>
          </div>

          <div className="hero-cta-buttons">
            <a href={WHATSAPP_URL} className="btn btn-green btn-xl pulse-cta" target="_blank" rel="noopener noreferrer">
              <Phone size={20} />
              Consultoria Gratuita
            </a>
            <a href="#laudos" className="btn btn-primary btn-xl">Ver Serviços</a>
          </div>

          <p className="urgency-text">💼 Atendimento prioritário para empresas • Resposta em até 2h úteis</p>
        </div>

        <div className="hero-form-wrapper animate-fade-in">
          <HeroForm />
        </div>

      </div>
    </section>
  )
}
