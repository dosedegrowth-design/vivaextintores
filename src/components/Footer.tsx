export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer" id="contato">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <h3><span>VIVA</span> EXTINTORES</h3>
                        <p>
                            Sua solução integral para segurança contra incêndio em São Paulo.
                            Laudos, licenças, extintores e treinamento com aprovação garantida e preço justo.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.instagram.com/viva_extintores" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/vivaextintores" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://wa.me/5511942925865" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Serviços */}
                    <div className="footer-column">
                        <h4>Serviços</h4>
                        <ul>
                            <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Laudo AVCB</a></li>
                            <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Laudo CLCB</a></li>
                            <li><a href="#servicos"><i className="fas fa-chevron-right"></i> ART</a></li>
                            <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Recarga de Extintores</a></li>
                            <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Venda de Extintores</a></li>
                            <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Brigada de Incêndio</a></li>
                        </ul>
                    </div>

                    {/* Links Rápidos */}
                    <div className="footer-column">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a href="#inicio"><i className="fas fa-chevron-right"></i> Início</a></li>
                            <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Serviços</a></li>
                            <li><a href="#especialidades"><i className="fas fa-chevron-right"></i> Especialidades</a></li>
                            <li><a href="#faq"><i className="fas fa-chevron-right"></i> FAQ</a></li>
                            <li><a href="#clientes"><i className="fas fa-chevron-right"></i> Clientes</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h4>Contato</h4>
                        <div className="footer-contact-item">
                            <i className="fab fa-whatsapp"></i>
                            <div>
                                <a href="tel:+5511942925865">(11) 94292-5865</a>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                Rua Marques de Recife, 53<br />
                                Freguesia do Ó – São Paulo, SP
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fas fa-clock"></i>
                            <div>
                                Seg - Sex: 08h às 18h
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    © {currentYear} Viva Extintores. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}
