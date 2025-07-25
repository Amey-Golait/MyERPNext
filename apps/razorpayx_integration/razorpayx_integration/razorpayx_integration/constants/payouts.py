from payment_integration_utils.payment_integration_utils.constants.enums import BaseEnum

### REGEX ###
DESCRIPTION_REGEX = r"^[a-zA-Z0-9\s]{1,30}$"

### OTHERS ###
STATUS_NOTIFICATION_METHOD = "send_rpx_payout_status_update"


### ENUMS ###
class PAYOUT_FROM(BaseEnum):
    CURRENT_ACCOUNT = "Current Account"
    RAZORPAYX_LITE = "RazorpayX Lite"


class CONTACT_TYPE(BaseEnum):
    """
    Default Contact Type available in RazorpayX.
    """

    EMPLOYEE = "employee"
    SUPPLIER = "vendor"
    CUSTOMER = "customer"
    SELF = "self"


class FUND_ACCOUNT_TYPE(BaseEnum):
    BANK_ACCOUNT = "bank_account"
    VPA = "vpa"
    # CARD = "card" # ! Not supported currently


class PAYOUT_CURRENCY(BaseEnum):
    INR = "INR"


class PAYOUT_PURPOSE(BaseEnum):
    """
    Default payout purpose available in RazorpayX.
    """

    REFUND = "refund"
    CASH_BACK = "cashback"
    PAYOUT = "payout"
    SALARY = "salary"
    UTILITY_BILL = "utility bill"
    VENDOR_BILL = "vendor bill"


class PAYOUT_STATUS(BaseEnum):
    """
    Reference:
    - https://razorpay.com/docs/x/payouts/states-life-cycle/#payout-states
    """

    # Custom Status
    NOT_INITIATED = "not initiated"

    # RazorpayX Payout Status
    PENDING = "pending"
    QUEUED = "queued"
    SCHEDULED = "scheduled"
    PROCESSING = "processing"
    PROCESSED = "processed"
    CANCELLED = "cancelled"
    REJECTED = "rejected"
    FAILED = "failed"
    REVERSED = "reversed"


class PAYOUT_LINK_STATUS(BaseEnum):
    """
    Reference:
    - https://razorpay.com/docs/x/payout-links/life-cycle/
    """

    # RazorpayX Payout Link Status
    PENDING = "pending"
    ISSUED = "issued"
    PROCESSING = "processing"
    PROCESSED = "processed"
    CANCELLED = "cancelled"
    REJECTED = "rejected"
    EXPIRED = "expired"


### MAPPINGS ###
PAYOUT_ORDERS = {
    PAYOUT_STATUS.NOT_INITIATED.value: 1,  # custom
    PAYOUT_STATUS.PENDING.value: 2,
    PAYOUT_STATUS.SCHEDULED.value: 2,
    PAYOUT_STATUS.QUEUED.value: 3,
    PAYOUT_STATUS.PROCESSING.value: 4,
    PAYOUT_STATUS.PROCESSED.value: 5,
    PAYOUT_STATUS.CANCELLED.value: 5,
    PAYOUT_STATUS.FAILED.value: 5,
    PAYOUT_STATUS.REJECTED.value: 5,
    PAYOUT_STATUS.REVERSED.value: 6,
}

PAYOUT_LINK_ORDERS = {
    PAYOUT_LINK_STATUS.PENDING.value: 1,
    PAYOUT_LINK_STATUS.ISSUED.value: 2,
    PAYOUT_LINK_STATUS.PROCESSING.value: 3,
    PAYOUT_LINK_STATUS.PROCESSED.value: 4,
    PAYOUT_LINK_STATUS.CANCELLED.value: 4,
    PAYOUT_LINK_STATUS.REJECTED.value: 4,
    PAYOUT_LINK_STATUS.EXPIRED.value: 4,
}

PAYOUT_PURPOSE_MAP = {
    "Supplier": PAYOUT_PURPOSE.VENDOR_BILL.value,
    "Customer": PAYOUT_PURPOSE.REFUND.value,
    "Employee": PAYOUT_PURPOSE.SALARY.value,
}

CONTACT_TYPE_MAP = {
    "Supplier": CONTACT_TYPE.SUPPLIER.value,
    "Customer": CONTACT_TYPE.CUSTOMER.value,
    "Employee": CONTACT_TYPE.EMPLOYEE.value,
}
