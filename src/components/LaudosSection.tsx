import { FileCheck, HardHat, Home, Building2, Phone } from 'lucide-react'

const laudos = [
  {
    id: 1,
    title: 'Laudo AVCB',
    icon: <FileCheck size={22} />,
    prazo: '10 a 20 dias úteis',
    price: 'Consulte',
    content: 'Auto de Vistoria do Corpo de Bombeiros — renovação obrigatória do CLCB. Documentação, projeto e acompanhamento de vistoria até a aprovação.',
    whatsMsg: 'Ol%C3%A1!%20Quero%20solicitar%20or%C3%A7amento%20para%20Laudo%20AVCB.',
  },
  {
    id: 2,
    title: 'Laudo CLCB',
    icon: <FileCheck size={22} />,
    prazo: '5 a 15 dias úteis',
    price: 'Consulte',
    content: 'Certificado de Licença do Corpo de Bombeiros — primeira licença de imóveis. Emitido por engenheiro CREA com todas as ARTs necessárias.',
    whatsMsg: 'Ol%C3%A1!%20Quero%20solicitar%20or%C3%A7amento%20para%20Laudo%20CLCB.',
  },
  {
    id: 3,
    title: 'ART / RRT',
    icon: <HardHat size={22} />,
    prazo: '3 a 7 dias úteis',
    price: 'A partir de R$ 350',
    content: 'Anotação/Registro de Responsabilidade Técnica emitida por engenheiro CREA ou arquiteto CAU — obrigatória para projetos e execução.',
    whatsMsg: 'Ol%C3%A1!%20Preciso%20de%20uma%20ART%2FRRT%20para%20projeto%20de%20inc%C3%AAndio.',
  },
  {
    id: 4,
    title: 'Laudos Técnicos e Estruturais',
    icon: <Home size={22} />,
    prazo: '7 a 21 dias úteis',
    price: 'Consulte',
    content: 'Avaliação completa de segurança, estabilidade e integridade da edificação. Identificamos anomalias e apontamos adequações necessárias.',
    whatsMsg: 'Ol%C3%A1!%20Quero%20um%20laudo%20t%C3%A9cnico%20estrutural.',
  },
]

export default function LaudosSection() {
  return (
    <section id="laudos" className="services" aria-labelledby="laudos-heading">
      <div className="container">
        <div className="section-title text-center">
          <p className="overtitle">
            <Building2 size={14} style={{ display: 'inline', marginRight: 6 }} />
            Laudos & Regularização
          </p>
          <h2 id="laudos-heading">Especialistas em Laudos AVCB e CLCB</h2>
          <p style={{ maxWidth: 640, margin: '0 auto 24px', fontSize: 17, color: 'var(--text-muted)' }}>
            Nossa excelência começa pela emissão precisa de Laudos e ARTs. Regularize seu imóvel com velocidade recorde.
          </p>
          <div className="title-divider"></div>
        </div>

        <div className="laudos-grid">
          {laudos.map((item) => (
            <div key={item.id} className="laudo-card">
              <div className="laudo-card-head">
                <span className="icon-wrap">{item.icon}</span>
                <h3>{item.title}</h3>
              </div>

              <p className="laudo-card-desc">{item.content}</p>

              <div className="laudo-card-meta">
                <div className="laudo-meta-item">
                  <span className="meta-label">Prazo</span>
                  <span className="meta-value">{item.prazo}</span>
                </div>
                <div className="laudo-meta-item">
                  <span className="meta-label">Investimento</span>
                  <span className="meta-value">{item.price}</span>
                </div>
              </div>

              <a
                href={`https://api.whatsapp.com/send/?phone=5511942925865&text=${item.whatsMsg}`}
                className="btn btn-green btn-sm laudo-card-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={16} />
                Solicitar Este Laudo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
