import { useState, type FormEvent } from 'react'
import {
  Building2, HardHat, PencilRuler, Store,
  Handshake, Lightbulb, ShieldCheck, Send,
} from 'lucide-react'

// Formulario de parceria: vai DIRETO para o Felipe (responsavel por
// AVCB/Projetos/Obras/ART), sem passar pelo seletor de equipe.
const FELIPE = '5511947095259'

const PERFIS = [
  { icon: Building2, titulo: 'Administradoras e síndicos', desc: 'Mantenha o AVCB/CLCB em dia em toda a carteira de condomínios, com um só responsável técnico.' },
  { icon: HardHat, titulo: 'Construtoras e incorporadoras', desc: 'PPCI, execução e AVCB entregues no prazo da obra — sem travar o Habite-se.' },
  { icon: PencilRuler, titulo: 'Arquitetos e engenheiros', desc: 'Compatibilizamos o projeto de incêndio com as demais disciplinas e assinamos a ART.' },
  { icon: Store, titulo: 'Lojistas e redes de varejo', desc: 'Regularização loja a loja, com padrão e cronograma únicos para toda a rede.' },
]

const VANTAGENS = [
  { icon: Handshake, titulo: 'Comissão por indicação', desc: 'Você indica, nós executamos. A cada contrato fechado, comissão para o parceiro.' },
  { icon: Lightbulb, titulo: 'Oportunidades sob medida', desc: 'Aberto a desenhar outros formatos de parceria junto com você, conforme o seu negócio.' },
  { icon: ShieldCheck, titulo: 'Seu cliente bem atendido', desc: 'Engenheiro CREA responsável, orçamento em até 2h úteis e aprovação garantida no Corpo de Bombeiros.' },
]

const TIPOS = [
  'Administradora / Síndico profissional',
  'Construtora / Incorporadora',
  'Arquiteto / Engenheiro',
  'Lojista / Rede de varejo',
  'Outro',
]

const VOLUMES = [
  'Até 5 imóveis por ano',
  'De 6 a 20 imóveis por ano',
  'De 21 a 50 imóveis por ano',
  'Mais de 50 imóveis por ano',
  'Ainda não sei estimar',
]

export default function Parceiros() {
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [tipo, setTipo] = useState('')
  const [whats, setWhats] = useState('')
  const [email, setEmail] = useState('')
  const [volume, setVolume] = useState('')
  const [obs, setObs] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const linhas = [
      'Olá, Felipe! Vim do site e quero ser parceiro da Viva Extintores.',
      '',
      `*Nome:* ${nome}`,
      `*Empresa:* ${empresa || 'Não informado'}`,
      `*Perfil:* ${tipo}`,
      `*WhatsApp:* ${whats}`,
      `*E-mail:* ${email || 'Não informado'}`,
      `*Volume estimado:* ${volume || 'Não informado'}`,
    ]
    if (obs.trim()) linhas.push('', `*Sobre a parceria:* ${obs.trim()}`)
    linhas.push('', 'Aguardo o contato!')

    const msg = linhas.join('\n')

    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (w.gtag) {
      w.gtag('event', 'parceiro_form_submit', { partner_type: tipo, volume })
    }

    // direto no Felipe: nao passa pelo seletor de equipe
    window.open(
      `https://api.whatsapp.com/send/?phone=${FELIPE}&text=${encodeURIComponent(msg)}`,
      '_blank',
    )
  }

  return (
    <section className="pf-parceiros" id="parceiros">
      <div className="container">
        <div className="pfp-topo">
          <p className="pf-eyebrow">Programa de parceria</p>
          <h2>Indique a Viva e <span>ganhe por isso</span></h2>
          <p className="pfp-lead">
            Se você lida com imóveis que precisam de regularização, a Viva vira o seu
            braço técnico de segurança contra incêndio — e você é remunerado por cada
            indicação que fechar.
          </p>
        </div>

        <div className="pfp-vantagens">
          {VANTAGENS.map(v => (
            <div key={v.titulo} className="pfp-vantagem">
              <span className="pfp-vic"><v.icon size={22} /></span>
              <h3>{v.titulo}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="pfp-corpo">
          <div className="pfp-perfis">
            <h3 className="pfp-sub">Para quem é</h3>
            {PERFIS.map(p => (
              <div key={p.titulo} className="pfp-perfil">
                <span className="pfp-pic"><p.icon size={19} /></span>
                <div>
                  <strong>{p.titulo}</strong>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pfp-form-card">
            <div className="pfp-form-head">
              <h3>Quero ser parceiro</h3>
              <p>Preencha e fale direto com o Felipe, responsável por parcerias.</p>
            </div>

            <form onSubmit={handleSubmit} className="pfp-form">
              <div className="form-group">
                <label htmlFor="pfp-nome">Seu nome *</label>
                <input id="pfp-nome" type="text" value={nome} required
                  onChange={e => setNome(e.target.value)} placeholder="Ex: João Silva" />
              </div>

              <div className="form-group">
                <label htmlFor="pfp-empresa">Empresa</label>
                <input id="pfp-empresa" type="text" value={empresa}
                  onChange={e => setEmpresa(e.target.value)} placeholder="Nome da empresa" />
              </div>

              <div className="form-group">
                <label htmlFor="pfp-tipo">Seu perfil *</label>
                <select id="pfp-tipo" value={tipo} required onChange={e => setTipo(e.target.value)}>
                  <option value="">Selecione...</option>
                  {TIPOS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="pfp-volume">Quantos imóveis você atende?</label>
                <select id="pfp-volume" value={volume} onChange={e => setVolume(e.target.value)}>
                  <option value="">Selecione...</option>
                  {VOLUMES.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="pfp-whats">Seu WhatsApp *</label>
                <input id="pfp-whats" type="tel" value={whats} required
                  onChange={e => setWhats(e.target.value)} placeholder="(11) 99999-9999" />
              </div>

              <div className="form-group">
                <label htmlFor="pfp-email">Seu e-mail</label>
                <input id="pfp-email" type="email" value={email}
                  onChange={e => setEmail(e.target.value)} placeholder="voce@empresa.com.br" />
              </div>

              <div className="form-group pfp-full">
                <label htmlFor="pfp-obs">Quer contar algo antes? (opcional)</label>
                <textarea id="pfp-obs" rows={2} value={obs}
                  onChange={e => setObs(e.target.value)}
                  placeholder="Ex: administro 12 condomínios na Zona Oeste" />
              </div>

              <button type="submit" className="btn btn-green pfp-enviar">
                <Send size={18} />
                Enviar e falar com o Felipe
              </button>

              <p className="pfp-nota">
                Ao enviar, abrimos o WhatsApp do Felipe com todos esses dados já preenchidos.
                Você só confirma o envio.
              </p>
            </form>
          </div>
        </div>

        <p className="pfp-rodape">
          Não é parceiro e quer um orçamento?{' '}
          <a href="https://api.whatsapp.com/send/?phone=5511942925865&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.">
            Fale com a nossa equipe
          </a>
        </p>
      </div>
    </section>
  )
}
