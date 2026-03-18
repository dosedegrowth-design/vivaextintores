import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendes',
    company: 'Diretor - Shopping Center Plaza',
    text: 'Serviço impecável! A Viva Extintores regularizou nosso shopping em tempo recorde. O AVCB foi aprovado de primeira pelo Corpo de Bombeiros. Recomendo!',
    rating: 5,
    image: null
  },
  {
    id: 2,
    name: 'Ana Paula Silva',
    company: 'Gerente - Rede de Farmácias',
    text: 'Precisávamos regularizar 15 lojas e a equipe foi extremamente profissional. Entregaram todos os laudos dentro do prazo e com aprovação garantida.',
    rating: 5,
    image: null
  },
  {
    id: 3,
    name: 'Roberto Oliveira',
    company: 'Síndico - Condomínio Residencial',
    text: 'Excelente atendimento! Explicaram todo o processo de forma clara e fizeram toda a documentação CLCB do nosso prédio. Muito satisfeitos.',
    rating: 5,
    image: null
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>O Que Nossos Clientes Dizem</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Mais de 1.500 clientes satisfeitos em todo Brasil
          </p>
          <div className="title-divider mx-auto"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote">
                <Quote size={40} />
              </div>

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
