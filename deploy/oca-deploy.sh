#!/usr/bin/env bash
# CÓPIA DE REFERÊNCIA / documentação.
#
# A versão AUTORITATIVA deste script vive no servidor de produção em
#   /usr/local/bin/oca-deploy   (dono root, fora deste repositório)
# de propósito: assim um `git pull` NUNCA altera o que a chave de deploy executa.
#
# A chave SSH de deploy do GitHub Actions está presa a este script via
# "forced command" no ~/.ssh/authorized_keys do root. Ou seja: essa chave
# só consegue rodar o deploy da OCA — não roda comando arbitrário nem toca
# em outros containers do host.
#
# Se precisar alterar o comportamento do deploy, edite o arquivo no servidor.
set -euo pipefail
REPO="https://github.com/tnramalho/oca-planejados-site.git"
DIR="/opt/oca-planejados"
COMPOSE="docker-compose.prod.yml"

cd "$DIR"
if [ ! -d .git ]; then
  git init -q
  git remote add origin "$REPO" 2>/dev/null || git remote set-url origin "$REPO"
fi
git fetch --prune origin main

# Trava: só prossegue se o compose já está no main (evita deploy quebrado).
if ! git cat-file -e "origin/main:${COMPOSE}" 2>/dev/null; then
  echo "ABORT: ${COMPOSE} ainda não está no main. Nada foi alterado."
  exit 0
fi

git reset --hard origin/main
git clean -fd -e node_modules
docker compose -f "$COMPOSE" up -d --build
docker image prune -f >/dev/null 2>&1 || true
echo "OCA deploy OK -> $(git rev-parse --short HEAD)"
