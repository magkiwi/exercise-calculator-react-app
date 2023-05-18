import { type ThemeOptions } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import { createTheme } from '@mui/material'

export const themePalette = {
  palette: {
    primary: {
      main: '#08D9B6'
    },
    secondary: {
      main: '#d6d0b8'
    },
    success: {
      main: '#7dd87d'
    },
    error: {
      main: '#FF7777'
    },
    black: {
      main: '#0C0C18',
      contrastText: '#F4f9f4'
    }
  }
}

export const baseTheme: ThemeOptions = {
  palette: {
    ...themePalette.palette
  },
  shape: {
    borderRadius: 4
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700,
          fontSize: '28px'
        },
        h2: {
          fontWeight: 700,
          fontSize: '21px'
        },
        h3: {
          fontWeight: 400,
          fontSize: '16px'
        },
        h4: {
          fontWeight: 500,
          fontSize: '14px'
        },
        h5: {
          fontWeight: 300,
          fontSize: '13px'
        },
        h6: {
          fontWeight: 300,
          fontSize: '11px'
        },
        body2: {
          color: grey['600']
        },
        overline: {
          lineHeight: 1,
          textTransform: 'none'
        }
      }
    }
  }
}

export const theme = () => createTheme(baseTheme)

export const muiTheme = theme
