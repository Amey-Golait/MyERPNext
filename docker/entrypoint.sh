#!/bin/bash

set -e

echo "Starting ERPNext setup..."

SITE_NAME=myerpnext-deploy.onrender.com
SITE_PATH=sites/$SITE_NAME

# Ensure working directory
cd /workspace

# Fix permissions
mkdir -p sites
chown -R frappe:frappe /workspace

# Create site if missing
if [ ! -d "$SITE_PATH" ]; then
  echo "Creating new site: $SITE_NAME"

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
else
  echo "Site $SITE_NAME already exists. Skipping site creation."
fi

# Run migrations and prepare assets
bench --site "$SITE_NAME" migrate
bench setup requirements
bench build --force
bench clear-cache

# Serve using the port Render expects
exec bench serve --port "$PORT"
