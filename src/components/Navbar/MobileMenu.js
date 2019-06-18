import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import Context from 'context'

const styles = theme => {
  return {
    list: {
      width: 250,
    },
    listItemText: {
      primaryTypographyProps: {
        fontFamily: theme.typography.title.fontFamily,
      },
    },
    drawer: {
      backgroundColor: 'gray',
    },
  }
}

class MobileMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  toggleDrawer = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    this.setState({ open: !this.state.open })
  }

  handleClick = (section, callBack) => () => {
    this.setState({ open: false })
    callBack(section)
  }

  render() {
    const { open } = this.state
    const { classes } = this.props
    return (
      <Context.Consumer>
        {({ section, setSection }) => (
          <>
            <IconButton color="secondary" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={open}
              onClose={this.toggleDrawer}
              onOpen={this.toggleDrawer}
            >
              <List className={classes.list}>
                <ListItem alignItems="center">
                  <ListItemText
                    primary="Home"
                    onClick={this.handleClick('header', setSection)}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="About"
                    onClick={this.handleClick('about', setSection)}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Challenges"
                    onClick={this.handleClick('challenges', setSection)}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="AI Solution"
                    onClick={this.handleClick('solution', setSection)}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Value"
                    onClick={this.handleClick('value', setSection)}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Request Demo"
                    onClick={this.handleClick('demo', setSection)}
                  />
                </ListItem>
              </List>
            </SwipeableDrawer>
          </>
        )}
      </Context.Consumer>
    )
  }
}

export default withStyles(styles)(MobileMenu)