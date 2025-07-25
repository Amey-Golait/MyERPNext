# 🔐 Authentication for Making Payout

## ⚙️ Setup 2FA

1. Go to **System Settings** > **Login** tab.  
2. Scroll down to the **Payment Integration** section.  
3. Set the **Payment Authentication Method**.  
   - Currently, only **OTP App** is available.  
   - In future updates, **SMS** and **Email** will be supported.  
4. Optionally, set up an **OTP Issuer Name** (e.g., Company Name or Site Name).  

![System Settings](https://github.com/user-attachments/assets/eef415a5-b130-456c-913d-efffa669c783)

**Note**:  

- A default **Outgoing Email Account** is required to send emails for authentication.  
- The **Administrator** role **cannot** make payouts.  
- If the **Administrator** impersonates another user, they will see the **Make Payout** | **Pay and Submit** button but **cannot authenticate** to complete the payout.  

## 🔢 OTP Dialog Box

### First-Time OTP Generation

![OTP Dialog Box](https://github.com/user-attachments/assets/3fce9443-28ba-4980-976d-fcaea83e3dee)

### If OTP App already configured

![OTP Dialog Box](https://github.com/user-attachments/assets/242fabc2-009a-4257-86c0-0d266c11a124)

## 📧 Sample Emails

### Email for QR Code Link

![Email for Process](https://github.com/user-attachments/assets/f0d799bd-c55b-4d62-8b19-de4419bf82cf)

### After Scanning QR Code

![QR Code Page with Steps](https://github.com/user-attachments/assets/f69729e9-fb43-4a6e-adad-6e0320c64507)

## 🔄 Reset Payment OTP Secret

- **Prerequisites**:  
  - The user must have the **Online Payments Authorizer** role.  
  - The **Payment Authentication Method** must be set to **OTP App**.  

- **Steps**:  
  1. Go to **User** > **Password**.  
  2. Click on **Reset Payment OTP Secret**.  

![Reset OTP Secret](https://github.com/user-attachments/assets/a3cb040c-df71-408d-85f8-c03e8a26b7c4)