from frappe import _

def get_data():
    return {
        "fieldname": "payments_processor_configuration",
        "transactions": [
            {
                "label": _("Setup"),
                "items": ["Payments Processor Configuration"]
            }
        ]
    }
