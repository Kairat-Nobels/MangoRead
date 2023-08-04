import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F3F3F3'
    },
    secondary: {
      main: '#2FE09B',
      forIcon: '#000000',
      forTab: '#AD02E0'
    },
    third: {
      main: '#AD02E0'
    }
  },
  typography: {
    htmlFontSize: 24,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 24,
    fontWeight: 400,
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 45,
      fontWeight: 400,
      lineHeight: '45px',
      color: '#000000'
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 35,
      fontWeight: 400,
      lineHeight: '43px',
      color: '#000000'
    },
    regular: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 24,
      fontWeight: 400,
      color: '#000000',
      lineHeight: '35px'
    },
    cardYear: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '17px',
      color: '#FFFFFF'
    },
    cardName: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '20px',
      color: '#FFFFFF'
    },
    error: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 16,
      fontWeight: 500,
      color: 'red'
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '20px',
      color: '#000000'
    }
  },
  breakpoints: {
    values: {
      lg: 1240
    }
  },
  spacing: 5
})
