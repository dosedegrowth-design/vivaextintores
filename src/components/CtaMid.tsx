const WHATSAPP_URL = 'https://wa.me/5511942925865?text=Olá! Gostaria de solicitar um orçamento.'

export default function CtaMid() {
    return (
        <section className="cta-mid">
            <div className="container cta-mid-inner">
                <div className="cta-mid-text">
                    <h2>Precisa regularizar sua empresa?</h2>
                    <p>
                        Fale agora com um dos nossos especialistas e receba seu orçamento em minutos.
                        Atendimento imediato via WhatsApp ou telefone.
                    </p>
                </div>
                <div className="cta-mid-buttons">
                    <a className="btn btn-whatsapp btn-lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                        Falar no WhatsApp
                    </a>
                    <a className="btn btn-outline btn-lg" href="tel:+5511942925865">
                        <i className="fas fa-phone"></i>
                        Ligar Agora
                    </a>
                </div>
            </div>
        </section>
    )
}
