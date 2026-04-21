import { useState, useEffect, useRef } from 'react'

const images = [
  { src: '/Fotos/DSC04433.JPG', alt: 'Projeto de prevenção contra incêndio 1' },
  { src: '/Fotos/DSC06969.JPG', alt: 'Projeto de prevenção contra incêndio 2' },
  { src: '/Fotos/DSC06980.JPG', alt: 'Projeto de prevenção contra incêndio 3' },
  { src: '/Fotos/DSC07001.JPG', alt: 'Projeto de prevenção contra incêndio 4' },
  { src: '/Fotos/DSC07073.JPG', alt: 'Projeto de prevenção contra incêndio 5' },
  { src: '/Fotos/IMG_0571.jpg', alt: 'Projeto de prevenção contra incêndio 6' },
  { src: '/Fotos/IMG_0607.jpg', alt: 'Projeto de prevenção contra incêndio 7' },
  { src: '/Fotos/PHOTO-2025-05-30-16-40-17.jpg', alt: 'Equipamento de combate a incêndio 1' },
  { src: '/Fotos/PHOTO-2025-05-30-16-40-19.jpg', alt: 'Equipamento de combate a incêndio 2' },
  { src: '/Fotos/PHOTO-2025-05-30-16-40-20.jpg', alt: 'Equipamento de combate a incêndio 3' },
  { src: '/Fotos/PHOTO-2025-05-30-16-40-21.jpg', alt: 'Equipamento de combate a incêndio 4' },
  { src: '/Fotos/PHOTO-2025-05-30-16-40-23.jpg', alt: 'Equipamento de combate a incêndio 5' },
]

const row1 = images.slice(0, 6)
const row2 = images.slice(6, 12)

export default function PhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      const scrollPosition = carousel.scrollLeft
      const itemWidth = carousel.offsetWidth * 0.85
      const newIndex = Math.round(scrollPosition / itemWidth)
      setCurrentSlide(newIndex)
    }

    carousel.addEventListener('scroll', handleScroll)
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSlide = (index: number) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const itemWidth = carousel.offsetWidth * 0.85
    carousel.scrollTo({ left: itemWidth * index, behavior: 'smooth' })
  }

  return (
    <section className="photo-gallery" aria-label="Galeria de projetos executados">
      <div className="gallery-grid">
        <div className="gallery-row">
          {row1.map((img, i) => (
            <img key={`r1-${i}`} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
          ))}
        </div>
        <div className="gallery-row">
          {row2.map((img, i) => (
            <img key={`r2-${i}`} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
          ))}
        </div>
      </div>

      <div className="gallery-carousel" ref={carouselRef}>
        {images.map((img, i) => (
          <div key={`c-${i}`} className="gallery-carousel-item">
            <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>

      <div className="gallery-dots">
        {images.map((_, i) => (
          <button
            key={`dot-${i}`}
            className={`gallery-dot ${i === currentSlide ? 'active' : ''}`}
            onClick={() => scrollToSlide(i)}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
