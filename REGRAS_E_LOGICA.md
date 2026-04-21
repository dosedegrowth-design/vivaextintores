# Viva Extintores v2 — Regras e Lógica

## Objetivo

Site institucional B2B de alta conversão para a **Viva Extintores**, empresa especializada em laudos AVCB/CLCB, projetos de combate a incêndio (PPCI), execução de obras e venda/manutenção de equipamentos.

Posicionamento: **"Credibilidade técnica (CREA) + velocidade (2h úteis) + aprovação garantida"**.

Público-alvo: síndicos de condomínios, diretores de indústrias, gerentes operacionais de redes de varejo, administradores de shoppings e escritórios comerciais.

---

## Arquitetura

```
Frontend (SPA)
└── Vite 7 + React 19 + TypeScript
    ├── lucide-react (ícones)
    ├── Google Fonts (Inter + Outfit)
    └── CSS manual (design system)

Deploy
└── GitHub → Vercel (auto-deploy main branch)
    └── Domínio: vivaextintores.com.br (TODO: apontar DNS)
    └── Preview: vivaextintores.vercel.app

Analytics (TODO antes de prod)
├── Google Analytics 4 — ID placeholder (G-XXXXXXXXXX)
└── Meta Pixel — comentado em index.html, ativar quando tiver ID

Canal de conversão
└── WhatsApp direto (sem backend/CRM)
    └── Formulários montam mensagens pré-preenchidas e abrem wa.me
    └── Tracking via event gtag('hero_form_submit', 'exit_popup_conversion')
```

---

## Estrutura de seções (ordem)

| # | Seção | Componente | Objetivo |
|---|-------|-----------|----------|
| 1 | Promo Bar | `PromoBar.tsx` | Urgência rotativa (3 mensagens) |
| 2 | Header | `Header.tsx` | Nav + telefone clicável + CTA WhatsApp |
| 3 | Hero 2-colunas | `Hero.tsx` + `HeroForm.tsx` | Awareness + captura imediata |
| 4 | Carrossel clientes | `ClientCarousel.tsx` | Prova social (9 marcas) |
| 5 | Stats | `Stats.tsx` | 4 números: 1.500+ / 10+ / 100% / 9 marcas |
| 6 | Laudos grid 2x2 | `LaudosSection.tsx` | Serviço carro-chefe (4 tipos de laudo) |
| 7 | Projetos & Obras | `ObrasSection.tsx` + `ObrasCarousel.tsx` | PPCI + execução |
| 8 | Equipamentos | `EquipamentosSection.tsx` | Venda/manutenção (4 items) |
| 9 | Business Types | `BusinessTypes.tsx` | Segmentação por nicho com prazo |
| 10 | Depoimentos | `Testimonials.tsx` | 3 testimonials com resultado quantificado |
| 11 | Processo 4 Steps | `Steps.tsx` | Demystifica como funciona + prazos |
| 12 | Help Banner | `HelpBanner.tsx` | CTA engenheiro especialista |
| 13 | Final CTA | `FinalCTA.tsx` | Urgência com multa R$56k |
| 14 | Photo Gallery | `PhotoGallery.tsx` | Evidências visuais (12 fotos) |
| 15 | Footer | `Footer.tsx` | Contato + áreas + LGPD |

**Flutuantes / Persistentes:**
- `WhatsAppFloat.tsx` — botão verde canto inferior direito (desktop)
- `BackToTop.tsx` — aparece após 600px de scroll
- `MobileFixedBar.tsx` — barra bottom fixa mobile (Ligar + WhatsApp)
- `ExitPopup.tsx` — exit-intent + scroll 60% + fallback 45s

---

## Regras de negócio

### Prazos declarados (são promessa ao cliente — cumprir!)
- Orçamento inicial: **2h úteis**
- Laudo AVCB: **10 a 20 dias úteis**
- Laudo CLCB: **5 a 15 dias úteis**
- ART/RRT: **3 a 7 dias úteis**
- Laudo Técnico Estrutural: **7 a 21 dias úteis**
- Projeto PPCI: **5 a 15 dias**
- Aprovação no Corpo de Bombeiros: **100% garantida** (reprovou = re-trabalho grátis)

### Prazos por segmento (na seção Business Types)
- Indústrias: 30 a 60 dias
- Comércio: 15 a 30 dias
- Condomínios: 15 a 30 dias
- Escritórios: 10 a 20 dias

### Preços
- **Transparência parcial**: só ART tem preço público ("A partir de R$ 350")
- AVCB/CLCB/Técnicos: "Consulte" (preço sob medida)
- Desconto permanente: **15% OFF** via Promo Bar + Exit Popup

