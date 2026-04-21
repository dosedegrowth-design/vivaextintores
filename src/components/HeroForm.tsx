import { useState, type FormEvent } from 'react'
import { MessageCircle, Shield } from 'lucide-react'

const servicos = [
  { value: 'laudo-avcb', label: 'Laudo AVCB' },
  { value: 'laudo-clcb', label: 'Laudo CLCB' },
  { value: 'projeto-ppci', label: 'Projeto Técnico (PPCI)' },
  { value: 'execucao-obra', label: 'Execução de Obra' },
  { value: 'art-rrt', label: 'ART / RRT' },
  { value: 'equipamentos', label: 'Extintores / Equipamentos' },
  { value: 'outro', label: 'Outro serviço' },
]

const tiposImovel = [
  { value: 'industria', label: 'Indústria / Fábrica' },
  { value: 'comercio', label: 'Comércio / Loja' },
  { value: 'condominio', label: 'Condomínio Residencial' },
  { value: 'escritorio', label: 'Escritório / Sala Comercial' },
  { value: 'outro', label: 'Outro' },
]

export default function HeroForm() {
  const [servico, setServico] = useState('')
  const [tipo, setTipo] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const servicoLabel = servicos.find(s => s.value === servico)?.label || 'Não informado'
    const tipoLabel = tiposImovel.find(t => t.value === tipo)?.label || 'Não informado'

    const msg = `Olá! Vim do site e quero solicitar orçamento.

*Serviço:* ${servicoLabel}
*Tipo de imóvel:* ${tipoLabel}
*Nome:* ${nome}
*Telefone:* ${telefone}

Aguardo o contato!`

    const url = `https://api.whatsapp.com/send/?phone=5511942925865&text=${encodeURIComponent(msg)}`

    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'hero_form_submit', {
        service: servicoLabel,
        property_type: tipoLabel,
      })
    }

    window.open(url, '_blank')
  }

  return (
    <div className="hero-form-card">
      <div className="hero-form-header">
        <span className="hero-form-badge">
          <Shield size={14} /> Resposta em até 2h úteis
        </span>
        <h3>Orçamento Grátis</h3>
        <p>Fale direto com um engenheiro CREA</p>
      </div>

      <form onSubmit={handleSubmit} className="hero-form">
        <div className="form-group">
          <label htmlFor="hero-servico">Qual serviço você precisa? *</label>
          <select id="hero-servico" value={servico} onChange={e => setServico(e.target.value)} required>
            <option value="">Selecione...</option>
            {servicos.map(s => (<option key={s.value} value={s.value}>{s.label}</option>))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="hero-tipo">Tipo de imóvel *</label>
          <select id="hero-tipo" value={tipo} onChange={e => setTipo(e.target.value)} required>
            <option value="">Selecione...</option>
            {tiposImovel.map(t => (<option key={t.value} value={t.value}>{t.label}</option>))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="hero-nome">Seu nome *</label>
          <input
            id="hero-nome"
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Ex: João Silva"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hero-telefone">WhatsApp *</label>
          <input
            id="hero-telefone"
            type="tel"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder="(11) 99999-9999"
            required
          />
        </div>

        <button type="submit" className="btn btn-green btn-xl hero-form-submit pulse-cta">
          <MessageCircle size={22} />
          Receber Orçamento no WhatsApp
        </button>

        <p className="hero-form-guarantee">
          ✓ Sem compromisso &nbsp;•&nbsp; ✓ Engenheiro CREA &nbsp;•&nbsp; ✓ 100% de aprovação
        </p>
      </form>
    </div>
  )
}
