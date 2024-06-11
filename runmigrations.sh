#!/bin/bash

until nc -z -v -w30 "$DB_HOST" "$DB_PORT"; do
  echo "Esperando a MariaDB..."
  sleep 5
done

npx sequelize-cli db:migrate

exec "$@"