# Viva Extintores — Site v2

Site institucional B2B de alta conversão para **Viva Extintores** — especialistas em laudos AVCB/CLCB, projetos de combate a incêndio (PPCI), obras e equipamentos em SP, MG, RJ, PR e SC.

> 📋 **Documentação completa**: veja [`REGRAS_E_LOGICA.md`](./REGRAS_E_LOGICA.md) para arquitetura, regras de negócio, decisões técnicas e manutenção.

## Stack

- **Vite 7** + **React 19** + **TypeScript**
- **lucide-react** (ícones)
- **CSS manual** (design system via CSS variables)
- Deploy: **Vercel** (auto-deploy da branch `main`)
- Canal de conversão: **WhatsApp direto** (sem backend)

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera dist/
npm run preview   # preview do build
```

## Estrutura

```
src/
├── App.tsx                  # integração das seções
├── main.tsx                 # entry
├── index.css                # design system (~1200 linhas)
└── components/
    ├── PromoBar.tsx         # promo rotativa 3 mensagens
    ├── Header.tsx           # nav + telefone + WhatsApp
    ├── Hero.tsx             # 2 colunas
    ├── HeroForm.tsx         # form de captura
    ├── ClientCarousel.tsx   # carrossel de 9 marcas
    ├── Stats.tsx            # 1.500+ / 10+ / 100% / 9
    ├── LaudosSection.tsx    # grid 2x2 com CTA individual
    ├── ObrasSection.tsx     # projetos + carrossel de obras
    ├── ObrasCarousel.tsx    # 6 fotos auto-play
    ├── EquipamentosSection.tsx
    ├── BusinessTypes.tsx    # 4 segmentos (ind, com, cond, esc)
    ├── Testimonials.tsx     # 3 depoimentos
    ├── Steps.tsx            # 4 etapas
    ├── HelpBanner.tsx
    ├── FinalCTA.tsx         # urgência + multa R$56k
    ├── PhotoGallery.tsx     # 12 fotos (grid desktop / carousel mobile)
    ├── Footer.tsx           # 4 cols + LGPD + ano dinâmico
    ├── ExitPopup.tsx        # exit-intent + scroll + timer
    ├── MobileFixedBar.tsx   # bottom bar mobile
    ├── BackToTop.tsx        # scroll > 600px
    └── WhatsAppFloat.tsx    # desktop only
```

## Elementos de conversão

- ✅ Formulário na Hero (captura imediata)
- ✅ Promo bar rotativa (3 mensagens, 4.5s cada)
- ✅ Exit popup com timer regressivo + form
- ✅ Barra fixa mobile (Ligar + WhatsApp)
- ✅ Telefone clicável no header
- ✅ CTAs segmentados em cada seção (mensagens WhatsApp pré-preenchidas contextuais)
- ✅ Prazos visíveis em todos os serviços
- ✅ Prova social: +1.500 obras, 9 marcas conhecidas, 4.9 estrelas, 127 reviews

## SEO

- Schema.org ProfessionalService + FAQPage (5 perguntas)
- Open Graph + Twitter Card
- Meta geo tags (São Paulo)
- Google Analytics 4 (trocar `G-XXXXXXXXXX` pelo ID real antes de publicar!)
- Robots.txt + Sitemap.xml
- Canonical URL
- Fonts otimizadas (Inter + Outfit via Google Fonts)

## TODO antes de produção

- [ ] Trocar `G-XXXXXXXXXX` no `index.html` pelo ID real do GA4
- [ ] Criar `public/og-image.jpg` (1200x630px)
- [ ] Ativar Meta Pixel (descomentar + trocar `FB_PIXEL_ID`)
- [ ] Criar páginas `public/politica-privacidade.html` e `public/termos-uso.html`
- [ ] Substituir testimonials fictícios por reais
- [ ] Apontar DNS do `vivaextintores.com.br` pra Vercel

## Contato

- WhatsApp: [(11) 94292-5865](https://api.whatsapp.com/send/?phone=5511942925865)
- Email: contato@vivaextintores.com.br
- Instagram: [@viva_extintores](https://www.instagram.com/viva_extintores)

---

Feito pela [Dose de Growth](https://dosedegrowth.com.br).
