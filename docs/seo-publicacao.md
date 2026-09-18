# Publicação e descoberta

O domínio canônico configurado em `src/lib/site.ts` é https://ocaplanejados.com, site público atual da empresa. Confirmar que o novo site será publicado nesse domínio antes de implantar. Endereço confirmado: Av. Maria Rosa, 1094 - Loja 02, Manaíra, João Pessoa - PB.

## Antes de publicar

- Confirmar domínio final e manter canonical, Open Graph, sitemap e dados estruturados na mesma origem.
- Confirmar telefone, horários e condições comerciais com a empresa. Horários, projeto gratuito, contagem de clientes e avaliações sem fonte foram retirados.
- Publicar somente depoimentos reais autorizados, com origem verificável. Não usar número de clientes como número de avaliações.
- Mapear URLs existentes no domínio e preservar ou redirecionar páginas substituídas antes de trocar o site atual. O projeto gera uma página principal, robots.txt e sitemap.xml.
- Revisar dependências: o projeto está em Next.js 14.2.5 e o npm reportou vulnerabilidades na instalação. A atualização exige uma tarefa de compatibilidade antes da publicação.

## Após publicar

- Conferir HTTPS, redirecionamento para o domínio preferencial e ausência de bloqueio de indexação na hospedagem.
- Verificar a propriedade no Google Search Console e Bing Webmaster Tools; enviar `/sitemap.xml` e inspecionar a página inicial.
- Atualizar o Perfil da Empresa no Google com o mesmo nome, endereço, telefone, URL, horários reais e fotos.
- Conferir o pin do mapa no navegador e no Perfil da Empresa. O embed usa a busca pelo endereço confirmado, sem coordenadas presumidas.
- Validar os dados estruturados no Rich Results Test e no Schema Markup Validator; medir a página publicada com PageSpeed Insights em celular.
- Monitorar consultas, páginas indexadas e contatos recebidos. Não há garantia de posição, indexação ou citação por IA.

## Conteúdo

Perguntas frequentes são renderizadas no HTML e compartilham a mesma fonte com o JSON-LD. A marcação FAQ não implica elegibilidade a resultados enriquecidos. Criar páginas adicionais apenas com conteúdo próprio suficiente: projetos reais, ambientes, necessidades atendidas e detalhes confirmados; evitar páginas duplicadas por bairro ou artigos sem conteúdo.

## Referências

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
