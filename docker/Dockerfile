FROM frappe/erpnext:v15.20.1

USER root
WORKDIR /workspace

COPY --chown=frappe:frappe . /workspace

# Ensure entrypoint is executable
RUN chmod +x docker/entrypoint.sh

USER frappe

RUN pip install --no-cache-dir -r requirements.txt
