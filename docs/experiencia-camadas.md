# Experiência de montagem

Rota de teste: `/experiencia/`. A homepage `/` mantém seu hero e sua rolagem. Os componentes das demais seções são compartilhados. Navegação e rodapé recebem a origem das âncoras apenas nesta rota. A experiência não entra no sitemap e declara `noindex, follow`.

## Movimento

O scroll nativo dirige quatro grupos independentes: bancada, torre, ilha e mesa. As entradas se sobrepõem, com interpolação contínua de posição, rotação, escala e opacidade. Não há captura de wheel/touch, scroll-snap ou saltos programáticos. A área do hero permanece visível durante 190svh adicionais no desktop e 130svh no celular; o link “Ver resultado” permite pular a montagem. O processamento por frame só continua enquanto há movimento a resolver e a seção está visível.

No celular a cena mantém proporção 3:2 para exibir o ambiente completo. Movimento reduzido mostra a foto final sem sequência longa. Sem JavaScript ou com erro de carregamento de camada, a foto original permanece como alternativa estática. Os arquivos são decodificados antes de ativar a sequência.

## Imagens

Ferramenta: image_gen integrada, modo de edição. Referência: `public/images/oca-showroom-2805.webp`. As imagens intermediárias são interpretações geradas da fotografia, não um registro técnico das etapas de fabricação. O final usa a foto original para preservar o ambiente real.

Arquivos finais: `public/experience/{empty,cabinet,tower,island,dining}-{768,1536}.webp`. Transparência alfa preservada nas quatro camadas de móveis. O enquadramento é definido no CSS isolado do componente; a bancada gerada tem as luminárias recortadas via CSS para não duplicar elementos durante o encaixe.

Originais gerados preservados em `/Users/thiagoramalho/.codex/generated_images/01a0b263-2d7f-78c2-b661-53b68536f723/`.

## Prompts usados

### Ambiente vazio

Use case: precise-object-edit. Edit target: supplied photograph of the Oca kitchen. Produce the EMPTY ROOM background plate for a precisely aligned layered scroll animation. Keep EXACTLY the same camera, perspective, framing, 3:2 landscape aspect ratio, ceiling and track light, wood column on left, white roller blinds on rear wall, daylight and color balance. REMOVE ALL furniture and contents: rear base cabinets and stone sink countertop and faucet, wall lamps, fridge and tall cabinets on right, glass display cabinet at far right, central island, foreground dining table and chairs, plants, decorations, objects. Reconstruct an empty clean room: continue light warm floor across the entire lower part and plain warm off-white wall on the right, behind the removed cabinetry. Leave left wood column and rear white blinds exactly aligned. No new objects. Photorealistic architectural photograph, high quality, no typography or watermark. Output a single full-frame background image, not a collage. This must match the original image when furniture cutout layers are placed back over it.

### Bancada

Use case: background-extraction. Edit target: supplied Oca kitchen photograph. Create one truly TRANSPARENT RGBA PNG overlay for a layered animation. Canvas must match full original 3:2 landscape photograph, keep exact camera perspective, framing and original object positions. ISOLATE ONLY the REAR lower gray kitchen cabinets with their marble countertop, sink, faucet and countertop decorative objects, plus the two black wall-mounted lamps on the left. Keep their original positions/sizes exactly on the full canvas. Remove everything else to genuine alpha transparency: blinds, walls, floor, ceiling, left wood column, right tall cabinet/fridge/glass cabinet, central island, foreground table and chairs. Reconstruct rear base cabinet portions occluded by island and table so this layer is a continuous cabinet run ending before right fridge. Objects should retain photo textures, colors, realistic edges. DO NOT center objects or crop to their bounding box. NO checkerboard drawn, NO white or black background, no text. Output one full-frame transparent overlay.

### Torre

Use case: background-extraction. Extract ONLY the right-hand tall gray cabinetry, refrigerator, built-in oven and far-right glass display cabinet from the supplied photograph, as one photorealistic transparent RGBA PNG cutout. Preserve exact original perspective and frontal proportions, cabinet finishes, lighting, reflection details and appliance appearances. No white background, genuine alpha transparency outside the cutout, no checkerboard drawing. Crop canvas snugly to the extracted group. REMOVE rear sink/base cabinetry, central island, foreground table/chairs, blinds, ceiling, wood column and floor. The object group should have the same original perspective, as photographed from left of these right-side cabinets, with top cut off by the frame exactly like original. Output one isolated group, not a collage, no text.

### Ilha

Use case: background-extraction. Extract ONLY the central kitchen island in the supplied photo: rounded layered ivory marble stone counter with horizontal edge grooves, black induction hob on top, and warm gray/taupe base cabinet beneath. Reconstruct the front base portion hidden by the foreground dining table so the island is complete. Preserve original perspective and proportions, viewed from front slightly above as in photo. Output isolated photorealistic furniture cutout on genuine alpha-transparent RGBA background. Crop canvas tightly around island with tiny transparent margin, do not add any floor or background or shadows outside object. Remove dining table/chairs, rear cabinets, all walls/blinds, right cabinets, lights. NO white or black background, no checkerboard drawn, no typography. The island must closely match the supplied real marble texture and shape, no design changes.

### Mesa

Use case: background-extraction. Extract ONLY the foreground pale marble dining tabletop and the brown upholstered chairs visible at its lower left and lower right in the supplied photograph. Preserve the original frontal camera perspective, vanishing direction and exact original crop: the tabletop runs from the center toward the bottom edge and disappears below frame, with chairs partly cropped at bottom sides. All other pixels must be genuine alpha transparency. Keep objects in their EXACT ORIGINAL coordinates in a full-frame 3:2 landscape transparent RGBA PNG canvas. No central kitchen island, no kitchen cabinets, no floor, no blinds, no wall, no shadows outside objects. Do not complete the table below the photo, do not center or resize isolated objects. Photorealistic, retain stone veining and brown fabric. NO checkerboard drawn or opaque background.

## Validação

`npm run build`, `npm run typecheck`, `python3 scripts/check-export.py` e `node scripts/check-assembly.cjs`.

A inspeção visual interativa ainda depende de navegador conectado; a ferramenta de navegador retornou indisponível nesta sessão. Os testes de código verificam extremos da animação, progressão das opacidades, transparência real dos arquivos, canonical, noindex, sitemap, links e preservação da navegação original.
