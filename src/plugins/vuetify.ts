// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#106EBE',      // Xanh lam đậm (tiêu đề, nút chính, link)
          secondary: '#0FFCBE',    // Bạc hà sáng (accent, nút phụ, điểm nhấn)
          accent: '#34D399',       // Xanh lá nhạt (thông báo tích cực)
          text: '#1F2937',         // Xám đen (văn bản chính)
          subtext: '#6B7280',      // Xám trung bình (mô tả, chi tiết nhỏ)
          background: '#F9FAFB',   // Trắng tinh hoặc xám nhạt (nền trang)
          section: '#E6FFFA',      // Xanh bạc hà nhạt (phân tách section)
          divider: '#E5E7EB',      // Xám nhạt (viền, phân cách)
          hover: '#0C5AA0',        // Xanh lam đậm hơn (khi rê chuột)
          error: '#FF5722',
          info: '#106EBE',
          success: '#34D399',
          warning: '#FFC107',
          surface: '#FFFFFF',
        },
      },
      dark: {
        colors: {
          primary: '#0FFCBE',
          secondary: '#106EBE',
          accent: '#34D399',
          text: '#E5E7EB',
          subtext: '#9CA3AF',
          background: '#1F2937',
          section: '#374151',
          divider: '#4B5563',
          hover: '#0C5AA0',
        },
      },
    },
  },
})
