import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import { Button } from '@material-ui/core'
import Context from 'context'

import MLButton from 'components/MLButton'

const styles = theme => ({
  menuLink: {
    textTransform: 'capitalize',
    fontFamily: theme.typography.title.fontFamily,
  },
})

class DesktopMenu extends Component {
  render() {
    const { classes } = this.props
    return (
      <Context.Consumer>
        {({ section, setSection }) => (
          <>
            <Button
              color="inherit"
              className={classes.menuLink}
              onClick={() => setSection('header')}
            >
              Home
            </Button>
            <Button
              color="inherit"
              className={classes.menuLink}
              onClick={() => setSection('about')}
            >
              About
            </Button>
            <Button
              color="inherit"
              className={classes.menuLink}
              onClick={() => setSection('challenges')}
            >
              Challenges
            </Button>
            <Button
              color="inherit"
              className={classes.menuLink}
              onClick={() => setSection('solution')}
            >
              AI Solution
            </Button>
            <Button
              color="inherit"
              className={classes.menuLink}
              onClick={() => setSection('value')}
            >
              Value
            </Button>
            <MLButton color="inherit" onClick={() => setSection('demo')}>
              Request Demo
            </MLButton>
          </>
        )}
      </Context.Consumer>
    )
  }
}

export default withStyles(styles)(DesktopMenu)
