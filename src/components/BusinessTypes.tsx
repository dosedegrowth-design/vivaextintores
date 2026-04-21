import { Building2, Home, Briefcase, Factory } from 'lucide-react'

const segments = [
  {
    icon: <Factory size={38} className="business-icon" />,
    title: 'Indústrias e Fábricas',
    prazo: '30 a 60 dias',
    items: ['PPCI para áreas de produção', 'Sistemas de combate especiais', 'Laudos CMAR e estanqueidade'],
    msg: 'Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20minha%20ind%C3%BAstria%2Ff%C3%A1brica.',
  },
  {
    icon: <Building2 size={38} className="business-icon" />,
    title: 'Comércio e Lojas',
    prazo: '15 a 30 dias',
    items: ['AVCB para shopping centers', 'Regularização expressa', 'Projetos para retrofit'],
    msg: 'Ol%C3%A1!%20Preciso%20de%20or%C3%A7amento%20para%20meu%20com%C3%A9rcio%2Floja.',
  },
  {
    icon: <Home size={38} className="business-icon" />,
    title: 'Condomínios Residenciais',
    prazo: '15 a 30 dias',
    items: ['CLCB para edifícios', 'Manutenção preventiva', 'Brigada de incêndio'],
    msg: 'Ol%C3%A1!%20Sou%20s%C3%ADndico%2Fadministrador%20e%20preciso%20regularizar%20o%20condom%C3%ADnio.',
  },
  {
    icon: <Briefcase size={38} className="business-icon" />,
    title: 'Escritórios e Empresas',
    prazo: '10 a 20 dias',
    items: ['Laudos para salas comerciais', 'Processo simplificado', 'Documentação completa'],
    msg: 'Ol%C3%A1!%20Preciso%20de%20regulariza%C3%A7%C3%A3o%20para%20meu%20escrit%C3%B3rio%2Fempresa.',
  },
]

export default function BusinessTypes() {
  return (
    <section className="business-types">
      <div className="container">
        <div className="section-title text-center">
          <p className="overtitle">Segmentos Atendidos</p>
          <h2>Soluções por Tipo de Estabelecimento</h2>
          <p style={{ maxWidth: 640, margin: '0 auto 24px', fontSize: 17, color: 'var(--text-muted)' }}>
            Personalizamos cada projeto ao segmento — com aprovação garantida pelo Corpo de Bombeiros
          </p>
          <div className="title-divider"></div>
        </div>

        <div className="business-grid">
          {segments.map((b, i) => (
            <div key={i} className="business-card">
              {b.icon}
              <h3>{b.title}</h3>
              <span className="business-prazo">⏱ Aprovação: {b.prazo}</span>
              <ul className="business-list">
                {b.items.map((it, j) => <li key={j}>✓ {it}</li>)}
              </ul>
              <a
                href={`https://api.whatsapp.com/send/?phone=5511942925865&text=${b.msg}`}
                className="btn btn-outline-dark btn-sm business-card-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
