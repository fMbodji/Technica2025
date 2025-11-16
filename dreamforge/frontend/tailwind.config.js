/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ═══════════════════════════════════════════════════════
        // BRAND COLORS (from logo - vibrant palette)
        // ═══════════════════════════════════════════════════════
        'dark-purple': '#522f5a',
        'light-purple': '#dcc0e3',
        'light-orange': '#e19b5a',
        'star-orange': '#f2ae18',

        // ═══════════════════════════════════════════════════════
        // NEUTRAL COLORS
        // ═══════════════════════════════════════════════════════
        'off-white': '#faf9f8',
        'light-gray': '#e8e6e3',
        'dark-gray': '#2d2d2d',

        // ═══════════════════════════════════════════════════════
        // EXPERTISE TIER ALIASES (for easy use in components)
        // ═══════════════════════════════════════════════════════
        'beginner-primary': '#f2ae18',
        'beginner-secondary': '#dcc0e3',
        'beginner-accent': '#e19b5a',
        'beginner-bg': '#faf9f8',

        'intermediate-primary': '#e19b5a',
        'intermediate-secondary': '#522f5a',
        'intermediate-accent': '#f2ae18',
        'intermediate-bg': '#ffffff',

        'advanced-primary': '#522f5a',
        'advanced-secondary': '#e19b5a',
        'advanced-accent': '#f2ae18',
        'advanced-bg': '#1a1a1a',

        // ═══════════════════════════════════════════════════════
        // SEMANTIC COLORS (UI feedback)
        // ═══════════════════════════════════════════════════════
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336',
        info: '#2196f3',

        // ═══════════════════════════════════════════════════════
        // ACHIEVEMENT BADGE COLORS
        // ═══════════════════════════════════════════════════════
        'badge-bronze': '#e19b5a',
        'badge-silver': '#dcc0e3',
        'badge-gold': '#f2ae18',
        'badge-platinum': '#522f5a'
      },
      fontFamily: {
        heading: ['Outfit', 'Space Grotesk', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
        code: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      fontSize: {
        // Age-based font sizing
        'age-6-13': '16px',
        'age-14-24': '14px',
        'age-25-54': '14px',
        'age-55-plus': '20px'
      },
      spacing: {
        // Additional spacing values for age-based layouts
        '18': '4.5rem',
        '22': '5.5rem'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(82, 47, 90, 0.08)',
        'medium': '0 4px 16px rgba(82, 47, 90, 0.12)',
        'strong': '0 8px 24px rgba(82, 47, 90, 0.16)',
        'glow-orange': '0 0 20px rgba(242, 174, 24, 0.3)',
        'glow-purple': '0 0 20px rgba(82, 47, 90, 0.3)'
      }
    }
  },
  plugins: []
}

