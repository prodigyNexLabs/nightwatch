import { alpha, createTheme } from '@mui/material/styles'
import { colors } from './colors'

declare module '@mui/material/styles' {
  interface Palette {
    surfaces: {
      base: string
      elevated: string
      dark: string
    }
  }

  interface PaletteOptions {
    surfaces?: {
      base: string
      elevated: string
      dark: string
    }
  }
}

const softShadow = '0 6px 18px rgba(28, 30, 31, 0.08)'
const calmShadow = '0 10px 24px rgba(28, 30, 31, 0.10)'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4C9B86',
      light: '#C6E6D8',
      dark: '#6FB8A5',
      contrastText: '#FAF6EF',
    },
    secondary: {
      main: '#D6A85E',
      light: '#E3C58A',
      dark: '#B8914E',
    },
    background: {
      default: '#FAF6EF',
      paper: '#F6F2E8',
    },
    text: {
      primary: '#1B1B1B',
      secondary: '#6F6F6F',
    },
    error: {
      main: '#D35C5C',
    },
    divider: '#9FA8A3',
    surfaces: {
      base: '#FAF6EF',
      elevated: '#F6F2E8',
      dark: '#1C1E1F',
    },
    action: {
      hover: alpha(colors.mintAccent, 0.08),
      focus: alpha(colors.mintAccent, 0.18),
      selected: alpha(colors.mintAccent, 0.14),
      disabledBackground: alpha(colors.charcoal, 0.12),
    },
  },
  typography: {
    fontFamily: 'Nunito, system-ui, sans-serif',
    h1: {
      fontSize: 44,
      fontWeight: 700,
      lineHeight: 1.15,
    },
    h2: {
      fontSize: 38,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.35,
    },
    h6: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.55,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 14,
          paddingInline: 18,
          minHeight: 44,
          transition: 'all 220ms ease',
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${alpha(colors.mintAccent, 0.3)}`,
          },
        },
        contained: {
          boxShadow: softShadow,
          '&:hover': {
            boxShadow: calmShadow,
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        outlined: {
          borderColor: alpha(colors.mintAccent, 0.45),
          '&:hover': {
            borderColor: colors.mintAccent,
            backgroundColor: alpha(colors.mintAccent, 0.06),
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          backgroundColor: colors.cream,
          boxShadow: calmShadow,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 14,
          backgroundColor: colors.cream,
          boxShadow: softShadow,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.sandUltraLight,
          color: colors.textPrimary,
          boxShadow: `0 2px 10px ${alpha(colors.charcoal, 0.06)}`,
          borderBottom: `1px solid ${alpha(colors.divider, 0.45)}`,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: colors.sandUltraLight,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(colors.divider, 0.8),
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(colors.mintAccent, 0.7),
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.mintAccent,
            borderWidth: 2,
          },
          '&.Mui-focused': {
            boxShadow: `0 0 0 3px ${alpha(colors.mintAccent, 0.18)}`,
          },
        },
        input: {
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: colors.cream,
          color: colors.textPrimary,
          border: `1px solid ${alpha(colors.divider, 0.5)}`,
        },
      },
    },

    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: colors.cream,
          borderTop: `1px solid ${alpha(colors.divider, 0.45)}`,
          boxShadow: `0 -4px 14px ${alpha(colors.charcoal, 0.06)}`,
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 44,
        },
        indicator: {
          height: 3,
          borderRadius: 999,
          backgroundColor: colors.mintAccent,
        },
      },
    },
  },
})

export default theme