### Canais de contato
- **WhatsApp**: `+55 11 94292-5865` — canal principal (todos os CTAs apontam pra cá)
- **Telefone**: mesmo número (link `tel:`)
- **Email**: `contato@vivaextintores.com.br` (typo antigo `viveextintores` foi corrigido)
- **Endereço**: Rua Marques de Recife, 53 — São Paulo/SP — 02925-010
- **Instagram**: `@viva_extintores`
- **Horário**: Seg-Sex 08h-18h

### Áreas de atendimento
- São Paulo (SP) — sede
- Minas Gerais (MG)
- Rio de Janeiro (RJ)
- Paraná (PR)
- Santa Catarina (SC)

### CREA
- Engenheiro responsável: **CREA 5069858688-SP** (footer)
- Todos os serviços com ART obrigatória

---

## Fluxos de dados (conversão)

### Fluxo 1 — Formulário Hero
```
Usuário preenche (serviço + tipo + nome + WhatsApp)
  → HeroForm.handleSubmit()
  → Monta string formatada com emoji e labels
  → encodeURIComponent()
  → window.open('https://api.whatsapp.com/send/?phone=...&text=...')
  → gtag('event', 'hero_form_submit', { service, property_type })
  → WhatsApp Web/App abre com msg pré-preenchida
  → Operador da Viva recebe e responde
```

### Fluxo 2 — Exit Popup
```
Triggers (qualquer um):
  1. Desktop: mouse sair pela parte superior da tela
  2. Mobile: scroll atinge 60% da página
  3. Fallback: 45 segundos sem interação

Cooldown: localStorage 'viva-exit-popup-v2' com timestamp
  → Não mostra novamente por 7 dias

Timer regressivo de 15min (visual, não funcional — apenas urgência)

Usuário preenche → mesma lógica do HeroForm → abre WhatsApp
gtag('event', 'exit_popup_conversion')
```

### Fluxo 3 — CTAs individuais
Cada card de laudo, cada business card, cada banner tem sua **própria mensagem pré-preenchida** no WhatsApp, permitindo ao operador identificar de onde veio o lead e começar o atendimento mais contextualizado.

Exemplos:
- Card "Laudo AVCB" → "Quero solicitar orçamento para Laudo AVCB"
- Card "Indústrias" → "Preciso de orçamento para minha indústria/fábrica"
- Banner Ajuda → "Preciso de ajuda com a regularização... gostaria de falar com um engenheiro especialista"

---

## Decisões técnicas e justificativas

### Por que Vite + React SPA (e não Next.js/Astro)?
- Projeto herdado já estava em Vite. Migração teria custo alto.
- Site single-page + redirect pra WhatsApp não se beneficia muito de SSG.
- **Trade-off**: SEO de páginas long-tail (`/laudo-avcb`, `/laudo-clcb`) é limitado. Se crescer, migrar pra Astro no futuro.

### Por que WhatsApp sem backend?
- Time comercial pequeno e consegue atender direto. Não precisa de CRM/pipeline automatizado.
- Zero custo de backend/DB. Zero manutenção.
- Mensagens formatadas com markdown (WhatsApp renderiza `*bold*`).
- **Trade-off**: Sem dashboard de leads. Métricas só via GA4 events.

### Por que CSS manual (sem Tailwind)?
- Projeto herdado. CSS limpo e organizado em seções funciona bem para 15 seções fixas.
- Apenas 28KB CSS final (gzipped 6KB). Performance boa.
- Se for crescer pra 10+ páginas, considerar migrar pra Tailwind.

### Por que Lucide-react?
- Icon set unificado (antes misturava Font Awesome). Font Awesome removido.
- Tree-shakeable — só os ícones usados vão pro bundle.

### Por que design system com variáveis CSS?
- Facilita trocar cores da marca sem caçar hex codes.
- `--primary`, `--cta-green`, `--whatsapp`, `--secondary` (amarelo) são todos identificáveis.

---

## Gotchas / armadilhas conhecidas

1. **GA4 placeholder** — `G-XXXXXXXXXX` no index.html linhas 45 e 48. **DEVE SER TROCADO ANTES DE PROD** ou comentado, senão envia hits pra lugar nenhum e não mede nada.
2. **Meta Pixel** — Está comentado. Quando tiver ID, descomentar e trocar `FB_PIXEL_ID`.
3. **og-image.jpg** — Referenciado no index.html mas **não existe ainda**. Criar 1200x630px com logo + foto de obra + headline. Sem ele, compartilhamentos em WhatsApp/Facebook ficam sem preview.
4. **Políticas LGPD** — Footer tem links para `/politica-privacidade.html` e `/termos-uso.html` que **ainda não foram criados**. Criar ou remover os links.
5. **Exit popup timer** — É visual, não funcional. A oferta de 15% é fixa (não expira de verdade). Cuidado para o time comercial não criar confusão.
6. **Testimonials são fictícios** — "Carlos Mendes", "Ana Paula Silva", "Roberto Oliveira" são placeholders. Substituir por depoimentos reais (com autorização) assim que possível.
7. **CNPJ e razão social** — Não estão no footer. Adicionar quando disponível (melhora SEO local e confiança).
8. **Fotos em /Fotos são JPGs pesados** — Originais da câmera. Otimizar para WebP no futuro (reduz ~60% o peso).
9. **`.DS_Store` no public** — Nada demais mas evita incluir. `.gitignore` já cobre.
10. **O `PhotoGallery.tsx` importa 12 JPGs** — alguns podem não existir se a pasta Fotos mudar. Checar se todos existem ao alterar.

