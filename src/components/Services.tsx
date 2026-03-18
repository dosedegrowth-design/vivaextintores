const WHATSAPP_BASE = 'https://wa.me/5511942925865?text='

const services = [
    {
        icon: 'fas fa-file-shield',
        color: 'red',
        title: 'Laudo AVCB',
        description: 'Auto de Vistoria do Corpo de Bombeiros para regularizar seu estabelecimento junto ao CBM-SP.',
        whatsapp: 'Olá! Gostaria de solicitar um orçamento para Laudo AVCB.',
    },
    {
        icon: 'fas fa-certificate',
        color: 'red',
        title: 'Laudo CLCB',
        description: 'Certificado de Licença do Corpo de Bombeiros para edificações de menor risco e complexidade.',
        whatsapp: 'Olá! Gostaria de solicitar um orçamento para Laudo CLCB.',
    },
    {
        icon: 'fas fa-stamp',
        color: 'blue',
        title: 'ART - Responsabilidade Técnica',
        description: 'Anotação de Responsabilidade Técnica para projetos e sistemas de segurança contra incêndio.',
        whatsapp: 'Olá! Gostaria de solicitar um orçamento para ART.',
    },
    {
        icon: 'fas fa-clipboard-check',
        color: 'blue',
        title: 'Visitas Técnicas',
        description: 'Avaliação técnica completa do seu imóvel para identificar necessidades de adequação e segurança.',
        whatsapp: 'Olá! Gostaria de agendar uma Visita Técnica.',
    },
    {
        icon: 'fas fa-fire-extinguisher',
        color: 'orange',
        title: 'Recarga de Extintores',
        description: 'Recarga e manutenção de todos os tipos de extintores (Água, Pó ABC/BC, CO2, Espuma) com certificação.',
        whatsapp: 'Olá! Gostaria de solicitar um orçamento para Recarga de Extintores.',
    },
    {
        icon: 'fas fa-cart-shopping',
        color: 'orange',
        title: 'Venda de Extintores',
        description: 'Extintores novos de todos os tipos e tamanhos, incluindo modelos sobre rodas e veiculares.',
        whatsapp: 'Olá! Gostaria de comprar Extintores. Preciso de um orçamento.',
    },
    {
        icon: 'fas fa-faucet-drip',
        color: 'green',
        title: 'Testes de Mangueiras',
        description: 'Teste hidrostático de mangueiras de hidrante, garantindo funcionamento e conformidade com normas.',
        whatsapp: 'Olá! Gostaria de solicitar Teste de Mangueiras.',
    },
    {
        icon: 'fas fa-people-group',
        color: 'green',
        title: 'Brigada de Incêndio',
        description: 'Treinamento completo de brigada de incêndio para sua equipe, com certificação e relatório.',
        whatsapp: 'Olá! Gostaria de contratar treinamento de Brigada de Incêndio.',
    },
]

export default function Services() {
    return (
        <section className="services section-padding" id="servicos">
            <div className="container">
                <h2 className="section-title">Nossos Serviços</h2>
                <p className="section-subtitle">
                    Soluções completas em segurança contra incêndio. Laudos, licenças, equipamentos e treinamento com aprovação garantida.
                </p>

                <div className="services-grid">
                    {services.map((service, i) => (
                        <div
                            className={`service-card animate-fade-in-up delay-${(i % 4 + 1) * 100}`}
                            key={i}
                        >
                            <div className={`service-card-icon ${service.color}`}>
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a
                                className="btn btn-primary btn-sm"
                                href={`${WHATSAPP_BASE}${encodeURIComponent(service.whatsapp)}`}
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
