# Hướng dẫn Setup EmailJS cho Contact Form

## Bước 1: Đăng ký EmailJS
1. Truy cập https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí
3. Xác thực email

## Bước 2: Tạo Email Service
1. Vào Dashboard → Email Services
2. Chọn "Add New Service"
3. Chọn Gmail (hoặc email provider khác)
4. Đăng nhập Gmail và cấp quyền
5. Lưu Service ID (vd: service_xxxxxxx)

## Bước 3: Tạo Email Template
1. Vào Dashboard → Email Templates
2. Chọn "Create New Template"
3. Nhập Template ID: `template_portfolio`
4. Nhập nội dung template:

**Subject:** New Contact Form Message: {{subject}}

**Content:**
```
Hello,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

You can reply directly to: {{reply_to}}

Best regards,
Your Portfolio Website
```

## Bước 4: Lấy Public Key
1. Vào Dashboard → API Keys
2. Copy Public Key (vd: user_xxxxxxxxxxxxxxx)

## Bước 5: Cập nhật Config
Mở file `src/config/email.ts` và thay thế:
```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx', // Thay bằng Service ID thực tế
  TEMPLATE_ID: 'template_portfolio', // Giữ nguyên
  PUBLIC_KEY: 'user_xxxxxxxxxxxxxxx', // Thay bằng Public Key thực tế
  
  // Template variables - không cần thay đổi
  TEMPLATE_PARAMS: {
    from_name: '{{from_name}}',
    from_email: '{{from_email}}',
    subject: '{{subject}}',
    message: '{{message}}',
    to_email: 'mthat456@gmail.com',
    reply_to: '{{reply_to}}'
  }
}
```

## Bước 6: Test
1. Chạy website: `npm run dev`
2. Vào trang Contact
3. Điền form và gửi thử
4. Kiểm tra email mthat456@gmail.com

## Lưu ý:
- EmailJS miễn phí cho 200 email/tháng
- Hỗ trợ Gmail, Outlook, Yahoo, v.v.
- Có thể thêm reCAPTCHA để chống spam
- Template có thể tùy chỉnh HTML/CSS

## Troubleshooting:
- Nếu lỗi 403: Kiểm tra Public Key
- Nếu lỗi 404: Kiểm tra Service ID và Template ID
- Nếu không nhận được email: Kiểm tra thư mục spam
