FROM frappe/erpnext:v15.20.1

USER root
WORKDIR /workspace
COPY --chown=frappe:frappe . /workspace
USER frappe

RUN pip install --no-cache-dir -r requirements.txt
