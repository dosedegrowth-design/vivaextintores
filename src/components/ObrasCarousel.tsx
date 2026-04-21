import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const obrasImages = [
  '/obras/15caa4fb-3f47-4a06-8e6a-35cc33a9c77a.jpg',
  '/obras/22829143-d7f3-4e2b-921a-b79f89e0877e.jpg',
  '/obras/27986593-8301-4bac-b092-4d04584c73a3.jpg',
  '/obras/39042f4a-7a42-459a-aa1c-08858eec6c41.jpg',
  '/obras/4477dbd0-e99a-47fe-ab53-2e086267ca2d.jpg',
  '/obras/8caf1bd6-2e36-4236-99cc-20c67a077b34.jpg',
]

export default function ObrasCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % obrasImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goTo = (delta: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + delta + obrasImages.length) % obrasImages.length)
  }

  return (
    <div className="obras-carousel">
      <div className="obras-carousel-container">
        <div className="obras-badge">✓ 100% de Aprovação CREA</div>

        <div className="obras-carousel-images">
          {obrasImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Obra executada ${index + 1}`}
              className={`obras-carousel-image ${index === currentIndex ? 'active' : ''}`}
              loading="lazy"
            />
          ))}
        </div>

        <button className="obras-carousel-arrow obras-carousel-arrow-left" onClick={() => goTo(-1)} aria-label="Imagem anterior">
          <ChevronLeft size={24} />
        </button>
        <button className="obras-carousel-arrow obras-carousel-arrow-right" onClick={() => goTo(1)} aria-label="Próxima imagem">
          <ChevronRight size={24} />
        </button>

        <div className="obras-carousel-dots">
          {obrasImages.map((_, index) => (
            <button
              key={index}
              className={`obras-carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => { setIsAutoPlaying(false); setCurrentIndex(index) }}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