---

## Como rodar localmente

```bash
cd /Users/lucascassiano/Antigravity/viva-extintores-v2

# Instalar deps (só 1ª vez)
npm install

# Dev server (http://localhost:5173)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## Como fazer deploy

### Substituir o projeto atual no GitHub
O repo original é `dosedegrowth-design/vivaextintores`. Este novo código substitui o conteúdo existente (força push ou merge conforme preferência).

```bash
cd /Users/lucascassiano/Antigravity/viva-extintores-v2

# Inicializar git
git init
git add -A
git commit -m "feat: reestruturação v2 completa — hero form, exit popup, mobile bar, SEO otimizado"

# Conectar ao remote existente
git remote add origin https://github.com/dosedegrowth-design/vivaextintores.git

# Trocar o conteúdo do main
git branch -M main
git push -u origin main --force
```

### Deploy Vercel
O projeto Vercel `prj_BVp87q4treyVFRDjwc8uOyvVGkVZ` (team `dose-de-growths-projects`) já está conectado ao GitHub.
Após o push, o Vercel detecta automaticamente e faz deploy em ~1 minuto.

- **Preview**: https://vivaextintores.vercel.app
- **Domínio custom (TODO)**: apontar `vivaextintores.com.br` via Registro.br → Vercel

---

## Como fazer manutenção / adicionar funcionalidades comuns

### Adicionar novo laudo
Editar `src/components/LaudosSection.tsx` — array `laudos[]`. Adicionar objeto com `id`, `title`, `icon`, `prazo`, `price`, `content`, `whatsMsg`.

### Trocar textos da Promo Bar
Editar `src/components/PromoBar.tsx` — array `messages[]`.

### Adicionar depoimento novo
Editar `src/components/Testimonials.tsx` — array `testimonials[]`. Incluir `result` (resultado quantificado) é importante pra conversão.

### Trocar telefone
Buscar `5511942925865` em todos os `.tsx` (11 ocorrências) e substituir. Também trocar nas tags `tel:+5511942925865` e no JSON-LD do `index.html`.

### Adicionar nova seção
1. Criar `src/components/NovaSecao.tsx`
2. Importar no `src/App.tsx` e adicionar na ordem desejada
3. Adicionar CSS no final de `src/index.css` (seguir padrão das outras seções)

### Trocar cores da marca
Editar variáveis CSS em `:root` no topo de `src/index.css`:
- `--primary` (vermelho Viva)
- `--secondary` (amarelo)
- `--cta-green` / `--whatsapp`
- `--dark-bg`

---

## Roadmap futuro (não implementado)

- [ ] Migração para Astro (SSG) → páginas por serviço (`/laudo-avcb`, `/laudo-clcb`, `/projeto-ppci`)
- [ ] Blog técnico (LSA keywords: "multa AVCB", "renovar CLCB", "prazo AVCB 2026")
- [ ] Integração com CRM (Pipedrive/RD Station) via webhook Meta Lead Ads
- [ ] Calculadora "Quanto custa regularizar meu imóvel?" (input: m² + tipo) → estimativa
- [ ] A/B test do headline da Hero (Optimize/VWO)
- [ ] Página "Sobre" com equipe + foto dos engenheiros + ART de cada um
- [ ] WebP para todas as fotos (reduz peso ~60%)
- [ ] Lazy load do ExitPopup (hoje já é pequeno, mas pode melhorar FCP)
- [ ] Form backend real (Formspree/Supabase) alternativo ao WhatsApp

---

## Referências

- **Inspiração comercial**: www.solutiondesentupidora.com.br (layout hero com form, promo bar, mobile fixed bar, múltiplos CTAs segmentados)
- **Plano de reestruturação original**: `PLANO_REESTRUTURACAO.md` no projeto `viva-extintores` (v1)
- **Assets**: reaproveitados do projeto v1 (logos, obras, Fotos)

---

**Data de criação**: Abril 2026
**Responsável técnico**: Dose de Growth
**Versão**: 2.0.0
