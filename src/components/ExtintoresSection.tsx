const WHATSAPP_BASE = 'https://wa.me/5511942925865?text='

const extintores = [
    {
        icon: 'fas fa-fire-extinguisher',
        title: 'Recarga de Extintores',
        description: 'Recarga e manutenção de todos os tipos de extintores (Água, Pó ABC/BC, CO2, Espuma) com certificação INMETRO e garantia.',
        whatsapp: 'Olá! Gostaria de solicitar um orçamento para Recarga de Extintores.',
    },
    {
        icon: 'fas fa-cart-shopping',
        title: 'Venda de Extintores',
        description: 'Extintores novos de todos os tipos e tamanhos, incluindo modelos sobre rodas, veiculares e portáteis. Preço competitivo.',
        whatsapp: 'Olá! Gostaria de comprar Extintores. Preciso de um orçamento.',
    },
    {
        icon: 'fas fa-faucet-drip',
        title: 'Teste de Mangueiras',
        description: 'Teste hidrostático de mangueiras de hidrante, garantindo o funcionamento perfeito e conformidade com normas técnicas.',
        whatsapp: 'Olá! Gostaria de solicitar Teste de Mangueiras.',
    },
    {
        icon: 'fas fa-people-group',
        title: 'Brigada de Incêndio',
        description: 'Treinamento completo de brigada de incêndio para sua equipe, com certificação, relatório e simulação prática.',
        whatsapp: 'Olá! Gostaria de contratar treinamento de Brigada de Incêndio.',
    },
    {
        icon: 'fas fa-fire',
        title: 'Manutenção de Hidrantes',
        description: 'Manutenção preventiva e corretiva de sistemas de hidrantes, incluindo mangueiras, registro e caixa de hidrante.',
        whatsapp: 'Olá! Gostaria de solicitar manutenção de hidrantes.',
    },
    {
        icon: 'fas fa-signs-post',
        title: 'Sinalização de Segurança',
        description: 'Instalação de sinalização de emergência, rotas de fuga, placas fotoluminescentes e identificação de extintores conforme NBR.',
        whatsapp: 'Olá! Gostaria de solicitar orçamento para sinalização de segurança.',
    },
]

export default function ExtintoresSection() {
    return (
        <section className="services-extintores section-padding" id="extintores">
            <div className="container">
                <h2 className="section-title">
                    <span className="highlight">Extintores</span> e Equipamentos
                </h2>
                <p className="section-subtitle">
                    Venda, recarga e manutenção de extintores e equipamentos de combate a incêndio com certificação e garantia.
                </p>

                <div className="extintores-grid">
                    {extintores.map((item, i) => (
                        <div
                            className={`extintor-card animate-fade-in-up delay-${(i % 3 + 1) * 100}`}
                            key={i}
                        >
                            <div className="extintor-card-icon">
                                <i className={item.icon}></i>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a
                                className="btn btn-yellow btn-sm"
                                href={`${WHATSAPP_BASE}${encodeURIComponent(item.whatsapp)}`}
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
