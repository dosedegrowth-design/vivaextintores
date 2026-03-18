import { useState, useEffect } from 'react'

const WHATSAPP_URL = 'https://wa.me/5511942925865?text=Olá! Gostaria de solicitar um orçamento.'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Início', href: '#inicio' },
        { label: 'Laudos', href: '#laudos' },
        { label: 'Extintores', href: '#extintores' },
        { label: 'Obras', href: '#obras' },
        { label: 'Especialidades', href: '#especialidades' },
        { label: 'FAQ', href: '#faq' },
    ]

    const handleNavClick = () => setMobileOpen(false)

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-inner">
                    <a href="#inicio" className="header-logo">
                        <img
                            src="/logos/viva-logo.png"
                            alt="Viva Extintores"
                            className="header-logo-img"
                        />
                    </a>

                    <nav className="header-nav">
                        {navItems.map(item => (
                            <a key={item.href} href={item.href}>{item.label}</a>
                        ))}
                    </nav>

                    <div className="header-cta">
                        <a className="header-phone" href="tel:+5511942925865">
                            <i className="fab fa-whatsapp"></i>
                            (11) 94292-5865
                        </a>
                        <a className="btn btn-primary btn-sm" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                            Orçamento
                        </a>
                    </div>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        <i className={mobileOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </button>
                </div>
            </header>

            <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                {navItems.map(item => (
                    <a key={item.href} href={item.href} onClick={handleNavClick}>
                        {item.label}
                    </a>
                ))}
                <a
                    className="btn btn-primary"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 16 }}
                >
                    <i className="fab fa-whatsapp"></i>
                    Solicitar Orçamento
                </a>
            </nav>
        </>
    )
}
