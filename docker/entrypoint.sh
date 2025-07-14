#!/bin/bash

cd /home/frappe/frappe-bench

# Install all custom apps in editable mode
for app in $(cat sites/apps.txt); do
  if [ -f apps/$app/setup.py ]; then
    echo "Installing $app ..."
    pip install -e apps/$app
  fi
done

# Build production assets
bench build --production --force

# Start development server (for Render)
bench serve --port ${PORT:-8000}
