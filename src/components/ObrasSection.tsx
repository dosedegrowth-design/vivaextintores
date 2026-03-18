const WHATSAPP_URL = 'https://wa.me/5511942925865?text=Olá! Gostaria de solicitar um orçamento para projetos de combate a incêndio.'

const obraItems = [
    {
        icon: 'fas fa-drafting-compass',
        title: 'Projetos Técnicos',
        description: 'Projetos completos de prevenção',
    },
    {
        icon: 'fas fa-helmet-safety',
        title: 'Execução de Obras',
        description: 'Implementação e instalação',
    },
    {
        icon: 'fas fa-wrench',
        title: 'Reformas e Adequações',
        description: 'Adequação às normas vigentes',
    },
    {
        icon: 'fas fa-check-double',
        title: 'Acompanhamento',
        description: 'Vistoria e aprovação final',
    },
]

export default function ObrasSection() {
    return (
        <section className="services-obras section-padding" id="obras">
            <div className="container">
                <div className="obras-content">
                    <div className="obras-text">
                        <h3>
                            Projetos de <span>Combate a Incêndio</span> e Obras
                        </h3>
                        <p>
                            Realizamos projetos completos de prevenção e combate a incêndio, desde a
                            elaboração do projeto técnico até a execução da obra e acompanhamento
                            junto ao Corpo de Bombeiros para aprovação.
                        </p>
                        <p>
                            Nossos engenheiros são especializados em adequação de edificações às
                            normas do Corpo de Bombeiros, garantindo a aprovação do seu projeto
                            com rapidez e segurança.
                        </p>

                        <div className="obras-features">
                            <div className="obras-feature">
                                <i className="fas fa-check"></i>
                                Projetos de prevenção e combate a incêndio
                            </div>
                            <div className="obras-feature">
                                <i className="fas fa-check"></i>
                                Instalação de sistemas de hidrantes e sprinklers
                            </div>
                            <div className="obras-feature">
                                <i className="fas fa-check"></i>
                                Adequação de saídas de emergência e rotas de fuga
                            </div>
                            <div className="obras-feature">
                                <i className="fas fa-check"></i>
                                Instalação de sistemas de detecção e alarme
                            </div>
                            <div className="obras-feature">
                                <i className="fas fa-check"></i>
                                Reformas para regularização junto ao CBM-SP
                            </div>
                        </div>

                        <a
                            className="btn btn-whatsapp btn-lg"
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-whatsapp"></i>
                            Solicitar Orçamento de Obra
                        </a>
                    </div>

                    <div className="obras-items">
                        {obraItems.map((item, i) => (
                            <div className={`obra-item animate-fade-in-up delay-${(i + 1) * 100}`} key={i}>
                                <i className={item.icon}></i>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
