#!/bin/sh
set -e


if [ -f dist/index.js ]; then
  exec node dist/index.js "$@"
fi


if [ -f dist/server.js ]; then
  exec node dist/server.js "$@"
fi


if [ -f index.js ]; then
  exec node index.js "$@"
fi

if [ -f server.js ]; then
  exec node server.js "$@"
fi

if [ -f package.json ]; then
  if npm run | grep -q '"start"'; then
    exec npm start "$@"
  fi
fi

echo "Nenhum entrypoint encontrado (dist/index.js, dist/server.js, index.js, server.js ou npm start)." >&2
exit 1
