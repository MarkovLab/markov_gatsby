import React from 'react'
import { Link as RouterLink } from 'gatsby'

import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Link, Hidden } from '@material-ui/core'

import Logo from 'assets/images/logos/ml-logo.svg'

import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignSelf: 'center',
  },
  logo: {
    width: 170,
    alignSelf: 'center',
    margin: 0,
  },
})

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
          <div className={classes.grow}>
            <div className={classes.leftContainer}>
              <Link to="/" component={RouterLink} className={classes.logoLink}>
                <img src={Logo} className={classes.logo} alt="Markov Lab" />
              </Link>
            </div>
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

export default withStyles(styles)(Navbar)
