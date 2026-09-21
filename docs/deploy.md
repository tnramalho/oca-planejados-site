# Deploy — Produção (Docker + Traefik)

O site roda no servidor de produção como um site estático (Next.js `output: export`)
servido por **nginx**, atrás do **Traefik** já existente no host, nos domínios
`ocaplanejados.com` e `www.ocaplanejados.com`.

## Deploy automático (GitHub Actions)

**Todo push no `main` publica automaticamente.** O fluxo:

```
git push origin main
   └─ GitHub Actions (.github/workflows/deploy.yml)
        └─ ssh (chave de deploy dedicada) → servidor
             └─ /usr/local/bin/oca-deploy  (forced command)
                  ├─ git reset --hard origin/main
                  └─ docker compose -f docker-compose.prod.yml up -d --build
```

A chave de deploy do Actions está **presa a um único script** (`oca-deploy`) no
servidor via *forced command*. Mesmo que vazasse, ela **só consegue rodar o deploy
da OCA** — não executa comando arbitrário nem afeta outros containers do host.

Também é possível disparar manualmente em **Actions → Deploy OCA (produção) →
Run workflow**.

## Configuração inicial (feita uma vez pelo dono do repositório)

O servidor já está preparado (script `oca-deploy` + chave de deploy instalada).
Falta apenas cadastrar os **secrets** do repositório:

**Settings → Secrets and variables → Actions → New repository secret**

| Secret           | Valor                                                        |
| ---------------- | ----------------------------------------------------------- |
| `DEPLOY_HOST`    | IP/host do servidor de produção                             |
| `DEPLOY_SSH_KEY` | Chave SSH **privada** de deploy (conteúdo completo do arquivo) |

> A chave privada é a contraparte da pública já instalada no `authorized_keys` do
> servidor (comentário `oca-deploy-github-actions`). É uma chave **dedicada** ao
> deploy — não é a chave pessoal de ninguém.

Depois de cadastrar os secrets, o próximo push no `main` já publica sozinho.

## Deploy manual pelo servidor (fallback)

```bash
ssh <host>
/usr/local/bin/oca-deploy
```

## Arquivos relevantes

- `Dockerfile` — build do Next export e imagem final nginx
- `deploy/nginx.conf` — config do nginx (cache de assets, SPA fallback)
- `docker-compose.prod.yml` — serviço `web` + labels do Traefik
- `.github/workflows/deploy.yml` — pipeline de deploy
- `deploy/oca-deploy.sh` — cópia de referência do script do servidor
