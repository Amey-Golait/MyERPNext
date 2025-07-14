#!/bin/bash

set -e

echo "Starting ERPNext setup..."

SITE_NAME=erp.amey.local

# Set ownership (may help avoid file permission issues)
chown -R frappe:frappe /workspace

# Create site if not exists
if [ ! -d "sites/$SITE_NAME" ]; then
  echo "Site not found. Creating new site..."
  bench new-site $SITE_NAME \
    --admin-password admin \
    --mariadb-root-username root \
    --mariadb-root-password "$MYSQL_ROOT_PASSWORD" \
    --db-host db \
    --no-mariadb-socket \
    --install-app erpnext \
    --force

  # Install custom apps
  bench --site $SITE_NAME install-app student_master
  bench --site $SITE_NAME install-app clinic_app
  bench --site $SITE_NAME install-app payments_processor
  bench --site $SITE_NAME install-app payment_integration_utils
  bench --site $SITE_NAME install-app razorpayx_integration
fi

# Apply patches and migrate
bench --site $SITE_NAME migrate

# Build assets
bench setup requirements
bench build --force
bench clear-cache

# Start server on Render-assigned port
exec bench serve --port "$PORT"
