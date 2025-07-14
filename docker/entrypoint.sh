#!/bin/bash

cd /home/frappe/frappe-bench

# Debug: List contents of apps directory
echo "== Apps directory content =="
ls -la /home/frappe/frappe-bench/apps

# Build production assets
bench build --production --force

# Start development server (for Render)
bench serve --port ${PORT:-8000}
