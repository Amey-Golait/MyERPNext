# docker/Dockerfile
FROM frappe/erpnext:v15.20.1

USER root

# Set working directory
WORKDIR /workspace

# Copy all apps and bench config
COPY --chown=frappe:frappe . /workspace

USER frappe

# Install all app dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
