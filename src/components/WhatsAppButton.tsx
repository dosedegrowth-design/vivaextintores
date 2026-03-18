export default function WhatsAppButton() {
    return (
        <div className="whatsapp-float">
            <div className="whatsapp-tooltip">Fale conosco!</div>
            <a
                href="https://wa.me/5511942925865?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contato via WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    )
}
