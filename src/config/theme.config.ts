export type ThemeConfig = {
  colors: {
    mintAccent: string
    mint: string
    gold: string
    sand: string
  }
  radius: {
    lg: string
    md: string
    sm: string
  }
  spacing: {
    sectionY: string
    containerX: string
  }
}

export const themeConfig: ThemeConfig = {
  colors: {
    mintAccent: '#4C9B86',
    mint: '#9FD4C3',
    gold: '#D6A85E',
    sand: '#F3EDE4',
  },
  radius: {
    lg: '24px',
    md: '16px',
    sm: '10px',
  },
  spacing: {
    sectionY: '5rem',
    containerX: '1.5rem',
  },
}
