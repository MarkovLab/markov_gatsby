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
    iconButton: {
      marginRight: 10,
    },
    list: {
      width: 300,
      paddingTop: 25,
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

    const primaryTypographyProps = {
      style: {
        fontFamily: 'Hammersmith One',
      },
    }

    return (
      <Context.Consumer>
        {({ section, setSection }) => (
          <>
            <IconButton
              color="secondary"
              onClick={this.toggleDrawer}
              className={classes.iconButton}
            >
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
                    primaryTypographyProps={primaryTypographyProps}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Mission"
                    onClick={this.handleClick('mission', setSection)}
                    primaryTypographyProps={primaryTypographyProps}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Challenges"
                    onClick={this.handleClick('challenges', setSection)}
                    primaryTypographyProps={primaryTypographyProps}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="AI Solution"
                    onClick={this.handleClick('solution', setSection)}
                    primaryTypographyProps={primaryTypographyProps}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Request Demo"
                    onClick={this.handleClick('demo', setSection)}
                    primaryTypographyProps={primaryTypographyProps}
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
