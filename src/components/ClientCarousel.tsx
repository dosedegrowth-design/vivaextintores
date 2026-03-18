import { useEffect, useRef } from 'react'

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

export default function ClientCarousel() {
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

    return (
        <section className="client-carousel section-padding" id="clientes">
            <div className="container">
                <h2 className="section-title">
                    Empresas que <span className="highlight">Confiam</span> em Nós
                </h2>
                <p className="section-subtitle">
                    Atendemos grandes marcas e empresas de todos os portes em São Paulo e região.
                </p>
            </div>

            <div className="carousel-wrapper">
                <div className="carousel-fade carousel-fade-left"></div>
                <div className="carousel-track" ref={trackRef}>
                    {clients.map((client, i) => (
                        <div className="carousel-item" key={i}>
                            <img
                                src={client.logo}
                                alt={client.name}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
                <div className="carousel-fade carousel-fade-right"></div>
            </div>
        </section>
    )
}
