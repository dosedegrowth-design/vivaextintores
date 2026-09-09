import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ShieldCheck, Flame, Wrench, Users } from 'lucide-react'
import Parceiros from '../components/Parceiros'

type Cat = 'laudos' | 'obras' | 'brigada' | 'viva'

interface Item {
  slug: string
  cat: Cat
  title: string
  desc: string
}

const CATS: { id: Cat | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'laudos', label: 'Laudos entregues' },
  { id: 'obras', label: 'Projetos & Obras' },
  { id: 'brigada', label: 'Treinamento de Brigada' },
  { id: 'viva', label: 'A Viva' },
]

const CAT_LABEL: Record<Cat, string> = {
  laudos: 'Laudo entregue',
  obras: 'Projeto & Obra',
  brigada: 'Treinamento',
  viva: 'A Viva',
}

const ITEMS: Item[] = [
  // ── Laudos entregues ────────────────────────────────
  { slug: 'laudo-padaria', cat: 'laudos', title: 'Padaria e confeitaria', desc: 'Regularização concluída e certificado entregue ao responsável.' },
  { slug: 'laudo-transportadora', cat: 'laudos', title: 'Transportadora', desc: 'Adequação da frota e do pátio operacional com laudo aprovado.' },
  { slug: 'laudo-comercio', cat: 'laudos', title: 'Comércio varejista', desc: 'Documentação de segurança contra incêndio entregue ao cliente.' },
  { slug: 'equipamentos-estudio', cat: 'laudos', title: 'Estúdio de gravação', desc: 'Dimensionamento e instalação de extintores conforme norma.' },

  // ── Projetos & Obras ────────────────────────────────
  { slug: 'sprinklers-galpao', cat: 'obras', title: 'Rede de sprinklers', desc: 'Instalação de chuveiros automáticos em galpão logístico de grande porte.' },
  { slug: 'casa-de-bombas-motobomba', cat: 'obras', title: 'Casa de bombas', desc: 'Conjunto motobomba de incêndio instalado e comissionado.' },
  { slug: 'casa-de-bombas-barrilete', cat: 'obras', title: 'Barrilete e recalque', desc: 'Montagem de barrilete com manômetros e válvulas de controle.' },
  { slug: 'rede-hidrantes-subterranea', cat: 'obras', title: 'Rede subterrânea', desc: 'Execução de rede enterrada de hidrantes em área industrial.' },
  { slug: 'hidrante-externo', cat: 'obras', title: 'Hidrante externo', desc: 'Ponto de hidrante em área externa, pronto para vistoria.' },
  { slug: 'galpao-industrial', cat: 'obras', title: 'Galpão industrial', desc: 'Projeto de combate a incêndio executado em galpão de grande vão.' },

  // ── Treinamento de Brigada ──────────────────────────
  { slug: 'brigada-turma', cat: 'brigada', title: 'Formação de brigada', desc: 'Turma completa de brigadistas formada e certificada.' },
  { slug: 'brigada-combate-fogo', cat: 'brigada', title: 'Combate a incêndio', desc: 'Prática de combate com fogo real acompanhada por instrutor.' },
  { slug: 'brigada-simulacao', cat: 'brigada', title: 'Simulação de emergência', desc: 'Exercício de contenção com linha de mangueira e equipe em campo.' },
  { slug: 'brigada-mangueira', cat: 'brigada', title: 'Uso de hidrante', desc: 'Treinamento de manuseio de mangueira e esguicho.' },
  { slug: 'brigada-extintor', cat: 'brigada', title: 'Manuseio de extintor', desc: 'Prática de extinção de princípio de incêndio com extintor portátil.' },
  { slug: 'brigada-resgate', cat: 'brigada', title: 'Resgate e primeiros socorros', desc: 'Módulo de atendimento a vítimas e evacuação segura.' },

  // ── A Viva ──────────────────────────────────────────
  { slug: 'equipe-viva', cat: 'viva', title: 'Nossa equipe', desc: 'Time técnico da Viva Extintores pronto para atender.' },
  { slug: 'sede-viva', cat: 'viva', title: 'Sede em São Paulo', desc: 'Base operacional e frota própria para atendimento na região.' },
]

const CLIENTES = [
  'habibsnew', 'riachuelonew', 'sephoranew', 'walmartnew', 'tokiomarinenew',
  'drogariaspnew', 'acaoesaudenew', 'watersidenew', 'caoanew',
]

const TITULO = 'Portfólio de Obras e Laudos AVCB | Viva Extintores'
const DESCRICAO =
  'Veja obras de combate a incêndio, laudos AVCB e CLCB aprovados e brigadas ' +
  'formadas pela Viva Extintores em São Paulo e mais 4 estados.'

