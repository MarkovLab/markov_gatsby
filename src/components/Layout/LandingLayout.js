import React, { Component } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'

import Navbar from 'components/Navbar'
import { FullFooter as Footer } from 'components/Footer'

import { theme } from 'assets/jss/markov-lab-react.js'

class LandingLayout extends Component {
  state = {
    navbarHeight: 0,
  }

  componentDidMount() {
    const navBar = document.getElementById('navbar')

    this.setState({
      navbarHeight: navBar.offsetHeight,
    })
  }

  render() {
    const { children } = this.props
    const { navbarHeight } = this.state
    return (
      <>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <main style={{ marginTop: 0 }}>{children}</main>
          <Footer />
        </MuiThemeProvider>
      </>
    )
  }
}

export default LandingLayout
