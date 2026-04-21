const steps = [
  { n: '01', t: 'Consultoria Gratuita', d: 'Análise técnica completa e orçamento sem compromisso.', prazo: 'Em 2h úteis' },
  { n: '02', t: 'Projeto Técnico (PPCI)', d: 'Elaboração por engenheiro CREA com todas as ARTs.', prazo: '5 a 15 dias' },
  { n: '03', t: 'Execução e Instalação', d: 'Nossa equipe realiza toda a obra e instalação dos sistemas.', prazo: 'Conforme obra' },
  { n: '04', t: 'Vistoria e Aprovação', d: 'Acompanhamento da vistoria do Corpo de Bombeiros até emissão do AVCB/CLCB.', prazo: '100% garantida' },
]

export default function Steps() {
  return (
    <section className="steps">
      <div className="container">
        <p className="overtitle text-center">Processo de Regularização</p>
        <div className="steps-row">
          {steps.map((s, i) => (
            <div key={i} className="step-card">
              <span className="step-num">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
              <span className="step-prazo">⏱ {s.prazo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
