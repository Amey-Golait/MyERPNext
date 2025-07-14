# docker/Dockerfile
FROM frappe/erpnext:v15.20.1

USER root

# Set working directory to frappe-bench (important!)
WORKDIR /home/frappe/frappe-bench

# Copy everything into frappe-bench, preserving ownership
COPY --chown=frappe:frappe . /home/frappe/frappe-bench

USER frappe

# Install Python dependencies for custom apps
RUN pip install --no-cache-dir -r requirements.txt
