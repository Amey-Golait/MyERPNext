#!/bin/bash
set -e

echo "Starting ERPNext setup..."

cd /workspace

SITE_NAME=myerpnext-deploy.onrender.com

chown -R frappe:frappe /workspace

if [ ! -d "sites/$SITE_NAME" ]; then
  echo "Site not found. Creating new site..."
  bench new-site "$SITE_NAME" \
    --admin-password admin \
    --mariadb-root-username root \
    --mariadb-root-password "$MYSQL_ROOT_PASSWORD" \
    --db-host db \
    --no-mariadb-socket \
    --install-app erpnext \
    --force

  bench --site "$SITE_NAME" install-app student_master
  bench --site "$SITE_NAME" install-app clinic_app
  bench --site "$SITE_NAME" install-app payments_processor
  bench --site "$SITE_NAME" install-app payment_integration_utils
  bench --site "$SITE_NAME" install-app razorpayx_integration
fi

bench --site "$SITE_NAME" migrate
bench setup requirements
bench build --force
bench clear-cache

exec bench serve --port "$PORT"
