import React, { Component } from 'react'
import { Link as RouterLink } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'

import { Button, Menu, MenuItem, Link } from '@material-ui/core'
import Context from 'context'

import MLButton from 'components/MLButton'

import DesktopMenuStyles from 'assets/jss/components/DesktopMenuStyles'

class DesktopMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      anchorEl: null,
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    return (
      <>
        <Button
          color="inherit"
          className={classes.menuLink}
          component={RouterLink}
          to="/"
        >
          Home
        </Button>
        <Button
          color="inherit"
          className={classes.menuLink}
          onClick={this.handleClick}
        >
          About
        </Button>
        <Menu
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          getContentAnchorEl={null}
        >
          <Link
            to="/about/company/"
            component={RouterLink}
            className={classes.subMenuLink}
          >
            <MenuItem className={classes.subMenuText}>Company</MenuItem>
          </Link>
          <Link
            to="/about/team/"
            component={RouterLink}
            className={classes.subMenuLink}
          >
            <MenuItem className={classes.subMenuText}>Team</MenuItem>
          </Link>
          <Link
            to="/about/careers/"
            component={RouterLink}
            className={classes.subMenuLink}
          >
            <MenuItem className={classes.subMenuText}>Careers</MenuItem>
          </Link>
          <Link
            to="/about/contact/"
            component={RouterLink}
            className={classes.subMenuLink}
          >
            <MenuItem className={classes.subMenuText}>Contact</MenuItem>
          </Link>
        </Menu>
        <Button
          color="inherit"
          className={classes.menuLink}
          component={RouterLink}
          to="/technology/andrey"
        >
          Technology
        </Button>
        <Button
          color="inherit"
          className={classes.menuLink}
          component={RouterLink}
          to="/news/"
        >
          News
        </Button>
        <Button
          color="inherit"
          className={classes.menuLink}
          component={RouterLink}
          to="/blog/"
        >
          Blog
        </Button>
        <MLButton
          color="inherit"
          style={{
            marginLeft: 10,
          }}
          component={RouterLink}
          to="/#"
        >
          Login
        </MLButton>
      </>
    )
  }
}

export default withStyles(DesktopMenuStyles)(DesktopMenu)
