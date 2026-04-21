import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-cols">

          <div className="f-info">
            <img
              src="/logos/viva-logo.png"
              alt="Viva Extintores"
              style={{ height: 48, objectFit: 'contain', filter: 'grayscale(100%) brightness(1.5)', opacity: 0.9, marginBottom: 20 }}
            />
            <p>Habilitada no CREA. Soluções ágeis em Laudos, Obras de Prevenção e Equipamentos contra incêndio.</p>
            <div style={{ marginTop: 20 }}>
              <a
                href="https://www.instagram.com/viva_extintores/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
                @viva_extintores
              </a>
            </div>
          </div>

          <div className="f-nav">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#laudos">Laudos AVCB e CLCB</a></li>
              <li><a href="#obras">Projetos e Obras PPCI</a></li>
              <li><a href="#equipamentos">Extintores e Equipamentos</a></li>
              <li><a href="#laudos">ART e RRT</a></li>
            </ul>
          </div>

          <div className="f-nav">
            <h4>Áreas de Atuação</h4>
            <ul>
              <li>São Paulo — SP</li>
              <li>Minas Gerais — MG</li>
              <li>Rio de Janeiro — RJ</li>
              <li>Paraná — PR</li>
              <li>Santa Catarina — SC</li>
            </ul>
          </div>

          <div className="f-contact">
            <h4>Contato</h4>
            <p><Mail size={16} /> <a href="mailto:contato@vivaextintores.com.br">contato@vivaextintores.com.br</a></p>
            <p><Phone size={16} /> <a href="tel:+5511942925865">(11) 94292-5865</a></p>
            <p><MapPin size={16} /> Rua Marques de Recife, 53 - SP</p>
            <p style={{ marginTop: 16, fontSize: 14 }}>
              <strong style={{ display: 'block', marginBottom: 4, color: 'white' }}>
                Horário de Atendimento
              </strong>
              Segunda a Sexta: 08h às 18h
            </p>
          </div>
        </div>

        <div className="f-copyright">
          <p>
            © {year} Viva Extintores. Engenheiro Responsável CREA 5069858688-SP. Todos os direitos reservados.
          </p>
          <p style={{ marginTop: 8 }}>
            <a href="/politica-privacidade.html">Política de Privacidade</a>
            |
            <a href="/termos-uso.html">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
