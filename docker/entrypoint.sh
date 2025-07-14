#!/bin/bash
set -e

echo "Starting ERPNext Docker Entrypoint"

SITE_NAME="myerpnext-deploy.onrender.com"
SITE_PATH="sites/${SITE_NAME}"

# Navigate to correct path
cd /workspace

# Fix ownership (optional, safe fallback)
chown -R frappe:frappe .

# Create site only if it doesn't exist
if [ ! -d "$SITE_PATH" ]; then
  echo "Site '$SITE_NAME' not found. Creating..."
  bench new-site "$SITE_NAME" \
    --admin-password admin \
    --mariadb-root-username root \
    --mariadb-root-password "$MYSQL_ROOT_PASSWORD" \
    --db-host db \
    --no-mariadb-socket \
    --force

  echo "Installing apps..."
  bench --site "$SITE_NAME" install-app erpnext
  bench --site "$SITE_NAME" install-app student_master
  bench --site "$SITE_NAME" install-app clinic_app
  bench --site "$SITE_NAME" install-app payments_processor
  bench --site "$SITE_NAME" install-app payment_integration_utils
  bench --site "$SITE_NAME" install-app razorpayx_integration
else
  echo "Site '$SITE_NAME' already exists. Skipping creation."
fi

echo "Running migrate, build, and serve..."
bench --site "$SITE_NAME" migrate
bench build --force
bench clear-cache

exec bench serve --port "$PORT"
