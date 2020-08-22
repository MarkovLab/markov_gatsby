import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Hidden, Typography, Container } from '@material-ui/core'

import Logo from 'assets/images/logos/ml-logo.svg'

import { LogoIcon } from 'components/LogoIcon'

import navbarStyle from 'assets/jss/components/navbarStyle'

import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

class Navbar extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="primary"
        id="navbar"
      >
        <Toolbar>
          <div className={classes.logo}>
            <LogoIcon /><Typography variant="h5" className={classes.logoText} >Markov Lab </Typography>
          </div>
          <Hidden smDown>
            <DesktopMenu />
        </Hidden>
        <Hidden mdUp>
          <MobileMenu />
        </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(navbarStyle)(Navbar)
