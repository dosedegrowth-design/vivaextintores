import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { Shield, Zap, FileCheck, Phone, Mail, MapPin, ChevronDown, ChevronUp, Home, Building2, HardHat, CheckCircle2, DraftingCompass, Wrench, FireExtinguisher, AlertTriangle, Menu, X, Instagram } from 'lucide-react'
import ObrasCarousel from './components/ObrasCarousel'
import PhotoGallery from './components/PhotoGallery'
import Testimonials from './components/Testimonials'
import ExitPopup from './components/ExitPopup'

// Array of clients for the logo carousel
const clients = [
    { name: 'Ação e Saúde', logo: '/logos/clientes/acaoesaudenew.png' },
    { name: 'CAOA', logo: '/logos/clientes/caoanew.png' },
    { name: 'Drogarias SP', logo: '/logos/clientes/drogariaspnew.png' },
    { name: "Habib's", logo: '/logos/clientes/habibsnew.png' },
    { name: 'Riachuelo', logo: '/logos/clientes/riachuelonew.png' },
    { name: 'Sephora', logo: '/logos/clientes/sephoranew.png' },
    { name: 'Tokio Marine', logo: '/logos/clientes/tokiomarinenew.png' },
    { name: 'Walmart', logo: '/logos/clientes/walmartnew.png' },
    { name: 'Waterside', logo: '/logos/clientes/watersidenew.png' },
]

