module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#1a202c", // gray-800 - Sophisticated foundation for focused reading
          50: "#f8fafc", // gray-50
          100: "#f1f5f9", // gray-100
          200: "#e2e8f0", // gray-200
          300: "#cbd5e0", // gray-300
          400: "#94a3b8", // gray-400
          500: "#64748b", // gray-500
          600: "#475569", // gray-600
          700: "#334155", // gray-700
          800: "#1e293b", // gray-800
          900: "#0f172a", // gray-900
        },
        secondary: {
          DEFAULT: "#2d3748", // gray-700 - Subtle content separation and depth
          50: "#f8fafc", // gray-50
          100: "#f1f5f9", // gray-100
          200: "#e2e8f0", // gray-200
          300: "#cbd5e0", // gray-300
          400: "#94a3b8", // gray-400
          500: "#64748b", // gray-500
          600: "#475569", // gray-600
          700: "#334155", // gray-700
          800: "#1e293b", // gray-800
          900: "#0f172a", // gray-900
        },
        accent: {
          DEFAULT: "#d4af37", // gold - Achievement highlights and primary actions
          50: "#fefce8", // yellow-50
          100: "#fef3c7", // yellow-100
          200: "#fde68a", // yellow-200
          300: "#fcd34d", // yellow-300
          400: "#fbbf24", // yellow-400
          500: "#f59e0b", // yellow-500
          600: "#d97706", // yellow-600
          700: "#b45309", // yellow-700
          800: "#92400e", // yellow-800
          900: "#78350f", // yellow-900
        },
        background: "#0f1419", // gray-900 - Deep canvas for premium positioning
        surface: "#374151", // gray-600 - Card backgrounds and content containers
        "text-primary": "#f7fafc", // gray-50 - Clear hierarchy for extended reading
        "text-secondary": "#cbd5e0", // gray-300 - Supporting information without competing
        success: "#10b981", // emerald-500 - Positive reinforcement for achievements
        warning: "#f59e0b", // amber-500 - Urgency for enrollment deadlines
        error: "#ef4444", // red-500 - Helpful guidance for form corrections
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'], // Headlines and accent text
        body: ['Inter', 'sans-serif'], // Body text and CTAs
        sans: ['Inter', 'sans-serif'], // Default sans-serif
        serif: ['Playfair Display', 'serif'], // Default serif
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'card': '0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'floating': '0 8px 25px -5px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-in-out',
        'slide-up': 'slideUp 400ms ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-smooth': {
          transition: 'all 300ms ease-in-out',
        },
        '.transition-quick': {
          transition: 'all 200ms ease-in-out',
        },
        '.transition-slow': {
          transition: 'all 400ms ease-in-out',
        },
        '.text-gradient': {
          background: 'linear-gradient(135deg, #d4af37, #b45309)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}