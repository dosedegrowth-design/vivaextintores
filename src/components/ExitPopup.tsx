import { useState, useEffect } from 'react'
import { X, Phone, Clock, Shield } from 'lucide-react'

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Verifica se já mostrou o popup nesta sessão
    const popupShown = sessionStorage.getItem('exit-popup-shown')
    if (popupShown) {
      setHasShown(true)
      return
    }

    // Detecta movimento do mouse saindo da página (exit-intent)
    const handleMouseLeave = (e: MouseEvent) => {
      // Se o mouse está indo para o topo da página (saindo)
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exit-popup-shown', 'true')
      }
    }

    // Adiciona listener com pequeno delay para evitar trigger acidental
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 3000) // Espera 3 segundos antes de ativar

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleCTA = () => {
    // Palavra-chave para rastreamento: "exit-popup-conversion"
    window.open(
      'https://api.whatsapp.com/send/?phone=5511942925865&text=Olá!%20Vi%20a%20oferta%20especial%20EXIT-POPUP%20e%20gostaria%20de%20aproveitar%20a%20oferta%20para%20regularizar%20meu%20imóvel.',
      '_blank'
    )
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Overlay */}
      <div className="exit-popup-overlay" onClick={handleClose}>
        <div className="exit-popup-container" onClick={(e) => e.stopPropagation()}>
          {/* Botão Fechar */}
          <button
            className="exit-popup-close"
            onClick={handleClose}
            aria-label="Fechar popup"
          >
            <X size={24} />
          </button>

          {/* Conteúdo */}
          <div className="exit-popup-content">
            {/* Badge de Urgência */}
            <div className="exit-popup-badge">
              OFERTA EXCLUSIVA
            </div>

            {/* Título */}
            <h2 className="exit-popup-title">
              Espere! <span>Não Perca Esta Oportunidade</span>
            </h2>

            {/* Subtítulo */}
            <p className="exit-popup-subtitle">
              Regularize seu imóvel com <strong>DESCONTO ESPECIAL</strong> apenas para visitantes que estão saindo agora!
            </p>

            {/* Benefícios */}
            <div className="exit-popup-benefits">
              <div className="exit-benefit-item">
                <Shield size={20} />
                <span>Engenheiros CREA Certificados</span>
              </div>
              <div className="exit-benefit-item">
                <Clock size={20} />
                <span>Resposta em até 2 horas</span>
              </div>
              <div className="exit-benefit-item">
                <Phone size={20} />
                <span>Consultoria Gratuita</span>
              </div>
            </div>

            {/* Urgência */}
            <div className="exit-popup-urgency">
              Apenas para os <strong>próximos 10 clientes</strong> que responderem hoje!
            </div>

            {/* CTA Principal - COM PALAVRA-CHAVE */}
            <button
              className="exit-popup-cta exit-popup-btn-primary"
              onClick={handleCTA}
              data-tracking="exit-popup-conversion"
            >
              <Phone size={20} />
              Quero Aproveitar a Oferta Agora!
            </button>

            {/* CTA Secundário */}
            <button
              className="exit-popup-cta-secondary"
              onClick={handleClose}
            >
              Não, obrigado. Prefiro pagar o preço cheio.
            </button>

            {/* Garantia */}
            <p className="exit-popup-guarantee">
              99% de aprovação garantida
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
