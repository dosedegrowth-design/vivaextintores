import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendes',
    company: 'Diretor — Shopping Center Plaza',
    text: 'Serviço impecável! A Viva Extintores regularizou nosso shopping em tempo recorde. AVCB aprovado de primeira pelo Corpo de Bombeiros. Recomendo!',
    rating: 5,
    result: 'AVCB aprovado em 22 dias',
  },
  {
    id: 2,
    name: 'Ana Paula Silva',
    company: 'Gerente Operacional — Rede de Farmácias',
    text: 'Precisávamos regularizar 15 lojas e a equipe foi extremamente profissional. Entregaram todos os laudos dentro do prazo combinado, sem atraso.',
    rating: 5,
    result: '15 CLCBs aprovados em 45 dias',
  },
  {
    id: 3,
    name: 'Roberto Oliveira',
    company: 'Síndico — Condomínio Residencial Zona Sul SP',
    text: 'Excelente atendimento! Explicaram todo o processo de forma clara e cuidaram de toda a documentação CLCB do nosso prédio. Muito satisfeito com o resultado.',
    rating: 5,
    result: 'CLCB aprovado em 18 dias',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <div className="section-title text-center">
          <p className="overtitle">Depoimentos</p>
          <h2>O Que Nossos Clientes Dizem</h2>
          <p style={{ maxWidth: 640, margin: '0 auto 24px', fontSize: 17, color: 'var(--text-muted)' }}>
            +1.500 clientes satisfeitos em 5 estados
          </p>
          <div className="title-divider"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-quote">
                <Quote size={36} />
              </div>

              <div className="testimonial-rating">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-text">"{t.text}"</p>

              <div style={{
                display: 'inline-block',
                padding: '4px 10px',
                background: 'rgba(16, 185, 129, 0.1)',
                color: 'var(--cta-green-hover)',
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 700,
                marginBottom: 16,
              }}>
                ✓ {t.result}
              </div>

              <div className="testimonial-author">
                <h4 className="author-name">{t.name}</h4>
                <p className="author-company">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
