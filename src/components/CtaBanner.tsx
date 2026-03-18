const WHATSAPP_URL = 'https://wa.me/5511942925865?text=Olá! Gostaria de solicitar um orçamento.'

export default function CtaBanner() {
    return (
        <section className="cta-banner">
            <div className="container cta-banner-inner">
                <h3>🔥 Precisa regularizar sua empresa? Fale conosco agora!</h3>
                <a
                    className="btn btn-whatsapp btn-sm"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp"></i>
                    Orçamento Grátis
                </a>
            </div>
        </section>
    )
}
