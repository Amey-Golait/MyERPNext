FROM frappe/erpnext:v15.20.1

USER root
WORKDIR /workspace

# Copy everything into the image
COPY --chown=frappe:frappe . /workspace

# Make sure the entrypoint script is executable
RUN chmod +x /workspace/entrypoint.sh

USER frappe

# Install Python dependencies (including editable custom apps)
RUN pip install --no-cache-dir -r requirements.txt

# Set the script to be run when the container starts
ENTRYPOINT ["/bin/bash", "/workspace/entrypoint.sh"]
