import React from 'react'
import { Link as RouterLink } from 'gatsby'

import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Link,
  Hidden,
  Typography,
  useScrollTrigger,
  Slide,
} from '@material-ui/core'

import MLLogo from 'components/MLLogo'

import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

import NavbarStyles from 'assets/jss/components/NavbarStyles'

class Navbar extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <AppBar
        position="fixed"
        className={classes.appBar}
        id="navbar"
        color="primary"
      >
        <Toolbar>
          <div className={classes.grow}>
            <div className={classes.leftContainer}>
              <Link to="/" component={RouterLink} className={classes.logoLink}>
                <MLLogo />
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

export default withStyles(NavbarStyles)(Navbar)
