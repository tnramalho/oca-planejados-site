# Oca Planejados

Site em Next.js 15, React 18 e Tailwind CSS, com exportação estática.

## Desenvolvimento

Node.js 20.9 ou superior. Execute `npm ci` e `npm run dev`.

## Validação

```sh
npm run build
npm run typecheck
python3 scripts/check-export.py
npm audit
```

O build gera `out/`. O Vercel publica automaticamente os pushes na branch `main`.

## Imagens e vídeo

As fotos WebP originais ficam em `public/images`. `predev` e `prebuild` geram as variantes responsivas com Sharp em `public/images/responsive`, pasta ignorada pelo Git. O loader estático do Next usa essas variantes sem servidor de imagens. Ao adicionar uma foto, reinicie o desenvolvimento para gerar suas versões.

No celular e em conexões identificadas como lentas/economia de dados, o hero abre com foto. O vídeo é carregado por solicitação; no desktop ele inicia automaticamente, respeitando a preferência por movimento reduzido. A versão mobile tem 854 pixels de largura. O projeto Remotion está em `hero-video/`.

## Conteúdo e SEO

- Dados da empresa e dúvidas: `src/lib/site.ts`.
- Guias dos ambientes: `src/lib/services.ts`.
- Homepage e páginas de serviços têm canonical e dados estruturados próprios.
- Fontes são baixadas pelo Next durante o build e servidas pelo próprio site.
- O override do PostCSS atualiza a dependência transitiva do Next dentro da versão principal 8 para corrigir os avisos de segurança. Revisar ao atualizar o Next.
- Pendências de publicação e medição: `docs/seo-publicacao.md`.