export default function Portfolio() {
  const [filtro, setFiltro] = useState<Cat | 'todos'>('todos')
  const [aberta, setAberta] = useState<number | null>(null)

  // SPA: title e description precisam ser trocados em runtime ao entrar/sair da rota
  useEffect(() => {
    const tituloAnterior = document.title
    const meta = document.querySelector('meta[name="description"]')
    const descAnterior = meta?.getAttribute('content') ?? ''

    document.title = TITULO
    meta?.setAttribute('content', DESCRICAO)

    return () => {
      document.title = tituloAnterior
      meta?.setAttribute('content', descAnterior)
    }
  }, [])

  const visiveis = filtro === 'todos' ? ITEMS : ITEMS.filter(i => i.cat === filtro)

  const fechar = useCallback(() => setAberta(null), [])
  const navegar = useCallback((passo: number) => {
    setAberta(prev => {
      if (prev === null) return prev
      const total = visiveis.length
      return (prev + passo + total) % total
    })
  }, [visiveis.length])

  useEffect(() => {
    if (aberta === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar()
      if (e.key === 'ArrowRight') navegar(1)
      if (e.key === 'ArrowLeft') navegar(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [aberta, fechar, navegar])

  const item = aberta !== null ? visiveis[aberta] : null

  return (
    <main className="portfolio-page" role="main">
      {/* ── Hero ───────────────────────────────── */}
      <section className="pf-hero">
        <div className="container">
          <p className="pf-eyebrow">Portfólio</p>
          <h1>Obras, laudos e treinamentos <span>que já entregamos</span></h1>
          <p className="pf-lead">
            Registros reais de projetos executados, documentação aprovada no Corpo de Bombeiros
            e brigadas formadas pela nossa equipe técnica.
          </p>

          <div className="pf-stats">
            <div className="pf-stat"><ShieldCheck size={20} /><strong>+1.500</strong><span>obras e laudos aprovados</span></div>
            <div className="pf-stat"><Wrench size={20} /><strong>+10 anos</strong><span>de experiência técnica</span></div>
            <div className="pf-stat"><Flame size={20} /><strong>5 estados</strong><span>SP · MG · RJ · PR · SC</span></div>
            <div className="pf-stat"><Users size={20} /><strong>9 marcas</strong><span>de grande porte atendidas</span></div>
          </div>
        </div>
      </section>

      {/* ── Galeria ────────────────────────────── */}
      <section className="pf-galeria">
        <div className="container">
          <div className="pf-filtros" role="tablist" aria-label="Filtrar portfólio">
            {CATS.map(c => (
              <button
                key={c.id}
                role="tab"
                aria-selected={filtro === c.id}
                className={`pf-filtro ${filtro === c.id ? 'ativo' : ''}`}
                onClick={() => { setFiltro(c.id); setAberta(null) }}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="pf-grid">
            {visiveis.map((it, idx) => (
              <button key={it.slug} className="pf-card" onClick={() => setAberta(idx)}>
                <div className="pf-card-img">
                  <img
                    src={`/acervo/${it.slug}-thumb.webp`}
                    alt={it.title}
                    loading="lazy"
                    width={700}
                    height={700}
                  />
                  <span className="pf-badge">{CAT_LABEL[it.cat]}</span>
                </div>
                <div className="pf-card-txt">
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clientes ───────────────────────────── */}
      <section className="pf-clientes">
        <div className="container">
          <p className="pf-clientes-titulo">Marcas que já confiaram na Viva</p>
          <div className="pf-logos">
            {CLIENTES.map(c => (
              <img key={c} src={`/logos/clientes/${c}.png`} alt="Cliente Viva Extintores" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Parceiros (fecha a pagina) ─────────── */}
      <Parceiros />

      {/* ── Lightbox ───────────────────────────── */}
      {item && (
        <div className="pf-lightbox" onClick={e => { if (e.target === e.currentTarget) fechar() }}>
          <button className="pf-lb-fechar" onClick={fechar} aria-label="Fechar"><X size={22} /></button>
          <button className="pf-lb-nav pf-lb-prev" onClick={() => navegar(-1)} aria-label="Anterior"><ChevronLeft size={26} /></button>
          <figure className="pf-lb-fig">
            <img src={`/acervo/${item.slug}.webp`} alt={item.title} />
            <figcaption>
              <span className="pf-badge">{CAT_LABEL[item.cat]}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <small>{(aberta ?? 0) + 1} de {visiveis.length}</small>
            </figcaption>
          </figure>
          <button className="pf-lb-nav pf-lb-next" onClick={() => navegar(1)} aria-label="Próxima"><ChevronRight size={26} /></button>
        </div>
      )}
    </main>
  )
}
