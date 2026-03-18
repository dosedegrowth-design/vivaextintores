const clients = [
    'Activa',
    'CAOA',
    'Drogaria São Paulo',
    "Habib's",
    'Riachuelo',
    'Sorridents',
]

export default function Clients() {
    return (
        <section className="clients section-padding" id="clientes">
            <div className="container">
                <h2 className="section-title">Empresas que Confiam na Viva Extintores</h2>
                <p className="section-subtitle">
                    Atendemos desde pequenos comércios até grandes redes com a mesma qualidade e dedicação.
                </p>

                <div className="clients-grid">
                    {clients.map((client, i) => (
                        <div className="client-item" key={i}>
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