function App() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Clone items for seamless infinite scroll
    const items = track.innerHTML
    track.innerHTML = items + items

    // Pause on hover
    const handleEnter = () => track.style.animationPlayState = 'paused'
    const handleLeave = () => track.style.animationPlayState = 'running'
    track.addEventListener('mouseenter', handleEnter)
    track.addEventListener('mouseleave', handleLeave)

    return () => {
      track.removeEventListener('mouseenter', handleEnter)
      track.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  // Header scroll effect
  useEffect(() => {
    const header = document.querySelector('.main-header')
    const promoBar = document.querySelector('.promo-bar')
    if (!header) return

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled')
        if (promoBar) promoBar.classList.add('hidden')
      } else {
        header.classList.remove('scrolled')
        if (promoBar) promoBar.classList.remove('hidden')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleCard = useCallback((id: number) => {
    setExpandedCard(prev => prev === id ? null : id)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const laudos = useMemo(() => [
    {
      id: 1,
      title: "Laudo AVB / CLCB",
      icon: <FileCheck size={24} />,
      content: "Documento exigido pelo Corpo de Bombeiros que certifica que a edificação possui as condições de segurança contra incêndio."
    },
    {
      id: 2,
      title: "ART (Anotação de Responsabilidade Técnica)",
      icon: <HardHat size={24} />,
      content: "Documento fornecido por engenheiro (CREA) assumindo a responsabilidade técnica sobre um projeto ou execução de serviço."
    },
    {
      id: 3,
      title: "Laudos Técnicos e Estruturais",
      icon: <Home size={24} />,
      content: "Avaliação completa da segurança, estabilidade e integridade da sua edificação, identificando anomalias ou patologias construtivas."
    },
    {
      id: 4,
      title: "RRT (Registro de Responsabilidade Técnica)",
      icon: <Building2 size={24} />,
      content: "Similar à ART, mas emitido por um arquiteto registrado no CAU. Garante a legalidade e segurança da intervenção."
    }
  ], [])

  const obrasEProjetos = useMemo(() => [
    { icon: <DraftingCompass size={32} />, title: "PPCI - Plano de Prevenção Contra Incêndio", desc: "Elaboração completa do Projeto Técnico de Prevenção e Combate a Incêndio conforme normas do Corpo de Bombeiros." },
    { icon: <Wrench size={32} />, title: "Execução de Obras e Instalações", desc: "Instalação de sistemas de hidrantes, sprinklers, alarmes, iluminação de emergência e adequações estruturais." },
    { icon: <Shield size={32} />, title: "Reformas e Regularização", desc: "Adequação de saídas de emergência, escadas, sinalização e rotas de fuga para aprovação total." },
  ], [])

  const equipamentos = useMemo(() => [
    { icon: <FireExtinguisher size={32} />, title: "Extintores", desc: "Venda e recarga com certificação INMETRO (Água, Pó ABC, CO2)." },
    { icon: <Zap size={32} />, title: "Mangueiras de Incêndio", desc: "Venda e teste hidrostático obrigatório anual." },
    { icon: <Building2 size={32} />, title: "Porta Corta-Fogo", desc: "Instalação e manutenção para garantir o isolamento e fuga segura." },
    { icon: <AlertTriangle size={32} />, title: "Sinalização de Emergência", desc: "Placas fotoluminescentes e rotas de fuga." },
  ], [])

  return (
    <div className="app-container">
      {/* 1. PROMO BAR */}
      <div className="promo-bar">
        <div className="container">
          <p>
            <strong className="promo-main">🔥 Laudo AVCB/CLCB com 15% OFF</strong>
            <span className="promo-detail">Válido até o fim do mês</span>
          </p>
        </div>
      </div>

      {/* HEADER */}
      <header className="main-header">
        <div className="container flex justify-between items-center">
          <a href="#" className="logo">
            <img src="/logos/viva-logo.png" alt="Viva Extintores" style={{ height: '50px', objectFit: 'contain' }} />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav flex items-center gap-4">
            <a href="#laudos">Laudos (AVCB/CLCB)</a>
            <a href="#obras">Projetos & Obras</a>
            <a href="#equipamentos">Equipamentos</a>
            <a href="https://api.whatsapp.com/send/?phone=5511942925865&text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20serviços%20da%20Viva%20Extintores." className="btn btn-green">Solicitar Orçamento Grátis</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#laudos" onClick={closeMobileMenu}>Laudos (AVCB/CLCB)</a>
          <a href="#obras" onClick={closeMobileMenu}>Projetos & Obras</a>
          <a href="#equipamentos" onClick={closeMobileMenu}>Equipamentos</a>
          <a
            href="https://api.whatsapp.com/send/?phone=5511942925865&text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20serviços%20da%20Viva%20Extintores."
            className="btn btn-green"
            onClick={closeMobileMenu}
          >
            Solicitar Orçamento Grátis
          </a>
        </nav>
      </header>

      <main role="main">
        {/* 2. HERO SECTION */}
        <section className="hero" aria-label="Seção principal">
          <div className="container text-center animate-fade-in">
            <div className="hero-badges" role="list">
              <span className="badge-trust" role="listitem">✓ Aprovado pelo CREA</span>
              <span className="badge-trust" role="listitem">✓ +10 Anos de Experiência</span>
              <span className="badge-urgency" role="listitem">⚡ Atendimento Imediato</span>
            </div>

            <h1 itemProp="name">Solução Completa em <br/><span className="text-primary">Engenharia de Incêndio</span></h1>
            <p className="hero-tagline">— Projetos, Obras, Laudos e Equipamentos —</p>
            <p className="hero-desc">
              Do laudo técnico à execução da obra. Somos especialistas na regularização do seu imóvel junto ao Corpo de Bombeiros (AVCB/CLCB), garantindo segurança total para sua empresa.
            </p>

            <div className="hero-social-proof">
               <div className="stars-container">
                  <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
               </div>
               <span className="social-proof-text">⭐ Mais de 1.500 obras e laudos entregues e aprovados</span>
            </div>

            <div className="hero-cta-buttons">
               <a href="https://api.whatsapp.com/send/?phone=5511942925865&text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20solicitar%20uma%20consultoria%20gratuita%20sobre%20regularização%20do%20meu%20imóvel%20junto%20ao%20Corpo%20de%20Bombeiros." className="btn btn-green btn-xl pulse-cta">
                 <Phone size={20} className="mr-2" />
                 Agendar Consultoria Gratuita
               </a>
               <a href="#laudos" className="btn btn-primary btn-xl">Ver Como Funciona</a>
            </div>

            <p className="urgency-text">💼 Atendimento prioritário para empresas • Resposta em até 2h</p>
          </div>
        </section>

        {/* 2.5 LOGO CAROUSEL */}
        <section className="client-carousel py-12 bg-white border-b border-gray-100">
          <div className="container mb-8 text-center">
             <p className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Empresas que confiam na Viva Extintores</p>
          </div>
          <div className="carousel-wrapper">
             <div className="carousel-fade carousel-fade-left"></div>
             <div className="carousel-track" ref={trackRef}>
                {clients.map((client, i) => (
                    <div className="carousel-item" key={i}>
                        <img src={client.logo} alt={client.name} loading="lazy" />
                    </div>
                ))}
             </div>
             <div className="carousel-fade carousel-fade-right"></div>
          </div>
        </section>

        {/* 3. STATS SECTION */}
        <section className="stats" aria-label="Números e conquistas">
          <div className="container">
            <div className="stats-grid" role="list">
              <div className="stat-item" role="listitem">
                <span className="stat-val" aria-label="Mais de mil e quinhentos">1.500+</span>
                <span className="stat-label">projetos aprovados</span>
              </div>
              <div className="stat-item" role="listitem">
                <span className="stat-val" aria-label="Mais de dez">10+</span>
                <span className="stat-label">anos de experiência</span>
              </div>
              <div className="stat-item" role="listitem">
                <span className="stat-val" aria-label="Cem por cento">100%</span>
                <span className="stat-label">garantia de aprovação</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CARRO CHEFE: LAUDOS */}
        <section id="laudos" className="services" aria-labelledby="laudos-heading">
          <div className="container">
            <div className="section-title text-center">
              <h2 id="laudos-heading">Especialistas em Laudos e Regularização (AVCB / CLCB)</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">Nossa excelência começa pela emissão precisa de Laudos e ARTs. Regularize seu imóvel com velocidade recorde.</p>
              <div className="title-divider mx-auto"></div>
            </div>
            <div className="expanding-list">
              {laudos.map((item) => (
                <div key={item.id} className={`expand-card ${expandedCard === item.id ? 'open' : ''}`} onClick={() => toggleCard(item.id)}>
                   <div className="expand-header flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="icon-wrap">{item.icon}</span>
                        <h3>{item.title}</h3>
                      </div>
                      {expandedCard === item.id ? <ChevronUp className="chevron" /> : <ChevronDown className="chevron" />}
                   </div>
                   {expandedCard === item.id && (
                     <div className="expand-content animate-slide-down">
                        <p>{item.content}</p>
                     </div>
                   )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CARRO CHEFE: OBRAS E PROJETOS */}
        <section id="obras" className="fire-safety" aria-labelledby="obras-heading">
          <div className="container">
            <div className="fire-grid-literal">
               <div className="fire-text">
                  <h2 id="obras-heading">Projetos de Combate a Incêndio e Execução de Obras</h2>
                  <div className="title-divider"></div>
                  <p className="mt-6 mb-6 text-lg">
                    Além do laudo, entregamos a solução completa. Desenhamos o <strong>Projeto Técnico</strong> e nossa própria equipe de engenharia realiza a <strong>Execução da Obra</strong>. Tudo integrado para garantir a fluidez e a aprovação no Corpo de Bombeiros sem intermediários.
                  </p>
                  <ul className="check-list mt-8">
                    {obrasEProjetos.map((item, i) => (
                      <li key={i} className="flex gap-4 mb-6">
                        <div className="text-primary mt-1">{item.icon}</div>
                        <div>
                           <strong className="block text-xl text-dark mb-1">{item.title}</strong>
                           <span className="text-gray-600">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <a href="https://api.whatsapp.com/send/?phone=5511942925865&text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20projeto%20e%20execução%20de%20obra%20de%20combate%20a%20incêndio." className="btn btn-green mt-4">
                    <Wrench size={20} className="mr-2" />
                    Solicitar Orçamento de Obra
                  </a>
               </div>
               <div className="fire-image-placeholder">
                  <ObrasCarousel />
               </div>
            </div>
          </div>
        </section>

        {/* 6. EQUIPAMENTOS - Layout Compacto */}
        <section id="equipamentos" className="bg-slate-50 py-16 border-t border-gray-200">
           <div className="container">
             <div className="equipment-compact">
               <div className="equipment-header">
                 <h3>Também Fornecemos Equipamentos</h3>
                 <p>Venda e manutenção de equipamentos de segurança</p>
               </div>

               <div className="equipment-list">
                  {equipamentos.map((item, i) => (
                     <div key={i} className="equipment-item">
                        <div className="equipment-icon">{item.icon}</div>
                        <div className="equipment-content">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="equipment-cta">
                   <a href="https://api.whatsapp.com/send/?phone=5511942925865&text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20consultar%20sobre%20equipamentos%20de%20combate%20a%20incêndio%20(extintores,%20mangueiras,%20portas%20corta-fogo,%20etc)." className="btn btn-outline-dark">
                     <Phone size={18} className="mr-2" />
                     Consultar Equipamentos
                   </a>
               </div>
             </div>
           </div>
        </section>

        {/* 6.5 SEGMENTAÇÃO POR TIPO DE NEGÓCIO */}
        <section className="business-types">
          <div className="container">
            <div className="section-title text-center">
              <h2>Atendemos Todos os Tipos de Estabelecimentos</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">Soluções personalizadas para cada segmento, com aprovação garantida pelo Corpo de Bombeiros</p>
              <div className="title-divider mx-auto"></div>
            </div>

            <div className="business-grid">
              <div className="business-card">
                <Building2 size={40} className="business-icon" />
                <h3>Indústrias e Fábricas</h3>
                <ul className="business-list">
                  <li>✓ PPCI para áreas de produção</li>
                  <li>✓ Sistemas de combate especiais</li>
                  <li>✓ Laudos CMAR e estanqueidade</li>
                </ul>
              </div>

              <div className="business-card">
                <Building2 size={40} className="business-icon" />
                <h3>Comércio e Lojas</h3>
                <ul className="business-list">
                  <li>✓ AVCB para shopping centers</li>
                  <li>✓ Regularização expressa</li>
                  <li>✓ Projetos para retrofit</li>
                </ul>
              </div>

              <div className="business-card">
                <Home size={40} className="business-icon" />
                <h3>Condomínios Residenciais</h3>
                <ul className="business-list">
                  <li>✓ CLCB para edifícios</li>
                  <li>✓ Manutenção preventiva</li>
                  <li>✓ Brigada de incêndio</li>
                </ul>
              </div>

              <div className="business-card">
                <Building2 size={40} className="business-icon" />
                <h3>Escritórios e Empresas</h3>
                <ul className="business-list">
                  <li>✓ Laudos para salas comerciais</li>
                  <li>✓ Processo simplificado</li>
                  <li>✓ Documentação completa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6.5 TESTIMONIALS */}
        <Testimonials />

        {/* 7. HOW IT WORKS */}
        <section className="steps">
          <div className="container">
            <p className="overtitle text-center">PROCESSO DE REGULARIZAÇÃO</p>
            <div className="steps-row">
               {[
                 { n: "01", t: "Consultoria Gratuita", d: "Análise técnica completa e orçamento sem compromisso." },
                 { n: "02", t: "Projeto Técnico (PPCI)", d: "Elaboração do projeto por engenheiro CREA com todas as ARTs." },
                 { n: "03", t: "Execução e Instalação", d: "Nossa equipe realiza toda a obra e instalação dos sistemas." },
                 { n: "04", t: "Vistoria e Aprovação", d: "Acompanhamento da vistoria do Corpo de Bombeiros até emissão do AVCB/CLCB." }
               ].map((s, i) => (
                 <div key={i} className="step-card">
                   <span className="step-num">{s.n}</span>
                   <h4>{s.t}</h4>
                   <p>{s.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 8. HELP BANNER */}
        <section className="help-banner">
          <div className="container text-center">
            <span className="badge-cta-top">🎯 Consultoria Técnica Especializada</span>
            <h2>Precisa Regularizar Seu Imóvel com o Corpo de Bombeiros?</h2>
            <p className="help-subtitle">Fale com nossos engenheiros CREA e receba análise técnica gratuita do seu caso</p>
            <a href="https://api.whatsapp.com/send/?phone=5511942925865&text=Olá!%20Vim%20do%20site%20e%20preciso%20de%20ajuda%20com%20a%20regularização%20do%20meu%20imóvel%20junto%20ao%20Corpo%20de%20Bombeiros.%20Gostaria%20de%20falar%20com%20um%20engenheiro%20especialista." className="btn btn-yellow btn-lg mt-6 text-dark font-extrabold">
              <Phone size={20} className="mr-2" />
              Falar com Engenheiro Especialista
            </a>
            <p className="help-guarantee">✓ Atendimento imediato • Orçamento sem compromisso</p>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="final-cta">
          <div className="container text-center">
            <div className="final-badge">🏆 Mais de 10 Anos Regularizando Imóveis</div>
            <h2>Evite Multas e Regularize Seu Imóvel com Segurança</h2>
            <p>Equipe técnica completa: do PPCI à vistoria final do Corpo de Bombeiros</p>

            <div className="benefits-grid">
              <div className="benefit-item">
                <CheckCircle2 size={24} className="benefit-icon" />
                <span>Consultoria Gratuita</span>
              </div>
              <div className="benefit-item">
                <CheckCircle2 size={24} className="benefit-icon" />
                <span>100% de Aprovação</span>
              </div>
              <div className="benefit-item">
                <CheckCircle2 size={24} className="benefit-icon" />
                <span>Acompanhamento Total</span>
              </div>
              <div className="benefit-item">
                <CheckCircle2 size={24} className="benefit-icon" />
                <span>Engenheiros CREA</span>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-10 flex-wrap">
               <a href="https://api.whatsapp.com/send/?phone=5511942925865&text=Olá!%20Vim%20do%20site%20e%20quero%20regularizar%20meu%20imóvel%20para%20obter%20o%20AVCB/CLCB.%20Preciso%20de%20um%20orçamento%20completo%20para%20laudo,%20projeto%20e%20obra." className="btn btn-green btn-xl pulse-cta">
                 <Phone className="mr-2" /> Solicitar Orçamento Técnico Agora
               </a>
            </div>
            <div className="mt-6 text-center">
               <span className="social-proof-text" style={{color: 'rgba(255,255,255,0.6)'}}>📍 Atendemos SP, MG, RJ, PR e SC • ⚡ Resposta em até 2 horas</span>
            </div>
          </div>
        </section>

        {/* PHOTO GALLERY */}
        <PhotoGallery />
      </main>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-cols">
            <div className="f-info">
              <img src="/logos/viva-logo.png" alt="Viva Extintores" style={{ height: '50px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.8, marginBottom: '20px' }} />
              <p>Habilitada no CREA. Soluções ágeis em Laudos, Obras de Prevenção e Equipamentos contra incêndio.</p>
              <div className="social-links" style={{ marginTop: '20px' }}>
                <a
                  href="https://www.instagram.com/viva_extintores/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga-nos no Instagram"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-muted)',
                    transition: 'color 0.3s ease',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <Instagram size={20} />
                  @viva_extintores
                </a>
              </div>
            </div>
            <div className="f-nav">
              <h4>Portfólio</h4>
              <ul>
                <li>Laudos AVCB e CLCB</li>
                <li>Projetos e Obras Técnicas</li>
                <li>Extintores e Mangueiras</li>
                <li>Sinalização e Portas Corta-Fogo</li>
              </ul>
            </div>
            <div className="f-contact">
              <h4>Contatos</h4>
              <p><Mail size={16}/> contato@viveextintores.com.br</p>
              <p><Phone size={16}/> (11) 94292-5865</p>
              <p><MapPin size={16}/> Rua Marques de Recife, 53 - SP</p>
              <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>
                <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--dark-bg)' }}>Horário de Atendimento:</strong>
                Segunda a Sexta: 08h às 18h
              </p>
            </div>
          </div>
          <div className="f-copyright">
            <p>&copy; 2026 Viva Extintores. Engenheiro Resp. CREA 5069858688-SP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=5511942925865&text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Viva%20Extintores."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <Phone size={24} />
      </a>

      {/* Exit Intent Popup */}
      <ExitPopup />
    </div>
  )
}

export default App
