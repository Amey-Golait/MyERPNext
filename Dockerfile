FROM frappe/erpnext:v15.20.1

USER root
WORKDIR /workspace

# Copy everything from the current context
COPY --chown=frappe:frappe . /workspace

# Make sure entrypoint is executable
RUN chmod +x /workspace/entrypoint.sh

USER frappe

RUN pip install --no-cache-dir -r requirements.txt
