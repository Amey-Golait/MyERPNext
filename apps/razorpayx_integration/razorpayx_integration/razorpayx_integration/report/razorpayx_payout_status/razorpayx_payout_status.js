// Copyright (c) 2025, Resilient Tech and contributors
// For license information, please see license.txt

const DOC_STATUS = { Draft: "grey", Submitted: "blue", Cancelled: "red" };

const TIMESPANS = [
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
    "This Quarter",
    "This Year",
    "Last Week",
    "Last Month",
    "Last Quarter",
    "Last Year",
    "Select Date Range",
];

const UTR_PLACEHOLDER = "*** UTR WILL BE SET AUTOMATICALLY ***";

frappe.query_reports["RazorpayX Payout Status"] = {
    filters: [
        {
            fieldname: "company",
            label: __("Company"),
            fieldtype: "Link",
            options: "Company",
            default: frappe.defaults.get_user_default("Company"),
            reqd: 1,
        },
        {
            fieldname: "date_time_span",
            label: __("Posting Date"),
            fieldtype: "Select",
            options: TIMESPANS,
            default: "This Month",
            reqd: 1,
            on_change: (report) => {
                if (report.get_filter_value("date_time_span") === "Select Date Range") {
                    const date_range = report.get_filter("date_range");
                    date_range.df.reqd = 1;
                    date_range.set_required(1);
                }

                report.refresh();
            },
        },
        {
            fieldname: "date_range",
            fieldtype: "DateRange",
            label: __("Posting Date Range"),
            depends_on: "eval: doc.date_time_span === 'Select Date Range'",
            default: [frappe.datetime.month_start(), frappe.datetime.now_date()],
        },
        {
            fieldname: "party_type",
            label: __("Party Type"),
            fieldtype: "Link",
            options: "Party Type",
            get_query: function () {
                return {
                    filters: {
                        name: ["in", Object.keys(frappe.boot.party_account_types)],
                    },
                };
            },
        },
        {
            fieldname: "party",
            label: __("Party"),
            fieldtype: "Dynamic Link",
            options: "party_type",
        },
        {
            fieldname: "docstatus",
            label: __("Document Status"),
            fieldtype: "MultiSelectList",
            get_data: () => get_multiselect_options(Object.keys(DOC_STATUS)),
        },
        {
            fieldname: "payout_status",
            label: __("Payout Status"),
            fieldtype: "MultiSelectList",
            get_data: () => get_multiselect_options(Object.keys(razorpayx.PAYOUT_STATUS)),
        },
        {
            fieldname: "payout_mode",
            label: __("Payout Mode"),
            fieldtype: "MultiSelectList",
            get_data: () =>
                get_multiselect_options(Object.values(payment_integration_utils.PAYMENT_TRANSFER_METHOD)),
        },
        {
            fieldname: "razorpayx_config",
            label: __("RazorpayX Configuration"),
            fieldtype: "Link",
            options: "RazorpayX Configuration",
            get_query: function () {
                return {
                    filters: { company: frappe.query_report.get_filter_value("company") },
                };
            },
        },
        {
            fieldname: "payout_made_by",
            label: __("Payout Made By"),
            fieldtype: "Link",
            options: "User",
        },
    ],

    onload: function (report) {
        const docstatus = report.get_filter("docstatus");

        if (docstatus && (!docstatus.get_value() || docstatus.get_value().length === 0)) {
            docstatus.set_value("Submitted");
        }
    },

    formatter: function (value, row, column, data, default_formatter) {
        value = default_formatter(value, row, column, data);

        if (column.fieldname === "docstatus") {
            value = this.get_formatted_docstatus(value);
        } else if (column.fieldname === "payout_status") {
            value = this.get_formatted_payout_status(value);
        } else if (column.fieldname === "utr") {
            if (value === UTR_PLACEHOLDER) {
                value = `<span class="text-muted">-</span>`;
            }
        }

        return value;
    },

    get_formatted_docstatus: function (value) {
        return `<div class="text-center">
					<span class="indicator-pill ${DOC_STATUS[value]} no-indicator-dot ellipsis">
						<span class="ellipsis">${value}</span>
					</span>
				</div>`;
    },

    get_formatted_payout_status: function (value) {
        return `<div class="indicator ${razorpayx.PAYOUT_STATUS[value]}">
					<strong>${value}</strong>
				</div>`;
    },
};

function get_multiselect_options(values) {
    const options = [];
    for (const option of values) {
        options.push({
            value: option,
            label: option,
            description: "",
        });
    }
    return options;
}
