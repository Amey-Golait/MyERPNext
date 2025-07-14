FROM frappe/erpnext:v15.20.1

USER root

# Copy full bench
COPY . /home/frappe/frappe-bench

# Fix known Frappe dependencies
RUN pip install click==8.0.4 semantic-version==2.8.5

# Fix permissions
RUN chown -R frappe:frappe /home/frappe/frappe-bench

WORKDIR /home/frappe/frappe-bench

USER frappe

ENTRYPOINT ["/home/frappe/frappe-bench/docker/entrypoint.sh"]
