import { useState, useEffect, useRef } from 'react'

// Array de imagens para a galeria (12 imagens únicas)
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

// Usar as 12 imagens únicas
const galleryImages = images

// Dividir em duas linhas de 6 imagens cada
const row1 = galleryImages.slice(0, 6)
const row2 = galleryImages.slice(6, 12)

export default function PhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      const scrollPosition = carousel.scrollLeft
      const itemWidth = carousel.offsetWidth
      const newIndex = Math.round(scrollPosition / itemWidth)
      setCurrentSlide(newIndex)
    }

    carousel.addEventListener('scroll', handleScroll)
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSlide = (index: number) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const itemWidth = carousel.offsetWidth
    carousel.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    })
  }

  return (
    <section className="photo-gallery" aria-label="Galeria de fotos dos projetos">
      {/* Desktop Grid */}
      <div className="gallery-grid">
        <div className="gallery-row">
          {row1.map((image, index) => (
            <img
              key={`row1-${index}`}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              width="400"
              height="230"
            />
          ))}
        </div>
        <div className="gallery-row">
          {row2.map((image, index) => (
            <img
              key={`row2-${index}`}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              width="400"
              height="230"
            />
          ))}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="gallery-carousel" ref={carouselRef}>
        {galleryImages.map((image, index) => (
          <div key={`carousel-${index}`} className="gallery-carousel-item">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              width="350"
              height="262"
            />
          </div>
        ))}
      </div>

      {/* Mobile Dots Indicator */}
      <div className="gallery-dots">
        {galleryImages.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`gallery-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
