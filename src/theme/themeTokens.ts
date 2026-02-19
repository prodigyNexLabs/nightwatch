const hexToRgb = (hex: string) => {
  const normalized = hex.replace('#', '')
  const safeHex =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => `${char}${char}`)
          .join('')
      : normalized

  const value = Number.parseInt(safeHex, 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255

  return `${r} ${g} ${b}`
}

export const themeTokens = {
  brand: {
    name: 'Crozroad',
    website: 'https://www.crozroad.com',
  },
  mode: 'light',
  colors: {
    primary: '#4C9B86',
    primaryHover: '#3D8A76',
    secondary: '#D6A85E',
    accent: '#6FB8A5',
    background: '#FAF6EF',
    surface: '#F6F2E8',
    surfaceAlt: '#F0EBE0',
    textPrimary: '#1B1B1B',
    textSecondary: '#6F6F6F',
    textMuted: '#9FA8A3',
    border: '#9FA8A3',
    success: '#4C9B86',
    warning: '#D6A85E',
    danger: '#D35C5C',
    info: '#6FB8A5',
  },
  typography: {
    fontFamilyHeading: 'Nunito, system-ui, sans-serif',
    fontFamilyBody: 'Nunito, system-ui, sans-serif',
    h1: { size: '44px', weight: 700, lineHeight: 1.15 },
    h2: { size: '38px', weight: 700, lineHeight: 1.2 },
    h3: { size: '28px', weight: 700, lineHeight: 1.25 },
    h4: { size: '24px', weight: 700, lineHeight: 1.3 },
    bodyLg: { size: '18px', weight: 500, lineHeight: 1.6 },
    body: { size: '16px', weight: 500, lineHeight: 1.6 },
    caption: { size: '14px', weight: 500, lineHeight: 1.4 },
  },
  radius: {
    sm: '10px',
    md: '14px',
    lg: '18px',
    xl: '24px',
    pill: '999px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  shadow: {
    sm: '0 2px 8px rgba(15,23,42,0.06)',
    md: '0 8px 24px rgba(15,23,42,0.10)',
    lg: '0 16px 48px rgba(15,23,42,0.14)',
  },
  motion: {
    fast: '180ms',
    normal: '280ms',
    slow: '420ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },
  layout: {
    containerMax: '1280px',
    containerWide: '1440px',
    breakpoints: {
      mobile: '480px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      wide: '1536px',
      ultra: '2560px',
    },
  },
  assets: {
    logoIcon: 'banner_plain',
    logoWordmark: 'banner',
  },
} as const

export type ThemeTokens = typeof themeTokens

export const applyThemeTokens = (root: HTMLElement = document.documentElement) => {
  const { colors, typography, radius, spacing, shadow, motion, layout } = themeTokens

  root.style.setProperty('--crz-color-primary', colors.primary)
  root.style.setProperty('--crz-color-primary-rgb', hexToRgb(colors.primary))
  root.style.setProperty('--crz-color-primary-hover', colors.primaryHover)
  root.style.setProperty('--crz-color-primary-hover-rgb', hexToRgb(colors.primaryHover))

  root.style.setProperty('--crz-color-secondary', colors.secondary)
  root.style.setProperty('--crz-color-secondary-rgb', hexToRgb(colors.secondary))
  root.style.setProperty('--crz-color-accent', colors.accent)
  root.style.setProperty('--crz-color-accent-rgb', hexToRgb(colors.accent))

  root.style.setProperty('--crz-color-background', colors.background)
  root.style.setProperty('--crz-color-background-rgb', hexToRgb(colors.background))
  root.style.setProperty('--crz-color-surface', colors.surface)
  root.style.setProperty('--crz-color-surface-rgb', hexToRgb(colors.surface))
  root.style.setProperty('--crz-color-surface-alt', colors.surfaceAlt)
  root.style.setProperty('--crz-color-surface-alt-rgb', hexToRgb(colors.surfaceAlt))

  root.style.setProperty('--crz-color-text-primary', colors.textPrimary)
  root.style.setProperty('--crz-color-text-primary-rgb', hexToRgb(colors.textPrimary))
  root.style.setProperty('--crz-color-text-secondary', colors.textSecondary)
  root.style.setProperty('--crz-color-text-secondary-rgb', hexToRgb(colors.textSecondary))
  root.style.setProperty('--crz-color-text-muted', colors.textMuted)
  root.style.setProperty('--crz-color-text-muted-rgb', hexToRgb(colors.textMuted))

  root.style.setProperty('--crz-color-border', colors.border)
  root.style.setProperty('--crz-color-border-rgb', hexToRgb(colors.border))
  root.style.setProperty('--crz-color-success', colors.success)
  root.style.setProperty('--crz-color-success-rgb', hexToRgb(colors.success))
  root.style.setProperty('--crz-color-warning', colors.warning)
  root.style.setProperty('--crz-color-warning-rgb', hexToRgb(colors.warning))
  root.style.setProperty('--crz-color-danger', colors.danger)
  root.style.setProperty('--crz-color-danger-rgb', hexToRgb(colors.danger))
  root.style.setProperty('--crz-color-info', colors.info)
  root.style.setProperty('--crz-color-info-rgb', hexToRgb(colors.info))

  root.style.setProperty('--crz-font-heading', typography.fontFamilyHeading)
  root.style.setProperty('--crz-font-body', typography.fontFamilyBody)

  root.style.setProperty('--crz-h1-size', typography.h1.size)
  root.style.setProperty('--crz-h1-weight', String(typography.h1.weight))
  root.style.setProperty('--crz-h1-line-height', String(typography.h1.lineHeight))
  root.style.setProperty('--crz-h2-size', typography.h2.size)
  root.style.setProperty('--crz-h2-weight', String(typography.h2.weight))
  root.style.setProperty('--crz-h2-line-height', String(typography.h2.lineHeight))
  root.style.setProperty('--crz-h3-size', typography.h3.size)
  root.style.setProperty('--crz-h3-weight', String(typography.h3.weight))
  root.style.setProperty('--crz-h3-line-height', String(typography.h3.lineHeight))
  root.style.setProperty('--crz-h4-size', typography.h4.size)
  root.style.setProperty('--crz-h4-weight', String(typography.h4.weight))
  root.style.setProperty('--crz-h4-line-height', String(typography.h4.lineHeight))

  root.style.setProperty('--crz-body-lg-size', typography.bodyLg.size)
  root.style.setProperty('--crz-body-lg-weight', String(typography.bodyLg.weight))
  root.style.setProperty('--crz-body-lg-line-height', String(typography.bodyLg.lineHeight))
  root.style.setProperty('--crz-body-size', typography.body.size)
  root.style.setProperty('--crz-body-weight', String(typography.body.weight))
  root.style.setProperty('--crz-body-line-height', String(typography.body.lineHeight))
  root.style.setProperty('--crz-caption-size', typography.caption.size)
  root.style.setProperty('--crz-caption-weight', String(typography.caption.weight))
  root.style.setProperty('--crz-caption-line-height', String(typography.caption.lineHeight))

  root.style.setProperty('--crz-radius-sm', radius.sm)
  root.style.setProperty('--crz-radius-md', radius.md)
  root.style.setProperty('--crz-radius-lg', radius.lg)
  root.style.setProperty('--crz-radius-xl', radius.xl)
  root.style.setProperty('--crz-radius-pill', radius.pill)

  root.style.setProperty('--crz-space-xs', spacing.xs)
  root.style.setProperty('--crz-space-sm', spacing.sm)
  root.style.setProperty('--crz-space-md', spacing.md)
  root.style.setProperty('--crz-space-lg', spacing.lg)
  root.style.setProperty('--crz-space-xl', spacing.xl)
  root.style.setProperty('--crz-space-2xl', spacing['2xl'])
  root.style.setProperty('--crz-space-3xl', spacing['3xl'])

  root.style.setProperty('--crz-shadow-sm', shadow.sm)
  root.style.setProperty('--crz-shadow-md', shadow.md)
  root.style.setProperty('--crz-shadow-lg', shadow.lg)

  root.style.setProperty('--crz-motion-fast', motion.fast)
  root.style.setProperty('--crz-motion-normal', motion.normal)
  root.style.setProperty('--crz-motion-slow', motion.slow)
  root.style.setProperty('--crz-motion-easing', motion.easing)

  root.style.setProperty('--crz-layout-container-max', layout.containerMax)
  root.style.setProperty('--crz-layout-container-wide', layout.containerWide)
  root.style.setProperty('--crz-breakpoint-mobile', layout.breakpoints.mobile)
  root.style.setProperty('--crz-breakpoint-tablet', layout.breakpoints.tablet)
  root.style.setProperty('--crz-breakpoint-laptop', layout.breakpoints.laptop)
  root.style.setProperty('--crz-breakpoint-desktop', layout.breakpoints.desktop)
  root.style.setProperty('--crz-breakpoint-wide', layout.breakpoints.wide)
  root.style.setProperty('--crz-breakpoint-ultra', layout.breakpoints.ultra)

  root.dataset.theme = themeTokens.mode
}
