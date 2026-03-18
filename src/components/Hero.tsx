const WHATSAPP_URL = 'https://wa.me/5511942925865?text=Olá! Gostaria de solicitar um orçamento para laudos.'

export default function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-bg-pattern"></div>
            <div className="hero-grid-overlay"></div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge animate-fade-in-up">
                        <i className="fas fa-shield-halved"></i>
                        APROVAÇÃO GARANTIDA · ATENDIMENTO IMEDIATO
                    </div>

                    <h1 className="animate-fade-in-up delay-100">
                        <span className="highlight">Laudos, Extintores</span> e{' '}
                        <span className="highlight-yellow">Obras</span> para sua Empresa em São Paulo
                    </h1>

                    <p className="hero-subtitle animate-fade-in-up delay-200">
                        Especialistas em <strong>AVCB, CLCB, ART</strong>, venda e recarga de extintores,
                        e projetos de combate a incêndio. <strong>Preço justo</strong> e <strong>aprovação garantida</strong>.
                    </p>

                    <div className="hero-buttons animate-fade-in-up delay-300">
                        <a className="btn btn-whatsapp btn-lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                            Solicitar Orçamento Grátis
                        </a>
                        <a className="btn btn-outline btn-lg" href="tel:+5511942925865">
                            <i className="fas fa-phone"></i>
                            Falar com Especialista
                        </a>
                    </div>

                    <div className="hero-stats animate-fade-in-up delay-400">
                        <div className="hero-stat">
                            <div className="hero-stat-value">5.000<span>+</span></div>
                            <div className="hero-stat-label">Laudos Emitidos</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">98<span>%</span></div>
                            <div className="hero-stat-label">Aprovação Garantida</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">10<span>+</span></div>
                            <div className="hero-stat-label">Anos de Experiência</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">24<span>h</span></div>
                            <div className="hero-stat-label">Atendimento Rápido</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
