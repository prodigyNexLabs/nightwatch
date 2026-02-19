import type { Config } from 'tailwindcss'
import { themeTokens } from './src/theme/themeTokens'

const tokenColor = (name: string) => `rgb(var(${name}) / <alpha-value>)`

const {
  breakpoints,
  containerMax,
  containerWide,
} = themeTokens.layout

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: breakpoints.mobile,
      sm: breakpoints.tablet,
      md: breakpoints.laptop,
      lg: breakpoints.desktop,
      xl: breakpoints.wide,
      '2xl': breakpoints.ultra,
    },
    extend: {
      colors: {
        crz: {
          primary: tokenColor('--crz-color-primary-rgb'),
          primaryHover: tokenColor('--crz-color-primary-hover-rgb'),
          secondary: tokenColor('--crz-color-secondary-rgb'),
          accent: tokenColor('--crz-color-accent-rgb'),
          text: tokenColor('--crz-color-text-primary-rgb'),
          softText: tokenColor('--crz-color-text-secondary-rgb'),
          mutedText: tokenColor('--crz-color-text-muted-rgb'),
          bg: tokenColor('--crz-color-background-rgb'),
          surface: tokenColor('--crz-color-surface-rgb'),
          surfaceAlt: tokenColor('--crz-color-surface-alt-rgb'),
          outline: tokenColor('--crz-color-border-rgb'),
          success: tokenColor('--crz-color-success-rgb'),
          warning: tokenColor('--crz-color-warning-rgb'),
          error: tokenColor('--crz-color-danger-rgb'),
          info: tokenColor('--crz-color-info-rgb'),
        },
      },
      fontFamily: {
        sans: ['var(--crz-font-body)', 'Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--crz-font-heading)', 'Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: 'var(--crz-shadow-sm)',
        card: 'var(--crz-shadow-md)',
        glow: 'var(--crz-shadow-lg)',
      },
      borderRadius: {
        sm: 'var(--crz-radius-sm)',
        md: 'var(--crz-radius-md)',
        lg: 'var(--crz-radius-lg)',
        xl: 'var(--crz-radius-xl)',
        pill: 'var(--crz-radius-pill)',
      },
      maxWidth: {
        container: containerMax,
        wide: containerWide,
      },
      transitionDuration: {
        fast: 'var(--crz-motion-fast)',
        normal: 'var(--crz-motion-normal)',
        slow: 'var(--crz-motion-slow)',
      },
      transitionTimingFunction: {
        standard: 'var(--crz-motion-easing)',
      },
      spacing: {
        xs: 'var(--crz-space-xs)',
        sm: 'var(--crz-space-sm)',
        md: 'var(--crz-space-md)',
        lg: 'var(--crz-space-lg)',
        xl: 'var(--crz-space-xl)',
        '2xl': 'var(--crz-space-2xl)',
        '3xl': 'var(--crz-space-3xl)',
      },
    },
  },
  plugins: [],
} satisfies Config
