// EmailJS Configuration
// Để setup EmailJS, bạn cần:
// 1. Đăng ký tại https://www.emailjs.com/
// 2. Tạo email service (Gmail, Outlook, etc.)
// 3. Tạo email template
// 4. Lấy Service ID, Template ID, và Public Key

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_acti85n', // Thay thế bằng Service ID thực tế
  TEMPLATE_ID: 'template_portfolio', // Thay thế bằng Template ID thực tế
  PUBLIC_KEY: 'AGJBpny_hD6PlyG_G', // Thay thế bằng Public Key thực tế
  
  // Template variables for EmailJS
  TEMPLATE_PARAMS: {
    from_name: '{{from_name}}',
    from_email: '{{from_email}}',
    subject: '{{subject}}',
    message: '{{message}}',
    to_email: 'mthat456@gmail.com',
    reply_to: '{{reply_to}}'
  }
}

/*
EmailJS Template example:
Subject: New Contact Form Message: {{subject}}

Hello,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Website
*/
