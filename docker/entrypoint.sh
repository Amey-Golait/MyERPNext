#!/bin/bash

cd /home/frappe/frappe-bench

echo "== Installing custom apps =="
for app in $(cat sites/apps.txt); do
  if [ -f "apps/$app/setup.py" ]; then
    echo "Installing $app"
    pip install -e apps/$app
  else
    echo "Skipping $app (no setup.py)"
  fi
done

echo "== Build production assets =="
bench build --production --force

echo "== Start bench server =="
bench serve --port ${PORT:-8000}
