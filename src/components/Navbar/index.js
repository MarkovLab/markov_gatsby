import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Hidden, Typography } from '@material-ui/core'

import { LogoIcon } from 'components/LogoIcon'

import navbarStyle from 'assets/jss/components/navbarStyle'

import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { top: 0 }
    this.detectScroll = this.detectScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.detectScroll)
  }

  detectScroll() {
    this.setState({
      top: window.pageYOffset
    })
  }

  render() {
    const { top } = this.state
    const { classes } = this.props

    const appBarClass = classNames(
      classes.appBar,
      {
        [classes.transparent]: top < 60
      }
    )

    return (
      <AppBar
        position="fixed"
        className={appBarClass}
        color="primary"
        id="navbar"
      >
        <Toolbar>
          <Link to="/" className={classNames(classes.logo, classes.link)}>
            <LogoIcon /><Typography variant="h5" className={classes.logoText} >Markov Lab </Typography>
          </Link>
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
