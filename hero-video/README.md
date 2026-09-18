# Vídeo do hero — Oca Planejados

Composição Remotion `OcaHero`: 1920 × 1080, 30 fps, 631 quadros (21,03 s), sem áudio. Quatro fotos do showroom fornecidas pelo cliente: cozinha (2805), jantar (2775), quarto (2751) e painel de TV (2763). Movimentos leves e transições de um segundo; o último quadro retorna ao enquadramento inicial.

```sh
npm ci
npm run dev -- --no-open --port=3001
npm run lint
npx remotion render src/index.ts OcaHero ../public/videos/oca-showroom-hero.mp4 --codec=h264 --crf=25 --pixel-format=yuv420p --concurrency=2
```

O site utiliza o MP4 exportado e mantém o título em HTML. A preferência por movimento reduzido exibe a foto estática. Os arquivos originais do cliente permanecem intactos.
