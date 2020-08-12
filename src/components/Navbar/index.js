import React from 'react'
import { Link as RouterLink } from 'gatsby'

import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Link, Container, Typography } from '@material-ui/core'

import Logo from 'assets/images/logos/ml-logo.svg'

import { LogoIcon, FullIcon } from 'components/LogoIcon'
import MLIcon from 'components/MLIcon'

import navbarStyle from 'assets/jss/components/navbarStyle'

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
          <Container maxWwidth="md">
            <div className={classes.logo}>
              <LogoIcon /><Typography variant="h5" className={classes.logoText} >Markov Lab </Typography>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(navbarStyle)(Navbar)
