import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import { theme } from 'assets/jss/markov-lab-react.js'

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
