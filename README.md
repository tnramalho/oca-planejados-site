# OCA Planejados — Site Institucional

Site institucional da OCA Planejados, construído em Next.js 14 com Tailwind CSS.

**Deploy:** https://oca-planejados-site.vercel.app
**Repositório:** https://github.com/tnramalho/oca-planejados-site

---

## Stack

- **Next.js 14** — App Router, export estático (`output: 'export'`)
- **TypeScript**
- **Tailwind CSS**

## Pré-requisitos

- Node.js 18+
- npm

## Instalação e desenvolvimento local

```bash
npm install
npm run dev
```

O site roda em `http://localhost:3000`.

## Build e preview

```bash
npm run build       # gera a pasta /out com os arquivos estáticos
```

O `output: 'export'` no `next.config.js` faz o Next.js gerar HTML estático puro — sem servidor Node em produção.

## Deploy

O deploy é feito automaticamente pelo **Vercel** a cada push na branch `main`.

Para deploy manual via CLI Vercel:
```bash
npx vercel --prod
```

## Estrutura do projeto

```
src/
  app/
    layout.tsx        # Layout global (fonte, metadata)
    page.tsx          # Página principal (compõe as seções abaixo)
    globals.css       # Estilos globais e variáveis CSS
    robots.ts         # Configuração do robots.txt
    sitemap.ts        # Geração automática do sitemap
  components/
    Navigation.tsx        # Barra de navegação
    HeroSection.tsx       # Seção hero (topo)
    AboutSection.tsx      # Sobre a empresa
    ServicesSection.tsx   # Serviços oferecidos
    GallerySection.tsx    # Galeria de projetos
    ShowroomSection.tsx   # Showroom
    StatsSection.tsx      # Números/estatísticas
    TestimonialsSection.tsx  # Depoimentos de clientes
    BlogSection.tsx       # Blog / artigos
    CTASection.tsx        # Call-to-action
    Footer.tsx            # Rodapé
    RevealWrapper.tsx     # Animação de entrada ao scroll (wrapper reutilizável)
  lib/                # Utilitários (helpers, constantes)
public/               # Imagens, ícones e demais assets estáticos
```

## Como adicionar ou editar conteúdo

- **Texto e copy:** editar diretamente no componente correspondente em `src/components/`
- **Imagens:** colocar em `public/` e referenciar como `/nome-do-arquivo.jpg`
- **Cores e fontes:** ajustar em `tailwind.config.ts` e `src/app/globals.css`
- **Nova seção:** criar componente em `src/components/` e importar em `src/app/page.tsx`

## Observações importantes

- `images: { unoptimized: true }` está habilitado no `next.config.js` por conta do export estático — o componente `<Image>` do Next.js funciona normalmente, mas sem otimização automática de imagem no servidor.
- O site não usa banco de dados nem API própria. Todo conteúdo é estático nos componentes.
