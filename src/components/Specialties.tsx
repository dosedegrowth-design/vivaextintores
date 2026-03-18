const specialties = [
    {
        icon: 'fas fa-store',
        title: 'Comércios e Lojas',
        description: 'Regularização completa para comércios varejistas e atacadistas em São Paulo.',
    },
    {
        icon: 'fas fa-industry',
        title: 'Indústrias e Galpões',
        description: 'Laudos e sistemas de combate a incêndio para áreas industriais e depósitos.',
    },
    {
        icon: 'fas fa-building',
        title: 'Condomínios',
        description: 'AVCB e CLCB para condomínios residenciais e comerciais com acompanhamento completo.',
    },
    {
        icon: 'fas fa-utensils',
        title: 'Bares e Restaurantes',
        description: 'Regularização junto ao Corpo de Bombeiros para estabelecimentos alimentícios.',
    },
    {
        icon: 'fas fa-hospital',
        title: 'Clínicas e Consultórios',
        description: 'Laudos técnicos e adequação para clínicas médicas, odontológicas e veterinárias.',
    },
    {
        icon: 'fas fa-school',
        title: 'Escolas e Instituições',
        description: 'Segurança contra incêndio para escolas, creches e instituições de ensino.',
    },
]

export default function Specialties() {
    return (
        <section className="specialties section-padding" id="especialidades">
            <div className="container">
                <h2 className="section-title">
                    Especialistas em Segurança contra Incêndio em São Paulo
                </h2>
                <p className="section-subtitle">
                    Atendemos diversos segmentos com soluções personalizadas para cada tipo de estabelecimento.
                </p>

                <div className="specialties-grid">
                    {specialties.map((item, i) => (
                        <div className={`specialty-card animate-fade-in-up delay-${(i % 3 + 1) * 100}`} key={i}>
                            <div className="specialty-card-icon">
                                <i className={item.icon}></i>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
