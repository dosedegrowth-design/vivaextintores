const WHATSAPP_BASE = 'https://wa.me/5511942925865?text='

const laudos = [
    {
        icon: 'fas fa-file-shield',
        title: 'AVCB',
        subtitle: 'Auto de Vistoria do Corpo de Bombeiros',
        description: 'O AVCB é o documento emitido pelo Corpo de Bombeiros que atesta que a edificação possui condições de segurança contra incêndio. Obrigatório para edificações comerciais, industriais e de serviços.',
        features: [
            'Obrigatório para alvará de funcionamento',
            'Validade de 3 a 5 anos conforme ocupação',
            'Emissão com acompanhamento completo',
            'Aprovação garantida ou seu dinheiro de volta',
        ],
        whatsapp: 'Olá! Gostaria de solicitar um orçamento para Laudo AVCB.',
    },
    {
        icon: 'fas fa-certificate',
        title: 'CLCB',
        subtitle: 'Certificado de Licença do Corpo de Bombeiros',
        description: 'O CLCB é destinado a edificações de menor complexidade e risco. É um processo simplificado que permite a regularização rápida do seu estabelecimento junto ao Corpo de Bombeiros.',
        features: [
            'Para edificações de baixo e médio risco',
            'Processo simplificado e mais rápido',
            'Renovação facilitada',
            'Ideal para comércios e escritórios',
        ],
        whatsapp: 'Olá! Gostaria de solicitar um orçamento para Laudo CLCB.',
    },
    {
        icon: 'fas fa-stamp',
        title: 'ART',
        subtitle: 'Anotação de Responsabilidade Técnica',
        description: 'A ART é o documento que comprova a responsabilidade técnica de um profissional habilitado sobre os projetos e sistemas de prevenção e combate a incêndio implementados na edificação.',
        features: [
            'Emitida por engenheiro habilitado',
            'Necessária para projetos de incêndio',
            'Registro junto ao CREA',
            'Responsabilidade técnica garantida',
        ],
        whatsapp: 'Olá! Gostaria de solicitar um orçamento para ART.',
    },
    {
        icon: 'fas fa-clipboard-check',
        title: 'Visitas Técnicas',
        subtitle: 'Avaliação completa do seu imóvel',
        description: 'Realizamos visitas técnicas para avaliar as condições de segurança do seu imóvel, identificar necessidades de adequação e elaborar o plano de ação para regularização.',
        features: [
            'Avaliação completa das instalações',
            'Relatório técnico detalhado',
            'Plano de ação personalizado',
            'Orçamento sem compromisso',
        ],
        whatsapp: 'Olá! Gostaria de agendar uma Visita Técnica.',
    },
]

export default function LaudosSection() {
    return (
        <section className="services-laudos section-padding" id="laudos">
            <div className="container">
                <h2 className="section-title">
                    <span className="highlight">Laudos</span> e Licenças
                </h2>
                <div className="laudos-intro">
                    <p>
                        Emitimos todos os <strong>laudos e licenças</strong> necessários para a regularização do seu
                        estabelecimento junto ao <strong>Corpo de Bombeiros de São Paulo</strong>. Com mais de{' '}
                        <strong>5.000 laudos emitidos</strong> e <strong>98% de aprovação</strong>, somos referência
                        no mercado.
                    </p>
                </div>

                <div className="laudos-grid">
                    {laudos.map((laudo, i) => (
                        <div
                            className={`laudo-card animate-fade-in-up delay-${(i % 2 + 1) * 100}`}
                            key={i}
                        >
                            <div className="laudo-card-header">
                                <div className="laudo-card-icon">
                                    <i className={laudo.icon}></i>
                                </div>
                                <h3>
                                    {laudo.title}
                                    <small>{laudo.subtitle}</small>
                                </h3>
                            </div>
                            <p>{laudo.description}</p>
                            <ul>
                                {laudo.features.map((feature, j) => (
                                    <li key={j}>
                                        <i className="fas fa-check-circle"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                className="btn btn-primary btn-sm"
                                href={`${WHATSAPP_BASE}${encodeURIComponent(laudo.whatsapp)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-whatsapp"></i>
                                Solicitar Orçamento
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
