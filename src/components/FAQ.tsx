import { useState } from 'react'

const faqs = [
    {
        question: 'O que é o AVCB e por que minha empresa precisa?',
        answer: 'O AVCB (Auto de Vistoria do Corpo de Bombeiros) é o documento emitido pelo Corpo de Bombeiros que atesta que a edificação possui as condições de segurança contra incêndio previstas pela legislação. É obrigatório para funcionamento de qualquer estabelecimento comercial, industrial ou de serviços em São Paulo.',
    },
    {
        question: 'Qual a diferença entre AVCB e CLCB?',
        answer: 'O AVCB é destinado a edificações de maior porte ou risco, enquanto o CLCB (Certificado de Licença do Corpo de Bombeiros) é para estabelecimentos de menor risco e complexidade, como pequenos comércios e prestadores de serviço com área reduzida. Nossos especialistas avaliam qual licença é adequada para seu caso.',
    },
    {
        question: 'Quanto tempo demora para obter o laudo AVCB/CLCB?',
        answer: 'O prazo varia de acordo com a complexidade do projeto e a necessidade de adequações. Em casos simples, o processo pode levar de 15 a 30 dias. Já em edificações que necessitam de adequações estruturais, o prazo pode ser maior. Oferecemos atendimento prioritário para casos urgentes.',
    },
    {
        question: 'O que é ART e quando preciso obter uma?',
        answer: 'A ART (Anotação de Responsabilidade Técnica) é o documento que comprova que um engenheiro habilitado se responsabiliza tecnicamente pelo projeto ou sistema de segurança contra incêndio do seu imóvel. É obrigatória para obtenção do AVCB/CLCB e para qualquer intervenção nos sistemas de prevenção.',
    },
    {
        question: 'Vocês fazem a recarga de todos os tipos de extintores?',
        answer: 'Sim! Realizamos a recarga de todos os tipos de extintores: Água, Pó Químico Seco (BC e ABC), CO2, Espuma Mecânica, e modelos especiais como extintores sobre rodas e veiculares. Todos os serviços incluem teste hidrostático e certificação de conformidade.',
    },
    {
        question: 'Vocês atendem toda a Grande São Paulo?',
        answer: 'Sim, atendemos São Paulo capital e toda a região metropolitana, incluindo cidades como Guarulhos, Osasco, Santo André, São Bernardo do Campo, Barueri, entre outras. Para projetos de maior porte, também atendemos cidades do interior de SP.',
    },
    {
        question: 'Como funciona o treinamento de Brigada de Incêndio?',
        answer: 'O treinamento de Brigada de Incêndio inclui aulas teóricas e práticas sobre prevenção, combate a princípios de incêndio, primeiros socorros e evacuação. Ao final, todos os participantes recebem certificação válida. Realizamos o treinamento nas instalações da sua empresa.',
    },
    {
        question: 'É possível solicitar um orçamento online?',
        answer: 'Sim! Basta entrar em contato pelo nosso WhatsApp (11) 94292-5865 ou preencher o formulário de contato. Respondemos em poucos minutos com um orçamento personalizado para sua necessidade.',
    },
]

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="faq section-padding" id="faq">
            <div className="container">
                <h2 className="section-title">Perguntas Frequentes</h2>
                <p className="section-subtitle">
                    Tire suas dúvidas sobre laudos, licenças e serviços de segurança contra incêndio.
                </p>

                <div className="faq-grid">
                    {faqs.map((faq, i) => (
                        <div className={`faq-item ${activeIndex === i ? 'active' : ''}`} key={i}>
                            <button className="faq-question" onClick={() => toggle(i)}>
                                {faq.question}
                                <i className="fas fa-chevron-down"></i>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-content">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
