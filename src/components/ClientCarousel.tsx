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

// Duplicar para efeito de loop infinito
const doubled = [...clients, ...clients]

export default function ClientCarousel() {
  return (
    <section className="client-carousel" aria-label="Marcas que confiam na Viva Extintores">
      <div className="container carousel-title">
        <p>Marcas que escolheram a Viva — +1.500 obras entregues</p>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {doubled.map((client, i) => (
            <div className="carousel-item" key={`${client.name}-${i}`}>
              <img src={client.logo} alt={client.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
