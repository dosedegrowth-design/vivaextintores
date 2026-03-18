export default function TrustBar() {
    const items = [
        { icon: 'fas fa-check-circle', text: 'Aprovação Garantida' },
        { icon: 'fas fa-clock', text: 'Atendimento Imediato' },
        { icon: 'fas fa-award', text: 'Profissionais Habilitados' },
        { icon: 'fas fa-map-marker-alt', text: 'São Paulo e Região' },
        { icon: 'fas fa-shield-halved', text: '+ de 500 Laudos Emitidos' },
    ]

    return (
        <div className="trust-bar">
            <div className="container trust-bar-inner">
                {items.map((item, i) => (
                    <div className="trust-item" key={i}>
                        <i className={item.icon}></i>
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    )
}
