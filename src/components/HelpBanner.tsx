import { Phone } from 'lucide-react'

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5511942925865&text=Ol%C3%A1!%20Vim%20do%20site%20e%20preciso%20de%20ajuda%20com%20a%20regulariza%C3%A7%C3%A3o%20do%20meu%20im%C3%B3vel%20junto%20ao%20Corpo%20de%20Bombeiros.%20Gostaria%20de%20falar%20com%20um%20engenheiro%20especialista.'

export default function HelpBanner() {
  return (
    <section className="help-banner">
      <div className="container">
        <span className="badge-cta-top">🎯 Consultoria Técnica Especializada</span>
        <h2>Precisa Regularizar Seu Imóvel com o Corpo de Bombeiros?</h2>
        <p className="help-subtitle">
          Fale com nossos engenheiros CREA e receba análise técnica gratuita do seu caso
        </p>
        <a href={WHATSAPP_URL} className="btn btn-yellow btn-lg" target="_blank" rel="noopener noreferrer" style={{ marginTop: 6 }}>
          <Phone size={20} />
          Falar com Engenheiro Especialista
        </a>
        <p className="help-guarantee">✓ Atendimento imediato • Orçamento sem compromisso</p>
      </div>
    </section>
  )
}
