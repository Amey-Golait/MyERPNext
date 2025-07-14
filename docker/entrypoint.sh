#!/bin/bash

cd /home/frappe/frappe-bench

echo "== Installing apps listed in sites/apps.txt =="
for app in $(cat sites/apps.txt); do
  echo "Looking for apps/$app/setup.py..."
  if [ -f "apps/$app/setup.py" ]; then
    echo "Installing $app with pip..."
    pip install -e apps/$app
  else
    echo "WARNING: $app missing setup.py — skipping pip install"
  fi
done

echo "== Building production assets =="
bench build --production --force

echo "== Starting bench server =="
bench serve --port ${PORT:-8000}
