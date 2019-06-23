import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#212121',
      main: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: purple[900],
    },
  },
  typography: {
    fontFamily: "'Open Sans', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Hammersmith One'",
    },
    h2: {
      fontFamily: "'Hammersmith One'",
    },
    h3: {
      fontFamily: "'Hammersmith One'",
    },
    h4: {
      fontFamily: "'Hammersmith One'",
    },
    h5: {
      fontFamily: "'Hammersmith One'",
    },
    h6: {
      fontFamily: "'Hammersmith One'",
    },
    title: {
      fontFamily: "'Hammersmith One'",
    },
  },
  shape: {
    borderRadius: 0,
  },
})

const LandingLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </MuiThemeProvider>
    </>
  )
}

export default LandingLayout
