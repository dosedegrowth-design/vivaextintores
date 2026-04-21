import { DraftingCompass, Wrench, Shield, HardHat } from 'lucide-react'
import ObrasCarousel from './ObrasCarousel'

const items = [
  {
    icon: <DraftingCompass size={32} />,
    title: 'PPCI — Projeto de Prevenção e Combate a Incêndio',
    desc: 'Elaboração completa do Projeto Técnico conforme normas do Corpo de Bombeiros.',
  },
  {
    icon: <Wrench size={32} />,
    title: 'Execução de Obras e Instalações',
    desc: 'Hidrantes, sprinklers, alarmes, iluminação de emergência e adequações estruturais.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Reformas e Regularização',
    desc: 'Adequação de saídas de emergência, escadas, sinalização e rotas de fuga.',
  },
]

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5511942925865&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20projeto%20e%20execu%C3%A7%C3%A3o%20de%20obra%20de%20combate%20a%20inc%C3%AAndio.'

export default function ObrasSection() {
  return (
    <section id="obras" className="fire-safety" aria-labelledby="obras-heading">
      <div className="container">
        <div className="fire-grid-literal">
          <div className="fire-text">
            <p className="overtitle">
              <HardHat size={14} style={{ display: 'inline', marginRight: 6 }} />
              Projetos & Obras
            </p>
            <h2 id="obras-heading">Projetos de Combate a Incêndio e Execução de Obras</h2>
            <div className="title-divider"></div>

            <p style={{ marginTop: 24, marginBottom: 24 }}>
              Além do laudo, entregamos a <strong>solução completa</strong>.
              Desenhamos o Projeto Técnico e nossa própria equipe de engenharia realiza a Execução da Obra.
              Tudo integrado para garantir a fluidez e a aprovação no Corpo de Bombeiros <strong>sem intermediários</strong>.
            </p>

            <ul className="check-list" style={{ marginTop: 32 }}>
              {items.map((item, i) => (
                <li key={i}>
                  <div className="icon-container">{item.icon}</div>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <a href={WHATSAPP_URL} className="btn btn-green" target="_blank" rel="noopener noreferrer" style={{ marginTop: 16 }}>
              <Wrench size={18} />
              Solicitar Orçamento de Obra
            </a>
          </div>

          <ObrasCarousel />
        </div>
      </div>
    </section>
  )
}
