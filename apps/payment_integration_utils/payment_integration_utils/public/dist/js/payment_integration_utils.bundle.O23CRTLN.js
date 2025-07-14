(() => {
  // ../payment_integration_utils/payment_integration_utils/public/js/utils.js
  frappe.provide("payment_integration_utils");
  var PAYMENT_AUTHORIZER = "Online Payments Authorizer";
  var PAY_ICON = "expenses";
  var PAYMENT_TRANSFER_METHOD = {
    NEFT: "NEFT",
    IMPS: "IMPS",
    RTGS: "RTGS",
    UPI: "UPI",
    LINK: "Link"
  };
  Object.assign(payment_integration_utils, {
    PAYMENT_AUTHORIZER,
    PAYMENT_TRANSFER_METHOD,
    PAY_ICON,
    get_date_in_user_fmt(date) {
      return frappe.datetime.str_to_user(date, null, frappe.datetime.get_user_date_fmt());
    },
    can_user_authorize_payment() {
      return frappe.session.user !== "Administrator" && frappe.user.has_role(PAYMENT_AUTHORIZER) && frappe.perm.has_perm("Payment Entry", 0, "submit");
    },
    user_has_payment_permissions(frm) {
      if (frm.doc.__onload) {
        return this.get_onload(frm, "has_payment_permission");
      }
      return this.can_user_authorize_payment();
    },
    set_onload(frm, key, value) {
      if (!frm.doc.__onload) {
        frm.doc.__onload = {};
      }
      frm.doc.__onload[key] = value;
    },
    get_onload(frm, key) {
      return frm.doc && frm.doc.__onload ? frm.doc.__onload[key] : void 0;
    },
    reset_values(frm, ...fields) {
      fields.forEach((field) => frm.set_value(field, ""));
    },
    async get_employee_contact_details(employee) {
      const { message } = await frappe.db.get_value("Employee", employee, [
        "cell_number as contact_mobile",
        "prefered_email as contact_email"
      ]);
      return message;
    },
    is_already_paid(frm) {
      return this.get_onload(frm, "is_already_paid");
    },
    validate_payment_transfer_method(method, amount) {
      if ([PAYMENT_TRANSFER_METHOD.NEFT, PAYMENT_TRANSFER_METHOD.LINK].includes(method))
        return;
      if (method === PAYMENT_TRANSFER_METHOD.IMPS && amount > 5e5) {
        frappe.throw({
          message: __("Amount should be less than {0} for <strong>{1}</strong> transfer", [
            format_currency(5e5, "INR"),
            PAYMENT_TRANSFER_METHOD.IMPS
          ]),
          title: __("Amount Limit Exceeded")
        });
      } else if (method === PAYMENT_TRANSFER_METHOD.UPI && amount > 1e5) {
        frappe.throw({
          message: __("Amount should be less than {0} for <strong>{1}</strong> transfer", [
            format_currency(1e5, "INR"),
            PAYMENT_TRANSFER_METHOD.UPI
          ]),
          title: __("Amount Limit Exceeded")
        });
      } else if (method === PAYMENT_TRANSFER_METHOD.RTGS && amount < 2e5) {
        frappe.throw({
          message: __("Amount should be greater than {0} for <strong>{1}</strong> transfer", [
            format_currency(2e5, "INR"),
            PAYMENT_TRANSFER_METHOD.RTGS
          ]),
          title: __("Insufficient Amount")
        });
      }
    }
  });

  // ../payment_integration_utils/payment_integration_utils/public/js/auth.js
  var AUTH_METHODS = {
    OTP_APP: "OTP App"
  };
  var AUTH_MODULE = "payment_integration_utils.payment_integration_utils.utils.auth";
  Object.assign(payment_integration_utils, {
    AUTH_METHODS,
    AUTH_MODULE,
    async authenticate_payment_entries(payment_entries, callback) {
      const get_otp_description = (generation_details2) => {
        if (generation_details2.setup)
          return __(generation_details2.prompt);
        return `<bold class='text-danger font-weight-bold'>
						${frappe.utils.icon("solid-error")} &nbsp;
						${__("There is some error! Please contact your Administrator.")}
					</bold>`;
      };
      if (typeof payment_entries === "string") {
        payment_entries = [payment_entries];
      }
      const generation_details = await this.generate_otp(payment_entries);
      if (!generation_details)
        return;
      const dialog = new frappe.ui.Dialog({
        title: __("Enter OTP"),
        fields: [
          {
            fieldname: "otp",
            label: __("OTP"),
            fieldtype: "Data",
            description: get_otp_description(generation_details),
            reqd: 1
          }
        ],
        minimizable: true,
        primary_action_label: __("Enter"),
        primary_action: async (values) => {
          const { verified, message } = await this.verify_otp(
            values.otp.trim(),
            generation_details.auth_id
          );
          if (verified) {
            dialog.hide();
            callback && callback(generation_details.auth_id);
            return;
          }
          const error = `<p class="text-danger font-weight-bold">
									${frappe.utils.icon("solid-error")} &nbsp;
									${__(message || "Invalid! Please try again.")}
								</p>`;
          const otp_field = dialog.get_field("otp");
          otp_field.set_new_description(error);
          setTimeout(() => {
            otp_field.set_new_description(otp_field.df.description);
          }, 3e3);
        }
      });
      dialog.show();
    },
    async generate_otp(payment_entries) {
      const response = await frappe.call({
        method: `${AUTH_MODULE}.generate_otp`,
        args: {
          payment_entries
        },
        freeze: true,
        freeze_message: __("Please wait...")
      });
      return response == null ? void 0 : response.message;
    },
    async verify_otp(otp, auth_id) {
      const response = await frappe.call({
        method: `${AUTH_MODULE}.verify_otp`,
        args: { otp, auth_id },
        freeze: true,
        freeze_message: __("Verifying OTP...")
      });
      return response == null ? void 0 : response.message;
    }
  });
})();
//# sourceMappingURL=payment_integration_utils.bundle.O23CRTLN.js.map
